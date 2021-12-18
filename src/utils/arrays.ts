export function random(elements: unknown[]): unknown[] {
  return elements
    .map((value) => ({ value, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .map((obj) => obj.value);
}
