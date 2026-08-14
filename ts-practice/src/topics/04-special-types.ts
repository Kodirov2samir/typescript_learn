// Topic: Special Types: any, unknown, never, and void
// `any` removes type safety.
// `unknown` keeps type safety until you check the value.
// `never` means a value should be impossible.
// `void` means a function returns no useful value.

enum ExhaustiveStatus {
  First,
  Second,
  Third,
}

export function runSpecialTypesExamples() {
  // `any` disables type safety. Use it rarely.
  let unsafeValue: any;
  unsafeValue = "string";
  unsafeValue = 20;
  unsafeValue = false;
  unsafeValue = {};
  unsafeValue = [];

  console.log("Any example:", unsafeValue);

  // `unknown` is safer than `any`.
  // You must narrow the type before using it as a specific type.
  printUnknown("hello");
  printUnknown([1, 2, 3]);

  // `never` represents a value that should never exist.
  // It is useful for exhaustive checks.
  console.log("Never/exhaustive example:", getStatusCode(ExhaustiveStatus.Second));

  // `void` means a function does not return a useful value.
  logSavedUsername("Samir");
}

function printUnknown(data: unknown) {
  if (typeof data === "string") {
    console.log("Unknown narrowed to string:", data.toUpperCase());
  }

  if (Array.isArray(data)) {
    console.log("Unknown narrowed to array:", data.length);
  }
}

function getStatusCode(value: ExhaustiveStatus) {
  switch (value) {
    case ExhaustiveStatus.First:
      return 1;
    case ExhaustiveStatus.Second:
      return 2;
    case ExhaustiveStatus.Third:
      return 3;
    default: {
      const exhaustiveCheck: never = value;
      return exhaustiveCheck;
    }
  }
}

function logSavedUsername(name: string): void {
  console.log("Saved username:", name);
}
