Recipes = new Meteor.Collection('recipes');

Recipes.allow({
	'insert': function(userId, doc) {
		return true;
	}
});