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
  let tmp = num;
  let ans = "";

  Object.keys(SYMBOL_MAP)
    .map(Number)
    .reverse()
    .forEach((key, i, arr) => {
      if (tmp < key) {
        return;
      }

      if (tmp >= arr[i + 1] * 9 && key.toString().includes("5")) {
        ans = `${ans}${SYMBOL_MAP[arr[i + 1]]}${SYMBOL_MAP[arr[i - 1]]}`;
        tmp -= arr[i + 1] * 9;
        return;
      }

      const x = Math.floor(tmp / key);

      if (x === 4) {
        ans = `${ans}${SYMBOL_MAP[key]}${SYMBOL_MAP[arr[i - 1]]}`;
        tmp -= key * 4;
        return;
      }

      Array(x)
        .fill("")
        .forEach(() => (ans = `${ans}${SYMBOL_MAP[key]}`));

      tmp -= key * x;
    });

  return ans;
}