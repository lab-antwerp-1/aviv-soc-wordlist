/**
 * Checks if a string is a word.  A word contains only letters.
 *
 * @param {string} text - A string to check for wordiness.
 * @returns {boolean} Whether or not the text is a word.
 * @example
 *
 * // roger -- true
 *
 * @example
 *
 * // spell-check -- false
 */

// Evan reference

// export const isWord = (text = '') => /^[a-zA-Z]+$/.test(text);

export const isWord = (text = '') => {
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    if (char < 65 || (char > 90 && char < 97) || char > 122) {
      return true;
    }
  }
  return false;
};

/*

const isWord = (text = '') => {
  const charCode = text.charCodeAt(0);
  if (64 < charCode && charCode < 91) {
    return String.fromCharCode(charCode + 32);
  } else if (96 < charCode && charCode < 123) {
    return String.fromCharCode(charCode - 32);
  } else {
    return str; 
  }
}
*/
