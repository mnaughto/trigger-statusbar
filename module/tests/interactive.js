module("statusbar");

// In this test we call the example showAlert API method with an example string
asyncTest("Attempt to hide status bar with no animation", 1, function(){
	forge.statusbar.hide(false, function(){
		askQuestion("Did the status bar disappear without animation?", {
			Yes: function(){
				ok(true, "User claims success");
				start();
			},
			No: function(){
				ok(false, "User claims failure");
				start();
			}
		});
	}, function(){
		ok(false, "API method returned failure");
		start();
	});
});
asyncTest("Attempt to hide status bar with animation", 2, function(){
	forge.statusbar.hide(true, function(){
		askQuestion("Did the status bar disappear with animation?", {
			Yes: function(){
				ok(true, "User claims success");
				start();
			},
			No: function(){
				ok(false, "User claims failure");
				start();
			}
		});
	}, function(){
		ok(false, "API method returned failure");
		start();
	});
});
asyncTest("Attempt to show status bar with no animation", 3, function(){
	forge.statusbar.show(false, function(){
		askQuestion("Did the status bar appear without animation?", {
			Yes: function(){
				ok(true, "User claims success");
				start();
			},
			No: function(){
				ok(false, "User claims failure");
				start();
			}
		});
	}, function(){
		ok(false, "API method returned failure");
		start();
	});
});
asyncTest("Attempt to show status bar with animation", 4, function(){
	forge.statusbar.show(true, function(){
		askQuestion("Did the status bar appear with animation?", {
			Yes: function(){
				ok(true, "User claims success");
				start();
			},
			No: function(){
				ok(false, "User claims failure");
				start();
			}
		});
	}, function(){
		ok(false, "API method returned failure");
		start();
	});
});