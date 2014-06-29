// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

//what I’m going to do with the data when I get it
var remoteResponse = function() {
	Ti.API.debug[this.responseText]; // debug out the response text
	var json = JSON.parse(this.responseText);

	var sections = [];

	var myTable = Ti.UI.createTableViewSection({});

	for ( i = 0; i < json.data.children.length; i++) {
		var dataRow = Ti.UI.createTableViewRow({
			url : json.data.children[i].data.url,
			domain : json.data.children[i].data.domain,
			testTitle : json.data.children[i].data.title,
			testAuthor : json.data.children[i].data.Author,
			thumbNail : json.data.children[i].data.thumbnail,
			selfText : json.data.children[i].data.selftext,
			permalink : json.data.children[i].data.permalink,
			hasChild : true
		});

		var tableText = Ti.UI.createLabel({
			text : dataRow.testTitle,
			backgroundImage : 'images/wood_01',
			fontSize : 11,
			color : "#ffffff",
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			top : 5,
			left : 70,
			height : 60
		});

		var infoText = Ti.UI.createLabel({
			text : dataRow.domain,
			fontSize : 11,
			color : "#ffffff",
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			bottom : 5,
			left : 70
		});

		var imgView = Ti.UI.createImageView({
			images : dataRow.thumbnail,
			height : 50,
			width : 50,
			left : 10,
			right : 10,
			image : json.data.children[i].data.thumbnail,
			borderRadius : 10
		});

		dataRow.addEventListener('click', function(e) {
			var win2 = Ti.UI.createWindow({
				title : 'new page',
				backgroundImage : 'images/wood_01.jpg',
				tabBarHidden : false,
				statusBarHidden : false,
				statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
			});

			var tab2 = Titanium.UI.createTab({
				icon : 'KS_nav_views.png',
				title : 'Other',
				window : win2
			});

			var closeView = Ti.UI.createView({
				backgroundColor : '#000',
				text : 'Reddit Updates',
				color : '#fff',
				top : '0%',
				left : 0,
				width : '100%',
				height : '10%'
			});

			// Create a Label.
			var closeButton = Ti.UI.createLabel({
				text : 'Close',
				color : '#fff',
				font : {
					fontSize : 18,
					fontWeight : 'Bold'
				},
				height : 18,
				width : 80,
				top : 30,
				left : 5,
				textAlign : 'left'
			});

			// Add to the parent view.
			closeView.add(closeButton);

			closeButton.addEventListener('click', function(e) {
				win2.close();
			});

			// Create a Label.
			var favButton = Ti.UI.createButton({
				title : 'Favorite',
				color : '#fff',
				font : {
					fontSize : 18,
					fontWeight : 'Bold'
				},
				height : 18,
				width : 80,
				top : 30,
				right : 5,
				textAlign : 'left'
			});

			// Add to the parent view.
			closeView.add(favButton);

			favButton.addEventListener('click', function(e) {
				var favWin = Ti.UI.createWindow({
					title : 'Favorites',
					backgroundImage : 'images/wood_01.jpg',
					tabBarHidden : false,
					statusBarHidden : false,
					statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
				});
				favWin.open();

				var clsView = Ti.UI.createView({
					backgroundColor : '#000',
					text : 'Reddit Updates',
					color : '#fff',
					top : '0%',
					left : 0,
					width : '100%',
					height : '10%'
				});

				// Create a Label.
				var closeBtn = Ti.UI.createLabel({
					text : 'Close',
					color : '#fff',
					font : {
						fontSize : 18,
						fontWeight : 'Bold'
					},
					height : 18,
					width : 80,
					top : 30,
					left : 5,
					textAlign : 'left'
				});

				//var req = require('test2');
				var db = Ti.UI.Database.open('myTable');
				var openDB = function() {
					db.execute('CREATE TABLE "redditNews" ("id" INTEGER PRIMARY KEY  NOT NULL , "redTitle" TEXT, "webSource" TEXT)');
				};

				var getRowData = function() {
					var currentData = [];
					var rows = db.execute('myTable');

					while (rows.isValidRow()) {
						var id = rows.fieldByName('id');
						var redTitle = rows.fieldByName('testTitle');
						var webSource = rows.fieldByName('url');

						currentData.push({
							title : redTitle + " - " + webSource,
							id : id
						});

						rows.next();
					}
					return currentData;

				};

				var newTableView = Ti.UI.createTableView({
					height : '90%',
					editable : true,
				});

				var tableData = getRowData();
				tableView.setData(tableData);

				// Add to the parent view.
				favWin.add(clsView);
				clsView.add(closeBtn);

				closeBtn.addEventListener('click', function(e) {
					favWin.close();
				});

			});

			// Create a Label.
			var win2Header = Ti.UI.createLabel({
				text : 'Reddit Info',
				color : '#fff',
				font : {
					fontSize : 18,
					fontWeight : 'Bold'
				},
				height : 18,
				width : 150,
				top : 30,
				left : '50%' - this.width,
				textAlign : 'center'
			});

			closeView.add(win2Header);

			var newsView = Ti.UI.createView({
				backgroundColor : '#000',
				top : '10%',
				left : 0,
				width : '100%',
				height : '90%'
			});

			win2.add(closeView);
			win2.add(newsView);

			// Create a WebView
			var aWebView = Ti.UI.createWebView({
				url : dataRow.url //'http://www.reddit.com/r/Charleston/'
			});
			aWebView.addEventListener('load', function(e) {
				Ti.API.info('webview loaded: ' + e.url);
			});

			// Add to the parent view.
			newsView.add(aWebView);

			win2.open();

		});

		dataRow.add(tableText);
		dataRow.add(infoText);
		dataRow.add(imgView);
		myTable.add(dataRow);
	};
	sections.push(myTable);
	aTableView.setData(sections);
};

var remoteError = function(e) {//if there is an error we are going to log out some other things to make sure we can recognize the error
	Ti.API.debug('Status: ' + this.status);
	Ti.API.debug('Text: ' + this.responseText);
	TI.API.debug('Error: ' + e.error);
	alert("There's a problem pulling remote data");
};

// run everything through the XHR HTTP client
var xhr = Ti.Network.createHTTPClient({
	Onload : remoteResponse,
	OnError : remoteError,
	Timeout : 5000 //if we don’t have a response within 5 sec then it will just stop.
});

//open using http
xhr.open('GET', 'http://api.reddit.com/r/Charleston');
xhr.send();

exports.test1 = xhr;

