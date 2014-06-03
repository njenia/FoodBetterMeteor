Router.map(function() {
	this.route('main', {path: '/'});
	this.route('editRecipe', { 
		path: '/recipes/:_id',	
		data: function() { 
			return Recipes.findOne(this.params._id); 
		}
	});
});

if (Meteor.isClient) {
	Router.configure({
		layoutTemplate: 'bodyLayout',
		loadingTemplate: 'loadingTemplate'
	});
}