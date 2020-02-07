import { compact } from '../src/array';
describe('Array compact methdos', () => {
  it('Should get comact array', () => {
    const comp = compact([0, 1, false, 2, '', 3]);
    expect(comp).toStrictEqual([1, 2, 3]);
  });
});
