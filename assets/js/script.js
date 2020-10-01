var timer;
$(document).ready(function(){
    var grid = $(".masonry");

    $("[data-fancybox]").fancybox({
		caption : function( instance, item ) {
	        var caption = $(this).data('url') || '';
	        if ( item.type === 'image' ) {
	            caption = (caption.length ? caption + '<br />' : '')
	             + '<a href="' + item.src + '" target="_blank">View Full image</a><br>';
	        }
	        return caption;
	    }
	});
});