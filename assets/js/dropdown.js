$(function(){
  function MobToggle() {
    $('.mobile-nav').toggleClass('is-open');
  };


  $(document).ready(function() {
    $('.mobile-nav-toggle').on('click', MobToggle);
    $('a').on('click', MobToggle);
  });
});
