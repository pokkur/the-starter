const path = require('path')
const ProvidePlugin = require('webpack/lib/ProvidePlugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const Fiber = require('fibers')

const devMode = process.env.NODE_ENV === 'development'

module.exports = (env, argv) => ({
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    stats: {
        chunks: false,
        hash: true,
        entrypoints: false,
        errors: true,
        errorDetails: true,
        modules: false,
        moduleTrace: false,
        version: false
    },
    devtool: 'source-map',
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8081
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '/src/'),
            react: path.resolve(path.join(__dirname, './node_modules/react')),
            'react-dom': path.resolve(path.join(__dirname, './node_modules/@hot-loader/react-dom'))
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        options: {
                            // publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                ctx: {
                                    'postcss-preset-env': {
                                        stage: 3
                                    },
                                    cssnano: {
                                        calc: false
                                    }
                                }
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: require('sass'),
                            fiber: Fiber
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compress: {
                        drop_console: true
                    },
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    extractComments: 'all',
                    keep_classnames: true
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: 'body',
            template: path.join(__dirname, '/src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
        new ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
})
