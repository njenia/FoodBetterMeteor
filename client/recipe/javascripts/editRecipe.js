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
	'keypress #new-ingredient-description': function(evt) {
		if (evt.which === 13) {
			$('#add-ingredient-button').click();
		}
	},
    minimizeRecipeStepTextarea: function () {
        $('#new-prep-step-textarea').animate({
            'rows': 1,
            'width': '200px'
        }, 'normal');
    },
    'click #add-prep-step-button': function() {
		var newStepText = $('#new-prep-step-textarea').val();
		Recipes.update(this._id, {'$push':
		{
			'preperationSteps': {
				'stepText': newStepText
			}
		}
		});
		$('#new-prep-step-textarea').val('');

		this.minimizeRecipeStepTextarea();
	},
	'focus #new-prep-step-textarea': function() {
		$('#new-prep-step-textarea').animate({
			'rows': 4,
			'width': '400px'
		}, 'easein');
	},
    'click #confirm-yes-button': function() {
        Recipes.remove(this._id);
        $('#confirm-modal')
            .on('hidden.bs.modal', function() {
                Router.go('/');
            })
            .modal('hide');
    }
};

Template.editRecipe.rendered = function() {
    var recipeId = this.data._id;

    $('.steps-list .editable').editable({
        success: function(response, newValue) {
            var index = this.dataset.pk;
            var setCommand = {};
            setCommand['preperationSteps.' + (index - 1) + '.stepText'] = newValue;
            Recipes.update(recipeId, {
                '$set': setCommand
            });
        },
        mode: 'inline',
        emptytext: 'Recipe step'
    });

    $('#recipe-name.editable').editable({
        success: function(response, newValue) {
            Recipes.update(recipeId, {
                '$set': {
                    recipeName: newValue
                }
            });
        },
        mode: 'inline',
        emptytext: 'Recipe name'
    });
};
