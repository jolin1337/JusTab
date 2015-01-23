$(document).ready(function() {
  chrome.storage.sync.get({
    GC_status: ''
  }, function(items) {
    if (items.GC_status === true) {
      calenderShowEvents();

      $('.refresh_calendar').click(function() {
        if ($('#calendar .error:visible')) {
          $('#calendar .error:visible').slideUp(400);
        }
        $('.refresh_calendar').fadeOut(400, function() {
          $('.loading_calendar').attr('active', true);
          chrome.runtime.getBackgroundPage(function(backgroundPage) {
            backgroundPage.getCalendarData(function() {
              $('.loading_calendar').attr('active', false);
              setTimeout(function() {
                $('.refresh_calendar').fadeIn(400);
              }, 400);
            });
          });
        });
      });

      $('#calendar').show();
      $('body').width($('body').width() + $('#calendar').width());
    }
  });
});

$('html').on('click', '.gc_item', function(event) {
  var collapseItem = $(this).next('.gc_collapse');
  var collapseIcon = $(this).find('.gc_collapse_icon');
  if (collapseItem.attr('opened') == 'false') {
    $('.gc_collapse').attr('opened', false);
    $('.gc_item').css('background-color', '#fafafa');
    $('.gc_collapse_icon_container').css('background-color', '#fafafa');
    $('.gc_collapse_icon[icon=expand-less]').fadeOut(165, function() {
      $(this).attr('icon', 'expand-more');
      $(this).fadeIn(165);
    });
    $(this).css('background-color', '#eee');
    collapseIcon.parent().css('background-color', '#eee');
    collapseItem.attr('opened', true);
    collapseIcon.fadeOut(165, function() {
      collapseIcon.attr('icon', 'expand-less');
      collapseIcon.fadeIn(165);
    });
  }
  else {
    $(this).css('background-color', '#fafafa');
    collapseIcon.parent().css('background-color', '#fafafa');
    collapseItem.attr('opened', false);
    collapseIcon.fadeOut(165, function() {
      collapseIcon.attr('icon', 'expand-more');
      collapseIcon.fadeIn(165);
    });
  }
});

function calenderShowEvents() {
  $('#calendar .today').empty();
  $('#calendar .tomorrow').empty();

  var events = JSON.parse(localStorage.getItem('Calendar'));
  var error = localStorage.getItem('Calendar_error');

  if (error == "true") {
    $('#calendar .error').slideDown('slow');
  }
  if (error == "false") {
    $('#calendar .error').slideUp('slow');
  }

  if (localStorage.CalendarTodayHTML && localStorage.CalendarTomorrowHTML) {
    $('#calendar .today').append(localStorage.getItem('CalendarTodayHTML'));
    $('#calendar .tomorrow').append(localStorage.getItem('CalendarTomorrowHTML'));

    if ($('#calendar .today core-item').length < 1) {
      $('#calendar .today').append('<core-item label="There are no events in your calendar for today."></core-item>');
    }

    if ($('#calendar .tomorrow core-item').length < 1) {
      $('#calendar .tomorrow').append('<core-item label="There are no events in your calendar for tomorrow."></core-item>');
    }
  }
}
