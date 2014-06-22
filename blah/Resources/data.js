var ui = require('ui');

//install the .sqlite DB - happens once
Ti.Database.install('database/local.sqlite', 'nameInfo'); //will use'nameInfo to reference the 

//load/open the DB
var tblData = [];
var read = function(){
	var db = Ti.Database.open('nameInfo');
	var dbRows = db.execute('SELECT id, name, enterFood FROM asdTbl'); //returns a ResultSet object
	while (dbRows.isValidRow()) { // .isValidRow() returns BOOLEAN
		tblData.push({
			id: dbRows.fieldByName('id'),
			name: dbRows.fieldByName('name'),
			enterFood: dbRows.fieldByName('enterFood')
			//.fieldByName() asigns the fields value to the label of the current row
		});
		dbRows.next(); //returns True if there is another row in the ResultSet object, else FALSE
	} //while
	dbRows.close(); //closes ResultSet, can no longer be used and is released from memory
	db.close(); //closes DB, instance can no longer be used and is rleased from memory
	ui.favTbl(tblData);
};
exports.read = read;

var create = function(name, enterFood) {
	var db = Ti.Database.open('nameInfo');
	db.execute('INSERT INTO asdTbl (name, enterFood) VALUES (?, ?)', name, enterFood);
	var rowID = db.lastInsertRowId;
	db.close();
	tblData = [];
	ui.tabGroup.setActiveTab(ui.tab1);
};
exports.create = create;

var update = function(index, location){
	var db = Ti.Database.open('nameInfo');
	db.execute('UPDATE asdTbl SET name=?, enterFood=? WHERE id=?', ui.nameField.value, ui.foodField.value);
	db.close();
	tblData = [];
	read();
	ui.tabGroup.setActiveTab(ui.tab1);
	ui.button.id = null;
	ui.button.edit = false;
	ui.button.title = 'Add Person';
	ui.nameField.value = '';
	ui.foodField.value = '';
	win2.title = 'Add Person';
	ui.tab2.title = 'Add';
};
exports.update = update;

var del = function(id){
	var db = Ti.Database.open('nameInfo');
	db.execute('DELETE FROM asdTbl WHERE id=?', id);
	db.close();
	tblData = [];
	read();
};
exports.del = del;