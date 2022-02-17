# Handlers

- _input-words.js_
- _sort-words.js_

## description

> input-words is called when user clicks the add/remove button. if the element clicked is not a button, nothing is returned
> when add button is clicked it calls isWord logic function to determine if input is valid. if its not a warning message is displayed. if input is valid it is added to the data object word list.
> When remove button is clicked function checks if user input is already included in the data object list. if it is the input is removed from the object. if it is not included a warning message is displayed to the user

> the modified data object is then sorted by the sortStrings function and rendered with the renderList component function and displayed to the user in a list

---

> sort-words is called when a user picks an option in the select box. the function calls the sortWords logic function and updates the order of displayed values in the data object. the amended list is then rendered with the renderList component function and displayed to the user

### import

- _data object_
- _isWord logic function_
- _sortWords logic function_
- _renderList component_

### export

- _inputWord handler --- amends data object_
- _sort-words handler --- amends data object_

### html elements

- amend and append `li` element by `list-container` id
