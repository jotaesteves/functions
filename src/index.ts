import * as climbStepsFns from "./climb-steps";

const STEPS = 33;
const ITERATIONS = 10000;

const metrics: Array<{ name: string; time: number; result: number }> = [];

for (const [fnName, fn] of Object.entries(climbStepsFns)) {
  if (typeof fn !== "function") continue;
  let result;
  const start = performance.now();
  for (let i = 1; i <= ITERATIONS; i++) {
    if (fn.length === 2) {
      if (fnName.toLowerCase().includes("cache")) {
        result = fn(STEPS);
      } else {
        result = fn(STEPS);
      }
    } else {
      result = fn(STEPS);
    }
  }
  const end = performance.now();
  const elapsed = end - start;
  metrics.push({ name: fnName, time: elapsed, result: result ?? 0 });
  console.log(`${fnName}(${STEPS}):`, result, `- Time: ${elapsed.toFixed(2)}ms`);
}

metrics.sort((a, b) => a.time - b.time);
console.log("\nTop 3 fastest functions:");
metrics.slice(0, 3).forEach((m, i) => {
  console.log(`#${i + 1}: ${m.name} - ${m.time.toFixed(2)}ms (Result: ${m.result})`);
});

console.log("\nTop 3 slowest functions:");
metrics.slice(-3).forEach((m, i) => {
  console.log(`#${i + 1}: ${m.name} - ${m.time.toFixed(2)}ms (Result: ${m.result})`);
});
