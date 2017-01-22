

angular.module('app').directive('wordRotator', function(){
	return {
		link: function(scope, element, attrs) {

		element.rotate = function(options){
				var defaults = {
	        	fadeSpeed: 500,
	        	pauseSpeed: 100,
				child:null
		    	};
		    
		    	var options = angular.extend(defaults, options);
		 	
		 		element.each(function(){
		 			var o =options;
					var obj = element;                
					var items = $(obj.children(), obj);
					items.each(function() {$(this).hide();})
					if(!o.child){
						var next = $(obj).children(':first');
					}else{
						var next = o.child;
					}
					$(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							element.rotate({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						});
						});
			        });
				}
				element.rotate({});
			}
	    };
	});