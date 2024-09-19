export function sum(a: number, b: number) {
  return a + b;
}

export function sumArray(arr: number[]) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}
