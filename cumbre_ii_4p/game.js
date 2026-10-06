const cv=document.getElementById('c'),g=cv.getContext('2d'),W=960,H=540;
const CH=[
{n:'Fuego',col:'#ff5a3c',sp:4.2,jp:12,w:1,ad:8,ak:7,cd:26,fn:'LLUVIA DE METEOROS',d:'Equilibrado · fuego y explosiones',m:'Bola de fuego · Llamarada · Fénix · Erupción',
 mv:{N:['proj',{v:8,d:6,k:5,l:70,r:9,col:'#ff8a2a'}],S:['spray',{d:2,k:2,r:6,col:'#ffb02a'}],U:['up',{h:12,fr:16,d:7,k:8}],D:['slam',{d:11,k:10,r:55}]}},
{n:'Rayo',col:'#ffd23c',sp:5.6,jp:13,w:.8,ad:5,ak:5,cd:16,fn:'TORMENTA ELÉCTRICA',d:'Veloz y ligero · electricidad',m:'Chispas · Rayo del cielo · Relámpago ascendente · Carga estática',
 mv:{N:['spread',{v:12,d:3,k:3,l:35,r:6,col:'#fff36b'}],S:['bolt',{d:9,k:8,r:40,col:'#fff36b'}],U:['tup',{dy:-170,d:5,k:6}],D:['mine',{d:9,k:8,r:14,col:'#fff36b'}]}},
{n:'Roca',col:'#8e9bb5',sp:3,jp:10.5,w:1.5,ad:10,ak:9,cd:36,fn:'CATACLISMO',d:'Lento y pesado · golpes brutales',m:'Peñasco · Roca rodante · Salto sísmico · Terremoto',
 mv:{N:['proj',{v:5,vy:-3,g:.15,d:8,k:8,l:82,r:14,col:'#aab3c7'}],S:['proj',{v:6,d:9,k:9,l:72,r:15,col:'#8e9bb5',gy:1,pi:1}],U:['leap',{d:7,k:8}],D:['quake',{v:6,d:8,k:8,l:52,r:13,col:'#aab3c7'}]}},
{n:'Hielo',col:'#6fe0ff',sp:4.5,jp:12,w:.9,ad:7,ak:6,cd:22,fn:'VENTISCA',d:'Control · congela al rival',m:'Carámbanos · Deslizamiento · Ascenso helado · Zona gélida',
 mv:{N:['rain',{d:4,k:2,r:9,l:90,col:'#bdf3ff',st:25}],S:['dash',{v:16,d:5,k:3,fr:10,st:30}],U:['up',{h:10,fr:16,d:5,k:6,st:25}],D:['frost',{r:150,st:30,d:4}]}},
{n:'Sombra',col:'#9a5cff',sp:5,jp:12.5,w:.85,ad:6,ak:6,cd:18,fn:'ECLIPSE',d:'Sigiloso · teletransportes',m:'Orbes teledirigidos · Paso sombra · Salto umbrío · Velo veloz',
 mv:{N:['proj',{v:6,d:5,k:5,l:110,r:7,col:'#d6b8ff',hm:1}],S:['tele',{v:230,d:8,k:7}],U:['tup',{dx:110,dy:-130,d:6,k:7}],D:['buff',{fr:220}]}},
{n:'Selva',col:'#4fd36a',sp:3.8,jp:11.5,w:1.2,ad:9,ak:8,cd:28,fn:'ENREDADERA GIGANTE',d:'Resistente · se cura',m:'Zarzas · Látigo · Liana curativa · Fotosíntesis',
 mv:{N:['thorn',{d:7,k:5,r:26,col:'#8cf08c'}],S:['whip',{r:150,d:9,k:8}],U:['up',{h:10,fr:18,d:6,k:7,hl:6}],D:['heal',{h:15}]}},
{n:'Viento',col:'#b8f2e6',sp:5.8,jp:13.5,w:.7,ad:5,ak:5,cd:15,fn:'TORNADOS',d:'Ultraligero · empuja y atrae',m:'Ráfaga serpenteante · Remolino · Planeo · Ojo de la tormenta',
 mv:{N:['proj',{v:9,d:3,k:7,l:70,r:12,col:'#e0fff8',sn:1}],S:['pull',{}],U:['glide',{}],D:['shield',{}]}},
{n:'Ninja',col:'#ff4d6d',sp:5.2,jp:12.5,w:.9,ad:7,ak:6,cd:18,fn:'MIL CORTES',d:'Técnico · shuriken y cortes',m:'Shuriken boomerang · Tajo trasero · Salto diagonal · Abanico de shuriken',
 mv:{N:['proj',{v:13,d:4,k:4,l:60,r:6,col:'#eeeeee',bo:1}],S:['back',{d:10,k:9}],U:['up',{h:9,fr:16,vx:8,d:6,k:7}],D:['fan',{v:11,d:3,k:3,l:35,r:5,col:'#eeeeee'}]}},
{n:'Astro',col:'#ff9ee5',sp:3.6,jp:11,w:1.3,ad:10,ak:9,cd:30,fn:'SUPERNOVA',d:'Cósmico · orbes y cometas',m:'Planeta perforante · Cometa · Ascenso gravitatorio · Colapso',
 mv:{N:['proj',{v:4,d:8,k:7,l:140,r:20,col:'#c9a3ff',pi:1}],S:['comet',{d:8,k:8,r:16,l:90,col:'#ffe066'}],U:['up',{h:10,fr:18,d:7,k:8,pl:1}],D:['grav',{d:6,st:18}]}},
{n:'Vacío',col:'#4b3f72',sp:4,jp:12,w:1.2,ad:9,ak:7,cd:30,fn:'EL GRAN APAGÓN',d:'',m:'',
 mv:{N:['nova',{v:5,d:6,k:5,l:42,r:11,col:'#2a1a4a'}],S:['swap',{}],U:['over',{d:7,k:7}],D:['drain',{r:150,d:6,k:5}]}},
{n:'Agua',col:'#3d8bff',sp:4.7,jp:12,w:1,ad:7,ak:6,cd:20,fn:'MAREMOTO',d:'Fluido · olas y embestidas',m:'Burbuja de marea · Tabla de espuma · Géiser · Corriente de fondo',
 mv:{N:['bubble',{v:5,d:5,k:3,l:100,r:14,col:'#a9ecff',st:28,pi:1,hm:1}],S:['surf',{v:12,d:6,k:6,fr:18}],U:['fountain',{h:13,fr:20,d:7,k:7}],D:['tide',{v:9,d:7,k:7,l:78,r:17,col:'#3d8bff',pi:1}]}},
{n:'Veneno',col:'#b6e02f',sp:4.3,jp:12,w:1,ad:6,ak:5,cd:20,fn:'PANTANO MORTAL',d:'Sucio · envenena con el tiempo',m:'Baba corrosiva · Estanque ácido · Estallido de esporas · Espinas tóxicas',
 mv:{N:['glob',{v:7,vy:-4,g:.16,d:5,k:4,l:86,r:11,col:'#c8ef45',ps:1,st:10}],S:['pool',{d:3,k:2,r:31,col:'#b6e02f',ps:1,repeat:1}],U:['spores',{d:4,k:2,r:7,col:'#d9ff68',ps:1}],D:['eruption',{d:7,k:6,r:13,col:'#b6e02f',ps:1}]}},
{n:'Acero',col:'#d9dde6',sp:3.4,jp:11,w:1.4,ad:11,ak:9,cd:32,fn:'LLUVIA DE ESPADAS',d:'Blindado · cortes perforantes',m:'Filo perseguidor · Ariete blindado · Ascenso magnético · Yunque sísmico',
 mv:{N:['blade',{v:11,d:6,k:5,l:90,r:7,col:'#e7f0ff',pi:1,bo:1}],S:['ram',{v:13,d:10,k:10,fr:13}],U:['magnetrise',{h:15,d:8,k:8}],D:['anvil',{d:13,k:12,r:64}]}},
{n:'Luz',col:'#fff6c9',sp:5.2,jp:12.5,w:.85,ad:6,ak:6,cd:18,fn:'AMANECER',d:'Radiante · curación y rayos',m:'Rayo prismático · Espejo solar · Alba ascendente · Renovación',
 mv:{N:['prism',{v:10,d:5,k:4,l:62,r:8,col:'#fff6c9',pi:1,ref:1}],S:['mirror',{d:8,k:8}],U:['sunrise',{d:7,k:7}],D:['renewal',{h:18}]}},
{n:'Cristal',col:'#9ef7ff',sp:4.4,jp:12,w:.9,ad:7,ak:7,cd:21,fn:'PRISMA ETERNO',d:'Defensa brillante · rebota proyectiles',m:'Lanza prismática · Espejo solar · Alba ascendente · Renovación',mv:{N:['shards',{v:9,d:5,k:5,l:72,r:9,col:'#9ef7ff'}],S:['mirror',{d:8,k:8}],U:['sunrise',{d:7,k:7}],D:['renewal',{h:16}]}},
{n:'Magma',col:'#ff713d',sp:3.7,jp:11,w:1.35,ad:11,ak:10,cd:29,fn:'NÚCLEO ARDIENTE',d:'Lento y resistente · lava explosiva',m:'Baba ígnea · Embestida · Géiser · Erupción',mv:{N:['lavawave',{v:8,d:7,k:6,l:62,r:12,col:'#ff713d'}],S:['dash',{v:14,d:8,k:8,fr:12}],U:['fountain',{h:12,fr:18,d:7,k:7}],D:['eruption',{d:8,k:7,r:14,col:'#ff713d'}]}},
{n:'Eco',col:'#a9ffcf',sp:5.1,jp:12.3,w:.82,ad:6,ak:5,cd:17,fn:'ONDA INFINITA',d:'Ágil · ondas que persiguen',m:'Eco sónico · Látigo · Salto diagonal · Remolino',mv:{N:['echo',{d:4,k:4,r:42,l:36,col:'#a9ffcf'}],S:['whip',{r:140,d:8,k:7}],U:['leap',{d:7,k:6}],D:['echopulse',{d:6,k:6,r:66}]}},
{n:'Gravedad',col:'#bd9cff',sp:3.9,jp:11.5,w:1.15,ad:8,ak:8,cd:25,fn:'COLAPSO ESTELAR',d:'Controla el espacio y atrae rivales',m:'Nova · Intercambio · Pozo gravitatorio · Cataclismo',mv:{N:['nova',{v:5,d:6,k:5,l:42,r:11,col:'#bd9cff'}],S:['singularity',{d:3,k:2,r:42,l:84,col:'#bd9cff',pull:1,repeat:1}],U:['grav',{d:6,st:16}],D:['quake',{v:5,d:9,k:9,l:60,r:15,col:'#bd9cff'}]}},
{n:'Aurora',col:'#ff9bd0',sp:4.8,jp:12.8,w:.88,ad:7,ak:6,cd:20,fn:'CIELO POLAR',d:'Velocidad y magia curativa',m:'Burbuja polar · Espejo solar · Alba ascendente · Renovación',mv:{N:['aurora',{v:8,d:5,k:4,l:68,r:11,col:'#ff9bd0'}],S:['mirror',{d:8,k:8}],U:['sunrise',{d:7,k:7}],D:['renewal',{h:18}]}}];
const MAPS=[
{n:'Cumbre',p:[{x:230,y:390,w:500,t:0},{x:290,y:290,w:140,t:1},{x:530,y:290,w:140,t:1}],c:['#2b1d52','#d9684b','#fbe3b8','#3a2557'],g:'#6fcf6a'},
{n:'Tres islas',p:[{x:90,y:380,w:230,t:0},{x:365,y:310,w:230,t:0},{x:640,y:380,w:230,t:0},{x:430,y:190,w:100,t:1,a:70,s:.02}],c:['#0f3b57','#2fb5a5','#fff1b8','#14566e'],g:'#c9e57a'},
{n:'Volcán',p:[{x:200,y:420,w:560,t:0},{x:140,y:310,w:120,t:1},{x:420,y:250,w:120,t:1},{x:700,y:310,w:120,t:1}],c:['#1a0b12','#c2381f','#ffb347','#3d1420'],g:'#ff8f4a'},
{n:'Nubes',p:[{x:160,y:400,w:260,t:0},{x:540,y:400,w:260,t:0},{x:350,y:300,w:260,t:1,a:60,s:.02},{x:80,y:260,w:120,t:1},{x:760,y:260,w:120,t:1}],c:['#5ab0ff','#d6f0ff','#fff7d6','#a8d6ff'],g:'#ffffff'},
{n:'Ciudad neón',p:[{x:100,y:420,w:760,t:0},{x:200,y:320,w:160,t:1},{x:600,y:320,w:160,t:1},{x:400,y:230,w:160,t:1}],c:['#0b0b2a','#7a1fa2','#ff4fd8','#1a1450'],g:'#38f9ff'},
{n:'Desierto',p:[{x:100,y:400,w:300,t:0},{x:560,y:400,w:300,t:0},{x:400,y:300,w:160,t:1}],c:['#f4a259','#f7d794','#fff4c2','#c8773a'],g:'#e9c46a'},
{n:'Espacio',p:[{x:330,y:400,w:300,t:0},{x:90,y:300,w:150,t:1,a:60,s:.02},{x:720,y:300,w:150,t:1,a:60,s:-.02},{x:405,y:215,w:150,t:1}],c:['#05061a','#2a1b5e','#b9c7ff','#17123a'],g:'#9fb4ff'},
{n:'Templo en ruinas',p:[{x:180,y:410,w:600,t:0},{x:230,y:310,w:140,t:1},{x:590,y:310,w:140,t:1},{x:410,y:220,w:140,t:1,a:90,s:.025}],c:['#3b2a1a','#e8a35a','#ffe6a8','#5a3a22'],g:'#b7c46a'},
{n:'Aurora glaciar',p:[{x:120,y:410,w:300,t:0},{x:540,y:410,w:300,t:0},{x:330,y:320,w:300,t:1,a:40,s:.03},{x:400,y:210,w:160,t:1}],c:['#0b2a4a','#5ec8e8','#e8fbff','#2d6a8f'],g:'#e8fbff'},
{n:'Bosque encantado',p:[{x:150,y:410,w:660,t:0},{x:100,y:300,w:140,t:1},{x:720,y:300,w:140,t:1},{x:410,y:240,w:140,t:1}],c:['#0d2a1a','#2f7a4a','#e6f5a0','#14402a'],g:'#7ee06a'},
{n:'Mar de cristal',p:[{x:120,y:410,w:260,t:0},{x:580,y:410,w:260,t:0},{x:330,y:320,w:300,t:1,a:50,s:.025},{x:410,y:220,w:140,t:1}],c:['#062a5c','#2f7fd6','#bfe9ff','#0e3f80'],g:'#9fe6ff'},
{n:'Pantano tóxico',p:[{x:140,y:410,w:680,t:0},{x:200,y:310,w:130,t:1,a:30,s:.03},{x:630,y:310,w:130,t:1,a:30,s:-.03},{x:415,y:230,w:130,t:1}],c:['#1b2a0a','#6a8f1a','#eaff9a','#2a3d10'],g:'#b6e02f'},
{n:'Fortaleza de acero',p:[{x:210,y:410,w:540,t:0},{x:90,y:300,w:150,t:1},{x:720,y:300,w:150,t:1},{x:300,y:240,w:100,t:1,a:80,s:.02},{x:560,y:240,w:100,t:1,a:80,s:-.02}],c:['#1a1d26','#4a5568','#ffd9a0','#2a2f3d'],g:'#aab6c8'},
{n:'Santuario del Alba',p:[{x:180,y:410,w:600,t:0},{x:140,y:290,w:130,t:1},{x:690,y:290,w:130,t:1},{x:410,y:200,w:140,t:1,a:100,s:.02}],c:['#2a1050','#ff9bd0','#fff6c9','#4a1f7a'],g:'#fff6c9'},
{n:'Cueva de Cristal',p:[{x:150,y:420,w:660,t:0},{x:80,y:315,w:160,t:1},{x:400,y:270,w:160,t:1,a:46,s:.026},{x:720,y:315,w:160,t:1},{x:390,y:175,w:180,t:1}],c:['#102439','#297c99','#d3fbff','#19384e'],g:'#9ef7ff'},
{n:'Cráter Celeste',p:[{x:110,y:410,w:250,t:0},{x:600,y:410,w:250,t:0},{x:340,y:330,w:280,t:1},{x:185,y:240,w:130,t:1,a:45,s:.02},{x:645,y:240,w:130,t:1,a:45,s:-.02},{x:410,y:165,w:140,t:1}],c:['#21143e','#9d4edd','#f7b267','#45245f'],g:'#ffc857'},
{n:'Reloj del Eclipse',p:[{x:190,y:415,w:580,t:0},{x:85,y:300,w:150,t:1},{x:725,y:300,w:150,t:1},{x:350,y:275,w:260,t:1,a:38,s:.018},{x:405,y:170,w:150,t:1}],c:['#111528','#475569','#e8d5ff','#20233b'],g:'#c7a8ff'}];
MAPS.forEach(m=>m.p.forEach(l=>{l.ox=l.x}));
let PL=MAPS[0].p,FX=[];
function burst(x,y,col,n=10,speed=4){for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=.8+Math.random()*speed;FX.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-1,life:18+Math.random()*20,max:38,col,r:2+Math.random()*3})}}
function doSp(p,o,m){X.sp(p);const[t,q]=m,f=p.f,cx=p.x+p.w/2;p.pose=t;p.poseT=Math.max(p.poseT||0,22);burst(cx+f*14,p.y+24,p.c.col,12,3.8);
 if(['proj','bubble','glob','blade','prism'].includes(t))B.push({x:cx+f*20,y:p.y+(q.gy?p.h-q.r:18),vx:f*q.v,vy:q.vy||0,o:p,l:q.l,q,dl:0});
 else if(t=='spread')for(const a of[-3,0,3])B.push({x:cx+f*20,y:p.y+18,vx:f*q.v,vy:a,o:p,l:q.l,q,dl:0});
 else if(t=='shards')for(const a of[-1,0,1])B.push({x:cx+f*20,y:p.y+12,vx:f*q.v,vy:a*3,o:p,l:q.l,q:{...q,kind:'shard'},dl:0});
 else if(t=='lavawave')for(let i=-1;i<=1;i++)B.push({x:cx+f*18,y:p.y+p.h-8,vx:f*(q.v-i),vy:-3-Math.abs(i),o:p,l:q.l,q:{...q,kind:'lava-wave',g:.22,r:q.r},dl:Math.abs(i)*3});
 else if(t=='echo')B.push({x:cx+f*25,y:p.y+25,vx:f*1.2,vy:0,o:p,l:q.l,q:{...q,kind:'echo-wave',repeat:1},dl:0});
 else if(t=='echopulse'){const dx=o.x+o.w/2-cx;if(Math.abs(dx)<q.r&&Math.abs(o.y-p.y)<60&&Math.sign(dx)==f){hit(o,q.d,q.k,f);o.stun=Math.max(o.stun,18)}}
 else if(t=='singularity')B.push({x:cx+f*30,y:p.y+24,vx:0,vy:0,o:p,l:q.l,q:{...q,kind:'singularity'},dl:0});
 else if(t=='aurora')for(const a of[-2,-1,0,1,2])B.push({x:cx+f*18,y:p.y+15,vx:f*q.v,vy:a*1.8,o:p,l:q.l,q:{...q,kind:'aurora',r:q.r},dl:Math.abs(a)*2});
 else if(t=='mine')B.push({x:cx,y:p.y+p.h-10,vx:0,vy:0,o:p,l:420,q,dl:0});
 else if(t=='dash'||t=='surf'||t=='ram'){p.dash=q.fr||12;p.dq=q;p.pose=t;p.poseT=q.fr||18;if(t=='ram')p.armor=18}
 else if(t=='up'){p.up=q.fr||16;p.uq=q;p.jm=2;if(q.hl)p.dmg=Math.max(0,p.dmg-q.hl);if(q.pl&&Math.abs(o.x-p.x)<320){o.vx=(p.x>o.x?1:-1)*9;o.stun=Math.max(o.stun,10)}}
 else if(t=='slam'){p.slam=16;p.sq=q}
 else if(t=='tele'){p.x=Math.max(20,Math.min(W-54,p.x+f*q.v));p.vy=0;p.inv=Math.max(p.inv,12);p.tp=10;p.tq=q}
 else if(t=='rain')for(const a of[-70,0,70])B.push({x:o.x+o.w/2+a,y:-20-Math.abs(a),vx:0,vy:7,o:p,l:90,q});
 else if(t=='pull'){if(Math.abs(o.y-p.y)<70&&Math.abs(o.x-p.x)<380&&Math.sign(o.x-p.x)==f){o.vx=-f*13;o.stun=Math.max(o.stun,14)}}
 else if(t=='shield'){p.inv=Math.max(p.inv,70);p.sc=160}
 else if(t=='buff'){p.buf=q.fr;p.sc=240}
 else if(t=='spray')for(let i=0;i<5;i++)B.push({x:cx+f*20,y:p.y+18+(i-2)*4,vx:f*(8+i),vy:(i-2)*.4,o:p,l:14+i*2,q,dl:i*3});
 else if(t=='bolt')for(let i=0;i<7;i++)B.push({x:o.x+o.w/2,y:i*80+10,vx:0,vy:0,o:p,l:36,q,dl:28});
 else if(t=='whip'){const bx=f>0?p.x+p.w:p.x-q.r;if(Math.abs(o.y-p.y)<60&&o.x+o.w>bx&&o.x<bx+q.r)hit(o,q.d,q.k,f)}
 else if(t=='back'){const s=p.x<o.x?1:-1;p.x=Math.max(20,Math.min(W-54,o.x+s*46));p.f=-s;if(o.gr)p.y=o.y;p.vy=0;p.inv=Math.max(p.inv,12);p.tp=10;p.tq=q}
 else if(t=='comet'){const s=o.x<W/2?1:-1,ty=Math.max(15,(o.y+25)/9|0);B.push({x:o.x+17+s*7*ty,y:-30,vx:-s*7,vy:9,o:p,l:90,q,dl:0})}
 else if(t=='swap'){const x=p.x,y=p.y;p.x=o.x;p.y=o.y;o.x=x;o.y=y;o.vx=o.vy=0;o.stun=Math.max(o.stun,12);p.inv=Math.max(p.inv,10)}
 else if(t=='nova')for(let i=0;i<8;i++){const a=i*Math.PI/4;B.push({x:cx,y:p.y+25,vx:Math.cos(a)*q.v,vy:Math.sin(a)*q.v,o:p,l:q.l,q,dl:0})}
 else if(t=='thorn')B.push({x:o.x+o.w/2,y:o.y+o.h-10,vx:0,vy:0,o:p,l:62,q,dl:22});
 else if(t=='quake')for(const s of[-1,1])B.push({x:cx+s*20,y:p.y+p.h-q.r,vx:s*q.v,vy:0,o:p,l:q.l,q,dl:0});
 else if(t=='frost'){if(!o.shd&&Math.hypot(o.x-p.x,o.y-p.y)<q.r){o.stun=Math.max(o.stun,q.st);o.dmg+=q.d;o.vx=0}}
 else if(t=='fan')for(let i=-2;i<=2;i++)B.push({x:cx+f*20,y:p.y+18,vx:f*q.v,vy:i*2.2,o:p,l:q.l,q,dl:0});
 else if(t=='grav'){if(!o.shd&&Math.abs(o.x-p.x)<340){o.vy=16;o.vx*=.2;o.stun=Math.max(o.stun,q.st);o.dmg+=q.d;sfx('hit')}}
 else if(t=='drain'){if(Math.hypot(o.x-p.x,o.y-p.y)<q.r){hit(o,q.d,q.k,Math.sign(o.x-p.x)||1);p.dmg=Math.max(0,p.dmg-q.d)}}
 else if(t=='tup'){p.x=Math.max(20,Math.min(W-54,p.x+f*(q.dx||0)));p.y=Math.max(-40,p.y+q.dy);p.vy=0;p.jm=2;p.inv=Math.max(p.inv,12);p.tp=12;p.tq=q}
 else if(t=='leap'){p.vy=-13;p.vx=f*4.5;p.jm=2;p.tp=22;p.tq=q}
 else if(t=='glide'){p.vy=-11;p.gl=100;p.jm=2}
 else if(t=='over'){p.x=Math.max(20,Math.min(W-54,o.x));p.y=Math.max(-40,o.y-130);p.vy=0;p.jm=2;p.inv=Math.max(p.inv,12);p.tp=14;p.tq=q}
 else if(t=='heal'){p.dmg=Math.max(0,p.dmg-q.h);p.inv=Math.max(p.inv,30);p.sc=240}
 else if(t=='tide'){for(let i=0;i<2;i++)B.push({x:cx+f*(24+i*18),y:p.y+p.h-13,vx:f*(q.v-i*2),vy:0,o:p,l:q.l-i*12,q:{...q,kind:'wave',r:q.r-i*3},dl:i*8})}
 else if(t=='fountain'){p.up=q.fr;p.uq=q;p.jm=2;p.vy=-q.h;p.pose=t;p.poseT=28;for(let i=-1;i<=1;i++)B.push({x:cx+i*24,y:p.y+p.h-8,vx:i*1.6,vy:-8-Math.abs(i),o:p,l:34,q:{kind:'waterjet',d:4,k:3,r:9,col:'#8deaff',g:.38,pi:1},dl:0})}
 else if(t=='pool')B.push({x:o.x+o.w/2,y:o.y+o.h-8,vx:0,vy:0,o:p,l:230,q:{...q,kind:'pool'},dl:18});
 else if(t=='spores'){p.vy=-12;p.vx=p.f*3;p.jm=2;p.pose=t;p.poseT=24;for(let i=0;i<7;i++){const a=Math.PI*(.12+i*.11);B.push({x:cx,y:p.y+8,vx:Math.cos(a)*p.f*(4+i%3),vy:-Math.sin(a)*(5+i%3),o:p,l:70,q:{...q,kind:'spore',g:.11},dl:i*2})}}
 else if(t=='eruption'){for(let i=-2;i<=2;i++)B.push({x:cx+i*13,y:p.y+p.h-8,vx:i*1.5,vy:-11-Math.abs(i),o:p,l:40,q:{...q,kind:'toxic-spike',g:.22,r:10},dl:Math.abs(i)*4})}
 else if(t=='magnetrise'){p.vy=-q.h;p.vx=(o.x>p.x?1:-1)*5;p.jm=2;p.inv=Math.max(p.inv,12);p.tp=18;p.tq=q;p.pose=t;p.poseT=26;p.armor=20}
 else if(t=='anvil'){p.vy=4;p.vx=0;p.slam=22;p.sq=q;p.pose=t;p.poseT=28;p.armor=24}
 else if(t=='mirror'){p.inv=Math.max(p.inv,76);p.sc=190;p.pose=t;p.poseT=48}
 else if(t=='sunrise'){p.vy=-16;p.vx*=.5;p.jm=2;p.tp=18;p.tq=q;p.inv=Math.max(p.inv,12);p.pose=t;p.poseT=30;for(let i=-1;i<=1;i++)B.push({x:cx+i*15,y:p.y+15,vx:i*1.4,vy:-8,o:p,l:28,q:{kind:'sunray',d:3,k:2,r:7,col:'#fff8cb',pi:1},dl:0})}
 else if(t=='renewal'){p.dmg=Math.max(0,p.dmg-q.h);p.psn=0;p.inv=Math.max(p.inv,22);p.pose=t;p.poseT=52;for(let i=0;i<6;i++)B.push({x:cx+Math.cos(i)*26,y:p.y+Math.sin(i)*15,vx:Math.cos(i)*1.2,vy:-1.5-Math.random()*2,o:p,l:42,q:{kind:'mote',d:0,k:0,r:4,col:'#fff6c9',pi:1},dl:0})}}
const KB1={l:'KeyA',r:'KeyD',u:'KeyW',d:'KeyS',a:'KeyF',s:'KeyG',f:'KeyH',h:'KeyQ',g:'KeyE'},KB2={l:'ArrowLeft',r:'ArrowRight',u:'ArrowUp',d:'ArrowDown',a:'KeyK',s:'KeyL',f:'Semicolon',h:'KeyO',g:'KeyP'};
const vk=pre=>Object.fromEntries([...'lrudasfhg'].map(a=>[a,pre+a])),CPK=[0,1,2,3].map(i=>vk('U'+i)),GPK=[0,1,2,3].map(i=>vk('G'+i)),PCOL=['#ff6ea8','#5ec8ff','#6fcf6a','#ffd23c'];
const devKeys=d=>d=='kb1'?KB1:d=='kb2'?KB2:/^gp\d$/.test(d||'')?GPK[+d[2]]:null;let FD=['kb1','kb2'],PADS=[],PQ={};
const C=[KB1,KB2,CPK[2],CPK[3]];const REMOTE_KEYS=new Set(Object.values(KB2));const blockLocalRemoteKey=c=>onlineActive&&scr=='fight'&&REMOTE_KEYS.has(c);
let CFG={dev:['kb1','kb2','off','off'],pad:0,sfx:1,mus:1,vol:.6,shk:1,items:1,lang:'es',difficulty:1};
try{Object.assign(CFG,JSON.parse(localStorage.getItem('dlc')||'{}'))}catch(e){}
function applyCfg(){let D=CFG.dev;if(!Array.isArray(D)||D.length!=4)D=CFG.dev=['kb1','kb2','off','off'];
 if(MD.k=='ffa'){FD=D.filter(d=>d!='off');BOT=FD.map(d=>d=='cpu'?1:0);for(let j=0;j<4;j++)C[j]=j<FD.length&&FD[j]!='cpu'?devKeys(FD[j]):CPK[j]}
 else for(let i=0;i<4;i++){let d=D[i];if(i<2&&(d=='off'||d=='cpu'||/^gp/.test(d)&&!PADS.some(x=>'gp'+x.index==d)))d=i?'kb2':'kb1';C[i]=i>1||(i==1&&BOT[1])?CPK[i]:devKeys(d)||CPK[i]}}
let onlineActive=false,onlineSocket=null,onlineSlot=0,onlineMatchId=null,onlineMessage='',onlineAttempt=0,lastOnlineState=0,onlineResultSent=false,onlineReady=[false,false],onlineStarted=false;
const saveCfg=()=>{applyCfg();syncLanguage();try{localStorage.setItem('dlc',JSON.stringify(CFG))}catch(e){}};
const dvOf=i=>MD.k=='ffa'?FD[i]:onlineActive?(i==onlineSlot?CFG.dev[0]:'kb2'):i>1||(i==1&&BOT[1])?'cpu':(CFG.dev[i]&&CFG.dev[i]!='off'&&CFG.dev[i]!='cpu'?CFG.dev[i]:i?'kb2':'kb1'),
ctl=i=>{const d=dvOf(i);return /^gp/.test(d)?'Mando '+(+d[2]+1)+' ◀▶ + B':d=='kb2'?'←/→ + K':d=='cpu'?'CPU':'A/D + F'},lbl=i=>{const d=dvOf(i);return /^gp/.test(d)?'RB':d=='kb2'?'Ñ':'H'};
let AC=null,MG=null,mN=0,mT=0;
function au(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)();MG=AC.createGain();MG.connect(AC.destination)}catch(e){}}if(AC){if(AC.state=='suspended')AC.resume();MG.gain.value=CFG.vol}}
function bl(f,d,ty,v,sl=0,dl=0,mu){if(!AC||(mu?!CFG.mus:!CFG.sfx))return;const o=AC.createOscillator(),G=AC.createGain(),t=AC.currentTime+dl;o.type=ty;o.frequency.setValueAtTime(f,t);if(sl)o.frequency.linearRampToValueAtTime(Math.max(20,f+sl),t+d);G.gain.setValueAtTime(v,t);G.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(G);G.connect(MG);o.start(t);o.stop(t+d+.02)}
function nz(d,v,dl=0,mu){if(!AC||(mu?!CFG.mus:!CFG.sfx))return;const n=AC.sampleRate*d|0,b=AC.createBuffer(1,n,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=(Math.random()*2-1)*(1-i/n);const s=AC.createBufferSource(),G=AC.createGain();s.buffer=b;G.gain.value=v;s.connect(G);G.connect(MG);s.start(AC.currentTime+dl)}
function spS(c){const f=CH.indexOf(c);bl(140+f*38,.3,['sawtooth','square','triangle'][f%3],.14,f%2?650:-90);nz(.15,.08)}
function sfx(n){switch(n){case'mv':bl(520,.05,'square',.1);break;case'ok':bl(440,.07,'square',.14,300);bl(660,.1,'square',.12,0,.07);break;case'jp':bl(260,.12,'square',.08,260);break;case'sw':nz(.06,.12);break;
 case'hit':nz(.1,.35);bl(170,.12,'sawtooth',.22,-100);break;case'big':nz(.2,.5);bl(110,.25,'sawtooth',.35,-80);break;case'sp':bl(180,.3,'sawtooth',.14,700);nz(.2,.1);break;
 case'sm':bl(70,.9,'sawtooth',.35,-30);bl(300,.5,'square',.12,900);nz(.7,.4);break;case'it':bl(660,.08,'square',.14);bl(990,.14,'square',.14,0,.08);break;
 case'bomb':nz(.5,.6);bl(60,.5,'sawtooth',.4,-30);break;case'ko':bl(440,.6,'sawtooth',.25,-380);nz(.4,.3);break;case'rd':[392,523,659,784].forEach((f,i)=>bl(f,.12,'square',.12,0,i*.05));break;case'sel':bl(880,.04,'triangle',.08);break;case'mag':bl(900,.25,'sawtooth',.14,-700);bl(500,.2,'square',.1,400,.1);break;case'win':[523,659,784,1047].forEach((f,i)=>bl(f,.25,'square',.15,0,i*.14))}}
const SC=[[0,3,7,12,7,3],[0,3,7,10,7,3],[-2,2,5,9,5,2],[-4,0,3,7,3,0],[0,2,5,9,7,2],[0,4,7,11,9,4],[-3,0,4,7,5,0],[-5,-1,2,7,4,-1]];
function music(){if(!AC||!CFG.mus)return;const fi=scr=='fight',bs=fi&&sty&&sty.ord&&sty.ord[sty.ch]==9,st=60/(fi?(bs?190:148+mapI%5*5):100)/2,now=AC.currentTime;if(mT<now-.5)mT=now+.05;
 while(mT<now+.15){const ch=SC[(mN>>3)%SC.length],n=mN%8,dl=mT-now,fq=r=>110*2**((r+(fi?mapI%7-3:0))/12);
  bl(fq(ch[n%6]+12),st*.9,n%3==0?'triangle':n%3==1?'sine':'square',.07,0,dl,1);if(n==2||n==6)bl(fq(ch[(n+2)%6]+24),st*.48,'triangle',.045,0,dl,1);if(n%4==0)bl(fq(ch[0]-12),st*1.8,'sawtooth',fi?.1:.06,0,dl,1);if(fi&&n%2)nz(.03,.05,dl,1);if(fi){if(n%4==0)bl(55,.12,'sine',.3,-25,dl,1);if(n%4==2)nz(.08,.12,dl,1);if(n%8==6)bl(120+mapI*9,.16,'triangle',.07,260,dl,1);if(bs&&n%2==0)bl(fq(ch[2]+24),st,'sawtooth',.04,0,dl,1)}else if(n%2==0)bl(fq(ch[(n>>1)%4]+24),st*.6,'square',.025,0,dl,1);mT+=st;mN++}}
let PP={},padSelectUntil=0;
function padSelectReady(){const now=performance.now();if(now<padSelectUntil)return false;padSelectUntil=now+260;return true}
function pollPad(){PADS=(navigator.getGamepads?[...navigator.getGamepads()]:[]).filter(x=>x&&x.connected&&x.index<4);
 for(const gp of PADS){const n=gp.index,Q=PQ[n]||(PQ[n]={}),b=i=>gp.buttons[i]&&gp.buttons[i].pressed,tr=i=>gp.buttons[i]&&(gp.buttons[i].pressed||gp.buttons[i].value>.35),x=gp.axes[0]||0,y=gp.axes[1]||0,
  st={l:x<-.5||b(14),r:x>.5||b(15),u:(scr=='fight'&&b(0))||b(12)||(y<-.8&&-y>Math.abs(x)*1.6),d:y>.6||b(13),a:b(2),s:b(3),f:b(5),h:tr(6)||tr(7),g:b(1)||b(4)},
  confirm=b(1),a0=b(0),sel_=scr=='sel',nav=scr!='fight'&&!sel_,confirmEdge=confirm&&!Q.cf;Q.cf=confirm;
  if(confirm||a0||st.l||st.r||st.u||st.d||b(2)||b(3)||b(8)||b(9))Q.act=performance.now();
  if(scr=='ctl'&&a0&&!Q.a0)ctlJoin(n);Q.a0=a0;const s9=b(9);if(scr=='sel'&&s9&&!Q.s9)J.KeyR=1;Q.s9=s9;
  const nv={Escape:b(8)};if(nav){nv.ArrowLeft=st.l;nv.ArrowRight=st.r;nv.ArrowUp=st.u;nv.ArrowDown=st.d;nv.Enter=confirm}
  for(const k in nv){const v=!!nv[k];if(v&&!Q['n'+k]){if(k!='Enter'||padSelectReady()){J[k]=1;au()}}Q['n'+k]=v}
  if(sel_&&confirmEdge&&padSelectReady()){J[onlineActive?KB1.a:GPK[n].a]=1;au()}
  const ol=onlineActive&&scr=='fight'&&gp===PADS[0]&&/^gp/.test((CFG.dev||[])[0]||'');
  if(onlineActive&&!ol)continue;
  for(const a in st){const v=!!st[a],code=ol?KB1[a]:GPK[n][a];if(ol&&v!=!!Q[a])onlineSend({type:'input',key:a,down:v});
   if(v&&!Q[a]){J[code]=1;au()}if(v)K[code]=1;else if(Q[a])K[code]=0;Q[a]=v}}}
function rum(t,d){const dv=dvOf(t.i);if(!/^gp\d$/.test(dv||''))return;try{const gp=PADS.find(x=>x.index==+dv[2]);gp&&gp.vibrationActuator&&gp.vibrationActuator.playEffect('dual-rumble',{duration:120,strongMagnitude:Math.min(1,d/20),weakMagnitude:.5})}catch(e){}}
const K={};let J={},cheatBuffer='';
addEventListener('keydown',e=>{if(!e.repeat){if(/^[a-z]$/i.test(e.key))cheatBuffer=(cheatBuffer+e.key.toLowerCase()).slice(-9);else cheatBuffer='';if(cheatBuffer=='unlockall'){Object.values(ULK).forEach(id=>XS.got[id]=1);X.save();X.chk();X.pop('🔓 '+(X.en()?'All fighters unlocked':'Todos los luchadores desbloqueados'),X.en()?'Cheat code accepted':'Código secreto activado');cheatBuffer='';return}}au();const c=e.code=='ShiftRight'?'ShiftLeft':e.code;if(c.startsWith('Arrow')||c=='Space')e.preventDefault();if(blockLocalRemoteKey(c))return;const was=!!K[c];if(!e.repeat)J[c]=1;K[c]=1;if(!e.repeat&&!was&&onlineActive&&scr=='fight'){const key=Object.keys(KB1).find(k=>KB1[k]==c);if(key)onlineSend({type:'input',key,down:true})}});
addEventListener('keyup',e=>{const c=e.code=='ShiftRight'?'ShiftLeft':e.code;if(blockLocalRemoteKey(c))return;if(K[c]&&onlineActive&&scr=='fight'){const key=Object.keys(KB1).find(k=>KB1[k]==c);if(key)onlineSend({type:'input',key,down:false})}K[c]=0});function menuClick(e){au();if(scr!='menu')return;const rect=cv.getBoundingClientRect(),x=(e.clientX-rect.left)*W/rect.width,y=(e.clientY-rect.top)*H/rect.height;if(x<0||x>W||y<0||y>H)return;if(y<74&&x>790){scr='set';sfx('ok');return}if(menuPage=='root'){if(y>=145)chooseGroup(x<480?0:1);return}if(menuPage=='transition')return;if(y<155||y>480)return;const list=menuPage=='solo'?SOLO:DUO,rows=Math.ceil((list.length+1)/2),col=x<480?0:1,row=Math.max(0,Math.floor((y-164)/(314/rows))),index=row*2+col;if(index<list.length+1){mi=index;chooseMode(index)}}addEventListener('pointerdown',menuClick);cv.addEventListener('pointerdown',e=>{if(scr!='set')return;const rect=cv.getBoundingClientRect(),x=(e.clientX-rect.left)*W/rect.width,y=(e.clientY-rect.top)*H/rect.height;if(y>=387&&y<=423&&x>=525&&x<=715){si=7;CFG.difficulty=Math.max(0,Math.min(3,Math.round((x-525)/190*3)));saveCfg();sfx('ok')}});
let scr='menu',sel=[0,2,0,4],BOT=[0,0],sty=null,mi=0,menuPage='root',menuTarget='solo',menuPunch=0,menuAnim=0,clock=0,LV=1,dl=[],di=0,dn=null,dc=0,rdy=[0,0],P=[],B=[],shake=0,win=null,HZ=[],fs=null,A=null,mapI=0,M=MAPS[0],IS=[],itT=300,MD={k:'vs',st:3,g:1,it:380},SV=0,T=0,cdn=0,yaT=0,fr=0;
function isCoopStory(){return !!(sty&&sty.coop&&MD.k=='st')}
function targetFor(p){if(MD.k=='ffa'){let b=null,bd=1e9;for(const q of P)if(q!==p&&q.st>0){const d=Math.hypot(q.x-p.x,q.y-p.y);if(d<bd){bd=d;b=q}}return b||p}if(!isCoopStory())return P[1-p.i];if(p.i==2)return P.filter(q=>q.i<2&&q.st>0).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0]||P[0];return P[2]}
function spx(i){const gp=PL.filter(l=>!l.t).sort((a,b)=>a.x-b.x);let t=(i+.5)/FD.length*gp.reduce((q,l)=>q+l.w,0);for(const l of gp){if(t<=l.w)return l.x+t-17;t-=l.w}return W/2-17}
const mk=i=>({i,x:MD.k=='ffa'?spx(i):i==0?300:i==1?640:460,y:100,w:34,h:50,vx:0,vy:0,f:MD.k=='ffa'?(spx(i)<W/2?1:-1):i?-1:1,c:CH[sel[i]],dmg:0,fs:0,up:0,uu:0,buf:0,pw:0,ty:'F',tp:0,dq:0,uq:0,sq:0,st:RA.st?RA.st:MD.st,ph:0,jm:0,cd:0,sc:0,stun:0,inv:90,act:0,hd:0,dash:0,slam:0,drop:0,gr:0,on:null,armor:0,pose:'',poseT:0,score:0,king:0,shd:0,shp:100,shT:0,shl:0,shf:0,dg:0,dgi:0,dgd:0,dgv:0,dga:0,adg:0,gbT:0,hold:0,held:0,thr:0,pmT:0,gv:null});
function start(){RA=ruleOn()?mkRA():RA0;PL=MAPS[mapI].p;PL.forEach(l=>{l.x=l.ox;l.dx=0});cdn=180;yaT=0;fr=0;P=MD.k=='ffa'?FD.map((_,j)=>mk(j)):isCoopStory()?[mk(0),mk(1),mk(2)]:[mk(0),mk(1)];if(RA.init)P.forEach(q=>q.dmg=RA.init);B=[];HZ=[];FX=[];IS=[];itT=300;clock=RA.clk>=0?RA.clk:MD.limit||0;fs=null;PL=MAPS[mapI].p;M=MAPS[mapI];if(MD.k=='mis'&&ms&&ms.m.old&&P[1])P[1].old=1;scr='fight';win=null}
const ov=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
function hit(t,d,kb,dir){if(t.inv>0||t.dgi>0)return;d*=RA.dm;if(t.shd){if(A){shBlock(t,d,kb,dir);return}t.shd=0}t.held=0;X.hit(t,d);if(A&&A.pw>0){d*=1.5;kb*=1.3}if(A&&A!==t)A.score=(A.score||0)+d;t.dmg+=d;sfx(d>12?'big':'hit');rum(t,d);t.fs=Math.min(100,t.fs+d*.55);if(A)A.fs=Math.min(100,A.fs+d);const k=(kb+t.dmg*.1)/t.c.w;
 if(t.armor>0){t.vx=dir*k*.18;t.vy=Math.min(t.vy,-1)}else{t.vx=dir*k;t.vy=-k*.6-3;t.stun=Math.min(40,10+k*1.2|0);t.dash=t.slam=t.act=t.up=0}shake=7;burst(t.x+t.w/2,t.y+t.h/2,d>12?'#fff':'#ffd18c',7,3)}
/* ===== ESCUDO / AGARRE (estilo Smash) =====
   Escudo (mantener): burbuja que absorbe golpes y se encoge; si se agota se rompe (aturdido).
     Escudo + ←/→ = esquivar rodando · Escudo + ↓ = esquive en el sitio · Escudo + saltar = salto · Escudo + golpe = agarre
     En el aire: escudo = esquive aéreo (una vez por salto). Escudo perfecto: pulsa justo antes del golpe.
   Agarre: atraviesa el escudo. Mientras sujetas: golpe = puñetazo · ←/→/↑/↓ (o agarre otra vez) = lanzar.
     El agarrado puede forcejear pulsando botones. Esquivar (invulnerable) evita el agarre. */
const vul=t=>t.inv<=0&&!t.shd&&!(t.dgi>0);
function chip(t,d){d*=RA.dm;X.hit(t,d);if(A&&A!==t)A.score=(A.score||0)+d;t.dmg+=d;t.fs=Math.min(100,t.fs+d*.55);if(A)A.fs=Math.min(100,A.fs+d);sfx('hit');rum(t,d);burst(t.x+t.w/2,t.y+t.h/2,'#ffd18c',6,2.5);shake=3}
function shBlock(t,d,kb,dir){const pf=t.shT<=5;if(!pf)t.shp-=d*1.4+.8;
 t.vx+=dir*(pf?.6:Math.min(5.5,kb*.45/t.c.w+d*.07));sfx(pf?'sel':'hit');shake=pf?2:4;
 burst(t.x+t.w/2-dir*14,t.y+t.h/2,pf?'#ffffff':'#9fe8ff',pf?10:6,pf?4:2.5);t.shf=pf?10:6;
 if(t.shp<=0)sBrk(t,dir)}
function sBrk(t,dir){t.shd=0;t.shp=30;t.shl=0;t.stun=110;t.vy=-11;t.vx=(dir||1)*2;t.dash=t.slam=t.act=t.up=0;sfx('big');shake=12;burst(t.x+t.w/2,t.y+t.h/2,'#9fe8ff',26,6)}
function gStart(p){p.shd=0;p.gbT=24;p.hd=0;p.act=0;p.vx*=.3;sfx('sw')}
function gRel(p){const v=p.gv;if(v&&v.held>0){v.held=0;v.inv=Math.max(v.inv,12);v.vx=(v.x>p.x?1:-1)*3;v.vy=-3}p.gv=null;p.hold=0;p.gbT=Math.max(p.gbT,9);p.hd=1}
function gTry(p,o){const f=p.f,b={x:f>0?p.x+p.w-2:p.x-38,y:p.y+2,w:40,h:p.h-2},L=MD.k=='ffa'?P.filter(q=>q!==p&&q.st>0):[o];
 for(const t of L){if(!t||t===p||t.inv>0||t.dgi>0||t.held>0||(t.stun>0&&t.stun<=40)||!ov(b,t))continue;
  const h=Math.max(40,Math.min(170,150-t.dmg*.9))|0;
  if(t.hold>0)gRel(t);
  p.gv=t;p.hold=h;p.hd=1;p.gbT=0;p.shd=0;p.vx=0;
  t.held=h;t.shd=0;t.stun=0;t.dg=t.dgi=t.gbT=t.thr=0;t.act=t.dash=t.slam=t.up=0;t.vx=t.vy=0;
  sfx('big');shake=4;burst(t.x+t.w/2,t.y+t.h/2,'#ffffff',10,3);return true}
 return false}
function thrw(p,v,t){const f=p.f;let d=6,kb=9.5,ax=f,ay=-.5;
 if(t=='U'){d=5;kb=8.5;ax=f*.2;ay=-1}else if(t=='D'){d=4;kb=5;ax=f*.4;ay=-.45}
 else if(t=='L'||t=='R'){ax=t=='L'?-1:1;if(ax!=f){d=7;p.f=ax}}
 v.held=0;p.hold=0;p.gv=null;p.hd=1;p.thr=16;v.inv=0;v.shd=0;
 hit(v,d,kb,ax||1);const k=(kb+v.dmg*.1)/v.c.w;v.vx=ax*k;v.vy=ay*k-2;if(t=='D')v.stun=Math.min(v.stun,14)}
function upd(p,o){if((isCoopStory()||MD.k=='ffa')&&p.st<=0)return;const k=onlineActive?(p.i==onlineSlot?KB1:KB2):C[p.i],c=p.c,cpu=p.i==2&&isCoopStory()?p.cpuInput:null,down=a=>cpu?cpu[a]?.d:!!K[k[a]],just=a=>cpu?cpu[a]?.j:!!J[k[a]];A=p;
 ['cd','sc','inv','drop','buf','pw','gl','psn','armor','poseT','slow','dgi','dg','gbT','thr','shl','pmT'].forEach(n=>{if(p[n]>0)p[n]--});if(p.psn>0)p.dmg+=.03;
 const dir=o.x>p.x?1:-1;
 if(p.held>0){p.held--;p.shd=0;p.vx=p.vy=0;p.act=p.dash=p.slam=p.up=p.dg=p.gbT=0;if(['a','s','u','l','r','d','h','g'].some(just))p.held-=6;return}
 if(p.hold>0){const v=p.gv||(p.gv=o);if(p.stun>0||!v||!(v.held>0)||v.inv>0||v.st<=0||p.hold<=1)gRel(p)}
 if(p.shd&&p.stun>0)p.stun=0;
 if(p.stun>0){p.stun--;p.vx*=.98}
 else{
  const m=(down('r')?1:0)-(down('l')?1:0);
  if(p.hold>0){const v=p.gv;p.hold--;p.vx=0;p.shd=0;v.x=p.f>0?p.x+p.w+1:p.x-v.w-1;v.y=p.y;v.f=-p.f;v.vx=v.vy=0;
   if(just('a')&&!p.pmT){p.pmT=13;chip(v,1.8)}
   const tt=just('u')?'U':just('d')?'D':just('l')?'L':just('r')?'R':just('g')?'F':null;if(tt)thrw(p,v,tt)}
  else if(p.gbT>0||p.thr>0){p.shd=0;p.vx*=.6;if(p.gbT>=10&&p.gbT<=16&&!p.hd)gTry(p,o)}
  else if(p.dg>0){p.shd=0;if(p.dga){p.vx=p.dgd*5.5;p.vy=p.dgv*5.5}else if(p.dgd)p.vx=p.dgd*(p.dg>9?7.2:1.5);else p.vx*=.6}
  else if(p.dash>0){p.dash--;p.vx=p.f*p.dq.v;p.vy=0}
  else if(p.slam>0){p.slam--;p.vx=0;p.vy=Math.max(p.vy,6)}
  else if(p.up>0){p.up--;p.vy=-p.uq.h;p.vx=p.uq.vx?p.f*p.uq.vx:p.vx*.9+((K[k.r]?1:0)-(K[k.l]?1:0))*.5;if(!p.up){p.vy=-3;if(p.uq.vx)p.vx*=.4}}
  else{
   let bsy=0;const sOn=p.gr&&down('h')&&!just('u')&&!p.act&&p.shp>0&&(p.shd||p.shl<=0);
   if(sOn){
    if(!p.shd){p.shd=1;p.shT=0;sfx('sel')}else p.shT++;
    p.shp-=.35;p.vx*=.55;bsy=1;
    if(just('f')&&p.fs>=100&&RA.fsm){p.shd=0;fsGo(p,o)}
    else if(just('a')||just('g'))gStart(p);
    else if(just('d')){p.shd=0;p.dg=22;p.dgi=15;p.dgd=0;p.dga=0}
    else if(just('l')||just('r')){p.shd=0;p.dg=24;p.dgi=17;p.dgd=just('r')?1:-1;p.dga=0}
    else if(p.shp<=0)sBrk(p,p.f)}
   else{
    if(p.shd){p.shd=0;p.shl=5}
    if(p.gr&&just('g')&&!p.act){gStart(p);bsy=1}
    else if(!p.gr&&just('h')&&!p.adg&&!p.act){p.adg=1;p.dg=22;p.dgi=16;p.dga=1;p.dgd=m;p.dgv=down('d')?1:down('u')?-1:0;bsy=1;sfx('sw')}}
   if(!bsy){
   if(m){p.f=m;p.vx+=(m*c.sp*(p.buf>0?1.6:p.slow>0?.5:1)-p.vx)*.25}else p.vx*=p.gr?.75:.95;
   if(just('u')&&p.jm<2){p.vy=-c.jp*(p.jm?.9:1);p.jm++;p.gr=0;sfx('jp')}
   if(just('d')&&p.gr&&p.on&&p.on.t){p.drop=14;p.y+=3;p.gr=0}
   if(just('f')&&p.fs>=100&&RA.fsm)fsGo(p,o);if(just('a')&&!p.cd&&!p.act){p.ty=down('u')?'U':(!p.gr&&down('d'))?'D':'F';p.act=14;p.hd=0;p.cd=c.cd;sfx('sw')}
   if(just('s')&&!p.sc){p.sc=70;p.hd=0;spS(c);
    if(down('u')&&!p.uu){p.uu=1;doSp(p,o,c.mv.U)}
    else if(down('d'))doSp(p,o,c.mv.D);
    else if(m)doSp(p,o,c.mv.S);
    else doSp(p,o,c.mv.N)}
   }
  }
 }
 // golpes
 if(p.act>0){p.act--;if(p.act<=10&&p.act>=4&&!p.hd){
  const b=abox(p);
  const oo=MD.k=='ffa'?(P.find(q=>q!==p&&q.st>0&&ov(b,q))||o):o;if(ov(b,oo)){const ok=vul(oo);hit(oo,c.ad*(p.ty=='F'?1:.9),c.ak,p.ty=='U'?0:p.f);if(ok){if(p.ty=='D'){oo.vy=13;oo.vx*=.3}else if(p.ty=='U')oo.vy-=4}p.hd=1}}}
 if(p.dash>0&&!p.hd&&ov({x:p.x-6,y:p.y-4,w:p.w+12,h:p.h+8},o)){hit(o,p.dq.d,p.dq.k,p.f);if(p.dq.st)o.stun=Math.min(60,o.stun+p.dq.st);p.hd=1}
 if(p.tp>0){p.tp--;if(!p.hd&&ov({x:p.x-10,y:p.y-10,w:p.w+20,h:p.h+20},o)){hit(o,p.tq.d,p.tq.k,p.f);p.hd=1}}
 if(p.up>0&&!p.hd&&ov({x:p.x-8,y:p.y-24,w:p.w+16,h:p.h+30},o)){hit(o,p.uq.d,p.uq.k,dir);if(p.uq.st)o.stun=Math.min(60,o.stun+p.uq.st);p.hd=1}
 if(p.slam>0&&p.slam<=10&&!p.hd&&ov({x:p.x-p.sq.r,y:p.y-10,w:p.w+2*p.sq.r,h:p.h+20},o)){hit(o,p.sq.d,p.sq.k,dir);p.hd=1}
 // física
 if(!p.shd&&p.shp<100)p.shp=Math.min(100,p.shp+.1);
 if(!p.dash&&!(p.dg>0&&p.dga&&!(p.stun>0)))p.vy=Math.min(p.vy+.6*MD.g*RA.grav*(p.gl>0?.25:1),(down('d')&&!p.gr)?18:14);
 if(p.on&&p.on.dx)p.x+=p.on.dx;p.x+=p.vx;const prev=p.y+p.h;p.y+=p.vy;p.gr=0;p.on=null;
 if(p.vy>=0&&!p.drop)for(const l of PL)
  if(p.x+p.w>l.x&&p.x<l.x+l.w&&prev<=l.y+1&&p.y+p.h>=l.y){p.y=l.y-p.h;if(p.vy>9)nz(.05,.12);p.vy=0;p.gr=1;p.jm=0;p.uu=0;p.adg=0;p.on=l;break}
 if(p.x<-120||p.x>W+120||p.y>H+120||p.y<-330){
  if(p.hold>0)gRel(p);p.st--;shake=12;sfx('ko');
  if(p.st<=0){if(MD.k=='ffa'){p.x=p.y=-1000;p.vx=p.vy=0;const al=P.filter(q=>q.st>0);if(al.length<=1){scr='end';win=al[0]||p;sfx('win');X.end(win)}}else if(isCoopStory()&&p.i<2){if(P[0].st<=0&&P[1].st<=0){scr='end';win=P[2];sfx('win');X.end(win)}else{p.x=-1000;p.y=-1000}}else if(isCoopStory()){const ally=P.filter(q=>q.i<2&&q.st>0).sort((a,b)=>a.st==b.st?a.dmg-b.dmg:b.st-a.st)[0];scr='end';win=ally||P[0];sfx('win');X.end(win)}else{scr='end';win=o;sfx('win');X.end(win)}}
  else{p.x=MD.k=='ffa'?spx(p.i):isCoopStory()&&p.i==2?W/2-17:p.i?640:300;p.y=60;p.vx=p.vy=0;p.dmg=0;p.inv=100;p.stun=0;p.jm=0;p.uu=0;p.shd=0;p.shp=100;p.dg=p.gbT=p.thr=p.hold=p.held=0;p.gv=null}}
}
function step(){
 if(cdn>0){cdn--;if(cdn%60==59)bl(cdn>150?520:520,.12,'square',.18);if(cdn==0){yaT=45;bl(880,.3,'square',.2,300)}return}
 if(yaT>0)yaT--;fr++;
 for(const l of PL){if(l.a){const nx=l.ox+Math.sin(fr*l.s)*l.a;l.dx=nx-l.x;l.x=nx}else l.dx=0}
 for(const f of FX){f.x+=f.vx;f.y+=f.vy;f.vy+=.12;f.life--}FX=FX.filter(f=>f.life>0);
 if(fs&&fs.t>0){fs.t--;shake=5;return}
 if(isCoopStory()){const enemy=P[2],codes=Object.values(C[2]),saved=codes.map(code=>K[code]),savedJ=J;codes.forEach(code=>K[code]=0);J={};ai(enemy,targetFor(enemy));enemy.cpuInput=Object.fromEntries(Object.keys(C[2]).map(a=>[a,{d:!!K[C[2][a]],j:!!J[C[2][a]]}]));codes.forEach((code,i)=>K[code]=saved[i]);J=savedJ;upd(P[0],P[2]);upd(P[1],P[2]);upd(P[2],targetFor(P[2]))}else if(MD.k=='ffa'){for(const p of P){if(scr!='fight')break;if(p.st<=0)continue;const o=targetFor(p);if(BOT[p.i])ai(p,o);upd(p,o)}}else{upd(P[0],P[1]);if(scr=='fight'&&BOT[1])ai(P[1],P[0]);if(scr=='fight')upd(P[1],P[0])}if(scr!='fight'){if(MD.k=='online'&&onlineActive&&onlineSlot==0&&win&&!onlineResultSent){onlineResultSent=true;onlineSend({type:'result',winner:win.i})}J={};return}
 for(const h of HZ){if(h.t>0){h.t--;continue}h.life--;h.x+=h.vx||0;if(MD.k=='ffa'){for(const t of P)if(t.i!=h.owner&&t.st>0&&!(h.hs&&h.hs.includes(t))&&t.inv<=0&&ov(h,t)){A=null;hit(t,h.dmg,h.kb,Math.sign(t.x-h.x-h.w/2)||1);(h.hs=h.hs||[]).push(t)}continue}const t=targetFor(P[h.owner]||P[0]);
  if(!h.hit&&t.inv<=0&&ov(h,t)){A=null;hit(t,h.dmg,h.kb,Math.sign(t.x-h.x-h.w/2)||1);h.hit=1}}
 HZ=HZ.filter(h=>h.life>0);itemStep();
 for(const b of B){if(b.dl>0){b.dl--;continue}const q=b.q,t=targetFor(b.o);
  if(q.hm)b.vy=Math.max(-5,Math.min(5,b.vy+Math.sign(t.y+25-b.y)*.35));
  if(q.pull&&Math.hypot(t.x-b.x,t.y-b.y)<230){t.vx+=(b.x-t.x)*.012;t.vy+=(b.y-t.y)*.006}
  if(q.bo&&b.l==q.l>>1)b.vx=-b.vx;if(q.ref&&b.l%18==0)b.vy=-b.vy;
  if(q.sn)b.vy=Math.sin(b.l*.35)*4;
  b.x+=b.vx;b.vy+=q.g||0;b.y+=b.vy;b.l--;
  const r=q.r;if(MD.k=='ffa'){let hh=0;for(const t of P){if(t===b.o||t.st<=0||(b.dh&&b.dh.includes(t)&&!q.repeat)||b.cool>0||q.d<=0||!ov({x:b.x-r,y:b.y-r,w:2*r,h:2*r},t))continue;A=b.o;const ok=vul(t);hit(t,q.d,q.k,Math.sign(b.vx)||(t.x>b.x?1:-1));if(ok&&q.st)t.stun=Math.min(60,t.stun+q.st);if(ok&&q.ps)t.psn=240;hh=1;if(q.repeat)b.cool=24;else if(q.pi)(b.dh=b.dh||[]).push(t);else{b.l=0;break}}if(!hh&&b.cool>0)b.cool--}else{if((!b.dn||q.repeat)&&(!b.cool||b.cool<=0)&&q.d>0&&ov({x:b.x-r,y:b.y-r,w:2*r,h:2*r},t)){A=b.o;const ok=vul(t);hit(t,q.d,q.k,Math.sign(b.vx)||(t.x>b.x?1:-1));if(ok&&q.st)t.stun=Math.min(60,t.stun+q.st);if(ok&&q.ps)t.psn=240;if(q.repeat)b.cool=24;else if(q.pi)b.dn=1;else b.l=0}else if(b.cool>0)b.cool--;}}
 B=B.filter(b=>b.l>0&&b.x>-20&&b.x<W+20&&b.y<H+40);
 if(MD.k=='online'&&onlineActive&&onlineSlot==0&&Date.now()-lastOnlineState>80){lastOnlineState=Date.now();const fields=['x','y','vx','vy','f','dmg','fs','st','stun','inv','gr','jm','cd','sc','up','uu','buf','pw','psn','armor','act','ty','tp','dash','dq','slam','sq','drop','pose','poseT','score','king','hd','shd','shp','shT','shl','dg','dgi','dgd','dgv','dga','adg','gbT','hold','held','thr','pmT'];onlineSend({type:'state',state:{players:P.map(p=>{const v={onIndex:PL.indexOf(p.on)};for(const k of fields)v[k]=p[k];return v}),bullets:B.slice(-90).map(b=>({x:b.x,y:b.y,vx:b.vx,vy:b.vy,l:b.l,dl:b.dl,owner:b.o.i,q:b.q,dn:b.dn,cool:b.cool})),hazards:HZ.slice(-50)}})}
 if(scr=='end'&&MD.k=='online'&&onlineActive&&onlineSlot==0&&!onlineResultSent){onlineResultSent=true;onlineSend({type:'result',winner:win.i})}
 if(MD.k=='king')for(const p of P)if(p.gr&&p.x+p.w/2>390&&p.x+p.w/2<570)p.king++;
 if(scr=='fight'&&clock>0&&--clock<=0){if(!['points','king','timer'].includes(MD.k)){win=[...P].sort((a,b)=>b.st-a.st||a.dmg-b.dmg)[0];scr='end';sfx('win');X.end(win);return}const score=p=>MD.k=='king'?p.king:MD.k=='timer'?p.dmg*-1:p.score;win=score(P[0])==score(P[1])?(P[0].dmg<=P[1].dmg?P[0]:P[1]):score(P[0])>score(P[1])?P[0]:P[1];scr='end';sfx('win');X.end(win)}
 if(shake>0)shake-=.5;
}
function rr(x,y,w,h,r){g.beginPath();g.roundRect(x,y,w,h,r);g.fill()}
const EN={'DUELO EN LA CUMBRE II':'DUEL ON THE SUMMIT II','ECLIPSE DE CRISTAL':'CRYSTAL ECLIPSE','ELIGE TU DUELO':'CHOOSE YOUR SIDE','SOLITARIO · J1 VS CPU':'SOLO · P1 VS CPU','MULTIJUGADOR · P1 VS P2':'MULTIPLAYER · P1 VS P2','Dificultad de historia':'Story difficulty','Solitario':'Solo','Multijugador':'Multiplayer','Opciones':'Options','Historia':'Story','Duelo CPU':'CPU Duel','Supervivencia':'Survival','Entrenamiento':'Training','Contrarreloj':'Time Trial','Versus':'Versus','Muerte súbita':'Sudden Death','Caos total':'Total Chaos','Carrera de puntos':'Score Race','Rey de la cumbre':'King of the Hill','Caza de objetos':'Item Hunt','Volver':'Back','Ajustes':'Settings','Mando':'Controller','Efectos de sonido':'Sound effects','Música':'Music','Volumen':'Volume','Temblor de pantalla':'Screen shake','Objetos':'Items','Idioma':'Language','Español':'Spanish','Ninguno':'None','Jugador 1':'Player 1','Jugador 2':'Player 2','Sí':'On','No':'Off','Fácil':'Easy','Normal':'Normal','Difícil':'Hard','Extrema':'Extreme','Elige tu duelo':'Choose your side','Modos contra CPU':'Modes vs CPU','P1 contra P2':'P1 vs P2','J1 contra CPU':'P1 vs CPU','J1':'P1','J2':'P2','JUGADOR':'PLAYER','VEL':'SPEED','SALTO':'JUMP','FUERZA':'POWER','Elige…':'Choose…','¡LISTO!':'READY!','¡SMASH FINAL!':'FINAL SMASH!','Pulsa Enter para continuar':'Press Enter to continue','Enter para continuar ▶':'Press Enter to continue ▶','ELIGE TU PERSONAJE':'CHOOSE YOUR FIGHTER','ELIGE TU DUELO':'CHOOSE YOUR SIDE','¡A LUCHAR!':'FIGHT!','ECLIPSE DE CRISTAL':'CRYSTAL ECLIPSE','NARRADOR':'NARRATOR','Narrador':'Narrator','Recupera los 9 fragmentos':'Recover all 9 shards','Un combate contra la máquina':'A fight against the CPU','Rachas contra CPUs cada vez peores':'Endless CPU gauntlet','Práctica sin límite de vidas':'Practice with infinite lives','Supera a la CPU en 90 segundos':'Beat the CPU in 90 seconds','Combate clásico a tres vidas':'Classic three-stock battle','Una sola vida':'One life only','Gravedad lunar y objetos':'Low gravity and items','Gana quien más daño inflija':'Deal the most damage to win','Controla el centro de la arena':'Hold the center of the arena','Lluvia constante de objetos':'A constant shower of items','Nueve duelos contra CPU':'Nine fights against the CPU','Ninguno':'None','Mando detectado':'Controller detected','Sin mando: conecta uno para jugar':'No controller detected','B confirma en mando · Esc vuelve':'B confirms · Esc goes back','← / → elige · ↑ / ↓ navega · Esc vuelve':'← / → choose · ↑ / ↓ move · Esc back','El mando controla solo al jugador elegido · el otro jugador sigue con su teclado':'The controller drives its assigned player; the other uses the keyboard','Dificultad de historia':'Story difficulty','DAÑO RECIBIDO':'DAMAGE TAKEN','Puntos cima: ':'Hill points: ','Puntuación: ':'Score: ','Daño recibido: ':'Damage taken: ','Racha: ':'Streak: ','Fragmento ':'Shard ',' de 9 recuperado.':' of 9 recovered.','¡YA!':'FIGHT!','¡Gana J':'PLAYER ',' con ':' wins with ','Toma mi fragmento.':'Take my shard.',' sigue adelante.':' Keep going.','Cumbre':'Summit','Tres islas':'Three Islands','Volcán':'Volcano','Nubes':'Clouds','Ciudad neón':'Neon City','Desierto':'Desert','Espacio':'Space','Templo en ruinas':'Ruined Temple','Aurora glaciar':'Glacial Aurora','Bosque encantado':'Enchanted Forest','Mar de cristal':'Crystal Sea','Pantano tóxico':'Toxic Swamp','Fortaleza de acero':'Steel Fortress','Santuario del Alba':'Dawn Shrine','Fuego':'Fire','Rayo':'Lightning','Roca':'Rock','Hielo':'Ice','Sombra':'Shadow','Selva':'Jungle','Viento':'Wind','Astro':'Astro','Vacío':'Void','Agua':'Water','Veneno':'Poison','Acero':'Steel','Luz':'Light','Equilibrado · fuego y explosiones':'Balanced · fire and blasts','Veloz y ligero · electricidad':'Fast and nimble · electricity','Lento y pesado · golpes brutales':'Slow and heavy · brutal hits','Control · congela al rival':'Control · freezes rivals','Sigiloso · teletransportes':'Stealth · teleportation','Resistente · se cura':'Tough · self-healing','Ultraligero · empuja y atrae':'Ultra-light · push and pull','Técnico · shuriken y cortes':'Technical · shuriken and slashes','Cósmico · orbes y cometas':'Cosmic · orbs and comets','Fluido · olas y embestidas':'Fluid · waves and charges','Sucio · envenena con el tiempo':'Dirty fighter · poison damage','Blindado · cortes perforantes':'Armored · piercing strikes','Radiante · curación y rayos':'Radiant · healing and beams'};Object.assign(EN,{'Baba ígnea':'Lava glob','Embestida':'Charge','Géiser':'Geyser','Lanza prismática':'Prism lance','Eco sónico':'Sonic echo','Látigo':'Whip','Salto diagonal':'Diagonal leap','Remolino':'Whirlpool','Nova':'Nova','Intercambio':'Swap','Pozo gravitatorio':'Gravity well','Cataclismo':'Cataclysm','Burbuja polar':'Polar bubble','Espejo solar':'Solar mirror','Alba ascendente':'Rising dawn','Renovación':'Renewal','Planeta perforante':'Piercing planet','Cometa':'Comet','Ascenso gravitatorio':'Gravity rise','Colapso':'Collapse','Cueva de Cristal':'Crystal Cave','Cráter Celeste':'Celestial Crater','Reloj del Eclipse':'Eclipse Clock','Cristal':'Crystal','Magma':'Magma','Eco':'Echo','Gravedad':'Gravity','Aurora':'Aurora','Defensa brillante · rebota proyectiles':'Bright defense · reflects projectiles','Lento y resistente · lava explosiva':'Slow and tough · explosive lava','Ágil · ondas que persiguen':'Agile · tracking sound waves','Controla el espacio y atrae rivales':'Controls space and pulls opponents','Velocidad y magia curativa':'Speed and healing magic','Planeta perforante':'Piercing planet','Ascenso gravitatorio':'Gravity rise','Colapso':'Collapse','PRISMA ETERNO':'ETERNAL PRISM','NÚCLEO ARDIENTE':'BURNING CORE','ONDA INFINITA':'INFINITE WAVE','COLAPSO ESTELAR':'STELLAR COLLAPSE','CIELO POLAR':'POLAR SKY','Hace mil años, el Cristal del Alba mantenía en equilibrio el fuego, el rayo, el hielo, el viento y la sombra.':'A thousand years ago, the Dawn Crystal kept fire, lightning, ice, wind, and shadow in balance.','Cada fragmento conserva un recuerdo distinto. Ninguno muestra quién lo rompió; todos muestran la misma sombra bajo la montaña.':'Each shard holds a different memory. None shows who broke it; all show the same shadow beneath the mountain.','El Cristal no era una corona ni un arma. Era un sello. La energía que liberáis en cada duelo está despertando lo que hay debajo.':'The Crystal was not a crown or a weapon. It was a seal. The energy released in each duel is waking what lies below.','El último fragmento vibra al acercarse al Santuario. La voz que os guiaba desde el principio no era un narrador: era el guardián del sello.':'The final shard vibrates near the Shrine. The voice guiding you was no narrator: it was the guardian of the seal.','El Vacío dejó de luchar. Bajo su armadura no había un monstruo, sino el guardián que sostuvo la grieta durante mil años.':'The Void stopped fighting. Beneath its armor was no monster, but the guardian who held the rift for a thousand years.','Los fragmentos volvieron a unirse. Esta vez, los guardianes compartieron su luz y sellaron juntos la sombra bajo la Cumbre.':'The shards joined again. This time, the guardians shared their light and sealed the shadow beneath the Summit together.','La montaña quedó en silencio. Por primera vez, nadie tuvo que protegerla a solas. FIN.':'The mountain fell silent. For the first time, no one had to protect it alone. THE END.','¡Yo no rompí el Cristal! Pero si hace falta pelear, pelearé.':'I did not break the Crystal! But if we have to fight, then so be it.','¡Y tampoco mi compañero! ¡Lucharemos juntos!':'Neither did my partner! We will fight together.','La sombra bajo la montaña vuelve a agitarse.':'The shadow beneath the mountain stirs again.','Historia cooperativa':'Co-op Story','Dos héroes contra la campaña':'Two heroes against the campaign','5 victorias':'5 wins','1 historia':'1 story','25 victorias':'25 wins','5 supervivencias':'5 survival wins','5 historias':'5 stories','50 victorias':'50 wins','10 supervivencias':'10 survival wins','Derrota al Vacío':'Defeat the Void','10 historias':'10 stories','AJUSTES':'SETTINGS','SOLITARIO':'SOLO','MULTIJUGADOR':'MULTIPLAYER','JUGADOR':'PLAYER','J · ':'P · ','ELIGE TU DUELO':'CHOOSE YOUR SIDE','Elige una categoría · ◀ ▶ o A/D · F / K / Enter':'Choose a side · ◀ ▶ or A/D · Enter','— ECLIPSE DE CRISTAL · ¡elige tu modo! —':'— CRYSTAL ECLIPSE · choose your mode —','Mando, sonido y más':'Controller, audio and more','El mando controla solo al jugador elegido · el otro jugador sigue con su teclado':'Controller only drives its assigned player · the other uses the keyboard','Hace mil años, el Cristal del Alba mantenía en equilibrio el fuego, el rayo, el hielo, el viento y la sombra.':'A thousand years ago, the Dawn Crystal kept fire, lightning, ice, wind, and shadow in balance.','Una noche el Cristal estalló en nueve fragmentos. Cada guardián cree que otro lo rompió.':'One night, the Crystal shattered into nine shards. Each guardian believes another broke it.','Ahora el Torneo de la Cumbre decidirá quién reúne los fragmentos… y quién cae al vacío.':'Now the Summit Tournament will decide who gathers the shards… and who falls into the void.','¡El Cristal ardía en mi templo y ahora no está! ¡Me mirarás a la cara!':'The Crystal burned in my temple, and now it is gone! Face me!','Sentí el trueno romperse. ¡Solo tú llegaste antes que yo al cráter!':'I felt the thunder split. You were the only one at the crater before me!','La montaña lo recuerda todo. Y recuerda que pasaste por aquí esa noche.':'The mountain remembers everything. It remembers you were here that night.','Un fragmento cayó en mi glaciar… y alguien dejó huellas calientes.':'A shard fell on my glacier… and someone left warm footprints.','No me ves, pero yo sí te vi. Llevas algo que me pertenece.':'You cannot see me, but I saw you. You carry something that belongs to me.','Las raíces susurran tu nombre. Devuelve el fragmento al bosque.':'The roots whisper your name. Return the shard to the forest.','Todos los vientos apuntan hacia ti. ¿Casualidad?':'Every wind points to you. Coincidence?','Mi maestro dijo: quien sostiene el fragmento, sostiene la culpa.':'My master said: whoever holds the shard carries the blame.','Las estrellas se apagaron una a una. Tú eres la anomalía.':'The stars went dark one by one. You are the anomaly.','Gracias por reunir los fragmentos. Yo los rompí. Con ellos apagaré el mundo.':'Thank you for gathering the shards. I broke them. With them, I will extinguish the world.','Mis llamas se calman. No fuiste tú. Toma mi fragmento.':'My flames are calm. It was not you. Take my shard.','Perdí. Había huellas negras en el cráter, no tuyas. Sigue adelante.':'I lost. There were black footprints at the crater, not yours. Keep going.','Fuerte y justo. Llévate el fragmento; algo extraño se mueve al norte.':'Strong and fair. Take the shard; something strange stirs to the north.','El hielo no miente: el culpable huele a vacío.':'Ice does not lie: the culprit smells of the void.','Entre las sombras vi algo enorme. Un ojo sin luz. Cuidado.':'In the shadows I saw something huge. An eyeless gaze. Be careful.','La selva te acepta. El fragmento late… y algo quiere apagarlo.':'The jungle accepts you. The shard is beating… and something wants to snuff it out.','El viento lo confirma: la fuente está bajo el volcán. Apúrate.':'The wind confirms it: the source lies beneath the volcano. Hurry.','Mil cortes y ninguno acertó. Ahora lo entiendo: el enemigo es otro.':'A thousand cuts, not one found its mark. Now I understand: the enemy is someone else.','Las estrellas vuelven a brillar. Solo queda uno. El Vacío te espera.':'The stars shine again. Only one remains. The Void awaits.','Imposible… la luz ha vuelto…':'Impossible… the light has returned…','El Vacío se disipó y los nueve fragmentos volaron al cielo.':'The Void dissolved, and the nine shards soared into the sky.','El Cristal del Alba brilló de nuevo. Los guardianes dejaron las armas… hasta el próximo torneo.':'The Dawn Crystal shone once more. The guardians laid down their arms… until the next tournament.','FIN. Gracias por jugar.':'THE END. Thanks for playing.','Bola de fuego':'Fireball','Llamarada':'Blaze','Fénix':'Phoenix','Erupción':'Eruption','Burbuja de marea':'Tide bubble','Tabla de espuma':'Foam surf','Géiser':'Geyser','Corriente de fondo':'Undercurrent','Baba corrosiva':'Corrosive glob','Estanque ácido':'Acid pool','Estallido de esporas':'Sporeburst','Espinas tóxicas':'Toxic spikes','Filo perseguidor':'Seeking blade','Ariete blindado':'Armored ram','Ascenso magnético':'Magnetic rise','Yunque sísmico':'Seismic anvil','Rayo prismático':'Prism beam','Espejo solar':'Solar mirror','Alba ascendente':'Rising dawn','Renovación':'Renewal','OPCIONES':'OPTIONS','Online':'Online','Encuentra un rival en línea':'Find an online opponent','Buscando rival...':'Searching for an opponent...','Conectando a la sala...':'Connecting to the room...','Rival: ':'Opponent: ','El rival se desconectó. Buscando otro...':'Opponent disconnected. Searching for another...','No se pudo conectar: ':'Could not connect: ','Las salas online no están disponibles en esta vista.':'Online rooms are unavailable in this view.','La sala empareja automáticamente a dos jugadores.':'The room automatically matches two players.','Esc cancela la búsqueda':'Esc cancels matchmaking','Reconectando...':'Reconnecting...','Conexión cerrada':'Connection closed','Tú':'You','Rival':'Opponent','◀ ▶ para elegir · Enter/F para entrar · ↑ Opciones':'◀ ▶ choose · Enter/F confirm · ↑ Options','← / → elige · ↑ / ↓ navega · Esc vuelve':'← / → choose · ↑ / ↓ move · Esc back','A/D/W/S o flechas para moverte · F, K o Enter para elegir':'A/D/W/S or arrows to move · F, K or Enter to choose','↑/↓ cambia el mapa':'↑/↓ change arena','Elige…':'Choose…','Cada personaje tiene 4 especiales únicos.':'Every fighter has four unique specials.','B selecciona · Esc vuelve':'B selects · Esc goes back','A/D cambia tu luchador · B o Enter confirma · Esc sale':'A/D choose your fighter · B or Enter confirms · Esc exits','TU LUCHADOR · P':'YOUR FIGHTER · P','RIVAL · P':'OPPONENT · P','Elige con A/D y confirma con B o Enter. Esperando al rival…':'Choose with A/D and confirm with B or Enter. Waiting for your rival…'});const EN_PAIRS=Object.entries(EN).sort((a,b)=>b[0].length-a[0].length);function langText(value){let s=String(value);const P_=CFG.lang=='en'?EN_PAIRS:XL[CFG.lang];if(!P_)return s;for(const [from,to] of P_)s=s.replaceAll(from,to);return s}
function syncLanguage(){document.documentElement.lang=CFG.lang;document.title=CFG.lang=='en'?'Summit Duel':CFG.lang=='ca'?'Cim II':'Cumbre II';const h=document.getElementById('help');if(h)h.textContent=CFG.lang=='en'?'P1: A/D move · W jump · F attack · G special · H final smash · Q shield · E grab   P2: ←/→ move · ↑ jump · K attack · L special · Ñ final smash · O shield · P grab   Controller: B select/confirm · View back · A jump · X attack · Y special · RB smash · LT/RT shield · B/LB grab':CFG.lang=='ca'?'J1: A/D moure · W saltar · F atacar · G especial · H smash final · Q escut · E agafar   J2: ←/→ moure · ↑ saltar · K atacar · L especial · Ñ smash final · O escut · P agafar   Comandament: B triar/confirmar · View tornar · A saltar · X atacar · Y especial · RB smash · LT/RT escut · B/LB agafar':'J1: A/D mover · W saltar · F golpe · G especial · H smash · Q escudo · E agarre   J2: ←/→ mover · ↑ saltar · K golpe · L especial · Ñ smash · O escudo · P agarre   Mando: B seleccionar/confirmar · View volver · A saltar · X golpe · Y especial · RB smash · LT/RT escudo · B/LB agarre'}
function txt(s,x,y,sz,col,al='center'){s=langText(s);g.font=`bold ${sz}px "Trebuchet MS",sans-serif`;g.fillStyle=col;g.textAlign=al;g.fillText(s,x,y)}
function bg(){
 const gr=g.createLinearGradient(0,0,0,H);gr.addColorStop(0,M.c[0]);gr.addColorStop(1,M.c[1]);
 g.fillStyle=gr;g.fillRect(-20,-20,W+40,H+40);
 g.fillStyle=M.c[2];g.beginPath();g.arc(740,150,50,0,7);g.fill();
 g.fillStyle=M.c[3];g.beginPath();g.moveTo(0,H);g.lineTo(150,300);g.lineTo(330,H);g.lineTo(480,260);g.lineTo(700,H);g.lineTo(840,320);g.lineTo(960,H);g.fill();
 if(DEC[M.n])DEC[M.n]();
 g.fillStyle=M.n=='Volcán'?'rgba(255,140,50,.65)':'rgba(255,255,255,.35)';for(let i=0;i<28;i++){const d=M.n=='Volcán'?-1:1,x=(i*97+T*(10+i%5*6))%W,y=(((i*53+Math.sin(T+i)*20+T*(8+i%3*5)*d)%H)+H)%H;g.beginPath();g.arc(x,y,1+i%3,0,7);g.fill()}
}
function drawMap(){for(const l of PL){
 g.fillStyle=l.t?'#6b4a2e':'#4a3320';rr(l.x,l.y,l.w,l.t?12:40,5);
 g.fillStyle=M.g;rr(l.x,l.y-4,l.w,10,5)}}
const sh=(h,k)=>{const n=parseInt(h.slice(1),16);return`rgb(${(n>>16&255)*k|0},${(n>>8&255)*k|0},${(n&255)*k|0})`};
const tri=(a,b,c,d,e,f,co)=>{g.fillStyle=co;g.beginPath();g.moveTo(a,b);g.lineTo(c,d);g.lineTo(e,f);g.closePath();g.fill()};
const DEC={
'Espacio':()=>{g.fillStyle='#fff';for(let i=0;i<70;i++){g.globalAlpha=.3+.7*Math.abs(Math.sin(T*1.5+i));g.fillRect(i*137%W,i*89%H,i%3?1.5:2.5,i%3?1.5:2.5)}g.globalAlpha=1;g.fillStyle='#6a4cc9';g.beginPath();g.arc(230,170,70,0,7);g.fill();g.strokeStyle='rgba(255,220,160,.7)';g.lineWidth=8;g.beginPath();g.ellipse(230,170,120,26,-.35,0,7);g.stroke()},
'Templo en ruinas':()=>{for(let i=0;i<7;i++){const x=40+i*140,h=200+i%2*60;g.fillStyle='#7a5532';g.fillRect(x,H-h,34,h);g.fillStyle='#9b6f43';g.fillRect(x-6,H-h,46,12)}},
'Aurora glaciar':()=>{for(let i=0;i<3;i++){g.fillStyle=`hsla(${140+i*50},90%,65%,.22)`;g.beginPath();g.moveTo(0,70+i*30);for(let x=0;x<=W;x+=40)g.lineTo(x,70+i*30+Math.sin(x*.01+T+i)*28);g.lineTo(W,140+i*30);g.lineTo(0,140+i*30);g.fill()}},
'Bosque encantado':()=>{for(let i=0;i<9;i++){const x=i*120-20;g.fillStyle='#0f3322';g.fillRect(x+36,H-130,14,130);tri(x,H-90,x+43,H-250+i%3*30,x+86,H-90,'#14402a');tri(x+6,H-150,x+43,H-290+i%3*30,x+80,H-150,'#1b5a38')}g.fillStyle='#f6ff8a';for(let i=0;i<14;i++){g.globalAlpha=.4+.6*Math.abs(Math.sin(T*2+i));g.fillRect((i*83+Math.sin(T+i)*30+W)%W,200+i*17%250,3,3)}g.globalAlpha=1},
'Ciudad neón':()=>{for(let i=0;i<14;i++){const h=110+i*37%150,x=i*70;g.fillStyle='#120d3a';g.fillRect(x,H-h-30,56,h+30);g.fillStyle=i%2?'#ff4fd8':'#38f9ff';for(let j=0;j<h/24|0;j++)if((i*7+j*3+(T*.7|0))%4)g.fillRect(x+10,H-h-20+j*24,8,10)}},
'Mar de cristal':()=>{g.fillStyle='rgba(190,235,255,.25)';for(let k=0;k<3;k++){g.beginPath();g.moveTo(0,H);for(let x=0;x<=W;x+=30)g.lineTo(x,H-70-k*28+Math.sin(x*.013+T*(1+k*.4)+k)*16);g.lineTo(W,H);g.fill()}},
'Pantano tóxico':()=>{g.fillStyle='rgba(182,224,47,.35)';for(let i=0;i<12;i++){g.beginPath();g.arc(60+i*80+Math.sin(T+i)*14,H-((T*30+i*61)%260),3+i%4*2,0,7);g.fill()}g.fillStyle='rgba(106,143,26,.4)';g.fillRect(0,H-50,W,50)},
'Fortaleza de acero':()=>{for(let i=0;i<6;i++){g.fillStyle='#262b38';g.fillRect(i*170,60,60,H);g.fillStyle=(T*2+i|0)%2?'#ffb347':'#4a5568';g.fillRect(i*170+22,110+i*40,16,16)}},
'Santuario del Alba':()=>{for(let i=0;i<9;i++){const x=60+i*105,h=120+i*47%140;g.globalAlpha=.35+.25*Math.sin(T*2+i);tri(x-26,H,x,H-h,x+26,H,i%2?'#ffe3f2':'#c9a3ff')}g.globalAlpha=1},
'Cueva de Cristal':()=>{for(let i=0;i<13;i++){const x=i*79-20,h=70+i*37%150;g.globalAlpha=.25+.2*Math.sin(T*2+i);tri(x,H,x+22,H-h,x+45,H,i%2?'#9ef7ff':'#d3fbff')}g.globalAlpha=1},
'Cráter Celeste':()=>{for(let i=0;i<24;i++){const x=(i*127+T*18)%W,y=(i*71+T*9)%300;g.fillStyle=i%2?'rgba(255,213,120,.6)':'rgba(255,255,255,.55)';g.beginPath();g.arc(x,y,1+i%3,0,7);g.fill()}},
'Reloj del Eclipse':()=>{g.strokeStyle='rgba(220,205,255,.24)';g.lineWidth=5;g.beginPath();g.arc(W/2,205,135,T*.18,T*.18+Math.PI*1.8);g.stroke();for(let i=0;i<12;i++){const a=i*Math.PI/6+T*.18;g.fillStyle='#d9c7ff';g.beginPath();g.arc(W/2+Math.cos(a)*125,205+Math.sin(a)*125,3,0,7);g.fill()}},
'Volcán':()=>{const gl=g.createLinearGradient(0,H-120,0,H);gl.addColorStop(0,'rgba(255,90,20,0)');gl.addColorStop(1,'rgba(255,120,30,.55)');g.fillStyle=gl;g.fillRect(0,H-120,W,120)}};
function limb(x1,y1,x2,y2,w,col,b=0){const mx=(x1+x2)/2-(y2-y1)*b*.04,my=(y1+y2)/2+(x2-x1)*b*.04;g.lineCap='round';
 for(const[ww,cc]of[[w+4,'#1a1226'],[w,col]]){g.strokeStyle=cc;g.lineWidth=ww;g.beginPath();g.moveTo(x1,y1);g.quadraticCurveTo(mx,my,x2,y2);g.stroke()}}
const HAT={
Fuego:(x,y,t)=>{const w=Math.sin(t*14)*2;tri(x-7,y-6,x-9,y-18+w,x-2,y-9,'#ff5a1f');tri(x-3,y-8,x+1,y-23-w,x+5,y-8,'#ffb02a');tri(x+3,y-8,x+9,y-16+w,x+8,y-3,'#ff5a1f')},
Rayo:(x,y)=>{tri(x-8,y-4,x-10,y-17,x-2,y-9,'#fff36b');tri(x-2,y-9,x+3,y-22,x+5,y-8,'#fff36b');tri(x+5,y-8,x+12,y-14,x+8,y-2,'#fff36b')},
Roca:(x,y)=>{g.fillStyle='#6d7890';for(const[a,b,r]of[[-5,-9,4],[3,-10,3.5],[8,-6,3]]){g.beginPath();g.arc(x+a,y+b,r,0,7);g.fill()}},
Hielo:(x,y)=>{tri(x-6,y-7,x-5,y-20,x-1,y-8,'#e8fcff');tri(x-2,y-8,x+2,y-24,x+6,y-8,'#bdf3ff');tri(x+4,y-7,x+9,y-17,x+9,y-4,'#e8fcff')},
Sombra:(x,y,t)=>{g.fillStyle='#2a1050';g.beginPath();g.arc(x-1,y,11.5,Math.PI*.95,Math.PI*2.1);g.fill();limb(x-6,y+8,x-18,y+22+Math.sin(t*6)*3,6,'#2a1050')},
Selva:(x,y,t)=>{limb(x,y-8,x+1,y-12,2,'#1d6b30');g.fillStyle='#38c25a';g.beginPath();g.ellipse(x+1,y-16,3.5,7,Math.sin(t*3)*.3,0,7);g.fill()},
Viento:(x,y,t)=>{limb(x-3,y+9,x-16,y+11+Math.sin(t*8)*4,5,'#e8fff9',4)},
Ninja:(x,y,t)=>{g.fillStyle='#d91e3f';g.fillRect(x-10,y-5,20,4);limb(x-10,y-3,x-23,y+2+Math.sin(t*10)*4,3,'#d91e3f',3)},
Astro:(x,y)=>{g.fillStyle='rgba(255,255,255,.18)';g.beginPath();g.arc(x,y,12.5,0,7);g.fill();g.strokeStyle='rgba(225,240,255,.9)';g.lineWidth=2;g.stroke();limb(x-2,y-12,x,y-20,2,'#fff');g.fillStyle='#ff4d6d';g.beginPath();g.arc(x,y-21,2.5,0,7);g.fill()},
Agua:(x,y,t)=>{tri(x-6,y-6,x,y-22+Math.sin(t*5)*2,x+6,y-6,'#7fb8ff');g.fillStyle='#3d8bff';g.beginPath();g.arc(x,y-6,6,0,Math.PI);g.fill()},
Veneno:(x,y,t)=>{g.fillStyle='#7a9a1a';for(const a of[-6,0,6]){g.beginPath();g.arc(x+a,y-10-Math.abs(Math.sin(t*4+a))*4,3,0,7);g.fill()}},
Acero:(x,y)=>{g.fillStyle='#aab3c4';g.beginPath();g.arc(x,y,11,Math.PI,0);g.fill();g.fillStyle='#e8453c';g.fillRect(x-1.5,y-19,3,9)},
Luz:(x,y,t)=>{g.fillStyle='rgba(255,240,150,.25)';g.beginPath();g.arc(x,y,16+Math.sin(t*4)*1.5,0,7);g.fill();g.strokeStyle='#fff3a0';g.lineWidth=3;g.beginPath();g.ellipse(x,y-14,10,3.5,0,0,7);g.stroke()},
Vacío:(x,y)=>{tri(x-8,y-6,x-12,y-20,x-2,y-9,'#120a24');tri(x+2,y-9,x+12,y-20,x+8,y-4,'#120a24')}};
/* ===== SKINS v2: fresh palettes + gear for every fighter ===== */
const SKIN={
Fuego:{c:'#ff3d2e',d:'#7a0f1a',a:'#ffc23c',h:'#ff9a5c',e:'#ff7a00',m:'gem',fx:'rise'},
Rayo:{c:'#ffe14a',d:'#a8620a',a:'#35e0ff',h:'#fffbc2',e:'#1fb8ff',m:'bolt',fx:'orbit'},
Roca:{c:'#8a7f76',d:'#403836',a:'#ff8a3c',h:'#b8aea2',e:'#ff8a3c',m:'cracks'},
Hielo:{c:'#5fd4ff',d:'#1b5f9c',a:'#ffffff',h:'#d8f8ff',e:'#1b7bff',m:'gem',fx:'fall'},
Sombra:{c:'#7a3dff',d:'#240c5c',a:'#ff3df2',h:'#b48cff',e:'#ff3df2',m:'gem',fx:'rise'},
Selva:{c:'#2fcf6a',d:'#0f5a3a',a:'#ffd23c',h:'#9bf5a0',e:'#ffd23c',m:'stripe'},
Viento:{c:'#7cf0d0',d:'#1f8f8a',a:'#ffffff',h:'#e6fff8',e:'#14b8a6',m:'stripe',fx:'orbit'},
Ninja:{c:'#3a4bd6',d:'#161c66',a:'#ff2e5f',h:'#8b97ff',e:'#ff2e5f',m:'stripe'},
Astro:{c:'#e9edff',d:'#6f7cc4',a:'#ff4d6d',h:'#ffffff',e:'#2fc4ff',m:'gem',fx:'orbit'},
Vacío:{c:'#3b2f6b',d:'#120a24',a:'#ff3df2',h:'#7a5cff',e:'#120a24',m:'cracks',fx:'rise'},
Agua:{c:'#2f7bff',d:'#0a2f8f',a:'#38f0e0',h:'#8cc4ff',e:'#38f0e0',m:'gem',fx:'rise'},
Veneno:{c:'#a6ec1f',d:'#3b620a',a:'#c23dff',h:'#e2ff7a',e:'#c23dff',m:'stripe',fx:'rise'},
Acero:{c:'#c9d2e0',d:'#566175',a:'#ffb02a',h:'#ffffff',e:'#ff4d2e',m:'stripe'},
Luz:{c:'#fff0a0',d:'#d19a2a',a:'#ffffff',h:'#ffffff',e:'#ff9a2a',m:'gem',fx:'orbit'},
Cristal:{c:'#7ff0ff',d:'#2a7fc9',a:'#ff9ef5',h:'#ffffff',e:'#a56bff',m:'gem',fx:'fall'},
Magma:{c:'#ff5a1f',d:'#431008',a:'#ffd23c',h:'#ff9a3c',e:'#ffd23c',m:'cracks',fx:'rise'},
Eco:{c:'#6fffb4',d:'#0f7a5a',a:'#ff5ec8',h:'#d6ffe9',e:'#ff5ec8',m:'bolt',fx:'orbit'},
Gravedad:{c:'#a37bff',d:'#2c1670',a:'#5ee6ff',h:'#d6c4ff',e:'#5ee6ff',m:'gem',fx:'orbit'},
Aurora:{c:'#ff7ac0',d:'#7a2a8f',a:'#5effc8',h:'#ffd1ec',e:'#5effc8',m:'stripe',fx:'rise'}};
CH.forEach(c=>{const K=SKIN[c.n];if(K)c.col=K.c});
Object.assign(HAT,{
Roca:(x,y)=>{g.fillStyle='#5a504a';for(const[a,b,r]of[[-5,-9,4],[3,-10,3.5],[8,-6,3]]){g.beginPath();g.arc(x+a,y+b,r,0,7);g.fill()}g.fillStyle='#ff8a3c';g.beginPath();g.arc(x+3,y-10,1.4,0,7);g.fill()},
Ninja:(x,y,t)=>{g.fillStyle='#ff2e5f';g.fillRect(x-10,y-5,20,4);limb(x-10,y-3,x-24,y+2+Math.sin(t*10)*4,3,'#ff2e5f',3);limb(x-10,y-1,x-20,y+9+Math.sin(t*10+1)*4,2.5,'#c21b45',3);g.fillStyle='#e8ecff';g.fillRect(x+1,y-4.5,5,3)},
Veneno:(x,y,t)=>{g.fillStyle='#c23dff';for(const a of[-6,0,6]){g.beginPath();g.arc(x+a,y-10-Math.abs(Math.sin(t*4+a))*4,3,0,7);g.fill();g.fillStyle='rgba(255,255,255,.6)';g.beginPath();g.arc(x+a-1,y-11-Math.abs(Math.sin(t*4+a))*4,.9,0,7);g.fill();g.fillStyle='#c23dff'}},
Cristal:(x,y,t)=>{g.save();g.translate(x,y-19+Math.sin(t*3)*2);g.rotate(t*1.6);g.shadowColor='#ff9ef5';g.shadowBlur=9;g.fillStyle='#eaffff';g.strokeStyle='#ff9ef5';g.lineWidth=1.6;g.beginPath();g.moveTo(0,-7);g.lineTo(4.5,0);g.lineTo(0,7);g.lineTo(-4.5,0);g.closePath();g.fill();g.stroke();g.restore()},
Magma:(x,y,t)=>{tri(x-8,y-5,x-15,y-19,x-2,y-9,'#2a0a05');tri(x+3,y-9,x+14,y-19,x+9,y-4,'#2a0a05');g.fillStyle=`rgba(255,${190+Math.sin(t*12)*40|0},60,.95)`;g.beginPath();g.arc(x-14,y-19,2.2,0,7);g.arc(x+13.5,y-19,2.2,0,7);g.fill()},
Eco:(x,y,t)=>{g.strokeStyle='#ff5ec8';g.lineWidth=3;g.lineCap='round';g.beginPath();g.arc(x,y,10.5,Math.PI*1.02,Math.PI*1.98);g.stroke();g.fillStyle='#ff5ec8';g.strokeStyle='#1a1226';g.lineWidth=1.5;g.beginPath();g.arc(x-1,y+1,4.6,0,7);g.fill();g.stroke();g.strokeStyle='#ff5ec8';for(let i=0;i<2;i++){const u=((t*1.8)+i*.5)%1;g.globalAlpha=1-u;g.lineWidth=1.6;g.beginPath();g.arc(x-1,y+1,6+u*9,-.8,.8);g.stroke()}g.globalAlpha=1},
Gravedad:(x,y,t)=>{g.save();g.translate(x,y-14);g.rotate(-.35);g.strokeStyle='#5ee6ff';g.lineWidth=2;g.beginPath();g.ellipse(0,0,13,3.6,0,0,7);g.stroke();g.fillStyle='#ffffff';g.shadowColor='#5ee6ff';g.shadowBlur=6;g.beginPath();g.arc(Math.cos(t*3.2)*13,Math.sin(t*3.2)*3.6,2.4,0,7);g.fill();g.restore()},
Aurora:(x,y,t)=>{limb(x-4,y-6,x-15,y-14+Math.sin(t*4)*3,3,'#5effc8',3);limb(x-3,y-4,x-19,y-5+Math.sin(t*4+1)*4,3,'#b48cff',3);g.fillStyle='#fff';g.shadowColor='#5effc8';g.shadowBlur=6;g.beginPath();g.arc(x+4,y-11,1.9,0,7);g.fill();g.shadowBlur=0}});
function skFx(K,t,al){if(!K.fx)return;g.save();g.fillStyle=K.a;for(let i=0;i<4;i++){let x,y,a;if(K.fx=='orbit'){const an=t*2.2+i*1.57;x=Math.cos(an)*27;y=-6+Math.sin(an)*20;a=.75}else{const ph=(t*.7+i/4)%1;x=Math.sin(i*2.4+t*2)*14;y=K.fx=='rise'?22-ph*60:-34+ph*60;a=Math.sin(ph*Math.PI)*.85}g.globalAlpha=al*a;g.beginPath();g.arc(x,y,K.fx=='orbit'?2.4:2.1,0,7);g.fill()}g.restore()}
function skTorso(K,k){if(!K.a)return;g.save();g.fillStyle=K.h;g.globalAlpha=.5;g.beginPath();g.ellipse(-2.5*k,-12,2.2,4.5,-.2,0,7);g.fill();g.globalAlpha=1;
 g.fillStyle=K.a;g.strokeStyle='#1a1226';g.lineWidth=1.5;g.beginPath();g.roundRect(-6.5*k,-4,13*k,3.6,1.5);g.fill();g.stroke();
 g.shadowColor=K.a;g.shadowBlur=7;g.fillStyle=K.a;g.strokeStyle=K.a;g.lineWidth=1.7;g.lineJoin='round';g.beginPath();
 if(K.m=='bolt'){g.moveTo(2.5,-15.5);g.lineTo(-2,-9.5);g.lineTo(1,-9.5);g.lineTo(-2,-5.5);g.lineTo(4,-11.5);g.lineTo(.5,-11.5);g.closePath();g.fill()}
 else if(K.m=='cracks'){g.moveTo(-3,-14);g.lineTo(0,-11);g.lineTo(-2,-8);g.lineTo(2,-6);g.stroke()}
 else if(K.m=='stripe'){g.moveTo(-5*k,-14);g.lineTo(5*k,-8);g.stroke()}
 else{g.moveTo(1,-14.5);g.lineTo(4.5,-10);g.lineTo(1,-6);g.lineTo(-2.5,-10);g.closePath();g.fill()}
 g.restore()}
function skHead(K,hx,hy){if(!K.a)return;g.save();g.fillStyle='rgba(255,255,255,.45)';g.beginPath();g.ellipse(hx-3,hy-5,3.4,1.9,-.5,0,7);g.fill();g.restore()}
function skGlove(x,y,k,K,back){if(!K.a)return;g.fillStyle=back?sh(K.a,.65):K.a;g.strokeStyle='#1a1226';g.lineWidth=1.8;g.beginPath();g.arc(x,y,4.3*k,0,7);g.fill();g.stroke()}
function skBoot(x,y,k,K,back){if(!K.a)return;g.fillStyle=sh(K.a,back?.5:.85);g.strokeStyle='#1a1226';g.lineWidth=1.8;g.beginPath();g.arc(x,y,5.2*k,0,7);g.fill();g.stroke()}
/* ===== MISIONES + skins v0.1 (ladrillos) ===== */
let ms=null,mm=0;
const MSN=()=>MD.k=='mis'&&!!ms;
const OLDCOL=['#ff5a3c','#ffd23c','#8e9bb5'];
const MISSIONS=[
{id:'past',icon:'🧱',name:'Escapa de tu pasado',desc:'Fuego, Rayo y Roca regresan tal y como eran en la versión 0.1',foes:[0,1,2],maps:[0,1,2],old:1,
 intro:[['Narrador','Cada guardián esconde una versión de sí mismo que preferiría olvidar: la primera, la de la versión 0.1.','#ffd23c'],['Narrador','Esas versiones no se han ido. Han vuelto a por ti. Escapa de tu pasado.','#ffd23c']],
 pre:['Antes de las llamas bonitas, yo ya ardía aquí. ¡No vas a dejarme atrás!','Antes de las chispas y los sprites, solo existía este bloque. ¡No huirás de mí!','Siempre fui el más sólido. Un ladrillo no se rompe… ni olvida.'],
 hero:['¿Un ladrillo con ojos? Yo ya no soy eso.','Corro más rápido que tu recuerdo.','Todos empezamos siendo bloques. Pero seguimos adelante.'],
 after:['Mis esquinas se han redondeado con el tiempo. Sigue corriendo.','Qué rápido te has vuelto… Ve. No mires atrás.','Aun hecho polvo, estoy orgulloso de ti.'],
 end:[['Narrador','Los tres ladrillos se desmoronaron sin rencor. Escapar del pasado no era vencerlo: era aceptar que te trajo hasta aquí.','#ffd23c'],['Narrador','MISIÓN COMPLETADA · ESCAPA DE TU PASADO','#ffd23c']]}
];
EN_PAIRS.push(['MISIONES','MISSIONS'],['Misiones','Missions'],['Retos especiales con historia','Special story challenges'],['Escapa de tu pasado','Escape Your Past'],['COMPLETADA ✔','COMPLETED ✔'],['NUEVA MISIÓN','NEW MISSION'],
['Fuego, Rayo y Roca regresan tal y como eran en la versión 0.1','Fire, Lightning and Rock return exactly as they were in version 0.1'],
['W/S ↑/↓ elige · Enter/F empieza · Esc vuelve','W/S ↑/↓ choose · Enter/F start · Esc back'],
['Cada guardián esconde una versión de sí mismo que preferiría olvidar: la primera, la de la versión 0.1.','Every guardian hides a version of themselves they would rather forget: the first one, from version 0.1.'],
['Esas versiones no se han ido. Han vuelto a por ti. Escapa de tu pasado.','Those versions never left. They came back for you. Escape your past.'],
['Antes de las llamas bonitas, yo ya ardía aquí. ¡No vas a dejarme atrás!','Before the pretty flames, I was already burning here. You will not leave me behind!'],
['Antes de las chispas y los sprites, solo existía este bloque. ¡No huirás de mí!','Before the sparks and sprites, there was only this block. You will not run from me!'],
['Siempre fui el más sólido. Un ladrillo no se rompe… ni olvida.','I was always the sturdiest. A brick does not break… or forget.'],
['¿Un ladrillo con ojos? Yo ya no soy eso.','A brick with eyes? I am not that anymore.'],
['Corro más rápido que tu recuerdo.','I run faster than your memory.'],
['Todos empezamos siendo bloques. Pero seguimos adelante.','We all started out as blocks. But we keep moving.'],
['Mis esquinas se han redondeado con el tiempo. Sigue corriendo.','My corners have rounded off with time. Keep running.'],
['Qué rápido te has vuelto… Ve. No mires atrás.','How fast you have become… Go. Do not look back.'],
['Aun hecho polvo, estoy orgulloso de ti.','Even crumbled to dust, I am proud of you.'],
['Los tres ladrillos se desmoronaron sin rencor. Escapar del pasado no era vencerlo: era aceptar que te trajo hasta aquí.','The three bricks crumbled without a grudge. Escaping the past was not beating it: it was accepting that it brought you here.'],
['MISIÓN COMPLETADA · ESCAPA DE TU PASADO','MISSION COMPLETE · ESCAPE YOUR PAST'],
['Ladrillo ','Brick '],[' superado.',' cleared.']);

/* ===== MISIONES v2: helper + misiones nuevas ===== */
const fcol=(m,f)=>m.old?OLDCOL[f]:CH[f].col;
const HERO=[['Ya he llegado hasta aquí. No pienso parar.','I have come this far. I am not stopping.'],['Veamos de qué eres capaz.','Let us see what you are made of.'],['Un duelo más. Solo uno más.','One more duel. Just one more.'],['No vine hasta la cumbre para rendirme.','I did not climb this far to give up.'],['Si quieres pasar, tendrás que derribarme.','If you want to pass, you will have to knock me down.'],['Cada golpe me enseña algo nuevo.','Every hit teaches me something new.']];
HERO.forEach(h=>EN_PAIRS.push(h));
EN_PAIRS.push(['Completadas: ','Completed: '],['Rival superado · ','Foe cleared · ']);
function mkM(id,icon,nm,ds,foes,maps,intro,L,end,o){const T=a=>{EN_PAIRS.push([a[0],a[1]]);return a[0]};
 T(nm);T(ds);const up=nm[0].toUpperCase();EN_PAIRS.push(['MISIÓN COMPLETADA · '+up,'MISSION COMPLETE · '+nm[1].toUpperCase()]);
 const m={id,icon,name:nm[0],desc:ds[0],foes,maps,pre:[],hero:[],after:[],intro:[['Narrador',T(intro),'#ffd23c']],end:[['Narrador',T(end),'#ffd23c'],['Narrador','MISIÓN COMPLETADA · '+up,'#ffd23c']],...o};
 L.forEach((l,i)=>{m.pre.push(T([l[0],l[1]]));m.after.push(T([l[2],l[3]]));m.hero.push(HERO[(i+id.length)%HERO.length][0])});
 MISSIONS.push(m)}
mkM('storm','⛈️',['Tormenta perfecta','Perfect Storm'],['Viento, Rayo y Agua desatan el cielo contra ti','Wind, Lightning and Water unleash the sky on you'],[6,1,10],[3,15,10],
 ['Las nubes se oscurecen sobre la cumbre. Algo viene.','Clouds darken over the summit. Something is coming.'],[
 ['Soy la primera ráfaga. ¡Intenta mantenerte en pie!','I am the first gust. Try to stay on your feet!','Me has soplado a un lado. Pero esto solo empieza.','You blew me aside. But this is only the start.'],
 ['El trueno ya viene detrás de mí.','Thunder is already right behind me.','Qué chispa. Pasa antes de que caiga la lluvia.','What a spark. Go on before the rain falls.'],
 ['Todas las tormentas terminan en mí.','Every storm ends with me.','Hasta la lluvia se calma. Despejado, por fin.','Even the rain settles. Clear skies at last.']],
 ['El cielo se abrió y salió el sol. Cruzaste la tormenta sin romperte.','The sky opened and the sun came out. You crossed the storm unbroken.']);
mkM('frost','❄️',['Paso helado','Frozen Pass'],['Hielo, Agua y Cristal bloquean el camino nevado','Ice, Water and Crystal block the snowy road'],[3,10,14],[8,10,14],
 ['La ventisca borra el sendero. Solo queda avanzar.','The blizzard erases the trail. All that is left is moving forward.'],[
 ['Aquí nadie pasa sin congelarse.','Nobody gets through here without freezing.','Me has roto el hielo… eso es raro en mí.','You broke the ice… that is rare for me.'],
 ['Fluyo bajo el hielo. No me verás venir.','I flow beneath the ice. You will not see me coming.','Hasta el río se rinde ante ti.','Even the river yields to you.'],
 ['Soy el hielo más puro. Y el más afilado.','I am the purest ice. And the sharpest.','Me quebraste… pero brillo más que nunca.','You shattered me… yet I shine brighter than ever.']],
 ['El deshielo llegó al amanecer. El paso quedó abierto.','The thaw came at dawn. The pass lay open.']);
mkM('lava','🌋',['Corazón del volcán','Heart of the Volcano'],['Fuego, Magma y Roca arden bajo la montaña','Fire, Magma and Rock burn beneath the mountain'],[0,15,2],[2,15,2],
 ['La tierra tiembla. El volcán te ha oído llegar.','The ground shakes. The volcano heard you coming.'],[
 ['Las llamas me obedecen. ¡Arde conmigo!','The flames obey me. Burn with me!','Me apagaste. Hacía siglos que nadie lo lograba.','You put me out. Nobody has in centuries.'],
 ['Soy lo que hierve bajo tus pies.','I am what boils beneath your feet.','Me enfrío… y me endurezco. Sigue adelante.','I cool down… and harden. Keep going.'],
 ['Esta montaña es mía. Cada piedra me pertenece.','This mountain is mine. Every stone belongs to me.','Una montaña también cede. Respeto.','Even a mountain gives way. Respect.']],
 ['El volcán rugió y se durmió. Saliste de sus entrañas sin una quemadura.','The volcano roared and fell asleep. You left its depths unscorched.'],{lv:1.1});
mkM('night','🌑',['Noche sin luna','Moonless Night'],['Sombra, Veneno, Vacío y Eco acechan en la oscuridad','Shadow, Poison, Void and Echo lurk in the dark'],[4,11,9,16],[7,11,16,16],
 ['No hay luna. No hay luz. Solo ojos que te miran.','No moon. No light. Only eyes watching you.'],[
 ['No me ves, pero yo a ti sí.','You cannot see me, but I see you.','Me encontraste a oscuras. Impresionante.','You found me in the dark. Impressive.'],
 ['Un solo roce y no habrá vuelta atrás.','One touch and there is no going back.','Tu voluntad es el mejor antídoto.','Your will is the best antidote.'],
 ['Donde tú ves nada, yo lo veo todo.','Where you see nothing, I see everything.','Me llenaste de algo… ¿esperanza?','You filled me with something… hope?'],
 ['Todo lo que digas, yo lo repetiré.','Everything you say, I will repeat.','Ahora solo oigo tu eco. Sigue.','Now I only hear your echo. Go on.']],
 ['Amaneció sin que nadie lo pidiera. La noche no pudo contigo.','Dawn came without anyone asking. The night could not hold you.']);
mkM('jungle','🌿',['Selva viva','Living Jungle'],['Selva, Veneno y Viento defienden el bosque encantado','Jungle, Poison and Wind defend the enchanted forest'],[5,11,6],[9,11,9],
 ['El bosque susurra tu nombre. No es un saludo.','The forest whispers your name. It is not a greeting.'],[
 ['Las raíces ya te tienen agarrado.','The roots already have a hold of you.','Cortaste mis raíces. El bosque te respeta.','You cut my roots. The forest respects you.'],
 ['Cada flor de este pantano es una trampa.','Every flower in this swamp is a trap.','Pasa. Hoy tu suerte vale más que mi veneno.','Go on. Today your luck beats my poison.'],
 ['Soy la brisa que mece las hojas… y las arranca.','I am the breeze that rocks the leaves… and tears them off.','El bosque respira tranquilo gracias a ti.','The forest breathes easy thanks to you.']],
 ['Los árboles se inclinaron a tu paso. La selva te dejó marchar.','The trees bowed as you passed. The jungle let you go.']);
mkM('neon','🌆',['Noche neón','Neon Night'],['Ninja, Acero, Rayo y Gravedad patrullan la ciudad','Ninja, Steel, Lightning and Gravity patrol the city'],[7,12,1,17],[4,12,4,4],
 ['La ciudad nunca duerme. Y esta noche, tampoco te dejará.','The city never sleeps. Tonight, it will not let you sleep either.'],[
 ['Ya estabas en mi mira antes de llegar.','You were in my sights before you arrived.','Ni una sombra me alcanzó… excepto tú.','Not one shadow caught me… except you.'],
 ['Mi armadura no conoce abolladuras.','My armor knows no dents.','Una abolladura. La primera. Sigue.','A dent. My first. Keep going.'],
 ['Esta ciudad brilla gracias a mí.','This city shines thanks to me.','Se fundieron los plomos. Buen golpe.','The fuses blew. Nice hit.'],
 ['Aquí abajo, todo cae. Tú también.','Down here, everything falls. So will you.','Me hiciste flotar de sorpresa. Ve.','You made me float in surprise. Go.']],
 ['Las luces se apagaron una a una. La ciudad ya sabe tu nombre.','The lights went out one by one. The city knows your name now.'],{lv:1.1});
mkM('space','🚀',['Más allá del cielo','Beyond the Sky'],['Astro, Gravedad, Vacío y Luz te esperan entre las estrellas','Astro, Gravity, Void and Light await among the stars'],[8,17,9,13],[6,6,15,6],
 ['El cielo no es el límite. Es solo el principio.','The sky is not the limit. It is only the beginning.'],[
 ['Bienvenido al espacio. Aquí nadie oye gritar.','Welcome to space. Nobody hears you scream here.','Aterrizaste mejor que yo. Sigue subiendo.','You landed better than I did. Keep climbing.'],
 ['Aquí arriba, yo decido hacia dónde caes.','Up here, I decide which way you fall.','Te sostuviste solo. Eso es poco común.','You held yourself up. That is rare.'],
 ['Más allá solo queda el silencio.','Beyond here there is only silence.','Rompiste el silencio. Bien hecho.','You broke the silence. Well done.'],
 ['Soy la última estrella. Apágame si puedes.','I am the last star. Put me out if you can.','Mi brillo ya no es el único. Gracias.','My glow is no longer the only one. Thank you.']],
 ['Cruzaste el último cielo. Las estrellas guardan tu nombre.','You crossed the last sky. The stars keep your name.'],{lv:1.2});
mkM('dawn','☀️',['Guardianes del alba','Guardians of Dawn'],['Luz, Aurora y Eco custodian el santuario del amanecer','Light, Aurora and Echo guard the sanctuary of dawn'],[13,18,16],[13,8,16],
 ['El santuario brilla antes del amanecer. Nadie entra sin ser probado.','The sanctuary glows before sunrise. Nobody enters without being tested.'],[
 ['El amanecer solo es para quien lo merece.','Dawn is only for those who deserve it.','Mereces verlo. Pasa.','You deserve to see it. Pass.'],
 ['Mis colores guían… y confunden.','My colors guide… and confuse.','Supiste leer mi luz. Sigue el camino.','You read my light well. Follow the path.'],
 ['Mi voz llega hasta el último rincón del santuario.','My voice reaches every corner of the sanctuary.','Tu eco quedará aquí para siempre.','Your echo will stay here forever.']],
 ['El sol se alzó sobre el santuario. Eras tú quien lo traía.','The sun rose over the sanctuary. You were the one bringing it.']);
mkM('marathon','🏁',['Maratón de la Cumbre','Summit Marathon'],['Seis guardianes seguidos. Cada duelo, una sola vida','Six guardians in a row. One life per duel'],[0,3,5,7,12,15],[0,1,3,5,7,2],
 ['Seis guardianes. Un único camino. ¿Aguantarás hasta la cima?','Six guardians. One path. Can you last to the top?'],[
 ['¡Calienta bien, la cumbre está lejos!','Warm up well, the summit is far!','Un duelo menos. Quedan cinco.','One duel down. Five to go.'],
 ['Enfría la cabeza. Aquí no valen prisas.','Cool your head. No rushing here.','Cuatro por delante. No te enfríes.','Four ahead. Do not cool off.'],
 ['Las raíces de la cumbre son largas.','The roots of the summit run deep.','Tres más. Mantén el ritmo.','Three more. Keep the pace.'],
 ['Llegas tarde. Ya te he esquivado dos veces.','You are late. I have already dodged you twice.','Me alcanzaste. Quedan dos.','You caught me. Two remain.'],
 ['Antes de la cima, pasarás por mi muro.','Before the peak, you pass through my wall.','Solo queda uno. No lo subestimes.','Only one left. Do not underestimate him.'],
 ['Yo guardo la cima. Hierve o quédate abajo.','I guard the peak. Boil or stay below.','Seis guardianes vencidos. La cumbre es tuya.','Six guardians beaten. The summit is yours.']],
 ['Subiste hasta lo más alto sin mirar atrás. La cumbre te pertenece.','You climbed to the very top without looking back. The summit is yours.'],{st:1,lv:.9});
EN_PAIRS.sort((a,b)=>b[0].length-a[0].length);
const MSV=()=>{try{return JSON.parse(localStorage.getItem('cumbre_missions')||'{}')}catch(e){return{}}};
function missionDone(m){try{const d=MSV();d[m.id]=1;localStorage.setItem('cumbre_missions',JSON.stringify(d))}catch(e){}try{X.pop('🧱 Misión completada',m.name)}catch(e){}}
function startMission(m){ms={m,ch:0};MD={k:'mis',st:m.st||3,g:1,it:380,limit:0};sty=null;BOT=[0,1];applyCfg();rdy=[0,1];sel[1]=m.foes[0];scr='sel';sfx('ok')}
function mchap(){const m=ms.m,f=m.foes[ms.ch],r=CH[f],h=CH[sel[0]];sel[1]=f;mapI=m.maps[ms.ch]||0;M=MAPS[mapI];PL=M.p;LV=((m.lv||1)+ms.ch*.3)*[.65,1,1.3,1.6][CFG.difficulty??1];BOT=[0,1];
 const lines=[[r.n,m.pre[ms.ch],fcol(m,f)],[h.n,m.hero[ms.ch],h.col]];if(ms.ch==0)lines.unshift(...m.intro);say(lines,()=>{BOT=[0,1];start()})}
function misEnd(){const m=ms.m,i=ms.ch,f=m.foes[i],r=CH[f];if(win.i>=1){start();return}
 if(i>=m.foes.length-1)say([[r.n,m.after[i],fcol(m,f)],...m.end],()=>{missionDone(m);ms=null;BOT=[0,0];scr='menu'});
 else say([[r.n,m.after[i],fcol(m,f)],['Narrador',m.old?'Ladrillo '+(i+1)+' de '+m.foes.length+' superado.':'Rival superado · '+(i+1)+'/'+m.foes.length,'#ffd23c']],()=>{ms.ch++;mchap()})}
function misIn(){const n=MISSIONS.length,o=mm;if(J.KeyW||J.ArrowUp)mm=(mm+n-1)%n;if(J.KeyS||J.ArrowDown)mm=(mm+1)%n;if(mm!=o)sfx('mv');if(J.Enter||J.KeyF||J.KeyK)startMission(MISSIONS[mm])}
let mScr=0;
function drawMis(){bg();g.fillStyle='rgba(8,6,20,.55)';g.fillRect(0,0,W,H);
 const d=MSV(),n=MISSIONS.length,done=MISSIONS.filter(m=>d[m.id]).length,S=88,top=118,vis=4;
 txt('MISIONES',W/2,58,38,'#f8eaff');txt('Retos especiales con historia · Completadas: '+done+'/'+n,W/2,88,15,'#c9c1d8');
 mScr+=(Math.max(0,Math.min(mm-vis+1,n-vis))-mScr)*.25;
 g.save();g.beginPath();g.rect(0,top-6,W,S*vis+6);g.clip();
 MISSIONS.forEach((m,i)=>{const y=top+(i-mScr)*S,on=i==mm;if(y<top-S||y>top+S*vis)return;
  g.fillStyle=on?'rgba(255,210,60,.22)':'rgba(10,8,20,.72)';rr(110,y,740,80,16);if(on){g.strokeStyle='#ffd23c';g.lineWidth=3;g.beginPath();g.roundRect(110,y,740,80,16);g.stroke()}
  txt(m.icon,152,y+51,34,'#fff');txt(m.name,200,y+30,22,on?'#ffd23c':'#f1ece4','left');txt(m.desc,200,y+51,13,'#c9c1d8','left');txt(d[m.id]?'COMPLETADA ✔':'NUEVA MISIÓN',200,y+70,12,d[m.id]?'#7dff9a':'#ff9ee5','left');
  const k=m.foes.length,st=k>3?Math.min(40,170/k):62;
  m.foes.forEach((f,j)=>drawBody({x:838-(k-j)*st,y:y+12,w:34,h:50,f:-1,vx:0,vy:0,gr:1,act:0,stun:0,dash:0,slam:0,up:0,sc:0,c:CH[f],ph:T*3+j,old:m.old},0,1,.9))});
 g.restore();
 if(n>vis){const bh=S*vis*vis/n,by=top+(S*vis-bh)*(mScr/(n-vis));g.fillStyle='rgba(255,255,255,.28)';rr(874,by,6,bh,3)}
 txt('W/S ↑/↓ elige · Enter/F empieza · Esc vuelve',W/2,512,14,'#bbb')}
function drawBrick(p,t,a,air){const c=p.c,col=OLDCOL[CH.indexOf(c)]||c.col,atk=p.act>3,big=c.n=='Roca'?1.12:1;
 const sq=air?(p.vy<0?1.1:.94):1+Math.sin(t*5)*.015+a*Math.abs(Math.sin(p.ph||0))*.06;
 g.translate(atk?9:0,0);g.scale(big*(atk?1.1:1)/sq,big*sq);
 g.fillStyle=col;g.strokeStyle='#1a1226';g.lineWidth=3;g.beginPath();g.roundRect(-16,-26,32,50,12);g.fill();g.stroke();
 g.strokeStyle=sh(col,.78);g.lineWidth=1.6;g.beginPath();g.moveTo(-15,-9);g.lineTo(15,-9);g.moveTo(-15,8);g.lineTo(15,8);g.moveTo(-3,-24);g.lineTo(-3,-9);g.moveTo(5,-9);g.lineTo(5,8);g.moveTo(-6,8);g.lineTo(-6,23);g.stroke();
 g.fillStyle='rgba(255,255,255,.22)';g.beginPath();g.roundRect(-12,-22,6,11,3);g.fill();
 if(p.stun>0){g.strokeStyle='#111';g.lineWidth=2;g.beginPath();for(const ex of[3,12]){g.moveTo(ex-3,-17);g.lineTo(ex+3,-11);g.moveTo(ex+3,-17);g.lineTo(ex-3,-11)}g.stroke()}
 else{for(const ex of[3,12]){g.fillStyle='#fff';g.strokeStyle='#1a1226';g.lineWidth=1.5;g.beginPath();g.arc(ex,-14,4.4,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(ex+1.5,-14,2,0,7);g.fill()}
  if(atk){g.strokeStyle='#1a1226';g.lineWidth=2.2;g.beginPath();g.moveTo(-1,-21);g.lineTo(7,-18);g.moveTo(8,-18);g.lineTo(16,-21);g.stroke()}}}
function drawBody(p,ox=0,al=1,s=1){const c=p.c,t=Date.now()/1000,f=p.f,k=c.n=='Roca'?1.45:1,K=SKIN[c.n]||{},col=K.c||c.col,dk=K.d||sh(col,.62),air=!p.gr;
 const a=Math.min(1,Math.abs(p.vx)/2.5),sw=Math.sin(p.ph)*9,cs=Math.cos(p.ph),bob=air?0:Math.sin(t*5)*(a<.2?1.3:.4);
 g.save();g.globalAlpha=al;g.translate(p.x+17+ox*f,p.y+27.5+bob);g.scale(s*f,s);
 const lean=p.stun>0?-.45:Math.max(-.3,Math.min(.3,p.vx*f*.035))+(p.dash>0?.35:0);g.rotate(lean);
 if(p.pw>0){g.fillStyle='rgba(255,180,60,.35)';g.beginPath();g.arc(0,-4,34,0,7);g.fill()}
 if(p.poseT>0){const pulse=1+Math.sin(T*18)*.12;g.strokeStyle=c.col;g.globalAlpha=.35;g.lineWidth=3;g.beginPath();g.ellipse(0,0,23*pulse,34*pulse,0,0,7);g.stroke();g.globalAlpha=al}
 if(p.old){drawBrick(p,t,a,air);g.restore();return}
 skFx(K,t,al);
 let f1x,f1y,f2x,f2y;
 if(p.slam>0){f1x=10;f2x=-10;f1y=f2y=21}
 else if(air){const up=p.vy<0;f1x=up?8:9;f1y=up?12:21;f2x=up?-6:-9;f2y=up?17:21}
 else{f1x=sw*a+4*(1-a);f1y=22-Math.max(0,cs)*5*a;f2x=-sw*a-4*(1-a);f2y=22-Math.max(0,-cs)*5*a}
 let ax=-sw*a*.8+3,ay=-2,bx=sw*a*.8-2,by=-2,hot=0;
 if(air){ay=-18;by=-16;ax=8;bx=-8}
 if(p.dash>0){ax=24;ay=-12;bx=-16;by=-8}
 if(p.slam>0){ax=8;ay=18;bx=-8;by=18}
 if(p.up>0){ax=6;ay=-34;bx=-4;by=-34}
 if(p.poseT>0){if(p.pose=='fountain'||p.pose=='sunrise'||p.pose=='magnetrise'){ax=5;ay=-37;bx=-12;by=-22}else if(p.pose=='anvil'){ax=14;ay=21;bx=-14;by=21}else if(p.pose=='mirror'){ax=24+Math.sin(T*16)*3;ay=-12;bx=-22;by=-8}else if(p.pose=='renewal'){ax=-8;ay=-28;bx=18;by=-27}else if(p.pose=='spores'){ax=12;ay=-30;bx=-15;by=-25}}
 if(p.sc>60){ax=24;ay=-14;bx=19;by=-10;hot=1}
 if(p.act>10){ax=-9;ay=-8}
 else if(p.act>3){hot=1;if(p.ty=='U'){ax=7;ay=-38}else if(p.ty=='D'){ax=8;ay=22}else{ax=27;ay=-14}}
 if(p.stun>0){ax=14+Math.sin(t*25)*6;ay=-30;bx=-14;by=-30+Math.cos(t*25)*6;f1x=12;f2x=-12;f1y=f2y=21}
 limb(0,0,f2x,f2y,8*k,dk,-5);skBoot(f2x,f2y,k,K,1);limb(0,-13,bx,by,6*k,dk,3);skGlove(bx,by,k,K,1);
 limb(0,0,1,-15,12*k,col);limb(0,-8,0,-8,14*k,dk);skTorso(K,k);
 limb(0,0,f1x,f1y,8*k,col,-5);skBoot(f1x,f1y,k,K,0);
 const hx=3,hy=-24;g.fillStyle=col;g.strokeStyle='#1a1226';g.lineWidth=2.5;g.beginPath();g.arc(hx,hy,9.5,0,7);g.fill();g.stroke();skHead(K,hx,hy);
 const hf=HAT[c.n];if(hf)hf(hx,hy,t);
 if(p.stun>0){g.strokeStyle='#111';g.lineWidth=2;g.beginPath();g.moveTo(hx+2,hy-4);g.lineTo(hx+8,hy+2);g.moveTo(hx+8,hy-4);g.lineTo(hx+2,hy+2);g.stroke()}
 else{g.fillStyle=c.n=='Vacío'?'#ff3df2':'#fff';g.beginPath();g.arc(hx+5,hy-1,3.4,0,7);g.fill();g.fillStyle=K.e||'#111';g.beginPath();g.arc(hx+6.2,hy-1,2,0,7);g.fill();g.fillStyle='#111';g.beginPath();g.arc(hx+6.5,hy-1,1,0,7);g.fill()}
 limb(0,-13,ax,ay,6*k,col,3);skGlove(ax,ay,k,K,0);
 if(hot){g.fillStyle='rgba(255,255,255,.85)';g.beginPath();g.arc(ax,ay,7,0,7);g.fill()}
 g.restore()}
function drawP(p){if(p.inv>0&&(p.inv>>2)%2)return;p.ph=(p.ph||0)+Math.abs(p.vx)*.11;
 if(p.gr){g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(p.x+17,p.y+p.h+1,16,4,0,0,7);g.fill()}
 if(p.dash>0){drawBody(p,-28,.2);drawBody(p,-14,.35)}
 drawBody(p,p.held>0?Math.sin(Date.now()/16)*2.5:0,p.dgi>0?.3:1);if(p.psn>0){g.fillStyle='rgba(150,230,40,.7)';g.beginPath();g.arc(p.x+17+Math.sin(T*9)*10,p.y-(T*40%30),3,0,7);g.fill()}
 g.fillStyle=MD.k=='ffa'?PCOL[p.i]:p.i?'#5ec8ff':'#ff6ea8';if(MD.k=='ffa')txt('J'+(p.i+1),p.x+17,p.y-46,11,PCOL[p.i]);tri(p.x+11,p.y-42,p.x+23,p.y-42,p.x+17,p.y-34,g.fillStyle);
 if(p.act>3&&p.act<=10){g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=6;g.lineCap='round';const cx=p.x+17,cy=p.y+26,f=p.f;g.beginPath();
  if(p.ty=='U')g.arc(cx,cy,40,-2.3,-.8);else if(p.ty=='D')g.arc(cx,cy,40,.8,2.3);else g.arc(cx,cy,38,f>0?-1:Math.PI-1,f>0?1:Math.PI+1);g.stroke()}
 if(p.slam>0&&p.slam<=10){g.strokeStyle='#fff';g.lineWidth=5;g.beginPath();g.ellipse(p.x+p.w/2,p.y+p.h,50+(10-p.slam)*3,16,0,0,7);g.stroke()}
 const cx0=p.x+17,cy0=p.y+27,fd=p.f;
 if(p.gbT>0&&!(p.hold>0)){const e=p.gbT>16?(24-p.gbT)/8:p.gbT>=10?1:p.gbT/10,hx=cx0+fd*(12+e*28),hy=cy0-6;limb(cx0+fd*5,cy0-8,hx,hy,6,p.c.col,0);g.fillStyle='#fff';g.strokeStyle='#1a1226';g.lineWidth=2;g.beginPath();g.arc(hx,hy,5.5,0,7);g.fill();g.stroke()}
 if(p.hold>0&&p.gv){const v=p.gv;limb(cx0+fd*5,cy0-8,v.x+17,v.y+20,6,p.c.col,2);if(p.pmT>8){g.strokeStyle='#fff';g.lineWidth=3;g.lineCap='round';for(let i=0;i<6;i++){const a=i*1.05+T*9;g.beginPath();g.moveTo(v.x+17+Math.cos(a)*10,v.y+24+Math.sin(a)*10);g.lineTo(v.x+17+Math.cos(a)*19,v.y+24+Math.sin(a)*19);g.stroke()}}}
 if(p.thr>9){g.strokeStyle='rgba(255,255,255,.85)';g.lineWidth=6;g.lineCap='round';g.beginPath();g.arc(cx0,cy0,36,fd>0?-1.2:Math.PI-1.2,fd>0?1.2:Math.PI+1.2);g.stroke()}
 if(p.shd){const r=21+19*Math.max(0,p.shp)/100,fl=p.shf>0,hu=Math.max(0,p.shp)*1.15;if(fl)p.shf--;g.save();g.fillStyle=`hsla(${hu},90%,62%,${fl?.5:.28})`;g.strokeStyle=`hsla(${hu},95%,82%,${fl?1:.75})`;g.lineWidth=fl?4:2.5;g.beginPath();g.arc(cx0,cy0,r+(fl?3:0),0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,.32)';g.beginPath();g.ellipse(cx0-r*.35,cy0-r*.4,r*.22,r*.12,-.6,0,7);g.fill();g.restore()}
}
function hud(){if(MD.k=='ffa')return hudF();P.forEach((p,i)=>{const x=isCoopStory()?30+i*315:i?W-230:30;
 g.fillStyle='rgba(10,8,20,.72)';rr(x-10,H-92,210,80,12);
 g.fillStyle='#333';g.fillRect(x,H-20,190,6);g.fillStyle=p.fs>=100?'#fff':'#ffd23c';g.fillRect(x,H-20,190*p.fs/100,6);
 if(p.fs>=100&&(Date.now()>>8)%2)txt('¡SMASH FINAL! ('+lbl(i==2?1:i)+')',x,H-100,13,'#fff','left');
 txt(isCoopStory()?(i==2?'RIVAL':'EQUIPO · J'+(i+1))+' · '+p.c.n:MD.k=='online'?(i==onlineSlot?'Tú':'Rival')+' · '+p.c.n:p.c.n+(p.old?' v0.1':'')+' · J'+(i+1),x,H-68,14,'#f1ece4','left');
 txt(p.dmg.toFixed(0)+'%',x,H-28,34,`hsl(${Math.max(0,55-p.dmg*.4)},95%,62%)`,'left');
 if(['points','king'].includes(MD.k))txt((MD.k=='king'?'CIMA ':'PTS ')+Math.floor(MD.k=='king'?p.king/60:p.score),x+188,H-29,13,'#ffd23c','right');
 for(let s=0;s<3;s++){g.fillStyle=s<p.st?p.c.col:'#444';g.beginPath();g.arc(x+130+s*22,H-32,8,0,7);g.fill()}if(p.st>3)txt('×'+p.st,x+190,H-52,13,p.c.col,'right')})}
const SEL=[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18],rnd=()=>{const open=SEL.filter(i=>X.ok(i));return open[Math.random()*open.length|0]};
const UNLOCK_HINT={10:['5 victorias','5 wins'],11:['1 historia','1 story'],12:['25 victorias','25 wins'],13:['5 supervivencias','5 survival wins'],14:['5 historias','5 stories'],15:['50 victorias','50 wins'],16:['10 supervivencias','10 survival wins'],17:['Derrota al Vacío','Defeat the Void'],18:['10 historias','10 stories']};
const BAR=(x,y,l,v,col)=>{txt(l,x,y+9,11,'#c9c1d8','left');g.fillStyle='rgba(255,255,255,.12)';rr(x+52,y,110,10,5);g.fillStyle=col;rr(x+52,y,110*v,10,5)};
function rbw(s,y,z){g.font=`bold ${z}px "Trebuchet MS",sans-serif`;let x=W/2-g.measureText(s).width/2;for(const ch of s){txt(ch,x,y+Math.sin(T*3+x*.02)*4,z,`hsl(${(T*60+x*.3)%360},90%,66%)`,'left');x+=g.measureText(ch).width}}
function drawSel(){if(MD.k=='ffa')return drawSelF();bg();const bm=Math.sin(T*2)*14;
 for(let i=0;i<2;i++){const c=CH[sel[i]],d=i?-1:1,x0=i?W:0,cx=i?810:150,r=rdy[i];
  g.globalAlpha=.3;g.fillStyle=c.col;g.beginPath();g.moveTo(x0,0);g.lineTo(x0+d*(340+bm),0);g.lineTo(x0+d*(230-bm),H);g.lineTo(x0,H);g.fill();g.globalAlpha=1;
  txt(MD.k=='online'?(i==onlineSlot?'TU LUCHADOR · P':'RIVAL · P')+(i+1):i&&BOT[1]?'CPU':'JUGADOR '+(i+1),cx,122,18,i?'#5ec8ff':'#ff6ea8');
  g.fillStyle='rgba(0,0,0,.35)';g.beginPath();g.ellipse(cx,334,70,12,0,0,7);g.fill();
  drawBody({x:cx-17,y:237-(r?Math.abs(Math.sin(T*3))*10:0),w:34,h:50,f:i?-1:1,vx:r?0:3,vy:0,gr:1,act:r&&(T*2)%1<.3?8:0,stun:0,dash:0,slam:0,up:0,sc:0,c,ph:T*9},0,1,3);
  txt(c.n.toUpperCase(),cx,372,38,c.col);txt(c.d,cx,392,13,'#f1ece4');
  [['VEL',c.sp/6],['SALTO',c.jp/14],['FUERZA',c.ad/12]].forEach((q,j)=>BAR(cx-81,402+j*16,q[0],q[1],c.col));
  const m=c.m.split(' · ');txt(m[0]+' · '+m[1],cx,468,11,'#c9c1d8');txt(m[2]+' · '+m[3],cx,482,11,'#c9c1d8');
  txt('★ '+c.fn,cx,500,13,'#ffd23c');txt(r?'¡LISTO!':'Elige…',cx,524,18,r?'#6fcf6a':'#aaa')}
 rbw('DUELO EN LA CUMBRE II',56,44);txt('ECLIPSE DE CRISTAL',W/2,86,16,'#ffd23c');txt(MD.k=='online'?'A/D cambia tu luchador · B o Enter confirma · Esc sale':'J1 '+ctl(0)+' · J2 '+ctl(1)+' · elegir y confirmar',W/2,112,12,'#f1ece4');
 SEL.forEach((x,j)=>{const c=CH[x],cx=322+j%3*108,cy=124+(j/3|0)*44,on=sel[0]==x||sel[1]==x,locked=!X.ok(x),hint=UNLOCK_HINT[x];
  g.fillStyle=locked?'rgba(4,3,10,.94)':'rgba(10,8,20,.72)';rr(cx,cy,100,40,8);
  for(let i=0;i<2;i++)if(sel[i]==x){g.strokeStyle=rdy[i]?'#6fcf6a':i?'#5ec8ff':'#ff6ea8';g.lineWidth=3;g.beginPath();g.roundRect(cx+i*3,cy+i*3,100-i*6,40-i*6,8);g.stroke()}
  drawBody({x:cx-6,y:cy+1,w:34,h:50,f:1,vx:on?3:0,vy:0,gr:1,act:0,stun:0,dash:0,slam:0,up:0,sc:0,c,ph:on?T*10:0},0,locked?.18:1,.4);
  if(locked){g.fillStyle='rgba(0,0,0,.62)';g.fillRect(cx,cy,100,40);txt(c.n,cx+62,cy+14,10,'#999');txt('🔒',cx+19,cy+31,11,'#d4d0dc');txt(langText(hint?.[0]||'Desbloquea para jugar'),cx+62,cy+30,8,'#c3bdcf')}else txt(c.n,cx+61,cy+24,12,'#fff')});
 if(MD.k=='online'){txt('Elige con A/D y confirma con B o Enter. Esperando al rival…',W/2,514,14,'#f1ece4');return}const gr=g.createLinearGradient(380,0,580,0);M.c.forEach((c,i)=>gr.addColorStop(i/3,c));g.fillStyle=gr;rr(380,492,200,8,4);
 txt('◀ '+M.n+' ▶',W/2,486,17,'#fff');txt('↑/↓ cambia el mapa',W/2,518,12,'#c9c1d8')}
function selInput(){if(J.KeyR&&ruleOn()){openRules();return}if(MD.k=='ffa'){selInputF();return}if(MD.k=='online'){onlineSelectIn();return}for(let i=0;i<2;i++){const k=C[i];if(i&&BOT[1])continue;
 if(!rdy[i]){const d=(J[k.r]?1:0)-(J[k.l]?1:0);if(d){const open=SEL.filter(x=>X.ok(x)),at=open.indexOf(sel[i]);sel[i]=open[(at+d+open.length)%open.length];sfx('sel')}}
 if(J[k.u]||J[k.d]){mapI=(mapI+(J[k.d]?1:MAPS.length-1))%MAPS.length;M=MAPS[mapI];sfx('mv')}
 if(J[k.a]){rdy[i]=!rdy[i];sfx(rdy[i]?'rd':'mv')}}
 if(rdy[0]&&rdy[1])go()}
function fsGo(p,o){sfx('sm');p.fs=0;p.inv=220;fs={t:45,p};const hzAt=HZ.length,c=p.c.n;
 if(c=='Fuego')for(let i=0;i<10;i++)HZ.push({x:i%3?80+Math.random()*780:o.x-25,y:0,w:80,h:H,t:35+i*9,life:14,dmg:16,kb:15,col:'#ff7a2a'});
 else if(c=='Rayo')for(let i=0;i<7;i++)HZ.push({x:o.x-30+(i%2?1:-1)*i*45,y:0,w:60,h:H,t:35+i*14,life:10,dmg:18,kb:16,col:'#fff36b'});
 else if(c=='Viento')for(const s of[-1,1])for(let j=0;j<2;j++)HZ.push({x:s>0?-100-j*220:W+10+j*220,y:0,w:90,h:H,t:40,life:130,vx:s*10,dmg:10,kb:13,col:'#b8f2e6'});
 else if(c=='Ninja')for(let i=0;i<14;i++)HZ.push({x:i*70,y:0,w:40,h:H,t:35+i*5,life:5,dmg:9,kb:10,col:'#ff4d6d'});
 else if(c=='Astro')for(const s of[-1,1])HZ.push({x:W/2-100+s*10,y:0,w:200,h:H,t:40,life:55,vx:s*9,dmg:20,kb:19,col:'#ff9ee5'});
 else if(c=='Vacío')for(let i=0;i<12;i++)HZ.push({x:Math.random()*880,y:0,w:90,h:H,t:30+i*7,life:14,dmg:18,kb:17,col:'#2a1a4a'});
 else if(c=='Hielo')HZ.push({x:0,y:H-200,w:W,h:200,t:50,life:25,dmg:22,kb:17,col:'#bdf3ff'});
 else if(c=='Sombra')for(let i=0;i<8;i++)HZ.push({x:o.x-140+i*40,y:o.y-60,w:50,h:170,t:30+i*8,life:6,dmg:12,kb:12,col:'#b07cff'});
 else if(c=='Selva')for(let i=0;i<9;i++)HZ.push({x:i*107,y:100,w:100,h:H-100,t:35+i*8,life:14,dmg:15,kb:15,col:'#4fd36a'});
 else if(c=='Agua')for(const s of[-1,1])for(let j=0;j<3;j++)HZ.push({x:s>0?-120-j*200:W+20+j*200,y:H-260,w:110,h:260,t:40,life:130,vx:s*9,dmg:14,kb:15,col:'#3d8bff'});
 else if(c=='Veneno')for(let i=0;i<12;i++)HZ.push({x:i*80,y:H-160,w:70,h:160,t:30+i*6,life:40,dmg:13,kb:12,col:'#b6e02f'});
 else if(c=='Acero')for(let i=0;i<16;i++)HZ.push({x:Math.random()*900,y:0,w:36,h:H,t:30+i*5,life:6,dmg:11,kb:11,col:'#d9dde6'});
 else if(c=='Luz'){HZ.push({x:o.x-60,y:0,w:120,h:H,t:50,life:40,dmg:24,kb:20,col:'#fff6c9'});for(const s of[-1,1])HZ.push({x:W/2,y:0,w:70,h:H,t:60,life:80,vx:s*8,dmg:14,kb:14,col:'#fff6c9'})}
 else if(c=='Cristal')for(let i=0;i<7;i++)HZ.push({x:o.x-190+i*55,y:0,w:24,h:H,t:28+i*6,life:12,dmg:10,kb:13,col:'#9ef7ff'});
 else if(c=='Magma')for(let i=0;i<5;i++)HZ.push({x:o.x-120+i*58,y:H-155,w:42,h:155,t:24+i*8,life:18,dmg:15,kb:17,col:'#ff713d'});
 else if(c=='Eco')for(const s of[-1,1])HZ.push({x:s>0?-190:W+10,y:H-200,w:180,h:200,t:32,life:90,vx:s*11,dmg:13,kb:16,col:'#a9ffcf'});
 else if(c=='Gravedad')for(let i=0;i<6;i++)HZ.push({x:W/2-32,y:0,w:64,h:H,t:25+i*12,life:17,dmg:12,kb:15,col:'#bd9cff'});
 else if(c=='Aurora')for(let i=0;i<9;i++)HZ.push({x:o.x-250+i*62,y:0,w:36,h:H,t:22+i*7,life:16,dmg:11,kb:14,col:'#ff9bd0'});
 else for(const s of[-1,1])HZ.push({x:p.x+(s>0?p.w:-60),y:190,w:60,h:350,t:40,life:75,vx:s*12,dmg:20,kb:18,col:'#b9a27a'});for(let i=hzAt;i<HZ.length;i++)HZ[i].owner=p.i}
function drawHZ(){for(const h of HZ){if(h.t>0){g.fillStyle='rgba(255,60,60,.22)'}else{g.fillStyle=h.col;g.globalAlpha=.85}
 g.fillRect(h.x,h.y,h.w,h.h);g.globalAlpha=1}}
function drawFX(){for(const f of FX){g.globalAlpha=Math.min(1,f.life/12);g.fillStyle=f.col;g.beginPath();g.arc(f.x,f.y,f.r*Math.min(1,f.life/7),0,7);g.fill()}g.globalAlpha=1}
function drawProjectile(b){const q=b.q,r=q.r||8,k=q.kind;g.save();g.translate(b.x,b.y);g.rotate(Math.atan2(b.vy,b.vx));g.shadowColor=q.col||'#fff';g.shadowBlur=k==='pool'?8:14;g.fillStyle=q.col||'#fff';g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=2;
 if(k==='shard'){g.beginPath();g.moveTo(-r,0);g.lineTo(0,-r*1.4);g.lineTo(r,0);g.lineTo(0,r*1.4);g.closePath();g.fill();g.stroke()}
 else if(k==='lava-wave'){g.beginPath();g.ellipse(0,0,r*1.4,r*.65,0,0,7);g.fill();g.fillStyle='#ffe29b';g.beginPath();g.ellipse(0,-r*.15,r*.7,r*.22,0,0,7);g.fill()}
 else if(k==='echo-wave'){g.beginPath();g.ellipse(0,0,r*1.2,r*.6,0,0,7);g.stroke();g.beginPath();g.ellipse(0,0,r*.65,r*.35,0,0,7);g.stroke()}
 else if(k==='singularity'){g.beginPath();g.arc(0,0,r,0,7);g.fill();g.stroke();g.beginPath();g.ellipse(0,0,r*1.6,r*.55,0,0,7);g.stroke()}
 else if(k==='aurora'){for(let i=0;i<3;i++){g.beginPath();g.moveTo(-r,-r*.6+i*r*.55);g.lineTo(0,-r+i*r*.5);g.lineTo(r*1.2,-r*.5+i*r*.55);g.lineTo(0,r*.7+i*r*.4);g.closePath();g.fill()}}
 else if(k==='bubble'){g.beginPath();g.ellipse(0,0,r*.8,r,0,0,7);g.fill();g.fillStyle='rgba(255,255,255,.8)';g.beginPath();g.arc(-r*.25,-r*.35,Math.max(2,r*.2),0,7);g.fill()}
 else if(k==='pool'){g.beginPath();g.ellipse(0,0,r*1.5,7,0,0,7);g.fill();g.stroke()}
 else if(k==='blade'){g.beginPath();g.moveTo(-r,-r*.35);g.lineTo(r*1.8,0);g.lineTo(-r,r*.35);g.closePath();g.fill();g.stroke()}
 else if(k==='prism'||k==='sunray'){g.beginPath();g.moveTo(-r,0);g.lineTo(0,-r);g.lineTo(r*1.5,0);g.lineTo(0,r);g.closePath();g.fill();g.stroke()}
 else if(k==='wave'){g.beginPath();g.moveTo(-r,-r*.2);g.quadraticCurveTo(-r*.4,-r*1.5,0,-r*.2);g.quadraticCurveTo(r*.5,r*.9,r,0);g.lineTo(r,r*.55);g.lineTo(-r,r*.55);g.closePath();g.fill()}
 else if(k==='toxic-spike'){g.beginPath();g.moveTo(-r*.7,r);g.lineTo(0,-r*1.4);g.lineTo(r*.7,r);g.closePath();g.fill()}
 else if(k==='mote'){g.beginPath();g.arc(0,0,r,0,7);g.fill();g.stroke()}
 else {g.beginPath();g.arc(0,0,r,0,7);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(-r*.2,-r*.2,Math.max(2,r/2.2),0,7);g.fill()}g.restore()}
const ITD=[{e:'❤',c:'#ff6b81'},{e:'★',c:'#e6b800'},{e:'⚡',c:'#ff8a00'},{e:'👟',c:'#2fa8d8'},{e:'💣',c:'#444'},{e:'✦',c:'#9a5cff'},{e:'❄',c:'#2fa8d8'},{e:'☠',c:'#6b8f1a'},{e:'🌀',c:'#7a4cff'},{e:'🎲',c:'#d4af37'},{e:'🌱',c:'#7ee06a'},{e:'⏳',c:'#c7a8ff'},{e:'🪶',c:'#bfe9ff'}];
ITD.push({e:'🍖',c:'#c46a3a'},{e:'🛡',c:'#4a7bd6'},{e:'🚀',c:'#e04a4a'},{e:'🧲',c:'#c03a3a'},{e:'🔥',c:'#ff6a1a'},{e:'🧊',c:'#6fd3ff'},{e:'💨',c:'#9fe3d6'},{e:'🦘',c:'#8b5a2b'},{e:'🐢',c:'#3f9a4a'},{e:'🌪',c:'#7a8fb0'},{e:'🪙',c:'#e6b800'},{e:'🔋',c:'#3fbf5a'},{e:'☄',c:'#d9531e'},{e:'🌩',c:'#d8c93a'},{e:'🧪',c:'#58b86b'},{e:'🔄',c:'#b24fd6'},{e:'🌋',c:'#b3321a'},{e:'😡',c:'#d63a3a'},{e:'🛸',c:'#6a5acd'},{e:'💥',c:'#444'});
const ITN=['Corazón','Estrella','Poder','Botas','Bomba','Carga smash','Congelar','Veneno','Cambio de sitio','Dado','Muelle','Reloj','Pluma','Comida','Armadura','Cohete','Imán','Llamarada','Congelación total','Ráfaga','Saltos extra','Lentitud','Tornado','Moneda smash','Batería','Meteoritos','Rayos','Antídoto','Cambio de daño','Lava','Furia','Teletransporte','Mega bomba'];
function pick(p,it){const t=it.t;sfx(t==4?'bomb':t>5?'mag':'it');const o=targetFor(p),F=MD.k=='ffa'?P.filter(q=>q!==p&&q.st>0):[o],sg=q=>Math.sign(q.x-p.x)||1;
 if(t==0)p.dmg=Math.max(0,p.dmg-25);else if(t==1)p.inv=Math.max(p.inv,300);else if(t==2)p.pw=600;else if(t==3)p.buf=400;
 else if(t==4){shake=12;for(const q of P)if(Math.hypot(q.x-it.x,q.y-it.y)<120){A=null;hit(q,12,11,Math.sign(q.x-it.x)||1)}}
 else if(t==5)p.fs=Math.min(100,p.fs+30);
 else if(t==6){o.stun=Math.max(o.stun,70);o.vx=0}
 else if(t==7)o.psn=360;
 else if(t==8){const x=p.x,y=p.y;p.x=o.x;p.y=o.y;o.x=x;o.y=y;p.inv=Math.max(p.inv,30)}
 else if(t==9){let roll;let n_=0;do{roll=Math.random()*ITD.length|0}while((roll==9||!RA.itm[roll])&&++n_<60);if(roll==9)roll=0;;pick(p,{t:roll,x:it.x,y:it.y})}else if(t==10){p.vy=-18;p.jm=2;p.gr=0;p.inv=Math.max(p.inv,14)}else if(t==11){o.stun=Math.max(o.stun,44);o.vx*=.25}else if(t==12){p.gl=360;p.vy=-8;p.jm=2;p.inv=Math.max(p.inv,18)}
 else if(t==13)p.dmg=Math.max(0,p.dmg-50);
 else if(t==14){p.armor=480;p.sc=480}
 else if(t==15){for(const q of F){q.vy=-22;q.vx*=.3;q.stun=Math.max(q.stun,18)}}
 else if(t==16){for(const q of F){q.vx=Math.max(-14,Math.min(14,(p.x-q.x)*.09));q.stun=Math.max(q.stun,16)}}
 else if(t==17){for(const q of F)if(Math.hypot(q.x-p.x,q.y-p.y)<260){A=null;hit(q,9,10,sg(q))}burst(p.x+17,p.y+25,'#ff8a2a',30,6)}
 else if(t==18){for(const q of F){q.stun=Math.max(q.stun,55);q.vx=0}}
 else if(t==19){for(const q of F){q.vx=sg(q)*18;q.vy=-5;q.stun=Math.max(q.stun,14)}}
 else if(t==20){p.jm=-3;p.vy=-12;p.gr=0}
 else if(t==21){for(const q of F)q.slow=480}
 else if(t==22){for(const q of F){q.vy=-17;q.vx=(Math.random()<.5?-1:1)*7;q.stun=Math.max(q.stun,24)}}
 else if(t==23)p.fs=100;
 else if(t==24)p.fs=Math.min(100,p.fs+60);
 else if(t==25){for(const q of F)for(let i=-1;i<=1;i++)HZ.push({x:q.x+i*55-25,y:0,w:50,h:H,t:26+Math.abs(i)*6,life:9,dmg:13,kb:13,col:'#ff7a2a',owner:p.i})}
 else if(t==26){for(const q of F){A=null;hit(q,10,9,sg(q));burst(q.x+17,q.y+20,'#fff36b',12,5)}}
 else if(t==27){p.psn=0;p.dmg=Math.max(0,p.dmg-10);p.inv=Math.max(p.inv,60)}
 else if(t==28){const d=p.dmg;p.dmg=o.dmg;o.dmg=d}
 else if(t==29){for(const q of F)HZ.push({x:q.x-80,y:H-210,w:160,h:210,t:24,life:45,dmg:10,kb:11,col:'#ff4a1a',owner:p.i})}
 else if(t==30){p.pw=500;p.buf=500;p.dmg+=15}
 else if(t==31){const l=PL[Math.random()*PL.length|0];p.x=l.x+l.w/2-17;p.y=l.y-60;p.vx=p.vy=0;p.inv=Math.max(p.inv,30)}
 else if(t==32){shake=16;for(const q of P)if(q!==p&&q.st>0&&Math.hypot(q.x-p.x,q.y-p.y)<240){A=null;hit(q,18,16,sg(q))}}}
function itemStep(){if(--itT<=0){itT=MD.it*(RA.im||1);const pool=ITD.map((_,i)=>i).filter(i=>RA.itm[i]);if(MD.k!='online'&&CFG.items&&RA.im>0&&pool.length&&IS.length<(MD.it*RA.im<200?5:2)){const l=PL[Math.random()*PL.length|0];IS.push({x:l.x+20+Math.random()*(l.w-40),y:-20,vy:0,t:pool[Math.random()*pool.length|0],l:1100})}}
 for(const it of IS){it.l--;it.vy=Math.min(it.vy+.4,7);const py=it.y+24;it.y+=it.vy;
  if(it.vy>=0)for(const l of PL)if(it.x>l.x&&it.x<l.x+l.w&&py<=l.y+2&&it.y+24>=l.y){it.y=l.y-24;it.vy=0}
  for(const p of P)if(it.l>0&&ov({x:it.x-12,y:it.y,w:24,h:24},p)){pick(p,it);it.l=0}}
 IS=IS.filter(it=>it.l>0&&it.y<H+40)}
function drawIT(){for(const it of IS){if(it.l<200&&(it.l>>3)%2)continue;const d=ITD[it.t];g.fillStyle=d.c;rr(it.x-12,it.y,24,24,6);txt(d.e,it.x,it.y+19,16,'#fff')}}
const LORE=[['Narrador','Hace mil años, el Cristal del Alba mantenía en equilibrio el fuego, el rayo, el hielo, el viento y la sombra.'],['Narrador','Una noche el Cristal estalló en nueve fragmentos. Cada guardián cree que otro lo rompió.'],['Narrador','Ahora el Torneo de la Cumbre decidirá quién reúne los fragmentos… y quién cae al vacío.']];
const DI=['¡El Cristal ardía en mi templo y ahora no está! ¡Me mirarás a la cara!','Sentí el trueno romperse. ¡Solo tú llegaste antes que yo al cráter!','La montaña lo recuerda todo. Y recuerda que pasaste por aquí esa noche.','Un fragmento cayó en mi glaciar… y alguien dejó huellas calientes.','No me ves, pero yo sí te vi. Llevas algo que me pertenece.','Las raíces susurran tu nombre. Devuelve el fragmento al bosque.','Todos los vientos apuntan hacia ti. ¿Casualidad?','Mi maestro dijo: quien sostiene el fragmento, sostiene la culpa.','Las estrellas se apagaron una a una. Tú eres la anomalía.','No lo rompí por odio. Lo dividí para contener lo que duerme bajo la montaña. ¡Los fragmentos ya no bastan!','La corriente me trajo hasta aquí. ¡Entrega el fragmento antes de que te arrastre!'];
const DW=['Mis llamas se calman. No fuiste tú. Toma mi fragmento.','Perdí. Había huellas negras en el cráter, no tuyas. Sigue adelante.','Fuerte y justo. Llévate el fragmento; algo extraño se mueve al norte.','El hielo no miente: el culpable huele a vacío.','Entre las sombras vi algo enorme. Un ojo sin luz. Cuidado.','La selva te acepta. El fragmento late… y algo quiere apagarlo.','El viento lo confirma: la fuente está bajo el volcán. Apúrate.','Mil cortes y ninguno acertó. Ahora lo entiendo: el enemigo es otro.','Las estrellas vuelven a brillar. Solo queda uno. El Vacío te espera.','Imposible… la luz ha vuelto…','La marea revela el camino al Santuario del Alba. ¡Detén al Vacío!'];
const EPI=[['Narrador','El Vacío dejó de luchar. Bajo su armadura no había un monstruo, sino el guardián que sostuvo la grieta durante mil años.','#ffd23c'],['Narrador','Los fragmentos volvieron a unirse. Esta vez, los guardianes compartieron su luz y sellaron juntos la sombra bajo la Cumbre.','#ffd23c'],['Narrador','La montaña quedó en silencio. Por primera vez, nadie tuvo que protegerla a solas. FIN.','#ffd23c']];
const STORY_BEATS={3:[['Narrador','Cada fragmento conserva un recuerdo distinto. Ninguno muestra quién lo rompió; todos muestran la misma sombra bajo la montaña.','#ffd23c']],6:[['Narrador','El Cristal no era una corona ni un arma. Era un sello. La energía que liberáis en cada duelo está despertando lo que hay debajo.','#ffd23c']],8:[['Narrador','El último fragmento vibra al acercarse al Santuario. La voz que os guiaba desde el principio no era un narrador: era el guardián del sello.','#ffd23c']]};
LORE.forEach(l=>l.push('#ffd23c'));
const abox=p=>p.ty=='U'?{x:p.x-6,y:p.y-38,w:p.w+12,h:44}:p.ty=='D'?{x:p.x-2,y:p.y+p.h-4,w:p.w+4,h:36}:{x:p.f>0?p.x+p.w:p.x-34,y:p.y+4,w:34,h:42};
function say(l,cb){dl=l;di=0;dc=0;dn=cb;scr='dlg'}
function dlgIn(){const t=langText(dl[di][1]);if(dc<t.length)dc+=.8;
 if(J.Enter||J.KeyF||J.KeyK||J.Space){if(dc<t.length)dc=t.length;else if(++di>=dl.length){const f=dn;dn=null;f&&f()}else dc=0}}
const ROOT=[['🎮','Solitario','J1 contra CPU'],['👥','Multijugador','P1 contra P2']];
const SOLO=[
 {icon:'⛰️',name:'Historia',desc:'Nueve duelos contra CPU',k:'st',bot:1,st:3,it:380,story:1},
 {icon:'🤖',name:'Duelo CPU',desc:'Un combate contra la máquina',k:'cpu',bot:1,st:3,it:380},
 {icon:'🔥',name:'Supervivencia',desc:'Rachas contra CPUs cada vez peores',k:'sv',bot:1,st:3,it:300},
 {icon:'🎯',name:'Entrenamiento',desc:'Práctica sin límite de vidas',k:'tr',bot:0,st:99,it:380},
 {icon:'⏱️',name:'Contrarreloj',desc:'Supera a la CPU en 90 segundos',k:'timer',bot:1,st:3,it:240,limit:5400}
];
const DUO=[
 {icon:'⚔️',name:'Versus',desc:'Combate clásico a tres vidas',k:'vs',bot:0,st:3,it:380},
 {icon:'💀',name:'Muerte súbita',desc:'Una sola vida',k:'sd',bot:0,st:1,it:380},
 {icon:'🌀',name:'Caos total',desc:'Gravedad lunar y objetos',k:'ch',bot:0,st:3,g:.55,it:70},
 {icon:'🏆',name:'Carrera de puntos',desc:'Gana quien más daño inflija',k:'points',bot:0,st:3,it:300,limit:4800},
 {icon:'👑',name:'Rey de la cumbre',desc:'Controla el centro de la arena',k:'king',bot:0,st:3,it:300,limit:5400},
 {icon:'💎',name:'Caza de objetos',desc:'Lluvia constante de objetos',k:'loot',bot:0,st:3,it:75},
 {icon:'🌐',name:'Online',desc:'Encuentra un rival en línea',k:'online',bot:0,st:3,it:99999}
];
DUO.push({icon:'📖',name:'Historia cooperativa',desc:'Dos héroes contra la campaña',k:'st',bot:0,st:3,it:380,story:1,coop:1});
SOLO.push({icon:'🎖️',name:'Misiones',desc:'Retos especiales con historia',k:'mis',bot:1,st:3,it:380,missions:1});
DUO.push({icon:'🥊',name:'Todos contra todos',desc:'2 a 4 jugadores · mandos y CPU',k:'ffa',bot:0,st:3,it:300});
function chooseGroup(i){menuTarget=i==0?'solo':'multi';menuPunch=34;menuPage='transition';sfx('sp')}
function onlineSend(data){if(!onlineSocket||!onlineMatchId)return;try{onlineSocket.send({...data,matchId:onlineMatchId})}catch(e){}}
function startOnlineFight(msg){onlineSlot=msg.slot;onlineMatchId=msg.matchId;onlineMessage='Rival: '+(msg.opponent||'Fighter');onlineResultSent=false;lastOnlineState=0;onlineActive=true;onlineStarted=false;onlineReady=[false,false];BOT=[0,0];sty=null;sel=[0,2];rdy=[0,0];mapI=0;MD={k:'online',st:3,g:1,it:99999,limit:0};LV=1;scr='sel';onlineSend({type:'selection',character:sel[onlineSlot],ready:false})}
function beginOnlineFight(){if(onlineStarted||!onlineReady[0]||!onlineReady[1])return;onlineStarted=true;for(const code of [...Object.values(KB1),...Object.values(KB2)]){K[code]=0;J[code]=0}mapI=0;M=MAPS[mapI];PL=M.p;start()}
function onlineSelectIn(){const i=onlineSlot,k=KB1;if(onlineReady[i])return;const d=(J[k.r]?1:0)-(J[k.l]?1:0);if(d){const open=SEL.filter(x=>X.ok(x)),at=open.indexOf(sel[i]),next=open[(at+(d>0?1:open.length-1))%open.length];if(next!=sel[i]){sel[i]=next;sfx('sel');onlineSend({type:'selection',character:next,ready:false})}}if(J[k.a]||J.Enter){onlineReady[i]=true;rdy[i]=1;onlineSend({type:'selection',character:sel[i],ready:true});sfx('rd');beginOnlineFight()}}
function applyOnlineMessage(raw){let msg;try{msg=JSON.parse(raw.data)}catch(e){return}if(msg.type=='waiting'){onlineMessage='Buscando rival...';return}if(msg.type=='matched'){startOnlineFight(msg);return}if(msg.type=='selection'&&scr=='sel'&&onlineActive&&Number.isInteger(msg.character)&&msg.character>=0&&msg.character<CH.length&&X.ok(msg.character)){const i=1-onlineSlot;sel[i]=msg.character;onlineReady[i]=!!msg.ready;rdy[i]=onlineReady[i]?1:0;beginOnlineFight();return}if(msg.type=='input'&&onlineActive&&scr=='fight'){const code=KB2[msg.key];if(!code)return;if(msg.down&&!K[code])J[code]=1;K[code]=!!msg.down;return}if(msg.type=='state'&&onlineActive&&onlineSlot==1&&msg.state&&Array.isArray(msg.state.players)&&msg.state.players.length==2){const fields=['x','y','vx','vy','f','dmg','fs','st','stun','inv','gr','jm','cd','sc','up','uu','buf','pw','psn','armor','act','ty','tp','dash','dq','slam','sq','drop','pose','poseT','score','king','hd','shd','shp','shT','shl','dg','dgi','dgd','dgv','dga','adg','gbT','hold','held','thr','pmT'];msg.state.players.forEach((v,i)=>{if(!v||!Number.isFinite(v.x)||!Number.isFinite(v.y))return;for(const key of fields)if(v[key]!==undefined)P[i][key]=v[key];P[i].on=PL[v.onIndex]||null});B=(msg.state.bullets||[]).map(b=>({...b,o:P[b.owner]}));HZ=msg.state.hazards||[];return}if(msg.type=='result'&&onlineActive){scr='end';win=P[msg.winner];return}if(msg.type=='opponentLeft'){onlineActive=false;onlineMatchId=null;for(const code of Object.values(KB2)){K[code]=0;J[code]=0}B=[];HZ=[];onlineMessage='El rival se desconectó. Buscando otro...';scr='onlineWait'}}
function joinWsRoom(){return new Promise((res,rej)=>{
 const q=new URLSearchParams(location.search).get('ws'),proto=location.protocol=='https:'?'wss:':'ws:';
 if(!q&&!/^https?:$/.test(location.protocol))return rej(new Error('Abre el juego con: node online-server.js'));
 let ws;try{ws=new WebSocket(q||proto+'//'+location.host+'/ws')}catch(e){return rej(new Error('Dirección del servidor no válida'))}
 const s={onmessage:null,onclose:null,onreconnect:null,q:[],send:d=>{if(ws.readyState==1)ws.send(JSON.stringify(d))},close:()=>{try{ws.close()}catch(e){}}};
 let opened=false;const t=setTimeout(()=>{if(!opened){try{ws.close()}catch(e){}rej(new Error('El servidor no responde'))}},8000);
 ws.onopen=()=>{opened=true;clearTimeout(t);res(s)};
 ws.onmessage=e=>{if(s.onmessage)s.onmessage(e);else s.q.push(e)};
 ws.onclose=e=>{clearTimeout(t);if(!opened)rej(new Error('No se pudo conectar al servidor'));else if(s.onclose)s.onclose({reason:e.reason||'Conexión cerrada'})};
 Object.defineProperty(s,'onmessage',{set(f){this._m=f;if(f){const b=this.q.splice(0);b.forEach(f)}},get(){return this._m}});
})}
async function connectOnline(){const attempt=++onlineAttempt;onlineMessage='Conectando a la sala...';scr='onlineWait';try{const socket=typeof WebsimSocket!='undefined'?await WebsimSocket.joinRoom():await joinWsRoom();if(attempt!=onlineAttempt){socket.close();return}onlineSocket=socket;socket.onmessage=applyOnlineMessage;socket.onreconnect=()=>{onlineActive=false;onlineMatchId=null;onlineMessage='Reconectando...';scr='onlineWait'};socket.onclose=e=>{if(onlineSocket===socket){onlineSocket=null;onlineActive=false;onlineMessage=e.reason||'Conexión cerrada';if(scr!='menu')scr='onlineWait'}}}catch(e){onlineMessage='No se pudo conectar: '+(e?.message||'inténtalo de nuevo')}}
function leaveOnline(){onlineAttempt++;onlineActive=false;onlineMatchId=null;if(onlineSocket){const s=onlineSocket;onlineSocket=null;try{s.close()}catch(e){}}}
function chooseMode(i){const list=menuPage=='solo'?SOLO:DUO;if(i>=list.length){menuPage='root';mi=0;menuAnim=0;sfx('ok');return}const m=list[i];if(m.missions){mm=0;scr='mis';sfx('ok');return}BOT=[0,m.bot];applyCfg();sty=m.story?{ch:0,ord:[],coop:!!m.coop}:null;MD={k:m.k,st:m.st,g:m.g||1,it:m.it,limit:m.limit||0};applyCfg();LV=m.k=='sv'?1.2:2;SV=0;rdy=[0,m.bot];if(m.bot)sel[1]=rnd();sfx('ok');if(m.k=='online'){connectOnline();return}if(m.k=='ffa'){openCtl('ffa');return}scr='sel'}
function menuIn(){const enter=J.KeyF||J.KeyK||J.Enter,old=mi;if(menuPage=='transition'){if(--menuPunch<=0){menuPage=menuTarget;mi=0;menuAnim=30}return}if(menuAnim>0)menuAnim--;if(J.Escape&&menuPage!='root'){menuPage='root';mi=0;menuAnim=0;sfx('ok');return}
 if(menuPage=='root'){if(J.KeyW||J.ArrowUp){scr='set';sfx('ok');return}if(J.KeyA||J.ArrowLeft)mi=0;if(J.KeyD||J.ArrowRight)mi=1;if(mi!=old)sfx('mv');if(enter||J.KeyS||J.ArrowDown){chooseGroup(mi)}return}
 const list=menuPage=='solo'?SOLO:DUO,n=list.length+1;if(J.KeyA||J.ArrowLeft){if(mi%2)mi--}if(J.KeyD||J.ArrowRight){if(mi%2==0&&mi+1<n)mi++}if(J.KeyW||J.ArrowUp){if(mi>=2)mi-=2;else if(mi>0)mi=0}if(J.KeyS||J.ArrowDown){if(mi+2<n)mi+=2;else mi=n-1}if(mi!=old)sfx('mv');if(enter)chooseMode(mi)}
function go(){if(MD.k=='mis'&&ms){mchap();return}if(sty){sty.ch=0;sty.ord=[0,1,2,3,4,5,6,7,8,10].filter(x=>x!=sel[0]&&(!isCoopStory()||x!=sel[1])).slice(0,8).concat(9);say(LORE,()=>chap())}else start()}
function chap(){const i=sty.ch,x=sty.ord[i],r=CH[x],h=CH[sel[0]];if(isCoopStory())sel[2]=x;else sel[1]=x;mapI=x==9?2:i%MAPS.length;M=MAPS[mapI];PL=M.p;LV=(x==9?2.6:1+i*.3)*[.65,1,1.3,1.6][CFG.difficulty??1];
 const lines=[[r.n,DI[x],r.col],[h.n,x==9?'¡Entonces todo era tu plan! Esto termina aquí.':'¡Yo no rompí el Cristal! Pero si hace falta pelear, pelearé.',h.col]];if(isCoopStory())lines.push([CH[sel[1]].n,'¡Y tampoco mi compañero! ¡Lucharemos juntos! ',CH[sel[1]].col]);say(lines,()=>{BOT=[0,isCoopStory()?0:1];start()})}
function nextStoryChapter(){sty.ch++;const beat=STORY_BEATS[sty.ch];if(beat)say(beat,()=>chap());else chap()}
function endNext(){
 if(MD.k=='online'){leaveOnline();scr='menu';menuPage='multi';mi=6;return}
 if(MD.k=='sv'){if(win.i==0){SV++;X.sv(SV);LV+=.3;sel[1]=rnd();mapI=Math.random()*MAPS.length|0;start()}else{scr='menu';BOT=[0,0]}return}
 if(MD.k=='mis'&&ms)return misEnd();
 if(MD.k=='ffa'){rdy=FD.map((d,i)=>BOT[i]?1:0);scr='sel';return}if(!sty){scr='sel';rdy=[0,BOT[1]?1:0];return}
 const i=sty.ch,x=sty.ord[i],r=CH[x];
 if(win.i>=(isCoopStory()?2:1)){start();return}
 if(i>=sty.ord.length-1)say([[r.n,DW[x],r.col],...EPI],()=>{X.story();sty=null;BOT=[0,0];scr='menu'});
 else say([[r.n,DW[x],r.col],['Narrador','Fragmento '+(i+1)+' de 9 recuperado. La sombra bajo la montaña vuelve a agitarse.','#ffd23c']],nextStoryChapter)}
function ai(p,o){const k=C[p.i],r=Math.random,L=LV;
 for(const x in k)K[k[x]]=0;if(MD.k=='tr')return;
 const dx=o.x-p.x,ad=Math.abs(dx),dy=o.y-p.y,cx=p.x+p.w/2,mn=Math.min(...PL.map(l=>l.x)),mx=Math.max(...PL.map(l=>l.x+l.w));
 const mv=d=>{K[d>0?k.r:k.l]=1};
 if(p.fs>=100)J[k.f]=1;
 if(p.stun>0)return;
 if(p.held>0){if(r()<.22*L)J[k.a]=1;if(r()<.1*L)J[r()<.5?k.l:k.r]=1;return}
 if(p.hold>0){if(!p.pmT&&r()<.25)J[k.a]=1;if(p.hold<125&&r()<.06*L)J[o.dmg>85?k.u:(cx<W/2?k.l:k.r)]=1;return}
 if(p.gbT>0||p.thr>0||p.dg>0)return;
 if(p.gr&&!p.aiSh&&o.act>0&&ad<95&&Math.abs(dy)<70&&r()<.05*L)p.aiSh=14+(r()*16|0);
 if(p.aiSh>0){p.aiSh--;K[k.h]=1;return}
 if(p.gr&&ad<56&&Math.abs(dy)<50&&r()<(o.shd?.1:.01)*L){p.f=Math.sign(dx)||1;J[k.g]=1;return}
 if(cx<mn||cx>mx||(p.y>H-140&&!p.gr)){mv(W/2-cx);
  if(p.vy>0&&r()<.15&&p.jm<2)J[k.u]=1;
  if(p.vy>2&&!p.uu&&p.jm>=2){K[k.u]=1;J[k.s]=1}
  return}
 const it=IS[0],tx=it&&ad>140&&L>1.2?it.x:o.x;
 if(Math.abs(tx-cx)>(tx==o.x?50:8))mv(tx-cx);else p.f=Math.sign(dx)||1;
 if(ad<60&&Math.abs(dy)<50&&r()<.07*L){J[k.a]=1;if(dy<-30)K[k.u]=1}
 else if(ad<260&&Math.abs(dy)<60&&r()<.012*L){if(ad<110&&r()<.4)K[k.d]=1;else if(ad<=150)mv(dx);J[k.s]=1}
 if(dy<-70&&r()<.04*L&&p.jm<2)J[k.u]=1;
 if(p.gr&&r()<.004*L)J[k.u]=1}
function drawMenu(){bg();
 g.fillStyle='rgba(9,7,21,.44)';rr(28,18,904,54,18);
 const title='DUELO EN LA CUMBRE II';g.font='bold 35px "Trebuchet MS",sans-serif';g.shadowColor='#25103d';g.shadowBlur=14;txt(title,W/2,56,35,'#f8eaff');g.shadowBlur=0;
 g.fillStyle='rgba(255,211,80,.16)';rr(818,27,98,36,12);g.strokeStyle='rgba(255,225,129,.65)';g.lineWidth=1.5;g.beginPath();g.roundRect(818,27,98,36,12);g.stroke();txt('⚙ OPCIONES',867,51,13,'#ffe38b');
 if(menuPage=='root'||menuPage=='transition'){const trans=menuPage=='transition',progress=trans?1-menuPunch/34:0;
  txt(trans?'¡A LUCHAR!':'ELIGE TU DUELO',W/2,119,19,trans?'#fff':'#ffd66e');
  for(let i=0;i<2;i++){const on=i==mi,base=i?720:240,side=i?1:-1,col=i?'#66d9ff':'#ff719f';g.fillStyle=on?'rgba(255,255,255,.055)':'rgba(5,4,18,.25)';rr(i?505:55,153,400,322,24);g.strokeStyle=on?col:'rgba(255,255,255,.12)';g.lineWidth=on?2.5:1;g.beginPath();g.roundRect(i?55+450:55,153,400,322,24);g.stroke();
   const character=CH[i?7:0],startX=base,attacks=trans&&i==(menuTarget=='multi'?1:0);let px=base,py=218+Math.sin(T*3+i)*4,act=(T*1.2+i*.6)%1<.14?7:0,vx=Math.sin(T*3+i)*2.2,alpha=1;
   if(trans){if(attacks){px+=-side*progress*178;act=progress>.18&&progress<.8?6:0;vx=-side*6}else{px+=side*progress*178;py+=progress*progress*84;act=0;vx=side*8;alpha=Math.max(.25,1-progress*.55)}}
   const guy={x:px-34,y:py,w:34,h:50,f:i?-1:1,vx,vy:0,gr:1,act,ty:'F',stun:0,dash:0,slam:0,up:0,sc:0,c:character,ph:T*8,pw:on?18:0,poseT:0};drawBody(guy,0,alpha,2.45);
   g.fillStyle=col;g.globalAlpha=.14+Math.sin(T*2+i)*.04;g.beginPath();g.ellipse(base,349,145,12,0,0,7);g.fill();g.globalAlpha=1;
   txt(ROOT[i][0],base,391,19,on?col:'#aaa');txt(ROOT[i][1].toUpperCase(),base,425,27,on?'#fff':'#ded9e8');txt(ROOT[i][2],base,451,14,'#c7bfd6');
   if(on&&!trans){g.strokeStyle=col;g.globalAlpha=.7+Math.sin(T*6)*.2;g.lineWidth=2;g.beginPath();g.arc(base,275,86+Math.sin(T*3)*4,0,7);g.stroke();g.globalAlpha=1}}
  if(trans&&progress>.36&&progress<.8){const x=menuTarget=='solo'?450:510;g.strokeStyle='#fff1a6';g.lineWidth=4;g.globalAlpha=.8;g.beginPath();g.arc(x,270,20+(progress-.36)*60,0,7);g.stroke();g.globalAlpha=1}
  txt('◀ ▶ para elegir · Enter/F para entrar · ↑ Opciones',W/2,515,14,'#e3dced');return}
 const list=menuPage=='solo'?SOLO:DUO;txt(menuPage=='solo'?'SOLITARIO · J1 VS CPU':'MULTIJUGADOR · P1 VS P2',W/2,113,22,'#fff');
 const rows=Math.ceil((list.length+1)/2),fly=menuAnim/30*(menuPage=='solo'?-145:145);for(let i=0;i<list.length+1;i++){const back=i==list.length,m=back?{icon:'↩',name:'Volver',desc:'Elegir otra categoría'}:list[i],on=i==mi,col=i%2,row=i>>1,bx=105+col*390,by=164+row*(314/rows),h=Math.min(76,286/rows),cy=by+h/2;g.save();g.translate(bx+175+fly,cy+Math.sin(T*3+i)*1.6);g.fillStyle=on?'rgba(174,111,255,.25)':'rgba(10,8,20,.66)';rr(-175,-h/2,350,h-5,14);g.strokeStyle=on?menuPage=='solo'?'#ff719f':'#66d9ff':'rgba(255,255,255,.14)';g.lineWidth=on?2.5:1;g.beginPath();g.roundRect(-175,-h/2,350,h-5,14);g.stroke();txt(m.icon,-144,7,29,'#fff');txt(m.name,-112,-4,18,on?'#ffd66e':'#f1ece4','left');txt(m.desc,-112,18,12,'#c9c1d8','left');g.restore()}
 txt('← / → elige · ↑ / ↓ navega · Esc vuelve',W/2,520,14,'#f1ece4')}
const SO=[['Mandos y jugadores',0,0,'ctl'],['Efectos de sonido','sfx',['No','Sí']],['Música','mus',['No','Sí']],['Volumen','vol'],['Temblor de pantalla','shk',['No','Sí']],['Objetos','items',['No','Sí']],['Idioma','lang',['Español','English','Français','Português','Català']],['Dificultad de historia','difficulty',['Fácil','Normal','Difícil','Extrema']],['Animaciones de historia','anim',['No','Sí']],['Notificaciones de logros','ach',['No','Sí']],['Volver']];let si=0;
function setIn(){const n=SO.length,u=J.KeyW||J.ArrowUp,d=J.KeyS||J.ArrowDown,l=J.KeyA||J.ArrowLeft,r=J.KeyD||J.ArrowRight,ok=J.Enter||J.KeyF||J.KeyK;
 if(u){si=(si+n-1)%n;sfx('mv')}if(d){si=(si+1)%n;sfx('mv')}const o=SO[si];
 if(o[1]&&(l||r)){const v=l?-1:1;if(o[1]=='vol')CFG.vol=Math.round(Math.max(0,Math.min(1,CFG.vol+v*.1))*10)/10;else{const index=o[1]=='lang'?Math.max(0,LG.indexOf(CFG.lang)):CFG[o[1]],next=(index+v+o[2].length)%o[2].length;CFG[o[1]]=o[1]=='lang'?LG[next]:next}saveCfg();if(MG)MG.gain.value=CFG.vol;sfx('ok')}
 if(!o[1]&&ok){if(o[3]=='ctl')openCtl('set');else{scr='menu';sfx('ok')}}}
function drawSet(){bg();txt('AJUSTES',W/2,62,38,'#fff');const gp=navigator.getGamepads&&[...navigator.getGamepads()].some(x=>x&&x.connected);
 SO.forEach((o,i)=>{const y=100+i*35,on=i==si;g.fillStyle=on?'rgba(255,255,255,.25)':'rgba(10,8,20,.6)';rr(150,y,660,36,11);txt(o[0],174,y+24,17,on?'#ffd23c':'#f1ece4','left');if(o[3])txt('Abrir ▶',775,y+24,16,'#ffd23c','right');
  if(o[1]=='difficulty'){const val=CFG.difficulty??1,x0=525,w=190;g.fillStyle='rgba(255,255,255,.2)';rr(x0,y+15,w,6,3);g.fillStyle='#ffd23c';rr(x0,y+15,w*val/3,6,3);for(let j=0;j<4;j++){g.fillStyle=j<=val?'#ffd23c':'#777';g.beginPath();g.arc(x0+w*j/3,y+18,5,0,7);g.fill()}txt(o[2][val],775,y+24,15,'#fff','right')}
  else if(o[1]){const val=o[1]=='vol'?Math.round(CFG.vol*100)+'%':o[1]=='lang'?o[2][Math.max(0,LG.indexOf(CFG.lang))]:o[2][CFG[o[1]]];txt((on?'◀  ':'')+val+(on?'  ▶':''),775,y+24,16,'#fff','right')}});
 txt(gp?'🎮 Mando detectado':'🎮 Sin mando: conecta uno para jugar',W/2,487,14,gp?'#6fcf6a':'#c9c1d8');txt('B confirma en mando · Esc vuelve',W/2,515,12,'#f1ece4')}
function drawOnlineWait(){bg();g.fillStyle='rgba(10,8,20,.76)';rr(190,100,580,340,24);txt('ONLINE DUEL',W/2,166,34,'#fff');g.strokeStyle='#78dcff';g.lineWidth=3;g.beginPath();g.arc(W/2,265,54+Math.sin(T*4)*5,T*2,T*2+Math.PI*1.6);g.stroke();txt(langText(onlineMessage||'Buscando rival...'),W/2,365,20,'#f1ece4');txt(langText('La sala empareja automáticamente a dos jugadores.'),W/2,402,14,'#c9c1d8');txt(langText('Esc cancela la búsqueda'),W/2,476,14,'#aaa')}
function wr(t,x,y,w){let l='',yy=y;g.font='20px "Trebuchet MS",sans-serif';g.textAlign='left';g.fillStyle='#fff';
 for(const wd of t.split(' ')){if(g.measureText(l+wd).width>w){g.fillText(l,x,yy);yy+=27;l=''}l+=wd+' '}g.fillText(l,x,yy)}
function drawStoryCrystal(){const x=480,y=224,pulse=1+Math.sin(T*3)*.08;g.save();g.translate(x,y);g.rotate(T*.32);g.shadowColor='#9ef7ff';g.shadowBlur=28;g.fillStyle='rgba(151,246,255,.2)';g.beginPath();g.moveTo(0,-44*pulse);g.lineTo(28,0);g.lineTo(0,44*pulse);g.lineTo(-28,0);g.closePath();g.fill();g.strokeStyle='#d5ffff';g.lineWidth=3;g.stroke();for(let i=0;i<8;i++){const a=i*Math.PI/4+T*.5,d=48+Math.sin(T*2+i)*12;g.globalAlpha=.5+.5*Math.abs(Math.sin(T*2+i));g.fillStyle=i%2?'#80dfff':'#fff4a6';g.beginPath();g.moveTo(Math.cos(a)*d,Math.sin(a)*d);g.lineTo(Math.cos(a+.22)*(d+13),Math.sin(a+.22)*(d+13));g.lineTo(Math.cos(a-.18)*(d+9),Math.sin(a-.18)*(d+9));g.closePath();g.fill()}g.globalAlpha=1;g.restore()}
function drawDlg(){bg();drawMap();g.fillStyle='rgba(7,5,20,.38)';g.fillRect(0,0,W,H);const[n,t,c]=dl[di],hero=(sty||MSN())&&CH[sel[0]],foe=sty?CH[sty.ord[sty.ch]]:MSN()?CH[ms.m.foes[ms.ch]]:null,beat=Math.sin(T*3.5);drawStoryCrystal();
 if(hero){const ha=n==hero.n,fa=foe&&n==foe.n,lx=224+(ha?12+Math.max(0,beat)*6:0),rx=736-(fa?12+Math.max(0,beat)*6:0);drawBody({x:lx-17,y:195+Math.sin(T*2)*3,w:34,h:50,f:1,vx:Math.sin(T*2)*1.2,vy:0,gr:1,act:ha&&Math.sin(T*4)>0.45?7:0,ty:'F',stun:0,dash:0,slam:0,up:0,sc:0,c:hero,ph:T*5,pw:ha?10:0},0,1,2.35);if(isCoopStory()){const pal=CH[sel[1]];drawBody({x:393,y:204+Math.sin(T*2+2)*3,w:34,h:50,f:1,vx:0,vy:0,gr:1,act:n==pal.n?7:0,ty:'F',stun:0,dash:0,slam:0,up:0,sc:0,c:pal,ph:T*5+2,pw:n==pal.n?10:0},0,1,2.1)}if(foe)drawBody({x:rx-17,y:195+Math.sin(T*2+1)*3,w:34,h:50,f:-1,vx:-Math.sin(T*2)*1.2,vy:0,gr:1,act:fa&&Math.sin(T*4+1)>0.45?7:0,ty:'F',stun:0,dash:0,slam:0,up:0,sc:0,c:foe,old:MSN()&&ms.m.old,ph:T*5+1,pw:fa?10:0},0,1,2.35)}
 g.fillStyle='rgba(10,8,20,.92)';rr(38,355,884,157,18);g.fillStyle=c;rr(38,355,7,157,4);txt(n,65,391,21,c,'left');wr(langText(t).slice(0,dc|0),65,426,825);txt('Enter para continuar ▶',W-58,495,13,'#bbb','right');X.dlgFx(n,c,hero,foe)}
/* ===== MULTIJUGADOR 2-4 + MENÚ DE MANDOS ===== */
const DEVS=()=>['off','kb1','kb2',...PADS.map(x=>'gp'+x.index),'cpu'],
devLabel=d=>d=='off'?'Libre':d=='kb1'?'Teclado 1':d=='kb2'?'Teclado 2':d=='cpu'?'CPU':'Mando '+(+d[2]+1),
devKeysTxt=d=>d=='kb1'?'WASD · F G H · Q E':d=='kb2'?'Flechas · K L Ñ · O P':d=='cpu'?'Controlado por la IA':d=='off'?'↑ ↓ o pulsa A en un mando':'Stick · X Y · RB · LT B',
devIcon=d=>d=='off'?'➕':d=='cpu'?'🤖':d[0]=='k'?'⌨️':'🎮',
padName=gp=>gp.id.replace(/\(.*?\)/g,'').replace(/\s+/g,' ').trim().slice(0,30)||'Mando';
let ci=0,ctlFrom='ffa',ctlMsg='',ctlMsgT=-9;
function openCtl(f){ctlFrom=f;ci=0;ctlMsg='';applyCfg();scr='ctl';sfx('ok')}
function devSet(i,d){const D=CFG.dev,j=D.findIndex((x,k)=>k!=i&&x==d&&d!='off'&&d!='cpu');if(j>=0)D[j]=D[i];D[i]=d;sfx('mv')}
function devStep(i,s){const L=DEVS(),at=Math.max(0,L.indexOf(CFG.dev[i]));devSet(i,L[(at+s+L.length)%L.length])}
function ctlJoin(n){const d='gp'+n,D=CFG.dev;if(D.includes(d)){sfx('sel');return}let i=D[ci]=='off'?ci:D.indexOf('off');if(i<0)i=ci;D[i]=d;ci=i;sfx('rd')}
function ctlDone(){saveCfg();if(ctlFrom!='ffa'){scr='set';sfx('ok');return}
 if(FD.length<2){ctlMsg='Necesitas al menos 2 jugadores (humanos o CPU)';ctlMsgT=T;sfx('hit');return}
 FD.forEach((d,i)=>{sel[i]=d=='cpu'?rnd():[0,2,4,7][i]});rdy=FD.map(d=>d=='cpu'?1:0);scr='sel';sfx('ok')}
function ctlIn(){const u=J.KeyW||J.ArrowUp,d=J.KeyS||J.ArrowDown,l=J.KeyA||J.ArrowLeft,r=J.KeyD||J.ArrowRight,ok=J.Enter||J.KeyF||J.KeyK;
 if(J.Escape){saveCfg();scr=ctlFrom=='set'?'set':'menu';sfx('ok');return}
 if(l){ci=(ci+3)%4;sfx('mv')}if(r){ci=(ci+1)%4;sfx('mv')}if(u)devStep(ci,-1);if(d)devStep(ci,1);if(ok)ctlDone()}
cv.addEventListener('pointerdown',e=>{if(scr!='ctl')return;const R=cv.getBoundingClientRect(),x=(e.clientX-R.left)*W/R.width,y=(e.clientY-R.top)*H/R.height;
 if(y>=466&&y<=502&&x>=W/2-120&&x<=W/2+120){ctlDone();return}
 if(y<60&&x<150){saveCfg();scr=ctlFrom=='set'?'set':'menu';sfx('ok');return}
 const j=Math.floor((x-28)/234);if(j<0||j>3||x-28-j*234>216||y<106||y>396)return;ci=j;
 if(y>=226&&y<=260){devStep(j,x<28+j*234+108?-1:1)}else sfx('sel')});
function drawCtl(){bg();g.fillStyle='rgba(8,6,20,.66)';g.fillRect(0,0,W,H);
 txt('MANDOS Y JUGADORES',W/2,56,36,'#fff');txt(ctlFrom=='ffa'?'Elige quién juega con cada mando · Todos contra todos (2-4)':'Asigna un dispositivo a cada jugador',W/2,82,14,'#ffd66e');
 txt('↩ Esc',34,40,14,'#c9c1d8','left');
 for(let j=0;j<4;j++){const d=CFG.dev[j],on=j==ci,x=28+j*234,y=106,w=216,h=290,col=PCOL[j],off=d=='off',gpd=/^gp/.test(d),conn=!gpd||PADS.some(p=>'gp'+p.index==d),ch=CH[[0,2,4,7][j]];
  g.fillStyle=on?'rgba(255,255,255,.1)':'rgba(10,8,20,.62)';rr(x,y,w,h,20);
  if(!off){g.fillStyle=col;g.globalAlpha=.07;rr(x,y,w,h,20);g.globalAlpha=1}
  g.strokeStyle=on?col:'rgba(255,255,255,.14)';g.lineWidth=on?3:1;g.beginPath();g.roundRect(x,y,w,h,20);g.stroke();
  g.fillStyle=col;g.globalAlpha=off?.3:.95;rr(x+14,y+12,w-28,28,10);g.globalAlpha=1;txt('JUGADOR '+(j+1),x+w/2,y+32,15,'#120f1f');
  g.globalAlpha=off?.2:1;drawBody({x:x+w/2-17,y:y+66+(off?0:Math.sin(T*3+j)*3),w:34,h:50,f:j%2?-1:1,vx:off?0:Math.sin(T*3+j)*2.4,vy:0,gr:1,act:!off&&(T*1.1+j*.3)%1<.12?7:0,ty:'F',stun:0,dash:0,slam:0,up:0,sc:0,c:ch,ph:T*8+j,pw:on&&!off?14:0,poseT:0},0,1,2.1);g.globalAlpha=1;
  g.fillStyle=col;g.globalAlpha=.2;g.beginPath();g.ellipse(x+w/2,y+184,58,8,0,0,7);g.fill();g.globalAlpha=1;
  const ks=devKeys(d);[...'lrudasfhg'].forEach((a,i)=>{g.fillStyle=ks&&K[ks[a]]?col:'rgba(255,255,255,.18)';g.beginPath();g.arc(x+w/2-64+i*16,y+206,4.5,0,7);g.fill()});
  g.fillStyle='rgba(0,0,0,.42)';rr(x+12,y+222,w-24,36,12);if(on){g.strokeStyle=col;g.lineWidth=1.5;g.beginPath();g.roundRect(x+12,y+222,w-24,36,12);g.stroke()}
  txt((on?'◀  ':'')+devIcon(d)+' '+devLabel(d)+(on?'  ▶':''),x+w/2,y+246,15,off?'#aaa':'#fff');
  txt(conn?devKeysTxt(d):'⚠ Mando desconectado',x+w/2,y+278,11,conn?'#c9c1d8':'#ff6b6b')}
 g.fillStyle='rgba(10,8,20,.66)';rr(28,404,904,52,14);
 if(!PADS.length)txt('🎮 No se detecta ningún mando · conéctalo y pulsa un botón',W/2,436,14,'#c9c1d8');
 else PADS.forEach((gp,i)=>{const px=40+i*226,slot=CFG.dev.indexOf('gp'+gp.index),hot=performance.now()-(PQ[gp.index]?.act||0)<350;
  if(hot){g.strokeStyle=slot>=0?PCOL[slot]:'#fff';g.lineWidth=2;g.beginPath();g.roundRect(px-6,408,216,44,10);g.stroke()}
  txt('🎮 Mando '+(gp.index+1)+(slot>=0?' → J'+(slot+1):' · libre'),px,426,13,slot>=0?PCOL[slot]:'#f1ece4','left');txt(padName(gp),px,444,10,'#9a93ab','left')});
 const act=CFG.dev.filter(d=>d!='off').length,okb=ctlFrom!='ffa'||act>=2;
 g.fillStyle=okb?'rgba(111,207,106,.85)':'rgba(120,120,130,.5)';rr(W/2-120,466,240,36,14);txt(ctlFrom=='ffa'?'JUGAR ▶ ('+act+' jugadores)':'LISTO ✔',W/2,490,16,'#0d1a0d');
 if(ctlMsg&&T-ctlMsgT<2.5)txt(ctlMsg,W/2,524,13,'#ff6b6b');else txt('←/→ jugador · ↑/↓ cambiar dispositivo · A en un mando = unirse · Enter = continuar',W/2,524,12,'#f1ece4')}

function selInputF(){const n=FD.length;for(let i=0;i<n;i++){const k=C[i];if(BOT[i])continue;
 if(!rdy[i]){const d=(J[k.r]?1:0)-(J[k.l]?1:0);if(d){const open=SEL.filter(x=>X.ok(x)),at=open.indexOf(sel[i]);sel[i]=open[(at+d+open.length)%open.length];sfx('sel')}}
 if(J[k.u]||J[k.d]){mapI=(mapI+(J[k.d]?1:MAPS.length-1))%MAPS.length;M=MAPS[mapI];sfx('mv')}
 if(J[k.a]){rdy[i]=!rdy[i];sfx(rdy[i]?'rd':'mv')}}
 if(n&&rdy.slice(0,n).every(Boolean))go()}
function drawSelF(){bg();g.fillStyle='rgba(8,6,20,.5)';g.fillRect(0,0,W,H);const n=FD.length,cw=(W-40)/n-10;
 rbw('TODOS CONTRA TODOS',50,40);txt('← → personaje · ↑ ↓ mapa · Ataque confirma · Esc sale',W/2,80,13,'#f1ece4');
 for(let j=0;j<n;j++){const c=CH[sel[j]],x=24+j*(cw+10),cx=x+cw/2,col=PCOL[j],r=rdy[j],bot=BOT[j];
  g.fillStyle='rgba(10,8,20,.66)';rr(x,96,cw,370,20);g.fillStyle=c.col;g.globalAlpha=.16;rr(x,96,cw,370,20);g.globalAlpha=1;
  g.strokeStyle=r?'#6fcf6a':col;g.lineWidth=3;g.beginPath();g.roundRect(x,96,cw,370,20);g.stroke();
  txt('J'+(j+1)+' · '+(bot?'CPU':devLabel(FD[j])),cx,124,16,col);
  drawBody({x:cx-17,y:180-(r?Math.abs(Math.sin(T*3))*10:0),w:34,h:50,f:j%2?-1:1,vx:r?0:3,vy:0,gr:1,act:r&&(T*2)%1<.3?8:0,stun:0,dash:0,slam:0,up:0,sc:0,c,ph:T*9+j},0,1,2.4);
  g.fillStyle='rgba(0,0,0,.35)';g.beginPath();g.ellipse(cx,292,52,9,0,0,7);g.fill();
  txt((r||bot?'':'◀ ')+c.n.toUpperCase()+(r||bot?'':' ▶'),cx,330,26,c.col);txt(c.d,cx,350,12,'#f1ece4');
  [['VEL',c.sp/6],['SALTO',c.jp/14],['FUERZA',c.ad/12]].forEach((q,k)=>BAR(cx-81,362+k*16,q[0],q[1],c.col));
  txt('★ '+c.fn,cx,428,12,'#ffd23c');txt(r?'¡LISTO!':'Elige…',cx,454,17,r?'#6fcf6a':'#aaa')}
 const gr=g.createLinearGradient(380,0,580,0);M.c.forEach((c,i)=>gr.addColorStop(i/3,c));g.fillStyle=gr;rr(380,500,200,8,4);txt('◀ '+M.n+' ▶',W/2,490,16,'#fff')}
function hudF(){const n=P.length,pitch=(W-28)/n,pw=pitch-10;
 P.forEach((p,i)=>{const x=20+i*pitch,out=p.st<=0,col=PCOL[i];g.globalAlpha=out?.4:1;
  g.fillStyle='rgba(10,8,20,.74)';rr(x-8,H-84,pw,74,12);g.fillStyle=col;g.fillRect(x-8,H-70,4,46);
  g.fillStyle='#333';g.fillRect(x,H-20,pw-24,6);g.fillStyle=p.fs>=100?'#fff':'#ffd23c';g.fillRect(x,H-20,(pw-24)*p.fs/100,6);
  if(p.fs>=100&&!out&&(Date.now()>>8)%2)txt('¡SMASH! ('+lbl(i)+')',x,H-90,12,'#fff','left');
  txt('J'+(i+1)+(BOT[i]?' CPU':'')+' · '+p.c.n,x,H-64,13,col,'left');
  txt(out?'KO':p.dmg.toFixed(0)+'%',x,H-30,out?28:30,out?'#999':`hsl(${Math.max(0,55-p.dmg*.4)},95%,62%)`,'left');
  for(let s=0;s<3;s++){g.fillStyle=s<p.st?p.c.col:'#444';g.beginPath();g.arc(x+pw-70+s*18,H-38,6.5,0,7);g.fill()}if(p.st>3)txt('×'+p.st,x+pw-18,H-52,12,p.c.col,'right')
  g.globalAlpha=1})}

/* ===== REGLAS (estilo Smash) + OBJETOS EXTRA ===== */
const RR=[['Vidas','st',['Auto','1','2','3','5','8','10'],[0,1,2,3,5,8,10],0],
['Límite de tiempo','time',['Auto','Sin límite','1 min','2 min','3 min','5 min'],[-1,0,3600,7200,10800,18000],0],
['Frecuencia de objetos','im',['Ninguno','Pocos','Normal','Muchos','Lluvia'],[0,2,1,.5,.2],2],
['Daño recibido','dm',['×0.5','×1','×1.5','×2'],[.5,1,1.5,2],1],
['Daño inicial','init',['0%','50%','100%','150%'],[0,50,100,150],0],
['Velocidad de juego','spd',['×0.75','×1','×1.25','×1.5'],[.75,1,1.25,1.5],1],
['Gravedad','grav',['Baja','Normal','Alta'],[.6,1,1.4],1],
['Smash final','fsm',['No','Sí'],[0,1],1]];
const ruleOn=()=>!sty&&!['online','sv','tr','mis'].includes(MD.k);
function RUget(){const r=CFG.rules||(CFG.rules={});for(const w of RR)if(r[w[1]]===undefined)r[w[1]]=w[4];r.itm=ITD.map((_,i)=>r.itm&&r.itm[i]!==undefined?r.itm[i]:1);return r}
function mkRA(){const r=RUget(),o={};for(const w of RR)o[w[1]]=w[3][Math.min(r[w[1]],w[3].length-1)];return{st:o.st,clk:o.time,im:o.im,dm:o.dm,init:o.init,spd:o.spd,fsm:o.fsm,grav:o.grav,itm:r.itm.slice()}}
const RA0={st:0,clk:-1,im:1,dm:1,init:0,spd:1,fsm:1,grav:1,itm:ITD.map(()=>1)};let RA=RA0,ri=0,ii=0;
function openRules(){ri=0;scr='rul';sfx('ok')}
function ruleIn(){const r=RUget(),n=RR.length+3,u=J.KeyW||J.ArrowUp,d=J.KeyS||J.ArrowDown,l=J.KeyA||J.ArrowLeft,rt=J.KeyD||J.ArrowRight,ok=J.Enter||J.KeyF||J.KeyK;
 if(J.Escape){saveCfg();scr='sel';sfx('ok');return}
 if(u){ri=(ri+n-1)%n;sfx('mv')}if(d){ri=(ri+1)%n;sfx('mv')}
 if(ri<RR.length){const w=RR[ri];if(l||rt){const L=w[2].length;r[w[1]]=(r[w[1]]+(l?-1:1)+L)%L;sfx('ok');saveCfg()}}
 else if(ok){if(ri==RR.length){ii=0;scr='itm';sfx('ok')}else if(ri==RR.length+1){CFG.rules=null;RUget();saveCfg();sfx('ok')}else{saveCfg();scr='sel';sfx('ok')}}}
function itemIn(){const r=RUget(),n=ITD.length,l=J.KeyA||J.ArrowLeft,rt=J.KeyD||J.ArrowRight,u=J.KeyW||J.ArrowUp,d=J.KeyS||J.ArrowDown,ok=J.Enter||J.KeyF||J.KeyK;
 if(J.Escape){saveCfg();scr='rul';sfx('ok');return}
 if(l)ii=(ii+n-1)%n;if(rt)ii=(ii+1)%n;if(u)ii=(ii+n-11)%n;if(d)ii=(ii+11)%n;if(l||rt||u||d)sfx('mv');
 if(ok){r.itm[ii]=r.itm[ii]?0:1;sfx('sel');saveCfg()}
 if(J.KeyG){const a=r.itm.every(Boolean)?0:1;r.itm=r.itm.map(()=>a);sfx('ok');saveCfg()}}
function drawRules(){bg();g.fillStyle='rgba(8,6,20,.7)';g.fillRect(0,0,W,H);const r=RUget();txt('REGLAS',W/2,56,38,'#fff');txt('Se aplican a este combate · se guardan para la próxima vez',W/2,80,13,'#ffd66e');
 const rows=[...RR.map(q=>[q[0],q[2][r[q[1]]],r[q[1]]!=q[4]]),['Objetos activos ▶',r.itm.filter(Boolean).length+'/'+ITD.length,r.itm.some(x=>!x)],['↺ Restablecer reglas','',0],['Volver','',0]];
 rows.forEach((o,i)=>{const y=96+i*34,on=i==ri,sl=on&&i<RR.length;g.fillStyle=on?'rgba(255,255,255,.25)':'rgba(10,8,20,.6)';rr(150,y,660,32,10);txt(o[0],174,y+22,16,on?'#ffd23c':'#f1ece4','left');if(o[1])txt((sl?'◀  ':'')+o[1]+(sl?'  ▶':''),785,y+22,15,o[2]?'#6fe0ff':'#fff','right')});
 txt('← / → cambia · ↑ / ↓ navega · Esc vuelve',W/2,H-18,12,'#f1ece4')}
function drawItems(){bg();g.fillStyle='rgba(8,6,20,.7)';g.fillRect(0,0,W,H);const r=RUget();txt('OBJETOS ACTIVOS',W/2,56,34,'#fff');
 ITD.forEach((d,i)=>{const x=60+(i%11)*80,y=100+(i/11|0)*92,on=r.itm[i],cur=i==ii;g.globalAlpha=on?1:.3;g.fillStyle=cur?'rgba(255,255,255,.28)':'rgba(10,8,20,.66)';rr(x,y,72,80,12);g.fillStyle=d.c;rr(x+18,y+10,36,36,10);txt(d.e,x+36,y+37,22,'#fff');txt(on?'ON':'OFF',x+36,y+68,12,on?'#6fcf6a':'#ff6b6b');g.globalAlpha=1;
  if(cur){g.strokeStyle='#ffd23c';g.lineWidth=3;g.beginPath();g.roundRect(x,y,72,80,12);g.stroke()}});
 txt(ITN[ii],W/2,408,24,'#ffd23c');txt(r.itm.filter(Boolean).length+' de '+ITD.length+' objetos activos',W/2,436,14,'#c9c1d8');
 txt('Enter/F activa o desactiva · G todos ON/OFF · Esc vuelve',W/2,H-18,12,'#f1ece4')}
function ruleChip(){if(!ruleOn())return;const r=RUget(),mod=RR.some(q=>r[q[1]]!=q[4])||r.itm.some(x=>!x);g.fillStyle='rgba(255,211,80,.16)';rr(790,6,160,26,10);g.strokeStyle='rgba(255,225,129,.65)';g.lineWidth=1.5;g.beginPath();g.roundRect(790,6,160,26,10);g.stroke();txt('⚙ REGLAS · R / Start'+(mod?' ●':''),870,24,11,'#ffe38b')}
cv.addEventListener('pointerdown',e=>{if(scr!='sel'||!ruleOn())return;const R=cv.getBoundingClientRect(),x=(e.clientX-R.left)*W/R.width,y=(e.clientY-R.top)*H/R.height;if(x>=790&&y<=34)openRules()});

let last=0,acc=0;
function loop(t){requestAnimationFrame(loop);X.tick();T=t/1000;pollPad();music();acc+=Math.min(50,t-last);last=t;
 const SP=scr=='fight'?RA.spd:1;while(acc>=16.67/SP){acc-=16.67/SP;
  if(J.Escape&&scr!='menu'&&scr!='ctl'&&scr!='rul'&&scr!='itm'){if(onlineSocket)leaveOnline();scr='menu';sty=null;BOT=[0,0]}
  else if(scr=='menu')menuIn();
  else if(scr=='set')setIn();else if(scr=='mis')misIn();
  else if(scr=='ctl')ctlIn();else if(scr=='rul')ruleIn();else if(scr=='itm')itemIn();
  else if(scr=='sel')selInput();
  else if(scr=='dlg')dlgIn();
  else if(scr=='onlineWait'&&(J.Enter||J.KeyF||J.KeyK)&&!onlineSocket)connectOnline();
  else if(scr=='fight')step();
  else if(J.Enter||J.KeyF||J.KeyK)endNext();
  J={}}
 g.save();
 if(scr=='menu')drawMenu();else if(scr=='set')drawSet();else if(scr=='mis')drawMis();else if(scr=='ctl')drawCtl();else if(scr=='rul')drawRules();else if(scr=='itm')drawItems();else if(scr=='dlg')drawDlg();else if(scr=='sel'){drawSel();ruleChip()}else if(scr=='onlineWait')drawOnlineWait();
 else{if(shake>0)g.translate((Math.random()-.5)*shake*CFG.shk,(Math.random()-.5)*shake*CFG.shk);
  bg();drawMap();
  for(const b of B){g.globalAlpha=b.dl>0?.25:1;drawProjectile(b)}g.globalAlpha=1;
  drawIT();P.forEach(drawP);drawHZ();drawFX();g.restore();g.save();hud();
  if(clock>0){const secs=Math.ceil(clock/60),label=`${(secs/60|0)}:${String(secs%60).padStart(2,'0')}`;txt(label,W/2,42,28,secs<15?'#ff6b6b':'#fff')}
  if(MD.k=='king'){g.fillStyle='rgba(255,220,60,.1)';g.fillRect(390,0,180,H);txt('CIMA',480,80,13,'#ffe47a')}
  if(cdn>0){const n=Math.ceil(cdn/60),f=(cdn%60)/60;g.save();g.translate(W/2,H/2-10);g.scale(1+f*.45,1+f*.45);g.globalAlpha=.35+.65*(1-f);g.shadowColor='#000';g.shadowBlur=20;txt(n,0,40,130,['#fff','#ffd23c','#ff6b6b'][3-n]);g.restore()}
  else if(yaT>0){g.save();g.globalAlpha=Math.min(1,yaT/20);txt('¡YA!',W/2,H/2+30,110,'#6fcf6a');g.restore()}
  if(fs&&fs.t>0){g.fillStyle='rgba(0,0,0,.65)';g.fillRect(0,H/2-70,W,140);txt('¡SMASH FINAL!',W/2,H/2-22,22,'#fff');txt(fs.p.c.fn,W/2,H/2+30,54,fs.p.c.col)}
  if(scr=='end'){g.fillStyle='rgba(10,8,20,.7)';g.fillRect(0,0,W,H);
   txt(`¡Gana J${win.i+1} con ${win.c.n}!`,W/2,H/2-10,50,win.c.col);
   txt('Pulsa Enter para continuar',W/2,H/2+40,20,'#f1ece4');if(MD.k=='sv')txt('Racha: '+(SV+(win.i==0?1:0)),W/2,H/2+85,26,'#ffd23c');if(MD.k=='king')txt('Puntos cima: '+Math.floor(win.king/60),W/2,H/2+86,22,'#ffd23c');else if(MD.k=='points')txt('Puntuación: '+Math.floor(win.score),W/2,H/2+86,22,'#ffd23c');else if(MD.k=='timer')txt('Daño recibido: '+win.dmg.toFixed(0)+'%',W/2,H/2+86,22,'#ffd23c')}}
 g.restore()}
/* ===== EXTRAS: logros, desbloqueos, idiomas, animaciones de historia ===== */
CFG.ach??=1;CFG.anim??=1;
const XS=Object.assign({g:0,w:0,h:0,s:0,d:0,fl:0,sv:0,st:0,vs:0,vnd:0,vx:0,cw:{},sc:{},mw:{},used:{},dif:{},got:{}},(()=>{try{return JSON.parse(localStorage.getItem('dls')||'{}')}catch(e){return{}}})());
const CN=CH.map(c=>c.n),PI=[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18];
const MN={cpu:['Duelo CPU','CPU Duel'],timer:['Contrarreloj','Time Trial'],vs:['Versus','Versus'],sd:['Muerte súbita','Sudden Death'],sv:['Supervivencia','Survival']};
const AL=[],add=(id,es,en,f)=>AL.push({id,es,en,f}),tier=(k,a,es,en)=>a.forEach(n=>add(k+n,es(n),en(n),()=>XS[k]>=n));
PI.forEach(i=>{add('cw'+i,'Gana con '+CN[i],'Win with '+CN[i],()=>XS.cw[i]>0);add('sc'+i,'Historia con '+CN[i],'Story with '+CN[i],()=>XS.sc[i]>0)});
tier('w',[1,5,10,25,50,100,250,500],n=>n+' victorias',n=>n+' wins');
tier('g',[1,10,25,50,100,250,500],n=>n+' combates',n=>n+' matches');
tier('h',[50,250,1000,2500,5000,10000,25000,50000],n=>n+' golpes',n=>n+' hits landed');
tier('s',[10,50,100,250,500,1000,2500],n=>n+' especiales',n=>n+' specials');
tier('d',[100,1000,5000,10000,50000,100000],n=>n+' de daño',n=>n+' damage dealt');
tier('fl',[1,3,5,10,25],n=>n+' victorias perfectas',n=>n+' flawless wins');
tier('sv',[1,3,5,10,15,20,30],n=>'Racha '+n+' en Supervivencia',n=>'Survival streak '+n);
tier('st',[1,5,10],n=>'Historia completada ×'+n,n=>'Story cleared ×'+n);
for(const k in MN)[1,10].forEach(n=>add('m'+k+n,n+'× victoria: '+MN[k][0],n+'× win: '+MN[k][1],()=>(XS.mw[k]||0)>=n));
add('void1','Derrota a El Vacío','Defeat The Void',()=>XS.vs>0);add('void2','El Vacío sin recibir daño','Void without a scratch',()=>XS.vnd>0);add('void3','El Vacío en dificultad Extrema','Void on Extreme',()=>XS.vx>0);
[5,10,13].forEach(n=>add('u'+n,'Juega con '+n+' personajes','Play '+n+' characters',()=>Object.keys(XS.used).length>=n));
['Fácil','Normal','Difícil','Extrema'].forEach((d,i)=>add('dif'+i,'Historia en '+d,'Story on '+['Easy','Normal','Hard','Extreme'][i],()=>XS.dif[i]>0));
add('coll','Gana con todos los personajes','Win with every character',()=>PI.every(i=>XS.cw[i]>0));
add('unl','Desbloquea a todos','Unlock everyone',()=>Object.values(ULK).every(id=>XS.got[id]));
add('all','LEYENDA: 100% logros','LEGEND: 100% achievements',()=>AL.filter(a=>a.id!='all').every(a=>XS.got[a.id]));
const ULK={10:'w5',11:'st1',12:'w25',13:'sv5',14:'st5',15:'w50',16:'sv10',17:'void1',18:'st10'};
const NW=[['Solitario',0,'Solo','Solo'],['Multijugador',0,'Multijoueur','Multijogador'],['Opciones',0,'Options','Opções'],['Historia',0,'Histoire','História'],['Duelo CPU',0,'Duel IA','Duelo CPU'],['Supervivencia',0,'Survie','Sobrevivência'],['Entrenamiento',0,'Entraînement','Treino'],['Contrarreloj',0,'Contre-la-montre','Contra o Relógio'],['Muerte súbita',0,'Mort subite','Morte súbita'],['Dificultad de historia',0,"Difficulté de l'histoire",'Dificuldade da história'],['Idioma',0,'Langue','Idioma'],['Volumen',0,'Volume','Volume'],['Música',0,'Musique','Música'],['Efectos de sonido',0,'Effets sonores','Efeitos sonoros'],['Objetos',0,'Objets','Itens'],['Volver',0,'Retour','Voltar'],['Fácil',0,'Facile','Fácil'],['Difícil',0,'Difficile','Difícil'],['Extrema',0,'Extrême','Extrema'],['Enter para continuar ▶',0,'Entrée pour continuer ▶','Enter para continuar ▶'],
['Duelo a muerte','Deathmatch','Duel à mort','Duelo mortal'],['Una vida contra la CPU','One life vs the CPU','Une vie contre l\'IA','Uma vida contra a CPU'],['Sin objetos','No items','Sans objets','Sem itens'],['Duelo CPU puro, sin objetos','Pure CPU duel, no items','Duel IA pur, sans objets','Duelo CPU puro, sem itens'],['Caos de objetos','Item Chaos','Chaos d\'objets','Caos de itens'],['Objetos sin parar','Non-stop items','Objets sans arrêt','Itens sem parar'],['Animaciones de historia','Story animations','Animations de l\'histoire','Animações da história'],['Notificaciones de logros','Achievement popups','Notifications de succès','Avisos de conquistas']];
const XL={fr:[],pt:[],ca:[]};NW.forEach(([e,en,f,p])=>{if(en)EN_PAIRS.push([e,en]);XL.fr.push([e,f]);XL.pt.push([e,p])});
XL.ca=[
['DUELO EN LA CUMBRE II','DUEL AL CIM II'],['ECLIPSE DE CRISTAL','ECLIPSI DE CRISTALL'],['ELIGE TU DUELO','TRIA EL TEU DOL'],['SOLITARIO · J1 VS CPU','INDIVIDUAL · J1 CONTRA CPU'],['MULTIJUGADOR · P1 VS P2','MULTIJUGADOR · J1 CONTRA J2'],['Solitario','Individual'],['Multijugador','Multijugador'],['Opciones','Opcions'],['Ajustes','Configuració'],['Historia','Història'],['Historia cooperativa','Història cooperativa'],['Dos héroes contra la campaña','Dos herois contra la campanya'],['Duelo CPU','Combat contra CPU'],['Supervivencia','Supervivència'],['Entrenamiento','Entrenament'],['Contrarreloj','Contrarellotge'],['Versus','Versus'],['Muerte súbita','Mort sobtada'],['Caos total','Caos total'],['Carrera de puntos','Cursa de punts'],['Rey de la cumbre','Rei del cim'],['Caza de objetos','Caça d’objectes'],['Online','En línia'],['Volver','Tornar'],['Mando','Comandament'],['Efectos de sonido','Efectes de so'],['Música','Música'],['Volumen','Volum'],['Temblor de pantalla','Sacsejada de pantalla'],['Objetos','Objectes'],['Idioma','Idioma'],['Español','Espanyol'],['English','Anglès'],['Français','Francès'],['Português','Portuguès'],['Català','Català'],['Dificultad de historia','Dificultat de la història'],['Fácil','Fàcil'],['Normal','Normal'],['Difícil','Difícil'],['Extrema','Extrema'],['Jugador 1','Jugador 1'],['Jugador 2','Jugador 2'],['Ninguno','Cap'],['Sí','Sí'],['No','No'],['ELIGE TU PERSONAJE','TRIA EL TEU PERSONATGE'],['¡LISTO!','A PUNT!'],['¡A LUCHAR!','A LLUITAR!'],['Elige…','Tria…'],['JUGADOR','JUGADOR'],['CPU','CPU'],['VEL','VEL'],['SALTO','SALT'],['FUERZA','FORÇA'],['Cumbre','Cim'],['Tres islas','Tres illes'],['Volcán','Volcà'],['Nubes','Núvols'],['Ciudad neón','Ciutat de neó'],['Desierto','Desert'],['Espacio','Espai'],['Templo en ruinas','Temple en ruïnes'],['Aurora glaciar','Aurora glacial'],['Bosque encantado','Bosc encantat'],['Mar de cristal','Mar de cristall'],['Pantano tóxico','Pantà tòxic'],['Fortaleza de acero','Fortalesa d’acer'],['Santuario del Alba','Santuari de l’Alba'],['Cueva de Cristal','Cova de Cristall'],['Cráter Celeste','Cràter Celeste'],['Reloj del Eclipse','Rellotge de l’Eclipsi'],['Fuego','Foc'],['Rayo','Llamp'],['Roca','Roca'],['Hielo','Gel'],['Sombra','Ombra'],['Selva','Selva'],['Viento','Vent'],['Astro','Astro'],['Vacío','Buit'],['Agua','Aigua'],['Veneno','Verí'],['Acero','Acer'],['Luz','Llum'],['Cristal','Cristall'],['Magma','Magma'],['Eco','Eco'],['Gravedad','Gravetat'],['Aurora','Aurora'],['¡SMASH FINAL!','SMASH FINAL!'],['Enter para continuar ▶','Prem Enter per continuar ▶'],['↑/↓ cambia el mapa','↑/↓ canvia l’escenari'],['Nueve duelos contra CPU','Nou combats contra la CPU'],['Recupera los 9 fragmentos','Recupera els 9 fragments'],['Un combate contra la máquina','Un combat contra la màquina'],['Combate clásico a tres vidas','Combat clàssic a tres vides'],['Una sola vida','Una sola vida'],['Práctica sin límite de vidas','Practica sense límit de vides'],['Supera a la CPU en 90 segundos','Venç la CPU en 90 segons'],['Gana quien más daño inflija','Guanya qui faci més mal'],['Lluvia constante de objetos','Pluja constant d’objectes'],['Dificultad de historia','Dificultat de la història'],['Animaciones de historia','Animacions de la història'],['Notificaciones de logros','Avisos d’assoliments'],['J1','J1'],['J2','J2'],['J1 contra CPU','J1 contra CPU'],['P1 contra P2','J1 contra J2'],['Elige una categoría · ◀ ▶ o A/D · F / K / Enter','Tria una categoria · ◀ ▶ o A/D · F / K / Enter'],['← / → elige · ↑ / ↓ navega · Esc vuelve','← / → tria · ↑ / ↓ navega · Esc torna'],['↑/↓ cambia el mapa','↑/↓ canvia l’escenari'],['No se pudo conectar: ','No s’ha pogut connectar: '],['El rival se desconectó. Buscando otro...','El rival s’ha desconnectat. Cercant-ne un altre...'],['Recupera todos los fragmentos','Recupera tots els fragments'],['NARRADOR','NARRADOR'],['Narrador','Narrador'],['Racha: ','Ratxa: '],['Puntos cima: ','Punts del cim: '],['Puntuación: ','Puntuació: '],['Daño recibido: ','Dany rebut: '],['Ninguno','Cap'],['Fuego y explosiones','Foc i explosions'],['¡El Cristal ardía en mi templo y ahora no está! ¡Me mirarás a la cara!','El Cristall cremava al meu temple i ara no hi és! Mira’m als ulls!'],['La montaña quedó en silencio. Por primera vez, nadie tuvo que protegerla a solas. FIN.','La muntanya va quedar en silenci. Per primer cop, ningú no l’havia de protegir tot sol. FI.'],
['Muerte súbita','Mort sobtada'],['Caos de objetos','Caos d’objectes'],['Contrarreloj','Contrarellotge'],['Duelo a muerte','Combat a mort'],['Una vida contra la CPU','Una vida contra la CPU'],['Duelo CPU puro, sin objetos','Combat contra la CPU sense objectes'],['Objetos sin parar','Objectes sense parar'],['Historia completada ×','Història completada ×'],['Nueve duelos contra CPU','Nou combats contra la CPU'],['Gana con ','Guanya amb '],['Historia con ','Història amb '],[' victorias',' victòries'],[' victorias perfectas',' victòries perfectes'],[' golpes',' cops'],[' especiales',' especials'],[' de daño',' de dany'],['Historia en ','Història en '],['Desbloquea a todos','Desbloqueja’ls a tots'],['Desbloquea: ','Desbloqueja: '],['Logros','Assoliments'],['Logro desbloqueado','Assoliment desbloquejat'],['No controller detected','No s’ha detectat cap comandament'],['Controller detected','Comandament detectat'],['Elige…','Tria…'],['P1 contra CPU','J1 contra CPU'],['← / → elige · ↑ / ↓ navega · Esc vuelve','← / → tria · ↑ / ↓ navega · Esc torna'],['◀ ▶ para elegir · Enter/F para entrar · ↑ Opciones','◀ ▶ tria · Enter/F entra · ↑ opcions'],['A/D cambia tu luchador · B o Enter confirma · Esc sale','A/D canvia el lluitador · B o Enter confirma · Esc surt'],['B selecciona · Esc vuelve','B tria · Esc torna'],['A/D/W/S o flechas para moverte · F, K o Enter para elegir','A/D/W/S o fletxes per moure’t · F, K o Enter per triar'],['Elige con A/D y confirma con B o Enter. Esperando al rival…','Tria amb A/D i confirma amb B o Enter. Esperant el rival…'],['Fragmento ','Fragment '],[' de 9 recuperado. La sombra bajo la montaña vuelve a agitarse.',' de 9 recuperat. L’ombra sota la muntanya torna a moure’s.'],['Recupera los 9 fragmentos','Recupera els 9 fragments'],['Hace mil años, el Cristal del Alba mantenía en equilibrio el fuego, el rayo, el hielo, el viento y la sombra.','Fa mil anys, el Cristall de l’Alba mantenia en equilibri el foc, el llamp, el gel, el vent i l’ombra.'],['Una noche el Cristal estalló en nueve fragmentos. Cada guardián cree que otro lo rompió.','Una nit, el Cristall va esclatar en nou fragments. Cada guardià creu que l’ha trencat un altre.'],['Ahora el Torneo de la Cumbre decidirá quién reúne los fragmentos… y quién cae al vacío.','Ara el Torneig del Cim decidirà qui reuneix els fragments… i qui cau al buit.'],['El Cristal ardía en mi templo y ahora no está. ¡Me mirarás a la cara!','El Cristall cremava al meu temple i ara no hi és. Mira’m als ulls!'],['Sentí el trueno romperse. ¡Solo tú llegaste antes que yo al cráter!','Vaig sentir trencar-se el tro. Només tu vas arribar al cràter abans que jo!'],['La montaña lo recuerda todo. Y recuerda que pasaste por aquí esa noche.','La muntanya ho recorda tot. També recorda que vas passar per aquí aquella nit.'],['Un fragmento cayó en mi glaciar… y alguien dejó huellas calientes.','Un fragment va caure a la meva glacera… i algú hi va deixar petjades calentes.'],['No me ves, pero yo sí te vi. Llevas algo que me pertenece.','No em veus, però jo sí que et vaig veure. Duus una cosa que em pertany.'],['Las raíces susurran tu nombre. Devuelve el fragmento al bosque.','Les arrels xiuxiuegen el teu nom. Torna el fragment al bosc.'],['Todos los vientos apuntan hacia ti. ¿Casualidad?','Tots els vents t’assenyalen. Casualitat?'],['Mi maestro dijo: quien sostiene el fragmento, sostiene la culpa.','El meu mestre deia: qui sosté el fragment, sosté la culpa.'],['Las estrellas se apagaron una a una. Tú eres la anomalía.','Les estrelles es van apagar una rere l’altra. Tu ets l’anomalia.'],['No lo rompí por odio. Lo dividí para contener lo que duerme bajo la montaña. ¡Los fragmentos ya no bastan!','No el vaig trencar per odi. El vaig dividir per contenir allò que dorm sota la muntanya. Els fragments ja no són suficients!'],['La corriente me trajo hasta aquí. ¡Entrega el fragmento antes de que te arrastre!','El corrent m’ha dut fins aquí. Lliura el fragment abans que t’arrossegui!'],['Cada fragmento conserva un recuerdo distinto. Ninguno muestra quién lo rompió; todos muestran la misma sombra bajo la montaña.','Cada fragment conserva un record diferent. Cap no mostra qui el va trencar; tots mostren la mateixa ombra sota la muntanya.'],['El Cristal no era una corona ni un arma. Era un sello. La energía que liberáis en cada duelo está despertando lo que hay debajo.','El Cristall no era una corona ni una arma. Era un segell. L’energia que allibereu a cada combat està despertant allò que hi ha a sota.'],['El último fragmento vibra al acercarse al Santuario. La voz que os guiaba desde el principio no era un narrador: era el guardián del sello.','L’últim fragment vibra en acostar-se al Santuari. La veu que us guiava no era un narrador: era el guardià del segell.'],['El Vacío dejó de luchar. Bajo su armadura no había un monstruo, sino el guardián que sostuvo la grieta durante mil años.','El Buit va deixar de lluitar. Sota l’armadura no hi havia cap monstre, sinó el guardià que havia sostingut l’esquerda durant mil anys.'],['Los fragmentos volvieron a unirse. Esta vez, los guardianes compartieron su luz y sellaron juntos la sombra bajo la Cumbre.','Els fragments es van tornar a unir. Aquest cop, els guardians van compartir la seva llum i van segellar plegats l’ombra sota el Cim.'],['La marea revela el camino al Santuario del Alba. ¡Detén al Vacío!','La marea revela el camí cap al Santuari de l’Alba. Atura el Buit!'],['Mis llamas se calman. No fuiste tú. Toma mi fragmento.','Les meves flames s’apaguen. No has estat tu. Agafa el meu fragment.'],['Perdí. Había huellas negras en el cráter, no tuyas. Sigue adelante.','He perdut. Hi havia petjades negres al cràter, no eren teves. Continua.'],['Fuerte y justo. Llévate el fragmento; algo extraño se mueve al norte.','Fort i just. Emporta’t el fragment; alguna cosa estranya es mou al nord.'],['El hielo no miente: el culpable huele a vacío.','El gel no menteix: el culpable fa olor de buit.'],['Entre las sombras vi algo enorme. Un ojo sin luz. Cuidado.','Entre les ombres vaig veure una cosa immensa. Un ull sense llum. Vigila.'],['La selva te acepta. El fragmento late… y algo quiere apagarlo.','La selva t’accepta. El fragment batega… i alguna cosa el vol apagar.'],['El viento lo confirma: la fuente está bajo el volcán. Apúrate.','El vent ho confirma: l’origen és sota el volcà. Afanya’t.'],['Mil cortes y ninguno acertó. Ahora lo entiendo: el enemigo es otro.','Mil talls i cap no ha encertat. Ara ho entenc: l’enemic és un altre.'],['Las estrellas vuelven a brillar. Solo queda uno. El Vacío te espera.','Les estrelles tornen a brillar. Només en queda un. El Buit t’espera.'],['FIN. Gracias por jugar.','FI. Gràcies per jugar.'],['Gira el teléfono','Gira el telèfon'],['J1: A/D mover · W saltar · F golpe · G especial · H smash','J1: A/D moure · W saltar · F atacar · G especial · H smash final'],['2 héroes contra la campaña','2 herois contra la campanya'],['Cueva de Cristal','Cova de Cristall'],['Cráter Celeste','Cràter Celeste'],['Reloj del Eclipse','Rellotge de l’Eclipsi'],['Planeta perforante','Planeta perforant'],['Cometa','Cometa'],['Ascenso gravitatorio','Ascens gravitatori'],['Colapso','Col·lapse'],['PRISMA ETERNO','PRISMA ETERN'],['NÚCLEO ARDIENTE','NUCLI ARDENT'],['ONDA INFINITA','ONA INFINITA'],['COLAPSO ESTELAR','COL·LAPSE ESTEL·LAR'],['CIELO POLAR','CEL POLAR'],['Defensa brillante · rebota proyectiles','Defensa brillant · rebota projectils'],['Lento y resistente · lava explosiva','Lent i resistent · lava explosiva'],['Ágil · ondas que persiguen','Àgil · ones perseguidores'],['Controla el espacio y atrae rivales','Controla l’espai i atrau rivals'],['Velocidad y magia curativa','Velocitat i màgia curativa'],['Lanza prismática','Llança prismàtica'],['Baba ígnea','Bava ígnia'],['Eco sónico','Eco sonor'],['Pozo gravitatorio','Pou gravitatori'],['Burbuja polar','Bombolla polar'],['La sala empareja automáticamente a dos jugadores.','La sala emparella automàticament dos jugadors.'],
['Mando detectado','Comandament detectat'],['Sin mando: conecta uno para jugar','Sense comandament: connecta’n un per jugar'],['B confirma en mando · Esc vuelve','B confirma · Esc torna'],['Dificultad de historia','Dificultat de la història'],['Volumen','Volum'],['Efectos de sonido','Efectes de so'],['Temblor de pantalla','Sacsejada de pantalla'],['Notificaciones de logros','Avisos d’assoliments'],['Animaciones de historia','Animacions de la història'],['Mando, sonido y más','Comandament, so i més'],['El mando controla solo al jugador elegido · el otro jugador sigue con su teclado','El comandament controla el jugador triat; l’altre juga amb el teclat'],['Ninguno','Cap'],['DUELO EN LA CUMBRE II','DUEL AL CIM II'],['ELIGE TU DUELO','TRIA EL TEU DOL'],['Solitario · J1 vs CPU','Individual · J1 contra CPU'],['Multijugador · P1 vs P2','Multijugador · J1 contra J2'],['Modos contra CPU','Modes contra CPU'],['Elige tu duelo','Tria el teu combat'],['Elige…','Tria…'],['¡LISTO!','A PUNT!'],['¡Gana J','Guanya J'],[' con ',' amb '],['Pulsa Enter para continuar','Prem Enter per continuar'],['¡YA!','JA!'],['DAÑO RECIBIDO','DANY REBUT'],['Equilibrado · fuego y explosiones','Equilibrat · foc i explosions'],['Veloz y ligero · electricidad','Ràpid i àgil · electricitat'],['Lento y pesado · golpes brutales','Lent i pesant · cops brutals'],['Control · congela al rival','Control · congela el rival'],['Sigiloso · teletransportes','Sigil·lós · teletransports'],['Resistente · se cura','Resistent · es cura'],['Ultraligero · empuja y atrae','Ultralleuger · empeny i atrau'],['Técnico · shuriken y cortes','Tècnic · shuriken i talls'],['Cósmico · orbes y cometas','Còsmic · orbes i cometes'],['Fluido · olas y embestidas','Fluid · onades i embestides'],['Sucio · envenena con el tiempo','Brut · enverina amb el temps'],['Blindado · cortes perforantes','Blindat · talls perforants'],['Radiante · curación y rayos','Radiant · curació i llamps'],['Fácil','Fàcil'],['Normal','Normal'],['Difícil','Difícil'],['Extrema','Extrema'],['5 victorias','5 victòries'],['25 victorias','25 victòries'],['50 victorias','50 victòries'],['1 historia','1 història'],['5 historias','5 històries'],['10 historias','10 històries'],['5 supervivencias','5 victòries de supervivència'],['10 supervivencias','10 victòries de supervivència'],['Derrota al Vacío','Venç el Buit'],['Contrarreloj','Contrarellotge'],['Astro','Astro'],['Insólito','Insòlit'],['Peñasco','Roc'],['Roca rodante','Roca rodant'],['Salto sísmico','Salt sísmic'],['Terremoto','Terratrèmol'],['Carámbanos','Caramells'],['Deslizamiento','Lliscament'],['Ascenso helado','Ascens gelat'],['Zona gélida','Zona glaçada'],['Bola de fuego','Bola de foc'],['Llamarada','Flamarada'],['Fénix','Fènix'],['Erupción','Erupció'],['Planeta perforante','Planeta perforant'],['Cometa','Cometa'],['Ascenso gravitatorio','Ascens gravitatori'],['Colapso','Col·lapse'],['Mis llamas se calman. No fuiste tú. Toma mi fragmento.','Les meves flames s’apaguen. No has estat tu. Agafa el meu fragment.'],['Perdí. Había huellas negras en el cráter, no tuyas. Sigue adelante.','He perdut. Hi havia petjades negres al cràter, no eren teves. Continua.'],['Fuerte y justo. Llévate el fragmento; algo extraño se mueve al norte.','Fort i just. Emporta’t el fragment; alguna cosa estranya es mou al nord.'],['El hielo no miente: el culpable huele a vacío.','El gel no menteix: el culpable fa olor de buit.'],['Entre las sombras vi algo enorme. Un ojo sin luz. Cuidado.','Entre les ombres vaig veure una cosa immensa. Un ull sense llum. Vigila.'],['La selva te acepta. El fragmento late… y algo quiere apagarlo.','La selva t’accepta. El fragment batega… i alguna cosa el vol apagar.'],['El viento lo confirma: la fuente está bajo el volcán. Apúrate.','El vent ho confirma: l’origen és sota el volcà. Afanya’t.'],['Mil cortes y ninguno acertó. Ahora lo entiendo: el enemigo es otro.','Mil talls i cap no ha encertat. Ara ho entenc: l’enemic és un altre.'],['Las estrellas vuelven a brillar. Solo queda uno. El Vacío te espera.','Les estrelles tornen a brillar. Només en queda un. El Buit t’espera.'],['Imposible… la luz ha vuelto…','Impossible… la llum ha tornat…'],['El último fragmento vibra al acercarse al Santuario. La voz que os guiaba desde el principio no era un narrador: era el guardián del sello.','L’últim fragment vibra en acostar-se al Santuari. La veu que us guiava no era un narrador: era el guardià del segell.'],['La sombra bajo la montaña vuelve a agitarse.','L’ombra sota la muntanya torna a moure’s.'],['El cristal del alba','El Cristall de l’Alba'],['Desbloquea para jugar','Desbloqueja per jugar'],['5 supervivencias','5 victòries de supervivència'],['10 supervivencias','10 victòries de supervivència'],['Derrota al Vacío','Venç el Buit'],['Bola de fuego','Bola de foc'],['Llamarada','Flamarada'],['Fénix','Fènix'],['Peñasco','Roc'],['Roca rodante','Roca rodant'],['Salto sísmico','Salt sísmic'],['Terremoto','Terratrèmol'],['Carámbanos','Caramells'],['Deslizamiento','Lliscament'],['Ascenso helado','Ascens gelat'],['Zona gélida','Zona glaçada'],['Lanza prismática','Llança prismàtica'],['Espejo solar','Mirall solar'],['Alba ascendente','Alba ascendent'],['Renovación','Renovació'],['Baba ígnea','Bava ígnia'],['Embestida','Embestida'],['Géiser','Guèiser'],['Eco sónico','Eco sonor'],['Látigo','Fuet'],['Salto diagonal','Salt diagonal'],['Remolino','Remolí'],['Nova','Nova'],['Intercambio','Intercanvi'],['Pozo gravitatorio','Pou gravitatori'],['Cataclismo','Cataclisme'],['Burbuja polar','Bombolla polar'],['5 victorias','5 victòries'],['1 historia','1 història'],['25 victorias','25 victòries'],['5 supervivencias','5 victòries de supervivència'],['5 historias','5 històries'],['50 victorias','50 victòries'],['10 supervivencias','10 victòries de supervivència'],['10 historias','10 històries'],['Desbloquea para jugar','Desbloqueja per jugar'],[' victoria: ',' victòria: '],['Juega con ','Juga amb '],[' personajes',' personatges'],['Racha ','Ratxa '],[' en Supervivencia',' en Supervivència'],['Dificultad de historia','Dificultat de la història'],['Un combate contra la máquina','Un combat contra la màquina'],['Nueve duelos contra CPU','Nou combats contra la CPU'],['¡Entonces todo era tu plan! Esto termina aquí.','Així que tot era el teu pla! Això s’acaba aquí.'],['¡Yo no rompí el Cristal! Pero si hace falta pelear, pelearé.','Jo no vaig trencar el Cristall! Però si cal lluitar, lluitaré.'],['¡Y tampoco mi compañero! ¡Lucharemos juntos!','El meu company tampoc! Lluitarem plegats.'],['🪨','🪨']
];for(const k in XL)XL[k].sort((a,b)=>b[0].length-a[0].length);
const LG=['es','en','fr','pt','ca'];
SOLO.push({icon:'☠️',name:'Duelo a muerte',desc:'Una vida contra la CPU',k:'cpu',bot:1,st:1,it:380},{icon:'🧊',name:'Sin objetos',desc:'Duelo CPU puro, sin objetos',k:'cpu',bot:1,st:3,it:99999});
DUO.push({icon:'🎁',name:'Caos de objetos',desc:'Objetos sin parar',k:'vs',bot:0,st:3,it:80});
const ES=(o)=>Object.assign(document.createElement('div'),o);
const st_=document.head.appendChild(document.createElement('style'));st_.textContent='#ach{position:fixed;top:-90px;left:50%;transform:translateX(-50%);z-index:40;background:linear-gradient(135deg,#ffd23c,#ff8a2a);color:#1a1020;font:700 15px Trebuchet MS,sans-serif;padding:10px 18px;border-radius:14px;box-shadow:0 6px 24px #000a;transition:top .45s cubic-bezier(.2,1.6,.4,1);pointer-events:none;text-align:center}#ach.on{top:calc(env(safe-area-inset-top,0px) + 10px)}#ach small{display:block;font-weight:600;opacity:.8}#tb{position:fixed;top:calc(env(safe-area-inset-top,0px) + 6px);left:6px;z-index:30;font-size:20px;background:#0008;color:#fff;border:1px solid #fff4;border-radius:10px;padding:4px 8px}#ap{display:none;position:fixed;inset:0;z-index:50;background:#120f1ff2;color:#f1ece4;font:14px Trebuchet MS,sans-serif;overflow:auto;padding:14px}#ap.on{display:block}#ap .gr{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:6px}#ap .a{padding:7px 10px;border-radius:8px;background:#ffffff12;opacity:.45}#ap .a.y{opacity:1;background:#ffd23c33}';
const tb=ES({id:'tb',textContent:'🏆'}),ap=ES({id:'ap'}),an=ES({id:'ach'});tb.tagName;document.body.append(tb,ap,an);
const X={q:[],busy:0,
 en:()=>['en','fr','pt'].includes(CFG.lang),
 pop(a,b){X.q.push([langText(a),langText(b)]);if(!X.busy)X.next()},
 next(){const n=X.q.shift();if(!n){X.busy=0;return}X.busy=1;an.innerHTML=n[0]+'<small>'+n[1]+'</small>';an.className='on';sfx('it');setTimeout(()=>{an.className='';setTimeout(()=>X.next(),500)},2600)},
 save(){try{localStorage.setItem('dls',JSON.stringify(XS))}catch(e){}},
 chk(){AL.forEach(a=>{if(!XS.got[a.id]&&a.f()){XS.got[a.id]=1;if(CFG.ach)X.pop('🏆 '+(X.en()?a.en:a.es),X.en()?'Achievement unlocked':'Logro desbloqueado')}});X.save()},
 ok:i=>!ULK[i]||XS.got[ULK[i]],
 hit(t,d){if(!onlineActive&&A&&A.i==0&&A!==t){XS.h++;XS.d+=d|0}},
 sp(p){if(!onlineActive&&p.i==0)XS.s++},
 end(w){if(onlineActive||!w)return;XS.g++;const heroes=isCoopStory()?[0,1]:[0];heroes.forEach(i=>XS.used[sel[i]]=1);if(isCoopStory()?w.i<2:w.i==0){XS.w++;heroes.forEach(i=>{const h=sel[i];XS.cw[h]=(XS.cw[h]||0)+1});if(heroes.every(i=>P[i].dmg<=0))XS.fl++;XS.mw[MD.k]=(XS.mw[MD.k]||0)+1;if(sty&&sty.ord[sty.ch]==9){XS.vs=1;if(heroes.every(i=>P[i].dmg<=0))XS.vnd=1;if(CFG.difficulty==3)XS.vx=1}}X.chk()},
 story(){XS.st++;const heroes=isCoopStory()?[0,1]:[0];heroes.forEach(i=>XS.sc[sel[i]]=1);XS.dif[CFG.difficulty??1]=1;X.chk()},
 sv(n){XS.sv=Math.max(XS.sv,n);X.chk()},
 tick(){if(scr=='sel'&&MD.k!='online')for(const i of[0,1,2,3])if(rdy[i]&&!BOT[i]&&!X.ok(sel[i])){rdy[i]=0;sfx('hit');const a=AL.find(a=>a.id==ULK[sel[i]]);X.pop('🔒 '+CN[sel[i]],(X.en()?'Unlock: ':'Desbloquea: ')+(X.en()?a.en:a.es))}},
 panel(){const on=ap.classList.toggle('on');if(!on)return;const n=AL.filter(a=>XS.got[a.id]).length;ap.innerHTML='<h2>🏆 '+langText(X.en()?'Achievements':'Logros')+' '+n+'/'+AL.length+' <button onclick="this.parentNode.parentNode.classList.remove(\'on\')">✕</button></h2><div class="gr">'+AL.map(a=>'<div class="a'+(XS.got[a.id]?' y':'')+'">'+(XS.got[a.id]?'✅ ':'🔒 ')+langText(X.en()?a.en:a.es)+'</div>').join('')+'</div>'},
 t0:0,dl_:null,di_:-1,
 dlgFx(n,c,hero,foe){if(dl!=X.dl_||di!=X.di_){X.dl_=dl;X.di_=di;X.t0=T}if(!CFG.anim)return;const e=Math.min(1,(T-X.t0)/.6),sx=hero&&n==hero.n?224:foe&&n==foe.n?736:W/2,sy=235;g.save();
  for(let i=0;i<18;i++){const x=(i*97+T*(18+i%3*9))%W,y=(i*61+T*(30+i%4*8))%350;g.fillStyle='rgba(158,247,255,.3)';g.beginPath();g.moveTo(x,y-6);g.lineTo(x+4,y);g.lineTo(x,y+6);g.lineTo(x-4,y);g.fill()}
  if(foe&&foe===CH[9]){const v=g.createRadialGradient(W/2,250,150,W/2,250,560);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(120,0,40,'+(.35+Math.sin(T*3)*.15)+')');g.fillStyle=v;g.fillRect(0,0,W,H)}
  g.globalCompositeOperation='lighter';for(let i=0;i<16;i++){const a=T*(1.2+i%3*.4)+i*.4,r=55+(i*13)%30+Math.sin(T*3+i)*8;g.globalAlpha=.55;g.fillStyle=c;g.beginPath();g.arc(sx+Math.cos(a)*r,sy+Math.sin(a)*r*1.3,2+i%3,0,7);g.fill()}
  const rr_=(T-X.t0)*240;g.globalAlpha=Math.max(0,1-rr_/260);g.strokeStyle=c;g.lineWidth=4;g.beginPath();g.arc(sx,sy,rr_,0,7);g.stroke();g.globalAlpha=(1-e)*.5;g.fillStyle='#fff';g.fillRect(0,0,W,H);
  g.globalCompositeOperation='source-over';g.globalAlpha=1;g.fillStyle='#000';g.fillRect(0,0,W,34*(1-(1-e)**3));g.restore()}};
tb.onpointerup=()=>X.panel();addEventListener('keydown',e=>{if(e.code=='KeyT'&&scr!='fight')X.panel()});
X.chk();

applyCfg();syncLanguage();requestAnimationFrame(loop);
