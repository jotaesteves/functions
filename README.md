# functions

A TypeScript workspace for benchmarking and testing algorithm implementations.

## Structure

- `src/` — Contains all algorithm implementations and runners.
- Each algorithm (e.g., climb stairs, longest substring, min window substring) is implemented in its own file and exported as a function group.
- The runner in `src/index.ts` benchmarks all exported functions and prints the top 3 fastest and slowest for each suite.

## Usage

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Run the benchmark runner:

   ```sh
   pnpm run dev
   ```

   or

   ```sh
   pnpx ts-node src/index.ts
   ```

## Adding New Algorithms

- Create a new file in `src/` and export your functions.
- Import your function group in `src/index.ts` and add a call to `runTestSuite` with appropriate test input.

## Example

```typescript
import * as minWindowSubstringFns from "./min-window-substring";
runTestSuite("minWindowSubstringFns", minWindowSubstringFns, ["ADOBECODEBANC", "ABC"]);
```

## License

MIT
