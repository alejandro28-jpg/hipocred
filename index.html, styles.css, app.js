<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Simulador de financiación de vivienda</title>
<style>
:root{--bg:#f4f7f7;--card:#fff;--tx:#1f2d33;--mu:#5b6b70;--pr:#0b3c49;--ac:#f2a541;--bd:#d9e4e4;--ok:#1a8a5a;--wa:#c98a0a;--no:#c0392b;color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#10181b;--card:#182327;--tx:#e6eeee;--mu:#9bb0b4;--pr:#7fd0d3;--bd:#2a3a3f;--ok:#4cc38a;--wa:#e8b04a;--no:#ef7b6e;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#10181b;--card:#182327;--tx:#e6eeee;--mu:#9bb0b4;--pr:#7fd0d3;--bd:#2a3a3f;--ok:#4cc38a;--wa:#e8b04a;--no:#ef7b6e;color-scheme:dark}
html{scroll-padding-top:env(safe-area-inset-top,0px)}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--tx);font:16px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{max-width:640px;margin:0 auto;padding:16px}
h1{font-size:22px;margin:8px 0 4px;color:var(--pr)}
h2{font-size:17px;margin:0 0 10px;color:var(--pr)}
.sub{color:var(--mu);font-size:14px;margin:0 0 14px}
section{background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:14px;margin-bottom:14px}
.g{display:grid;grid-template-columns:1fr 1fr;gap:10px}
label{display:block;font-size:13px;color:var(--mu)}
input,select{width:100%;margin-top:3px;padding:10px;font-size:16px;border:1px solid var(--bd);border-radius:8px;background:var(--bg);color:var(--tx)}
.big{font-size:24px;font-weight:700;color:var(--pr)}
.note{font-size:13px;color:var(--mu);margin:8px 0 0}
.offer{border:1px solid var(--bd);border-radius:10px;padding:12px;margin-bottom:10px}
.badge{display:inline-block;padding:2px 10px;border-radius:99px;font-size:13px;font-weight:700;color:#fff}
.v{background:var(--ok)}.a{background:var(--wa)}.r{background:var(--no)}
.rec{outline:2px solid var(--ac)}
.row{display:flex;justify-content:space-between;gap:8px;padding:3px 0;font-size:15px}
.row span:first-child{color:var(--mu)}
details{margin-top:8px}
summary{cursor:pointer;color:var(--pr);font-weight:600}
.tb{overflow-x:auto}
table{border-collapse:collapse;width:100%;font-size:13px;margin-top:6px}
th,td{padding:4px 6px;text-align:right;border-bottom:1px solid var(--bd)}
th:first-child,td:first-child{text-align:left}
[hidden]{display:none!important}
.nav{display:flex;justify-content:space-between;align-items:center;padding:4px 0 12px}
.logo{font-weight:800;color:var(--pr);font-size:18px}
.btn{display:inline-block;padding:12px 18px;border:0;border-radius:10px;background:var(--pr);color:var(--bg);font-size:16px;font-weight:700;cursor:pointer}
.btn.sec{background:transparent;color:var(--pr);border:2px solid var(--pr)}
.btn.full{width:100%;margin-top:14px}
.lnk{background:none;border:0;color:var(--pr);font-size:15px;font-weight:600;cursor:pointer;padding:6px 0}
.hero{padding:24px 0 16px}
.hero h1{font-size:30px;line-height:1.15}
.cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
.err{color:var(--no);font-size:14px;min-height:20px;margin-top:8px}
form label{margin-top:10px}
.top{display:flex;justify-content:space-between;align-items:center}
</style>
</head>
<body>
<main id="home">
<div class="nav"><span class="logo">🏠 Simulador de vivienda</span><button class="lnk" data-go="login">Iniciar sesión</button></div>
<div class="hero"><h1>Decide cómo financiar tu vivienda con datos</h1>
<p class="sub">Calcula cuánto puedes pagar, compara créditos y descubre cuál te conviene, con todos los costos a la vista.</p>
<div class="cta"><button class="btn" data-go="register">Crear cuenta</button><button class="btn sec" data-go="login">Iniciar sesión</button></div></div>
<section><h2>Capacidad de endeudamiento</h2><p class="sub" style="margin:0">Sabe cuánto puedes pagar cada mes sin ahogar tus finanzas.</p></section>
<section><h2>Comparación de créditos</h2><p class="sub" style="margin:0">Pon varias ofertas lado a lado: cuota, intereses y costo total.</p></section>
<section><h2>Costos reales</h2><p class="sub" style="margin:0">Seguros y gastos iniciales incluidos, no solo la tasa.</p></section>
</main>
 
<main id="auth" hidden>
<div class="nav"><button class="lnk" id="back" data-go="home">← Inicio</button></div>
<section><h2 id="atitle"></h2>
<form id="fl"><label>Correo<input id="le" type="email" autocomplete="email" required></label><label>Contraseña<input id="lp" type="password" autocomplete="current-password" required></label><button class="btn full">Entrar</button></form>
<form id="fr" hidden><label>Nombre<input id="rn" autocomplete="name" required></label><label>Correo<input id="re" type="email" autocomplete="email" required></label><label>Contraseña (mínimo 8 caracteres)<input id="rp" type="password" autocomplete="new-password" required></label><label>Confirmar contraseña<input id="rc" type="password" autocomplete="new-password" required></label><button class="btn full">Crear cuenta</button></form>
<div class="err" id="err"></div>
<button class="lnk" id="swb"></button>
<p class="note">Versión de demostración: las cuentas se guardan solo en este navegador. Una versión real usaría un servidor con base de datos.</p></section>
</main>
 
<main id="appv" hidden>
<div class="top"><b id="who"></b><button class="lnk" id="out">Cerrar sesión</button></div>
<h1>Simulador de financiación de vivienda</h1>
<p class="sub">Prototipo académico. Las tasas, seguros y subsidios son datos de ejemplo, no ofertas reales. Tus datos se quedan en este dispositivo.</p>
 
<section>
<h2>1. Tu perfil</h2>
<div class="g">
<label>Ingresos mensuales<input id="ing" type="number" inputmode="numeric" value="6000000"></label>
<label>Gastos fijos mensuales<input id="gas" type="number" inputmode="numeric" value="2000000"></label>
<label>Cuotas de otras deudas<input id="deu" type="number" inputmode="numeric" value="0"></label>
</div>
<p class="note">Cuota máxima recomendada</p>
<div class="big" id="cmax">-</div>
<p class="note">Regla: hasta 30% de los ingresos menos otras deudas, sin superar lo que queda tras gastos fijos.</p>
<label style="display:flex;gap:8px;align-items:center;margin-top:10px"><input id="savep" type="checkbox" style="width:auto;margin:0"> Guardar mi perfil financiero en este dispositivo</label>
</section>
 
<section>
<h2>2. Inmueble y condiciones</h2>
<div class="g">
<label>Valor del inmueble<input id="val" type="number" inputmode="numeric" value="250000000"></label>
<label>Cuota inicial (%)<input id="ini" type="number" inputmode="decimal" value="30"></label>
<label>Subsidio (COP)<input id="sub" type="number" inputmode="numeric" value="0"></label>
<label>Gastos iniciales (% del valor)<input id="ci" type="number" inputmode="decimal" value="3"></label>
<label>Sistema de amortización<select id="sys"><option value="f">Cuota fija</option><option value="c">Abono constante a capital</option></select></label>
</div>
<p class="note">Gastos iniciales: escrituración, avalúo y registro. El subsidio se resta del monto a financiar; las reglas de elegibilidad quedan por implementar.</p>
</section>
 
<section>
<h2>3. Ofertas a comparar</h2>
<div id="ofs"></div>
</section>
 
<section>
<h2>4. Resultados</h2>
<div id="res"></div>
</section>
</main>
<script>
const $=id=>document.getElementById(id);
const fmt=n=>new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
const offers=[{n:"Oferta A",ea:12.5,y:20,seg:0.045},{n:"Oferta B",ea:11.8,y:15,seg:0.05},{n:"Oferta C",ea:13.2,y:30,seg:0.04}];
 
$('ofs').innerHTML=offers.map((o,i)=>`<div class="offer"><div class="g">
<label>Nombre<input data-i="${i}" data-k="n" value="${o.n}"></label>
<label>Tasa EA (%)<input data-i="${i}" data-k="ea" type="number" inputmode="decimal" step="0.1" value="${o.ea}"></label>
<label>Plazo (años)<input data-i="${i}" data-k="y" type="number" inputmode="numeric" value="${o.y}"></label>
<label>Seguros (% mensual del saldo)<input data-i="${i}" data-k="seg" type="number" inputmode="decimal" step="0.005" value="${o.seg}"></label>
</div></div>`).join('');
 
function sim(P,o,sys){
  const n=Math.max(1,Math.round(o.y*12)), r=Math.pow(1+o.ea/100,1/12)-1;
  const fija=r>0?P*r/(1-Math.pow(1+r,-n)):P/n;
  let bal=P,int=0,seg=0,rows=[],first=0,last=0;
  for(let k=1;k<=n;k++){
    const i=bal*r, cap=sys==='f'?fija-i:P/n, s=bal*o.seg/100, pay=cap+i+s;
    int+=i;seg+=s;
    if(k===1)first=pay; if(k===n)last=pay;
    if(k<=12)rows.push([k,pay,cap,i,s,bal-cap]);
    bal-=cap;
  }
  return {int,seg,first,last,rows};
}
 
function calc(){
  const ing=+$('ing').value||0, gas=+$('gas').value||0, deu=+$('deu').value||0;
  const val=+$('val').value||0, ini=+$('ini').value||0, sub=+$('sub').value||0, ci=+$('ci').value||0, sys=$('sys').value;
  const cmax=Math.max(0,Math.min(0.30*ing-deu,ing-gas-deu));
  $('cmax').textContent=fmt(cmax);
  const P=Math.max(0,val*(1-ini/100)-sub), inicial=val*ci/100;
  const R=offers.map(o=>{
    const s=sim(P,o,sys), ratio=cmax>0?s.first/cmax:99;
    return Object.assign({o,ratio,costo:s.int+s.seg+inicial,estado:ratio<=0.8?'v':ratio<=1?'a':'r'},s);
  });
  const ok=R.filter(x=>x.ratio<=1);
  const best=(ok.length?ok.sort((a,b)=>a.costo-b.costo):R.slice().sort((a,b)=>a.first-b.first))[0];
  const lbl={v:'Cómoda',a:'Ajustada',r:'Inviable'};
  $('res').innerHTML=`<p class="note" style="margin:0 0 10px">Monto a financiar: <b>${fmt(P)}</b></p>`+
  offers.map((o,i)=>{
    const x=R.find(z=>z.o===o);
    return `<div class="offer ${x===best?'rec':''}">
    <div class="row"><b>${o.n}${x===best?' · Recomendada':''}</b><span class="badge ${x.estado}">${lbl[x.estado]}</span></div>
    <div class="row"><span>${sys==='f'?'Cuota mensual':'Primera cuota'}</span><b>${fmt(x.first)}</b></div>
    ${sys==='c'?`<div class="row"><span>Última cuota</span><span>${fmt(x.last)}</span></div>`:''}
    <div class="row"><span>Total de intereses</span><span>${fmt(x.int)}</span></div>
    <div class="row"><span>Total de seguros</span><span>${fmt(x.seg)}</span></div>
    <div class="row"><span>Costo del crédito</span><b>${fmt(x.costo)}</b></div>
    <details><summary>Ver primeros 12 meses</summary><div class="tb"><table><tr><th>Mes</th><th>Cuota</th><th>Capital</th><th>Interés</th><th>Seguro</th><th>Saldo</th></tr>
    ${x.rows.map(r=>`<tr><td>${r[0]}</td>${r.slice(1).map(v=>`<td>${fmt(v)}</td>`).join('')}</tr>`).join('')}</table></div></details></div>`;
  }).join('')+
  `<p class="note">Costo del crédito = intereses + seguros + gastos iniciales. La recomendación es la oferta de menor costo cuya cuota no supera tu cuota máxima.</p>`;
}
document.addEventListener('input',e=>{
  const t=e.target;
  if(t.dataset.k){const o=offers[t.dataset.i];o[t.dataset.k]=t.dataset.k==='n'?t.value:(+t.value||0);}
  calc();
});
calc();
 
/* Cuentas (demo: almacenamiento local del navegador) */
let cur=null;const mem={};
const ls={get(k){try{return localStorage.getItem(k)}catch(e){return mem[k]??null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){mem[k]=v}},del(k){try{localStorage.removeItem(k)}catch(e){delete mem[k]}}};
const users=()=>{try{return JSON.parse(ls.get('viv_users')||'{}')}catch(e){return{}}};
const rnd=()=>[...crypto.getRandomValues(new Uint8Array(16))].map(x=>x.toString(16).padStart(2,'0')).join('');
const hash=async(s,p)=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s+p)))].map(x=>x.toString(16).padStart(2,'0')).join('');
const show=v=>['home','auth','appv'].forEach(id=>$(id).hidden=id!==v);
function setMode(m){$('fl').hidden=m!=='login';$('fr').hidden=m!=='register';$('atitle').textContent=m==='login'?'Iniciar sesión':'Crear cuenta';$('swb').textContent=m==='login'?'¿No tienes cuenta? Regístrate':'¿Ya tienes cuenta? Inicia sesión';$('swb').dataset.go=m==='login'?'register':'login';$('err').textContent='';}
function go(m){if(m==='home')return show('home');setMode(m);show('auth');}
function enter(em){
  cur=em;$('who').textContent='Hola, '+users()[em].name;
  let p=null;try{p=JSON.parse(ls.get('viv_p_'+em)||'null')}catch(e){}
  $('savep').checked=!!p;
  if(p){$('ing').value=p.ing;$('gas').value=p.gas;$('deu').value=p.deu;}
  ['le','lp','rn','re','rp','rc'].forEach(i=>$(i).value='');
  show('appv');calc();
}
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g)go(g.dataset.go);});
$('fr').addEventListener('submit',async e=>{
  e.preventDefault();const er=$('err');
  const n=$('rn').value.trim(),em=$('re').value.trim().toLowerCase(),p=$('rp').value;
  if(!n)return er.textContent='Escribe tu nombre.';
  if(p.length<8)return er.textContent='La contraseña debe tener al menos 8 caracteres.';
  if(p!==$('rc').value)return er.textContent='Las contraseñas no coinciden.';
  const u=users();if(u[em])return er.textContent='Ya existe una cuenta con ese correo.';
  try{const salt=rnd();u[em]={name:n,salt,hash:await hash(salt,p)};}catch(x){return er.textContent='Tu navegador no permite crear cuentas.';}
  ls.set('viv_users',JSON.stringify(u));ls.set('viv_session',em);enter(em);
});
$('fl').addEventListener('submit',async e=>{
  e.preventDefault();const em=$('le').value.trim().toLowerCase(),u=users()[em];
  let ok=false;try{ok=!!u&&(await hash(u.salt,$('lp').value))===u.hash;}catch(x){}
  if(!ok)return $('err').textContent='Correo o contraseña incorrectos.';
  ls.set('viv_session',em);enter(em);
});
$('out').addEventListener('click',()=>{ls.del('viv_session');cur=null;show('home');});
document.addEventListener('input',e=>{
  if(!cur||!['ing','gas','deu','savep'].includes(e.target.id))return;
  if($('savep').checked)ls.set('viv_p_'+cur,JSON.stringify({ing:$('ing').value,gas:$('gas').value,deu:$('deu').value}));
  else ls.del('viv_p_'+cur);
});
const s0=ls.get('viv_session');if(s0&&users()[s0])enter(s0);
</script>
</body>
</html>
 
