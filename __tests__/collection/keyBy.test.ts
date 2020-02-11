import { keyBy } from '../../src/collections';

describe('keyBy', () => {
  it('Should execute keyBy on array without key', () => {
    const keysBys = keyBy(['a', 'b', 'c']);
    expect(keysBys).toStrictEqual({ a: 'a', b: 'b', c: 'c' });
  });

  it('Should execute keyBy on array with key', () => {
    const keysBys = keyBy(
      [
        { id: 'a1', title: 'abc' },
        { id: 'b2', title: 'def' },
      ],
      'id',
    );
    expect(keysBys).toStrictEqual({ a1: { id: 'a1', title: 'abc' }, b2: { id: 'b2', title: 'def' } });
  });

  it('Should execute keyBy on object with key', () => {
    const keysBys = keyBy({ data: { id: 'a1', title: 'abc' } }, 'id');
    expect(keysBys).toStrictEqual({ a1: { id: 'a1', title: 'abc' } });
  });
});
