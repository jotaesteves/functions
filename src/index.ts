import * as climbStepsFns from "./climb-steps";
import * as longestSubstringFns from "./longest-substrings";
import * as stringToAtoiFns from "./string-to-atoi";
import * as threeSumFns from "./three-sum";
import * as minWindowSubstringFns from "./min-window-substring";
import * as isSplittableFns from "./is-splitable";
import * as majorityElementFns from "./majority-element";
import * as firstLetterTwiceFns from "./first-letter-twice";
import * as twoSumFns from "./two-sum";
import * as addBinaryFns from "./add-binary";

const ITERATIONS = 10000;
type Metric = { name: string; time: number; result: unknown };

function runFunction(
  fn: Function,
  input: unknown,
  iterations: number,
  p0?: number | string
): { result: unknown; time: number } {
  let result: unknown = undefined;
  const start = performance.now();
  for (let i = 1; i <= iterations; i++) {
    result = p0 !== undefined ? fn(input, p0) : fn(input);
  }
  const end = performance.now();
  return { result, time: end - start };
}

function printTopMetrics(metrics: Metric[], count: number, label: string) {
  console.log(`\nTop ${count} ${label} functions:`);
  metrics.slice(0, count).forEach((m, i) => {
    console.log(`#${i + 1}: ${m.name} - ${m.time.toFixed(2)}ms (Result: ${m.result})`);
  });
}

function runTestSuite(suiteName: string, fns: Record<string, Function>, input: unknown, p0?: number | string) {
  const metrics: Metric[] = [];
  console.log(`\n--- Running suite: ${suiteName} ---`);
  for (const [fnName, fn] of Object.entries(fns)) {
    if (typeof fn !== "function") continue;
    const { result, time } = runFunction(fn, input, ITERATIONS, p0);
    metrics.push({ name: fnName, time, result });
    console.log(`${fnName}(${JSON.stringify(input)}):`, result, `- Time: ${time.toFixed(2)}ms`);
  }
  metrics.sort((a, b) => a.time - b.time);
  printTopMetrics(metrics, 3, "fastest");
  printTopMetrics(metrics.slice(-3).reverse(), 3, "slowest");
}

// Add your test suites here
// runTestSuite("climbStepsFns", climbStepsFns, 200);
// runTestSuite("longestSubstringFns", longestSubstringFns, "abcabcbb");
// runTestSuite("stringToAtoi", stringToAtoiFns, "   -42");
// runTestSuite("threeSumFns", threeSumFns, [-1, 0, 1, 2, -1, -4]);
// runTestSuite("minWindowSubstringFns", minWindowSubstringFns, ["ADOBECODEBANC", "ABC"]);
// runTestSuite("isSplittableFns", isSplittableFns, [1, 1, 2, 2, 3, 4]);
// runTestSuite("majorityElementFns", majorityElementFns, [2, 2, 1, 1, 1, 2, 2]);
// runTestSuite("firstLetterTwiceFns", firstLetterTwiceFns, "abca");
// runTestSuite("twoSumFns", twoSumFns, [2, 7, 11, 15], 9);
runTestSuite("addBinaryFns", addBinaryFns, "11", "1");
