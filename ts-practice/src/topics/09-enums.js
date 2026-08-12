const ColorsObject = {
    Red: "red",
    Green: "green",
    Blue: "blue",
};
var ColorEnum;
(function (ColorEnum) {
    ColorEnum["Red"] = "red";
    ColorEnum["Blue"] = "blue";
    ColorEnum["Green"] = "green";
    ColorEnum[ColorEnum["Num"] = 5] = "Num";
    ColorEnum[ColorEnum["NextNum"] = 6] = "NextNum";
})(ColorEnum || (ColorEnum = {}));
const ClubsObject = {
    Spain: "Barcelona",
    Italy: "Inter",
    Germany: "Bayern",
    England: "Liverpool",
    France: "PSG",
};
export function runEnumExamples() {
    console.log("Object as const color:", ColorsObject.Blue);
    printEnumColor(ColorEnum.Blue);
    // Numeric enums support reverse lookup.
    console.log("Enum reverse lookup:", ColorEnum[5]);
    const club = "Barcelona";
    console.log("Union from object values:", club);
    // In many projects, unions or `as const` objects are preferred over enums.
    // They produce less JavaScript and work naturally with API string values.
}
function printEnumColor(color) {
    console.log("Enum color:", color);
}
