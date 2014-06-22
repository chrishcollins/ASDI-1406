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
			wholeName : displayData.wholeName,
			yourFood : displayData.yourFood,
			updateColor : displayData.updateColor,
			id : localInfo.fieldByName("id")
		});

		localInfo.next();
	}

	return createInfo;
};

