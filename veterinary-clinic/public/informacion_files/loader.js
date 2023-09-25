Element.prototype.isNodeList=function(){return!1};NodeList.prototype.isNodeList=HTMLCollection.prototype.isNodeList=function(){return!0};
if(void 0===Trustindex)var Trustindex=function(){return{loaded_css:[],resizerTimeoutPointer:null,getDefaultAvatarUrl:function(){let a=Math.floor(10*Math.random())+1;return Trustindex.getCDNUrl()+"assets/default-avatar/noprofile-"+(10>a?"0":"")+a+".svg"},getWidgetUrl:function(a){return"undefined"==typeof a?!1:Trustindex.getCDNUrl()+"widgets/"+a.substring(0,2)+"/"+a+"/"},init:function(){if(document.body){var a=document.querySelectorAll(Trustindex.getScriptSelector("loader"));for(let c=0;c<a.length;c++){let d=
"src";a[c].getAttribute("data-src")&&(d="data-src");let e=a[c],f=a[c].getAttribute(d).split("?");if(2>f.length)continue;f=f[f.length-1];f=f.split("&")[0];if(!f||-1!=f.search("="))continue;if(e.getAttribute("data-ti-loaded"))continue;let l=document.createElement("div");l.innerHTML="loading...";e.after(l);e.setAttribute("data-ti-loaded",!0);let h=new XMLHttpRequest;h.open("GET",Trustindex.getWidgetUrl(f)+"content.html");h.send();h.onload=function(){if(4==h.readyState&&200==h.status)if(h.responseText){var k=
Trustindex.createElementFromHTML(h.responseText),g=k[0];l.replaceWith(g);for(let m=0;m<k.length;m++)k[m].innerHTML&&g.after(k[m]);Trustindex.init_widget(g);g.getAttribute("style")&&-1!=g.getAttribute("style").indexOf("border: 4px dashed red")||(g.style.display="none",g.layout_id?g.container?(k=null,g.set_id?k=Trustindex.getCDNUrl()+"assets/widget-presetted-css/"+g.layout_id+"-"+g.set_id+".css":g.pid||(k=Trustindex.getCDNUrl()+"widget-assets/css/"+g.layout_id+"-"+(g.classList.contains("ti-dark")?"blue-dark":
"blue")+".css"),k&&-1==Trustindex.loaded_css.indexOf(k)?(Trustindex.addCSS(k,function(){g.style.display="";Trustindex.resize_widget(g);Trustindex.init_pager(g)}),Trustindex.loaded_css.push(k)):(g.style.display="",Trustindex.resize_widget(g),Trustindex.init_pager(g)),Trustindex.formatReviews(),Trustindex.replaceErrorImages(),(k=g.getAttribute("data-rich-snippet")||g.getAttribute("data-rich-snippet-url"))&&0==document.querySelectorAll('script[src*=".trustindex.io/assets/js/richsnippet.js"], script[type="application/ld+json"][data-trustindex="1"]').length&&
Trustindex.addJS(Trustindex.getCDNUrl()+"assets/js/richsnippet.js?"+k.replace(/(?:companies\/[^\/]{2}\/)?([^\/]+).*/,"$1"))):g.innerHTML="Container id not found!":g.innerHTML="Layout id not found!")}else k=document.createComment("Trustindex widget ("+f+") is empty here."),l.replaceWith(k);else e.nextSibling.innerHTML="Widget not found!"}}Trustindex.formatReviews();Trustindex.replaceErrorImages();Trustindex.resize_widgets();var b=document.body.offsetWidth;window.addEventListener("resize",function(){document.body.offsetWidth!=
b&&(b=document.body.offsetWidth,clearTimeout(Trustindex.resizerTimeoutPointer),Trustindex.resizerTimeoutPointer=setTimeout(Trustindex.resize_widgets,1E3))});window.addEventListener("load",function(){Trustindex.removePopupEvents();setTimeout(Trustindex.resize_widgets,40)});window.addEventListener("scroll",Trustindex.removePopupEvents);setTimeout(Trustindex.removePopupEvents,2500)}else window.onload=Trustindex.init},init_widget:function(a){a.layout_id=a.getAttribute("data-layout-id");a.set_id=a.getAttribute("data-set-id");
a.pid=a.getAttribute("data-pid");a.layout_id&&(a.layout_id=parseInt(a.layout_id));a.container=a.querySelector(".ti-widget-container");a.reviews_container=a.querySelector(".ti-reviews-container");a.reviews_container_wrapper=a.querySelector(".ti-reviews-container-wrapper");a.pager_autoplay_timeout=a.getAttribute("data-pager-autoplay-timeout");a.rotate_to=a.getAttribute("data-rotate-to");a.rotate_to||(a.rotate_to="right");a.slider_loop=a.getAttribute("data-slider-loop");a.mouse_over=!1},init_dots:function(a){let b=
a.querySelector(".ti-controls-dots");if(b){var c=Trustindex.getReviewNum(a);let d=Trustindex.getVisibleReviewNum(a),e="",f=1+c-d;a.slider_loop&&c!=d&&(f=Trustindex.getReviewNum(a));for(c=0;c<f;c++)e+='<div class="dot" data-pager-state="'+c+'"></div> ';b.innerHTML=e;(a=b.querySelector('.dot[data-pager-state="'+(a.pager_state||0)+'"]'))&&a.classList.add("active")}},init_pager:function(a){if(window.jQuery&&a instanceof jQuery)a.each(function(){Trustindex.init_pager(this)});else if(void 0!==a.isNodeList&&
a.isNodeList())a.forEach(function(b){Trustindex.init_pager(b)});else if(!a.classList.contains("ti-certificate")){void 0===a.layout_id&&Trustindex.init_widget(a);"ti-widget"!=a.getAttribute("class")&&Trustindex.resize_widget(a);a.pager_inited=!0;Trustindex.init_dots(a);Trustindex.setClickableParts(a);Trustindex.setReadMore(a);Trustindex.handleSubContents(a);if(null!==a.pager_autoplay_timeout){a.pager_state=0;a.pager_state_dots=0;a.pager_moving=!1;a.pager_autoplay_direction="next";a.pager_position=
"0px";a.pager_autoplay_timeout=parseInt(a.pager_autoplay_timeout);"left"==a.rotate_to&&(a.pager_state=Trustindex.getMaximumPagerState(a)-1,a.slider_loop&&a.querySelector(".ti-controls-dots")&&"none"!=window.getComputedStyle(a.querySelector(".ti-controls-dots")).display&&(a.pager_state=Trustindex.getReviewNum(a)-2),a.pager_state_dots=a.pager_state,Trustindex.moverBtnClicked(a,"next"==a.pager_autoplay_direction,"auto",1),a.slider_loop&&(a.pager_autoplay_direction="prev"));Trustindex.controlsShowHide(a);
a.querySelectorAll(".ti-review-item").forEach(function(d){d.style.position="relative"});a.querySelector(".ti-widget-container").addEventListener("mouseenter",function(d){a.mouse_over=!0});a.querySelector(".ti-widget-container").addEventListener("mouseleave",function(d){a.mouse_over=!1});a.addEventListener("click",function(d){if(d.target.matches(".ti-controls .ti-next")||d.target.matches(".ti-controls .ti-prev"))d.preventDefault(),Trustindex.moverBtnClicked(a,d.target.classList.contains("ti-next"),
"manual",500)},!1);Trustindex.setAutoplay(a);let b,c;a.querySelector(".ti-reviews-container").addEventListener("touchstart",function(d){b=d.touches[0].pageX;c=null;a.mouse_over=!0},{passive:!0});a.querySelector(".ti-reviews-container").addEventListener("touchmove",function(d){c=d.touches[0].pageX},{passive:!0});a.querySelector(".ti-reviews-container").addEventListener("touchend",function(d){b&&c&&60<Math.abs(b-c)&&(d=b>c,a.querySelectorAll(".ti-review-content").forEach(function(e){e.scrollTop=0}),
Trustindex.moverBtnClicked(a,d,"manual",500));c=b=null;a.mouse_over=!1},{passive:!0})}if("admin.trustindex.io"!=location.hostname||53==a.layout_id)a.addEventListener("click",function(b){b.target.matches(".disable-widget")?(b.preventDefault(),a.classList.add("ti-disabled"),document.querySelectorAll('.ti-widget:not([data-layout-id="53"])').forEach(function(c){c.classList.add("ti-disabled")}),53!=a.layout_id&&Trustindex.setCookie("ti-widget-disabled",1,10,"/",location.hostname),a.querySelector(".ti-enable-widget")||
a.remove()):b.target.matches(".ti-enable-widget")&&(b.preventDefault(),a.classList.remove("ti-disabled"),Trustindex.setReadMore(a,10),document.querySelectorAll('.ti-widget:not([data-layout-id="53"])').forEach(function(c){c.classList.remove("ti-disabled");Trustindex.setReadMore(c,10)}),53!=a.layout_id&&Trustindex.removeCookie("ti-widget-disabled","/",location.hostname))}),Trustindex.getCookie("ti-widget-disabled")&&document.querySelectorAll(".ti-widget").forEach(function(b){b.classList.add("ti-disabled")});
a.removeEventListener("click",Trustindex.popupHandler);a.addEventListener("click",Trustindex.popupHandler);a.removeEventListener("click",Trustindex.popupCloseHandler);a.addEventListener("click",Trustindex.popupCloseHandler);a.removeEventListener("click",Trustindex.readMoreHandler);a.addEventListener("click",Trustindex.readMoreHandler)}},removePopupEvents:function(){document.querySelectorAll('.ti-widget a[href="#popup"], .ti-widget a[href="#dropdown"]').forEach(function(a){let b=a.cloneNode(!0);a.parentNode.replaceChild(b,
a);a=b.closest(".ti-widget");Trustindex.handleSubContents(a)});window.removeEventListener("scroll",Trustindex.removePopupEvents)},setAutoplay:function(a,b){void 0!==b&&(a.pager_autoplay_timeout=b);void 0!==a.intervalPointer&&clearInterval(a.intervalPointer);0<a.pager_autoplay_timeout&&(a.intervalPointer=setInterval(function(){Trustindex.moverBtnClicked(a,"next"==a.pager_autoplay_direction,"auto",1E3)},1E3*a.pager_autoplay_timeout))},moverBtnClicked:function(a,b,c,d){if("manual"==c&&(b&&!a.isNext||
!b&&!a.isPrev))return Trustindex.noReviewsAnimation(a,b),!1;if(a.pager_moving||a.mouse_over&&"auto"==c)return!1;let e=a.querySelectorAll(".ti-review-item").length,f=Trustindex.getVisibleReviewNum(a);if(e<=f)return!1;Trustindex.moveReviews(a,a.pager_state+(b?1:-1),c,d,b)},moveReviews:function(a,b,c,d,e){if(!a.clientHeight)return!1;if(a.slider_loop){let h=Trustindex.getMaximumPagerState(a),k=Trustindex.getReviewNum(a);if(b>h&&(a.pager_state<b||"resize"==e)){var f=a.reviews_container_wrapper.querySelectorAll(".ti-review-item.ti-cloned.ti-cloned--end").length,
l=b-h-f;f>=k&&(f-=parseInt(f/k)*k);for(let g=0;g<l;g++){let m=a.reviews_container_wrapper.querySelectorAll(".ti-review-item:not(.ti-cloned)")[f+g].cloneNode(!0);m.classList.add("ti-cloned","ti-cloned--end");a.reviews_container_wrapper.appendChild(m)}}else b<a.pager_state&&setTimeout(function(){let g=".ti-review-item.ti-cloned.ti-cloned--end";b>h&&(g+=":last-child");a.reviews_container_wrapper.querySelectorAll(g).forEach(function(m){m.remove()})},d);if(0>b&&!1===e){l=a.reviews_container_wrapper.querySelectorAll(".ti-review-item.ti-cloned.ti-cloned--start").length;
let g=a.reviews_container_wrapper.querySelector(".ti-review-item:nth-last-child("+(-1*b+l)+")").cloneNode(!0);g.classList.add("ti-cloned","ti-cloned--start");g.style.marginLeft=-1*a.reviews_container_wrapper.offsetWidth/Trustindex.getVisibleReviewNum(a)+"px";a.reviews_container_wrapper.insertBefore(g,a.reviews_container_wrapper.firstChild);setTimeout(function(){g.style.marginLeft="";Trustindex.resetPager(a)},d)}else!0===e&&setTimeout(function(){let g=a.reviews_container_wrapper.querySelector(".ti-review-item.ti-cloned.ti-cloned--start:first-child");
g&&(g.remove(),Trustindex.resetPager(a))},d);!0===e?(a.pager_state_dots++,a.pager_state_dots>k-1&&(a.pager_state_dots=0)):!1===e?(a.pager_state_dots--,0>a.pager_state_dots&&(a.pager_state_dots=k-1)):"resize"!==e&&(a.pager_state_dots=b)}else a.pager_state_dots=b;a.pager_state=b;a.pager_moving=!0;Trustindex.controlsShowHide(a);Trustindex.slideReviews(a,d);"auto"!=c&&void 0!==a.intervalPointer&&(clearInterval(a.intervalPointer),delete a.intervalPointer)},slideReviews:function(a,b){if(void 0!==a.pager_position){void 0===
b&&(b=1E3);var c=Trustindex.getVisibleReviewNum(a);c=-1*a.pager_state*a.reviews_container_wrapper.offsetWidth/c+"px";Trustindex.animateReviews(a,a.pager_position,c,b);a.pager_position=c;setTimeout(function(){a.pager_moving=!1},b)}},noReviewsAnimation:function(a,b){a.pager_moving=!0;let c=parseInt(a.pager_position),d=b?-1:1,e=function(h,k,g,m){setTimeout(function(){Trustindex.animateReviews(a,h+"px",k+"px",g)},m)},f=0,l=0;[{pos:50,speed:160},{pos:-70,speed:100},{pos:40,speed:80},{pos:-20,speed:120}].forEach(function(h,
k){0==k?f=c+h.pos*d:(c=f,f+=h.pos*d);e(c,f,h.speed,l);l+=h.speed});setTimeout(function(){a.pager_moving=!1},l)},animateReviews:function(a,b,c,d){a.querySelectorAll(".ti-review-item").forEach(function(e){e.animate({left:[b,c]},{duration:d,fill:"both",easing:"ease-in-out"});setTimeout(()=>{if(!Trustindex.isReviewVisible(e)){let f=e.querySelector(".ti-read-more .ti-read-more-collapse");f&&f.click()}},d)})},setClickableParts:function(a){if("undefined"==typeof a.clickable_parts_setted){a.clickable_parts_setted=
!0;var b=a.querySelector("a[href]");b&&"#"!=b.getAttribute("href")&&(a=b.closest(".ti-header:not(a), .ti-footer:not(a), .ti-popup-header:not(a)"))&&a.querySelector(".ti-large-logo, .ti-profile-img, .ti-profile-details, .ti-logo-stars-flex")&&(a.classList.add("ti-clickable-link"),a.addEventListener("click",function(c){if("A"==c.target.nodeName)return!1;Trustindex.openWindow(b.getAttribute("href"));c.preventDefault()}))}},setReadMore:function(a,b){if(!a)return!1;"undefined"==typeof b&&(b=500);setTimeout(function(){let c=
a.querySelectorAll(".ti-read-more");c&&c.forEach(function(d){let e=d.closest(".ti-review-item").querySelector(d.getAttribute("data-container"));e||=d.closest(".ti-review-content").querySelector(".ti-inner");let f=10;e.getAttribute("style")&&-1!=e.getAttribute("style").indexOf("height")&&(f=500);e.setAttribute("style","");d.setAttribute("style","");setTimeout(()=>{var l=e.scrollHeight>e.offsetHeight;if(e.closest(".ti-popup-widget")){l=parseFloat(window.getComputedStyle(e,null).getPropertyValue("font-size"));
let h=parseInt(window.getComputedStyle(e,null).getPropertyValue("-webkit-line-clamp"));parseFloat(window.getComputedStyle(e,null).getPropertyValue("max-height"));l=parseInt(1.44*l*h);l=e.scrollHeight>l}l&&"block"!=window.getComputedStyle(d,null).getPropertyValue("display")&&(l=!1);l?(e.style.setProperty("height",e.offsetHeight+"px","important"),e.setAttribute("data-initial-height",e.offsetHeight),0<parseInt(window.getComputedStyle(e,null).getPropertyValue("max-height"))&&e.style.setProperty("max-height",
"unset","important"),d.getAttribute("data-open-text")?d.innerHTML='<span class="ti-read-more-active">'+d.getAttribute("data-open-text")+"</span>":d.innerHTML='<span class="ti-read-more-active">'+d.innerText+"</span>",d.setAttribute("style","")):d.getAttribute("data-container")?(d.innerHTML="<span>&nbsp;</span>",d.style.opacity=0,d.style.pointerEvents="none",c.length==d.closest(".ti-reviews-container").querySelectorAll('.ti-read-more[style*="opacity: 0"]').length&&c.forEach(h=>h.style.display="none")):
d.style.display="none"},f)})},b)},readMoreHandler:function(a){if(a.target.matches(".ti-read-more-active")){a.preventDefault();a=a.target;let b=a.closest(".ti-review-item").querySelector(a.parentNode.getAttribute("data-container"));b||=a.closest(".ti-review-content").querySelector(".ti-inner");a.classList.contains("ti-read-more-collapse")?(b.style.setProperty("-webkit-line-clamp",""),b.style.setProperty("height",b.getAttribute("data-initial-height")+"px","important"),a.innerHTML=a.parentNode.getAttribute("data-open-text"),
a.classList.remove("ti-read-more-collapse")):(b.style.setProperty("-webkit-line-clamp","unset","important"),b.style.setProperty("height",b.scrollHeight+"px","important"),a.innerHTML=a.parentNode.getAttribute("data-collapse-text"),a.classList.add("ti-read-more-collapse"),a.innerHTML||(a.parentNode.style.display="none"))}},handleSubContents:function(a){a.querySelectorAll("a[data-subcontent]").forEach(function(b){let c=b.getAttribute("data-subcontent"),d=a.querySelector(b.getAttribute("data-subcontent-target"));
d&&"undefined"!=typeof a.pid&&a.pid&&(""!=d.innerHTML.trim()?b.setAttribute("data-subcontent-loaded",!0):b.addEventListener("click",function(){if(!b.getAttribute("data-subcontent-loaded")){b.classList.add("ti-loading");setTimeout(function(){b.setAttribute("data-subcontent-loaded",!0)},50);let e=new XMLHttpRequest;e.open("GET",Trustindex.getWidgetUrl(a.pid)+"_subcontent-"+c+".html");e.send();e.onload=function(){4==e.readyState&&200==e.status&&(d.innerHTML=e.responseText,b.dispatchEvent(new Event("subcontent-loaded")),
b.classList.remove("ti-loading"),Trustindex.formatReviews())}}}))})},formatReviews:function(a){(a=document.querySelectorAll(".ti-widget .ti-review-content, .ti-widget .ti-inner .ti-review-text"))&&a.length&&a.forEach(function(b){var c=b.querySelector(".ti-inner");c&&(b=c);c=b.querySelectorAll("svg");0==c.length&&(c=b.innerHTML,c=c.replace(/<img.+class="emoji" alt="\u263a" src="[^'"]+">/gm,'<svg style="display: inline-block; vertical-align: sub;fill: #0ab21b;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-4.8 21.6a4 4 0 0 1 .6 3.6A24.3 24.3 0 0 1 64 97c-9.7 0-15.7-4.2-19-7.8a22.7 22.7 0 0 1-4.8-8A4 4 0 0 1 44 76h40a4 4 0 0 1 3.2 1.6z"></path></svg>&nbsp;&middot;&nbsp;'),
c=c.replace(/<img.+class="emoji" alt="\u2639" src="[^'"]+">/gm,'<svg style="display: inline-block; vertical-align: sub;fill: #383838;margin-top: -1px;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-5.2 30.2a4 4 0 1 1-5.6 5.6c-10.5-10.4-24-10.4-34.4 0a4 4 0 0 1-5.6-5.6c13.6-13.7 32-13.7 45.6 0z"></path></svg>&nbsp;&middot;&nbsp;'),c=c.replace("\u263a",
'<svg style="display: inline-block; vertical-align: sub;fill: #0ab21b;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-4.8 21.6a4 4 0 0 1 .6 3.6A24.3 24.3 0 0 1 64 97c-9.7 0-15.7-4.2-19-7.8a22.7 22.7 0 0 1-4.8-8A4 4 0 0 1 44 76h40a4 4 0 0 1 3.2 1.6z"></path></svg>&nbsp;&middot;&nbsp;').replace("\u2639",'<svg style="display: inline-block; vertical-align: sub;fill: #383838;margin-top: -1px;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-5.2 30.2a4 4 0 1 1-5.6 5.6c-10.5-10.4-24-10.4-34.4 0a4 4 0 0 1-5.6-5.6c13.6-13.7 32-13.7 45.6 0z"></path></svg>&nbsp;&middot;&nbsp;'),
c=c.replace(/\n/g,"<br />"),b.innerHTML=c,c=b.querySelectorAll("svg"));if(c.length){let e=.95*parseInt(b.style.fontSize||14);c.forEach(function(f){f.style.width=e+"px";f.style.height=e+"px"})}b.innerHTML=Trustindex.decodeHtml(b.innerHTML);let d=b.closest(".ti-review-item");if(d){let e=d.querySelector(".ti-profile-img-sprite");e&&setTimeout(()=>{let f=d.closest(".ti-widget").getAttribute("data-pid"),l=d.getAttribute("data-index")?parseInt(d.getAttribute("data-index")):[].indexOf.call(d.parentNode.children,
d);var h=getComputedStyle(e);h=parseInt(h.height||"0");if(!h||isNaN(h))h=40;e.style.background='url("'+Trustindex.getWidgetUrl(f)+'sprite.jpg") 0 '+l*h*-1+"px"},50)}});a=document.querySelectorAll(".ti-widget .ti-review-item[data-platform-page-url]");a.forEach(function(b){let c=b.querySelector(".ti-name"),d=b.getAttribute("data-platform-page-url");c.style.cursor="pointer";c.addEventListener("click",function(e){Trustindex.openWindow(d)})});a=document.querySelectorAll(".ti-widget .ti-review-item[data-time]");
a.forEach(function(b){let c=b.querySelector(".ti-date:not(.ti-date-comment)"),d=parseInt(b.getAttribute("data-time"));c&&(c.innerHTML=Trustindex.getRelativeTime(d,b.closest(".ti-widget").getAttribute("data-time-locale")))})},replaceErrorImages:function(){let a=document.querySelectorAll(".ti-widget .ti-review-item .ti-profile-img img");a&&a.forEach(function(b){if(!b.complete||void 0!==b.naturalWidth&&0!=b.naturalWidth){let c=function(){this.setAttribute("src",Trustindex.getDefaultAvatarUrl());this.removeEventListener("error",
c)};b.removeEventListener("error",c);b.addEventListener("error",c)}else b.setAttribute("src",Trustindex.getDefaultAvatarUrl())})},controlsShowHide:function(a){let b=Trustindex.getReviewNum(a),c=Trustindex.getVisibleReviewNum(a);a.isPrev=!0;a.isNext=!0;a.slider_loop?b==c&&(Trustindex.toggleElement(a.querySelector(".ti-prev"),"hide"),Trustindex.toggleElement(a.querySelector(".ti-next"),"hide"),a.isPrev=!1,a.isNext=!1):(0==a.pager_state?(Trustindex.toggleElement(a.querySelector(".ti-prev"),"hide"),a.pager_autoplay_direction=
"next",a.isPrev=!1):Trustindex.toggleElement(a.querySelector(".ti-prev")),a.pager_state>=b-c?(Trustindex.toggleElement(a.querySelector(".ti-next"),"hide"),a.pager_autoplay_direction="prev",a.isNext=!1):Trustindex.toggleElement(a.querySelector(".ti-next")));a.querySelectorAll(".dot").forEach(function(d){d.classList.remove("active")});(a=a.querySelector('.dot[data-pager-state="'+a.pager_state_dots+'"]'))&&a.classList.add("active")},resize_widget:function(a){void 0===a.container&&Trustindex.init_widget(a);
a.style.width="";var b=a.offsetWidth;a.style.display="none";var c=window.getComputedStyle(a,null).getPropertyValue("width");let d=a;var e=0;do{d=d.parentNode;if("HTML"==d.nodeName)break;d.clientWidth&&(e=window.getComputedStyle(d,null),e=d.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight))}while(100>e);"100%"==c&&b>e&&e&&(a.style.width=e+"px");a.style.display="";"undefined"==typeof a.original_cols&&(b=a.container.classList.toString(),-1==b.indexOf("ti-col-")?a.original_cols=1:a.original_cols=
parseInt(b.replace(/^.*ti-col-(\d+).*$/,"$1")));if(1>=a.original_cols)return!1;let f=5;a.container.offsetWidth>a.reviews_container.offsetWidth?520>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-1"),f=1):750>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-2"),f=1):1100>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-3"),f=2):1450>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-4"),f=3):
1800>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-5"),f=4):(a.container.setAttribute("class","ti-widget-container ti-col-6"),f=5):(540>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-1"),f=1):760>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-2"),f=2):1200>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-3"),f=3):1550>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-4"),
f=4):(a.container.setAttribute("class","ti-widget-container ti-col-5"),f=5),1<f&&44==a.layout_id&&(f--,a.container.setAttribute("class","ti-widget-container ti-col-"+f)));if(a.getAttribute("data-column-vertical-separate")||31==a.layout_id){c=a.container.querySelectorAll(".ti-review-item");a.reviews_container_wrapper.innerHTML="";b=0;for(var l=[];b<f;b++)l[b]=document.createElement("div"),l[b].setAttribute("class","ti-column"),a.reviews_container_wrapper.appendChild(l[b]);Array.from(c).sort(function(h,
k){h=h.getAttribute("data-index")?parseInt(h.getAttribute("data-index")):0;k=k.getAttribute("data-index")?parseInt(k.getAttribute("data-index")):1;return h-k}).forEach(function(h,k){l[k%f].appendChild(h)})}Trustindex.init_dots(a);Trustindex.moveReviews(a,a.pager_state,"auto",500,"resize");setTimeout(function(){"undefined"==typeof a.pager_inited&&Trustindex.init_pager(a)},2E3)},resize_widgets:function(){document.querySelectorAll(".ti-widget:not(.ti-certificate)").forEach(function(a){Trustindex.isVisible(a)?
Trustindex.resize_widget(a):a.visibleInterval=setInterval(function(){Trustindex.isVisible(a)&&(clearInterval(a.visibleInterval),Trustindex.resize_widget(a))},250)})},createElementFromHTML:function(a){let b=document.createElement("div");b.innerHTML=a.trim();return b.childNodes},decodeHtml:function(a){var b=document.createElement("textarea");b.innerHTML=a;return b.value},toggleElement:function(a,b){void 0===b&&(b="show");a&&(a.style.display="show"==b?"block":"none")},getVisibleReviewNum:function(a){let b=
parseInt(a.container.classList.toString().replace(/^.*ti-col-(\d+).*$/,"$1"));a.container.offsetWidth>a.reviews_container.offsetWidth&&--b;"46"!=a.dataset.layoutId&&"47"!=a.dataset.layoutId||--b;let c=b;a.reviews_container.querySelector(".ti-review-item")&&(c=Math.floor(a.reviews_container.offsetWidth/a.reviews_container.querySelector(".ti-review-item").offsetWidth));return Math.max(b,c,1)},getReviewNum:function(a){return a.querySelectorAll(".ti-review-item:not(.ti-cloned)").length},getMaximumPagerState:function(a){let b=
Trustindex.getReviewNum(a);a=Trustindex.getVisibleReviewNum(a);return Math.max(b-a,0)},resetPager:function(a){a.pager_position=0;a.pager_state=0;a.reviews_container_wrapper.querySelectorAll(".ti-review-item").forEach(function(b){b.animate({left:0},{fill:"both"})})},addCSS:function(a,b){let c=document.createElement("link");c.type="text/css";c.rel="stylesheet";c.href=a;document.head.appendChild(c);b&&c.addEventListener("load",b)},addJS:function(a,b){let c=document.createElement("script");c.type="text/javascript";
c.src=a;document.head.appendChild(c);b&&c.addEventListener("load",b)},popupHandler:function(a){let b=a.target,c=function(){b.classList.toggle("active");let d=b.closest(".ti-widget");d&&(d.querySelectorAll(".ti-dropdown-widget, .ti-popup-widget").forEach(function(e){e.classList.toggle("active")}),Trustindex.setReadMore(d,10));b.removeEventListener("subcontent-loaded",c)};if(b.matches('a[href="#dropdown"]')||b.matches('a[href="#popup"]'))b.getAttribute("data-subcontent-loaded")?c():b.addEventListener("subcontent-loaded",
c),a.preventDefault()},popupCloseHandler:function(a){if(a.target.matches(".ti-header .ti-close-lg")||a.target.matches(".ti-popup-header .ti-close-lg"))a.preventDefault(),(a=a.target.closest(".ti-widget"))&&(a=a.querySelector("a.ti-popup-header[href], a.ti-header[href]"))&&a.click()},openWindow:function(a){let b=document.createElement("a");b.href=a;b.target="_blank";b.rel="noopener noreferrer nofollow";b.click()},isVisible:function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},
isReviewVisible:function(a){let b=a.closest(".ti-reviews-container-wrapper");if(!b)return!1;let c=a.offsetLeft-b.offsetLeft;a=c+a.offsetWidth;return c>=b.scrollLeft&&a<=b.scrollLeft+b.offsetWidth},getRelativeTime:function(a,b){b=b.split("|");let c=b.shift();var d=b.shift(),e=[86400,604800,2419200,31536E3];let f=(new Date).getTime()/1E3-a;for(a=e.length-1;0<=a;a--)if(f>=e[a])return d=Math.floor(f/e[a]),e=2*a,1<d&&e++,c.replace("%d",d).replace("%s",b[e]);return d},getScriptSelector:function(a){return'div[src*=".trustindex."][src*="'+
a+'.js"],div[data-src*=".trustindex."][data-src*="'+a+'.js"],script[src*=".trustindex."][src*="'+a+'.js"]'},getCDNUrl:function(){var a=document.currentScript,b="https://cdn.trustindex.io/";a&&(a=new URL(a.src),b=a.pathname.split("/"),b.pop(),b=a.protocol+"//"+a.host+b.join("/")+"/");-1==b.indexOf("trustindex.")&&(b="https://cdn.trustindex.io/");return b},getCookie:function(a){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,
"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setCookie:function(a,b,c,d,e){let f=new Date;f.setDate(f.getDate()+c);c=null==c?"":"; expires="+f.toUTCString();document.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+c+(e?"; domain="+e:"")+(d?"; path="+d:"");return!0},removeCookie:function(a,b,c){if(!a||null===Trustindex.getCookie(a))return!1;document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(c?"; domain="+c:"")+(b?"; path="+b:"");return!0}}}();Trustindex.init();
