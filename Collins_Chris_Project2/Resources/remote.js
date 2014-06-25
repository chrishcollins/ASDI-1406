//getOther = require('other');

//what I’m going to do with the data when I get it
var remoteResponse = function() {
	Ti.API.debug[this.responseText]; // debug out the response text
	var json = JSON.parse(this.responseText);

	var sections = [];

	var myTable = Ti.UI.createTableViewSection({});

	for ( i = 0; i < json.data.children.length; i++) {
		var dataRow = Ti.UI.createTableViewRow({
			url : json.data.children[i].data.url,
			domain : json.data.children[i].data.domain,
			testTitle : json.data.children[i].data.title,
			testAuthor : json.data.children[i].data.Author,
			thumbNail : json.data.children[i].data.thumbnail,
			hasChild : true
		});

		var tableText = Ti.UI.createLabel({
			text : dataRow.testTitle,
			backgroundImage: 'images/wood_01',
			fontSize : 11,
			color : "#ffffff",
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			top : 5,
			left : 70,
			height : 60
		});

		var infoText = Ti.UI.createLabel({
			text : dataRow.domain,
			fontSize : 11,
			color : "#000000",
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			bottom : 5,
			left : 70
		});
		
		var imgView = Ti.UI.createImageView({
			images: dataRow.thumbnail,
			height: 50,
			width: 50,
			left: 10,
			right: 10,
			image: json.data.children[i].data.thumbnail,
			borderRadius: 10
		});
		
		
		
		dataRow.add(tableText);
		dataRow.add(infoText);
		dataRow.add(imgView);
		myTable.add(dataRow);
	};
	sections.push(myTable);
	aTableView.setData(sections);
};

var remoteError = function(e) {//if there is an error we are going to log out some other things to make sure we can recognize the error
	Ti.API.debug('Status: ' + this.status);
	Ti.API.debug('Text: ' + this.responseText);
	TI.API.debug('Error: ' + e.error);
	alert("There's a problem pulling remote data");
};

// run everything through the XHR HTTP client
var xhr = Ti.Network.createHTTPClient({
	Onload : remoteResponse,
	OnError : remoteError,
	Timeout : 5000 //if we don’t have a response within 5 sec then it will just stop.
});

//open using http
xhr.open('GET', 'http://api.reddit.com/r/Charleston');
xhr.send();

//exports.remote = dataRow;
