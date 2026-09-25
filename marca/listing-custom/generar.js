const { chromium } = require('playwright');const fs=require('fs');
const R=require('path').resolve(__dirname,'../..');const icon='data:image/png;base64,'+fs.readFileSync(R+'/marca/icono/out/icon-256.png').toString('base64');
const css=`*{box-sizing:border-box;margin:0}body{width:2000px;height:2000px;font-family:Inter,'Liberation Sans',Arial,sans-serif;color:#141225}
.dark{background:linear-gradient(160deg,#2a1466 0%,#3b1a7a 45%,#1f5f73 100%);color:#fff}.light{background:#f3f3f8}
.pad{position:absolute;inset:0;padding:130px 130px}.brand{display:flex;align-items:center;gap:22px;font-size:26px;letter-spacing:.3em;font-weight:700}.brand img{width:76px;height:76px;border-radius:16px}
.eye{font-size:26px;letter-spacing:.3em;font-weight:700;color:#6b4de6;text-transform:uppercase}.dark .eye{color:#b9a8ff}
h1{font-size:118px;line-height:1.05;font-weight:800;letter-spacing:-.02em}h2{font-size:92px;line-height:1.08;font-weight:800;letter-spacing:-.02em;margin-top:26px}
.lead{font-size:44px;line-height:1.4;opacity:.88;margin-top:40px;max-width:1500px}
.pills{display:flex;gap:22px;flex-wrap:wrap}.pill{border:3px solid rgba(255,255,255,.75);border-radius:60px;padding:18px 34px;font-size:32px;font-weight:600}.pill.on{background:#fff;color:#2a1466;border-color:#fff}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:80px}.card{background:#fff;border-radius:22px;padding:52px;box-shadow:0 10px 40px rgba(40,20,100,.08)}
.card b{display:block;font-size:44px;margin:26px 0 14px}.card p{font-size:32px;line-height:1.45;color:#55536a}
.n{width:66px;height:66px;border-radius:50%;background:#6b4de6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:700}
.steps{display:flex;flex-direction:column;gap:34px;margin-top:80px}.step{display:flex;gap:40px;align-items:flex-start;background:#fff;border-radius:22px;padding:46px 52px;box-shadow:0 10px 40px rgba(40,20,100,.08)}
.step b{font-size:46px;display:block;margin-bottom:10px}.step p{font-size:32px;line-height:1.45;color:#55536a}
.foot{position:absolute;left:130px;right:130px;bottom:110px;font-size:30px;color:#6b4de6;font-weight:600}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:80px}.col{border-radius:22px;padding:56px}.yes{background:#e6f6ec}.no{background:#fbe7ea}
.col h3{font-size:44px;margin-bottom:30px}.yes h3{color:#1b7a3d}.no h3{color:#b3243a}.col li{font-size:34px;line-height:1.4;margin:0 0 22px 0;list-style:none;padding-left:52px;position:relative}
.yes li::before{content:"✓";position:absolute;left:0;color:#1b7a3d;font-weight:800}.no li::before{content:"✕";position:absolute;left:0;color:#b3243a;font-weight:800}`;
const pages={
'01-cover':`<div class="dark pad" style="display:flex;flex-direction:column;justify-content:space-between"><div><div class="brand"><img src="${icon}">DRAKHTHARSOFTWARE</div>
<h1 style="margin-top:250px">Custom App<br>Made for You</h1><p class="lead">Any app from this shop, adapted to your business, shop or classroom. Your fields, your sections, the features you need.</p>
<div class="pills" style="margin-top:56px"><span class="pill on">Quote before you pay</span><span class="pill">Works offline</span><span class="pill">One-time price</span></div></div>
<div class="pills"><span class="pill">Windows · Mac · Tablet</span><span class="pill">No account</span><span class="pill">No subscription</span></div></div>`,
'02-what':`<div class="light pad"><div class="eye">What I can adapt</div><h2>Built around<br>the way you work.</h2><div class="grid">
<div class="card"><div class="n">1</div><b>Your fields and sections</b><p>Add, remove or rename fields, categories and sections so the app matches your real work.</p></div>
<div class="card"><div class="n">2</div><b>New features</b><p>Calculations, lists, filters, totals or reminders the app doesn't have today.</p></div>
<div class="card"><div class="n">3</div><b>Your data</b><p>Bring in what you already have from Excel or CSV. Export, print or save as PDF.</p></div>
<div class="card"><div class="n">4</div><b>Your look</b><p>Your logo, your colors and your language, if you want them.</p></div></div>
<div class="foot">Every request is quoted individually · you only pay once you accept the quote</div></div>`,
'03-how':`<div class="light pad"><div class="eye">How it works</div><h2>Four steps.<br>No surprises.</h2><div class="steps">
<div class="step"><div class="n">1</div><div><b>Message me</b><p>Tell me which app you'd like adapted. Please don't buy this listing yet.</p></div></div>
<div class="step"><div class="n">2</div><div><b>Answer a short questionnaire</b><p>What you need, your data and your deadline. The more detail, the more accurate the quote.</p></div></div>
<div class="step"><div class="n">3</div><div><b>Get your quote</b><p>Price and delivery date within 24 hours. If you accept, I create a private listing for you.</p></div></div>
<div class="step"><div class="n">4</div><div><b>Receive your app</b><p>Your custom version as a file that works on your device, plus one round of adjustments.</p></div></div></div></div>`,
'04-fit':`<div class="light pad"><div class="eye">Is it right for you?</div><h2>What a custom<br>version can be.</h2><div class="cols">
<div class="col yes"><h3>Included</h3><ul><li>Works on your own PC, Mac or tablet</li><li>Works without internet</li><li>Your data stays on your device</li><li>Optional installer for Windows and Mac</li><li>One round of adjustments</li></ul></div>
<div class="col no"><h3>Not possible</h3><ul><li>User accounts or logins</li><li>Online syncing between devices</li><li>Data shared by several people</li><li>Native phone apps</li></ul></div></div>
<div class="foot">Not sure? Send me a message and ask before buying.</div></div>`};
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage({viewport:{width:2000,height:2000}});
for(const [k,h] of Object.entries(pages)){await p.setContent(`<style>${css}</style>${h}`);await p.waitForTimeout(200);await p.screenshot({path:R+'/marca/listing-custom/'+k+'.png'})}await b.close()})();
