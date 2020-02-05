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
