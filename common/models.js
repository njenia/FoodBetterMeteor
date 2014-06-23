// Recipes
Recipes = new Meteor.Collection('recipes');

Recipes.allow({
	'insert': function(userId, doc) {
		return true;
	},
	'update': function(userId, doc) {
		return true;
	},
    'remove': function(userId, doc) {
        return true;
    }

});