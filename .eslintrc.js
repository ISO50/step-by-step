module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    // "no-console": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "quotes": [
      "error",
      "single",
      { "allowTemplateLiterals": true }
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
