type AssertedObject = {
  name: string;
  age: number;
  why: string;
};

type ProductCard = {
  name: string;
  created: Date;
  price: number;
  percent: number;
};

type ProductCardView = {
  data: ProductCard;
  discountPrice: number;
};

type OptionalObject = {
  name: string;
  personalInformation?: {
    phone: string;
  };
  getAge?: () => number;
  getArray?: string | number[];
};

export function runTypeToolsExamples() {
  // Type assertion (`as`) tells TypeScript to trust you about a type.
  // It does not validate runtime data, so prefer real validation for API data.
  const assertedFromBackend = {
    name: "Samir",
    age: 20,
    why: "because",
  } as AssertedObject;

  console.log("Type assertion:", assertedFromBackend);

  // A normal annotation is stricter and usually better for objects you create.
  const annotatedObject: AssertedObject = {
    name: "samir",
    age: 20,
    why: "20",
  };

  console.log("Annotated object:", annotatedObject);

  const parsedItem = parseJson<AssertedObject>(
    '{"name": "Samir", "age": 25, "why": "because"}',
  );
  console.log("Parsed JSON:", parsedItem);

  const typedKeys = objectKeys(annotatedObject);
  console.log("Typed object keys:", typedKeys);

  // `{}` allows almost every non-nullish value.
  const looseObjectType: {} = "";
  console.log("Loose `{}` type:", looseObjectType);

  // `typeof` can create a type from an existing value.
  const templateUser = {
    name: "Samir",
    age: 20,
    location: ["one", 1],
  };

  type TemplateUser = typeof templateUser;
  const anotherUser: TemplateUser = {
    name: "Akbar",
    age: 21,
    location: ["two", 2],
  };

  console.log("typeof type:", anotherUser);

  const productView = cardShow<ProductCard, ProductCardView>(
    {
      name: "Samir",
      created: new Date("2009-05-15"),
      price: 200,
      percent: 20,
    },
    calculateDiscount,
    (item, discountAmount) => ({
      data: item,
      discountPrice: discountAmount,
    }),
  );

  console.log("typeof function parameter:", productView);

  // ReturnType keeps the type connected to the real function return value.
  const returnedUser = getUserReturn();
  displayUser(returnedUser);

  // `keyof` restricts a key argument to real keys of the object.
  const keyExample = {
    name: "samir",
    age: 20,
  };
  console.log("keyof example:", getValueByKey(keyExample, "name"));

  showOptionalAccess({
    name: "Samir",
  });
}

function parseJson<T>(value: string): T {
  return JSON.parse(value) as T;
}

function objectKeys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

const calculateDiscount = (num: number, percent: number): number => {
  return (percent / 100) * num;
};

const cardShow = <T extends { price: number; percent: number }, K>(
  item: T,
  discount: typeof calculateDiscount,
  builder: (item: T, discount: number) => K,
): K => {
  const discountAmount = discount(item.price, item.percent);
  return builder(item, discountAmount);
};

function getUserReturn() {
  return { id: 1, name: "Samir", isOnline: true };
}

type ReturnedUser = ReturnType<typeof getUserReturn>;

function displayUser(user: ReturnedUser) {
  console.log("ReturnType example:", user.name);
}

function getValueByKey<T, K extends keyof T>(item: T, key: K): T[K] {
  return item[key];
}

function showOptionalAccess(obj: OptionalObject) {
  console.log("Optional object phone:", obj.personalInformation?.phone);
  console.log("Optional array item:", obj.getArray?.[0]);
  console.log("Optional method call:", obj.getAge?.());

  // `!` is the non-null assertion operator.
  // It removes TypeScript's warning, but it can still fail at runtime.
  // Use it only when you are truly sure the value exists.
}
