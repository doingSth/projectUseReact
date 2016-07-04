/**
 * Created by shen on 16/4/29.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:4000',//资源服务器地址
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../src/entry.jsx')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),//表示 打包后bundle.js的输出路径
        filename: 'bundle.js',//生成的文件名
        publicPath: '/dist/' //指定webpack-dev-server 启动后 获取bundle.js 的路径
    },
    module: {
        loaders: [//各种loader
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.(scss|sass)$/, loader: 'style!css!sass'},
            {test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000'},
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader','babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    resolve: {
        alias:{
            components:path.resolve(__dirname, '../src/components'),//路径别名
            page:path.resolve(__dirname, '../src/pages')

        },
        extensions: ['', '.js', '.jsx', '.json'] //当requrie的模块找不到时，添加这些后缀
    }
}