Meteor.methods({
	addRecipe: function(recipeName) {
		console.log('adding recipe ' + recipeName);
		var recipeId = Recies.insert({
			'recipeName' : recipeName,
          	'submittedOn': new Date(),
          	'submittedBy' : Meteor.userId()
      });
	}
});