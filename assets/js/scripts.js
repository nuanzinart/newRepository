


$(".contact-form").on('submit', sendForm);

function sendForm(e) {
    e.preventDefault();
    // console.log('test');

    var data = $(".contact-form").serializeArray();
    // console.dir(data);

    $.ajax({
        url: 'ajaxForm.php',
        data: data,
        type: "POST",
        success: function (data) {
            if ( $('.input-name').val() == "" ) {
                $(".input-name").css("background-color","#FF7373");
                $(".input-name").attr("placeholder","Вы не ввели имя");
            } 
            else if ( $('.input-email').val() == "" ) {
                $(".input-email").css("background-color","#FF7373");
                $(".input-email").attr("placeholder","Вы не ввели E-mail");
            } 
            else if ( $('.input-phone').val() == "" ) {
                $(".input-phone").css("background-color","#FF7373");
                $(".input-phone").attr("placeholder","Вы не ввели Телефон");
            }

            else {
                // $(".contact-form").hide(1000)
                $(".contact-form input").remove();
                $(".contact-form div").remove();
                $("<div>Спасибо!<br>Ваша заявка будет обработана</div>").appendTo(".contact-form");
                $(".contact-form div").addClass("thanks");
                $(".contact-form").css("text-align","center");
                
            }
            
        }
    })


}




// $(".contact-form").submit(function (e) {
//       e.preventDefault();
//           var str = (".contact-form").serialize();
          
//           $.ajax({
//             type: 'POST',
//             url: '/ajaxForm.php',
//             data: str,
//             success: function(){
//                 alert();
//             }
//           });
         
//        }); 


// }







                  // SLICK-SLIDER


// var downliadButton = $(".container_content-downloadbutton");

// downliadButton.on("click", function(e){
// 	alert("on");
// })

$(".slick-slider").slick({dots:true,arrows:true,autoplaySpeed:2000});

$(".slick-slider-testimonals").slick({dots:false,arrows:true});


                  // FANCY-BOX


$(document).ready(function() {
        $(".fancybox").fancybox({
        	
        'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
        });
    });


                  // YANDEX-MAP



ymaps.ready(init);    
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [54.187203529303964, 45.183880625643695],
                zoom: [15]
            }); 

            
      
   // Создание метки 
				var myGeoObject = new ymaps.GeoObject({
                    // Геометрия.
                    geometry: {
                        // Тип геометрии - точка
                        type: "Point",
                        // Координаты точки.
                        coordinates: [54.18169106629892,45.20387917605872],
                    	
                    },
                    properties: {
                // Контент метки.
               // iconContent: '<strong style="color:red">Мордовия-Арена</strong>'
            }
                });
 
			// Добавление метки на карту
			myMap.geoObjects.add(myGeoObject);

        };

      
