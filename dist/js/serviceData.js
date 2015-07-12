function refreshServiceData(){localStorage.getItem("DesigernewsUpvotes")||localStorage.setItem("DesigernewsUpvotes",[]),serviceDataRefreshDone=$.Deferred(),chrome.storage.sync.get(function(a){serviceData={spinner:"<div id='spinner-container'><div class='spinner-layer blue'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer red'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer yellow'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer green'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div>",GC:{containerId:"calendar",error:localStorage.getItem("Calendar_error"),status:a.GC_status,alarmName:"googleCalendar",refresh:isNaN(parseFloat(a.GC_refresh))?15:parseFloat(a.GC_refresh),bgFunctionName:"getCalendarData",feFunctionName:"calenderShowEvents",JSON:JSON.parse(localStorage.getItem("Calendar")),HTML:localStorage.getItem("CalendarHTML"),calendars:a.calendars,days:parseFloat(a.GC_days)},GM:{containerId:"gmail",error:localStorage.getItem("Gmail_error"),status:a.GM_status,alarmName:"gmail",refresh:isNaN(parseFloat(a.GM_refresh))?15:parseFloat(a.GM_refresh),bgFunctionName:"getGmailData",feFunctionName:"GmailShowData",JSON:JSON.parse(localStorage.getItem("Gmail")),ReadHTML:localStorage.getItem("GmailReadHTML"),UnreadHTML:localStorage.getItem("GmailUnreadHTML"),nextPage:localStorage.getItem("Gmail_page")},FB:{containerId:"facebook",error:localStorage.getItem("Facebook_error"),status:a.FB_status,alarmName:"facebook",refresh:isNaN(parseFloat(a.FB_refresh))?15:parseFloat(a.FB_refresh),bgFunctionName:"getFacebookData",feFunctionName:"fbShowData",JSON:$.parseXML(localStorage.getItem("Facebook")),url:a.FB_url,HTML:localStorage.getItem("FacebookHTML")},CPS:{containerId:"couchpotato",error:localStorage.getItem("CouchpotatoSnatched_error"),status:a.CP_status,alarmName:"couchPotatoSnatched",refresh:isNaN(parseFloat(a.CP_refresh))?15:parseFloat(a.CP_refresh),bgFunctionName:"getSnatchedCouchPotato",feFunctionName:"cpShowData",JSON:JSON.parse(localStorage.getItem("CouchpotatoSnatched")),HTML:localStorage.getItem("CouchpotatoSnatchedHTML"),apiUrl:a.CP_address+":"+a.CP_port+"/api/"+a.CP_key+"/",url:a.CP_address+":"+a.CP_port,address:a.CP_address,port:a.CP_port,key:a.CP_key},CPW:{containerId:"couchpotato",error:localStorage.getItem("CouchpotatoWanted_error"),status:a.CP_status,alarmName:"couchPotatoWanted",refresh:isNaN(parseFloat(a.CP_refresh))?15:parseFloat(a.CP_refresh),bgFunctionName:"getWantedCouchPotato",feFunctionName:"cpShowData",JSON:JSON.parse(localStorage.getItem("CouchpotatoWanted")),HTML:localStorage.getItem("CouchpotatoWantedHTML"),apiUrl:a.CP_address+":"+a.CP_port+"/api/"+a.CP_key+"/",url:a.CP_address+":"+a.CP_port,address:a.CP_address,port:a.CP_port,key:a.CP_key},SB:{containerId:"sickbeard",error:localStorage.getItem("Sickbeard_error"),status:a.SB_status,alarmName:"sickBeard",refresh:isNaN(parseFloat(a.SB_refresh))?15:parseFloat(a.SB_refresh),bgFunctionName:"getSickBeardData",feFunctionName:"sbShowData",JSON:JSON.parse(localStorage.getItem("Sickbeard")),MissedHTML:localStorage.getItem("SickbeardMissedHTML"),TodayHTML:localStorage.getItem("SickbeardTodayHTML"),SoonHTML:localStorage.getItem("SickbeardSoonHTML"),LaterHTML:localStorage.getItem("SickbeardLaterHTML"),apiUrl:a.SB_address+":"+a.SB_port+"/api/"+a.SB_key+"/",url:a.SB_address+":"+a.SB_port,address:a.SB_address,port:a.SB_port,key:a.SB_key},SABQ:{containerId:"sabnzbd",error:localStorage.getItem("SabnzbdQueue_error"),status:a.SAB_status,alarmName:"sabnzbdQueue",refresh:isNaN(parseFloat(a.SABQ_refresh))?15:parseFloat(a.SABQ_refresh),bgFunctionName:"getSabnzbdQueue",feFunctionName:"sabShowData",JSON:JSON.parse(localStorage.getItem("SabnzbdQueue")),HTML:localStorage.getItem("SabnzbdQueueHTML"),url:a.SAB_address+":"+a.SAB_port,apiUrl:a.SAB_address+":"+a.SAB_port+"/sabnzbd/api?apikey="+a.SAB_key,downloadStatus:localStorage.getItem("SabnzbdStatusHTML"),address:a.SAB_address,port:a.SAB_port,key:a.SAB_key},SABH:{containerId:"sabnzbd",error:localStorage.getItem("SabnzbdHistory_error"),status:a.SAB_status,alarmName:"sabnzbdHistory",refresh:isNaN(parseFloat(a.SABH_refresh))?15:parseFloat(a.SABH_refresh),bgFunctionName:"getSabnzbdHistory",feFunctionName:"sabShowData",JSON:JSON.parse(localStorage.getItem("SabnzbdHistory")),HTML:localStorage.getItem("SabnzbdHistoryHTML"),url:a.SAB_address+":"+a.SAB_port,apiUrl:a.SAB_address+":"+a.SAB_port+"/sabnzbd/api?apikey="+a.SAB_key,length:a.SAB_history,address:a.SAB_address,port:a.SAB_port,key:a.SAB_key},DN:{containerId:"designernews",error:localStorage.getItem("Designernews_error"),status:a.DN_status,alarmName:"designerNews",refresh:isNaN(parseFloat(a.DN_refresh))?15:parseFloat(a.DN_refresh),bgFunctionName:"getDesignerNewsData",feFunctionName:"dnShowData",JSON:JSON.parse(localStorage.getItem("Designernews")),HTML:localStorage.getItem("DesignernewsHTML")},HN:{containerId:"hackernews",error:localStorage.getItem("Hackernews_error"),status:a.HN_status,alarmName:"hackernews",refresh:isNaN(parseFloat(a.HN_refresh))?15:parseFloat(a.HN_refresh),bgFunctionName:"getHackerNewsData",feFunctionName:"hnShowData",IDs:localStorage.getItem("HackernewsIDs"),JSON:JSON.parse(localStorage.getItem("Hackernews")),HTML:localStorage.getItem("HackernewsHTML")},GH:{containerId:"github",error:localStorage.getItem("Github_error"),status:a.GH_status,alarmName:"github",refresh:isNaN(parseFloat(a.GH_refresh))?15:parseFloat(a.GH_refresh),bgFunctionName:"getGithubData",feFunctionName:"ghShowData",JSON:$.parseXML(localStorage.getItem("Github")),HTML:localStorage.getItem("GithubHTML")},PH:{containerId:"producthunt",error:localStorage.getItem("ProductHunt_error"),status:a.PH_status,alarmName:"productHunt",refresh:isNaN(parseFloat(a.PH_refresh))?15:parseFloat(a.PH_refresh),bgFunctionName:"getProductHuntData",feFunctionName:"phShowData",JSON:JSON.parse(localStorage.getItem("ProductHunt")),HTML:localStorage.getItem("ProductHuntHTML")},DR:{containerId:"dribbble",error:localStorage.getItem("Dribbble_error"),status:a.PH_status,alarmName:"dribbble",refresh:isNaN(parseFloat(a.DR_refresh))?15:parseFloat(a.DR_refresh),bgFunctionName:"getDribbbleData",feFunctionName:"drShowData",JSON:JSON.parse(localStorage.getItem("Dribbble")),HTML:localStorage.getItem("DribbbleHTML"),smallImages:a.DR_small_images,gifs:a.DR_gifs}},serviceDataRefreshDone.resolve()})}$(window).load(refreshServiceData());