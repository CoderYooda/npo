<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita807248fe6f028918cf16d6abe8856d0
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Sendpulse\\RestApi\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Sendpulse\\RestApi\\' => 
        array (
            0 => __DIR__ . '/..' . '/sendpulse/rest-api/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita807248fe6f028918cf16d6abe8856d0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita807248fe6f028918cf16d6abe8856d0::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}