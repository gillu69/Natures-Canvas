function gumawa_ng_gubat() {

  const css = `
    #gubat-scene { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
    #gubat-scene div { position: absolute; }

    /* Sinag ng araw na pumapasok sa pagitan ng mga puno */
    .sinag {
      top: -10%; height: 130%;
      background: linear-gradient(180deg, rgba(255, 248, 190, 0.45), rgba(255, 248, 190, 0) 75%);
      transform-origin: top center;
      transform: rotate(16deg);
      filter: blur(10px);
      animation: sinag 9s ease-in-out infinite alternate;
    }
    @keyframes sinag {
      from { opacity: 0.2; transform: rotate(14deg); }
      to   { opacity: 0.7; transform: rotate(19deg); }
    }

    /* Mga puno (malayo = malabo at mapusyaw, gitna = mas madilim) */
    .puno {
      bottom: 0; height: 100%;
      background: linear-gradient(90deg, rgba(2, 22, 12, 0.95), rgba(9, 58, 34, 0.95) 50%, rgba(2, 22, 12, 0.95));
      border-radius: 12px 12px 0 0;
    }
    .puno.malayo { opacity: 0.35; filter: blur(3px); }
    .puno.gitna  { opacity: 0.75; filter: blur(1px); }

    /* Madilim na dahon sa itaas na parang bubong ng gubat */
    .kanopi {
      top: -18vh; border-radius: 50%;
      background: radial-gradient(circle, rgba(3, 30, 16, 0.95), rgba(3, 30, 16, 0) 70%);
      filter: blur(6px);
    }

    /* Hamog na dahan-dahang lumilipat */
    .ambon {
      border-radius: 50%;
      background: radial-gradient(ellipse, rgba(210, 255, 225, 0.28), rgba(210, 255, 225, 0) 70%);
      filter: blur(14px);
      animation: ambon 40s ease-in-out infinite alternate;
    }
    @keyframes ambon {
      from { transform: translateX(-8vw); }
      to   { transform: translateX(8vw); }
    }

    /* Mga baging na umiindayog */
    .liana {
      top: 0; width: 4px;
      background: linear-gradient(180deg, #06301b, #2f8f5a);
      border-radius: 0 0 4px 4px;
      transform-origin: top center;
      animation: indayog 6s ease-in-out infinite alternate;
    }
    @keyframes indayog {
      from { transform: rotate(-3deg); }
      to   { transform: rotate(3deg); }
    }
    .liana i {
      position: absolute; width: 18px; height: 18px;
      background: #3fa66b; border-radius: 0 100% 0 100%;
    }

    /* Mga pako sa ibaba na gumagalaw sa hangin */
    .pako {
      bottom: -30px;
      transform-origin: bottom center;
      background: linear-gradient(0deg, #03180d, #1f7a4a);
      border-radius: 0 100% 0 100%;
      animation: goyo 7s ease-in-out infinite;
    }
    @keyframes goyo {
      0%, 100% { transform: rotate(calc(var(--r) - 3deg)); }
      50%      { transform: rotate(calc(var(--r) + 3deg)); }
    }

    /* Kung ayaw ng user ng maraming galaw sa device niya, titigil ang mga animation */
    @media (prefers-reduced-motion: reduce) {
      #gubat-scene * { animation: none !important; }
    }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const scene = document.createElement("div");
  scene.id = "gubat-scene";
  document.body.insertBefore(scene, document.body.firstChild);

  const rand = function (min, max) { return min + Math.random() * (max - min); };

  let html = "";

  for (let i = 0; i < 10; i++) {
    html += '<div class="puno malayo" style="left:' + rand(-2, 100) + '%;width:' + rand(30, 60) + 'px"></div>';
  }
  for (let i = 0; i < 6; i++) {
    html += '<div class="sinag" style="left:' + rand(5, 90) + '%;width:' + rand(70, 170) +
            'px;animation-delay:' + (-rand(0, 8)) + 's;animation-duration:' + rand(7, 12) + 's"></div>';
  }

  for (let i = 0; i < 5; i++) {
    html += '<div class="ambon" style="left:' + rand(-10, 80) + '%;top:' + rand(30, 85) +
            '%;width:' + rand(35, 60) + 'vw;height:' + rand(15, 30) + 'vh;animation-duration:' +
            rand(30, 60) + 's;animation-delay:' + (-rand(0, 30)) + 's"></div>';
  }

  for (let i = 0; i < 7; i++) {
    html += '<div class="puno gitna" style="left:' + rand(-3, 98) + '%;width:' + rand(60, 110) + 'px"></div>';
  }

  for (let i = 0; i < 5; i++) {
    html += '<div class="kanopi" style="left:' + (i * 22 - 10) + '%;width:40vw;height:34vh"></div>';
  }

  for (let i = 0; i < 9; i++) {
    const taas = rand(20, 60);                     
    let dahon = "";
    for (let y = 40; y < taas * 8; y += 55) {     
      const kaliwa = Math.random() < 0.5 ? -16 : 2;
      dahon += '<i style="top:' + y + 'px;left:' + kaliwa + 'px"></i>';
    }
    html += '<div class="liana" style="left:' + rand(0, 100) + '%;height:' + taas +
            'vh;animation-delay:' + (-rand(0, 6)) + 's;animation-duration:' + rand(5, 9) + 's">' + dahon + '</div>';
  }


  for (let i = 0; i < 12; i++) {
    const kaliwang_gilid = i < 6;
    const posisyon = kaliwang_gilid ? rand(-3, 22) : rand(78, 100);
    html += '<div class="pako" style="left:' + posisyon + '%;width:' + rand(90, 150) + 'px;height:' + rand(220, 380) +
            'px;--r:' + rand(-50, 50) + 'deg;animation-delay:' + (-rand(0, 7)) + 's;animation-duration:' + rand(6, 10) + 's"></div>';
  }

  scene.innerHTML = html;
}

gumawa_ng_gubat();
const mensahe = "Welcome to Our Rainforest!";   
const pamagat = document.getElementById("welcome-text");
let letra = 0;                                
function mag_type() {
  if (letra < mensahe.length) {
    // dagdagan ng isang letra ang nakasulat
    pamagat.textContent = mensahe.slice(0, letra + 1);
    letra++;
    setTimeout(mag_type, 90);                  
  }
}

if (pamagat) {                                
  mag_type();
}

const dahonLayer = document.getElementById("dahon-layer");

function gumawa_ng_dahon() {
  const dahon = document.createElement("div"); 
  dahon.classList.add("dahon");

  const laki = 12 + Math.random() * 20;      
  dahon.style.width = laki + "px";
  dahon.style.height = laki + "px";
  dahon.style.left = Math.random() * 100 + "vw";       
  dahon.style.animationDuration = 8 + Math.random() * 8 + "s";
  dahon.style.animationDelay = -Math.random() * 10 + "s";  


  const kulay = ["#8fd694", "#5fc28a", "#3fa66b", "#b6e8a8"];
  dahon.style.background = kulay[Math.floor(Math.random() * kulay.length)];

  dahonLayer.appendChild(dahon);             
}

if (dahonLayer) {

  for (let i = 0; i < 100; i++) {
    gumawa_ng_dahon();
  }
}

const alitaptapLayer = document.getElementById("alitaptap-layer");

if (alitaptapLayer) {
  for (let i = 0; i < 18; i++) {
    const alitaptap = document.createElement("div");
    alitaptap.classList.add("alitaptap");
    alitaptap.style.left = Math.random() * 100 + "vw";
    alitaptap.style.top = Math.random() * 100 + "vh";
    alitaptap.style.animationDuration =
      4 + Math.random() * 4 + "s, " + (2 + Math.random() * 3) + "s";
    alitaptap.style.animationDelay = -Math.random() * 5 + "s";
    alitaptapLayer.appendChild(alitaptap);
  }
}



const SUSI = "ulan-umuulan";   
function basahin_ang_susi() {
  try { return sessionStorage.getItem(SUSI) === "1"; } catch (e) { return false; }
}

function isulat_ang_susi(halaga) {
  try { sessionStorage.setItem(SUSI, halaga ? "1" : "0"); } catch (e) {}
}

let ulanLayer = document.getElementById("ulan-layer");
if (!ulanLayer) {
  ulanLayer = document.createElement("div");
  ulanLayer.id = "ulan-layer";
  ulanLayer.style.cssText = "position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:1;";
  document.body.appendChild(ulanLayer);
}

let ulanButton = document.getElementById("ulan-button");
if (!ulanButton) {
  ulanButton = document.createElement("button");
  ulanButton.id = "ulan-button";
  ulanButton.className = "btn btn-outline";
  ulanButton.textContent = "Make it Rain";
  ulanButton.style.cssText =
    "position:fixed;right:20px;bottom:20px;z-index:50;padding:10px 20px;" +
    "font-size:0.9rem;background:rgba(5,46,26,0.85);";
  document.body.appendChild(ulanButton);
}

let umuulan = false;            

function simulan_ang_ulan() {
  for (let i = 0; i < 70; i++) {
    const patak = document.createElement("div");
    patak.classList.add("patak");
    patak.style.left = Math.random() * 100 + "vw";
    patak.style.animationDuration = 0.6 + Math.random() * 0.6 + "s";
    patak.style.animationDelay = -Math.random() * 1.2 + "s";
    ulanLayer.appendChild(patak);
  }
}

let audioCtx = null;   
let ulanTunog = null;   

const LAKAS_NG_TUNOG = 0.35;  

function simulan_ang_tunog() {
  if (ulanTunog) return;                       
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;              

  if (!audioCtx) audioCtx = new AudioContextClass();
  if (audioCtx.state === "suspended") audioCtx.resume();


  const haba = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, haba, audioCtx.sampleRate);
  const datos = buffer.getChannelData(0);
  for (let i = 0; i < haba; i++) {
    datos[i] = Math.random() * 2 - 1;
  }

  const ingay = audioCtx.createBufferSource();
  ingay.buffer = buffer;
  ingay.loop = true;                         


  const mababa = audioCtx.createBiquadFilter();
  mababa.type = "highpass";
  mababa.frequency.value = 600;

  const mataas = audioCtx.createBiquadFilter();
  mataas.type = "lowpass";
  mataas.frequency.value = 7000;


  const lakas = audioCtx.createGain();
  lakas.gain.setValueAtTime(0, audioCtx.currentTime);
  lakas.gain.linearRampToValueAtTime(LAKAS_NG_TUNOG, audioCtx.currentTime + 1);

  ingay.connect(mababa);
  mababa.connect(mataas);
  mataas.connect(lakas);
  lakas.connect(audioCtx.destination);
  ingay.start();

  ulanTunog = { ingay: ingay, lakas: lakas };
}

function itigil_ang_tunog() {
  if (!ulanTunog) return;

  const ngayon = audioCtx.currentTime;
  ulanTunog.lakas.gain.cancelScheduledValues(ngayon);
  ulanTunog.lakas.gain.setValueAtTime(ulanTunog.lakas.gain.value, ngayon);
  ulanTunog.lakas.gain.linearRampToValueAtTime(0, ngayon + 0.6);
  ulanTunog.ingay.stop(ngayon + 0.7);
  ulanTunog = null;
}

function buksan_ang_ulan() {
  umuulan = true;
  simulan_ang_ulan();
  simulan_ang_tunog();
  ulanButton.textContent = "Stop the Rain";
  isulat_ang_susi(true);                    
}

function isara_ang_ulan() {
  umuulan = false;
  ulanLayer.innerHTML = "";                  
  itigil_ang_tunog();
  ulanButton.textContent = "Make it Rain";
  isulat_ang_susi(false);                      
}


ulanButton.addEventListener("click", function () {
  if (umuulan) {
    isara_ang_ulan();
  } else {
    buksan_ang_ulan();
  }
});


if (basahin_ang_susi()) {
  buksan_ang_ulan();

  const eventos = ["pointerdown", "keydown", "touchstart"];
  const ituloy_ang_tunog = function () {
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
    eventos.forEach(function (e) { document.removeEventListener(e, ituloy_ang_tunog); });
  };
  eventos.forEach(function (e) { document.addEventListener(e, ituloy_ang_tunog); });
}
