/* This function checks if an array can be split into two parts with no repeating elements.
   It returns true if the array can be split, otherwise false.
   Example:
   Input: [1, 1, 2, 2, 3, 4]
   Output: true
*/
export function isPossibleToSplit(arr: number[]): boolean {
  let counter: { [key: number]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      counter[arr[i]]++;
    } else {
      counter[arr[i]] = 1;
    }
  }
  return Object.values(counter).every((count) => count % 2 === 0);
}

export function isSplittable(arr: number[]): boolean {
  const counter: { [key: number]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) + 1;
  }
  return Object.values(counter).every((count) => count % 2 === 0);
}
