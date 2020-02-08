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
