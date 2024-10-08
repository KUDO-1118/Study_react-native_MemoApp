import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // 修正
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended, // 修正
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off", // ルールを無効にする
      '@typescript-eslint/no-unused-vars': 'off', // ルールを無効にする
    },
  },
];