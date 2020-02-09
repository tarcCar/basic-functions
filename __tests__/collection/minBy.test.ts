import { minBy } from '../../src/collections';
describe('Collection keyBy methdos', () => {
  it('Should execute min string value from array with key', () => {
    const minValue = minBy(
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
    expect(minValue).toStrictEqual({ name: 'AA' });
  });
  it('Should execute min number value from array with key', () => {
    const minValue = minBy(
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
    expect(minValue).toStrictEqual({ value: 33 });
  });
  it('Should execute min date value from array with key', () => {
    const minValue = minBy(
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
    expect(minValue).toStrictEqual({ date: new Date(2020, 1, 21) });
  });
});
