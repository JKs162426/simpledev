// Corre un bucle for de verdad y guarda cada valor de i en una lista.
export function ejecutarFor(limite: number): number[] {
  const salida: number[] = []
  for (let i = 0; i < limite; i++) {
    salida.push(i)
  }
  return salida
}
