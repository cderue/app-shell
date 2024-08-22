module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "indent": ["error", 4],
        "object-curly-spacing": ["error", "always"],
        "semi": ["error", "always"],
        "no-trailing-spaces": "error",
        "no-multi-spaces": "error",
        "prefer-destructuring": "warn",
        "import/order": ["error", { "alphabetize": { "order": "asc" } }],
        "import/first": "error",
        "import/prefer-default-export": "off",
        "no-console": "warn",
        "complexity": ["error", 10],
        "@typescript-eslint/no-explicit-any": "off",
        "jsx-a11y/anchor-is-valid": "off"
    },
    "ignorePatterns": ["src/styles/**"]
};
