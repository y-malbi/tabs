//Modal window MARINA
$('.title').click(function(){
  // Подучаем id модального окна которое нужно показать
  var title_id = $(this).attr('data-target');
  // $('body').append('<div class="modal-bg"></div>');
  $('li').removeClass('active-title');
  $(this).parent().addClass('active-title');
  $('.tab-content').removeClass('active');
  $('#'+ title_id).addClass('active');
});
