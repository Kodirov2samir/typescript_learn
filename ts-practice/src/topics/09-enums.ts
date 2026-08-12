const ColorsObject = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

enum ColorEnum {
  Red = "red",
  Blue = "blue",
  Green = "green",
  Num = 5,
  NextNum,
}

const ClubsObject = {
  Spain: "Barcelona",
  Italy: "Inter",
  Germany: "Bayern",
  England: "Liverpool",
  France: "PSG",
} as const;

type Club = (typeof ClubsObject)[keyof typeof ClubsObject];

export function runEnumExamples() {
  console.log("Object as const color:", ColorsObject.Blue);

  printEnumColor(ColorEnum.Blue);

  // Numeric enums support reverse lookup.
  console.log("Enum reverse lookup:", ColorEnum[5]);

  const club: Club = "Barcelona";
  console.log("Union from object values:", club);

  // In many projects, unions or `as const` objects are preferred over enums.
  // They produce less JavaScript and work naturally with API string values.
}

function printEnumColor(color: ColorEnum) {
  console.log("Enum color:", color);
}
