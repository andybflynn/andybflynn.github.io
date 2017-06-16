//register global namespace and global functions

var Global = {
	smoothScrollTo: function(e, $target, offsetPercentage) {
		e.preventDefault();
		if ($target.length > 0) {
			$('html,body').animate({
	          scrollTop: $target.offset().top + ($target.height()*(offsetPercentage/100))
	        }, 1000);
	    }
	}
}
$(document).ready(function() {
	//call any methods that need to be run on DOM ready
	$('[data-smooth-scroll]').on('click', function(e) {
		var $smoothScrollEl = $(this)
			, $target = $smoothScrollEl.data('smooth-scroll-target') || $smoothScrollEl
			, offsetPercentage = $smoothScrollEl.data('smooth-scroll-offset-percentage') || 0
		;

		Global.smoothScrollTo(e, $($target), offsetPercentage);
	});

});
