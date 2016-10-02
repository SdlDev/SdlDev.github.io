var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider)
{
	$routeProvider.when("/", {templateUrl: "partials/home.html"});
	$routeProvider.otherwise({templateUrl: "partials/404.html", controller: "404_ctrl"});
});
