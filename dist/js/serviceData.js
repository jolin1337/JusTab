"use strict";function refreshServiceData(){var a=localStorage;serviceDataRefreshDone=new Promise(function(b,c){chrome.storage.sync.get(function(c){serviceData={spinner:"<div class='loader'><svg class='circular'><circle class='path'/></svg></div>",GC:{containerId:"calendar",error:a.Calendar_error||null,status:c.GC_status,alarmName:"googleCalendar",refresh:isNaN(parseFloat(c.GC_refresh))?15:parseFloat(c.GC_refresh),bgFunctionName:"getCalendarData",feFunctionName:"calenderShowEvents",JSON:JSON.parse(a.Calendar||null),HTML:a.CalendarHTML||null,calendars:c.calendars,days:parseFloat(c.GC_days)||6,panelWidth:parseFloat(c.GC_width)||400,htmlStorageKey:"CalendarHTML"},GM:{containerId:"gmail",error:a.Gmail_error||null,status:c.GM_status,alarmName:"gmail",refresh:isNaN(parseFloat(c.GM_refresh))?15:parseFloat(c.GM_refresh),bgFunctionName:"getGmailData",feFunctionName:"GmailShowData",JSON:JSON.parse(a.Gmail||null),ReadHTML:a.GmailReadHTML||null,UnreadHTML:a.GmailUnreadHTML||null,nextPage:a.Gmail_page||null,panelWidth:parseFloat(c.GM_width)||400,htmlStorageKey:["GmailUnreadHTML","GmailReadHTML"],length:25},CP:{containerId:"couchpotato",status:c.CP_status,refresh:isNaN(parseFloat(c.CP_refresh))?15:parseFloat(c.CP_refresh),feFunctionName:"cpShowData",address:c.CP_address,port:c.CP_port,key:c.CP_key,panelWidth:parseFloat(c.CP_width)||400,htmlStorageKey:["CouchpotatoSnatchedHTML","CouchpotatoWantedHTML"],snatched:{error:a.CouchpotatoSnatched_error||null,alarmName:"couchPotatoSnatched",bgFunctionName:"getSnatchedCouchPotato",JSON:JSON.parse(a.CouchpotatoSnatched||null),HTML:a.CouchpotatoSnatchedHTML||null},wanted:{error:a.CouchpotatoWanted_error||null,alarmName:"couchPotatoWanted",bgFunctionName:"getWantedCouchPotato",JSON:JSON.parse(a.CouchpotatoWanted||null),HTML:a.CouchpotatoWantedHTML||null,length:25}},SB:{containerId:"sickbeard",error:a.Sickbeard_error||null,status:c.SB_status,alarmName:"sickBeard",refresh:isNaN(parseFloat(c.SB_refresh))?15:parseFloat(c.SB_refresh),bgFunctionName:"getSickBeardData",feFunctionName:"sbShowData",JSON:JSON.parse(a.Sickbeard||null),MissedHTML:a.SickbeardMissedHTML||null,TodayHTML:a.SickbeardTodayHTML||null,SoonHTML:a.SickbeardSoonHTML||null,LaterHTML:a.SickbeardLaterHTML||null,address:c.SB_address,port:c.SB_port,key:c.SB_key,panelWidth:parseFloat(c.SB_width)||400,htmlStorageKey:["SickbeardMissedHTML","SickbeardTodayHTML","SickbeardSoonHTML","SickbeardLaterHTML"]},SAB:{containerId:"sabnzbd",status:c.SAB_status,feFunctionName:"sabShowData",downloadStatus:a.SabnzbdStatusHTML||null,address:c.SAB_address,port:c.SAB_port,key:c.SAB_key,panelWidth:parseFloat(c.SAB_width)||400,htmlStorageKey:["SabnzbdQueueHTML","SabnzbdHistoryHTML"],queue:{error:a.SabnzbdQueue_error||null,alarmName:"sabnzbdQueue",refresh:isNaN(parseFloat(c.SABQ_refresh))?15:parseFloat(c.SABQ_refresh),bgFunctionName:"getSabnzbdQueue",JSON:JSON.parse(a.SabnzbdQueue||null),HTML:a.SabnzbdQueueHTML||null},history:{error:a.SabnzbdHistory_error||null,alarmName:"sabnzbdHistory",refresh:isNaN(parseFloat(c.SABH_refresh))?15:parseFloat(c.SABH_refresh),bgFunctionName:"getSabnzbdHistory",JSON:JSON.parse(a.SabnzbdHistory||null),HTML:a.SabnzbdHistoryHTML||null,length:c.SAB_history}},DN:{containerId:"designernews",error:a.Designernews_error||null,status:c.DN_status,alarmName:"designerNews",refresh:isNaN(parseFloat(c.DN_refresh))?15:parseFloat(c.DN_refresh),bgFunctionName:"getDesignerNewsData",feFunctionName:"dnShowData",JSON:JSON.parse(a.Designernews||null),HTML:a.DesignernewsHTML||null,panelWidth:parseFloat(c.DN_width)||400,htmlStorageKey:"DesignernewsHTML"},HN:{containerId:"hackernews",error:a.Hackernews_error||null,status:c.HN_status,alarmName:"hackernews",refresh:isNaN(parseFloat(c.HN_refresh))?15:parseFloat(c.HN_refresh),bgFunctionName:"getHackerNewsData",feFunctionName:"hnShowData",IDs:a.HackernewsIDs||null,JSON:JSON.parse(a.Hackernews||null),HTML:a.HackernewsHTML||null,panelWidth:parseFloat(c.HN_width)||400,htmlStorageKey:"HackernewsHTML"},GH:{containerId:"github",error:a.Github_error||null,status:c.GH_status,alarmName:"github",refresh:isNaN(parseFloat(c.GH_refresh))?15:parseFloat(c.GH_refresh),bgFunctionName:"getGithubData",feFunctionName:"ghShowData",JSON:a.Github||null,HTML:a.GithubHTML||null,panelWidth:parseFloat(c.GH_width)||400,htmlStorageKey:"GithubHTML"},PH:{containerId:"producthunt",error:a.ProductHunt_error||null,status:c.PH_status,alarmName:"productHunt",refresh:isNaN(parseFloat(c.PH_refresh))?15:parseFloat(c.PH_refresh),bgFunctionName:"getProductHuntData",feFunctionName:"phShowData",JSON:JSON.parse(a.ProductHunt||null),HTML:a.ProductHuntHTML||null,panelWidth:parseFloat(c.PH_width)||400,htmlStorageKey:"ProductHuntHTML"},DR:{containerId:"dribbble",error:a.Dribbble_error||null,status:c.PH_status,alarmName:"dribbble",refresh:isNaN(parseFloat(c.DR_refresh))?15:parseFloat(c.DR_refresh),bgFunctionName:"getDribbbleData",feFunctionName:"drShowData",JSON:JSON.parse(a.Dribbble||null),HTML:a.DribbbleHTML||null,smallImages:c.DR_small_images,gifs:c.DR_gifs,panelWidth:parseFloat(c.DR_width)||400,htmlStorageKey:"DribbbleHTML"},RD:{containerId:"reddit",error:a.Reddit_error||null,status:c.RD_status,alarmName:"reddit",refresh:isNaN(parseFloat(c.RD_refresh))?15:parseFloat(c.RD_refresh),bgFunctionName:"getRedditData",feFunctionName:"rdShowData",JSON:JSON.parse(a.Reddit||null),HTML:a.RedditHTML||null,panelWidth:parseFloat(c.RD_width)||400,subreddit:c.RD_subreddit||"all",sorting:c.RD_sorting||"Hot",htmlStorageKey:"RedditHTML"},NG:{containerId:"nzbget",status:c.NG_status,feFunctionName:"ngShowData",downloadStatus:a.NzbgetStatusHTML||null,address:c.NG_address,port:c.NG_port,username:c.NG_username,password:c.NG_password,panelWidth:parseFloat(c.NG_width)||400,htmlStorageKey:["NzbgetQueueHTML","NzbgetHistoryHTML"],queue:{error:a.NzbgetQueue_error||null,alarmName:"nzbgetQueue",refresh:isNaN(parseFloat(c.NGQ_refresh))?15:parseFloat(c.NGQ_refresh),bgFunctionName:"getNzbgetQueue",JSON:JSON.parse(a.NzbgetQueue||null),HTML:a.NzbgetQueueHTML||null},history:{error:a.NzbgetHistory_error||null,alarmName:"nzbgetHistory",refresh:isNaN(parseFloat(c.NGH_refresh))?15:parseFloat(c.NGH_refresh),bgFunctionName:"getNzbgetHistory",JSON:JSON.parse(a.NzbgetHistory||null),HTML:a.NzbgetHistoryHTML||null,length:parseFloat(c.NGH_length)||25}},SO:{containerId:"sonarr",error:a.Sonarr_error||null,status:c.SO_status,alarmName:"sonarr",refresh:isNaN(parseFloat(c.SO_refresh))?15:parseFloat(c.SO_refresh),bgFunctionName:"getSonarrData",feFunctionName:"soShowData",JSON:JSON.parse(a.Sonarr||null),HTML:a.SonarrHTML||null,address:c.SO_address,port:c.SO_port,key:c.SO_key,panelWidth:parseFloat(c.SO_width)||400,htmlStorageKey:"SonarrHTML"}},addApiUrls(serviceData),b(serviceData)})})}function addApiUrls(a){var b=a.CP.address;a.CP.port&&(b+=":"+a.CP.port),a.CP.url=b,b+="/api/"+a.CP.key+"/",a.CP.apiUrl=b;var c=a.SB.address;a.SB.port&&(c+=":"+a.SB.port),a.SB.url=c,c+="/api/"+a.SB.key+"/",a.SB.apiUrl=c;var d=a.SAB.address;a.SAB.port&&(d+=":"+a.SAB.port),a.SAB.url=d,d+="/sabnzbd/api?apikey="+a.SAB.key,a.SAB.apiUrl=d,ngUrl=a.NG.address,a.NG.port&&(ngUrl+=":"+a.NG.port),a.NG.url=ngUrl,ngUrl+="/"+a.NG.username+":"+a.NG.password+"/jsonrpc",a.NG.apiUrl=ngUrl,soUrl=a.SO.address,a.SO.port&&(soUrl+=":"+a.SO.port),a.SO.url=soUrl,soUrl+="/api/",a.SO.apiUrl=soUrl}function getObjects(a,b,c){var d=[];for(var e in a)a[e]&&!a.hasOwnProperty(e)||("[object Object]"==toString.call(a[e])&&(d=d.concat(getObjects(a[e],b,c))),e==b&&a[e]==c||e==b&&!c?d.push(a):"[object Array]"==toString.call(a[e])&&a[e].indexOf(c)>-1?d.push(a):a[e]!=c||b||d.lastIndexOf(a)==-1&&d.push(a));return d}function getValues(a,b){var c=[];for(var d in a)a.hasOwnProperty(d)&&("object"==_typeof(a[d])?c=c.concat(getValues(a[d],b)):d==b&&c.push(a[d]));return c}function getKeys(a,b){var c=[];for(var d in a)a.hasOwnProperty(d)&&("object"==_typeof(a[d])?c=c.concat(getKeys(a[d],b)):a[d]==b&&c.push(d));return c}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a};window.onLoad=refreshServiceData();