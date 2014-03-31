var app = angular.module("operationalDash", ['ui.bootstrap']);

app.controller('operationalCtrl', [ 
	"$scope", 
	function ($scope) {
		
		$scope.data = { "available_date":["29.03.2014", "28.03.2014", "27.03.2014","26.03.2014", "25.03.2014", "24.03.2014", "23.03.2014"],
					"data": [ {"region":"North America",
					"services":[{"name":"Amazon CloudFront",
								"status":[{"date":"29.03.2014",
										"status":"online"},
										{"date":"28.03.2014",
										"status":"online"},
										{"date":"27.03.2014",
										"status":"online"},
										{"date":"26.03.2014",
										"status":"online"},
										{"date":"25.03.2014",
										"status":"online"},
										{"date":"24.03.2014",
										"status":"online"},
										{"date":"23.03.2014",
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
										"status":"offline"},
										{"date":"26.03.2014",
										"status":"online"},
										{"date":"25.03.2014",
										"status":"online"},
										{"date":"24.03.2014",
										"status":"online"},
										{"date":"23.03.2014",
										"status":"online"}]
								}]
					}
				]};

		$scope.getDateRightFormat = function(strDate) {
			var dateParts = strDate.split(".");

			return $scope.month_names_short[parseInt(dateParts[1]) - 1] + " " + parseInt(dateParts[0]);
		};

		$scope.getStatusImg = function(status) {
			if(status === "online") {
				return "img/true.gif"
			} else {
				return "img/false.gif"
			}
		}
        
       	$scope.month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	}
]);