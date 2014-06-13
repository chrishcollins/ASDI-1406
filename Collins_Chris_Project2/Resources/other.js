/*
var remRequire = require('remote');

//var remoteInfo = [dataWin, dataRow, nextLabel, otherLabel, aWebView, back];


var rowEvent = aTableView.addEventlistener('click', function(e){
	
	var dataWin = Ti.UI.createWindow({
		title: event.source.title,
		backgroundColor: '#000000',
		modal: true,
	});
	
	var dataView = Ti.UI.createView({
		backgroundColor: '#000000',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	});
	
	var nextLabel = Ti.UI.createLabel({
		text: 'Next',
		color: 'blue',
		fontSize: 14,
		top: '50%',
		right: '10%'
	});
	
	var otherLabel = Ti.UI.createLabel({
		text: event.source.text,
		url: event.source.url,
		color: 'blue',
		fontSize: 14,
		top: '10%',
		left:'10%',
		width: '80%'
	});
	
	
		// Create a WebView
		var aWebView = Ti.UI.createWebView({
			url : 'http://www.reddit.com/r/Charleston/wiki/index'
		});
		aWebView.addEventListener('click', function(e) {
			Ti.API.info('webview loaded: '+ e.url);
		});
		
		
		// Create a Button.
		var back = Ti.UI.createButton({
			title : 'Back',
			color: '#ffffff',
			//textAlign: center,
			height : 40,
			width : '50%',
			top : '15%'
		});
		
		// Listen for click events.
		back.addEventListener('click', function(e) {
			win1.open();
		});
		
		// Add to the parent view
		dataView.add(back);
		

dataWin.add(dataView, aWebView);
dataView.add(nextLabel, otherLabel);
win1.open(dataWin);
dataWin.open();
*/