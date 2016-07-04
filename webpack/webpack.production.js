/**
 * Created by shen on 16/4/29.
 */
var webpack = require('webpack');
var path = require('path');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');
module.exports = {
    entry: [
        path.resolve(__dirname, '../src/entry.jsx')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),//表示 打包后bundle.js的输出路径
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.(scss|sass)$/, loader: 'style!css!sass'},
            {test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000'},
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
            }
        ]
    },
    plugins: [
        new NyanProgressPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.DedupePlugin(),  // 去重
        new webpack.optimize.OccurenceOrderPlugin(), // 使用频繁的 modules ，分配的 id 更短。也同时保证了 moduels 顺序的一直
        new webpack.optimize.UglifyJsPlugin({
            // keep_fnames prevents function name mangling.
            // Function names are useful. Seeing a readable error stack while
            // being able to programmatically analyse it is priceless. And yes,
            // we don't need infamous FLUX_ACTION_CONSTANTS with function name.
            // It's ES6 standard polyfilled by Babel.
            /* eslint-disable camelcase */
            compress: {
                keep_fnames: true,
                screw_ie8: true,
                warnings: false // Because uglify reports irrelevant warnings.
            },
            mangle: {
                keep_fnames: true
            }
            /* eslint-enable camelcase */
        }),
        new webpack.PrefetchPlugin("react"),
        new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment"),
        new webpack.DefinePlugin({
            __REDUX_LOGGER__: false,
            __REACT_DEVTOOLS_GLOBAL_HOOK__: false
        })
    ],
    resolve: {
        alias:{
            components:path.resolve(__dirname, '../src/components'),//路径别名
            page:path.resolve(__dirname, '../src/pages')

        },
        extensions: ['', '.js', '.jsx', '.json'] //当requrie的模块找不到时，添加这些后缀
    }
};