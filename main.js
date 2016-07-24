require.config({
    baseUrl: "",
	paths: {
        "angular": "component/angular/angular.min",
        "jQuery": "component/jquery/jquery",
        "bootstrap": "component/bootstrap/js/bootstrap.min",
        exporting: "component/highcharts/modules/exporting",
        highcharts: "component/highcharts/highcharts",
        "ng-map": "component/ng-map/ng-map.min"
    },

    shim: {
        "angular": {
            exports: "angular"
        },
        
         "ng-map": {
            deps: ["angular"]
        },        
        "bootstrap": {
            deps: ["jQuery"]
        },         
        highcharts: {
            exports: 'Highcharts'
        },
        exporting: {
            deps: ["highcharts"]
        }
    }
   
});

require(['angular',
        'bootstrap',
        'app',
        'directive/current-weather'
        ],
			
            function (app) {
                angular.element(document).ready(function () {
                    angular.bootstrap(document, ['borgProgram']);
                });
        });