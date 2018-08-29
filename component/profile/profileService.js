/**
 * Created by Evan on 2017-01-24.
 */
angular.module('grafie.profile').controller('profileController', function($stateParams, $scope, $rootScope){

    $(document).ready(function(){
        $("#freewall").hide();

        var temp = "<div class='brick' style='width:{width}px;'><img class='galleryPhoto' src='resources/images/profileGallery1/0{index}.jpg' width='100%'></div>";
        var w = 1, h = 1, html = '', limitItem = 9;
        for (var i = 0; i < limitItem; ++i) {
            w = 2;
            //console.log(w);
            html += temp.replace(/\{width\}/g, w*200).replace("{index}", i + 1);
        }
        $("#freewall").html(html);
        var wall = new Freewall("#freewall");
        wall.reset({
            selector: '.brick',
            animate: true,
            cellW: 200,
            cellH: 'auto',
            onResize: function() {
                wall.fitWidth();
            }
        });
        var images = wall.container.find('.brick');
        images.find('img').load(function() {
            wall.fitWidth();
            $("#freewall").fadeIn('slow', 'linear');
        });
    });

});
