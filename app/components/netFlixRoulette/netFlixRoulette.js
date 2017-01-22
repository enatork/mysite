
var netFlixRouletteController = function(netFlixRouletteService){
	var me = this;
	me.recipes = [];
	me.getRecipe = function(){
		return netFlixRouletteService.getRecipe();
	};

	var init = function(){
		me.getRecipe().then(function(data){
			me.recipes = data.data;
		});
	};
	init();
};

netFlixRouletteController.$inject = ['netFlixRouletteService'];

angular.module('app').component('recipes', {
	templateUrl: 'components/netFlixRoulette/netFlixRoulette.html',
	controller: netFlixRouletteController
});


