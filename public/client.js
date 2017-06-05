$(document).ready(function() {

// Step 1
// -------------------
	$(".add-item").on('click', function(event) {
		  var listItem = $(".item-input").val();
		  var itemHtml = "<li class='items'><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
      // add your code here
	});
// -------------------


// Step 2
// -------------------
	$(".shopping-list").on('click', '.item-remove', function(event) {
      // add your code here
	});
// -------------------
  
// Step 3
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
      // add your code here
	});
// -------------------

});