'use strict';

requirejs.config({
    paths: {
        'jquery': '/node_modules/jquery/dist/jquery.min',
    },
    shim: {}
});


var modules = [
    'jquery',
    'modules'
];

require(modules, function ($) {
    $('.wrapper-loader').addClass('not-active');

    setTimeout(function () {
        $('.loader-wrapper').addClass('not-active');
    }, 500);
});