/**
 * Create a new function that calls func with thisArg and args.
 * @param func
 * @param wait
 */
export function debounce<T extends Function>(cb: T, wait = 20) {
  let h = 0;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
}
/**
 * Create a new function that calls func with args.
 * @param func
 * @param boundArgs
 */
export function partial(func: Function, ...boundArgs: any[]) {
  return (...remainingArgs: any[]) => func(...boundArgs, ...remainingArgs);
}
/**
 * Create a new function that limits calls to func to once every given timeframe.
 * @param func
 * @param timeFrame
 */
export function throttle(func: Function, timeFrame: number) {
  let lastTime = 0;
  return function() {
    const now = new Date();
    if (now.getTime() - lastTime >= timeFrame) {
      func();
      lastTime = now.getTime();
    }
  };
}
