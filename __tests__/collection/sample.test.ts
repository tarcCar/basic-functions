import { sample } from '../../src/collections';
describe('Collection samle methdos', () => {
  it('Should get random element of array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomSample = sample(array);
    expect(array).toContain(randomSample);
  });
});
