enter.addEventListener("click", function(e) {

	if (enterName.value === "" && enterSource.value === "" && enterColor === "") {
		alert("All fields must be complete.");
	} else if (enterName.value === "") {
		alert("You must enter your whole name.");
	} else if (enterColor.value === "") {
		alert("You must enter a color.");
	} else if (enterSource.value === "") {
		alert("You must enter your favorite food.");
	} else {
		var userInput = {};

		userInput.wholeName = enterName.value;
		userInput.yourFood = enterSource.value;
		if (enterColor.value === "") {
			enterColor.value = "Please type your favorite color.";
			userInput.updateColor = enterColor.value;
		} else {
			userInput.updateColor = enterColor.value;
		}

		var updateData = escape(JSON.stringify(userInput));

		db.execute("INSERT INTO local (user) VALUES(?)", updateData);

		enterName.value = "";
		enterSource.value = "";
		enterColor.value = "";

		enterName.blur();
		enterSource.blur();
		enterColor.blur();

		data = localInfo.localInfo();
		myTblView.setData(data);

		alert("Your data was saved!");
	}

});

myTblView.addEventListener("click", function(e) {
	var id = e.rowData.id;
	var enterName = e.rowData.wholeName;
	var enterSource = e.rowData.yourFood;
	var enterColor = e.rowData.updateColor;

	var dialog = Ti.UI.createOptionDialog(userDecision);
	var dialoguserChoice = Ti.UI.createOptionDialog(userChoice);

	dialog.addEventListener("click", function(e) {
		if (e.index === 0) {

			updateName.value = enterName;
			updateFood.value = enterSource;
			updateColor.value = enterColor;

			win3.open();

			var updateChanges = function() {
				if (updateName.value === "") {
					alert("You forgot to enter your full name.");
				} else if (updateFood.value === "") {
					alert("You forgot to enter your favorite food.");
				} else if (updateColor.value === "") {
					alert("You forgot to enter your favorite color.");
				} else {
					var userInput = {};
					userInput.wholeName = updateName.value;
					userInput.yourFood = updateFood.value;
					userInput.updateColor = updateColor.value;

					var updateData = escape(JSON.stringify(userInput));

					db.execute("UPDATE local SET user=? WHERE id=?", updateData, id);

					updateName.value = "";
					updateFood.value = "";
					updateColor.value = "";

					updateName.blur();
					updateFood.blur();
					updateColor.blur();

					data = localInfo.localInfo();
					myTblView.setData(data);

					saveData.removeEventListener("click", updateChanges);
					win3.close();
					alert("Your data was saved!!");
				}
			};

			saveData.addEventListener("click", updateChanges);

			var cancelChanges = function() {
				cancel.removeEventListener("click", cancelChanges);
				win3.close();
			};
			cancel.addEventListener("click", cancelChanges);

			win3.open();
		} else if (e.index === 1) {
			dialoguserChoice.addEventListener("click", function(e) {
				if (e.index === 0) {
					db.execute("DELETE FROM local WHERE id=?", id);

					data = localInfo.localInfo();
					myTblView.setData(data);

					alert("All data has been erased.");
				}
			});

			dialoguserChoice.show();
		}
	});

	dialog.show();
});

