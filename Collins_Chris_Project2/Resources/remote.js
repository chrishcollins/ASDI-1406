getOther = require('other');
var myTable = Ti.UI.createTableViewSection({});

//what I’m going to do with the data when I get it
var remoteResponse = function(){
	Ti.API.debug[this.responseText]; // debug out the response text
	var json = json.parse(this.responseText);
	
	Ti.API.debug(testTitle);
	Ti.API.debug(testAuthor);
};



for(i=0; i<json.data.children.length; i++){
	dataRow = Ti.Ui.createTableViewRow({
		url: json.data.children[i].data.url,
		domain : json.data.children[i].data.domain,
		testTitle : json.data.children[i].data.title,
		testAuthor : json.data.children[i].data.Author,
		thumbNail : json.data.children[i].data.thumbnail,
		hasChild: true
	});
	
		var tableText = Ti.UI.createLabel({
		text: dataRow.testTitle,
		fontSize: 14,
		color: "#000000",
		textAlign: Ti.UI.TEXT_ALIGNMENT-LEFT,
		top: 15,
		left: 10
	});
	
	    var infoText = Ti.UI.createLabel({
		text: dataRow.domain,
		fontSize: 11,
		color: "#000000",
		textAlign: Ti.UI.TEXT_ALIGNMENT-LEFT,
		top: 25,
		left: 10
	});
	
};




dataRow.add(tableText, infoText);
myTable.add(dataRow);


Ti.API.debug(testAuthor);
Ti.API.debug(testTitle);
exports.url = dataRow.url;

var remoteError = function(e) {  //if there is an error we are going to log out some other things to make sure we can recognize the error
	Ti.API.debug('Status: ' + this.status);
	Ti.API.debug('Text: ' + this.responseText);
	TI.API.debug('Error: ' + e.error);
	alert("There's a problem pulling remote data");
};

// run everything through the XHR HTTP client
var xhr = Ti.Network.createHttpClient({ 
	Onload: remoteResponse,
	OnError: remoteError,
	Timeout: 5000 //if we don’t have a response within 5 sec then it will just stop.
});

//open using http
xhr.open('GET' , 'http://www.reddit.com/r/Charleston/wiki/index');
xhr.send();

var apiData = [remoteResponse, remoteError, json, xhr,testTitle, testAuthor, dataRow, jsonData, tableText, infoText];
exports.remote = dataRow;
