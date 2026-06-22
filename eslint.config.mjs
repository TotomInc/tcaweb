import { GLOB_SRC, totominc } from "@totominc/eslint-config-next";

export default totominc(
  { enableNextSupport: true, tailwindcssConfigPath: "./app/tailwind.css" },
  {
    files: [GLOB_SRC],
    rules: {
      "ts/strict-boolean-expressions": "off",
      "ts/no-misused-promises": "off",
    },
  },
);
