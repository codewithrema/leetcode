function isPalindrome(x: number): boolean {
  const arr = [...`${x}`];

  return arr.join("") === arr.reverse().join("");
}