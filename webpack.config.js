const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer:{
    static:{
        directory: path.resolve(__dirname, 'dist'),
       
    }
  },
  devtool :"inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cheesy Restaurant', // The title of the generated HTML file
      template: path.resolve(__dirname,'src/template.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource"
      }
    ]
  }
};
