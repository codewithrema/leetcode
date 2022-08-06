function isPalindrome(x: number): boolean {
  const str = [...x.toString()];

  return str.join("") === str.reverse().join("");
}