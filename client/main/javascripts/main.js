Template.main.userRecipes = function () {
    return Recipes.find({}, {
    	'sort': { 'submittedOn': -1 }
    });
};

Template.main.events({
    'click #add-recipe-button': function () {
    	$('#recipe-name-input')[0].focus();
    },
    'click #add-recipe-continue-button': function() {
    	var recipeName = $('#recipe-name-input').val();
    	var recipeId = Meteor.call('addRecipe', recipeName, function(error, result) {
            Session.set('currentRecipeId', result);
    		Router.go('/recipes/' + result);	
    	});
    }
});