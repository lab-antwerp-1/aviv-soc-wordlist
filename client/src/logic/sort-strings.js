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

/*
  const lengthArray = [];

else if (sortType === 'shortest') {
    for (const ele of tempArray) {
      lengthArray.push(ele.length);
      lengthArray.sort((a, b) => {
        return a - b;
      });
      */

export const sortStrings = (toSort = [], sortType = 'oldest to newest') => {
  const tempArray = [...toSort];
  const sortLength = (par1 = '', par2 = '') => {
    return par1.length - par2.length;
  };
  if (sortType === 'newest to oldest') {
    return tempArray.reverse();
  }
  if (sortType === 'a to z') {
    return [...tempArray].sort();
  }
  if (sortType === 'z to a') {
    return [...tempArray].sort().reverse();
  }
  if (sortType === 'shortest to longest') {
    return [...tempArray].sort(sortLength);
  }
  if (sortType === 'longest to shortest') {
    return [...tempArray].sort(sortLength).reverse;
  }
  return tempArray;
};

// reference
/*
sortStrings = (a = [], b = 'oldest') => {
          let c;
          return (
            (c =
              'newest' === b
                ? [...a].reverse()
                : 'a' === b
                ? [...a].sort()
                : 'z' === b
                ? [...a].sort().reverse()
                : 'shortest' === b
                ? [...a].sort((c, a) => c.length - a.length)
                : 'longest' === b
                ? [...a].sort((c, a) => c.length - a.length).reverse()
                : [...a]),
            c
          );
        },
*/
