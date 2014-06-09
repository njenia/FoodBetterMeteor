Template.editRecipe.events = {
	'click #add-ingredient-button': function() {
		var newIngredientDesc = $('#new-ingredient-description').val();
		var newIngredientQuantity = $('#new-ingredient-quantity').val();
		var recipeId = this._id;
		Recipes.update(recipeId, {'$push': 
			{
				'ingredients': {
					'quantity': newIngredientQuantity,
					'description': newIngredientDesc
				}
			}
		});
		$('#new-ingredient-description').val('');
		$('#new-ingredient-quantity').val('');
		$('#new-ingredient-quantity').focus();
	},
	'click #add-prep-step-button': function() {
		var newStepText = $('#new-prep-step-textarea').val();
		Recipes.update(this._id, {'$push':
		{
			'preperationSteps': {
				'stepNumber': ,
				'stepText': newStepText
			}
		}
		});
	}
};