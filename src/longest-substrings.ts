/*  Longest Substring Without Repeating Characters
  Given a string s, find the length of the longest without duplicate characters.
  Example:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
*/

export function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set<string>();
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }

  return maxLength;
}

export function lengthOfLongestSubstringSlidingWindow(s: string): number {
  const charIndexMap: { [key: string]: number } = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (charIndexMap[s[right]] !== undefined && charIndexMap[s[right]] >= left) {
      left = charIndexMap[s[right]] + 1;
    }
    charIndexMap[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

export function lengthOfLongestSubstringBruteForce(s: string): number {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const charSet = new Set<string>();
    for (let j = i; j < s.length; j++) {
      if (charSet.has(s[j])) {
        break;
      }
      charSet.add(s[j]);
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
}

export function lengthOfLongestSubstringDynamicProgramming(s: string): number {
  const dp: number[] = new Array(s.length).fill(0);
  const charIndexMap: { [key: string]: number } = {};
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (charIndexMap[s[i]] !== undefined && charIndexMap[s[i]] >= i - dp[i - 1]) {
      dp[i] = i - charIndexMap[s[i]];
    } else {
      dp[i] = (i === 0 ? 0 : dp[i - 1]) + 1;
    }
    charIndexMap[s[i]] = i;
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}
export function lengthOfLongestSubstringTwoPointers(s: string): number {
  const charSet = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
export function lengthOfLongestSubstringOptimized(s: string): number {
  const charIndexMap: { [key: string]: number } = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (charIndexMap[s[right]] !== undefined && charIndexMap[s[right]] >= left) {
      left = charIndexMap[s[right]] + 1;
    }
    charIndexMap[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
export function lengthOfLongestSubstringWithMap(s: string): number {
  const charMap: { [key: string]: number } = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (charMap[s[right]] !== undefined && charMap[s[right]] >= left) {
      left = charMap[s[right]] + 1;
    }
    charMap[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
export function lengthOfLongestSubstringWithSet(s: string): number {
  const charSet = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
