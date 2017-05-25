$(document).ready(function() {

// Step 1
// -------------------
	$(".add-item").on('click', function(event) {
		var listItem = $(".item-input").val();
			var itemHtml = "<li class='items'><span class='item-check incomplete'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'><img src='images/remove.png' alt='remove' width='20px'></span></li>";
			if(listItem.length > 0) {
				$(".shopping-list").prepend(itemHtml);
				$(".item-input").val("");
			}
	});
// -------------------


// Step 2
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
		if($(this).hasClass( "incomplete" )) {
			$(this).removeClass("incomplete");
			$(this).addClass("complete");
		} else {
			$(this).removeClass("complete");
			$(this).addClass("incomplete");
		}
	});
// -------------------


// Step 3
// -------------------
	$(".shopping-list").on('click', '.item-remove', function(event) {
		$(this).parent().remove();
	});
// -------------------

});