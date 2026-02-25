// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import tseslint from "typescript-eslint";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([{
  ignores: ["dist"],
}, {
  files: ["**/*.{ts,tsx}"],
  extends: [
    tseslint.configs.recommendedTypeChecked,
    reactX.configs["recommended-typescript"],
    reactDom.configs.recommended,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.app.json", "./tsconfig.node.json"],
      tsconfigRootDir: import.meta.dirname,
    },
    globals: globals.browser,
  },
}, ...storybook.configs["flat/recommended"]]);
