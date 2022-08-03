const SYMBOL_MAP: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const SYMBOL_LIST = Object.keys(SYMBOL_MAP);

function romanToInt(s: string): number {
  return [...s].reduce((acc, cur, i, arr) => {
    if (
      !arr[i + 1] ||
      SYMBOL_LIST.indexOf(cur) >= SYMBOL_LIST.indexOf(arr[i + 1])
    ) {
      return acc + SYMBOL_MAP[cur];
    }

    return acc - SYMBOL_MAP[cur];
  }, 0);
}