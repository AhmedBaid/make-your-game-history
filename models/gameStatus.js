import *  as config from "./config.js";
import { clearAnimation } from "./helpers.js";

export function gameWin() {
  config.gameState.gameStart = false;
  config.gameState.gamePause = true;
  config.gameMessage.innerHTML = `
  <h2 class="title victory">🌌 النصر 🌌</h2>
  <div class="story-box">
    <p>لقد جمعت كل الشظايا وأعدت <span class="highlight">كريستال التوازن</span> إلى شكله الكامل!</p>
    <p>سطع نور قوي في أنحاء المجرّة وطرد الظلام بعيداً.</p>
    <p>الحارس يبتسم ويقول: <span class="quote">"لقد عاد السلام… حتى تنادينا النجوم مرة أخرى."</span></p>
  </div>
  لقد فزت! \n اضغط على زر المسافة لإعادة اللعب \n نتيجتك النهائية: ${config.gameStatus.score}`;


  config.gameMessage.style.display = "block";
  clearAnimation();
  clearInterval(config.time.interval);
  config.time.interval = null;
}

export function start() {
  config.gameMessage.style.display = "none";
}

export function Pause() {
  config.gameMessage.style.display = "block";
}

export function gameOver() {
  // Stop game
  config.gameState.gameStart = false;
  config.gameState.gamePause = true;

  clearAnimation();
  config.gameMessage.innerHTML = `
  <h2>☠️ الهزيمة ☠️</h2>
  <div class="story-box">
    <p>كرة الفوتون خبت… والشظايا تفرقت في الفراغ مجدداً.</p>
    <p>الظلام ابتلع المجرّة، والتوازن انهار.</p>
    <p>همس أخير يتردد: <span class="highlight">الكون غرق في فوضى أبدية</span></p>
  </div>
  النهاية! \n اضغط على زر المسافة لإعادة اللعب \n نتيجتك النهائية: ${config.gameStatus.score}`;

  config.gameMessage.style.display = "block";

  // Stop timer
  clearInterval(config.time.interval);
  config.time.interval = null;
}

export function Restart() {
  window.location.reload();
}