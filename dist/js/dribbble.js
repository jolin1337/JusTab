function drShowData(){$(".dr-links").empty(),serviceData.DR.smallImages&&$(".dr-links").addClass("small-images");var a=serviceData.DR.error;"true"==a&&$("#dribbble .error").slideDown("slow"),"false"==a&&$("#dribbble .error").slideUp("slow"),$(".dr-links").html(serviceData.DR.HTML),$(".dr-image").unveil(0,function(){var a="img/dribbble_fallback.png";this.onerror=function(){this.src=a}})}$.when(serviceDataRefreshDone).done(function(){serviceData.DR.status&&$(".refresh-dr").click(function(){$("#dribbble .error:visible").slideUp(400),$(".refresh-dr").fadeOut(400,function(){$(this).html(serviceData.spinner),$(this).fadeIn(400,function(){chrome.runtime.getBackgroundPage(function(a){a.getDribbbleData(function(){$(".refresh-dr").fadeOut(400,function(){$(this).html('<img src="img/icons/refresh.svg" alt="Refresh Dribbble" draggable=false>'),$(this).fadeIn(400)})})})})})})});