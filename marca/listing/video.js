const { chromium } = require('playwright');
const URL='file:///home/user/MUNDO-DRAKHTHHAR/productos/etsy-fee-calculator/index.html';
const pause = ms => new Promise(r=>setTimeout(r,ms));
(async () => {
  const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox'] });
  const ctx = await b.newContext({ viewport:{width:1080,height:1080}, deviceScaleFactor:1, locale:'en-US',
    recordVideo:{ dir:__dirname+'/vid', size:{width:1080,height:1080} } });
  const p = await ctx.newPage();
  await p.goto(URL); await p.click('#btnGuideClose');
  await p.selectOption('#lang','en'); await p.selectOption('#country','US');
  // producto realista, ya puesto antes de grabar lo interesante
  const c = p.locator('.product').first();
  await c.locator('input[data-k=name]').fill('Hand-poured soy candle');
  await c.locator('input[data-k=mat]').fill('7.40');
  await c.locator('input[data-k=hours]').fill('0.4');
  await c.locator('input[data-k=pack]').fill('1.20');
  await c.locator('input[data-k=shipcost]').fill('5.90');
  await c.locator('input[data-k=ship]').fill('6.50');
  await c.locator('input[data-k=price]').fill('');
  await p.evaluate(()=>document.querySelector('#products').scrollIntoView({block:'start'}));
  await pause(900);
  // 1. escribe el precio, cifra a cifra
  const price = c.locator('input[data-k=price]');
  await price.click();
  for (const ch of '28') { await price.type(ch, {delay:220}); }
  await pause(1500);
  // 2. activa Offsite Ads: el margen se desploma
  await p.evaluate(()=>document.querySelector('#shop').scrollIntoView({block:'center'}));
  await pause(600);
  await p.selectOption('#offsite','15');
  await pause(500);
  await p.evaluate(()=>document.querySelector('#products').scrollIntoView({block:'start'}));
  await pause(1800);
  await p.selectOption('#offsite','none');
  await pause(900);
  // 3. buscador de precio
  await p.evaluate(()=>document.querySelector('#reverse').scrollIntoView({block:'center'}));
  await pause(700);
  const tgt = p.locator('#rvTarget'); await tgt.click(); await tgt.fill('');
  for (const ch of '12') { await tgt.type(ch, {delay:230}); }
  await pause(2200);
  await ctx.close(); await b.close();
  console.log('grabado');
})();
