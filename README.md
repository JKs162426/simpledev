# SimpleDev

**Learn the `for` loop in Spanish, in three steps.**

Live: **https://simpledev-ten.vercel.app**

SimpleDev is a one-page web app that teaches a single programming idea, the `for` loop, to people who have never written code. Everything on the page is in plain Spanish, and nothing needs to be installed.

Built for **MLH Global Hack Week: Builders Week** (November 6–12, 2026).

## Why it exists

Most beginner tutorials are in English and try to teach many things at once. A Spanish speaker who has never programmed often stops at the first loop, because the code looks like magic: why does `i < 3` print `0, 1, 2` and not `1, 2, 3`?

SimpleDev focuses on that one moment. It explains the three parts of a `for` loop, lets you change the loop and see the result right away, and checks what you understood. The goal is that someone can go from "I don't know what a loop is" to "I can predict what this loop prints" in about five minutes.

## What's on the page

1. **Understand.** A short explanation of what a loop is for, with each part of the `for` (start, condition, increment) in its own highlighter color. The same color appears in the code and in the list that explains it.
2. **Try it.** A live example. Press **Ejecutar** to run a real `for` loop in the browser, then change the limit with **−** and **+** (from 0 to 10). The console updates at once, and a sentence says how many times the loop ran.
3. **Check.** A 3-question quiz. Each answer is marked right or wrong right away, with an explanation of why. After the third question you see your result (for example, "2 de 3 correctas") and a suggestion, and you can try again.

The examples use TypeScript, but the idea is the same in almost any programming language.

## Accessibility

- The console and the quiz feedback are announced by screen readers (`aria-live`).
- The **−** and **+** buttons have spoken labels, and each set of quiz answers is a labeled group.
- After **Volver a intentar**, focus returns to the quiz title, so keyboard users don't get lost.
- Button transitions are turned off when the system asks for reduced motion.

## Run it locally

You need Node.js 20.19+ or 22.12+ (required by Vite 8).

```bash
npm install
npm run dev      # http://localhost:5173
```

Other commands:

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run build`   | Type-checks with `tsc -b`, then builds into `dist/` |
| `npm run lint`    | Runs oxlint                                         |
| `npm run preview` | Serves the build locally                            |

The app has no backend, no database and no environment variables. All state lives in the browser and resets when you reload.

## How the code is organized

```
src/
  App.tsx                    The page: header and the three steps
  components/
    ExplicacionFor.tsx       Step 1: the explanation
    EjemploFor.tsx           Step 2: the editable example
    Quiz.tsx                 Step 3: the quiz and its final result
    PreguntaQuiz.tsx         One quiz question and its feedback
  datos/preguntasQuiz.ts     The quiz questions, answers and explanations
  logica/ejecutarFor.ts      Runs the real for loop and describes the result
```

The loop logic lives apart from the components, in plain functions, so it can be tested on its own.

## Tech stack

React 19, TypeScript, Vite 8 and oxlint, deployed on Vercel. Every push to `main` deploys to production.

## Use of AI

This project was built with help from Claude (Anthropic) as a coding assistant. What it did and what the owner decided is listed in [docs/ai-usage.md](docs/ai-usage.md).

## Author

Jesus Figueroa ([@JKs162426](https://github.com/JKs162426))
