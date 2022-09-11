import {TABLE} from "../Constant/constant"

export function camelCaseToNormal(string) {
  return string
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, (str) => str.toUpperCase())
}

/****
 * 
 * Currying
 * https://javascript.info/currying-partials
 */
export function compareValues(key, order = TABLE.ASCENDING) {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === TABLE.DESCENDING) ? (comparison * -1) : comparison
    );
  };
}