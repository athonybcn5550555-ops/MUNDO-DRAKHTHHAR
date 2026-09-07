const { chromium } = require('playwright'); const path=require('path');
(async () => {
  const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox'] });
  const ctx = await b.newContext({ viewport:{width:1200,height:900}, locale:'es-ES', acceptDownloads:true });
  const page = await ctx.newPage(); const errs=[]; page.on('pageerror',e=>errs.push(e.message));
  await page.goto('file:///home/user/MUNDO-DRAKHTHHAR/productos/etsy-fee-calculator/index.html');
  await page.click('#btnGuideClose'); await page.selectOption('#country','ES');
  const c=page.locator('.product').first();
  await c.locator('input[data-k=name]').fill('Vela "artesanal" & cía');
  await c.locator('input[data-k=price]').fill('25'); await c.locator('input[data-k=ship]').fill('4');
  await c.locator('input[data-k=mat]').fill('6'); await c.locator('input[data-k=hours]').fill('0.5');
  await page.click('#btnAdd');
  const c2=page.locator('.product').nth(1);
  await c2.locator('input[data-k=name]').fill('Plantilla digital con un nombre francamente largo');
  await c2.locator('input[data-k=digital]').check(); await c2.locator('input[data-k=price]').fill('14');
  for (const [lang,file] of [['es','es.xlsx'],['de','de.xlsx'],['en','en.xlsx']]) {
    await page.selectOption('#lang',lang);
    const [dl]=await Promise.all([page.waitForEvent('download'), page.click('#btnXlsx')]);
    await dl.saveAs(path.join(__dirname,file));
  }
  console.log('generados es/de/en · errores:', errs.length?errs:'ninguno');
  await b.close();
})();
