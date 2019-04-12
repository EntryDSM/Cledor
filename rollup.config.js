import typescript from "rollup-plugin-typescript2";
import url from "rollup-plugin-url";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  plugins: [typescript(), url()],
  external: [
    "react",
    "socket.io-client",
    "react-textarea-autosize",
    "styled-components"
  ]
};
