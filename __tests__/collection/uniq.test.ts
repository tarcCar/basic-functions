import { uniq } from '../../src/collections';
describe('uniq', () => {
  it('Should uniques elements from aray', () => {
    const unique = uniq([1, 2, 3, 3, 4, 6, 2, 4, 1]);
    expect(unique).toStrictEqual([1, 2, 3, 4, 6]);
  });
});
