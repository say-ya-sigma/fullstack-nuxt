module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential"
    ],
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"],
        "extraFileExtensions": [".vue"]
    },
    "plugins": [
        "vue"
    ],
    "ignorePatterns": [".eslintrc.js"],
    "rules": {
    }
}
