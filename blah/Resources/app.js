Ti.UI.setBackgroundColor('#777');

var win1 = Ti.UI.createWindow({
	title : 'People',
	backgroundColor : '#ccc',
	layout : 'vertical'
});

var win2 = Ti.UI.createWindow({
	title : 'Add People',
	backgroundColor : '#fff',
	layout: 'vertical'
});

var ui = require('ui');
var data = require('data');

data.read();

ui.button.addEventListener('click', function(e){
	if (ui.button.edit != true) {
		alert('create!!');
		var newTitle = ui.nameField.value;
		var newFood = ui.foodField.value;
		var newColor = ui.colorField.value;
		ui.nameField.value = '';
		ui.foodField.value = '';
		ui.colorField.value = '';
		ui.nameField.blur();
		ui.foodField.blur();
		ui.colorField.blur();
		data.create(newTitle, newFood, newColor);
		data.read();
	} else {
		//alert('update!!');
		ui.tableData.removeAllChildren();
		data.update(ui.button.index, ui.button.location);
	}
});

ui.tableData.addEventListener('click', function(e) {
	var dialog = Ti.UI.createAlertDialog({
		cancel : 2,
		buttonNames : ['Update', 'Delete', 'Cancel'],
		message : 'Edit Name',
		title : 'Edit Name'
	});
	dialog.addEventListener('click', function(e) {
		if (e.index === 0) {
			alert(e);
			for (i in e.row.children) {
				var views = e.row.children[i];
				ui.nameField.value = views.children[0].text;
				ui.foodField.value = views.children[1].text;
			}
			ui.button.title = 'Update Name';
			ui.button.id = e.row.id;
			ui.button.edit = true;
			ui.button.index = e.index;
			win2.title = 'Entered Favorites';
			ui.tab2.title = 'Local Data';
			ui.tabGroup.setActiveTab(ui.tab2);
		}
		
		if (e.index ===1) {
    		var confirmDelete = Ti.UI.createAlertDialog({
        		cancel: 1,
        		buttonNames: ['ok', 'Cancel'],
        		message: 'Delete Person?',
        		title: 'Delete Person'
    		});
    		confirmDelete.addEventListener('click', function(e2){
        		if (e2.index === 0) {
            		ui.button.id = e.row.id;
            		data.del(ui.button.id);
        		}
    		});
    		confirmDelete.show();
		}
	});
	dialog.show();
});

win1.add(ui.tableData);

win2.add(ui.nameLabel);
win2.add(ui.nameField);
win2.add(ui.foodLabel);
win2.add(ui.foodField);
win2.add(ui.colorLabel);
win2.add(ui.colorField);
win2.add(ui.button);