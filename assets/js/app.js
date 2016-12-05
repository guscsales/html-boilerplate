define(['jquery', 'iCheck', 'jquery.validation.pt-BR', 'jquery.easing', 'jquery-mask', 'jquery-scroll-n-show', 'slick'], function ($) {
    return {
        initialize: function () {
            this.defineHeaderSize();
            this.navHover();
            this.render();
            this.events();
        },
        render: function(){
            $('.icheck').iCheck({
                checkboxClass: 'icheckbox_square-grey'
            });

            $('#main-header .slider').slick({
                arrows: false,
                dots: true,
                infinite: true,
                speed: 900,
                fade: true,
                autoplay: true,
                autoplaySpeed: 7000
            });

            $('.tabs-wrapper').slick({
                arrows: false
            });

            $('[name=phone]').mask('(00) 000000009');

            if(!this.isMobile.any())
                $.scroll.nShow({ duration: 900, easing: 'easeOut' });

        },
        events: function () {
            var SCROLL_TOP_SHOW_MAIN_MENU = 500;

            var $window = $(window),
                $mainMenu = $('.main-menu'),
                $navItems = $mainMenu.find('a[href*="#"]'),
                winHgt = $window.height(),
                menuClick = false;

            $window.resize(this.defineHeaderSize);

            $window.scroll(function(){
                var scrlTop = $(this).scrollTop();

                if(scrlTop >= SCROLL_TOP_SHOW_MAIN_MENU && !$mainMenu.hasClass('active'))
                    $mainMenu.addClass('active');
                else if(scrlTop < SCROLL_TOP_SHOW_MAIN_MENU && $mainMenu.hasClass('active'))
                    $mainMenu.removeClass('active');  

                if(scrlTop >= SCROLL_TOP_SHOW_MAIN_MENU && !menuClick)
                    $navItems.each(function() {
                        var $hash = $(this.hash),
                            containerPos = $hash[0].offsetTop + 500;
                            
                        if (scrlTop >= containerPos)
                            $(this).addClass('active').parent('li')
                                .siblings().find('a').removeClass('active');
                    });              
            });

            $window.trigger('scroll');

            var $tabBtn = $('.tabs nav .btn'),
                isSwiping = false;

            $tabBtn.click(function(){
                if(!isSwiping){
                    isSwiping = true;

                    $('.tabs-wrapper').slick('slickGoTo', $(this).index());

                    $(this).addClass('active').siblings().removeClass('active');
                }
            });

            $('.tabs-wrapper').on('swipe', function(event, slick){
                $tabBtn.eq(slick.currentSlide).addClass('active').siblings().removeClass('active');
            });

            $('.tabs-wrapper').on('afterChange', function(event, slick){
                isSwiping = false;
            });

            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    
                    $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');
                    
                    if ($target.length) {
                        menuClick = true;

                        $('html, body').animate({
                            scrollTop: $target.offset().top - 70
                        }, 800, 'easeInCubic', function(){
                            menuClick = false;
                        });
                        
                        $('.main-menu a[href="' + this.hash + '"]').addClass('active').parent('li').siblings().find('a').removeClass('active');
                        window.history.pushState({}, null, this.hash);
                        
                        return false;
                    }
                }
            });
        },
        defineHeaderSize: function () {
            var hgt = $(window).height(),
                $mainHeader = $('#main-header'),
                $slider = $mainHeader.find('.slider');

            $mainHeader.css({height: hgt});
            $slider.css({height: hgt - parseFloat($slider.css('margin-top'))});

        },
        navHover: function () {
            var defaultColor = '#914f8a';

            $('#main-header nav li').hover(
                    function () {
                        $('#main-header nav').css({
                            backgroundColor: $(this).data('color')
                        });
                    },
                    function () {
                        $('#main-header nav').css({
                            backgroundColor: defaultColor
                        });
                    }
            );
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