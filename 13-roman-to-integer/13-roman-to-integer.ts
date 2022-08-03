const SYMBOL_MAP: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function romanToInt(s: string): number {
  return [...s].reduce((acc, cur, i, arr) => {
    if (
      !arr[i + 1] ||
      SYMBOL_MAP[cur] >= SYMBOL_MAP[arr[i + 1]]
    ) {
      return acc + SYMBOL_MAP[cur];
    }

    return acc - SYMBOL_MAP[cur];
  }, 0);
}