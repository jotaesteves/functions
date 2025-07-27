/* Majority Element
 * This function finds the majority element in an array, which is defined as the element that appears
 * more than n/2 times, where n is the length of the array.
 * If no such element exists, it returns -1.
 * Example:
 * Input: [2, 2, 1, 1, 1, 2, 2]
 * Output: 2
 */
export function majorityElement(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const countMap: { [key: number]: number } = {};
  const majorityCount = Math.floor(nums.length / 2);
  nums.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });
  for (const num in countMap) {
    if (countMap[num] > majorityCount) {
      return parseInt(num, 10);
    }
  }
  return -1;
}

export function majorityElementUsingDoWhile(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const countMap: { [key: number]: number } = {};
  const majorityCount = Math.floor(nums.length / 2);
  let i = 0;
  do {
    const num = nums[i];
    countMap[num] = (countMap[num] || 0) + 1;
    i++;
  } while (i < nums.length);
  for (const num in countMap) {
    if (countMap[num] > majorityCount) {
      return parseInt(num, 10);
    }
  }
  return -1;
}

export function majorityElementUsingSet(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const majorityCount = Math.floor(nums.length / 2);
  const uniqueNums = new Set(nums);
  for (const num of uniqueNums) {
    const count = nums.filter((x) => x === num).length;
    if (count > majorityCount) {
      return num;
    }
  }
  return -1;
}

export function majorityElementUsingForEach(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const countMap: { [key: number]: number } = {};
  const majorityCount = Math.floor(nums.length / 2);
  nums.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });
  for (const num in countMap) {
    if (countMap[num] > majorityCount) {
      return parseInt(num, 10);
    }
  }
  return -1;
}

export function majorityElementUsingWhile(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const countMap: { [key: number]: number } = {};
  const majorityCount = Math.floor(nums.length / 2);
  let i = 0;
  while (i < nums.length) {
    const num = nums[i];
    countMap[num] = (countMap[num] || 0) + 1;
    i++;
  }
  for (const num in countMap) {
    if (countMap[num] > majorityCount) {
      return parseInt(num, 10);
    }
  }
  return -1;
}

export function majorityElementUsingMapAndReduce(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const countMap = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {} as { [key: number]: number });
  const majorityCount = Math.floor(nums.length / 2);
  const majorityElement = Object.keys(countMap).find((key: string) => countMap[Number(key)] > majorityCount);
  return majorityElement ? parseInt(majorityElement, 10) : -1;
}

export function majorityElementUsingMapAndForEach(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const countMap: { [key: number]: number } = {};
  const majorityCount = Math.floor(nums.length / 2);
  nums.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });
  for (const num in countMap) {
    if (countMap[num] > majorityCount) {
      return parseInt(num, 10);
    }
  }
  return -1;
}
