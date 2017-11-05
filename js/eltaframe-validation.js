$(function () {
	$('.validate-form').submit(function(event) {
		var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		var submitform = $(this);
		var vpl = $(this).find('[data-validate="password"]').length;
		var vpvl = parseInt($(this).find('[data-validate="password"]').attr('data-length'));
		$(this).find('[data-validate="email"]').each(function() {
			var errorMsg = $(this).find('.validate-email');
			if ($(this).val() == '') {
				$(submitform).find('.validate-email *').hide();
				$(submitform).find('.validate-email .empty-error').slideDown();
				event.preventDefault();
			} else if (emailregex.test($(this).val())) {
				$(submitform).find('.validate-email *').hide();
				$(submitform).find('.validate-email .success').slideDown();
			} else {	
				$(submitform).find('.validate-email *').hide();
				$(submitform).find('.validate-email .not-valid-error').slideDown();
				event.preventDefault();
			}
		});
		var passwordV = '';
		if (vpl == 1) {
			$(this).find('[data-validate="password"]').each(function() {
				if ($(this).val() == '') {
					$(submitform).find('.validate-password *').hide();
					$(submitform).find('.validate-password .empty-error').slideDown();
					event.preventDefault();
				} else if ($(this).val().length < vpvl ) {
					$(submitform).find('.validate-password *').hide();
					$(submitform).find('.validate-password .length-error').slideDown();
					event.preventDefault();
				} else {
					$(submitform).find('.validate-password *').hide();
					$(submitform).find('.validate-password .success').slideDown();
				}
			});
		} else if (vpl > 1) {
			$(this).find('[data-validate="password"]').each(function() {
				if ($(this).val() == '') {
					$(submitform).find('.validate-password *').hide();
					$(submitform).find('.validate-password .empty-error').slideDown();
					event.preventDefault();
					return false;
				} else if ($(this).val().length < vpvl ) {
					$(submitform).find('.validate-password *').hide();
					$(submitform).find('.validate-password .length-error').slideDown();
					event.preventDefault();
				} else {
					$(submitform).find('.validate-password *').hide();
					passwordV = passwordV + ',/">,<.@#^&*<?' + $(this).val();
				}
			});
			var passwordV = passwordV.split(',/">,<.@#^&*<?');
			for (var i = 1; i < passwordV.length - 1; i++) {
				if (passwordV[i] != passwordV[i+1]) {
					$(submitform).find('.validate-password *').hide();
					$(submitform).find('.validate-password .not-valid-error').slideDown();
					event.preventDefault();
				} else {
					$(submitform).find('.validate-password *').hide();
					$(submitform).find('.validate-password .success').slideDown();
				}
			}
		}
	});
});
