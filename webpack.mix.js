const mix = require('laravel-mix');

mix.js('src/index.js', 'dist/index.js')
    .vue()
    .webpackConfig({
        output: {
            libraryTarget: 'umd'
        }
    })
