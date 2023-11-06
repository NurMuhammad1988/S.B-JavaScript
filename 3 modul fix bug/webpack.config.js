module.exports = {
    mode: "development",
    entry: "./src/js/script.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js",
    },
    watch: true,
    devtool: "source-map",
    module: {},
};


// const path = require('path');
// module.exports = {
//   output: {
//     filename: 'my-first-webpack.bundle.js',
//   },
//   module: {
//     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//   },
// };

