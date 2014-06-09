Meteor.methods({
	addRecipe: function(recipeName) {
		console.log('adding recipe ' + recipeName);
		var recipeId = Recipes.insert({
			'recipeName' : recipeName,
          	'submittedOn': new Date(),
          	'ingridients': [],
          	'preperationSteps': [],
          	'submittedBy' : Meteor.userId()
      	});
		return recipeId;
	}
});