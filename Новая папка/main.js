$('document').ready(function(){
	$('.part').hover (
		function(){
			$('.description').html($(this).attr('description-data'));
			$('.description').fadeIn(50);
		},
		function() {
			$('.description').fadeOut(50);
		}
	)
	
	$('.part').on('click', function() {
		alert('Ты жмякнул по кнопке')
	})
});
