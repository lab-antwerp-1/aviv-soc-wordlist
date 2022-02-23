/**
 * A function that renders HTML elements in an un-ordered list from an array.
 *
 * @param {Array} toRender - The array to render into list.
 * @returns {string} Will return un-ordered list and list items in a string.
 * 
 * @example
 * 
  // [door, window, closet, table] -- '<ul><li>door</li><li>window</li><li>closet</li><li>table</li></ul>
 */
export const renderList = (toRender = []) => {
  const ulEl = document.createElement('ul');

  for (const nextItem of toRender) {
    const liEl = document.createElement('li');
    liEl.innerText = nextItem;
    ulEl.appendChild(liEl);
  }

  return ulEl;
};
