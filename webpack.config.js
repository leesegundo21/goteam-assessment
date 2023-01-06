const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]',
        publicPath: '/'
      }
};
