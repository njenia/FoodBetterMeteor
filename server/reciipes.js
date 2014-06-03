Meteor.methods({
	addRecipe: function(recipeName) {
		console.log('adding recipe ' + recipeName);
		var recipeId = Recipes.insert({
			'recipeName' : recipeName,
          	'submittedOn': new Date(),
          	'submittedBy' : Meteor.userId()
      	});
		return recipeId;
	}
});