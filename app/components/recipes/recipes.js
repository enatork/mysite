
var recipesController = function(){

};

topNavController.$inject = ['navService'];

angular.module('app').component('recipes', {
	templateUrl: 'components/recipes/recipes.html',
	controller: recipesController
});


