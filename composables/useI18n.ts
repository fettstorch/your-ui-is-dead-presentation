const lang = (import.meta.env.VITE_LANG ?? 'en') as 'en' | 'de'

const translations: Record<'en' | 'de', Record<string, string>> = {
  en: {
    // slides.md - title slide
    'title.heading': 'Your UI Is Dead',
    'title.subtitle': 'From devs for devs',

    // reasons-against.md - list items
    'reasons.item1': "We Don't Need This!",
    'reasons.item2': "I Don't Have The Capabilities!",
    'capRes.w1': 'I',
    'capRes.w2': "Don't",
    'capRes.w3': 'Have',
    'capRes.w4': 'The',
    'capRes.w5': 'Capabilities!',
    'reasons.item3': "This Would Hurt Performance!",
    'reasons.item4': "I Have Enough On My Plate Right Now!",

    // reasons-against.md - h1
    'reasons.h1': "1. We Don't Need This!",

    // capabilities-overview.md - speech bubbles (long form)
    'reasons.long2': "2. I Don't Have The Capabilities!",
    'reasons.long3': "3. I Have Enough On My Plate Right Now!",
    'reasons.long4': "4. This Would Hurt Performance!",

    // capabilities-overview.md - speech bubbles (short form)
    'reasons.short3': '3. Enough On My Plate',

    // we-dont-need-this.md - speech bubbles
    'wdnt.shiny': 'Shiny 🤩',
    'wdnt.error': 'Error 🤬',
    'wdnt.attention': 'Attention please 💁🏼‍♂️',

    // performance-overview.md
    'perf.overview.bubble': 'But what about',
    'perf.overview.h1': '4. This Would Hurt Performance!',

    // performance-pipeline.md - style section
    'perf.pipe.selectorMatching': 'Matches CSS selectors against DOM elements to determine which rules apply.',
    'perf.pipe.cascadeResolution': 'Resolves conflicts using specificity, source order, and !important.',
    'perf.pipe.boxGeneration': 'Creates layout boxes for each Render Tree node (block, inline, flex, grid).',
    'perf.pipe.geometryCalc': 'Recursively computes width and height, often derived from children or content.',
    'perf.pipe.coordAssign': 'Assigns precise floating-point x/y positions to each box.',
    'perf.pipe.identifyLayers': 'Identifies elements in the Render Tree that should be grouped into one layer based on how likely it is they should be animated together.',
    'perf.pipe.createTextures': 'Delegate tasks to render threads. Generate textures (actual pixelmaps) via GPU.',
    'perf.pipe.layerComposition': 'All the layers and pixel data are combined together to create a plan on how to construct the next frame.',
    'perf.pipe.frameDisplay': 'The Frame generation instruction is sent to the GPU process and drawn onto the display.',
    'perf.pipe.restyleReflow': 'Creating/deleting styles or elements.',

    // performance-pipeline.md - pointer hints
    'perf.pipe.hintColorize': 'hover to colorize',
    'perf.pipe.hintHeight': 'click to increase height',
    'perf.pipe.hintPadding': 'click to increase padding',
    'perf.pipe.hintScale': 'hover to scale',
    'perf.pipe.hintMargins': 'hover boxes to increase their x-margins',

    // performance-naive-contract.md
    'perf.contract.label': 'CONTRACT: Animations may only contain:',
    'perf.contract.newsTicker': 'ALL PROBLEMS SOLVED',

    // performance-resolution.md
    'perf.res.bubble': 'So... what <span class="font-bold">about</span>',
    'perf.res.h1': '4. This Would Hurt Performance!',
    'perf.res.dontGeneralize': "- Don't generalize the answer",
    'perf.res.bestPractices': '- Best practices can help (transform & opacity animations)',
    'perf.res.measureIt': '- Measure it!!!',

    // rive-introduction.md
    'rive.intro.whatIs': 'What Is',

    // rive-capabilities.md
    'rive.cap.h1': "3. I Have Enough On My Plate Right Now!",
    'rive.cap.bubble': "Well you don't have to<br>I'll do it myself!",
    'rive.cap.blurredH1': "2. I Don't Have The Capabilities!",

    // rive-bad-ping-pong.md
    'rive.bpp.h1': "3. I Have Enough On My Plate Right Now!",
    'rive.bpp.msg1': 'I made this thing in Figma',
    'rive.bpp.msg2': "OK. I'll do it",
    'rive.bpp.msg3': 'This should be animated. I made a preview with aftereffects here ^^',
    'rive.bpp.msg4': "Here is what i did. Its not <b>exactly</b><br>\n    what you had in mind but its pretty close",
    'rive.bpp.msg5a': 'Its OK... i guess...',
    'rive.bpp.msg5b': 'But can we at least improve on this part again?',
    'rive.bpp.msg6': "Wait, I'm on another task right now...",
    'rive.bpp.msg7a': 'OK lets see...',
    'rive.bpp.msg7b': 'Ugh.. ok.. but lets just have a meeting where we adjust everything together to save time',
    'rive.bpp.sven': "Is what you'd say if anyone had asked you to do it - luckily I'm doing it already",

    // rive-the-good-way.md
    'rive.good.blurredH1': "3. I Have Enough On My Plate Right Now!",
    'rive.good.msg1': 'I made this thing in Rive.<br>It has an input boolean and this event',
    'rive.good.msg2': "I'll wire it up in the app",

    // rive-performance.md
    'rive.perf.h1': '4. This Would Hurt Performance!',
    'rive.perf.loadingtimes': '- Loadingtimes?',
    'rive.perf.loadingtimesDetail': '         - proprietary .riv binary format (small & fast to process)',
    'rive.perf.execution': '- Execution?',
    'rive.perf.executionDetail1': '         - "Canvas" only (in web). Detached from our Browsers complex render-pipeline',
    'rive.perf.executionDetail2': "         - Rives own efficient low level render engine (C++)",

    // rive-resolution.md
    'rive.res.h1': 'Thank You For Your Attention!',
    'rive.res.linkLabel': ' Link to this presentation:',
    'rive.res.linksLabel': 'a<br>d<br>d<br>i<br>t<br>i<br>o<br>n<br>a<br>l<br><br>l<br>i<br>n<br>k<br>s',

    // js-animations.md
    'js.domClasses': '- Manipulating dom classes',
    'js.thirdParty': '- Third Party Libraries (e.g. Motion.dev)',

    // js-animations-2.md
    'js2.domClasses': '- Manipulating dom classes',
    'js2.thirdParty': '- Third Party Libraries (e.g. Motion.dev)',

    // capabilities-resolved.md
    'capRes.h1': "2. I Don't Have The Capabilities!",
    'capRes.h1Dont': "Don't",

    // rive-mouse-follow.md
    'rive.mouse.stealBubble': 'Steal like an artist 😎',
  },
  de: {
    // slides.md - title slide
    'title.heading': 'Deine UI ist tot',
    'title.subtitle': 'Von Devs für Devs',

    // reasons-against.md - list items
    'reasons.item1': 'Das Brauchen Wir Nicht!',
    'reasons.item2': 'Ich Hab Nicht Die Fähigkeiten!',
    'capRes.w1': 'Ich',
    'capRes.w2': 'Nicht',
    'capRes.w3': 'Hab',
    'capRes.w4': 'Die',
    'capRes.w5': 'Fähigkeiten!',
    'reasons.item3': 'Das Schadet Der Performance!',
    'reasons.item4': 'Ich Hab Gerade Genug Um Die Ohren!',

    // reasons-against.md - h1
    'reasons.h1': '1. Wir Brauchen Das Nicht!',

    // capabilities-overview.md - speech bubbles (long form)
    'reasons.long2': '2. Ich Hab Nicht Die Fähigkeiten!',
    'reasons.long3': '3. Ich Hab Genug Um Die Ohren!',
    'reasons.long4': '4. Das Schadet Der Performance!',

    // capabilities-overview.md - speech bubbles (short form)
    'reasons.short3': '3. Zu Viel Auf Dem Teller',

    // we-dont-need-this.md - speech bubbles
    'wdnt.shiny': 'Glänzend 🤩',
    'wdnt.error': 'Fehler 🤬',
    'wdnt.attention': 'Aufmerksamkeit bitte 💁🏼‍♂️',

    // performance-overview.md
    'perf.overview.bubble': 'Aber was ist mit',
    'perf.overview.h1': '4. Das Schadet Der Performance!',

    // performance-pipeline.md - style section
    'perf.pipe.selectorMatching': 'Gleicht CSS-Selektoren mit DOM-Elementen ab, um festzustellen, welche Regeln gelten.',
    'perf.pipe.cascadeResolution': 'Löst Konflikte mithilfe von Spezifizität, Quellreihenfolge und !important auf.',
    'perf.pipe.boxGeneration': 'Erstellt Layout-Boxen für jeden Render-Tree-Knoten (block, inline, flex, grid).',
    'perf.pipe.geometryCalc': 'Berechnet rekursiv Breite und Höhe, oft abgeleitet von Kindelementen oder Inhalt.',
    'perf.pipe.coordAssign': 'Weist jeder Box präzise Gleitkomma-x/y-Positionen zu.',
    'perf.pipe.identifyLayers': 'Identifiziert Elemente im Render-Tree, die in einem Layer zusammengefasst werden sollen, je nachdem wie wahrscheinlich es ist, dass sie zusammen animiert werden.',
    'perf.pipe.createTextures': 'Delegiert Aufgaben an Render-Threads. Erzeugt Texturen (echte Pixelmaps) über die GPU.',
    'perf.pipe.layerComposition': 'Alle Layer und Pixeldaten werden kombiniert, um einen Plan für den nächsten Frame zu erstellen.',
    'perf.pipe.frameDisplay': 'Die Frame-Generierungsanweisung wird an den GPU-Prozess gesendet und auf dem Display gezeichnet.',
    'perf.pipe.restyleReflow': 'Styles oder Elemente erstellen/löschen.',

    // performance-pipeline.md - pointer hints
    'perf.pipe.hintColorize': 'hover zum Einfärben',
    'perf.pipe.hintHeight': 'klick zum Vergrößern',
    'perf.pipe.hintPadding': 'klick zum Erhöhen des Paddings',
    'perf.pipe.hintScale': 'hover zum Skalieren',
    'perf.pipe.hintMargins': 'hover über Boxen um deren x-margins zu erhöhen',

    // performance-naive-contract.md
    'perf.contract.label': 'VERTRAG: Animationen dürfen nur enthalten:',
    'perf.contract.newsTicker': 'ALLE PROBLEME GELÖST',

    // performance-resolution.md
    'perf.res.bubble': 'Also... was ist <span class="font-bold">mit</span>',
    'perf.res.h1': '4. Das Schadet Der Performance!',
    'perf.res.dontGeneralize': '- Verallgemeiner die Antwort nicht',
    'perf.res.bestPractices': '- Best Practices können helfen (transform & opacity Animationen)',
    'perf.res.measureIt': '- Miss es!!!',

    // rive-introduction.md
    'rive.intro.whatIs': 'Was Ist',

    // rive-capabilities.md
    'rive.cap.h1': '3. Ich Hab Genug Um Die Ohren!',
    'rive.cap.bubble': 'Das musst du gar nicht<br>Ich mach das selbst!',
    'rive.cap.blurredH1': '2. Ich Hab Nicht Die Fähigkeiten!',

    // rive-bad-ping-pong.md
    'rive.bpp.h1': '3. Ich Hab Genug Um Die Ohren!',
    'rive.bpp.msg1': 'Ich hab das in Figma gemacht',
    'rive.bpp.msg2': 'Ok. Ich mach das',
    'rive.bpp.msg3': 'Das soll animiert werden. Ich hab hier eine Vorschau in Aftereffects gemacht ^^',
    'rive.bpp.msg4': 'Hier ist was ich gemacht hab. Es ist nicht <b>genau</b> das was du dir vorgestellt hast, aber ziemlich nah dran',
    'rive.bpp.msg5a': 'Ist ok... glaub ich...',
    'rive.bpp.msg5b': 'Aber können wir das nochmal verbessern?',
    'rive.bpp.msg6': 'Warte, ich bin gerade an was anderem...',
    'rive.bpp.msg7a': 'Ok schauen wir mal...',
    'rive.bpp.msg7b': 'Ugh.. ok.. aber lass uns einfach ein Meeting machen wo wir alles zusammen anpassen um Zeit zu sparen',
    'rive.bpp.sven': 'Das wärst du sagen wenn dich jemand gebeten hätte - zum Glück mach ich das schon',

    // rive-the-good-way.md
    'rive.good.blurredH1': '3. Ich Hab Genug Um Die Ohren!',
    'rive.good.msg1': 'Ich hab das in Rive gemacht.<br>Es hat einen Boolean Input und dieses Event',
    'rive.good.msg2': 'Ich verbind das in der App',

    // rive-performance.md
    'rive.perf.h1': '4. Das Schadet Der Performance!',
    'rive.perf.loadingtimes': '- Ladezeiten?',
    'rive.perf.loadingtimesDetail': '         - proprietäres .riv Binärformat (klein & schnell zu verarbeiten)',
    'rive.perf.execution': '- Ausführung?',
    'rive.perf.executionDetail1': '         - "Canvas" only (im Web). Losgelöst von der komplexen render-pipeline des Browsers',
    'rive.perf.executionDetail2': '         - Rives eigene effiziente Low-Level Render-Engine (C++)',

    // rive-resolution.md
    'rive.res.h1': 'Danke Für Eure Aufmerksamkeit!',
    'rive.res.linkLabel': ' Link zu dieser Präsentation:',
    'rive.res.linksLabel': 'z<br>u<br>s<br>ä<br>t<br>z<br>l<br>i<br>c<br>h<br>e<br><br>L<br>i<br>n<br>k<br>s',

    // js-animations.md
    'js.domClasses': '- DOM-Klassen manipulieren',
    'js.thirdParty': '- Drittanbieter-Bibliotheken (z.B. Motion.dev)',

    // js-animations-2.md
    'js2.domClasses': '- DOM-Klassen manipulieren',
    'js2.thirdParty': '- Drittanbieter-Bibliotheken (z.B. Motion.dev)',

    // capabilities-resolved.md
    'capRes.h1': '2. Ich Hab Nicht Die Fähigkeiten!',
    'capRes.h1Dont': "Don't",

    // rive-mouse-follow.md
    'rive.mouse.stealBubble': 'Klau wie ein Künstler 😎',
  },
}

export function useI18n() {
  const t = (key: string): string => translations[lang][key] ?? translations.en[key] ?? key
  return { t }
}
