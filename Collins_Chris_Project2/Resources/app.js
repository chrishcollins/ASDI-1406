// set the background color
Titanium.UI.setBackgroundColor('#000');

var getAPI = require('remote');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window
var win1 = Titanium.UI.createWindow({
	title : 'Reddit API',
	tabBarHidden : true,
	statusBarHidden : false
});

// Create a TableView.
var aTableView = Ti.UI.createTableView({
	backgroundColor : '#616161',
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