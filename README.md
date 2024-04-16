# @iae/project-config

Custom project config with defaults.

## Installation

```sh
npm i -D @iae/project-config eslint prettier
```

## Usage

- Add the config preset into your `.eslintrc.ts` file:

```javascript
module.exports = {
  extends: ["@iae/project-config/eslint/vue3-typescript"],
};
```

- Add a `prettier.config.ts` file with contents:

```javascript
module.exports = require("@iae/project-config/prettier/prettier.config.js");
```

- Update VSCode `settings.json` for autofix on save

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
