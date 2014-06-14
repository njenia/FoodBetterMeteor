UI.registerHelper('formatTimeAgo', function(context, options) {
	if (context) {
		return moment(context).fromNow();
	}
});	

UI.registerHelper('indexedArray', function(context, options) {
	if (context) {
		return context.map(function(item, index) {
			item._index = index + 1;
			return item;
		});
	}
});