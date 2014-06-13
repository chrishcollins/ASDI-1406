Ti.UI.setBackgroundColor('#000000');

var win1 = Ti.UI.createWindow({
	backgroundColor: '#fefefe',
	fullscreen: true,
	layout: 'vertical'
});

var header = Ti.UI.createView({
	height: 30,
	backgroundColor: '#ccc',
	top: 0
});

var headerLabel = Ti.UI.createLabel({
	text: "Reddit API",
	font: {fontFamily: 'Helvetica', fontSize: 14, fontWeight: 'bold'}
});

var scrollData = Ti.UI.createLabel({
	height: Ti.Platform.displayCaps.platformHeight = header,
	layout: 'vertical'
});


header.add(headerLabel);
win1.add(header);
win1.add(scrollData);

var data = require('data');

win1.open();
