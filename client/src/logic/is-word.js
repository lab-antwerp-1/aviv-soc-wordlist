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
export const isWord = (text = '') => /^[a-zA-Z]+$/.test(text);
