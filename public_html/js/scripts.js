(function($){

    if ($("ul.dropdown-menu [data-toggle=dropdown]")){
    alert("Элемент есть");
    }
    else { alert("Элемента нет");}
    
     $('ul.dropdown-toggle').css( "background", "yellow" );

$(document).ready(function(){
  
		$('ul.dropdown-toggle [data-toggle=dropdown]').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		//$(this).parent().siblings().removeClass('open');
		//$(this).parent().toggleClass('open');
        $(this).parent().css( "background", "yellow" );
        
        $(this).parent().addClass('open');
        var menu = $(this).parent().find("ul");
        var menupos = menu.offset();
        if ($menu.hasClass('dropdown-menu')) {
            menu.css('margin-right', $menu.outerWidth() / -2);
        } 
        var newpos = menu.width();
		menu.css({left: newpos});

		});
        
	
	});
    
    
    
})(jQuery);



	
	// $( ".pull-center" ).siblings( ".dropdown-menu" ).css( "background", "yellow" );

	
	
	// http://seyferseed.ru/ru/php/fiks-bootstrap-3-navigation-dropdown-submenu-i-realizatsiya-v-zend-framework-2-i-smarty.html#sthash.fddYZea4.dpbs