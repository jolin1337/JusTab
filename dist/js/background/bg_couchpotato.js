"use strict";function getWantedCouchPotato(a,b){a||(a=25);var c=serviceData.CP.apiUrl,d="movie.list/?status=active&limit_offset="+a,e=c+d;ajax("GET",e).then(function(a){localStorage.setItem("Couchpotato_error",!1),serviceData.CP.wanted.error=!1,localStorage.setItem("CouchpotatoWanted",JSON.stringify(a)),serviceData.CP.wanted.JSON=a,cpwHTML(),b&&b()},function(a,c,d){console.log(a,c,d),localStorage.setItem("Couchpotato_error",!0),serviceData.CP.wanted.error=!0,b&&b()})}function getSnatchedCouchPotato(a){var b=serviceData.CP.apiUrl,c="movie.list/?release_status=snatched,downloaded,available";ajax("GET",b+c).then(function(b){localStorage.setItem("Couchpotato_error",!1),serviceData.CP.snatched.error=!1,localStorage.setItem("CouchpotatoSnatched",JSON.stringify(b)),serviceData.CP.snatched.JSON=b,cpsHTML(),a&&a()},function(b,c,d){console.log(b,c,d),localStorage.setItem("Couchpotato_error",!0),serviceData.CP.snatched.error=!0,a&&a()})}function cpwHTML(){var a="<h2>Wanted</h2>";wantedData=serviceData.CP.wanted.JSON,wantedData.movies.forEach(function(b,c){a=cpCreateVar(b,a)}),localStorage.setItem("CouchpotatoWantedHTML",a),serviceData.CP.wanted.HTML=a}function cpsHTML(){var a="<h2>Snatched and Available</h2>";snatchedData=serviceData.CP.snatched.JSON,snatchedData.movies.forEach(function(b,c){a=cpCreateVar(b,a)}),localStorage.setItem("CouchpotatoSnatchedHTML",a),serviceData.CP.snatched.HTML=a}function cpCreateVar(a,b){var c,d=new Date(a.info.released);return c=a.info.images.poster_original&&a.info.images.poster_original[0]&&"None"!=a.info.images.poster_original[0].substr(-4)?a.info.images.poster[0]:"img/poster_fallback.png",moment(d).year()!=moment().year()?date=moment(d).format("MMM D, YYYY"):date=moment(d).format("MMM D"),b+='<div class="core-item cp-item"><div class="cp-poster-container"><img class="cp-poster" src="img/poster_fallback.png" data-echo="'+c+'"></img></div><div class="core-item-content">'+htmlEncode(a.title)+'</div><div class="core-item-icon"></div></div><div class="cp-collapse core-collapse"><div class="cp-collapse-date">'+htmlEncode(date)+'</div><div class="cp-collapse-buttons"><div class="icon-button search-icon cp-search-movie waves-effect" id="'+a._id+'"></div><a class="cp-imdb-link" href="http://www.imdb.com/title/'+a.identifiers.imdb+'" target="_blank"><div class="icon-button info-icon cp-imdb-link-icon waves-effect"></div></a></div></div>'}