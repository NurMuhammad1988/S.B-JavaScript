module.exports = {
    mode: "development",
    entry: "./src/js/script.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js",
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns:"usage", 
                                }, 
                            ],
                        ],
                    },
                },
            },
        ],
    },
};

// cons t path = require('path');
// module.exports = {
//   output: {
//     filename: 'my-first-webpack.bundle.js',
//   },
//   module: {
//     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//   },
// };
