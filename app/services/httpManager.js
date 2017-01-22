angular.module('app').service('httpManager', ['$http', function($http){
	var apiKey = '';
	var me = this;
	me.$http = $http;
	
	this.http = function(method, headers, url, data){

		 if (method === "GET") {
            return promise = me.$http({
                method: method,
                url: url,
                headers: headers
            });
        }
};
}]);