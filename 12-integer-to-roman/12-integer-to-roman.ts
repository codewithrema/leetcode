const SYMBOL_MAP: Record<string, string> = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

function intToRoman(num: number): string {
  let ans = "";

  Object.keys(SYMBOL_MAP)
    .map(Number)
    .reverse()
    .forEach((key, i, arr) => {
      if (num < key) {
        return;
      }

      if (num >= arr[i + 1] * 9 && key.toString().includes("5")) {
        ans = `${ans}${SYMBOL_MAP[arr[i + 1]]}${SYMBOL_MAP[arr[i - 1]]}`;
        num -= 9 * arr[i + 1];
        return;
      }

      const x = Math.floor(num / key);

      if (x === 4) {
        ans = `${ans}${SYMBOL_MAP[key]}${SYMBOL_MAP[arr[i - 1]]}`;
        num -= 4 * key;
        return;
      }

      Array(x)
        .fill("")
        .forEach(() => (ans = `${ans}${SYMBOL_MAP[key]}`));

      num -= key * x;
    });

  return ans;
}