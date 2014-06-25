// set the background color
Titanium.UI.setBackgroundColor('#000');
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;

var getAPI = require('remote');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window
var win1 = Titanium.UI.createWindow({
	title : 'Reddit API',
	backgroundImage: 'images/wood_01.jpg',
	//barColor : '#95C954',
	//backgroundColor: 'red',
	tabBarHidden : true,
	statusBarHidden : false,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

// Create a TableView.
var aTableView = Ti.UI.createTableView({
	backgroundColor : 'transparent',
	rowHeight : 90,
	rowWidth : 200,
	top : 0,
	bottom : 0
});

//create tab
tab1 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Tab 1',
	window : win1
});

tabGroup.addTab(tab1, aTableView);

// open tab group

win1.add(aTableView);
tabGroup.open();
//win1.open();