const
    path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')

    module.exports = {
        entry: './index.js',
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // En caso de que no funcione, fallback
                    // Agrega el CSS al DOM en un <style>
                    fallback: 'style-loader',
                    // Interpreta archivos css en js
                    use: 'css-loader'
                })
            }]
        },
        plugin: [
            new ExtractTextPlugin('css/styles.css')
        ]
    }