import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx}"],
    ignores: ["node_modules", "dist", "build"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-inferrable-types": "off",

      "semi": ["error", "always"], 
      "quotes": ["error", "double"], 
      "indent": ["error", 2],
      "comma-dangle": ["error", "always-multiline"],

      "no-console": "warn", 
      "no-process-exit": "error", 
    },
  },
];
