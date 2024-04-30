export function calculateYearsDifference(date1, date2) {
  let yearsDifference = date2.getFullYear() - date1.getFullYear();
  if (
    date2.getMonth() < date1.getMonth() ||
    (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())
  ) {
    yearsDifference--;
  }
  return yearsDifference;
}

export function calculateMonthsDifference(date1, date2) {
  let monthsDifference =
    (date2.getFullYear() - date1.getFullYear()) * 12 +
    (date2.getMonth() - date1.getMonth());
  if (date2.getDate() < date1.getDate()) {
    monthsDifference--;
  }
  return monthsDifference;
}

export function calculateDaysDifference(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1 - date2) / oneDay));
}
