# Logic

- _is-words.js_
- _sort-strings.js_

## description

> isWords is called when a user inputs data into the input box. it is called by the input-word handler and checks if the input is valid. if it contains only english upper or lower case letters the input is valid. otherwise it is not

---

> sortStrings is called when user chooses an option in the select drop bar. the function is called by the sort-words handler. it amends the order of values in the data object according to the user selection

### export

- _is-words logic --- returns boolean_
- _sort-strings logic --- returns string array_

### references

```js

// first attempt - didn't work

  const lengthArray = [];

else if (sortType === 'shortest') {
    for (const ele of tempArray) {
      lengthArray.push(ele.length);
      lengthArray.sort((a, b) => {
        return a - b;
      });

// case sensitive reference
// https://www.tutorialspoint.com/case-sensitive-sort-in-javascripts

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
}

// Evan reference

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
```
