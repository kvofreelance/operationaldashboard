var app = angular.module("operationalDash", ['ui.bootstrap']);

app.controller('operationalCtrl', [ 
	"$scope", 
	function ($scope) {
		
		$scope.data = [ {"region":"North America",
					"services":[{"name":"Amazon CloudFront",
								"status":[{"date":"29.03.2014",
										"status":"online"},
										{"date":"28.03.2014",
										"status":"online"},
										{"date":"27.03.2014",
										"status":"online"}]
								}]
					},
					{"region":"South America",
					"services":[{"name":"Amazon CloudFront",
								"status":[{"date":"29.03.2014",
										"status":"offline"},
										{"date":"28.03.2014",
										"status":"offline"},
										{"date":"27.03.2014",
										"status":"offline"}]
								}]
					}
				];
	}
]);