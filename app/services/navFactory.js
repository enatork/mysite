angular.module('app').service('navService',  function(){
	
	var me = this;

	me.getNav = function(){
		return this.Links = 
		[
		{
			name: 'home', 
			state: 'home'
		},
		{
			name: 'work',
			state: 'work'
		},
		{
			name: 'resume',
			state: 'resume'
		},
		{
			name: 'recipes',
			state: 'recipes'
		}
		]
	}
});