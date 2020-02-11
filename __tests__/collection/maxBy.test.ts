import { maxBy } from '../../src/collections';
describe('maxBy', () => {
  it('Should execute max string value from array with key', () => {
    const maxValue = maxBy(
      [
        {
          name: 'AA',
        },
        {
          name: 'BB',
        },
        {
          name: 'CC',
        },
      ],
      'name',
    );
    expect(maxValue).toStrictEqual({ name: 'CC' });
  });
  it('Should execute max number value from array with key', () => {
    const maxValue = maxBy(
      [
        {
          value: 45,
        },
        {
          value: 33,
        },
        {
          value: 5069,
        },
      ],
      'value',
    );
    expect(maxValue).toStrictEqual({ value: 5069 });
  });
  it('Should execute max date value from array with key', () => {
    const maxValue = maxBy(
      [
        {
          date: new Date(2020, 1, 23),
        },
        {
          date: new Date(2020, 1, 21),
        },
        {
          date: new Date(2020, 2, 25),
        },
      ],
      'date',
    );
    expect(maxValue).toStrictEqual({ date: new Date(2020, 2, 25) });
  });
});
