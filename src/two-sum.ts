/* Given an array of integers, and a target number,
    this function returns the indices of the two numbers such that they add up to the target.
    If no such numbers exist, it returns an empty array.
    Example:
    Input: [2, 7, 11, 15], target = 9
    Output: [0, 1]

*/

export function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
}
export function twoSumUsingMap(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}
export function twoSumUsingForEach(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
}
export function twoSumUsingFilter(nums: number[], target: number): number[] {
  const indices: number[] = [];
  nums.forEach((num, index) => {
    const complement = target - num;
    const complementIndex = nums.indexOf(complement);
    if (complementIndex !== -1 && complementIndex !== index) {
      indices.push(index, complementIndex);
    }
  });
  return indices.length > 0 ? indices.slice(0, 2) : [];
}
export function twoSumUsingReduce(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  return nums.reduce<number[]>((acc, num, index) => {
    if (acc.length > 0) return acc; // If we already found a pair, skip further processing
    const complement = target - num;
    if (numMap[complement] !== undefined) {
      return [numMap[complement], index];
    }
    numMap[num] = index;
    return acc;
  }, []);
}
export function twoSumUsingWhile(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  let i = 0;
  while (i < nums.length) {
    const num = nums[i];
    const complement = target - num;
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[num] = i;
    i++;
  }
  return [];
}
export function twoSumUsingForOf(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  for (const [index, num] of nums.entries()) {
    const complement = target - num;
    if (numMap[complement] !== undefined) {
      return [numMap[complement], index];
    }
    numMap[num] = index;
  }
  return [];
}
export function twoSumUsingForIn(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  for (const index in nums) {
    const num = nums[index];
    const complement = target - num;
    if (numMap[complement] !== undefined) {
      return [numMap[complement], parseInt(index, 10)];
    }
    numMap[num] = parseInt(index, 10);
  }
  return [];
}
export function twoSumUsingFind(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  let result: number[] = [];
  nums.find((num, index) => {
    const complement = target - num;
    if (numMap[complement] !== undefined) {
      result = [numMap[complement], index];
      return true;
    }
    numMap[num] = index;
    return false;
  });
  return result;
}
