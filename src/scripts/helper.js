export function validateSearchValue(text) {
  let result = text.trim();
  result = result.replace(/\s/g, '+');
  return result;
}

export function convertToF(celsius) {
  return Math.round(1.8 * celsius + 32);
}

export function convertToC(farenheit) {
  return Math.round((farenheit - 32) / 1.8);
}
