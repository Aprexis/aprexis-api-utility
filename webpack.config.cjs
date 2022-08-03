const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: ['.ts', '.mjs', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        resolve: { fullySpecified: false }
      }
    ],
  },
  mode: "production"
}
