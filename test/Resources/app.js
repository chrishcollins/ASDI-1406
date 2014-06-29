// set the background color
Titanium.UI.setBackgroundColor('#000');

var getAPI = require('test1');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window
var win1 = Titanium.UI.createWindow({
	title : 'Charleston, SC Reddit',
	backgroundImage: 'images/wood_01.jpg',
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
var tab1 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Home',
	window : win1
});


var bringData = require('test2');

tabGroup.addTab(tab1);
//tabGroup.addTab(tab2);


win1.add(aTableView);


tabGroup.open();



