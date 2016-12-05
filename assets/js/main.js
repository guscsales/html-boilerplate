requirejs.config({
    paths: {
        'jquery': '/assets/plugins/jquery/jquery.min',
        'jquery.validation': '/assets/plugins/jquery-validation/jquery.validate.min',
        'jquery.validation.pt-BR': '/assets/plugins/jquery-validation/localization/messages_pt_BR.min',
        'jquery.easing': '/assets/plugins/jquery.easing.min',
        'jquery-mask': '/assets/plugins/jquery-mask-plugin/jquery.mask.min',
        'jquery-scroll-n-show': '/assets/plugins/jquery-scroll-n-show/jquery-scroll-n-show',
        'iCheck': '/assets/plugins/icheck/icheck.min',        
        'slick': '/assets/plugins/slick-carousel/slick.min'
    },
    shim:{
        'iCheck':{
            deps: ['jquery']
        },
        'jquery.validation':{
            deps: ['jquery']
        },
        'jquery.validation.pt-BR':{
            deps: ['jquery.validation']
        },
        'jquery-rmc-slider':{
            deps: ['jquery']
        },
        'jquery.easing':{
            deps: ['jquery']
        },
        'jquery-mask':{
            deps: ['jquery']
        },
        'jquery-scroll-n-show':{
            deps: ['jquery']
        },
        'slick':{
            deps: ['jquery']
        }
    }
});

require(['jquery', 'app', 'budget', 'contact'], function ($, App, Budget, Contact) {
    App.initialize();
    Budget.initialize();
    Contact.initialize();

    $('.wrapper-loader').addClass('not-active');

    setTimeout(function(){
        $('.loader-wrapper').addClass('not-active');
    }, 500);
});