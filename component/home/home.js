/**
 * Created by Evan on 2017-01-23.
 */
angular.module('grafie.home', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    console.log('loaded');
   $stateProvider
       .state('grafie.home', {
           url: '/home/:type',
           views: {
               "content@grafie": {
                   templateUrl: function (params) {
                       if (params.type === "grafer") {
                           return 'component/home/views/home-grapher.html';
                       } else if (params.type === "loginHome") {
                           return 'component/home/views/home-normal.html';
                       } else {
                           //return '/component/layout/partials/blank.tpl.html';
                           return 'component/home/views/home-general.html';
                           //return '/component/home/home.tpl.html';
                       }
                   },

                   controller: 'homeController'
               }
           }
       });

});