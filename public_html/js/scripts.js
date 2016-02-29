(function ($) {

    $(document).ready(function () {

        $('ul .dropdown-toggle[data-toggle=dropdown]').on('click', function (event) {

            var menu = $(this).parent().find('.dropdown-menu');
            //var menu = $(this).parent().find("ul");
        
            if (menu.hasClass('pull-center')) {
                menu.css('margin-right', menu.outerWidth() / -2);
            }

            console.log("margin-right:", menu.outerWidth() / -2);
            console.log("menu.offset:", menu.offset());
            console.log("menu.width:", menu.width());

        });

    });

    $(document).ready(function () {
        $('ul .dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });

})(jQuery);

	// https://pixelgrade.com/demos/silk-lite/
	// http://seyferseed.ru/ru/php/fiks-bootstrap-3-navigation-dropdown-submenu-i-realizatsiya-v-zend-framework-2-i-smarty.html#sthash.fddYZea4.dpbs