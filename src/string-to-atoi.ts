/* 2 	String to Integer (atoi)
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 * The algorithm for myAtoi(string s) is as follows:
 * 1. Read in and ignore any leading whitespace.
 * 2. Check if the next character (if not already at the end of the string) is '-' or '+'.
 *    - If so, read this character in and remember it as a sign indicator.
 *    - If neither, assume the sign is positive.
 * 3. Read in next the characters until the next non-digit character or the end of the input is reached.
 *    - The rest of your string is assumed to be a valid integer.
 * 4. Convert these digits into an integer (i.e., "123" -> 123, "0032" -> 32).
 * 5. If no digits were read, then the integer is 0.
 * 6. The integer is in the range [-231, 231 - 1]. If the integer is out of the range, return clamped value:
 *    - If the integer is less than -231, return -231.
 *    - If the integer is greater than 231 - 1, return 231 - 1.
 */

export function stringToAtoi(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  let sign = 1;
  let index = 0;

  if (trimmed[0] === "-") {
    sign = -1;
    index++;
  } else if (trimmed[0] === "+") {
    index++;
  }

  let result = 0;
  while (index < trimmed.length && isDigit(trimmed[index])) {
    const digit = trimmed.charCodeAt(index) - "0".charCodeAt(0);
    result = result * 10 + digit;
    index++;
  }

  result *= sign;

  // Clamp the result to the range [-2^31, 2^31 - 1]
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
}

function isDigit(char: string): boolean {
  return char >= "0" && char <= "9";
}

export function stringToAtoiWithRegex(s: string): number {
  const trimmed = s.trim();
  const match = trimmed.match(/^([+-]?)(\d+)/);
  if (!match) return 0;

  const sign = match[1] === "-" ? -1 : 1;
  const numStr = match[2];
  let result = parseInt(numStr, 10) * sign;

  // Clamp the result to the range [-2^31, 2^31 - 1]
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
}

export function stringToAtoiWithParseInt(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  const result = parseInt(trimmed, 10);

  // Clamp the result to the range [-2^31, 2^31 - 1]
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
}

export function stringToAtoiWithManualParsing(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  let sign = 1;
  let index = 0;

  if (trimmed[0] === "-") {
    sign = -1;
    index++;
  } else if (trimmed[0] === "+") {
    index++;
  }

  let result = 0;
  while (index < trimmed.length && isDigit(trimmed[index])) {
    const digit = trimmed.charCodeAt(index) - "0".charCodeAt(0);
    result = result * 10 + digit;
    index++;
  }

  result *= sign;

  // Clamp the result to the range [-2^31, 2^31 - 1]
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
}
export function stringToAtoiWithBigInt(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  let sign = 1;
  let index = 0;

  if (trimmed[0] === "-") {
    sign = -1;
    index++;
  } else if (trimmed[0] === "+") {
    index++;
  }

  let result = BigInt(0);
  while (index < trimmed.length && isDigit(trimmed[index])) {
    const digit = BigInt(trimmed.charCodeAt(index) - "0".charCodeAt(0));
    result = result * BigInt(10) + digit;
    index++;
  }

  result *= BigInt(sign);

  // Clamp the result to the range [-2^31, 2^31 - 1]
  const INT_MIN = BigInt(-Math.pow(2, 31));
  const INT_MAX = BigInt(Math.pow(2, 31) - 1);

  if (result < INT_MIN) return Number(INT_MIN);
  if (result > INT_MAX) return Number(INT_MAX);

  return Number(result);
}
export function stringToAtoiWithCustomParsing(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  let sign = 1;
  let index = 0;

  if (trimmed[0] === "-") {
    sign = -1;
    index++;
  } else if (trimmed[0] === "+") {
    index++;
  }

  let result = 0;
  while (index < trimmed.length && isDigit(trimmed[index])) {
    const digit = trimmed.charCodeAt(index) - "0".charCodeAt(0);
    result = result * 10 + digit;
    index++;
  }

  result *= sign;

  // Clamp the result to the range [-2^31, 2^31 - 1]
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
}
export function stringToAtoiWithCustomClamp(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  let sign = 1;
  let index = 0;

  if (trimmed[0] === "-") {
    sign = -1;
    index++;
  } else if (trimmed[0] === "+") {
    index++;
  }

  let result = 0;
  while (index < trimmed.length && isDigit(trimmed[index])) {
    const digit = trimmed.charCodeAt(index) - "0".charCodeAt(0);
    result = result * 10 + digit;
    index++;
  }

  result *= sign;

  // Custom clamp logic
  if (result < -2147483648) return -2147483648;
  if (result > 2147483647) return 2147483647;

  return result;
}
export function stringToAtoiWithCustomLogic(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  let sign = 1;
  let index = 0;

  if (trimmed[0] === "-") {
    sign = -1;
    index++;
  } else if (trimmed[0] === "+") {
    index++;
  }

  let result = 0;
  while (index < trimmed.length && isDigit(trimmed[index])) {
    const digit = trimmed.charCodeAt(index) - "0".charCodeAt(0);
    result = result * 10 + digit;
    index++;
  }

  result *= sign;

  // Custom logic for clamping
  if (result < -2147483648) return -2147483648;
  if (result > 2147483647) return 2147483647;

  return result;
}
export function stringToAtoiWithCustomParsingAndClamp(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  let sign = 1;
  let index = 0;

  if (trimmed[0] === "-") {
    sign = -1;
    index++;
  } else if (trimmed[0] === "+") {
    index++;
  }

  let result = 0;
  while (index < trimmed.length && isDigit(trimmed[index])) {
    const digit = trimmed.charCodeAt(index) - "0".charCodeAt(0);
    result = result * 10 + digit;
    index++;
  }

  result *= sign;

  // Custom clamp logic
  if (result < -2147483648) return -2147483648;
  if (result > 2147483647) return 2147483647;

  return result;
}
export function stringToAtoiWithCustomClampAndLogic(s: string): number {
  const trimmed = s.trim();
  if (trimmed.length === 0) return 0;

  let sign = 1;
  let index = 0;

  if (trimmed[0] === "-") {
    sign = -1;
    index++;
  } else if (trimmed[0] === "+") {
    index++;
  }

  let result = 0;
  while (index < trimmed.length && isDigit(trimmed[index])) {
    const digit = trimmed.charCodeAt(index) - "0".charCodeAt(0);
    result = result * 10 + digit;
    index++;
  }

  result *= sign;

  // Custom clamp logic
  if (result < -2147483648) return -2147483648;
  if (result > 2147483647) return 2147483647;

  return result;
}
