import globals from "globals";
import PluginJS from "@eslint/js";
import PluginTypescript from "typescript-eslint";
import PluginReact from "eslint-plugin-react";
import PluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  PluginJS.configs.recommended,
  ...PluginTypescript.configs.recommended,
  PluginReact.configs.flat.recommended,
  PluginPrettier,
];
