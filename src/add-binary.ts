/*
 * Given two binary strings a and b, return their sum as a binary string.
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */

export function addBinary(a: string, b: string): string {
  let carry = 0;
  let result = "";
  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    const bitA = a.length - 1 - i >= 0 ? parseInt(a[a.length - 1 - i], 10) : 0;
    const bitB = b.length - 1 - i >= 0 ? parseInt(b[b.length - 1 - i], 10) : 0;

    const sum = bitA + bitB + carry;
    result = (sum % 2).toString() + result;
    carry = Math.floor(sum / 2);
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
}
