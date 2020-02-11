import { pickBy } from '../../src/object';

describe('pickBy', () => {
  it('Should pick properties that pass the test', () => {
    const object = { a: '', b: false, c: '3', d: '4', z: undefined };
    const result = pickBy(object, value => value);
    expect(result).toStrictEqual({ c: '3', d: '4' });
  });
});
