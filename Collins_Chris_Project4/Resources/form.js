
/*
var remote = require('data');
//Ti.include('database.js');
//Ti.include('form.js');


openDB();


// Create a TableView.


editView.add(editTextField, editSource, saveButton, cancelButton);






var db = Ti.Database.open("myTable");
db.execute("CREATE TABLE IF NOT EXISTS local (id INTEGER PRIMARY KEY, user TEXT)");

var localInfo = require("database");
var data = localInfo.localInfo();

var myTblView = Ti.UI.createTableView({
	//backgroundColor : '#475159',
	backgroundImage : 'images/3dSquare.jpg',
	height : Ti.UI.FILL,
	data : data,
	editable : false,
});

var win1 = Ti.UI.createWindow({
	barColor : '#95C954',
	title : 'Enter Information',
	backgroundImage : 'images/3dSquare.jpg'
});

var rowWin = Ti.UI.createWindow({
	barColor : '#95C954',
	title : 'Entered Favorites',
	color: '#fff',
	tabBarHidden: true,
	layout : 'vertical',
	backgroundImage : 'images/3dSquare.jpg'
});

var newView = Ti.UI.createWebView;


var enterRedText = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Enter Text",
	textAlign : "left",
	color : "#000000",
	top : 10,
	height : 40,
	width : '95%',
});

var enterSource = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Modify Source",
	textAlign : "left",
	color : "#000000",
	top : enterRedText.top + 50,
	height : 40,
	width : '95%',
});


var enter = Ti.UI.createButton({
	title : "Enter",
	color : "#ffffff",
	backgroundColor : "#95C954",
	borderRadius : 5,
	top : 280,
	height : 40,
	width : '95%',
});

var lastHeader = Ti.UI.createView({
	backgroundColor : '#000000',
	top : 0,
	height : 60,
	width : '100%',
});

var headText = Ti.UI.createLabel({
	title : 'Update Data',
	color : '#fff',
	top : 40,
	textAlign : 'left',
	font : {
		fontSize : 20,
		fontFamily : 'Helvetica Neue'
	},
});

var updateRedText = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Enter Full Name",
	textAlign : "left",
	color : "#000000",
	top : 70,
	height : 40,
	width : '95%',
});

var updateWebSource = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Favorite Food",
	textAlign : "left",
	color : "#000000",
	top : updateRedText.top + 50,
	height : 40,
	width : '95%',
});


var update = Ti.UI.createButton({
	title : "Update Info",
	color : "#ffffff",
	font : {
		fontSize : 20,
		fontFamily : 'Helvetica Neue'
	},
	backgroundColor : "#95C954",
	top : 0,
	width : '100%',
	height : 60,
});

var saveData = Ti.UI.createButton({
	title : "Save",
	color : "#ffffff",
	backgroundColor : "#95C954",
	borderRadius : 5,
	top : 300,
	width : 300,
	height : 40,
});

var cancel = Ti.UI.createButton({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	title : "Cancel",
	color : "#ffffff",
	backgroundColor : "#000000",
	bottom : 5,
	width : "100%",
	height : 60,
});

var userDecision = {
	cancel : 2,
	options : ["Edit", "Delete", "Cancel"],
	selectedIndex : 2,
	destructive : 1,
	title : "Edit/Delete Favorites"
};

var userChoice = {
	cancel : 1,
	options : ["Sure", "No Way"],
	selectedIndex : 1,
	destructive : 0,
	title : "You are about to delete your data.  Are you sure you want to continue\?"
};


var req = require("database");

//add to parent view
lastHeader.add(headText);


*/