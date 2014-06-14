Template.main.userRecipes = function () {
    return Recipes.find({
        'submittedBy': Meteor.userId()
    }, {
    	'sort': { 'submittedOn': -1 }
    });
};

var continueToEditRecipe = function() {
    var recipeName = $('#recipe-name-input').val();
    var recipeId = Meteor.call('addRecipe', recipeName, function(error, result) {
        Router.go('/recipes/' + result);    
    });
}

Template.main.events({
    'click #add-recipe-button': function () {
    	$('#recipe-name-input').focus();
    },
    'click #add-recipe-continue-button': function() {
        continueToEditRecipe();    	
    },
    'keypress #recipe-name-input': function(evt) {
        if (evt.which === 13) {
            $('#add-recipe-name-modal').modal({show: false});
            //$('#add-recipe-name-modal').hide();
            //$('#add-recipe-name-modal').toggle('modal');
            //$('#add-recipe-continue-button').click();
        }
    }
});