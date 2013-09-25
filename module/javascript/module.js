// Expose the native API to javascript
forge.statusbar = {
    show: function (animated, success, error) {
        forge.internal.call('statusbar.show', {animated: animated}, success, error);
    },
    hide: function (animated, success, error) {
        forge.internal.call('statusbar.hide', {animated: animated}, success, error);
    }
};

// Register for our native event
forge.internal.addEventListener("statusbar.resume", function () {
	//alert("Welcome back!");
});
