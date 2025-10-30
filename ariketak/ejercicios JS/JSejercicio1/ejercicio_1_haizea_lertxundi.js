function isLeapYear(yearString) {
  if (typeof yearString !== "string") return false;

  let year = Number(yearString);

  if (year < 1900 || year > 100000) return false;

  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
module.exports = isLeapYear;
