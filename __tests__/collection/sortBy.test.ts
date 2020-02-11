import { sortBy } from '../../src/collections';
describe('sortBy', () => {
  it('Should sort array', () => {
    const array = [
      {
        value: 45,
      },
      {
        value: 33,
      },
      {
        value: 5069,
      },
      {
        value: 12,
      },
      {
        value: 67,
      },
      {
        value: 90,
      },
    ];
    const sortedArray = sortBy(array, 'value');
    expect(sortedArray).toStrictEqual([
      {
        value: 12,
      },
      {
        value: 33,
      },
      {
        value: 45,
      },
      {
        value: 67,
      },
      {
        value: 90,
      },
      {
        value: 5069,
      },
    ]);
  });
});
