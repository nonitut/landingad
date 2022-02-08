// $(document).ready(function(){
//   $('.but1  .but2 .but3 .but4 .but5 .but6 .but7').click(function(){
//     let imgThumb = $(this).attr('src');  // attr - возвращает undefined для тех атрибутов, значение которых не было задано
//     let oldImg = $('.Уроки');
//     let imgFull = $('<img class="Современ" src="' + imgThumb +'">');
//     imgFull.hide(); // hide - позволяет скрывать выбранные элементы
//     $('.imgsection3').prepend(imgFull); //prepend - Добавляет контент внутрь выбранных элементов
//     imgFull.show(1);
//     oldImg.hide(1,function(){
//       $(this).remove();
//     });
//   });
// });
// $('button3:first').click();
// // кнопка триггер к картинкам

let y;
$(window).on('scroll', function() {
	y = $(window).scrollTop();
	$('.psection4').css('right',1 + parseInt((y-1200)/10) + '%');
}); // строка едет вииии, но пока нет адаптивности


// $(document).mousemove(function(e) {
//     let body_size_x = $( window ).width();
//     let body_size_y = $( window ).height();
//     let left_dir = e.pageX;
//     let top_dir = e.pageY;
//     $('.backgroundimg').html(body_size_x + ' + ' + body_size_y);
//
//     $('#top').html(top_dir);
//     $('#left').html(left_dir);
//
//     if (left_dir >  body_size_y) {
//       $('.backgroundimg').css("background-image","none");
//     } else {
//       $('.backgroundimg').css("background","url('img/G3079.png')");
//       $('.backgroundimg').css("width","100%");
//       $('.backgroundimg').css("display","flex");
//       $('.backgroundimg').css("text-align","center");
//       $('.backgroundimg').css("z-index","1");
//       $('.backgroundimg').css("position","absolute");
//       $('.backgroundimg').css("justify-content","center");
//       $('.backgroundimg').css("height","47vw");
//     }
// });// хочу сделать в первом блоке при движении влево смену картинки на инверсию

// $(document).ready(function(){
//   $(".but1").click(function(){
//     $(".Уроки").toggle("hidden");
//     // if ( ".but2, .but3, .but4, .but5, .but6, .but7 " != 1) {
//     //
//     //   }
//   });
// });
//
// $(document).ready(function(){
//   $(".but2").click(function(){
//     $(".Современ").toggle("blok");
//   });
// });
//
// $(document).ready(function(){
//   $(".but3").click(function(){
//     $(".Интерес").toggle("blok");
//   });
// });
//
// $(document).ready(function(){
//   $(".but4").click(function(){
//     $(".Тесты").toggle("blok");
//   });
// });
//
// $(document).ready(function(){
//   $(".but5").click(function(){
//     $(".Личные").toggle("blok");
//   });
// });
//
// $(document).ready(function(){
//   $(".but6").click(function(){
//     $(".Проверка").toggle("blok");
//   });
// });
//
// $(document).ready(function(){
//   $(".but7").click(function(){
//     $(".Кейсы").toggle("blok");
//   });
// });

// $('.imgsection3').click(function(){
//     $('.but1').find('.Уроки').attr('src',"");
//   }); //attr - возвращает undefined для тех атрибутов, значение которых не было задано
//   $('.imgsection3').click(function(){
//     $('.but2').find('.Современ').attr('src',"img/Sal.png");
//   });
//   $('.circle').click(function(){
//     $('.glass').find('#glass').attr('src',"images/glasses/glasses_round_black.svg");
//   });

$(document).ready(function(){
	$('.but1').click(function(){
	$('.imgsection3').attr('src', 'img/Уроки.png');
	})
	$('.but2').click(function(){
	$('.imgsection3').attr('src', 'img/Sal.png');
	})
	$('.but3').click(function(){
	$('.imgsection3').attr('src', 'img/Sa36.png');
	})
	$('.but4').click(function(){
	$('.imgsection3').attr('src', 'img/Ot.png');
	})
	$('.but5').click(function(){
	$('.imgsection3').attr('src', 'img/O04.png');
	})
	$('.but6').click(function(){
	$('.imgsection3').attr('src', 'img/Saly23.png');
	})
	$('.but7').click(function(){
	$('.imgsection3').attr('src', 'img/Ot2.png');
	})
})
