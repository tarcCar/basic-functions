/**
 * The method is used to copy the values of all enumerable own and inherited properties from one or more source objects to a target object.
 * @param target
 * @param sources
 */
export function extend(target: any, ...sources: any[]) {
  let source: any[] = [];
  sources.forEach(src => {
    source = source.concat([src, Object.getPrototypeOf(src)]);
  });
  return Object.assign(target, ...source);
}
/**
 * Gets the value at path of object. Note: If provided path does not exists inside the object js will generate error.
 * @param obj
 * @param path
 * @param defaultValue
 */
export function get(obj: any, path: string, defaultValue: any) {
  const travel = (regexp: any) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
}
/**
 * Returns a copy of the object, filtered to omit the keys specified.
 * @param obj
 * @param keys
 */
export function omit(obj: any, ...keys: string[]) {
  var o = Object.assign({}, obj);
  for (let n of keys) delete o[n];
  return o;
}

/**
 * Creates an object composed of the object properties predicate returns truthy for.
 * @param object
 * @param keys
 */
export function pick(object: any, ...keys: any[]) {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}

type PickByPredicate = (value: any) => boolean;
/**
 * Creates an object composed of the object properties predicate returns truthy for.
 * @param object
 * @param keys
 */
export function pickBy(object: any, predicate: PickByPredicate) {
  const obj: any = {};
  for (const key in object) {
    if (predicate(object[key])) {
      obj[key] = object[key];
    }
  }
  return obj;
}
