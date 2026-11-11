# Reporte diario: Día 5, Deploy a Vercel

## 1. Día trabajado

**Martes 10 de noviembre de 2026, Día 5 de Builders Week.**
Objetivo: publicar SimpleDev en internet con una URL pública que funcione en el teléfono y en otros navegadores.

## 2. Cambios realizados

- **Rama `main`**: pasó del commit `626fc03` (solo Día 1) al `0f988d5` (Días 1 a 4). Archivos que llegan a `main`:
  - `src/components/EjemploFor.tsx` y `src/logica/ejecutarFor.ts`: ejemplo editable (Día 2).
  - `src/components/Quiz.tsx`, `src/components/PreguntaQuiz.tsx` y `src/datos/preguntasQuiz.ts`: mini quiz (Día 3).
  - `src/App.css`, `src/index.css`, `src/App.tsx`, `src/components/ExplicacionFor.tsx`, `index.html` y `public/favicon.svg`: pulido visual y textos (Día 4).
- **Vercel**: proyecto nuevo `simpledev`, conectado al repo de GitHub, con `main` como rama de producción.
- **URL pública**: https://simpledev-ten.vercel.app
- **Trello**: el Día 5 quedó completo y con un comentario con los resultados, el Día 4 se movió a *Ready for Review* y la tarjeta de la demo final ya tiene el link y el repo.
- **Este reporte**: `reportes/2026-11-10-dia-5-deploy-vercel.md`.

## 3. Por qué se realizaron

- **Adelantar `main`**: Trello marcaba los Días 2 a 4 como terminados, pero ese trabajo estaba en tres ramas (`feature/ejemplo-editable`, `feature/mini-quiz`, `feature/pulido-visual`) que nunca se fusionaron. Si se desplegaba `main` así, el sitio mostraba solo la página del Día 1.
- **Proyecto conectado a GitHub** (y no un deploy manual desde la terminal): con la demo el jueves 12, cualquier arreglo de última hora se publica solo con hacer push a `main`, sin pasos extra.
- **Actualizar Trello**: la tarjeta de la demo pedía la URL y el repo, y el Día 4 seguía en *To Do* aunque estaba terminado.

## 4. Cómo funciona

- **Fast-forward**: las tres ramas estaban encadenadas: cada una salía de la anterior y `pulido-visual` contenía a las otras dos. Por eso `main` solo tuvo que "avanzar" hasta el último commit, sin crear un commit de fusión y sin conflictos posibles. El historial queda lineal: Día 1 → 2 → 3 → 4.
- **Deploy automático**: Vercel detecta que es un proyecto de Vite, corre `npm run build` (que primero revisa los tipos con `tsc -b` y luego genera `dist/`) y publica los archivos estáticos de `dist/`. Desde ahora, cada push a `main` repite esto solo, en unos 6 segundos.
- **La app no tiene servidor ni base de datos**: es una sola página que corre por completo en el navegador. Por eso el deploy es simple y no hay variables de entorno.

## 5. Cómo fluyen los datos

No hay datos que se guarden: todo vive en la memoria del navegador (estado de React) y se pierde al recargar.

**Ejemplo editable (Paso 2):**

```
botón − / +  ->  cambiarLimite(n)  ->  useState limite (0 a 10)
             ->  ejecutarFor(limite) corre un for real -> [0, 1, ..., n-1]
             ->  consola en pantalla + resumenVueltas(limite) ("El bucle dio 5 vueltas…")
```

**Mini quiz (Paso 3):**

```
src/datos/preguntasQuiz.ts (PREGUNTAS)  ->  Quiz  ->  PreguntaQuiz × 3
clic en opción  ->  elegir(i)  ->  useState elegida (solo cuenta la primera)
                ->  estadoOpcion(): correcta en verde / elegida mal en rojo
                ->  feedback + explicación (aria-live: lo anuncia el lector de pantalla)
```

**Deploy:**

```
git push main  ->  GitHub  ->  Vercel: npm install -> tsc -b -> vite build -> dist/  ->  simpledev-ten.vercel.app
```

## 6. Sugerencias para mejorar

- **Hacer público el repo antes de la demo** (5 min, *Settings → Change visibility*). Es privado, así que el link "Repo" de la tarjeta de la demo les da 404 a los jueces de MLH.
- **Reemplazar el `README.md`** (20 min). Todavía es el texto de la plantilla de Vite en inglés. Debería decir qué es SimpleDev, el link en vivo, cómo correrlo y el registro de uso de IA que pide la demo.
- **Completar el registro de uso de IA** (15 min). La tarjeta de la demo lo exige antes de entregar y la plantilla en *Preparation* sigue sin marcar.
- **Tests de la lógica** con Vitest (30 min). `ejecutarFor` y `resumenVueltas` son funciones puras: casos 0, 1, 3 y 10. Hoy el proyecto no tiene ningún test.
- **Borrar las 3 ramas `feature/*`** en GitHub (2 min). Ya están dentro de `main` y solo confunden.
- **Prueba en un teléfono real** (5 min). Ver *Pruebas hechas*.

## 7. Pruebas hechas

| Comando / prueba | Resultado |
|---|---|
| `npm ci` | ✅ instaló sin errores |
| `npm run lint` (oxlint) | ✅ 0 errores |
| `npm run build` (`tsc -b && vite build`) | ✅ JS 227 KB (71 KB gzip), CSS 5 KB |
| `npm audit --omit=dev` | ✅ 0 vulnerabilidades |
| Deploy en Vercel | ✅ READY en ~6 s, commit `0f988d5` |
| `curl` a la URL (escritorio) | ✅ 200 en 0.41 s |
| `curl` con User-Agent de iPhone | ✅ 200 en 0.20 s |
| HTML publicado | ✅ `lang="es"`, viewport móvil, título "SimpleDev — Aprende el bucle for" |
| JS y CSS publicados | ✅ 200; el JS es idéntico byte por byte al build local |

**Lo que no se probó y por qué:**

- **Clics reales en un navegador** (botones −/+, Ejecutar, responder el quiz): no había navegador automatizado disponible. La lógica es la misma que ya se revisó en los Días 2 y 3, y el JS publicado es idéntico al local, pero falta verlo con los ojos.
- **Teléfono real y otro navegador** (lo pide la tarjeta del Día 5): `curl` solo simula el teléfono; no revisa cómo se ve. Queda pendiente para ti.

## 8. Valor agregado

- **Riesgo evitado**: sin revisar el repo, el deploy habría publicado solo el Día 1 y la demo del jueves habría mostrado una app a medias, aunque Trello dijera que todo estaba listo. Conviene comparar Trello contra `main` antes de cada entrega: **una tarjeta marcada como lista no significa que el código esté en producción**.
- **Patrón reusable**: Glossia tiene el mismo problema (las ramas `feature/e2e-playwright` y `feature/ci`, con 12 y 15 commits fuera de `main`, aunque sus tarjetas están completas o vencidas).
- **Accesibilidad ya bien resuelta**: `aria-live="polite"` en la consola y en el feedback del quiz, `aria-label` en los botones −/+ y `role="group"` en las opciones. Vale la pena mencionarlo en la demo.
- **Seguridad**: la app no recibe datos del usuario, no hace peticiones a ningún servidor y no tiene secretos, así que la superficie de ataque es prácticamente nula.
