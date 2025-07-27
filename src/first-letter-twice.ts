/* The first letter to appear twice in a string is the first letter that
  appears more than once.
 * If no letter appears twice, return an empty string.
 * Example:
 * Input: "abca"
 * Output: "a"

 * If the input is an empty string, return an empty string.
 * Example:
 * Input: ""
 * Output: ""
*/
export function firstLetterTwice(s: string): string {
  const seen: Set<string> = new Set();
  for (const char of s) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return "";
}

export function firstLetterTwiceUsingMap(s: string): string {
  const charMap: { [key: string]: boolean } = {};
  for (const char of s) {
    if (charMap[char]) {
      return char;
    }
    charMap[char] = true;
  }
  return "";
}

export function firstLetterTwiceUsingIndexOf(s: string): string {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (s.indexOf(char, i + 1) !== -1) {
      return char;
    }
  }
  return "";
}

export function firstLetterTwiceUsingFilter(s: string): string {
  const chars = s.split("");
  const seen: Set<string> = new Set();
  for (const char of chars) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return "";
}

export function firstLetterTwiceUsingForEach(s: string): string {
  const seen: Set<string> = new Set();
  s.split("").forEach((char) => {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  });
  return "";
}

export function firstLetterTwiceUsingReduce(s: string): string {
  const seen: Set<string> = new Set();
  return s.split("").reduce((acc, char) => {
    if (acc) return acc; // If already found, skip
    if (seen.has(char)) {
      return char; // Found the first letter that appears twice
    }
    seen.add(char);
    return acc; // Continue accumulating
  }, "");
}

export function firstLetterTwiceUsingForOf(s: string): string {
  const seen: Set<string> = new Set();
  for (const char of s) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return "";
}
export function firstLetterTwiceUsingForIn(s: string): string {
  const seen: Set<string> = new Set();
  for (const index in s.split("")) {
    const char = s[index];
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return "";
}

export function firstLetterTwiceUsingWhile(s: string): string {
  const seen: Set<string> = new Set();
  let i = 0;
  while (i < s.length) {
    const char = s[i];
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
    i++;
  }
  return "";
}

export function firstLetterTwiceUsingDoWhile(s: string): string {
  const seen: Set<string> = new Set();
  let i = 0;
  do {
    const char = s[i];
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
    i++;
  } while (i < s.length);
  return "";
}

export function firstLetterTwiceUsingFind(s: string): string {
  const seen: Set<string> = new Set();
  return (
    s.split("").find((char) => {
      if (seen.has(char)) {
        return true; // Found the first letter that appears twice
      }
      seen.add(char);
      return false; // Continue searching
    }) || ""
  ); // Return empty string if no letter found
}
export function firstLetterTwiceUsingMapAndFilter(s: string): string {
  const seen: Set<string> = new Set();
  return (
    s.split("").filter((char) => {
      if (seen.has(char)) {
        return true; // Found the first letter that appears twice
      }
      seen.add(char);
      return false; // Continue filtering
    })[0] || ""
  ); // Return empty string if no letter found
}
export function firstLetterTwiceUsingMapAndReduce(s: string): string {
  const seen: Set<string> = new Set();
  return s.split("").reduce((acc, char) => {
    if (acc) return acc; // If already found, skip
    if (seen.has(char)) {
      return char; // Found the first letter that appears twice
    }
    seen.add(char);
    return acc; // Continue accumulating
  }, "");
}
