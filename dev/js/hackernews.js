// Docs:
// https://github.com/HackerNews/API

$.when(serviceDataRefreshDone).done(function() {
  if (serviceData.HN.status) {
    $('.refresh_hn').click(function() {
      $('#hackernews .error:visible').slideUp(400);

      $('.refresh_hn').fadeOut(400, function() {
        $(this).html(serviceData.spinner);
        $(this).fadeIn(400, function() {
          chrome.runtime.getBackgroundPage(function(backgroundPage) {
            backgroundPage.getHackerNewsData(function() {
              $('.refresh_hn').fadeOut(400, function() {
                $(this).html('<img src="img/icons/refresh.svg" alt="Refresh Hackernews" draggable=false>');
                $(this).fadeIn(400);
              });
            });
          });
        });
      });
    });
  }
});

function hnShowData() {
  $('.hn_links').empty();
  var error = serviceData.HN.error;

  if (error == "true") {
    $('#hackernews .error').slideDown('slow');
  }
  if (error == "false") {
    $('#hackernews .error').slideUp('slow');
  }

  $('.hn_links').html(serviceData.HN.HTML);
}