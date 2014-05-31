UI.registerHelper('formatTimeAgo', function(context, options) {
	if (context) {
		return moment(context).fromNow();
	}
});