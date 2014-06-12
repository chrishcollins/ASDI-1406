//set background color
Titanium.UI.setBackgroundColor('#000');

//require data from other.js
var carInfo = require('other');


var mainWindow = Titanium.UI.createWindow({  
    title:'Great Cars',
    backgroundColor:'transparent',
    color: "#fff",
    navBarHidden: 'false',
    statusBarHidden: 'false'
    
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	barColor: "black",
	window: mainWindow
});


var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  layout: 'vertical',
  showHorizontalScrollIndicator: false,
  top: 60,
  height: '90%',
  width: '90%'
});

//add views to parent

mainWindow.add(scrollView);

var showOther = require("other");
showOther.views();

carInfo.views();
navWin.open();
mainWindow.open();