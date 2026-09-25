// Genera el PDF de entrega del listing "Custom App" (se sube como archivo digital en Etsy).
const { chromium } = require('playwright');const fs=require('fs');const path=require('path');
const R=path.resolve(__dirname,'../..');const icon='data:image/png;base64,'+fs.readFileSync(R+'/marca/icono/out/icon-256.png').toString('base64');
const html=`<style>@page{size:A4;margin:0}*{box-sizing:border-box;margin:0}body{width:210mm;height:297mm;font-family:Inter,'Liberation Sans',Arial,sans-serif;color:#141225;background:#f3f3f8}
.top{background:linear-gradient(160deg,#2a1466 0%,#3b1a7a 50%,#1f5f73 100%);color:#fff;padding:18mm 18mm 14mm}
.brand{display:flex;align-items:center;gap:10px;font-size:9pt;letter-spacing:.3em;font-weight:700}.brand img{width:26px;height:26px;border-radius:6px}
h1{font-size:30pt;line-height:1.1;margin-top:14mm;font-weight:800;letter-spacing:-.01em}.top p{font-size:12pt;line-height:1.5;opacity:.9;margin-top:5mm;max-width:150mm}
.body{padding:12mm 18mm}.eye{font-size:8.5pt;letter-spacing:.28em;font-weight:700;color:#6b4de6;text-transform:uppercase;margin-bottom:5mm}
.step{display:flex;gap:6mm;background:#fff;border-radius:4mm;padding:5mm 6mm;margin-bottom:3.5mm;box-shadow:0 1mm 4mm rgba(40,20,100,.06)}
.n{flex:none;width:9mm;height:9mm;border-radius:50%;background:#6b4de6;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11pt}
.step b{display:block;font-size:12pt;margin-bottom:1.5mm}.step p{font-size:10pt;line-height:1.5;color:#55536a}
.note{margin-top:7mm;font-size:10pt;line-height:1.55;color:#55536a;border-left:1mm solid #6b4de6;padding-left:5mm}.note b{color:#141225}
.foot{position:absolute;left:18mm;right:18mm;bottom:12mm;font-size:9pt;color:#6b4de6;font-weight:600}</style>
<div class="top"><div class="brand"><img src="${icon}">DRAKHTHARSOFTWARE</div><h1>Thank you for your<br>custom app order!</h1>
<p>Your app will be built around the way you work. Here is what happens next.</p></div>
<div class="body"><div class="eye">Next steps</div>
<div class="step"><div class="n">1</div><div><b>I'll message you within 24 hours</b><p>Through Etsy messages, with a short questionnaire about what you need, your data and your deadline. Already sent me the details? Then I'll go straight to step 2.</p></div></div>
<div class="step"><div class="n">2</div><div><b>You get a quote</b><p>A clear price and delivery date, with exactly what is included. Nothing is built until you accept it.</p></div></div>
<div class="step"><div class="n">3</div><div><b>Your payment counts toward the total</b><p>What you paid for this listing is deducted from the final price. If we can't agree on a quote, or your idea isn't possible, I'll refund it in full.</p></div></div>
<div class="step"><div class="n">4</div><div><b>You receive your app</b><p>Through a private Etsy listing: one file that works on your PC, Mac or tablet, without internet. Optional installer for Windows and Mac. One round of adjustments included.</p></div></div>
<div class="note"><b>To speed things up:</b> have your logo (if you want it), examples or screenshots of how you work today, and any Excel or CSV files you'd like to bring in.</div>
</div><div class="foot">Questions? Reply to me anytime through Etsy messages · I answer within 24 hours</div>`;
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage();await p.setContent(html);
await p.pdf({path:__dirname+'/Custom-App-Order-Next-Steps.pdf',format:'A4',printBackground:true});await p.setViewportSize({width:794,height:1123});await p.screenshot({path:__dirname+'/preview.png'});await b.close()})();
