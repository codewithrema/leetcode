function twoSum(nums: number[], target: number): number[] {
  let addends = [-1, -1];

  [...nums].forEach((num, i, arr) => {
    const ans = arr.indexOf(target - num, i + 1);

    if (ans !== -1) {
      addends = [i, ans];
      arr.splice(1);
    }
  });

  return addends;
}