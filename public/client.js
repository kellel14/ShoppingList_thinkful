$(document).ready(function() {

// Step 1
// -------------------
	$(".add-item").on('click', function(event) {
		  var listItem = //Use jQuery to grab the value of item-input
		  var itemHtml = "<li class='items'><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
      // Add the itemHtml section we created for you above to the shopping-list
      // Remove the text from item-input
      // Make sure your solution works by hitting "Show Live" in the nav bar
	});
// -------------------


// Step 2
// -------------------
// This event starts when someone clicks the "X" button on the top right
	$(".shopping-list").on('click', '.item-remove', function(event) {
      // Use $(this) to remove the shopping item from the shopping list
	});
// -------------------
  
// Step 3
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
      // Use $(this) to add and remove the "complete" class to the checkbox
	});
// -------------------

});