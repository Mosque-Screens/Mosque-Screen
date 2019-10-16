var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new
    HTMLWebpackPlugin({
        template: __dirname + '/public/index.html',
        filename: 'index.html',
        inject: 'body'
    });

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:100000
                        }
                    }
                ]
            }
        ]
    },
    node: {
        fs: 'empty',
        tls: 'empty',
        net: 'empty'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    plugins: [HTMLWebpackPluginConfig]
};