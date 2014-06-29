Ti.UI.setBackgroundColor('transparent');

//require data from data.js
var carData = require('data');

exports.views = function infoView(){

for(i=0; i<json.data.children.length; i++){
	dataRow = Ti.Ui.createTableViewRow({
		url: json.data.children[i].data.url,
		domain : json.data.children[i].data.domain,
		testTitle : json.data.children[i].data.title,
		testAuthor : json.data.children[i].data.Author,
		thumbNail : json.data.children[i].data.thumbnail,
		hasChild: true
	});



		// Create a Label.
		var aLabel = Ti.UI.createLabel({
			backgroundColor: 'transparent',
			text: carData.data[i].myData(),
			color: '#000',
			//font: {fontSize:myFontSize},
			height: 'auto',
			width: 'auto',
			left: 10,
			textAlign: 'center'
		});

		// Add to the parent view.
		carView.add(aLabel);
		scrollView.add(carView);
		navWin.add(scrollView);
	};
};