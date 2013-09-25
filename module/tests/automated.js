module("statusbar");

// In this test we call the example showAlert API method with an empty string
// In the example API method an empty string will immediately call the error callback
asyncTest("Attempt to hide status bar with no animation", 1, function(){
	forge.statusbar.hide(false, function(){
		ok(true, "Expected success.");
		start();
	}, function(){
		ok(false, "Expected success, got error.");
		start();
	});
});

asyncTest("Attempt to hide status bar with animation", 2, function(){
	forge.statusbar.hide(true, function(){
		ok(true, "Expected success.");
		start();
	}, function(){
		ok(false, "Expected success, got error.");
		start();
	});
});

asyncTest("Attempt to show status bar with no animation", 3, function(){
	forge.statusbar.show(false, function(){
		ok(true, "Expected success.");
		start();
	}, function(){
		ok(false, "Expected success, got error.");
		start();
	});
});

asyncTest("Attempt to show status bar with animation", 4, function(){
	forge.statusbar.show(true, function(){
		ok(true, "Expected success.");
		start();
	}, function(){
		ok(false, "Expected success, got error.");
		start();
	});
});