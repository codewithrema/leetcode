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
    if (i === 0) {
      return SYMBOL_MAP[cur];
    }

    if (SYMBOL_LIST.indexOf(arr[i - 1]) >= SYMBOL_LIST.indexOf(cur)) {
      return acc + SYMBOL_MAP[cur];
    } else {
      return acc - SYMBOL_MAP[arr[i - 1]] * 2 + SYMBOL_MAP[cur];
    }
  }, 0);
}