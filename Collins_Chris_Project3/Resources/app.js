//Set master background color
Titanium.UI.setBackgroundColor('#000');

var tabGroup = Ti.UI.createTabGroup();

//Ti.Database.install('database/local.sqlite', "enteredData" );

var db = Ti.Database.open("local");
db.execute("CREATE TABLE IF NOT EXISTS local (id INTEGER PRIMARY KEY, user TEXT)");

var localInfo = require("localData");
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

var win2 = Ti.UI.createWindow({
	barColor : '#95C954',
	title : 'Entered Favorites',
	color: '#fff',
	layout : 'vertical',
	backgroundImage : 'images/3dSquare.jpg'
});

var win3 = Ti.UI.createWindow({
	title : "Update Information",
	backgroundImage : 'images/3dSquare.jpg',
});

var tab1 = Ti.UI.createTab({
	icon : 'images/list26.png',
	title : 'Create',
	window : win1
});

var tab2 = Ti.UI.createTab({
	icon : 'images/storage11.png',
	title : 'Local Data',
	window : win2
});

var enterName = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Enter Full Name",
	textAlign : "left",
	color : "#000000",
	top : 10,
	height : 40,
	width : '95%',
});

var enterSource = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Favorite Food",
	textAlign : "left",
	color : "#000000",
	top : enterName.top + 50,
	height : 40,
	width : '95%',
});

var enterColor = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Favorite Color",
	textAlign : "left",
	color : "#000000",
	top : enterSource.top + 50,
	height : 40,
	width : '95%',
});

var enter = Ti.UI.createButton({
	title : "Enter",
	color : "#ffffff",
	backgroundColor : "#95C954",
	borderRadius : 5,
	top : enterColor.top + 80,
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

var updateName = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Enter Full Name",
	textAlign : "left",
	color : "#000000",
	top : 70,
	height : 40,
	width : '95%',
});

var updateFood = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Favorite Food",
	textAlign : "left",
	color : "#000000",
	top : updateName.top + 50,
	height : 40,
	width : '95%',
});

var updateColor = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : "Favorite Color",
	textAlign : "left",
	color : "#000000",
	top : updateFood.top + 50,
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

//require interface.js file
var req = require("interface");

//add to parent view
lastHeader.add(headText);
win1.add(enterName);
win1.add(enterSource);
win1.add(enterColor);
win1.add(enter);
win2.add(myTblView);
win3.add(lastHeader);
win3.add(updateName);
win3.add(updateFood);
win3.add(updateColor);
win3.add(saveData);
win3.add(update);
win3.add(cancel);

//add tabs
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

//open tab group
tabGroup.open();
