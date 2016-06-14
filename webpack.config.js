module.exports = {
     entry: './html/js/react.1.js',
     output: {
         path: './html/js',
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