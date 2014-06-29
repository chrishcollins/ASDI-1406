var myapp = {}; // app's namespace

// Install the database
Ti.Database.install('weather.sqlite', 'weather');

myapp.convertTemp = function(temp) {
	if(Ti.App.Properties.getString('units','c')==='f') {
		return Math.round(temp*1.8+32) +'\u00b0F'; // convert to Fahrenheit & append degree symbol-F
	} else {
		return temp +'\u00b0C';
	}
};

/*
 * getRows() queries the database and builds the rows of our weather table
 */
myapp.getRows = function() {
	var db = Ti.Database.open('weather');
	var data = [];
	var rs = db.execute('SELECT city, temp, condition, icon FROM cities JOIN conditionCodes ON cities.conditionID = conditionCodes.conditionID ORDER BY city');
	while(rs.isValidRow()) {
		var tblRow = Ti.UI.createTableViewRow({
			minRowHeight:40
		});
		tblRow.add(Ti.UI.createImageView({
			image:'http://www.worldweather.org/img_cartoon/'+rs.fieldByName('icon'),
			width:35,
			height:35,
			left:2,
			top:2
		}));
		tblRow.add(Ti.UI.createLabel({
			text: rs.fieldByName('city'),
			font:{
				fontWeight:'bold',
				fontSize:20
			},
			color:'black',
			left:40,
			top:2
		}));
		tblRow.add(Ti.UI.createLabel({
			text: myapp.convertTemp(rs.fieldByName('temp')),
			font:{
				fontSize:15
			},
			color:'black',
			right:2,
			top:2,
			width:50
		}));
		data.push(tblRow);
		rs.next();
	}
	db.close();
	return data;
};

/*
 * createWxWindow() creates the window that contains our weather table
 */
myapp.createWxWindow = function(){
	var win = Ti.UI.createWindow({
		title: 'Current Conditions',
		backgroundColor:'white'
	});
	var table = Ti.UI.createTableView();
	// define, then call a function to populate our weather table
	function populate(){
		table.setData(myapp.getRows());
	}
	populate();
	// add an event listener to repopulate our table when the units preferences are changed
	Ti.App.addEventListener('app:unitschanged', populate);
	win.add(table);
	return win;
};
/*
 * createPrefsWindow() creates the window that contains our temperature units preferences
 */
myapp.createPrefsWindow = function(){
	var win = Ti.UI.createWindow({
		title: 'Units',
		backgroundColor:'white'
	});
	var unitsLabel = Ti.UI.createLabel({
		color:'black',
		text:'Fahrenheit',
		font:{fontSize:22,fontFamily:'Helvetica Neue', fontWeight:'bold'},
		left: 10,
		top:5,
		height:25
	});
	win.add(unitsLabel);
	var unitsExplainLabel = Ti.UI.createLabel({
		color:'black',
		text:'Output will be shown in Celsius',
		font:{fontSize:18,fontFamily:'Helvetica Neue'},
		left: 10,
		top:40,
		height:20
	});
	win.add(unitsExplainLabel);
	// The switch, with the value set based on the "units" app property
	var unitsSwitch = Ti.UI.createSwitch({
		value:(Ti.App.Properties.getString('units','c')==='c') ? 0 : 1,
		right: 10,
		top:5,
		width:'auto'
	});
	// when the switch is flipped, update the label & save the app property
	unitsSwitch.addEventListener('change',function(e) {
		if(e.value==1) {
			unitsExplainLabel.text = 'Output will be shown in Fahrenheit';
			Ti.App.Properties.setString('units', 'f');
		} else {
			unitsExplainLabel.text = 'Output will be shown in Celsius';
			Ti.App.Properties.setString('units', 'c');
		}
		Ti.App.fireEvent('app:unitschanged');
	});
	win.add(unitsSwitch);
	return win;
};

/*
 * Define our tab group
 */
myapp.createTabs = function() {
	var tabGroup = Titanium.UI.createTabGroup();
	
	tabGroup.addTab(Ti.UI.createTab({
		title:'Conditions',
		window:myapp.createWxWindow()
	}));  
	tabGroup.addTab(Ti.UI.createTab({
		title:'Units',
		window:myapp.createPrefsWindow()
	}));  
	return tabGroup;
}

myapp.ui = myapp.createTabs();
myapp.ui.open();
