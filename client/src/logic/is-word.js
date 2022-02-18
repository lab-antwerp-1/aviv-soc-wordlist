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

export const isWord = (text = '') => {
  if (text === '' || text.length === 0) {
    return false;
  }
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    if (char < 65 || (char > 90 && char < 97) || char > 122) {
      return false;
    }
  }
  return true;
};
