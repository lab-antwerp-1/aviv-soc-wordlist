/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=''] - The array of strings to sort.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest.
 * - newest: from newest to oldest.
 * - shortest: from shortest to longest.
 * - longest: from longest to shortest.
 * - a: alphabetical order.
 * - z: reverse alphabetical order.
 * If the sortType is not one of these 6 options, a copy of toSort is returned.
 * @returns {string[]} A new sorted array containing the same strings as toSort.
 * @example
 *
 * // [Monday, Tuesday, Wednesday, Thursday], 'shortest' --> [Monday, Tuesday, Thursday, Wednesday]
 * @example
 *
 * // [Monday, Tuesday, Wednesday, Thursday], 'z' --> [Wednesday, Tuesday, Thursday, Monday]
 */

export const sortStrings = (toSort = [], sortType = 'oldest') => {
  const tempArray = [...toSort];

  const sortLength = (par1, par2) => {
    return par1.length - par2.length;
  };

  const sortCase = (par1, par2) => {
    return par1.localeCompare(par2);
  };

  if (sortType === 'newest') {
    return tempArray.reverse();
  }
  if (sortType === 'a') {
    return tempArray.sort(sortCase);
  }
  if (sortType === 'z') {
    return tempArray.sort(sortCase).reverse();
  }
  if (sortType === 'shortest') {
    return tempArray.sort(sortLength);
  }
  if (sortType === 'longest') {
    return tempArray.sort(sortLength).reverse();
  }
  return tempArray;
};
