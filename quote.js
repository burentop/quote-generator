var quoteText = "";
var quoteAuthor = "";

$(document).ready(function() {
	getQuote();
	$("#getMessage").on("click", function(event) {
		event.preventDefault();
		getQuote();
	});
	$("#tweet").on("click", function(event) {
		event.preventDefault();
		window.open("https://twitter.com/intent/tweet?text=" + quoteText + " - " + quoteAuthor);
	});
});

function getQuote() {
	$.ajax({
	  type: 'GET',
	  dataType: 'json',
	  cache: false,
	  url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
	  success: function(data){
	  	quoteText = data.quoteText;
	  	quoteAuthor = data.quoteAuthor;
	    $("#displayedQuote").html("<div class='quoteText'>" + quoteText + "</div><br>" + "<div class='quoteAuthor'>" + quoteAuthor + "</div>");
	  }
	});
}