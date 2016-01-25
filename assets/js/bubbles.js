$(function(){
  function addBubble() {
    $(this).addClass('shadow')
      .siblings().removeClass('shadow');
    $(this).addClass('bubble-is-on')
      .siblings().removeClass('bubble-is-on');
  };
  $(document).ready(function() {
    $('.face:nth-child(2)').addClass('shadow bubble-is-on');
    $('.face').on('click', addBubble);
  });
});
