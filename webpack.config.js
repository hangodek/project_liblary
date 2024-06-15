const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // Entry point for your application
    output: {
        filename: 'bundle.js', // Output bundle file
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Process CSS files
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i, // Process image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/', // Output images to the 'assets' folder in 'dist'
                            publicPath: 'assets/', // Public URL address of the output files
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Use the index.html file as a template
            filename: 'index.html' // Output filename
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css' // Output CSS filename
        })
    ],
    devtool: 'source-map', // Generate source maps for easier debugging
    devServer: {
        static: path.join(__dirname, 'dist'), // Serve content from the 'dist' directory
        compress: true, // Enable gzip compression
        port: 9000 // Port to run the development server
    }
};
