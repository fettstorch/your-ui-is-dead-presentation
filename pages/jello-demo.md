<div class="jello-container">
  <img class="jello-img" src="./jello.png" style="top: -6%; left: -2%;" />
  <img class="jello-img" src="./jello.png" style="top: -3%; left: 21%;" />
  <img class="jello-img" src="./jello.png" style="top: -7%; left: 38%;" />
  <img class="jello-img" src="./jello.png" style="top: -1%; left: 58%;" />
  <img class="jello-img" src="./jello.png" style="top: -4%; left: 82%;" />
  <img class="jello-img" src="./jello.png" style="top: 10%; left: -5%;" />
  <img class="jello-img" src="./jello.png" style="top: 17%; left: 15%;" />
  <img class="jello-img" src="./jello.png" style="top: 11%; left: 44%;" />
  <img class="jello-img" src="./jello.png" style="top: 19%; left: 65%;" />
  <img class="jello-img" src="./jello.png" style="top: 13%; left: 88%;" />
  <img class="jello-img" src="./jello.png" style="top: 28%; left: -1%;" />
  <img class="jello-img" src="./jello.png" style="top: 35%; left: 22%;" />
  <img class="jello-img" src="./jello.png" style="top: 26%; left: 42%;" />
  <img class="jello-img" src="./jello.png" style="top: 38%; left: 59%;" />
  <img class="jello-img" src="./jello.png" style="top: 31%; left: 81%;" />
  <img class="jello-img" src="./jello.png" style="top: 45%; left: -3%;" />
  <img class="jello-img" src="./jello.png" style="top: 53%; left: 19%;" />
  <img class="jello-img" src="./jello.png" style="top: 44%; left: 36%;" />
  <img class="jello-img" src="./jello.png" style="top: 55%; left: 66%;" />
  <img class="jello-img" src="./jello.png" style="top: 47%; left: 86%;" />
  <img class="jello-img" src="./jello.png" style="top: 63%; left: -4%;" />
  <img class="jello-img" src="./jello.png" style="top: 71%; left: 16%;" />
  <img class="jello-img" src="./jello.png" style="top: 62%; left: 43%;" />
  <img class="jello-img" src="./jello.png" style="top: 73%; left: 60%;" />
  <img class="jello-img" src="./jello.png" style="top: 64%; left: 85%;" />
  <img class="jello-img" src="./jello.png" style="top: 80%; left: -2%;" />
  <img class="jello-img" src="./jello.png" style="top: 88%; left: 24%;" />
  <img class="jello-img" src="./jello.png" style="top: 78%; left: 41%;" />
  <img class="jello-img" src="./jello.png" style="top: 91%; left: 58%;" />
  <img class="jello-img" src="./jello.png" style="top: 82%; left: 87%;" />
</div>

<style>
.jello-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.jello-img {
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.1s;
}

.jello-img:hover {
  animation: jello 0.8s ease-out;
}

@keyframes jello {
  from, to { transform: skewY(0deg) skewX(0deg); }
  14.286%  { transform: skewY(12deg) skewX(12deg); }
  28.571%  { transform: skewY(-10deg) skewX(-10deg); }
  42.857%  { transform: skewY(8deg) skewX(8deg); }
  57.143%  { transform: skewY(-6deg) skewX(-6deg); }
  71.429%  { transform: skewY(4deg) skewX(4deg); }
  85.714%  { transform: skewY(-2deg) skewX(-2deg); }
}
</style>
