/**
 * Checks if value is an empty object or collection.
 * @param obj
 */
export function isEmpty(obj: any) {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
}
