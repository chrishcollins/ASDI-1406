// set the background color
Titanium.UI.setBackgroundColor('#000');
Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;

getAPI = require('remote');


var tabGroup, win1, tab1;

// create tab group
tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window
win1 = Titanium.UI.createWindow({  
    title:'Reddit API',
    tabBarHidden: true,
 	statusBarHidden: false,
    backgroundGradient: {
        type: 'radial',
        startPoint: { x: 50, y: 50 },
        endPoint: { x: 50, y: 50 },
        colors: [ 'black', 'blue'],
        startRadius: '90%',
        endRadius: 0,
        backfillStart: true
    }
});


// Create a TableView.
var aTableView = Ti.UI.createTableView();



var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  layout: 'vertical',
  showHorizontalScrollIndicator: false,
  top: 60,
  height: '90%',
  width: '90%'
});

//add views to parent

win1.add(scrollView);


tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});


tabGroup.addTab(tab1, aTableView);  
 
// open tab group
var showOther = require("other");
showOther.views();
win1.add(aTableView);
tabGroup.open();



