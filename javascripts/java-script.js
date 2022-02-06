//write here your js
$(document).ready(function(){
  $('.slide__thumbnails .thumb').click(function(){
    var imgThumb = $(this).attr('src');
    // attr - возвращает undefined для тех атрибутов, значение которых не было задано
    var oldImg = $('.full_img');
    var imgFull = $('<img class="full_img" src="' + imgThumb +'">');
    imgFull.hide(); // hide - позволяет скрывать выбранные элементы
    $('.full').prepend(imgFull); //prepend - Добавляет контент внутрь выбранных элементов
    imgFull.show(1);
    oldImg.hide(1,function(){
      $(this).remove();
    });
  });
});
$('thumb:first').click();

let y;
$(window).on('scroll', function() {
	y = $(window).scrollTop();
	$('.psection4').css('right',5 + parseInt(y-1250) + '%');
});
