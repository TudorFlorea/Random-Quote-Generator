$(document).ready(function () {
        
//================== Generate the first random quote ===========================//
        var randId = Math.round(Math.random() * 49 + 1);
        var htmlQuotes = "";
        var htmlImages= "";
	  	var tweet = "";
        $.getJSON('js/quotes.json', function(json){
			htmlQuotes = "";
			htmlImages= "";
			tweet = "";
			console.log("randId is " + randId);
        	json = json.filter(function (val) {
          	return (val.id == randId);
        });  
       json.forEach(function(val) {
			htmlQuotes += "<p>" + val.Quote + "</p>";
			htmlQuotes += "<p> - " + val.Author + "</p>";
			htmlImages += "<img class='img img-responsive' src='" + val.link + "'>";
			tweet += 'https://twitter.com/intent/tweet?text=' + '"' + val.Quote + '"' + ' - ' + val.Author; 
        }); // --- end .forEach ---
			$("#quotes").html(htmlQuotes);
			$("#images").html(htmlImages);
			$('#tweet').click(function() {
				window.location.href = tweet;
				return false;
				});
		});	// --- end .getJSON ---
        
	//============= Generate a random quote when the button is pressed==============//
	$("#newQuote").on("click", function(){
		randId = Math.round(Math.random() * 49 + 1);
        
		//https://api.myjson.com/bins/4ywow
		//https://api.myjson.com/bins/36xtu
		//https://api.myjson.com/bins/25vqc
		//https://api.myjson.com/bins/3b3ww
		$.getJSON('js/quotes.json', function(json){
			htmlQuotes = "";
			htmlImages = "";
			tweet = "";
			console.log("randId is " + randId);
        json = json.filter(function (val) {
          return (val.id == randId);
        });  
       json.forEach(function(val) {
          htmlQuotes += "<p>" + val.Quote + "</p>";
			 htmlQuotes += "<p> - " + val.Author + "</p>";
			 htmlImages += "<img class='img img-responsive' src='" + val.link + "'>";
			 tweet += 'https://twitter.com/intent/tweet?text=' + '"' + val.Quote + '"' + ' - ' + val.Author;
        }); // --- end .forEach ---
		$("#quotes").html(htmlQuotes);
		$("#images").html(htmlImages);
		$('#tweet').click(function() {
				window.location.href = tweet;
				return false;
				});
		});	// --- end .getJSON ---
	}); // --- end .onClick ---
}); // --- end document.ready ---