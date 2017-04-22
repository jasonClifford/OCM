var webpack = require('webpack');

module.exports = {
    entry: './src/App.js',
    output: {
      path: './',
      filename: 'bundle.js'
    },
    
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude:/(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    }
};
