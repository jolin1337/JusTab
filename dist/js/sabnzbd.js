function sabShowData(){$(".bottom-bar-container .sabnzbd-info").empty(),$(".queue").empty(),$(".history").empty();var a=serviceData.SAB.queue.error,b=serviceData.SAB.history.error;"true"==a||"true"==b?$("#sabnzbd .error").slideDown("slow"):$("#sabnzbd .error").slideUp("slow"),$(".bottom-bar-container .sabnzbd-info").html(serviceData.SAB.downloadStatus),$("#sabnzbd .queue").html(serviceData.SAB.queue.HTML),$("#sabnzbd .history").html(serviceData.SAB.history.HTML)}function sabRemove(a){a=$(a);var b,c=(a.first().attr("class"),a.data("id")),d=serviceData.SAB.apiUrl;b=a.hasClass("sabh-remove-icon")?d+"&mode=history&name=delete&value="+c+"&del_files=true":d+"&mode=queue&name=delete&value="+c,$.ajax({url:b}).done(function(b){b=b.trim(),"ok"==b?(a.parents(".core-collapse").prev(".sab-item-container")[0].remove(),a.parents(".core-collapse").remove(),0===$(".queue .core-item").length&&$(".queue").append('<div class="core-item without-hover">No items in queue at this moment.</div>'),0===$(".history .core-item").length&&$(".history").append('<div class="core-item without-hover">No items in history at this moment.</div>'),localStorage.setItem("SabnzbdHistoryHTML",$(".history").html()),localStorage.setItem("SabnzbdQueueHTML",$(".queue").html())):a.fadeOut(400,function(){a.removeClass("remove-icon"),a.addClass("error-icon"),a.attr("title",b),a.fadeIn(400)})}).fail(function(){a.fadeOut(400,function(){a.addClass("error-icon"),a.attr("title","There was an error"),a.fadeIn(400)})})}function sabCheckScroll(a){var b=$(a.currentTarget),c=parseFloat($("#sabnzbd .sab-item-container").length)+parseFloat(serviceData.SAB.history.length);b[0].scrollHeight-b[0].scrollTop==b.outerHeight()&&(0===$("#sabnzbd .history .loading-bar").length&&$("#sabnzbd .history").append('<div class="core-item without-hover loading-bar">'+serviceData.spinner+"</div>"),chrome.runtime.getBackgroundPage(function(a){a.getSabnzbdHistory(c)}))}$.when(serviceDataRefreshDone).done(function(){serviceData.SAB.status&&($(".refresh-sab").click(function(){$("#sabnzbd .error:visible").slideUp(400),$(".refresh-sab").fadeOut(400,function(){$(this).html(serviceData.spinner),$(this).fadeIn(400,function(){chrome.runtime.getBackgroundPage(function(a){a.getSabnzbdHistory(serviceData.SAB.history.length,function(){a.getSabnzbdQueue(function(){$(".refresh-sab").fadeOut(400,function(){$(this).html('<img src="img/icons/refresh.svg" alt="Refresh Sabnzbd" draggable=false>'),$(this).fadeIn(400)})})})})})})}),$("html").on("click",".sabh-remove-icon, .sabq-remove-icon",function(a){sabRemove(a.currentTarget)}),$("#sabnzbd .panel-content").bind("scroll",sabCheckScroll),$("#sabnzbd .panel-header .panel-header-foreground .bottom a").attr("href",serviceData.SAB.url))});