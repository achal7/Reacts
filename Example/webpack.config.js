/**
 * Created by achal on 2/20/2015.
 */
module.exports ={
    target: 'web',
    entry: "./Bootstrap.js",
    output:{
        path: "./build",
        filename: "System.js"
    },
    module:{
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/, /public\/components/], loader: 'babel-loader?experimental&optional=selfContained' },
            { test: /\.jsx$/, exclude: [/public\/components/], loaders: ['babel-loader?experimental&optional=selfContained'] }
        ],
        noParse: /\.min\.js/
    },
    resolve:{
        extensions: ['', '.js', '.json', '.jsx'],
        modulesDirectories: ['node_modules']
    }
}