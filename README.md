# webpack-sources-bug-repro

## Repro steps
1. `npm ci`
2. `npm run build`
3. See `Error: "." is not in the SourceMap`

Note that the bug is gone when removing `output.libraryTarget: 'umd'` from the Webpack config.
