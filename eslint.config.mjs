// @ts-check
import { eslintConfig } from "js-style-kit";

export default eslintConfig({
  react: {
    framework: "next",
  },
  rules: {
    "@typescript-eslint/no-deprecated": "off",
    camelcase: "off",
    "unicorn/filename-case": "off",
  },
  typescript: "tsconfig.eslint.json",
});
