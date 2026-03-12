<OnEnter>
    <PerformancetoolsPage :clicks="$clicks" />
    <img v-if="$clicks >= 3" src="https://media2.giphy.com/media/lqczWksNBr4HK/giphy.gif?cid=5a38a5a2w03g076grs7aae6slwio42qftagzzzi84nzm46k6" class="absolute bottom-5 left-5 rounded-xl anim-in-bottom" />
    <img v-if="$clicks >= 3" src="/browser.png" class="absolute bottom-50 left-25 w-20 anim-in-bottom" />
    <div v-if="$clicks >= 4" class="absolute left-46 bottom-6 anim-in-bottom font-bold" style="text-shadow: 0px 0px 5px black; color: var(--slidev-theme-primary)">Complexity</div>
</OnEnter>

<ClickCounter />