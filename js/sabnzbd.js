// Docs:
// ttp://wiki.sabnzbd.org/api

// "media.list" lists all movies, "data.movies[i].status" returns the status of the movie
$(document).ready(function() {
  chrome.storage.sync.get({
    SAB_status: '',
    SAB_address: '',
    SAB_port: ''
  }, function(items) {
    if (items.SAB_status === true) {
      sabShowData();

      $('.refresh_sab').click(function() {
        chrome.runtime.getBackgroundPage(function(backgroundPage) {
          backgroundPage.getSabnzbdHistory(function() {
            backgroundPage.getSabnzbdQueue(function() {
              sabShowData();
            });
          });
        });
      });

      if (items.SAB_address.slice(0,7) == "http://") {
        url = items.SAB_address + ":" + items.SAB_port + "/";
      }
      else {
        url = "http://" + items.SAB_address + ":" + items.SAB_port + "/";
      }

      $('#sabnzbd core-toolbar a').attr('href', url);

      $('#sabnzbd').show();
      $('body').width($('body').width() + $('#sabnzbd').width());
    }
  });
});

function sabShowData() {
  $('.queue').empty();
  $('.history').empty();

  var queueError = localStorage.getItem('SabnzbdQueue_error');
  var historyError = localStorage.getItem('SabnzbdHistory_error');

  $('.history').append('<h2>History</h2>');
  $('.queue').append('<h2>Queue</h2>');

  if (queueError == "true" || historyError == "true") {
    $('#sabnzbd .error').slideDown('slow');
  }
  else {
    $('#sabnzbd .error').slideUp('slow');
  }

  if (localStorage.SabnzbdQueue) {
    var queue = JSON.parse(localStorage.getItem('SabnzbdQueue'));

    $.each(queue.queue.slots, function(i) {
      $('.queue').append("<core-item label='" + queue.queue.slots[i].filename + "'></core-item>");
    });

    if (queue.queue.slots.length < 1) {
      $('.queue').append("<core-item label='No items in queue at this moment.'></core-item>");
    }
  }

  if (localStorage.SabnzbdHistory) {
    var history = JSON.parse(localStorage.getItem('SabnzbdHistory'));

    $.each(history.history.slots, function(i) {
      $('.history').append("<core-item label='" + history.history.slots[i].name + "'></core-item>");
    });

    if (history.history.slots.length < 1) {
      $('.queue').append("<core-item label='No items in history at this moment.'></core-item>");
    }
  }
}
