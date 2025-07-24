import * as climbStepsFns from "./climb-steps";

const STEPS = 33;
const ITERATIONS = 10000;

type Metric = { name: string; time: number; result: number };

function runFunction(
  fn: Function,
  fnName: string,
  steps: number,
  iterations: number
): { result: number; time: number } {
  let result: number = 0;
  const start = performance.now();
  for (let i = 1; i <= iterations; i++) {
    result = fn(steps);
  }
  const end = performance.now();
  return { result: result ?? 0, time: end - start };
}

function printTopMetrics(metrics: Metric[], count: number, label: string) {
  console.log(`\nTop ${count} ${label} functions:`);
  metrics.slice(0, count).forEach((m, i) => {
    console.log(`#${i + 1}: ${m.name} - ${m.time.toFixed(2)}ms (Result: ${m.result})`);
  });
}

const metrics: Metric[] = [];

for (const [fnName, fn] of Object.entries(climbStepsFns)) {
  if (typeof fn !== "function") continue;
  const { result, time } = runFunction(fn, fnName, STEPS, ITERATIONS);
  metrics.push({ name: fnName, time, result });
  console.log(`${fnName}(${STEPS}):`, result, `- Time: ${time.toFixed(2)}ms`);
}

metrics.sort((a, b) => a.time - b.time);
printTopMetrics(metrics, 3, "fastest");
printTopMetrics(metrics.slice(-3).reverse(), 3, "slowest");
