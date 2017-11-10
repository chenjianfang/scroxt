const path = require('path');
const webpack = require('webpack');

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


//js dev,prod生成到不同的目录
const filename = process.env.NODE_ENV === 'dev'? 'js/[name].js': 'minjs/[name].min.js'

var base = {
    entry:entryFile,
    output:{
        path: path.join(__dirname, '/../dist/'),
        publicPath: '/dist/',
        filename: filename
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