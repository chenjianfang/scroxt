const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob');


let entryFile = {};
function getEntry (){
    var jsFile = glob.sync("./src/**/*.ts");
    jsFile.forEach(function(value){
        entryFile[value.slice(value.indexOf("src/ts")+7).replace(/.ts/,"")] = value;
    });
    console.log(entryFile);
}
let entryHTMLFile = {};

var base = {
    entry:entryFile,
    output:{
        path: path.join(__dirname, '/../dist/'),
        publicPath: '/dist/',
        filename: 'js/[name].js'
    },
    resolve:{
        extensions: ['.ts','.js'],
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                    }
                }
            },{
                test: /\.(css|scss|less)$/,
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader','less-loader']
                })
            },{
                test: /\.html$/,
                exclude:[/node_modules/],
                use:{
                    loader:'file-loader',
                    query:{
                        name:'[name].[ext]'
                    }
                }
            },{
                test:/\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        //抽离js的css生成单独的css
        new ExtractTextPlugin('css/[name].css'),

        //删除dist文件
        new CleanWebpackPlugin(
            ['js','css'],
            {
                root: path.join(__dirname, '/../dist/'),
                verbose: true,
                dry: false,
            }
        ),

        new TsConfigPathsPlugin({
            configFileName:"../tsconfig.json"
        })

    ]
};

getEntry();


var baseConfig = function () {
    return base;
}

module.exports = baseConfig;