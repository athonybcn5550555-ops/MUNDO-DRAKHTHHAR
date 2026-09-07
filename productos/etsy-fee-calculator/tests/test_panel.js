const { chromium } = require('playwright');
const URL='file:///home/user/MUNDO-DRAKHTHHAR/productos/etsy-fee-calculator/index.html';
let fails=0; const ok=(c,m,x='')=>{ console.log((c?'PASS ':'FAIL ')+m+(x?'  ['+x+']':'')); if(!c) fails++; };
(async () => {
  const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox'] });
  const page = await b.newPage({ viewport:{width:1280,height:900}, locale:'es-ES' });
  const errs=[]; page.on('pageerror',e=>errs.push(e.message)); page.on('console',m=>{ if(m.type()==='error') errs.push(m.text()); });
  await page.addInitScript(()=>{
    const spoken=[]; window.__spoken=spoken; let cur=null, timer=null;
    const V=[{lang:'es-ES',name:'es'},{lang:'en-US',name:'en'}];
    const mock={ speaking:false, paused:false, pending:false, getVoices:()=>V,
      speak(u){ this.speaking=true; this.paused=false; cur=u; spoken.push(u.text);
        timer=setTimeout(()=>{ if(cur===u&&!this.paused){ this.speaking=false; u.onend&&u.onend(); } },120); },
      pause(){ this.paused=true; clearTimeout(timer); },
      resume(){ if(this.paused&&cur){ this.paused=false; const u=cur; timer=setTimeout(()=>{ if(cur===u){ this.speaking=false; u.onend&&u.onend(); } },120); } },
      cancel(){ this.speaking=false; this.paused=false; cur=null; clearTimeout(timer); } };
    Object.defineProperty(window,'speechSynthesis',{value:mock,configurable:true,writable:true});
    Object.defineProperty(window,'SpeechSynthesisUtterance',{configurable:true,writable:true,
      value:function(t){ this.text=t; this.lang=''; this.rate=1; this.voice=null; }});
  });
  await page.goto(URL); await page.click('#btnGuideClose');
  await page.click('#btnManual');
  ok(await page.locator('#manual').isVisible(),'el manual se abre como panel');
  ok(await page.locator('#btnManPause').isHidden() && await page.locator('#btnManStop').isHidden(),'sin leer no se ven pausa ni parar');
  // no bloquea la app
  await page.locator('.product input[data-k=price]').first().fill('31');
  ok((await page.evaluate(()=>window.__calc.state().products[0].price))===31,'se puede usar la calculadora con el manual abierto');
  const box = await page.locator('#manual').boundingBox();
  ok(box.x > 640,'el panel está a la derecha, no encima', 'x='+Math.round(box.x));
  ok(!(await page.evaluate(()=>!!document.querySelector('#manual.overlay'))),'sin fondo oscuro que bloquee');
  // minimizar
  await page.click('#btnManMin');
  const small = await page.locator('#manual').boundingBox();
  ok(small.height < box.height/2,'minimizado ocupa mucho menos', Math.round(box.height)+' -> '+Math.round(small.height));
  ok(await page.locator('#manBody').isHidden(),'el texto se oculta al minimizar');
  ok(await page.locator('.product input[data-k=price]').first().isVisible(),'la app queda despejada');
  // sigue leyendo minimizado
  await page.click('#btnManListen'); await page.waitForTimeout(260);
  ok((await page.evaluate(()=>window.__spoken.length))>0,'lee estando minimizado');
  ok(await page.locator('#manNow').isVisible(),'muestra qué sección está leyendo', (await page.textContent('#manNow')).slice(0,40));
  // pausa
  await page.click('#btnManPause'); const n1=await page.evaluate(()=>window.__spoken.length);
  await page.waitForTimeout(400); const n2=await page.evaluate(()=>window.__spoken.length);
  ok(n1===n2,'la pausa detiene la lectura', n1+' -> '+n2);
  ok((await page.textContent('#btnManPause'))==='▶','el botón cambia a continuar');
  await page.click('#btnManPause'); await page.waitForTimeout(400);
  ok((await page.evaluate(()=>window.__spoken.length))>n2,'continuar reanuda la lectura');
  ok((await page.textContent('#btnManPause'))==='⏸','el botón vuelve a pausa');
  // parar
  await page.waitForTimeout(500); await page.click('#btnManStop'); await page.waitForTimeout(300);
  const st=await page.evaluate(()=>({listen:document.getElementById('btnManListen').hidden,pause:document.getElementById('btnManPause').hidden,stop:document.getElementById('btnManStop').hidden,q:!!window.__calc, box:JSON.stringify(document.getElementById('btnManListen').getBoundingClientRect()), disp:getComputedStyle(document.getElementById('btnManListen')).display, vis:getComputedStyle(document.getElementById('btnManListen')).visibility, panel:document.getElementById('manual').className}));
  const vL=await page.locator('#btnManListen').isVisible(), hP=await page.locator('#btnManPause').isHidden();
  ok(vL && hP,'al parar solo queda Escuchar', 'listenVisible='+vL+' pauseHidden='+hP);
  ok(!(await page.locator('#manNow').isVisible()),'se limpia el indicador de sección');
  // recordar minimizado
  await page.reload(); await page.click('#btnManual');
  ok(await page.evaluate(()=>document.getElementById('manual').classList.contains('min')),'recuerda que estaba minimizado');
  await page.click('#btnManMin');
  ok(!(await page.evaluate(()=>document.getElementById('manual').classList.contains('min'))),'se puede volver a ampliar');
  // respaldo si el navegador no reanuda
  await page.evaluate(()=>{ window.speechSynthesis.resume=function(){ this.paused=true; }; });
  await page.click('#btnManListen'); await page.waitForTimeout(200); await page.click('#btnManPause');
  const n3=await page.evaluate(()=>window.__spoken.length);
  await page.click('#btnManPause'); await page.waitForTimeout(800);
  ok((await page.evaluate(()=>window.__spoken.length))>n3,'si el navegador no reanuda, relee desde la frase actual');
  await page.click('#btnManStop');
  // móvil
  await page.setViewportSize({width:360,height:720});
  const mb=await page.locator('#manual').boundingBox();
  ok(mb.width<=360 && mb.x>=0,'en móvil el panel cabe en pantalla', Math.round(mb.width)+'px');
  ok((await page.evaluate(()=>document.documentElement.scrollWidth))===360,'sin scroll horizontal');
  ok(errs.length===0,'sin errores de consola', errs.join(' | '));
  await b.close(); console.log('\nFALLOS:',fails); process.exit(fails?1:0);
})();
