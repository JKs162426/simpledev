# Reporte diario: Día 6, Preparación de la demo grabada

## 1. Día trabajado

**Miércoles 11 de noviembre de 2026, Día 6 de Builders Week.**
Objetivo: dejar todo listo para grabar el video de 2 a 3 minutos del reto *Demo Recording*, con la URL de Vercel visible.

## 2. Cambios realizados

- **`docs/guion-demo.md`** (nuevo): guion de la demo, con una lista de preparación, lo que se dice y se hace en cada parte, con tiempos, y los pasos para después de grabar.
- **Este reporte**: `reportes/2026-11-11-dia-6-guion-demo.md`.
- **Trello**: comentario en la tarjeta *🎬 Day 6 — Grabación de demo (opcional)*. La tarjeta sigue abierta porque falta grabar el video.
- **Sin cambios en el código de la app.**

## 3. Por qué se realizaron

- La tarjeta del Día 6 pide un video corto con la URL visible. La grabación la tiene que hacer el dueño, con su voz y su pantalla. Lo que sí se podía adelantar era el guion, para grabarlo de una sola vez y sin improvisar.
- El guion usa **los textos exactos de la pantalla** ("▶ Ejecutar", "Límite: 5", "El bucle dio 3 vueltas: de 0 a 2"), sacados del código. Así lo que se dice coincide con lo que se ve.
- La demo final es mañana (jueves 12). Si el video se graba hoy, queda un día de margen.

## 4. Cómo funciona

El guion sigue el orden de la página, que es el mismo de la app: **Entiende → Prueba → Comprueba**.

- **Paso 1 (30 s):** se explican las tres partes del `for` usando los colores que la app ya les da.
- **Paso 2 (50 s):** es el momento más fuerte de la demo. Se muestran tres límites: 3 (el ejemplo base), 5 (la pregunta del guion original: "¿qué pasa si cambias el 3 por un 5?") y 0 (el caso que más confunde).
- **Paso 3 (50 s):** se responde mal a propósito la primera pregunta, para mostrar el feedback en rojo y verde y la explicación.
- **Cierre (20 s):** el stack, la accesibilidad y la URL.

La preparación incluye recargar la página antes de grabar: el estado de la app vive en la memoria del navegador, así que recargar deja la consola y el quiz como nuevos.

## 5. Cómo fluyen los datos

No hubo cambios de datos. Lo que el video va a mostrar:

```
clic en ▶ Ejecutar        ->  setEjecutado(true)    ->  ejecutarFor(3) = [0, 1, 2]  ->  consola + resumenVueltas(3)
clic en + (hasta 5)       ->  cambiarLimite(5)      ->  ejecutarFor(5) = [0..4]     ->  consola se actualiza sola
clic en − (hasta 0)       ->  cambiarLimite(0)      ->  ejecutarFor(0) = []         ->  "(no se mostró nada)"
clic en opción del quiz   ->  elegir(i)             ->  rojo / verde + explicación (aria-live)
```

## 6. Sugerencias para mejorar

Para antes de la demo de mañana, en orden de importancia:

- **Hacer público el repo** (2 min, *Settings → Change visibility*). Lo confirmé hoy: sigue **privado**, así que el link "Repo" que verán los jueces da 404.
- **Completar el registro de uso de IA** (15 min). La tarjeta de la demo lo pide antes de entregar.
- **Reemplazar el `README.md`** (20 min). Sigue siendo el texto de la plantilla de Vite. Es lo primero que ven los jueces al abrir el repo.
- **Publicar el post del Día 5** (2 min). La tarjeta venció ayer (10 de nov, 6:00 PM, hora de Mountain) y el texto tiene `[link de Vercel]`: hay que cambiarlo por https://simpledev-ten.vercel.app.
- **Tests de `ejecutarFor` y `resumenVueltas`** con Vitest (30 min). Siguen sin tests; el caso del límite 0 que sale en el video sería un buen primer test.

## 7. Pruebas hechas

| Prueba | Resultado |
|---|---|
| `curl` a https://simpledev-ten.vercel.app | ✅ `200` en 0.62 s; título "SimpleDev — Aprende el bucle for" |
| Los textos del guion contra el código (`App.tsx`, `ExplicacionFor.tsx`, `EjemploFor.tsx`, `Quiz.tsx`, `preguntasQuiz.ts`, `ejecutarFor.ts`) | ✅ coinciden |
| Visibilidad del repo (`gh repo view`) | ⚠️ `PRIVATE` |

**Lo que no se probó y por qué:**

- **El recorrido completo en un navegador real:** no hay navegador disponible desde la terminal. El ensayo antes de grabar sirve como esa prueba.
- **Lint y build:** no se corrieron porque hoy no cambió el código; solo se agregaron documentos en Markdown.

## 8. Valor agregado

- **El caso del límite 0** quedó en el guion porque es justo donde la app enseña algo que un tutorial normal no muestra: un `for` puede no correr ni una vez. Vale la pena destacarlo también ante los jueces.
- **El guion sirve dos veces:** la misma estructura (presentación, 3 pasos, cierre) funciona para la demo en vivo de mañana si no da tiempo de grabar.
- **Riesgo para la demo:** el repo privado. Es el único pendiente que puede hacer que un juez no vea el código, y se resuelve en 2 minutos.
