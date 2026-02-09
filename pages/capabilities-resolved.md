<OnEnter>
    <h1 class="relative transition-all duration-1000" :class="{
      '-mt-40': $clicks >= 4
    }">
        <Typewriter v-if="$clicks < 2" immediate :delay="1000">2. I <s>Don't</s> Have The Capabilities!</Typewriter>
        <span v-if="$clicks > 1" >2.
        <span :class="{'bump': $clicks > 1}" style="animation-delay: 1s" >I </span>
        <span :class="{'animated-strike': $clicks > 1}">Don't </span>
        <span :class="{'bump': $clicks > 1}" style="animation-delay: 1.2s">Have </span>
        <span :class="{'bump': $clicks > 1}" style="animation-delay: 1.4s">The </span>
        <span :class="{'bump': $clicks > 1}" style="animation-delay: 1.7s">Capabilities! </span>
        </span>
    </h1>
</OnEnter>

<OnEnter>
    <RiveJulian class="w-80 absolute left-10 -bottom-35 anim-in-bottom transition-all duration-1000" :sad="$clicks < 1" :confident="$clicks > 1" :flexing="$clicks > 1" :sunglasses="$clicks >= 4" :class="{
      '-translate-x-10': $clicks >= 4
    }"/>
</OnEnter>

<OnEnter v-if="$clicks > 2" class="-scale-x-120 -rotate-30" >
    <RiveJulian class="w-170 absolute right-50 -bottom-245 anim-in-bottom" :amazed="$clicks < 4" :confident="$clicks >= 4" :sunglasses="$clicks >= 4" />
    <img src="https://media4.giphy.com/media/vukiBMS1mJ3MuVrFbU/giphy.gif?cid=5a38a5a2tsdpd8oj7hhabns0btrgbi7sfl44an1onjdwrtbf" class="absolute w-40 anim-in-fade transition-opacity duration-1000" :class="{ 'opacity-0': $clicks >= 4 }" />
</OnEnter>

<div v-if="$clicks >= 5">
  <div class="moira w-50 absolute left-100 top-50 rounded-xl anim-in-bottom">
    <img src="https://media2.giphy.com/media/3ohs4lFXifwJQiamti/giphy.gif?cid=5a38a5a2lk74eb2nlj12pwgid19jq97x6i6c27etd7h4ba48" class="w-full h-full rounded-xl" />
    <img src="/claude-logo.png" class="w-20 absolute top-0 left-1/2 -translate-x-1/2" />
  </div>
</div>

<div v-if="$clicks >= 4">
  <div class="w-full h-full absolute top-122 left-0 anim-in-bottom hover:-translate-y-100 transition-all duration-1000" style="animation-delay: 1s">
    <iframe src="https://prismic.io/blog/css-animation-examples" class="w-full h-full" />
    <div class="speach-bubble absolute -top-15 left-1/3 anim-in-bottom">Steal like an artist 😎</div>
  </div>
</div>

<style>
.animated-strike {
  position: relative;
}

.moira::after {
  content: 'Hello!?';
  display: block;
  position: absolute;
  font-size: 77%;
  left: 5%;
  bottom: 15%;
  color: white;
}

.bump {
    display: inline-block;
    animation: bump 0.8s ease-out both;
    margin-right: 0.6em;
    font-weight:bold;
}

@keyframes bump {
    50% {
        transform: translateY(-50%) scale(1.7);
        text-shadow: -0.1em 0 0.5em rgba(0, 0, 0);
    }
}

.animated-strike::after {
  content: '';
  position: absolute;
  left: -7%;
  top: 45%;
  width: 0;
  height: 0.2em;
  border-radius: 1em;
  background: red;
  animation: strike 0.4s ease-out forwards;
}

@keyframes strike {
  to {
    width: 100%;
  }
}
</style>
