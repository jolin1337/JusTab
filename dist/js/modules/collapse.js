$(document).ready(function(){$("body").on("click",".core-item",function(){var a=$(this),b=a.next(),c=a.find(".core-item-icon");b.hasClass("core-collapse")&&($(".core-item.expanded .core-item-icon").fadeOut(165,function(){$(this).children(".expand-less-icon").attr("class","expand-more-icon"),$(this).fadeIn(165)}),$(".core-item.expanded").not(a).removeClass("expanded"),$(".core-collapse.expanded").not(b).removeClass("expanded"),a.toggleClass("expanded"),b.toggleClass("expanded"),b.hasClass("expanded")&&c.fadeOut(165,function(){$(this).find(".expand-more-icon").attr("class","expand-less-icon"),$(this).fadeIn(165)}))})});