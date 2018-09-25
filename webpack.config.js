const 
    path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    config = {
        mode: 'development',
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: 
                    [MiniCssExtractPlugin.loader, "css-loader"]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].css"
            })
        ]
    }

module.exports = config