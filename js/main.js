
(function($) {
    $(document).ready(function(){
      // $( ".meet-team-btn" ).click(function( event ) {
      //   event.preventDefault();
      //   $('body').addClass('noScroll');
      //   $('#about').addClass('hidden');
      //   $('#team-page').addClass('not-hidden slideInLeft');
      // });

      $('.team-info').on('hide.bs.collapse', function () {
        $('#'+this.id+'Btn.arrow-button').removeClass('oi-caret-bottom');
        $('#'+this.id+'Btn.arrow-button').addClass('oi-caret-right');
      });
      $('.team-info').on('show.bs.collapse', function () {
        $('#'+this.id+'Btn.arrow-button').removeClass('oi-caret-right');
        $('#'+this.id+'Btn.arrow-button').addClass('oi-caret-bottom');
      });
    });
})(jQuery);
