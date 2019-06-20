var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        path.resolve(__dirname, 'src') + '/area.js',
    ],
    mode: 'production',
    // devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader"
                            },
                            {
                                loader: "sass-loader"
                            }
                        ]
                    })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts/' //dont actually use these fonts but still need to process them
                    }
                }]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {
                filename: 'styleasfdasd.css',
                allChunks: true
            }
        ),
        new HtmlWebpackPlugin ({
            inject: true,
            template: path.resolve(__dirname, 'dist') + '/index.html',
        })
    ],
}