!function(a){"use strict";function l(b){a(b).on("click"+h,this.toggle)}function n(a,b){a.hasClass("pull-center")&&a.css("margin-right",a.outerWidth()/-2),a.hasClass("pull-middle")&&a.css("margin-top",a.outerHeight()/-2-b.outerHeight()/2)}function o(b,c){if(k){c||(c=[k]);var f;k[0]!==c[0][0]?f=k:(f=c[c.length-1],f.parent().hasClass(e)&&(f=f.parent())),f.find("."+i).removeClass(i),f.hasClass(i)&&f.removeClass(i),f===k&&(k=null,a(d).remove())}}function p(a){for(var d,c=[a];!d||d.hasClass(f);)d=(d||a).parent(),d.hasClass(e)&&(d=d.parent()),d.children(b)&&c.unshift(d);return c}function q(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var k,b='[data-toggle="dropdown"]',c=".disabled, :disabled",d=".dropdown-backdrop",e="dropdown-menu",f="dropdown-submenu",g=".bs.dropdown.data-api",h=".bs.dropdown",i="open",j="ontouchstart"in document.documentElement,m=l.prototype;m.toggle=function(b){var g=a(this);if(!g.is(c)){var h=q(g),l=h.hasClass(i),m=h.hasClass(f),r=m?p(h):null;if(o(b,r),!l){r||(r=[h]),!j||h.closest(".navbar-nav").length||r[0].find(d).length||a('<div class="'+d.substr(1)+'"/>').appendTo(r[0]).on("click",o);for(var s=0,t=r.length;t>s;s++)r[s].hasClass(i)||(r[s].addClass(i),n(r[s].children("."+e),r[s]));k=r[0]}return!1}},m.keydown=function(c){if(/(38|40|27)/.test(c.keyCode)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=q(d),f=e.hasClass("open");if(!f||f&&27==c.keyCode)return 27==c.which&&e.find(b).trigger("focus"),d.trigger("click");var g=" li:not(.divider):visible a",h="li:not(.divider):visible > input:not(disabled) ~ label",i=e.find(h+", "+'[role="menu"]'+g+', [role="listbox"]'+g);if(i.length){var j=i.index(i.filter(":focus"));38==c.keyCode&&j>0&&j--,40==c.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}},m.change=function(){var f,g,j,i="";if(f=a(this).closest("."+e),g=f.parent().find("[data-label-placement]"),g&&g.length||(g=f.parent().find(b)),g&&g.length&&g.data("placeholder")!==!1){void 0==g.data("placeholder")&&g.data("placeholder",a.trim(g.text())),i=a.data(g[0],"placeholder"),j=f.find("li > input:checked"),j.length&&(i=[],j.each(function(){var b=a(this).parent().find("label").eq(0),c=b.find(".data-label");if(c.length){var d=a("<p></p>");d.append(c.clone()),b=d.html()}else b=b.html();b&&i.push(a.trim(b))}),i=i.length<4?i.join(", "):i.length+" selected");var k=g.find(".caret");g.html(i||"&nbsp;"),k.length&&g.append(" ")&&k.appendTo(g)}};var r=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new l(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=l,a.fn.dropdown.clearMenus=function(c){return a(d).remove(),a("."+i+" "+b).each(function(){var b=q(a(this)),d={relatedTarget:this};b.hasClass("open")&&(b.trigger(c=a.Event("hide"+h,d)),c.isDefaultPrevented()||b.removeClass("open").trigger("hidden"+h,d))}),this},a.fn.dropdown.noConflict=function(){return a.fn.dropdown=r,this},a(document).off(g).on("click"+g,o).on("click"+g,b,m.toggle).on("click"+g,'.dropdown-menu > li > input[type="checkbox"] ~ label, .dropdown-menu > li > input[type="checkbox"], .dropdown-menu.noclose > li',function(a){a.stopPropagation()}).on("change"+g,'.dropdown-menu > li > input[type="checkbox"], .dropdown-menu > li > input[type="radio"]',m.change).on("keydown"+g,b+', [role="menu"], [role="listbox"]',m.keydown)}(jQuery);