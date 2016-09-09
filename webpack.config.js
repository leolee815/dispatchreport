var path = require("path");
var webpack = require("webpack");
var nodeModulesPath = path.resolve(__dirname,'node_modules');
module.exports = {
    entry:{
        DispatchReport:"./src/entries/DispatchReport"
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        //publicPath: "/build/",
        filename: "[name].js"
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loaders:["style","css"],
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {   test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
        ]
    },
    resolve:{
        extensions:['','.js','.jsx'],  //自动补全识别后缀
        alias: {
          // React: path.join(nodeModulesPath, '/react/dist/react'),
          // ReactDOM: path.join(nodeModulesPath, '/react-dom/dist/react-dom')
        }
    },
    plugins: [
        // new webpack.ProvidePlugin({
            // "React": path.join(nodeModulesPath, '/react/dist/react'),
            // "ReactDOM": path.join(nodeModulesPath, '/react-dom/dist/react-dom')
        // })
    ]
};
