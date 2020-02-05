/**
 * Creates an array of elements split into groups the length of size.
 * @param input array of elements that will be create the chunks
 * @param size size of the chunks
 */
export const chunck = (input: Array<any>, size: number): Array<any> => {
  if (size <= 0) throw Error('Size must be greater than zero!');
  if (!input || input.length === 0) throw Error("Array can't be empty!");
  return input.reduce((arr, item, idx) => {
    return idx % size === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};
/**
 * returns the values from array that are not present in the other arrays.
 * @param arrayA
 * @param arrayB
 */
export function difference<T>(arrayA: Array<T> | null, arrayB: Array<any> | null): Array<T> {
  const arrays = [arrayA || [], arrayB || []];
  return arrays.reduce((a, b) => a.filter(c => !b.includes(c)));
}
/**
 * Flattens array a single level deep.
 * @param array
 */
export function flatten(array: any[] | null) {
  if (!array) return [];
  return array.reduce((a, b) => a.concat(b), []);
}

/**
 * Recursively flattens array.
 * @param array
 */
export function flattenDeep(array: any[]): any[] {
  if (Array.isArray(array)) {
    return array.reduce((a, b) => a.concat(flattenDeep(b)), []);
  } else {
    return [array];
  }
}
