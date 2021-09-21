const mix = require('laravel-mix');


mix.js('resources/js/index.js', 'public/js');

mix.webpackConfig({ node: { fs: 'empty' }});

mix.sass('resources/sass/style.scss', 'public/css').options({ processCssUrls: false });

// mix.sass('resources/sass/style.css', 'public/css');

// mix.copyDirectory('resources/sass/documents', 'public/css/documents');

if( !mix.inProduction() ) {
    mix.webpackConfig({
        devtool:"inline-source-map",
    });
    mix.sourceMaps();
}

if(mix.inProduction() ) {
    // mix.minify('public/js/app.min.js');
    // mix.minify('public/css/app.css');
    // mix.minify('public/css/base.css');
    mix.version();
}