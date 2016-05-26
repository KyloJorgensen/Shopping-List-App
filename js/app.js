$(document).ready(function() {

	$('ul').on('click', '.icon-check-empty', function(){
		$(this).parent().children('p').css("text-decoration", "line-through")
		.parent().children('.icon-check-empty').hide()
	    .parent().children('.icon-check').show();
	});

	$('ul').on('click', '.icon-check', function(){
		$(this).parent().children('p').css("text-decoration", "none")
		.parent().children('.icon-check-empty').show()
		.parent().children('.icon-check').hide();
	});

	$('ul').on('click', '.icon-trash', function(){
		$(this).parent().hide();
	});

	$('ul').on('click', '#list-item', function(){
		$(this).parent().children('.icon-trash').show();
		$(this).parent().children('.icon-plus').show();
		$(this).parent().children('.icon-check').hide();
		$(this).parent().children('.icon-check-empty').hide();
	});

	$('.help').click(function(){
		$('.help').hide()
		$('.help-box').show();
	});

	$('.help-box').click(function(){
		$('.help').show()
		$('.help-box').hide();
	});

	$('.add').click(function(){
		$('ul').append('<li><i class="icon-check"></i><i class="icon-check-empty"></i><i class="icon-trash"></i><p>' + $('#user-input').val() + '</p></li>')
		
	});

	$('ul').on('click', '.replace', function(){
		alert($('this'));
	});
});



