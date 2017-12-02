$(document).ready(function() {
	$('[data-type="modal"]').on('click', function(e) {
		$('#modal-wrapper .img-modal img').attr('src', $(this).attr('data-src'));

		$('#modal-wrapper').addClass('active').hide().fadeIn('medium');
	});

	$('#modal-wrapper').on('click', function(e) {
		$(this).fadeOut('fast', function() {
			$(this).show().removeClass('active');
		});
	});

	$('.close-modal').on('click', function(e) {
		e.preventDefault();
		$(this).closest('#modal-wrapper').trigger('click');
	});

	$('#modal-wrapper .img-modal').on('click', function(e) {
		e.stopPropagation();
	})
});
