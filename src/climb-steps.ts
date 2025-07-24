/* Climb one step or two steps
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top:
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

export function climbStairs(n: number): number {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }

  return current;
}

export function climbStairsMemo(n: number, memo: Array<number> = []): number {
  if (n <= 2) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  return memo[n];
}

export function climbStairsIterative(n: number): number {
  if (n <= 2) return n;

  const dp: Array<number> = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

export function climbStairsBottomUp(n: number): number {
  if (n <= 2) return n;

  const dp: Array<number> = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

export function climbStairsTopDown(n: number, memo: Array<number> = []): number {
  if (n <= 2) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = climbStairsTopDown(n - 1, memo) + climbStairsTopDown(n - 2, memo);
  return memo[n];
}

export function climbStairsOptimized(n: number): number {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }

  return current;
}

export function climbStairsWithCache(n: number, cache: Map<number, number> = new Map()): number {
  if (n <= 2) return n;
  if (cache.has(n)) return cache.get(n)!;

  const result = climbStairsWithCache(n - 1, cache) + climbStairsWithCache(n - 2, cache);
  cache.set(n, result);
  return result;
}

export function climbStairsWithArray(n: number): number {
  if (n <= 2) return n;

  const dp: Array<number> = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

/* export function climbStairsWithRecursion(n: number): number {
  if (n <= 2) return n;
  return climbStairsWithRecursion(n - 1) + climbStairsWithRecursion(n - 2);
} */

export function climbStairsWithDynamicProgramming(n: number): number {
  if (n <= 2) return n;

  const dp: Array<number> = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

export function climbStairsWithFibonacci(n: number): number {
  if (n <= 2) return n;

  let a = 1;
  let b = 2;
  let c = 0;

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

export function climbStairsWithTabulation(n: number): number {
  if (n <= 2) return n;

  const dp: Array<number> = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

export function climbStairsWithSpaceOptimization(n: number): number {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }

  return current;
}

export function climbStairsWithMatrixExponentiation(n: number): number {
  if (n <= 2) return n;

  const matrix = [
    [1, 1],
    [1, 0],
  ];
  const result = matrixExponentiation(matrix, n - 1);

  return result[0][0];
}

function matrixExponentiation(matrix: number[][], power: number): number[][] {
  if (power === 1) return matrix;

  const half = matrixExponentiation(matrix, Math.floor(power / 2));
  const result = multiplyMatrices(half, half);

  if (power % 2 !== 0) {
    return multiplyMatrices(result, matrix);
  }

  return result;
}

function multiplyMatrices(a: number[][], b: number[][]): number[][] {
  const result: number[][] = [
    [0, 0],
    [0, 0],
  ];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return result;
}

export function climbStairsWithBinetFormula(n: number): number {
  if (n <= 2) return n;

  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;

  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
}

export function climbStairsWithDynamicArray(n: number): number {
  if (n <= 2) return n;

  const dp: Array<number> = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

export function climbStairsWithDynamicProgrammingMemo(n: number, memo: Array<number> = []): number {
  if (n <= 2) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = climbStairsWithDynamicProgrammingMemo(n - 1, memo) + climbStairsWithDynamicProgrammingMemo(n - 2, memo);
  return memo[n];
}

export function climbStairsWithDynamicProgrammingIterative(n: number): number {
  if (n <= 2) return n;

  const dp: Array<number> = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

export function climbStairsWithDynamicProgrammingOptimized(n: number): number {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }

  return current;
}

export function climbStairsWithDynamicProgrammingCache(n: number, cache: Map<number, number> = new Map()): number {
  if (n <= 2) return n;
  if (cache.has(n)) return cache.get(n)!;

  const result =
    climbStairsWithDynamicProgrammingCache(n - 1, cache) + climbStairsWithDynamicProgrammingCache(n - 2, cache);
  cache.set(n, result);
  return result;
}

/* export function climbStairsWithDynamicProgrammingArray(n: number): number {
  if (n <= 2) return n;

  const dp: Array<number> = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
} */

/* export function climbStairsWithDynamicProgrammingRecursion(n: number): number {
  if (n <= 2) return n;
  return climbStairsWithDynamicProgrammingRecursion(n - 1) + climbStairsWithDynamicProgrammingRecursion(n - 2);
} */

export function climbStairsWithDynamicProgrammingFibonacci(n: number): number {
  if (n <= 2) return n;

  let a = 1;
  let b = 2;
  let c = 0;

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}
