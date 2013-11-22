// JavaScript Document

function getLures()
{
	$.getJSON("http://www.swiftpixel.com/lures_app/lures.json", function(lures){
	
	for (var i=0; i<lures.length; i++)
	{
		document.getElementById('lureList').innerHTML +=
		'<li>' + '<a href="'+lures[i].page+'">' + 
		'<h1>' + lures[i].brand + '</h1>' +
		'<img src="'+lures[i].image+'">' +
		'<p>' + lures[i].lureName + '</p>' + '</a>' + '</li>'
	}
	
	$('#lureList').listview('refresh'); /*refresh the listview */
		
	});
}