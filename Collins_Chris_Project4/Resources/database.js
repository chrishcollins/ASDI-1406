
//reddit api file 4
var db = Titanium.Database.open('fav');
var openDB = function() {
	db.execute('CREATE TABLE IF NOT EXISTS fav (id INTEGER PRIMARY KEY, date TEXT, title TEXT);');
};

var getRowData = function() {
	var currentData = [];

	var rows = db.execute('SELECT * FROM fav');

	while (rows.isValidRow()) {
		var id = rows.fieldByName('id');
		var date = rows.fieldByName('date');
		var newsTitle = rows.fieldByName('title');

		currentData.push({
			title : date + ' - ' + newsTitle,
			id : id
		});

		rows.next();
	}
	return currentData;
};