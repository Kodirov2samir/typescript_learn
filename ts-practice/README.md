# TypeScript Practice

A small, topic-based workspace for learning and practicing TypeScript. Each lesson includes a TypeScript source file and, where applicable, a JavaScript counterpart.

## Project Structure

- `index.ts` - runs the main set of compiled examples.
- `index.js` - JavaScript entry point.
- `src/topics/` - numbered lessons covering core TypeScript concepts.
- `tsconfig.json` - strict TypeScript compiler configuration.

## Topics

1. Basic types
2. Structural typing
3. Unions and intersections
4. Special types
5. Compound and literal types
6. Generics
7. Type narrowing
8. Type tools
9. Enums
10. Interfaces versus type aliases
11. Mapped types
12. Utility types
13. Assertion functions
14. `infer` and conditional types

## Getting Started

Install the project dependencies, if any are added later:

```bash
npm install
```

Check the entire project with TypeScript:

```bash
npm run check
```

The check uses `tsc --noEmit`, so it validates the code without generating files.

## Learning Workflow

Open a lesson in `src/topics/`, read the examples, and change the types or values to see how the compiler responds. Use `npm run check` after each change to verify the result.

The numbered `.ts` files are the main learning material. The `.js` files show the JavaScript output or runtime form where available; type-only features are removed during compilation.
