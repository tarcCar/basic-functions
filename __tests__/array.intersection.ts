import { intersection } from '../src/array';
describe('Array intersection methdos', () => {
  it('Should make intersection from arrays', () => {
    const intersections = intersection([
      [1, 2, 3],
      [101, 2, 1, 10],
      [2, 1],
    ]);
    expect(intersections).toStrictEqual([1, 2]);
  });
});
