function getDesignerNewsData(a){var b="https://api-news.layervault.com/api/v2/",c="stories",d="?client_id=e7c9f9422feb744c661cc25a248d3b7206962f0605e174ae30aab12a05fb107a";$.when($.ajax({url:b+c+d}),$.ajax({url:"https://api-news.layervault.com/api/v2/me?include=upvotes",headers:{Authorization:serviceData.DN.token}})).done(function(a,b){localStorage.setItem("Designernews_error",!1),serviceData.DN.error=!1,localStorage.setItem("Designernews",JSON.stringify(a[0])),serviceData.DN.JSON=a[0],localStorage.setItem("DesignernewsMe",JSON.stringify(b[0].users[0])),serviceData.DN.me=b[0].users[0],dnHTML()}).fail(function(a,b,c){console.log(a,b,c),localStorage.setItem("Designernews_error",!0),serviceData.DN.error=!0}).always(function(){a&&a()})}function dnHTML(){if(serviceData.DN.JSON){var a=serviceData.DN.JSON,b="";$.each(a.stories,function(a,c){c.url||(c.url="https://news.layervault.com/stories/"+c.id),b+=c.badge?'<div class="core-item waves-effect dn-link-container dn-link-with-badge"><img src="/img/dn_badges/badge_'+c.badge+'.png" class="dn-badge">':'<div class="core-item waves-effect dn-link-container">',b+='<a href="'+c.url+'" class="dn-story-url" target="_blank">'+c.title+'</a><a href="https://news.layervault.com/stories/'+c.id+'" class="dn-comments-url" target="_blank">'+c.comment_count+" comments - "+c.vote_count+" points</a>",null!==serviceData.DN.token&&(b+=serviceData.DN.upvotes&&serviceData.DN.upvotes.indexOf(c.id)>-1?'<div class="dn-upvote voted" data-id='+c.id+"></div>":'<div class="dn-upvote" data-id='+c.id+"></div>"),b+="</div>"}),localStorage.setItem("DesignernewsHTML",b),serviceData.DN.HTML=b}}