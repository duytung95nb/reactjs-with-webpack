const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function (env) {
    // var appTarget = env.APP_TARGET;
    return {
        mode: 'production',
        devtool: 'source-map',
        entry: {
            main: [
                "./src/app.jsx"
            ]
        },
        output: {
            // Content hash to avoid caching script
            filename: '[name].min.js',
            path: path.join(__dirname, './dist/')
        },
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: [
                                "@babel/plugin-transform-react-jsx",
                                "@babel/plugin-proposal-class-properties",
                            ]
                        }
                    },
                    resolve: {
                        extensions: [".js", ".jsx"]
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /node_modules/,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
            ]
        },
        optimization: {
            minimizer: [
                new UglifyJSPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        keep_fnames: false,
                        compress: {
                            dead_code: false,
                            unused: true
                        },
                        output: {
                            comments: false
                        }
                    }
                })
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new FriendlyErrorsWebpackPlugin(),
            new webpack.NormalModuleReplacementPlugin(
                /* regex to filter the module */
                /_environments\/environment/gi,
                /* callback function */
                resource =>
                /* we change for env mode here */
                !env || !env.NODE_ENV || env.NODE_ENV === 'development' ?
                resource /* no change */ :
                resource.request += '.' + env.NODE_ENV
            ),
            new HtmlWebpackPlugin({
                template: 'index.html'
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 9000
        }
    }
};