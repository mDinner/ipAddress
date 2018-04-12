window.onload = function(){
	var target = $("#data");	
//Date time Sunrise/set weather tide computerType OS browserVersion/type
	$.getJSON("http://jsonip.com?callback=?", function (data) {
	    $("#data").append("Your ip address: " + data.ip);
	});

	testData = navigator.appVersion;
}