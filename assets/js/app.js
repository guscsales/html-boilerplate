define(['jquery', 'iCheck', 'jquery.validation.pt-BR', 'jquery.easing', 'jquery-mask', 'jquery-scroll-n-show', 'slick'], function ($) {
    return {
        initialize: function () {
            this.render();
            this.events();
        },
        render: function(){
            

        },
        events: function () {
            
        },
        isMobile: {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function() {
                return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            }
        }
    };
});