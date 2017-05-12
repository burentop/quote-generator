var quoteText = "";

$(document).ready(function() {
	getQuote();
	$("#getMessage").on("click", function(event) {
		event.preventDefault();
		getQuote();
	});
	$("#tweet").on("click", function(event) {
		event.preventDefault();
		window.open("https://twitter.com/intent/tweet?text=" + quoteText);
	});
});

function getQuote() {
	$.ajax({
	  type: 'GET',
	  dataType: 'json',
	  cache: false,
	  url: 'https://api.icndb.com/jokes/random',
	  success: function(data){
	  	quoteText = data.value.joke;
	    $("#displayedQuote").html("<div class='quoteText'>" + quoteText + "</div>");
	  }
	});
}