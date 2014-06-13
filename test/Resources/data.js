var url = 'http://api.reddit.com/r/Charleston';

var success = function(){
	alert('Found data!');
	var replyData = JSON.parse(this.responseText);
	var posts = replyData.data.children;

	for(var i=0, j=posts.length; i<j; i++){
		console.log(posts[i]);
	};
};

var error = function (){
	alert('Something went wrong!');
};


var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});

client.open('GET', url);

client.send();