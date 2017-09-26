// Import Webpack npm module
var webpack = require('webpack');
const path = require('path');

module.exports = {
  // Which file types are in our project, and where they are located
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ["src", "node_modules"]
  },
  module: {
    // How to process project files with loaders
    rules: [
      // Process any .js or .jsx file with Babel
      { 
        test: /\.jsx?$/, 
        use: ['babel-loader']
      }
    ]
  },
  // Which file is the entry point to our application
  entry: [
    'index.jsx'
  ],
  // Where to output the final bundled code to
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
