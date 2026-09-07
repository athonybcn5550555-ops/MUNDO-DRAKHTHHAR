const { chromium } = require('playwright');
const URL='file:///home/user/MUNDO-DRAKHTHHAR/productos/etsy-fee-calculator/index.html';
// Busca controles cuyo texto sea casi invisible sobre su fondo real.
// Compone las capas semitransparentes; si encuentra un degradado, no juzga (evita falsos positivos).
(async () => {
  const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox'] });
  const p = await b.newPage({ viewport:{width:1200,height:900}, locale:'es-ES' });
  await p.goto(URL);
  const scan = (label) => p.evaluate((label)=>{
    const parse=c=>{ const m=c.match(/[\d.]+/g); if(!m) return null; return {r:+m[0],g:+m[1],b:+m[2],a:m[3]!==undefined?+m[3]:1}; };
    const over=(fg,bg)=>({ r:fg.r*fg.a+bg.r*(1-fg.a), g:fg.g*fg.a+bg.g*(1-fg.a), b:fg.b*fg.a+bg.b*(1-fg.a), a:1 });
    const lum=c=>{ const f=v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);}; return .2126*f(c.r)+.7152*f(c.g)+.0722*f(c.b); };
    const out=[];
    document.querySelectorAll('button, select, input, a').forEach(el=>{
      const r=el.getBoundingClientRect(); if(!r.width||!r.height) return;
      const cs=getComputedStyle(el); if(cs.visibility==='hidden'||cs.display==='none') return;
      const layers=[]; let node=el, gradient=false;
      while(node){ const s=getComputedStyle(node);
        if(s.backgroundImage && s.backgroundImage!=='none'){ gradient=true; break; }
        const c=parse(s.backgroundColor); if(c && c.a>0) layers.push(c);
        if(c && c.a>=1) break;
        node=node.parentElement; }
      if(gradient || !layers.length) return;              // fondo no determinable: no se juzga
      let bg=layers[layers.length-1];
      for(let i=layers.length-2;i>=0;i--) bg=over(layers[i],bg);
      const fg0=parse(cs.color); if(!fg0) return; const fg=fg0.a<1?over(fg0,bg):fg0;
      const l1=lum(fg), l2=lum(bg); const cr=(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);
      if(cr<2.5) out.push(label+': "'+(el.textContent||el.value||el.id||'').trim().slice(0,32)+'" contraste '+cr.toFixed(2));
    });
    return out;
  }, label);
  let bad=[];
  bad = bad.concat(await scan('guía inicial'));
  await p.click('#btnGuideClose');
  bad = bad.concat(await scan('pantalla principal'));
  await p.click('#btnManual'); bad = bad.concat(await scan('manual'));
  await p.evaluate(()=>{ document.getElementById('btnManStop').hidden=false; });
  bad = bad.concat(await scan('manual leyendo'));
  await p.click('#btnManClose'); await p.click('#btnGuide'); bad = bad.concat(await scan('guía reabierta'));
  console.log(bad.length? 'FALLOS DE CONTRASTE:\n'+bad.join('\n') : 'PASS ningún control con texto invisible (guía, manual, pantalla principal)');
  await b.close(); process.exit(bad.length?1:0);
})();
