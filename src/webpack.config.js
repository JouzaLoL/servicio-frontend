module.exports = {
  entry: "../src",
  target: "node",
  output: {
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ""],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
}
;
