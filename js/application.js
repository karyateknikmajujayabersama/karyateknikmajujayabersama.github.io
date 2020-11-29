(function() {
	"use strict";

	$(".carousel").on("click", function(e) {
		let $el = $(e.currentTarget);
		let $parent = $el.closest(".styles");
		let allImages = $parent.children(".image-container");

		let shownImage = $parent.children(".image-container").not(".hidden").first();
		let shownImageId = +shownImage.attr("data-item-id");

		let nextImageId;
		if ($el.hasClass("left")) {
			nextImageId = shownImageId - 1;
			if (nextImageId <= 0) {
				nextImageId = allImages.length;
			}
		} else {
			nextImageId = shownImageId + 1;
			if (nextImageId > allImages.length) {
				nextImageId = 1;
			}
		}

		let nextImage = $parent.children(".image-container[data-item-id=" + nextImageId + "]").first();

		shownImage.addClass("hidden");
		nextImage.removeClass("hidden");
	});
})();


// Not used.
// 