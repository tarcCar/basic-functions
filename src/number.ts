/**
 * Checks if n is between start and up to, but not including, end.
 * If end is not specified, it's set to start with start then set to 0.
 * If start is greater than end the params are swapped to support negative ranges.
 * @param num
 * @param a
 * @param b
 */
export function inRange(num: number, a: number, b = 0) {
  return Math.min(a, b) <= num && num < Math.max(a, b);
}

/**
 * Produces a random number between the inclusive lower and upper bounds.
 * If only one argument is provided a number between 0 and the given number is returned.
 * If floating is true, or either lower or upper are floats,
 * a floating-point number is returned instead of an integer.
 * @param a
 * @param b
 */
export function random(a = 1, b = 0) {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
}

export function randomInt(a = 1, b = 0) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
}
