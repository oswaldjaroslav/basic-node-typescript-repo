
const root = require('app-root-path').path;

module.exports = {
  entry: './app.ts',
  target: 'node',
  externals: [
    /^[a-z\-0-9]+$/ // Ignore node_modules folder
  ],
  output: {
    filename: 'index.js', // output file
    path: `${root}/dist/`,
    libraryTarget: "commonjs"
  },
  resolve: {
    // Add in `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    modules: [
      `${__dirname}/node_modules`,
      'node_modules'
    ]
  },
  resolveLoader: {
    //root: [`${root}/node_modules`],
  },
  module: {
    rules: [{
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      test: /\.tsx?$/,
      use: [
        {
          loader: 'awesome-typescript-loader',
        }
      ]
    }]
  }
};