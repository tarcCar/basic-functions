import { debounce } from '../../src/functions';
jest.useFakeTimers();

describe('Function debounce methdos', () => {
  it('Should call function after time out', () => {
    const callback = jest.fn();
    const functionDebounce = debounce(callback, 1000);
    functionDebounce();
    expect(callback).not.toBeCalled();
    // Fast-forward until all timers have been executed
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
