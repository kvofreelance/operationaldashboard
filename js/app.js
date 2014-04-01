var app = angular.module("operationalDash", ['ui.bootstrap', 'ngAnimate']);

app.controller('operationalCtrl', [ 
	"$scope", 
	function ($scope) {

		$scope.visibilityArray;
		$scope.activeTab = 0;

		$scope.setActiveId = function(index) {
			$scope.activeTab = index;
		}

		$scope.prevData = function() {
			for(var i = 0; i < $scope.visibilityArray.length; i++) {
				if($scope.visibilityArray[i] == true ) {
					console.log(i);
					if(i !== $scope.visibilityArray.length - 1) {
						var el = angular.element(document.querySelector('#tableCenter'+i+$scope.activeTab));
						var el1 = angular.element(document.querySelector('#tableCenter'+(i+1)+$scope.activeTab));
						el.removeClass('back');
						el1.removeClass('back');
						el.addClass('next');
						el1.addClass('next');

						$scope.visibilityArray[i] = false;
						$scope.visibilityArray[i+1] = true;

						$scope.visibilityArray = $scope.visibilityArray;
						break;
					}
				}
			}
		}

		$scope.nextData = function() {
			for(var i = 0; i < $scope.visibilityArray.length; i++) {
				if($scope.visibilityArray[i] === true) {
					console.log(i);
					if(i === 0) {

					} else {
						var el = angular.element(document.querySelector('#tableCenter'+i+$scope.activeTab));
						var el1 = angular.element(document.querySelector('#tableCenter'+(i-1)+$scope.activeTab));
						el.removeClass('next');
						el1.removeClass('next');
						el.addClass('back');
						el1.addClass('back');
						$scope.visibilityArray[i] = false;
						$scope.visibilityArray[i-1] = true;
						break;
					}
				}
			}
		}
		
		$scope.data = { "available_date":["29.03.2014", "28.03.2014", "27.03.2014","26.03.2014", "25.03.2014", "24.03.2014", "23.03.2014", "22.03.2014", "21.03.2014", "20.03.2014","19.03.2014", "18.03.2014", "17.03.2014", "16.03.2014", "15.03.2014", "14.03.2014", "13.03.2014","12.03.2014", "11.03.2014", "10.03.2014", "9.03.2014"],
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
										"status":"info",
										"title":"Increased API Error rates and Latency [RESOLVED]",
										"events":["7:12 PM PDT We are investigating increased error rates and latencies impacting CBUI pipeline, ASP, Pay, Reserve and Settle APIs in the North America region.",
										"7:45 PM PDT Between 06:10 PM PDT and 07:30 PM PDT, FPS experienced elevated error rates and latencies impacting CBUI pipeline, ASP, Pay, Reserve and Settle APIs in the North America region. The issue has been resolved and the service is now operating normally."]},
										{"date":"23.03.2014",
										"status":"online"},
										{"date":"22.03.2014",
										"status":"online"},
										{"date":"21.03.2014",
										"status":"online"},
										{"date":"20.03.2014",
										"status":"online"},
										{"date":"19.03.2014",
										"status":"online"},
										{"date":"18.03.2014",
										"status":"online"},
										{"date":"17.03.2014",
										"status":"online"},
										{"date":"16.03.2014",
										"status":"online"},
										{"date":"15.03.2014",
										"status":"online"},
										{"date":"14.03.2014",
										"status":"online"},
										{"date":"13.03.2014",
										"status":"online"},
										{"date":"12.03.2014",
										"status":"online"},
										{"date":"11.03.2014",
										"status":"online"},
										{"date":"10.03.2014",
										"status":"online"},
										{"date":"9.03.2014",
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
										"status":"online"},
										{"date":"22.03.2014",
										"status":"online"},
										{"date":"21.03.2014",
										"status":"online"},
										{"date":"20.03.2014",
										"status":"online"},
										{"date":"19.03.2014",
										"status":"online"},
										{"date":"18.03.2014",
										"status":"online"},
										{"date":"17.03.2014",
										"status":"online"},
										{"date":"16.03.2014",
										"status":"online"},
										{"date":"15.03.2014",
										"status":"online"},
										{"date":"14.03.2014",
										"status":"online"},
										{"date":"13.03.2014",
										"status":"online"},
										{"date":"12.03.2014",
										"status":"online"},
										{"date":"11.03.2014",
										"status":"online"},
										{"date":"10.03.2014",
										"status":"online"},
										{"date":"9.03.2014",
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
			} else if(status === "info") {
				return "img/info.gif"
			} else {
				return "img/false.gif"
			}
		}

		$scope.getStatusDialog = function(status) {
			if(status === "online") {
				return false;
			} else {
				return true;
			}
		}

		

		$scope.getCounter = function(length) {
			if($scope.visibilityArray === undefined) {
				$scope.visibilityArray = Array(Math.round(length/7));
				for(var i = 0; i < $scope.visibilityArray.length; i++) {
					$scope.visibilityArray[i] = false;
				}
				$scope.visibilityArray[0] = true;	
			}

			return $scope.visibilityArray;
		}

		$scope.getArray = function(data, index) {
			index += 1;
			var dataArray = [];
			for(var i = (index - 1)*7; i < 7*index; i++) {
				console.log(i);
				dataArray.push(data[i]);
			}
			return dataArray;
		}
        
       	$scope.month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	}
]);