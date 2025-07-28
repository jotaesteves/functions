/* Minimum Window Substring
  Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
  Example:
  Input: s = "ADOBECODEBANC", t = "ABC"
  Output: "BANC"
*/

export function minWindowSubstring(s: string, t: string): string {
  if (typeof s !== "string" || typeof t !== "string" || s.length === 0 || t.length === 0) return "";

  const charCountT: { [key: string]: number } = {};
  for (const char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let required = Object.keys(charCountT).length;
  let formed = 0;
  const charCountWindow: { [key: string]: number } = {};

  let minLength = Infinity;
  let minLeft = -1;

  while (right < s.length) {
    const charRight = s[right];
    charCountWindow[charRight] = (charCountWindow[charRight] || 0) + 1;

    if (charCountT[charRight] && charCountWindow[charRight] === charCountT[charRight]) {
      formed++;
    }

    while (left <= right && formed === required) {
      const charLeft = s[left];
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }

      charCountWindow[charLeft]--;
      if (charCountT[charLeft] && charCountWindow[charLeft] < charCountT[charLeft]) {
        formed--;
      }
      left++;
    }
    right++;
  }

  return minLeft === -1 ? "" : s.substring(minLeft, minLeft + minLength);
}

export function minWindowSubstringOptimized(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) return "";

  const charCountT: { [key: string]: number } = {};
  for (const char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let required = Object.keys(charCountT).length;
  let formed = 0;
  const charCountWindow: { [key: string]: number } = {};

  let minLength = Infinity;
  let minLeft = -1;

  while (right < s.length) {
    const charRight = s[right];
    charCountWindow[charRight] = (charCountWindow[charRight] || 0) + 1;

    if (charCountT[charRight] && charCountWindow[charRight] === charCountT[charRight]) {
      formed++;
    }

    while (left <= right && formed === required) {
      const charLeft = s[left];
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }

      charCountWindow[charLeft]--;
      if (charCountT[charLeft] && charCountWindow[charLeft] < charCountT[charLeft]) {
        formed--;
      }
      left++;
    }
    right++;
  }

  return minLeft === -1 ? "" : s.substring(minLeft, minLeft + minLength);
}

export function minWindowSubstringWithSlidingWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) return "";

  const charCountT: { [key: string]: number } = {};
  for (const char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let required = Object.keys(charCountT).length;
  let formed = 0;
  const charCountWindow: { [key: string]: number } = {};

  let minLength = Infinity;
  let minLeft = -1;

  while (right < s.length) {
    const charRight = s[right];
    charCountWindow[charRight] = (charCountWindow[charRight] || 0) + 1;

    if (charCountT[charRight] && charCountWindow[charRight] === charCountT[charRight]) {
      formed++;
    }

    while (left <= right && formed === required) {
      const charLeft = s[left];
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }

      charCountWindow[charLeft]--;
      if (charCountT[charLeft] && charCountWindow[charLeft] < charCountT[charLeft]) {
        formed--;
      }
      left++;
    }
    right++;
  }

  return minLeft === -1 ? "" : s.substring(minLeft, minLeft + minLength);
}

export function minWindowSubstringWithTwoPointers(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) return "";

  const charCountT: { [key: string]: number } = {};
  for (const char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let required = Object.keys(charCountT).length;
  let formed = 0;
  const charCountWindow: { [key: string]: number } = {};

  let minLength = Infinity;
  let minLeft = -1;

  while (right < s.length) {
    const charRight = s[right];
    charCountWindow[charRight] = (charCountWindow[charRight] || 0) + 1;

    if (charCountT[charRight] && charCountWindow[charRight] === charCountT[charRight]) {
      formed++;
    }

    while (left <= right && formed === required) {
      const charLeft = s[left];
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }

      charCountWindow[charLeft]--;
      if (charCountT[charLeft] && charCountWindow[charLeft] < charCountT[charLeft]) {
        formed--;
      }
      left++;
    }
    right++;
  }

  return minLeft === -1 ? "" : s.substring(minLeft, minLeft + minLength);
}
