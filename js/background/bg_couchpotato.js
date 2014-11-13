// Docs:
// http://nas.pxdesign.nl:5050/docs

// "media.list" lists all movies, "data.movies[i].status" returns the status of the movie
function getCouchPotatoData(callback) {
  chrome.storage.sync.get({
    CP_address: '',
    CP_port: '',
    CP_key: ''
  }, function(items) {
    var url = '';

    if (items.CP_address.slice(0,7) == "http://") {
      url = items.CP_address + ":" + items.CP_port + "/";
    }
    else {
      url = "http://" + items.CP_address + ":" + items.CP_port + "/";
    }
    var apiKey = "api/" + items.CP_key + "/";
    var apiCall = "media.list/";

    $.ajax({
      url: url + apiKey + apiCall,
      dataType: 'json',
      async: true,
      timeout: 2000,
      success: function(data) {
        localStorage.setItem("Couchpotato", JSON.stringify(data));
      }
    });
  });

  if (callback) {
    callback();
  }
}
