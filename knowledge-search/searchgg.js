var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
var search_params = {
	'query': '',
	'limit': 15,
	'indent': true,
	'key' : 'AIzaSyAz1Tm2iasFEdyhYw4s4YtKLq0s3Q_R7bU ',
};	

$("#searchbox").keypress(function(e) {
	var key = e.which;
	if(key == 13){
		searchResults($(this).val());
	}
});

function searchResults(keyword) {
	search_params.query = keyword;
	$("#results-master").html("");
	$.getJSON(service_url + '?callback=?', search_params, function(response) {
    $.each(response.itemListElement, function(i, element) {
     	displaySearchResult(element);
    });
  });
}

function displaySearchResult(element) {
	if('image' in element['result']) {
		var topic = $('<div>', {
			text: element['result']['name'],
			class: "result-topic"
		});
		var image = $('<img />', {
			src: element['result']['image']['contentUrl'],
			class: "result-image"
		});

		var newdiv = $('<span class="result-box"></span>').append(topic).append(image)
			.attr('href', element['result']['detailedDescription']['url'])
			.on('click', clickOnResults);
		$('#results-master').append(newdiv);
	}
}

function clickOnResults(event) {
	var newlink = event.target.closest('.result-box').getAttribute('href');
	var win = window.open(newlink, '_blank');
	win.focus();
}