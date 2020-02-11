import { groupBy } from '../../src/collections';

describe('groupBy', () => {
  it('Should group by key length', () => {
    const array = ['one', 'two', 'three'];
    const groups = groupBy(array, 'length');
    expect(groups).toStrictEqual({ 3: ['one', 'two'], 5: ['three'] });
  });

  it('Should group array of object by key city', () => {
    const array = [
      {
        city: 'Gondor',
        name: 'Galeto',
      },
      {
        city: 'Juno',
        name: 'Jarbas',
      },
      {
        city: 'Gondor',
        name: 'Ueliton',
      },
      {
        city: 'Alto paraná',
        name: 'OverLord',
      },
    ];
    const groups = groupBy(array, 'city');
    expect(groups).toStrictEqual({
      'Alto paraná': [
        {
          city: 'Alto paraná',
          name: 'OverLord',
        },
      ],
      Gondor: [
        {
          city: 'Gondor',
          name: 'Galeto',
        },
        {
          city: 'Gondor',
          name: 'Ueliton',
        },
      ],
      Juno: [
        {
          city: 'Juno',
          name: 'Jarbas',
        },
      ],
    });
  });
});
