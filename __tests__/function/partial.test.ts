import { partial } from '../../src/functions';

describe('Function partial methdos', () => {
  it('Should create a function with partial', () => {
    const greet = (greeting: string, name: string) => {
      return greeting + ' ' + name;
    };
    const sayHelloTo = partial(greet, 'Hello');
    const result = sayHelloTo('Jose');
    expect(result).toBe('Hello Jose');
  });
});
