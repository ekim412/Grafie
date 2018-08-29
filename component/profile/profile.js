/**
 * Created by Evan on 2017-01-24.
 */
angular.module('grafie.profile', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        console.log('loaded');
        $stateProvider
            .state('grafie.profile', {
                url: '/profile/:type',
                views: {
                        "content@grafie": {
                            templateUrl: function (params) {
                                if (params.type === "grapher") {
                                    return 'component/profile/views/profile-grapher.html';
                                }else if(params.type === "self"){
                                    return 'component/profile/views/profile-self.html';
                                }
                            },

                            controller: 'profileController'
                        }
                    }
                })
            });
