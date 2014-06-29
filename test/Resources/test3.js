/*
var req = require('test2');
var db = Ti.UI.Database.open('myTable');
var openDB = function(){
	db.execute('CREATE TABLE "redditNews" ("id" INTEGER PRIMARY KEY  NOT NULL , "redTitle" TEXT, "webSource" TEXT)');
};

var getRowData = function(){
	var currentData = [];
	var rows = db.execute('myTable');
	
	while(rows.isValidRow()) {
		var id = rows.fieldByName('id');
		var redTitle = rows.fieldByName('testTitle');
		var webSource = rows.fieldByName('url');
		
		currentData.push({
			title: redTitle + " - " + webSource,
			id: id
		});
		
		rows.next();
	}
	return currentData;
	
};


var createInfo;
var localInfo;
var parseData;
var displayData;

exports.localInfo = function getRowData() {
	var createInfo = [];
	var localInfo = db.execute("SELECT * FROM local");
	while (localInfo.isValidRow()) {
		var parsedData = unescape(localInfo.fieldByName("user"));
		var displayData = JSON.parse(parsedData);

		createInfo.push({
			title : displayData.wholeName + " " + displayData.yourFood + " " + displayData.updateColor,
			color: '#fff',
			backgroundColor: 'transparent',
			Rdt : displayData.Rdt,
			wbsrce : displayData.wbsrce,
			id : localInfo.fieldByName("id")
		});

		localInfo.next();
	}

	return createInfo;
};
*/