angular.module('app').service('netFlixRouletteService',  ['httpManager', function(httpManager){
	
	var me = this;

	me.getRecipe = function(page, ingredients, type){
		if(ingredients && ingredients.length > 1){
			var ingredientsString = ingredients.split(',');	
		}

		//var url = 'http://www.recipepuppy.com/api/?i='+ ingredientsString +'&q=' + type +'&p=4';

		return httpManager.http('GET' ,{}, 'http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino');
	};
}]);