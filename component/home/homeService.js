/**
 * Created by Evan on 2017-01-23.
 */
angular.module('grafie.home').controller('homeController', function($state, $stateParams, $scope, $rootScope){

    $rootScope.auth = false;

    $(document).ready(function(){
        console.log($stateParams);
        if($stateParams.type =='login'){
            console.log('lol');
            $('#homeInfo').hide();
            $('#homeLogin').fadeIn('fast', 'linear')
        }
    });

    $scope.switchLogDiv = function (){
        $('#homeInfo').fadeOut('fast', 'linear');
        $('#homeLogin').fadeIn('slow', 'linear');
    };


    $scope.login = function (){
        $rootScope.auth = true;

        $state.go('grafie.home', {type:'loginHome'});

        $('#preLoginMenu').hide();
        $('#postLogin').show()
    }

});