function addCopyButton(){var t;try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");e&&(t=!0)}catch(a){navigator.mimeTypes&&void 0!=navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(t=!0)}t&&$("#pastawell").append($('<button id = "copybutton" class = "btn btn-info pull-right btn-lg" data-toggle="popover" data-placement="right" data-content="Copied!">Copy</button>'))}function replaceAll(t,e,a){return a.replace(new RegExp(t,"g"),e)}function resize(){$(window).width()>1e3?($("#titletext").text("ᕙ༼ຈل͜ຈ༽ᕗ Copypasterino.me ᕙ༼ຈل͜ຈ༽ᕗ"),$("#titletext").removeClass("mobile-title"),$("#titletext").addClass("desktop-title"),$("#navlist").removeClass("navbar-nav"),$("#navlist").addClass("nav-justified"),$("#titlesubtext").show()):($("#titletext").text("Copypasterino.me"),$("#titletext").removeClass("desktop-title"),$("#titletext").addClass("mobile-title"),$("#navlist").removeClass("nav-justified"),$("#navlist").addClass("navbar-nav"),$("#titlesubtext").hide())}function addCopyMovie(t,e){var a=new ZeroClipboard(t);a.on("ready",function(){a.on("copy",function(t){t.clipboardData.setData("text/plain",e)}),a.on("aftercopy",function(){t.parent().children(".popover").length<1&&t.popover("show")})})}jQuery.fn.thisText=function(){return $(this).clone().children().remove().end().text()},$(document).ready(function(){$(".tagscontainer").text(replaceAll("#"," #",$(".tagscontainer").text())),ZeroClipboard.config({swfPath:"/images/ZeroClipboard.swf"}),addCopyButton(),addCopyMovie($("#copybutton"),$("#pastawell").children("h1").thisText()),resize(),$(window).resize(function(){resize()}),$("body").on("click",function(t){$('[data-toggle="popover"]').each(function(){$(this).is(t.target)||0!==$(this).has(t.target).length||0!==$(".popover").has(t.target).length||$(this).popover("hide")})})});