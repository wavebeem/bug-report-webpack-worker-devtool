module.exports = {
  // These devtool options seem to conflict with `inline: "no-fallback"`. I
  // tested all 25 `devtool` values listed in the documentation:
  // https://webpack.js.org/configuration/devtool/
  //
  //     devtool: "eval-source-map",                        // FAIL
  //     devtool: "eval-cheap-source-map",                  // FAIL
  //     devtool: "eval-nosources-source-map",              // FAIL
  //     devtool: "eval-cheap-module-source-map",           // FAIL
  //     devtool: "eval-nosources-cheap-source-map",        // FAIL
  //     devtool: "eval-nosources-cheap-module-source-map", // FAIL
  //
  // All other `devtool` options including `false` and `"eval"` are OK.
  //
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: [
          {
            loader: "worker-loader",
            options: {
              inline: "no-fallback",
            },
          },
        ],
      },
    ],
  },
};
