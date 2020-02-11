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
