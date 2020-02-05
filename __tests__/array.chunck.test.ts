import { chunck } from '../src/array';

describe('Array chunck methods', () => {
  it('Should chuck array with size 2', () => {
    const array = ['a', 'b', 'c', 'd'];
    const chucks = chunck(array, 2);
    expect(chucks).toStrictEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });

  it('Should chuck array with size 3', () => {
    const array = ['a', 'b', 'c', 'd'];
    const chucks = chunck(array, 3);
    expect(chucks).toStrictEqual([['a', 'b', 'c'], ['d']]);
  });

  it('Should chuck array with size greater than size of array', () => {
    const array = ['a', 'b', 'c', 'd'];
    const chucks = chunck(array, 5);

    expect(chucks).toStrictEqual([['a', 'b', 'c', 'd']]);
  });

  it('Should throw error when size less or equals to zero', () => {
    const array = ['a', 'b', 'c', 'd'];
    function chunkArraySizeZero() {
      chunck(array, 0);
    }
    function chunkArrayNegativeSize() {
      chunck(array, -1);
    }
    expect(chunkArraySizeZero).toThrowError('Size must be greater than zero!');
    expect(chunkArrayNegativeSize).toThrowError('Size must be greater than zero!');
  });

  it('Should throw error when empty array', () => {
    const array: any[] = [];
    function chunkEmptyArray() {
      chunck(array, 1);
    }
    expect(chunkEmptyArray).toThrowError("Array can't be empty!");
  });

  it('Should throw error when null array', () => {
    const array: any = null;
    function chunkEmptyArray() {
      chunck(array, 1);
    }
    expect(chunkEmptyArray).toThrowError("Array can't be empty!");
  });
});
