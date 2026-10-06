// Touch controls for Cumbre II. Only activates on phones/tablets (or with ?touch=1).
// It does not touch the game code: it just sends the same keyboard events a keyboard would (Player 1 keys).
(()=>{
  const q=new URLSearchParams(location.search).get('touch');
  const isTouch=q==='1'||(q!=='0'&&(matchMedia('(pointer: coarse)').matches||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)));
  if(!isTouch)return;
  document.documentElement.classList.add('touch');

  const root=document.createElement('div');root.id='tc';
  root.innerHTML=`
    <div class="stick"><div class="knob"></div></div>
    <div class="btns">
      <div class="b atk" data-k="KeyF">GOLPE</div>
      <div class="b spc" data-k="KeyG">ESPECIAL</div>
      <div class="b jmp" data-k="KeyW">SALTO</div>
      <div class="b smh" data-k="KeyH">SMASH</div>
      <div class="b shd" data-k="KeyQ">ESCUDO</div>
      <div class="b grb" data-k="KeyE">AGARRE</div>
    </div>
    <div class="b mini esc" data-k="Escape">✕</div>
    <div class="b mini fsb" data-fs="1">⛶</div>`;
  document.body.appendChild(root);
  const rot=document.createElement('div');rot.id='tc-rotate';
  rot.innerHTML='<div>📱↻</div>Gira el teléfono<br>(modo horizontal)';
  document.body.appendChild(rot);

  const down=new Set();
  const fire=(code,on)=>{
    if(on===down.has(code))return;
    on?down.add(code):down.delete(code);
    window.dispatchEvent(new KeyboardEvent(on?'keydown':'keyup',{code,key:code,bubbles:true,cancelable:true}));
  };
  const buzz=()=>{try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}};
  const releaseAll=()=>{[...down].forEach(c=>fire(c,false));root.querySelectorAll('.on').forEach(e=>e.classList.remove('on'));knob.style.transform=''};

  // ---- fullscreen ----
  const de=document.documentElement;
  const canFS=!!(de.requestFullscreen||de.webkitRequestFullscreen);
  const goFS=async()=>{
    try{
      if(document.fullscreenElement||document.webkitFullscreenElement)return;
      await (de.requestFullscreen?de.requestFullscreen({navigationUI:'hide'}):de.webkitRequestFullscreen());
      if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(()=>{});
    }catch(e){}
  };
  const fsBtn=root.querySelector('[data-fs]');
  if(!canFS)fsBtn.style.display='none';
  // go fullscreen on the first touch anywhere
  addEventListener('pointerdown',()=>{if(canFS)goFS()},{once:true,capture:true});

  // ---- buttons ----
  root.querySelectorAll('.b[data-k]').forEach(el=>{
    const code=el.dataset.k;
    el.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();el.setPointerCapture(e.pointerId);el.classList.add('on');buzz();fire(code,true)});
    const up=e=>{e.preventDefault();e.stopPropagation();el.classList.remove('on');fire(code,false)};
    el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);
  });
  fsBtn.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();
    if(document.fullscreenElement||document.webkitFullscreenElement)(document.exitFullscreen||document.webkitExitFullscreen).call(document);else goFS()});

  // ---- joystick ----
  const stick=root.querySelector('.stick'),knob=root.querySelector('.knob');let sid=null;
  const move=e=>{
    const r=stick.getBoundingClientRect(),R=r.width/2;
    let dx=(e.clientX-(r.left+R))/R,dy=(e.clientY-(r.top+R))/R;
    const len=Math.hypot(dx,dy);if(len>1){dx/=len;dy/=len}
    knob.style.transform=`translate(${dx*R*.55}px,${dy*R*.55}px)`;
    fire('KeyA',dx<-.3);fire('KeyD',dx>.3);
    fire('KeyW',dy<-.55);fire('KeyS',dy>.55);
  };
  stick.addEventListener('pointerdown',e=>{if(sid!==null)return;e.preventDefault();e.stopPropagation();sid=e.pointerId;stick.setPointerCapture(sid);buzz();move(e)});
  stick.addEventListener('pointermove',e=>{if(e.pointerId===sid){e.preventDefault();move(e)}});
  const end=e=>{if(e.pointerId!==sid)return;sid=null;knob.style.transform='';['KeyA','KeyD','KeyW','KeyS'].forEach(c=>fire(c,false))};
  stick.addEventListener('pointerup',end);stick.addEventListener('pointercancel',end);

  // ---- housekeeping ----
  addEventListener('blur',releaseAll);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)releaseAll()});
  document.addEventListener('contextmenu',e=>e.preventDefault());
  document.addEventListener('gesturestart',e=>e.preventDefault());
  document.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});
})();
