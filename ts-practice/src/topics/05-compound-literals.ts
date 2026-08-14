// Topic: Compound Types, Literal Types, and Template Literal Types
// Compound types describe objects and arrays.
// Literal types allow only exact values like "red" or 2.
// Template literal types build valid strings from smaller literal unions.

interface Address {
  city?: string;
  street?: string;
  coords: string[];
}

type PracticeUser = {
  name: string;
  age: number;
  address: Address;
};

type ColorLiteral = "green" | "red" | "white";
type SizeLiteral = 1 | 2 | 4;

type UiAction = "click" | "hover";
type UiEntity = "user" | "button";
type EventHandlerName = `on-${UiAction}-${UiEntity}`;

export function runCompoundAndLiteralExamples() {
  // Use `type` or `interface` to describe objects.
  // `?` marks an optional property.
  const user: PracticeUser = {
    name: "Samir",
    age: 20,
    address: {
      coords: ["20", "21"],
    },
  };

  const users: PracticeUser[] = [
    user,
    {
      name: "Akbar",
      age: 99,
      address: {
        city: "Namangan",
        coords: ["20", "22"],
      },
    },
  ];

  console.log("Compound type:", user);
  console.log("Array of objects:", users);
  console.log("Optional chaining on array item:", users[1]?.address.coords);

  // Literal types allow only exact values.
  const color: ColorLiteral = "red";
  const size: SizeLiteral = 2;

  console.log("Literal examples:", color, size);

  const sizeConfig = {
    size: 4,
  } as const;

  printSize(sizeConfig.size);

  // Template literal types build allowed strings from smaller literal unions.
  const handler: EventHandlerName = "on-click-user";
  console.log("Template literal type:", handler);
}

function printSize(size: SizeLiteral) {
  console.log("Size:", size);
}
