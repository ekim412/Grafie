/**
 * Created by ekim412 on 2017-02-04.
 */
angular.module('grafie.browse', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('grafie.browse', {
                url: '/browse/:type',
                views: {
                    "content@grafie": {
                        templateUrl: function (params) {
                            if (params.type === "photos") {
                                return 'component/browse/views/browse-photos.html';
                            }else if(params.type === "graphers"){
                                return 'component/browse/views/browse-graphers.html';
                            } else if(params.type === "jobs"){
                                return 'component/browse/views/browse-listings.html';
                            }
                        },

                        controller: 'browseController'
                    }
                }
            });

    });