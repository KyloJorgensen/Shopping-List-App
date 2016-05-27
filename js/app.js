$(document).ready(function() {

	$('ul').on('click', '.icon-check-empty', function(){
		console.log($(this));
		$(this).parent().children('input').addClass('crossout')
		.parent().children('.icon-check-empty').hide()
	    .parent().children('.icon-check').show();
	});

	$('ul').on('click', '.icon-check', function(){
		$(this).parent().children('input').removeClass('crossout')
		.parent().children('.icon-check-empty').show()
		.parent().children('.icon-check').hide();
	});

	$('ul').on('click', '#list-item', function(){
		$(this).parent().children('.icon-trash').show()
		.parent().children('.icon-plus').show()
		.parent().children('.icon-check').hide()
		.parent().children('.icon-check-empty').hide();
	});

	$('.add').click(function(){
		$('ul').append('<li><i class="replace icon-plus"></i><i class="icon-check"></i><i class="icon-check-empty"></i><i class="icon-trash"></i><input type="text" id="list-item" placeholder="' + $('#user-input').val() + '"></input></li>');
		$(this).parent().children('input').hide()
		.parent().children('i').after('<input type="text" id="user-input" placeholder="Click here to add new item."></input>');
	});	

	$('ul').on('click', '.replace', function(){
		$(this).parent().children('input').hide()
		.parent().children('.icon-trash').after('<input type="text" id="list-item" placeholder="' + $(this).parent().children('#list-item').val() + '"></input>')
		.parent().children('.icon-trash').hide()
		.parent().children('.icon-plus').hide()
		.parent().children('.icon-check').hide()
		.parent().children('.icon-check-empty').show();
	});

	$('ul').on('click', '.icon-trash', function(){
		$(this).parent().hide();
	});

	$('.help').click(function(){
		$('.help').hide()
		$('.help-box').show();
	});

	$('.help-box').click(function(){
		$('.help').show()
		$('.help-box').hide();
	});

});



