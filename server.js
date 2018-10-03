var webpackDevServer=require('webpack-dev-server');
var config=require('./webpack.config');
var webpack=require('webpack');
new webpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    hot:true,
    historyApiFallback:true,
    quiet:false,
    noInfo:false,
    stats:{
        assets:false,
        colors:true,
        version:false,
        hash:false,
        timings:false,
        chunks:false,
        chunkModules:false
    }
}).listen(8888,'localhost',function(err){
    if(err){
        console.log(err);
    }
    console.log('Listening at localhost:8888');
});