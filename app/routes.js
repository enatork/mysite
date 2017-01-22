angular.module("app")
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html"
    })
    .state('work', {
      url: "/work",
      templateUrl: "templates/projects.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "templates/about.html"
    })
    .state('photography', {
      url: "/photography",
      templateUrl: "templates/gallery.html"
    })
      .state('resume', {
      url: "/resume",
      templateUrl: "templates/resume.html"
    })
    .state('recipes', {
      url:"/recipes",
      templateUrl: "templates/recipes.html"
    })
   
});