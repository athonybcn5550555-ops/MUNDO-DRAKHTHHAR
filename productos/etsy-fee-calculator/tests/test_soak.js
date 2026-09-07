const { chromium } = require('playwright'); const fs=require('fs'); const path=require('path');
const URL='file:///home/user/MUNDO-DRAKHTHHAR/productos/etsy-fee-calculator/index.html';
let fails=0; const issues=[]; const ok=(c,m,x='')=>{ if(!c){ fails++; issues.push(m+(x?' ['+x+']':'')); console.log('FAIL '+m+(x?'  ['+x+']':'')); } };
let seed=42; const rnd=()=>{ seed=(seed*9301+49297)%233280; return seed/233280; }; const pick=a=>a[Math.floor(rnd()*a.length)];
// implementación independiente del cálculo (para contrastar)
function refCalc(S,p){ const ship=p.digital?0:p.ship; const total=p.price+ship; const listing=S.listing, trans=total*S.trans/100, proc=total*S.proc/100+S.procfix, reg=total*S.reg/100, conv=S.convOn?total*S.conv/100:0, off=S.offsite==='none'?0:Math.min(total*parseFloat(S.offsite)/100,S.offcap), ads=S.etsyads; const sub=listing+trans+proc+reg+conv+off+ads; const vat=S.vatOn?sub*S.vat/100:0; const fees=sub+vat; const costs=p.mat+p.hours*S.hourly+(p.digital?0:p.pack+p.shipcost+p.pod)+p.over; return {fees, profit: total-fees-costs}; }
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args:['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport:{width:1280,height:900}, locale:'es-ES', acceptDownloads:true });
  const page = await ctx.newPage(); const errors=[]; page.on('pageerror',e=>errors.push('day?: '+e.message)); page.on('console',m=>{ if(m.type()==='error') errors.push(m.text()); });
  await page.addInitScript(()=>{ window.__printed=0; window.print=()=>{ window.__printed++; }; });
  await page.goto(URL); await page.click('#btnGuideClose');
  const S=()=>page.evaluate(()=>JSON.parse(JSON.stringify(window.__calc.state())));
  const noNaN=async(where)=>{ const t=await page.evaluate(()=>document.body.innerText); ok(!/NaN|Infinity|undefined|null/.test(t),'texto NaN/undefined en pantalla',where); };
  // --- 1. todos los botones y controles, uno por uno
  const buttons=await page.$$eval('button',bs=>bs.map(b=>b.id||b.dataset.a||b.textContent.trim()));
  console.log('Botones encontrados:', buttons.join(' · '));
  await page.click('#btnGuide'); ok(await page.locator('#guide').isVisible(),'btnGuide abre la guía'); await page.click('#btnGuideClose'); ok(await page.locator('#guide').isHidden(),'btnGuideClose cierra');
  await page.click('#btnPrint'); ok((await page.evaluate(()=>window.__printed))===1,'btnPrint llama a imprimir');
  const [d1]=await Promise.all([page.waitForEvent('download'),page.click('#btnExport')]); ok((await d1.suggestedFilename()).endsWith('.json'),'btnExport descarga json');
  const [d2]=await Promise.all([page.waitForEvent('download'),page.click('#btnCsv')]); ok((await d2.suggestedFilename()).endsWith('.csv'),'btnCsv descarga csv');
  const [fc]=await Promise.all([page.waitForEvent('filechooser'),page.click('#btnImport')]); ok(!!fc,'btnImport abre selector de archivo'); const bk=path.join(__dirname,'soak-bk.json'); await d1.saveAs(bk); await fc.setFiles(bk);
  await page.click('#btnAdd'); ok((await S()).products.length===2,'btnAdd añade');
  await page.locator('.product button[data-a=dup]').first().click(); ok((await S()).products.length===3,'duplicar añade copia');
  await page.locator('.product button[data-a=del]').last().click(); ok((await S()).products.length===2,'eliminar quita');
  for (const [id,val,key] of [['cur','kr','cur'],['feeDate','2026-10-01','feeDate'],['hourly','22','hourly'],['f_listing','0.3','listing'],['f_trans','7','trans'],['f_proc','3.5','proc'],['f_procfix','0.4','procfix'],['f_reg','1','reg'],['f_conv','3','conv'],['f_offcap','90','offcap'],['f_etsyads','1.5','etsyads'],['f_vat','19','vat']]) { await page.fill('#'+id,val); const st=await S(); ok(String(st[key])===String(isNaN(val)?val:parseFloat(val)),'campo '+id+' enlazado al estado',String(st[key])); }
  await page.check('#vatOn'); ok((await S()).vatOn===true,'vatOn'); await page.check('#convOn'); ok((await S()).convOn===true,'convOn');
  for (const v of ['15','12','none']) { await page.selectOption('#offsite',v); ok((await S()).offsite===v,'offsite '+v); }
  for (const c of Object.keys({US:1,ES:1,FR:1,IT:1,DE:1,EU:1,UK:1,CA:1,AU:1,XX:1})) { await page.selectOption('#country',c); ok((await S()).country===c,'país '+c); await noNaN('país '+c); }
  for (const l of ['en','fr','de','it','es']) { await page.selectOption('#lang',l); ok((await S()).lang===l,'idioma '+l); await noNaN('idioma '+l); }
  const card=page.locator('.product').first();
  for (const k of ['price','ship','mat','hours','pack','shipcost','pod','over']) { await card.locator(`input[data-k=${k}]`).fill('3.25'); ok((await S()).products[0][k]===3.25,'campo de producto '+k); }
  await card.locator('input[data-k=name]').fill('Nombre X'); ok((await S()).products[0].name==='Nombre X','nombre de producto');
  await card.locator('input[data-k=digital]').check(); ok((await S()).products[0].digital===true,'digital'); await card.locator('input[data-k=digital]').uncheck();
  await card.locator('summary').click(); ok(await card.locator('.breakdown').isVisible(),'desglose se abre');
  for (const m of ['amount','margin']) { await page.selectOption('#rvMode',m); await page.fill('#rvTarget', m==='amount'?'5':'30'); await page.fill('#rvGoal','300'); ok(/\d/.test(await page.textContent('#rvPrice')),'buscador modo '+m); }
  await page.selectOption('#rvProduct',{index:1}); ok(true,'buscador cambia de producto');
  await noNaN('tras controles');
  // --- 2. simulación de 120 días
  await page.selectOption('#lang','es'); await page.selectOption('#country','ES');
  const countries=['ES','US','FR','DE','IT','UK']; const langs=['es','en','fr','de','it']; let lastBackup=null; const perf=[];
  for (let day=1; day<=120; day++) {
    const actions=2+Math.floor(rnd()*5);
    for (let a=0;a<actions;a++) {
      const st=await S(); const nP=st.products.length; const r=rnd();
      const t0=Date.now();
      if (r<0.22 && nP<60) { await page.click('#btnAdd'); await page.locator('.product').last().locator('input[data-k=name]').fill('Producto d'+day+'-'+a); }
      else if (r<0.55) { const i=Math.floor(rnd()*nP); const c=page.locator('.product').nth(i); const k=pick(st.products[i].digital?['price','mat','hours','over']:['price','mat','hours','ship','pack','over','pod','shipcost']); const v=pick(['9.99','14','19,5','25','0','3','1.234,50','abc','','-4','49.90','0.25']); await c.locator(`input[data-k=${k}]`).fill(v); }
      else if (r<0.63 && nP>1) { await page.locator('.product').nth(Math.floor(rnd()*nP)).locator('button[data-a=del]').click(); }
      else if (r<0.70) { await page.locator('.product').nth(Math.floor(rnd()*nP)).locator('button[data-a=dup]').click(); }
      else if (r<0.76) { const c=page.locator('.product').nth(Math.floor(rnd()*nP)); const box=c.locator('input[data-k=digital]'); if(rnd()<0.5) await box.check(); else await box.uncheck(); }
      else if (r<0.82) { await page.selectOption('#offsite',pick(['none','15','12'])); if(rnd()<0.3){ if(rnd()<0.5) await page.check('#vatOn'); else await page.uncheck('#vatOn'); } }
      else if (r<0.86) { await page.selectOption('#country',pick(countries)); }
      else if (r<0.90) { await page.selectOption('#lang',pick(langs)); }
      else { await page.selectOption('#rvProduct',{index:Math.floor(rnd()*nP)}); await page.selectOption('#rvMode',pick(['amount','margin'])); await page.fill('#rvTarget',pick(['5','12','30','60','95','200'])); }
      perf.push(Date.now()-t0);
    }
    // contraste con el cálculo independiente en todos los productos
    const st=await S(); const shown=await page.$$eval('.product [data-r=profit]',els=>els.map(e=>e.textContent));
    st.products.forEach((p,i)=>{ const ref=refCalc(st,p); const txt=shown[i]||''; const raw=txt.replace(/[^\d,.]/g,''); const num=parseFloat(st.lang==='en' ? raw.replace(/,/g,'') : raw.replace(/\./g,'').replace(',','.')); const expect=Math.round(Math.abs(ref.profit)*100)/100; if(Math.abs(num-expect)>0.011) ok(false,'día '+day+' producto '+i+' beneficio mostrado ≠ referencia', txt+' vs '+expect); });
    ok(st.products.length===(await page.locator('.product').count()),'día '+day+' tarjetas = estado');
    if (day%7===0) { const [d]=await Promise.all([page.waitForEvent('download'),page.click('#btnExport')]); lastBackup=path.join(__dirname,'soak-w'+day+'.json'); await d.saveAs(lastBackup); JSON.parse(fs.readFileSync(lastBackup,'utf8')); }
    if (day%30===0 && lastBackup) { const before=(await S()).products.length; const [f]=await Promise.all([page.waitForEvent('filechooser'),page.click('#btnImport')]); await f.setFiles(lastBackup); await page.waitForTimeout(150); ok((await S()).products.length===JSON.parse(fs.readFileSync(lastBackup,'utf8')).products.length,'día '+day+' restaurar copia semanal'); }
    // cierre y reapertura diaria
    const beforeReload=await S(); await page.reload(); await page.waitForSelector('.product'); const after=await S();
    ok(JSON.stringify(beforeReload.products)===JSON.stringify(after.products) && beforeReload.country===after.country && beforeReload.lang===after.lang,'día '+day+' estado idéntico tras reabrir');
    if (day%30===0) await noNaN('día '+day);
  }
  const st=await S(); const bytes=await page.evaluate(()=>localStorage.getItem('etsyFeeCalc.v1').length);
  perf.sort((a,b)=>a-b); console.log(`\nTras 120 días: ${st.products.length} productos · almacenamiento ${(bytes/1024).toFixed(1)} KB · acción mediana ${perf[Math.floor(perf.length/2)]} ms · p95 ${perf[Math.floor(perf.length*0.95)]} ms · máx ${perf[perf.length-1]} ms`);
  // --- 3. estrés: 150 productos y latencia al escribir
  while ((await S()).products.length<150) await page.click('#btnAdd');
  const t0=Date.now(); await page.locator('.product').first().locator('input[data-k=price]').fill('33'); const lat=Date.now()-t0;
  const t1=Date.now(); await page.selectOption('#lang','en'); const relat=Date.now()-t1;
  console.log(`Estrés 150 productos: escribir un precio ${lat} ms · cambiar idioma (re-render total) ${relat} ms`);
  ok(lat<400,'latencia al escribir con 150 productos < 400 ms',lat+' ms'); ok(relat<1500,'re-render total con 150 productos < 1,5 s',relat+' ms');
  const [d3]=await Promise.all([page.waitForEvent('download'),page.click('#btnCsv')]); const csvp=path.join(__dirname,'soak.csv'); await d3.saveAs(csvp); ok(fs.readFileSync(csvp,'utf8').split('\r\n').length>=151,'CSV con 150 filas');
  ok(errors.length===0,'sin errores de consola en 120 días',errors.slice(0,3).join(' | '));
  await browser.close(); console.log('\nFALLOS:',fails); if(issues.length) console.log(issues.slice(0,20).join('\n')); process.exit(fails?1:0);
})();
