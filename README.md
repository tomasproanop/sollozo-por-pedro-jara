# sollozo por pedro jara

A minimal, experimental web page that generates readings of **sollozo por pedro jara (estructuras para una elegía)**, a poem by Ecuadorian poet **Efraín Jara Idrovo** (1978).

## About the poem

The poem is divided into five parts, each with three distinct but equivalent versions of the same movement, numbered as a progressive scheme. It was conceived to be read "in countless combinations", provided the numeric progression of the lines is respected, the reader jumps freely, forward and backward, between the variants of each part. The result is a text that is *always different and always the same*. It can also be read straight through.

The original edition (Cuenca, Casa de la Cultura, 1978) was printed on a single wide broadsheet so the whole poem could be seen at a glance, which is what made these readings possible.

The site takes that instruction and automates it, in the spirit of Karlheinz Stockhausen's *Klavierstück XI* (1956): a score of groups the performer traverses in unpredictable order, setting tempo and dynamics anew at each arrival.

## Features

### Generative reading
- **Combinatorial mode** — one line per position, chosen at random among the three variants of each part.
- **Adjacent-fields mode** — modeled directly on *Klavierstück XI*: after drawing from variant *v*, the next draw comes from a neighboring variant (*v±1*), so the walk drifts through the fields instead of teleporting.
- **Straight-through mode** — all fifteen subsections in sequence, no chance.

### Parameters (the "reading score")
| Parameter | Effect |
|---|---|
| **seed** | A number feeding a deterministic PRNG ([mulberry32](https://github.com/bryc/code/blob/master/js/prng/mulberry32.md)). The same seed always produces the same reading — write it down to repeat or share a version. Empty = truly random. |
| **density** | How many variants (1–3) are in rotation per part. Fewer = sparser, thinner texture. |
| **tempo** | Milliseconds per line. Slow settings turn the reveal into a meditation; 0 = instant reveal of the whole reading. |
| **path** | Annotate each line with the variant it came from (e.g. `II·3`) to trace the walk. |

The seed produces the **same sequence in both languages** — switching language replays the equivalent reading line by line, in keeping with the poem's spirit.

### Broadside view (print score)
A second tab lays out all fifteen subsections in a three-column grid with their line numbers preserved, recreating the single-sheet intention of the 1978 edition: you can follow the progression with your eyes and jump between variants yourself. A print button outputs a clean A4-landscape sheet (controls, bio and UI are excluded from printing via `@media print`).

### Language toggle
Switches the entire interface and the poem itself between the Spanish original and the English translation by **Dr. Cecilia Mafla-Bustamante** ("Weeping for Pedro Jara (Structures for an Elegy)", *ISLE: Interdisciplinary Studies in Literature and Environment* 5 no. 1, pp. 89-98, 1998).

### Dark mode
Light/dark toggle, persisted in `localStorage`, defaulting to the OS preference (`prefers-color-scheme`). The palette is rebuilt from a handful of CSS custom properties. Printing is always forced to light colors.

## Running it

No build step, no dependencies, no framework. Plain HTML/CSS/JS.

```
index.html
styles.css
script.js
```

Open `index.html` in any modern browser, or serve the folder statically:

```bash
python3 -m http.server
```

To modify the poem data, edit the `PARTES` (Spanish) and `PARTES_EN` (English) arrays at the top of `script.js`. Structure:

```js
const PARTES = [
  { num: 'I', variantes: [ [...lines v1], [...lines v2], [...lines v3] ] },
  ...
];
```

All variants within a part must have the same number of lines — the generator walks them by index. Interface strings live in the `I18N` object.

## Design

Deliberately anti-classical: heavy sans-serif lowercase title with negative tracking (echoing the poem's fused compounds like *pedrohuesosdepedernal*), monospaced metadata, oversized grey part numerals, asymmetric left-rule control panel. No imagery, the typography is the image.

## Credits

- Poem: **Efraín Jara Idrovo**, *Sollozo por Pedro Jara (Estructuras para una elegía)*, Cuenca: Casa de la Cultura, 1978.
- English translation: **Dr. Cecilia Mafla-Bustamante**, *ISLE* vol. 5, Issue 1, Pages 89-98, Oxford University Press, 1998.
- Composer referenced by the generation modes: Karlheinz Stockhausen, *Klavierstück XI* (1956).

## Live Demo
[Play with this experiment here](https://tomasproanop.github.io/sollozo-por-pedro-jara/)

