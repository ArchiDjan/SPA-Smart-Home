/* Switch mode for different devices */
$('.left_tabs li').click(function() {
	$(this).toggleClass('active');
});
$('.first').click(function() {
	$('.light').slideToggle();
});
$('.second').click(function() {
	$('.socket').slideToggle();
});
$('.third').click(function() {
	$('.climate').slideToggle();
});

/* Switch on/off status device */
$('.on_off_option label').click(function() {
	$(this).closest('.status_dv').toggleClass('active');

	var id_label = '#' + $(this).attr('for');
	var mode_status = $(id_label).val();
	document.getElementById("status_m").innerHTML = mode_status;

	$('.text_off').toggle("fast");
	$('.text_on').toggle("fast");
});

/* Recieve block_scenari from another page */
$('.btn_toggle_mode').click(function() {
	$(this).toggleClass('active');
	$('.block_scenari').slideToggle("fast");
	$('.plan_room').slideToggle("fast");
});

/*  Tabs for wrapper_menu_r */
$('.wrapper_menu_r .tab').click(function() {
	$('.wrapper_menu_r .tab').removeClass('active').eq($(this).index()).addClass("active");
	$('.tab_item').hide().eq($(this).index()).fadeIn();
});


