'use strict';

define([], function () {
    return {
        isMobile: {
            Android: function() {
                return /Android/i.test(navigator.userAgent);
            },
            iOS: function() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            },
            Windows: function() {
                return /IEMobile/i.test(navigator.userAgent) || /WPDesktop/i.test(navigator.userAgent);
            },
            any: function() {
                return (this.Android() || this.iOS() || this.Windows());
            }
        }
    };
});