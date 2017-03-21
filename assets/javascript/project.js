
$("#searchs").click(searching)


function searching (){
	var term = $("#search").val()
	console.log(term)
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
	term + "&api_key=c9b34fcd751144018a82815bac15ae58";
	$.ajax({
	url: url,
	method: 'GET',
	}).done(function(response) {
	console.log(response)
	var results = response.response.docs;
	console.log(results)

for(var i = 0; i < results.length; i++) {
    var articleDiv = $('<div>');
    var articleNameDiv = $('<h3>').text(results[i].headline.main);
    var authorDiv = $('<small>').text(results[i].byline.original);
    articleDiv.append(articleNameDiv);
    articleDiv.append(authorDiv);
    $('#display').append(articleDiv);
	}
})}