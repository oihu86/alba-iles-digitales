let isLeapYear = require("./ejercicio_1_haizea_lertxundi.js");

test("1983 string no es bisiesto", () => {
  expect(isLeapYear("1983")).toBeFalsy();
});

test("1992 string es bisiesto", () => {
  expect(isLeapYear("1992")).toBeTruthy();
});

test("1992 numero no es string", () => {
  expect(isLeapYear(1992)).toBeFalsy();
});

test("1884 string es menor que 1900 tiene que dar falso", () => {
  expect(isLeapYear("1884")).toBeFalsy();
});

test("1999 string no es bisiesto", () => {
  expect(isLeapYear("1999")).toBeFalsy();
});

test("1000000 string es mayor que 100mil tiene que dar falso", () => {
  expect(isLeapYear("1000000")).toBeFalsy();
});

test("2020 string es bisiesto", () => {
  expect(isLeapYear("2020")).toBeTruthy();
});

test("1986 string no es bisiesto", () => {
  expect(isLeapYear("1986")).toBeFalsy();
});
