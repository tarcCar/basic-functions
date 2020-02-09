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
