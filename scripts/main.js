//register global namespace and global functions

var Global = {
	matchHeights: function() {
					//look for all items with height match data attributes
					$('[data-match-heights]').each(function() {
						var $this = $(this)
							, innerClass = $this.data('match-heights')
							, maxHeight = 0
							, matchedEls = $this.find(innerClass)
						;

						//loop through the inner classes to find the match height, then set all of them to the max
						matchedEls.each(function() {
							//remove any existing inline height
							$(this).css('height','');
							var height = $(this).height();
							if (height > maxHeight) {
								maxHeight = height;
							}
						});
						matchedEls.height(maxHeight);
					});
	}
	, smoothScrollTo: function(e, $target, offsetPercentage) {
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
	Global.matchHeights();
	$('[data-smooth-scroll]').on('click', function(e) {
		var $smoothScrollEl = $(this)
			, $target = $smoothScrollEl.data('smooth-scroll-target') || $smoothScrollEl
			, offsetPercentage = $smoothScrollEl.data('smooth-scroll-offset-percentage') || 0
		;

		Global.smoothScrollTo(e, $($target), offsetPercentage);
	});

});

$(window).on('resize', function() {
	//call any methods that need to be run when the window is resized
	Global.matchHeights();
});
