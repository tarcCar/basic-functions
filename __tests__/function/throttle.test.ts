import { throttle } from '../../src/functions';
import { delay } from '../utils/delay';
describe('Function partial methdos', () => {
  it('Not should execute function more than 1 time', () => {
    let count = 0;
    const hello = () => {
      count++;
      return `Hello`;
    };
    const sayHello = throttle(hello, 1000);
    sayHello();
    sayHello();
    sayHello();
    sayHello();
    sayHello();
    expect(count).toBe(1);
  });
  it('Should execute function 3 times', async () => {
    let count = 0;
    const hello = () => {
      count++;
      return `Hello`;
    };
    const sayHello = throttle(hello, 1000);
    sayHello();
    sayHello();
    await delay(1000);
    sayHello();
    sayHello();
    await delay(1000);
    sayHello();
    sayHello();
    expect(count).toBe(3);
  });
});
