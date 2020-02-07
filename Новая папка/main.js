$('document').ready(function(){
	// $('.part').hover (
		// function(){
			// $('.description').html($(this).attr('description-data'));
			// $('.description').fadeIn(50);
		// },
		// function() {
			// $('.description').fadeOut(50);
		// }
	// )
	
	// $('.part').on('click', function() {
		// alert('Ты жмякнул по кнопке')
	// })
	
	$('.part').on('click', function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn(50);
	})

	jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".description"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});
});
});
