function hnShowData(){$(".hn-links").empty();var a=serviceData.HN.error;"true"==a&&$("#hackernews .error").slideDown("slow"),"false"==a&&$("#hackernews .error").slideUp("slow"),$(".hn-links").html(serviceData.HN.HTML)}$.when(serviceDataRefreshDone).done(function(){serviceData.HN.status&&$(".refresh-hn").click(function(){$("#hackernews .error:visible").slideUp(400),$(".refresh-hn").fadeOut(400,function(){$(this).html(serviceData.spinner),$(this).fadeIn(400,function(){chrome.runtime.getBackgroundPage(function(a){a.getHackerNewsData(function(){$(".refresh-hn").fadeOut(400,function(){$(this).html('<img src="img/icons/refresh.svg" alt="Refresh Hackernews" draggable=false>'),$(this).fadeIn(400)})})})})})})});