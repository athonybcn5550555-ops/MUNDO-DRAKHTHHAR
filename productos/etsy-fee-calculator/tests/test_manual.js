const { chromium } = require('playwright');
const URL='file:///home/user/MUNDO-DRAKHTHHAR/productos/etsy-fee-calculator/index.html';
let fails=0; const ok=(c,m,x='')=>{ console.log((c?'PASS ':'FAIL ')+m+(x?'  ['+x+']':'')); if(!c) fails++; };
(async () => {
  const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox'] });
  const page = await b.newPage({ viewport:{width:1200,height:900}, locale:'es-ES' });
  const errs=[]; page.on('pageerror',e=>errs.push(e.message)); page.on('console',m=>{ if(m.type()==='error') errs.push(m.text()); });
  // simular voces del sistema, que este entorno no tiene
  await page.addInitScript(()=>{
    const spoken=[]; window.__spoken=spoken; let cur=null;
    const V=[{lang:'es-ES',name:'es'},{lang:'en-US',name:'en'},{lang:'fr-FR',name:'fr'},{lang:'de-DE',name:'de'},{lang:'it-IT',name:'it'}];
    const mock = { speaking:false, pending:false, getVoices:()=>V,
      speak(u){ this.speaking=true; cur=u; spoken.push({text:u.text, lang:u.lang, voice:u.voice&&u.voice.name});
        setTimeout(()=>{ if(cur===u){ this.speaking=false; u.onend&&u.onend(); } }, 80); },
      cancel(){ this.speaking=false; cur=null; } };
    Object.defineProperty(window,'speechSynthesis',{value:mock, configurable:true, writable:true});
    Object.defineProperty(window,'SpeechSynthesisUtterance',{configurable:true, writable:true,
      value: function(t){ this.text=t; this.lang=''; this.rate=1; this.voice=null; }});
  });
  await page.goto(URL); await page.click('#btnGuideClose');
  ok(await page.locator('#btnManual').isVisible(),'botón de manual visible','"'+await page.textContent('#btnManual')+'"');
  await page.click('#btnManual');
  ok(await page.locator('#manual').isVisible(),'el manual se abre');
  const secs = await page.locator('#manBody .msec').count();
  const paras = await page.locator('#manBody .msec p').count();
  ok(secs===9,'9 secciones', String(secs)); ok(paras>=40,'párrafos renderizados', String(paras));
  ok((await page.textContent('#manBody')).includes('Offsite Ads'),'contenido en español presente');
  // idiomas
  for (const [l,frag] of [['en','What this app does'],['fr','Comprendre chaque frais'],['de','Jede Gebühr verstehen'],['it','Il trova prezzo'],['es','El buscador de precio']]) {
    await page.selectOption('#lang',l);
    ok((await page.textContent('#manBody')).includes(frag),'manual en '+l, frag);
    ok((await page.locator('#manBody .msec').count())===9,'9 secciones en '+l);
  }
  await page.selectOption('#lang','es');
  // lectura completa
  await page.click('#btnManListen'); await page.waitForTimeout(500);
  let sp = await page.evaluate(()=>window.__spoken);
  ok(sp.length>3,'lee varias frases seguidas', sp.length+' locuciones');
  ok(sp[0].lang==='es-ES' && sp[0].voice==='es','usa la voz del idioma seleccionado', sp[0].lang+'/'+sp[0].voice);
  ok(await page.locator('#btnManStop').isVisible(),'aparece el botón de parar');
  ok((await page.locator('#manBody .reading').count())>0,'resalta lo que está leyendo');
  await page.click('#btnManStop'); await page.waitForTimeout(200);
  ok((await page.locator('#manBody .reading').count())===0,'al parar se quita el resaltado');
  ok(await page.locator('#btnManListen').isVisible(),'vuelve el botón de escuchar');
  // sección concreta
  await page.evaluate(()=>window.__spoken.length=0);
  await page.locator('#manBody button[data-sec]').nth(4).click(); await page.waitForTimeout(200);
  sp = await page.evaluate(()=>window.__spoken);
  ok(sp.length>0 && sp[0].text.includes('buscador'),'escuchar una sección concreta empieza por ella', sp[0]?sp[0].text.slice(0,40):'-');
  // cambiar idioma mientras lee: para y traduce
  await page.locator('#manBody button[data-sec]').nth(0).click(); await page.waitForTimeout(150);
  await page.selectOption('#lang','de'); await page.waitForTimeout(200);
  ok((await page.locator('#manBody .reading').count())===0,'cambiar de idioma detiene la lectura');
  ok((await page.textContent('#manBody')).includes('Was diese Anwendung macht'),'y el manual cambia de idioma');
  await page.selectOption('#lang','es');
  // cerrar con Escape detiene
  await page.click('#btnManListen'); await page.waitForTimeout(150);
  await page.keyboard.press('Escape'); await page.waitForTimeout(150);
  ok(await page.locator('#manual').isHidden(),'Escape cierra el manual');
  ok(await page.evaluate(()=>!window.speechSynthesis.speaking),'y detiene la voz');
  // la app sigue funcionando
  await page.locator('.product input[data-k=price]').first().fill('25');
  ok(/\d/.test(await page.locator('.product [data-r=profit]').first().textContent()),'la calculadora sigue funcionando');
  // móvil
  await page.setViewportSize({width:360,height:720}); await page.click('#btnManual');
  ok(await page.locator('#btnManClose').isVisible(),'en móvil el botón de cerrar es accesible');
  ok((await page.evaluate(()=>document.documentElement.scrollWidth))===360,'sin scroll horizontal en móvil');
  ok(errs.length===0,'sin errores de consola', errs.join(' | '));
  await b.close(); console.log('\nFALLOS:',fails); process.exit(fails?1:0);
})();
