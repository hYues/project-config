# @iae/project-config

Custom project config with defaults.

## Installation

```sh
npm i -D @iae/project-config eslint prettier
```

## Usage

- Add the config preset into your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: ["@iae/project-config/eslint/vue3-typescript"],
};
```

- Add a `prettier.config.js` file with contents:

```javascript
module.exports = require("@iae/project-config/prettier/prettier.config.js");
```

- Update VSCode `settings` for autofix on save

```json
{
  // ···
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  // ···
}
```
