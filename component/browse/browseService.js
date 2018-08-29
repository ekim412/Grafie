/**
 * Created by ekim412 on 2017-02-04.
 */
angular.module('grafie.browse').controller('browseController', function($stateParams, $scope, $rootScope){

    $(document).ready(function(){
        $("#freewall").hide();

        var temp = "<div class='brick' style='width:{width}px;'><img class='galleryPhoto' src='resources/images/gallery1/{index}.jpg' width='100%'></div>";
        var w = 1, h = 1, html = '', limitItem = 20;
        for (var i = 0; i < limitItem; ++i) {
            w = 1 + 2 * Math.random() << 0;
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

        $('#advSettings').click(function () {
            $header = $(this);

            $headerText = $('#advText');
            $angle = $('#advAngle');

            $content = $('#categories');

            $content.slideToggle(400, function () {

                $headerText.contents().last()[0].textContent = $content.is(":visible") ? "Hide Categories" : "Show Categories";

                $angle.contents().last()[0].textContent = $content.is(":visible") ? "Δ" : "▽";
            });
        });

        $('.galleryPhoto').click(function(){
            var img = "<img class='galleryPhoto' src="+$(this).attr('src')+" width='100%'>";

            $('#photoPopup').html(img);

            $('#galleryModel').fadeIn('slow', 'linear');

            //console.log($(this).attr('src'));
        });


        $('.category').click(function(){
            $("#freewall").fadeOut('slow', 'linear');
            $("#freewall").html("");

            var temp = "<div class='brick' style='width:{width}px;'><img class='galleryPhoto' src='resources/images/gallery1/{index}.jpg' width='100%'></div>";
            var w = 1, h = 1, html = '', limitItem = 20;
            for (var i = 0; i < limitItem; ++i) {
                w = 1 + 2 * Math.random() << 0;
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

        $('.close').click(function(){
            $('#galleryModel').fadeOut('slow', 'linear');
        });


        $("#slider1").responsiveSlides({
            auto: false,
            pager: true,
            nav: true,
            speed: 500,
            maxwidth: 800,
            namespace: "centered-btns"
        });

        $("#slider2").responsiveSlides({
            auto: false,
            pager: true,
            nav: true,
            speed: 500,
            maxwidth: 800,
            namespace: "centered-btns"
        });
        $("#slider3").responsiveSlides({
            auto: false,
            pager: true,
            nav: true,
            speed: 500,
            maxwidth: 800,
            namespace: "centered-btns"
        });$("#slider4").responsiveSlides({
            auto: false,
            pager: true,
            nav: true,
            speed: 500,
            maxwidth: 800,
            namespace: "centered-btns"
        });

    });
});