const mix = require('laravel-mix');


mix.js('resources/js/index.js', 'public/js');

mix.webpackConfig({ node: { fs: 'empty' }});

mix.sass('resources/sass/style.scss', 'public/css').options({ processCssUrls: false });

if( !mix.inProduction() ) {
    mix.webpackConfig({
        devtool:"inline-source-map",
    });
    mix.sourceMaps();
}

if(mix.inProduction() ) {
    mix.minify('public/js/index.js');
    mix.minify('public/css/app.css');
    mix.version();
}