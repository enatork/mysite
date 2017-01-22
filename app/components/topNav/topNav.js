
var topNavController = function(navService){
	this.Links = navService.getNav();
};

topNavController.$inject = ['navService'];

angular.module('app').component('topNav', {
	templateUrl: 'components/topNav/topNav.html',
	controller: topNavController
});


