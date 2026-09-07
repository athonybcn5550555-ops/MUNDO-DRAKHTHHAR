const { chromium } = require('playwright'); const fs=require('fs'); const path=require('path');
const URL='file:///home/user/MUNDO-DRAKHTHHAR/productos/etsy-fee-calculator/index.html';
let fails=0; const ok=(cond,msg,extra='')=>{ console.log((cond?'PASS ':'FAIL ')+msg+(extra?'  ['+extra+']':'')); if(!cond) fails++; };
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args:['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport:{width:1200,height:900}, locale:'es-ES', acceptDownloads:true });
  const errors=[]; const page = await ctx.newPage(); page.on('pageerror',e=>errors.push(e.message)); page.on('console',m=>{ if(m.type()==='error') errors.push(m.text()); });
  await page.goto(URL); await page.click('#btnGuideClose');
  const S=()=>page.evaluate(()=>window.__calc.state());
  // --- parser
  const nn = await page.evaluate(()=>{ const c=window.__calc; return null; });
  await page.fill('#f_trans','6,5'); ok(Math.abs((await S()).trans-6.5)<1e-9,'coma decimal "6,5" -> 6.5');
  await page.fill('#f_trans','6.5'); ok((await S()).trans===6.5,'punto decimal "6.5" -> 6.5');
  await page.fill('#f_trans','1.234,5'); ok((await S()).trans===1234.5,'"1.234,5" europeo -> 1234.5');
  await page.fill('#f_trans','1,234.5'); ok((await S()).trans===1234.5,'"1,234.5" anglosajón -> 1234.5');
  await page.fill('#f_trans','abc'); ok((await S()).trans===0 && await page.locator('#f_trans').evaluate(e=>e.classList.contains('bad')),'texto no numérico -> 0 y marcado en rojo');
  await page.fill('#f_trans','-3'); ok((await S()).trans===0,'negativo en comisión -> 0 (no se permiten negativos)');
  await page.fill('#f_trans','6.5'); ok(!(await page.locator('#f_trans').evaluate(e=>e.classList.contains('bad'))),'vuelve a válido: se quita el rojo');
  await page.fill('#f_trans',''); ok((await S()).trans===0,'vacío -> 0 sin error');
  await page.fill('#f_trans','6.5');
  // --- formato de moneda por idioma
  await page.selectOption('#country','ES');
  const first=page.locator('.product').first();
  await first.locator('input[data-k=price]').fill('25'); await first.locator('input[data-k=mat]').fill('5'); await first.locator('input[data-k=hours]').fill('0.5');
  let txt=await first.locator('[data-r=profit]').textContent(); ok(/\d,\d\d\s€/.test(txt),'ES muestra "16,36 €" con coma y símbolo detrás',txt);
  await page.selectOption('#lang','en'); txt=await page.locator('.product').first().locator('[data-r=profit]').textContent(); ok(/[$€]\d+\.\d\d/.test(txt),'EN muestra símbolo delante y punto decimal',txt);
  await page.selectOption('#lang','de'); txt=await page.locator('.product').first().locator('[data-r=margin]').textContent(); ok(/\d,\d\s%/.test(txt),'DE porcentaje "36,7 %"',txt);
  await page.selectOption('#lang','es');
  // --- valores extremos
  const f=page.locator('.product').first();
  await f.locator('input[data-k=price]').fill('0'); txt=await f.locator('[data-r=profit]').textContent(); ok(/Pérdida/.test(txt),'precio 0 -> pérdida, sin NaN',txt);
  ok(!/NaN|Infinity|undefined/.test(await page.locator('#products').textContent()),'sin NaN/Infinity en tarjetas');
  ok(!/NaN|Infinity|undefined/.test(await page.locator('#reverse').textContent()),'sin NaN/Infinity en buscador');
  await f.locator('input[data-k=price]').fill('999999'); txt=await f.locator('[data-r=profit]').textContent(); ok(/\d/.test(txt) && !/NaN/.test(txt),'precio enorme sin desbordar',txt);
  await f.locator('input[data-k=price]').fill('25');
  // --- buscador: objetivo inalcanzable
  await page.fill('#rvTarget','20000'); ok((await page.textContent('#rvNote')).length>0 && (await page.textContent('#rvPrice'))==='–','beneficio inalcanzable -> guiones y aviso');
  await page.selectOption('#rvMode','margin'); await page.fill('#rvTarget','99'); ok((await page.textContent('#rvPrice'))==='–','margen 99 % -> inalcanzable');
  await page.fill('#rvTarget','40'); ok(/€/.test(await page.textContent('#rvPrice')),'margen 40 % -> precio calculado',await page.textContent('#rvPrice'));
  await page.selectOption('#rvMode','amount'); await page.fill('#rvTarget','10');
  // --- copia de seguridad: exportar e importar de verdad
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#btnExport')]);
  const bk=path.join(__dirname,'backup-test.json'); await dl.saveAs(bk); const j=JSON.parse(fs.readFileSync(bk,'utf8')); ok(Array.isArray(j.products)&&j.products.length>=1,'export genera JSON válido con productos');
  await page.click('#btnAdd'); await page.click('#btnAdd'); ok((await S()).products.length===3,'3 productos antes de restaurar');
  const [fc] = await Promise.all([page.waitForEvent('filechooser'), page.click('#btnImport')]); await fc.setFiles(bk);
  await page.waitForTimeout(300); ok((await S()).products.length===j.products.length,'restaurar copia repone el estado exportado');
  // --- importar archivo corrupto
  const badf=path.join(__dirname,'bad.json'); fs.writeFileSync(badf,'{"hola":1}');
  const [fc2] = await Promise.all([page.waitForEvent('filechooser'), page.click('#btnImport')]); await fc2.setFiles(badf); await page.waitForTimeout(300);
  ok((await page.textContent('#toast')).length>0 && (await S()).products.length===j.products.length,'archivo corrupto rechazado con aviso, estado intacto');
  // --- copia antigua (v1.0 sin lang ni digital) se abre sin errores
  const oldf=path.join(__dirname,'old.json'); fs.writeFileSync(oldf,JSON.stringify({country:'US',cur:'$',listing:0.2,trans:6.5,proc:3,procfix:0.25,reg:0,conv:2.5,offsite:'none',offcap:100,etsyads:0,vatOn:false,vat:0,products:[{id:1,name:'Old',price:10,ship:0,mat:1,hours:0,pack:0,shipcost:0,pod:0,over:0}],seen:true}));
  const [fc3] = await Promise.all([page.waitForEvent('filechooser'), page.click('#btnImport')]); await fc3.setFiles(oldf); await page.waitForTimeout(300);
  ok((await S()).products[0].digital===false && (await S()).products[0].name==='Old','copia de versión antigua migrada (campo digital añadido)');
  // --- CSV en español usa ; y coma decimal, con BOM
  const [dl2] = await Promise.all([page.waitForEvent('download'), page.click('#btnCsv')]); const csvp=path.join(__dirname,'out.csv'); await dl2.saveAs(csvp); const csv=fs.readFileSync(csvp,'utf8');
  ok(csv.charCodeAt(0)===0xFEFF && csv.split('\r\n')[0].includes(';') && /\d,\d\d/.test(csv.split('\r\n')[1]),'CSV ES: BOM + ; + coma decimal', csv.split('\r\n').slice(0,2).join(' | '));
  await page.selectOption('#lang','en'); const [dl3] = await Promise.all([page.waitForEvent('download'), page.click('#btnCsv')]); await dl3.saveAs(csvp); const csv2=fs.readFileSync(csvp,'utf8'); ok(csv2.split('\r\n')[0].includes(',') && !csv2.split('\r\n')[0].includes(';'),'CSV EN: separador coma'); await page.selectOption('#lang','es');
  // --- XSS en nombre de producto
  await page.locator('.product').first().locator('input[data-k=name]').fill('<img src=x onerror="window.__xss=1">');
  await page.click('#btnAdd'); await page.waitForTimeout(100); ok(!(await page.evaluate(()=>window.__xss)),'nombre con HTML no se ejecuta (escapado)');
  ok((await page.locator('#rvProduct option').first().textContent()).includes('<img'),'el nombre se muestra literal en el desplegable');
  // --- borrar hasta el último
  const cnt=await page.locator('.product').count(); for(let i=0;i<cnt;i++){ await page.locator('.product button[data-a=del]').last().click(); }
  ok((await page.locator('.product').count())===1,'no se puede borrar el último producto');
  // --- cambio de país conserva productos y resetea comisiones
  await page.locator('.product').first().locator('input[data-k=price]').fill('19');
  await page.selectOption('#country','FR'); const st=await S(); ok(st.reg===1.14 && st.cur==='€' && st.products[0].price===19,'cambio a Francia: tasa 1,14 %, € y productos intactos');
  // --- impresión no rompe
  await page.emulateMedia({media:'print'}); ok(await page.locator('#guide').isHidden(),'en impresión la guía está oculta'); await page.emulateMedia({media:'screen'});
  // --- teclado: Tab llega al botón de la guía y Enter la cierra
  await page.click('#btnGuide'); ok(await page.evaluate(()=>document.activeElement&&document.activeElement.id==='btnGuideClose'),'al abrir la guía el foco va al botón Empezar'); await page.keyboard.press('Enter'); ok(await page.locator('#guide').isHidden(),'guía se cierra con Enter'); await page.click('#btnGuide'); await page.keyboard.press('Escape'); ok(await page.locator('#guide').isHidden(),'guía se cierra con Escape');
  // --- notranslate meta presente
  ok(await page.evaluate(()=>!!document.querySelector('meta[name=google][content=notranslate]')),'meta notranslate presente');
  // --- móvil sin desbordamiento y sin errores
  const m=await ctx.newPage(); await m.setViewportSize({width:320,height:480}); await m.goto(URL); await m.evaluate(()=>localStorage.clear()); await m.reload(); const vis=await m.locator('#btnGuideClose').isVisible(); await m.locator('#btnGuideClose').scrollIntoViewIfNeeded(); await m.click('#btnGuideClose',{timeout:5000}); ok(await m.locator('#guide').isHidden(),'pantalla 320×480: la guía se puede cerrar (desplazable)'); await m.setViewportSize({width:360,height:740}); ok((await m.evaluate(()=>document.documentElement.scrollWidth))===360,'360 px sin scroll horizontal'); await m.close();
  // --- localStorage bloqueado: la app arranca igual
  const ctx2=await browser.newContext({viewport:{width:1000,height:700}}); const p2=await ctx2.newPage(); const err2=[]; p2.on('pageerror',e=>err2.push(e.message));
  await p2.addInitScript(()=>{ Object.defineProperty(window,'localStorage',{get(){ throw new Error('blocked'); }}); });
  await p2.goto(URL); ok(err2.length===0 && (await p2.locator('.product').count())===1,'sin localStorage la app arranca y muestra el producto de ejemplo', err2.join('; ')); await ctx2.close();
  ok(errors.length===0,'sin errores de consola en toda la sesión', errors.join(' | '));
  await browser.close(); console.log('\nFALLOS:', fails); process.exit(fails?1:0);
})();
