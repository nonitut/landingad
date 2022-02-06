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
// кнопка триггер к картинкам

let y;
$(window).on('scroll', function() {
	y = $(window).scrollTop();
	$('.psection4').css('right',5 + parseInt(y-1250) + '%');
}); // строка едет


$(document).mousemove(function(e) {
    let body_size_x = $( window ).width();
    let body_size_y = $( window ).height();
    let left_dir = e.pageX;
    let top_dir = e.pageY;
    $('#body').html(body_size_x + ' + ' + body_size_y);

    $('#top').html(top_dir);
    $('#left').html(left_dir);

    if (left_dir >  body_size_y) {
      $('#box').css("background-color","pink");
    } else {
      $('#box').css("background-color","blue");
    }
});// хочу сделать в первом блоке при движении влево смену картинки на инверсию
