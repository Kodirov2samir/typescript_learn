type UserResponseData = {
  username: string;
  age?: number;
};

type ApiResponse<T> = {
  status?: "success" | "error";
  requestId: string;
  data: T;
};

type CarColor = "green" | "red" | "purple";

type Car = {
  brandName: string;
  year?: number;
  color?: CarColor;
};

type IsString<T> = T extends string ? true : false;

export function runGenericExamples() {
  // Generics are type parameters.
  // They let one type or function work with many different data shapes.
  const response: ApiResponse<UserResponseData> = {
    requestId: "13j2bjedb3jbdj4f",
    data: {
      username: "samir",
    },
  };

  console.log("Generic API response:", response);

  // Generic functions can return the same type they receive.
  const car = keepCarShape<Car>({
    brandName: "BMW",
    year: 2008,
    color: "purple",
  });

  console.log("Generic constraint:", car);

  // Conditional types choose a type by checking another type.
  const stringCheck: IsString<"sa"> = true;
  console.log("Conditional type:", stringCheck);
}

const keepCarShape = <
  T extends {
    brandName: string;
    year?: number;
  },
>(
  item: T,
): T => {
  return item;
};
