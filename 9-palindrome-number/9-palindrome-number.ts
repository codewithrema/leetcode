function isPalindrome(x: number): boolean {
  const arr = [...x.toString()];

  return arr.join("") === arr.reverse().join("");
}