$(document).ready(function() {
    //var template = $.get('../templates/article.mustache');
    var meetupEventUrl = "https://api.meetup.com/atlantajug/events?callback=?&scroll=future_or_past&photo-host=public&page=2&sig_id=10682554&sig=bae70dac683f016dd59b9849f032e6c368d6827b"
    var templateUrl  = "/assets/event-cards.html";
    var templateFetch = $.get(templateUrl);
    var eventDataFetch = $.Deferred();
    $.ajax({
    url: meetupEventUrl,
    jsonp: "JSON_CALLBACK",
    dataType: "jsonp",
    // Work with the response
    success: function( response ) {
        //console.log( ['jsonp', response] ); // server response
        eventDataFetch.resolve(response);
    }
    });

    // arguments resolved from teh ajax gets are each
    //an array with the following structure: [ data, statusText, jqXHR ]
    $.when( templateFetch, eventDataFetch ).then(
      function ( template, eventData) {
        if (eventData.data) {
          var container = $("#meetup-events")
          $.each(eventData.data, function(i, event){
             var html = Mustache.render(template[0], event);
             console.log(event);
             container.append(html);
          });
        }

      },
      function() {
           console.log("something failed");
      });
});
