export type Pregunta = {
  enunciado: string
  codigo: string
  opciones: string[]
  // Posición de la opción correcta dentro de `opciones` (empieza en 0).
  correcta: number
  // Se muestra después de responder: explica por qué esa es la respuesta.
  explicacion: string
}

export const PREGUNTAS: Pregunta[] = [
  {
    enunciado: '¿Qué muestra este código en la consola?',
    codigo: `for (let i = 0; i < 3; i++) {
  console.log(i)
}`,
    opciones: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3'],
    correcta: 1,
    explicacion:
      'El contador i empieza en 0 y suma 1 en cada vuelta. Cuando llega a 3, el bucle se detiene porque 3 no es menor que 3. Por eso el 3 nunca se muestra.',
  },
  {
    enunciado: 'Si cambias el 3 por un 5, ¿cuántas veces se repite el bucle?',
    codigo: `for (let i = 0; i < 5; i++) {
  console.log(i)
}`,
    opciones: ['4 veces', '6 veces', '5 veces'],
    correcta: 2,
    explicacion:
      'El contador i toma los valores 0, 1, 2, 3 y 4: son 5 vueltas. Si i empieza en 0 y la condición es i < 5, el bucle se repite 5 veces.',
  },
  {
    enunciado: 'A este for le falta el i++. ¿Qué pasa al ejecutarlo?',
    codigo: `for (let i = 0; i < 3; ) {
  console.log(i)
}`,
    opciones: [
      'Muestra 0 una y otra vez, y nunca termina',
      'Muestra 0, 1, 2 y termina',
      'No muestra nada',
    ],
    correcta: 0,
    explicacion:
      'Sin i++, i se queda en 0 para siempre. Como 0 siempre es menor que 3, la condición nunca deja de cumplirse. A esto se le llama bucle infinito.',
  },
]
