const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = Merge(CommonConfig, {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new CopyWebpackPlugin([
            { from: './public' }
        ])
    ]
})
