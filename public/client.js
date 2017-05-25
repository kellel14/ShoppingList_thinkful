$(document).ready(function() {

// Step 1
// -------------------
	$(".add-item").on('click', function(event) {
		var listItem = $(".item-input").val();
		var itemHtml = "<li class='items'><span class='item-check incomplete'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'><img src='https://cdn.glitch.com/72548e86-2a07-45d1-9756-a034ea6672b3%2Fremove.png?1495684443965' alt='remove' width='20px'></span></li>";
    // add your code here
    
	});
// -------------------


// Step 2
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
      // add your code here
	});
// -------------------


// Step 3
// -------------------
	$(".shopping-list").on('click', '.item-remove', function(event) {
      // add your code here
	});
// -------------------

});