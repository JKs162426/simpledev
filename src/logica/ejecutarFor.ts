// Corre un bucle for de verdad y guarda cada valor de i en una lista.
export function ejecutarFor(limite: number): number[] {
  const salida: number[] = []
  for (let i = 0; i < limite; i++) {
    salida.push(i)
  }
  return salida
}

// Explica en una frase cuántas vueltas dio el bucle con ese límite.
export function resumenVueltas(limite: number): string {
  if (limite === 0) {
    return 'El bucle no dio ninguna vuelta: 0 no es menor que 0.'
  }
  if (limite === 1) {
    return 'El bucle dio 1 vuelta: solo el 0.'
  }
  return `El bucle dio ${limite} vueltas: de 0 a ${limite - 1}.`
}
