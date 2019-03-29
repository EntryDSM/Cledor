import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    })
  ],
  expert: ["react", "react-dom", "styled-components"],
  external: ["styled-components"]
};
