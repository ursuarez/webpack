const
    path = require('path'),
    config = {
        entry: './index.js',
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }]
        }
    }

    module.exports = config