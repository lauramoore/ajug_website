
(function($) {
    $(document).ready(function(){
      if((screen.height === 1366 && screen.width === 1024) || (screen.width === 768 && screen.height === 1024)){
        $('.parallax-window').attr('data-image-src','/assets/img/background/a-ipad-v19.svg');
      }

      if((screen.width === 1366 && screen.height === 1024) || (screen.width === 1024 && screen.height === 768)){
        $('.parallax-window').attr('data-image-src','/assets/img/background/a-ipad-side-v7.svg');
      }

      if(screen.width < 768){
        $('.parallax-window').removeAttr('data-image-src').removeAttr('data-parallax').removeClass('parallax-window');
        $('.ajug_becomemember_banner').attr('src', '/assets/img/ajug_becomemember_banner_rect.png')
      }

      $( window ).resize(function() {
        if($( window ).width() < 768){
          console.log('hello')
          $('.ajug_becomemember_banner').attr('src', '/assets/img/ajug_becomemember_banner_rect.png');
        } else {
          $('.ajug_becomemember_banner').attr('src', '/assets/img/ajug_becomemember_banner.png');
        }
      });
      $( ".meet-team-btn" ).click(function( event ) {
        event.preventDefault();
        $('.team-modal').modal('toggle')
      });

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
