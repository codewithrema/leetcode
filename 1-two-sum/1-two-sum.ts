function twoSum(nums: number[], target: number): number[] {
  const [addend1, addend2] = nums.reduce<number[]>((acc, cur, i, arr) => {
    if (acc.length === 2) {
      return acc;
    }

    const [ans] = arr.slice(i + 1).filter((num) => {
      return cur + num === target;
    });

    return typeof ans === "number" ? [cur, ans] : acc;
  }, []);

  return [
    nums.indexOf(addend1),
    nums.indexOf(addend2, nums.indexOf(addend1) + 1)
  ];
}