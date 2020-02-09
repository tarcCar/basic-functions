/**
 * Group items by key.
 * @param array
 * @param key
 */
export function groupBy(array: any[], key: string) {
  return array.reduce(function(storage, item) {
    if (item.hasOwnProperty(key)) {
      const group = item[key];
      storage[group] = storage[group] || [];
      storage[group].push(item);
    }
    return storage;
  }, {});
}

const keyByArray = (array: any[], key?: string) =>
  (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {});
/**
 * Creates an object composed of keys generated from the results of running each element of collection through iteratee.
 * @param array
 * @param key
 */
export function keyBy(array: any[] | any, key?: string) {
  const c = array || {};
  return Array.isArray(c)
    ? keyByArray(c, key)
    : keyByArray(
        Object.keys(c).map(key => c[key]),
        key,
      );
}

const makeSelect = (comparator: any) => (a: any, b: any) => (comparator(a, b) ? a : b);
const minByValue = (key: string) => makeSelect((a: any, b: any) => a[key] <= b[key]);
const maxByValue = (key: string) => makeSelect((a: any, b: any) => a[key] >= b[key]);
/**
 * Use Array#reduce for find the minimum collection item
 * @param data
 * @param key
 */
export function minBy(data: any[], key: string) {
  return data.reduce(minByValue(key));
}
/**
 * Use Array#reduce for find the maximum collection item
 * @param data
 * @param key
 */
export function maxBy(data: any[], key: string) {
  return data.reduce(maxByValue(key));
}

/**
 * Gets a random element from array.
 * @param array
 */
export function sample(array: any[]) {
  const len = array == null ? 0 : array.length;
  return len ? array[Math.floor(Math.random() * len)] : undefined;
}
