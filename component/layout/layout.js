/**
 * Created by Evan on 2017-01-23.
 */
/******************************************************************************
 * Layout
 ******************************************************************************/
//"use strict";

angular.module('grafie.layout', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('grafie', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'component/layout/layout.tpl.html',
                        controller: 'layoutController'
                    }
                }
            });
        //$urlRouterProvider.otherwise('/auth/signup');
        //$urlRouterProvider.otherwise('/auth/login');
        //$urlRouterProvider.otherwise('/browse/photos');
        $urlRouterProvider.otherwise('/home/general');
        //$urlRouterProvider.otherwise('/record');
    });