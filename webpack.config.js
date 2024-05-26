const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const modeProduction = process.env.NODE_ENV === 'production';
const PATHS = { src: path.join(__dirname, '.') }

const exportStyleSCSSPure = {
    entry: { './css/style': './dev/css/style.css', },
    output: { path: path.resolve(__dirname, './assets/'), },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({ filename: "./[name].css", }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            modules: false,
                            sourceMap: true,
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                    ],
                                ],
                            },
                        },
                    }
                ]
            }
        ],
    },
};

const exportStyleSCSS = {
    entry: { './css/style': './dev/css/style.css', },
    output: { path: path.resolve(__dirname, './assets/'), },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({ filename: "./[name].css", }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            modules: false,
                            sourceMap: true,
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                    ],
                                ],
                            },
                        },
                    }
                ]
            }
        ],
    },
};

const exportScriptJS = {
    entry: { './js/script': './dev/script/script.js' },
    output: { path: path.resolve(__dirname, './assets/'), },
    module: {
        rules: [
            {
                test: /\.(glsl|frag|vert)$/,
                use: ['glslify-import-loader', 'raw-loader', 'glslify-loader']
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
        ],
    },
};

module.exports = () => {
    if (modeProduction) {
        exportStyleSCSSPure.mode = 'production';
        exportScriptJS.mode = 'production';
        return [exportStyleSCSSPure, exportScriptJS];
    }
    else {
        exportStyleSCSS.mode = 'development';
        exportStyleSCSS.devtool = 'source-map'
        exportScriptJS.mode = 'development';
        exportScriptJS.devtool = 'source-map';
        return [exportStyleSCSS, exportScriptJS];
    }
};