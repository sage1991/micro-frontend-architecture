import PluginJS from "@eslint/js"
import PluginPrettier from "eslint-plugin-prettier/recommended"
import PluginReact from "eslint-plugin-react"
import PluginSimpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import PluginTypescript from "typescript-eslint"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  { languageOptions: { globals: globals.node } },
  PluginJS.configs.recommended,
  ...PluginTypescript.configs.recommended,
  {
    ...PluginReact.configs.flat.recommended,
    rules: {
      ...PluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off"
    }
  },
  {
    plugins: {
      "simple-import-sort": PluginSimpleImportSort
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    }
  },
  PluginPrettier
]
