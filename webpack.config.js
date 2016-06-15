module.exports = {
     entry: './html/react-demo/js/react.1.js',
     output: {
         path: './html/react-demo/js',
         filename: 'react.1.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015', 'react']
             }
         }]
     }
 };