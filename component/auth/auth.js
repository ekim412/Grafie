/**
 * Created by ekim412 on 2017-02-04.
 */
/**
 * Created by Evan on 2017-01-23.
 */
angular.module('grafie.auth', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        console.log('loaded');
        $stateProvider
            .state('grafie.auth', {
                url: '/auth/:type',
                views: {
                    "content@grafie": {
                        templateUrl: function (params) {
                            if (params.type === "signup") {
                                return 'component/auth/views/signup.html';
                            } else if (params.type === "login") {
                                return 'component/auth/views/login.html';
                            } else {
                                return 'component/home/views/home-general.html';
                            }
                        },

                        controller: 'authController'
                    }
                }
            });

    });