// Topic: Mapped Types
// Mapped types create a new type by looping over the keys of another type.
// They are useful for making every field readonly, optional, required, or transformed.

interface User {
  name: string;
  age: 20;
}

// Mapped types are created with `type`, not `interface`.
type ReadonlyOptional<T> = {
  readonly [Key in keyof T]?: T[Key];
};

// `-readonly` removes readonly.
// `-?` removes optional.
type RequiredMutable<T> = {
  -readonly [Key in keyof T]-?: T[Key];
};

type ArrayLike<T> = {
  [Index in number]: T;
};

interface CarYear {
  year: number;
  name: string;
}

// `as Exclude<...>` remaps keys and removes the key we do not want.
type WithoutName<T> = {
  [Key in keyof T as Exclude<Key, "name">]: T[Key];
};

export function runMappedTypesExamples() {
  console.log("\nTopic 11: Mapped types");

  const mappedUser: ReadonlyOptional<User> = {
    name: "Samir",
    // `age` is optional here.
  };
  console.log("Readonly + optional mapped type:", mappedUser);

  const requiredMutableUser: RequiredMutable<User> = {
    name: "Samir",
    age: 20,
  };
  requiredMutableUser.name = "Akbar";
  console.log("Required + mutable mapped type:", requiredMutableUser);

  const arrayLike: ArrayLike<string> = ["123", "456"];
  console.log("Array-like mapped type:", arrayLike);

  const carWithoutName: WithoutName<CarYear> = {
    year: 2025,
    // `name` is removed from this type.
  };
  console.log("Key remapping with Exclude:", carWithoutName);
}
