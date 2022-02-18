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

// first attempt - didn't work

/*
  const lengthArray = [];

else if (sortType === 'shortest') {
    for (const ele of tempArray) {
      lengthArray.push(ele.length);
      lengthArray.sort((a, b) => {
        return a - b;
      });
      */

export const sortStrings = (toSort = [], sortType = 'oldest') => {
  const tempArray = [...toSort];

  const sortLength = (par1, par2) => {
    return par1.length - par2.length;
  };

  const sortCase = (par1, par2) => {
    if (par1.charAt(0) === par2.charAt(0)) {
      return 0;
    }
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

// case sensitive reference
/*
https://www.tutorialspoint.com/case-sensitive-sort-in-javascript
s
const caseSensitiveSort = (arr = []) => {
   const sorter = (a, b) => {
      if (a === b){
         return 0
      };
      if (a.charAt(0) === b.charAt(0)){
         return sorter(a.slice(1), b.slice(1))
      }
      if(a.charAt(0).toLowerCase() === b.charAt(0).toLowerCase()){
         if(/^[a-z]/.test(a.charAt(0)) && /^[A-Z]/.test(b.charAt(0))){
            return -1;
         };
         if(/^[a-z]/.test(b.charAt(0)) && /^[A-Z]/.test(a.charAt(0))){
            return 1;
         };
      };
      return a.localeCompare(b);
   };
   arr.sort(sorter);
}
caseSensitiveSort(arr);
console.log(arr);
*/

// Evan reference
/*
export const sortStrings = (a = [], b = 'oldest') => {
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
};
*/
