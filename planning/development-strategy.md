<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

# development strategy

## Setup

- planing pages, readmes documentation

> as a user/developer i want to follow the page repo and production process

- markdown

- this will be developed on `file-setup` branch

  - [ ] write planning documentation in `md`

---

## user stories

### must have

> As a user I can easily understand how to use the site

- there is a title to the webpage on `index.html`
- there are labels to the `input` and `button` elements on `index.html`
- there is an instructions `section` on `index.html`
- `code` user messages are clear and succinct on `index.html`

- this will be developed as part of the nav bar on the `file-setup` branch

  - [ ] `html` use `h1` for titles and `p` for paragraph
  - [ ] `css` use `instructions` class to stylize instructions section
  - [ ] `js` use `.innerHTML` to modify `code` message

> As a user I can create lists of words

- _there is an input box where words can be added to a list_

- there is an `input` `text` box and add `button` on `index.html`

- this will be developed as part of the nav bar on the `file-setup` branch

  - [ ] `html` use `input` `text` for input box
  - [ ] `css` use `input` class to stylize input section
  - [ ] `js` use `addEventListener` and handler functions to manage input

> As a user I can edit my list

- there is a remove `button` for the `input` box on `index.html`

- this will be developed on `file-setup` branch

  - [ ] `html` use `input` for for input box
  - [ ] `css` use `input` class to stylize input section
  - [ ] `js` use `addEventListener` and handler functions to manage input buttons

> As a user I can sort my list of words

- there is an `select` and `option` drop bar on `index.html`

- this will be developed on `file-setup` branch

  - [ ] `html` use `select` and `option` for drop bar
  - [ ] `css` use `input` class to stylize input section
  - [ ] `js` use `.target.value` and handler and logic function to manage user options

### should have

> As a user I can be sure my list only contains words

- there is a `code` section for messages to the user on `index.html`

- this will be developed on `file-setup` branch

  - [ ] `html` use `code` to reference warning section
  - [ ] `css` use `input` class to stylize input section
  - [ ] `js` use `.test` to assure all input characters are letters

> As a user I want the webpage to be pretty and welcoming

- there is css styling to the different page elements on `index.css`

- this will be developed on `file-setup` branch

  - [ ] `css` use classes to stylize page elements

### could have

> As a user I can be sure my list only includes English words

- there is a logic function that filters inputted words against dictionary on `is-word.js`

- this will be developed on `file-setup` branch

- [ ] `js` use `.test` to compare with `cspell.json` dictionary?

> As a user I can save and share my lists

- there is a `button` to save and export list from page on `index.html`

- this will be developed on `file-setup` branch

- [ ] `html` use `button` to reference save/export button
- [ ] `css` use `output` class to stylize output section
- [ ] `js` use handler and logic function to export `data.js`
