import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss-modules'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    postcss({
      modules: true
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    })
  ],
  expert: ['react', 'react-dom']
}