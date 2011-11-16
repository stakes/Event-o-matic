var EVENTOMATIC =
{
    landing :
	{
		init : function()
		{
			
			initializeNav();
			initializeScroll();
	
        }
	}
};


initializeNav = function() {
  
    var win = $(window)
        tgt = $('#navigation');
        tgthgt = tgt.height();
        offset = tgt.offset();
        
        
    tgt.scrollSpy()
    
    if (win.scrollTop() >= 200) {
        $('.slideout', tgt).stop(true, true).css({'opacity': 1});
    } else {
        $('.slideout', tgt).stop(true, true).css({'opacity': 0});            
    }
    
    win.scroll(function() {
        
        if (win.scrollTop() >= 500) {
            tgt.css('position', 'fixed');
            tgt.css('top', 0);
            tgt.css('margin-top', 0);
            tgt.css('width', '100%');
        } else {
            tgt.css('position', 'relative');
            tgt.css('margin-top', -70);
        }

        if (win.scrollTop() >= 200) {
            $('.slideout', tgt).stop(true, true).animate({'opacity': 1});
        } else {
            $('.slideout', tgt).stop(true, true).animate({'opacity': 0});            
        }
  
    }); 

};

initializeScroll = function() {
	$("#navigation .anchor-link").click(function(evt){
		//prevent the default action for the click event
		evt.preventDefault();

		//get the full url - like mysitecom/index.htm#home
		var full_url = this.href;

		//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
		var parts = full_url.split("#");
		var trgt = parts[1];

		//get the top offset of the target anchor
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;

		//goto that anchor by setting the body scroll top to anchor top
		$('html, body').animate({scrollTop:target_top-36}, 500);
	});
};

