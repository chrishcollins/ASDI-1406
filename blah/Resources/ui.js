var tabGroup = Ti.UI.createTabGroup();

var tab1 = Ti.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'People',
	window : win1
});

var tab2 = Ti.UI.createTab({
	icon : 'KS_nav_ui.png',
	title : 'Add',
	window : win2
});

var tableData = Ti.UI.createTableView({
	backgroundColor : '#fff',
	height : Ti.UI.FILL
});

var favTbl = function(peopleData) { //creates rows from most current data from local storage

	var dataTable = [];
	for (i in peopleData) {
		var tblRows = Ti.UI.createTableViewRow({
			id : peopleData[i].id,
			width : Ti.UI.FILL,
			height : '50dp',
		});
		var tblView = Ti.UI.createView({
			layout : 'vertical',
			left : '15dp',
			top : '5dp',
			height : Ti.UI.FILL,
			width : Ti.UI.FILL
		});
		var nameLabel = Ti.UI.createLabel({
			text : peopleData[i].name,
			width : Ti.UI.FILL,
			font : {
				fontSize : '18sp',
				fontFamily : 'Helvetica',
				fontColor : '#000'
			}
		});
		var foodLabel = Ti.UI.createLabel({
			text : peopleData[i].enterFood,
			width : Ti.UI.FILL,
			font : {
				fontSize : '14sp',
				fontFamily : 'Helvetica',
				fontColor : '#000'
			}
		});
		
		var colorLabel = Ti.UI.createLabel({
			text : peopleData[i].enterFood,
			width : Ti.UI.FILL,
			font : {
				fontSize : '14sp',
				fontFamily : 'Helvetica',
				fontColor : '#000'
			}
		});

		tblView.add(nameLabel);
		tblView.add(foodLabel);
		tblView.add(colorLabel);
		tblRows.add(tblView);
		dataTable.push(tblRows);
		//rows are getting pushed inside the empty array
	}
	tableData.setData(dataTable);
	//set whole table with the array above
};

exports.tableData = tableData;
exports.favTbl = favTbl;

exports.nameLabel = Ti.UI.createLabel({
	text : 'Name',
	font : {
		fontSize : '18sp',
		fontFamily : 'Helvetica'
	},
	left : '15dp',
	top : '30dp',
	textAlign : 'left'
});

exports.nameField = Ti.UI.createTextArea({
	left : '15dp',
	right : '15dp',
	top : '3dp',
	height : '30dp',
	font : {
		fontSize : '18sp',
		fontFamily : 'Helvetica'
	},
	borderSize : '1dp',
	borderColor : 'gray',
	paddingLeft : '5dp',
	paddingRight : '5dp'
});

exports.foodLabel = Ti.UI.createLabel({
	text : 'enterFoodription',
	font : {
		fontSize : '18sp',
		fontFamily : 'Helvetica'
	},
	left : '15dp',
	top : '30dp',
	textAlign : 'left'
});

exports.foodField = Ti.UI.createTextArea({
	left : '15dp',
	right : '15dp',
	top : '3dp',
	height : '50dp',
	font : {
		fontSize : '18sp',
		fontFamily : 'Helvetica'
	},
	borderSize : '1dp',
	borderColor : 'gray',
	paddingLeft : '5dp',
	paddingRight : '5dp'
});

exports.button = Ti.UI.createButton({
	title : 'Add Person',
	height : '30dp',
	top : '30dp',
	left : '15dp',
	right : '15dp',
	backgroundColor : '#f3f3f3'
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

tabGroup.open();

exports.tab1 = tab1;
exports.tab2 = tab2;
exports.tabGroup = tabGroup; 