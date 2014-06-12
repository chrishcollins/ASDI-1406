Ti.UI.setBackgroundColor('transparent');

//require data from data.js
//var carData = require('data');

exports.views = function infoView(){
	for (i=0; i<carData.data.length; i++){
		var carView = Ti.UI.createView({
			backgroundColor: 'white',
			top: 10,
			color: '#000',
			height: '60',
			width: '100%'
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

