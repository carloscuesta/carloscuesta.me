!function(){function d(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function e(){if(window.localStorage&&window.XMLHttpRequest)if(window.localStorage&&localStorage.font_css_cache&&localStorage.font_css_cache_file===c)f(localStorage.font_css_cache);else{var a=new XMLHttpRequest;a.open("GET",c,!0);d(a,"load",function(){4===a.readyState&&(f(a.responseText),localStorage.font_css_cache=a.responseText,localStorage.font_css_cache_file=c)});a.send()}else{var b=document.createElement("link");b.href=c;b.rel="stylesheet";b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b);document.cookie="font_css_cache"}}function f(a){var b=document.createElement("style");b.innerHTML=a;document.getElementsByTagName("head")[0].appendChild(b)}var c="/font.css";window.localStorage&&localStorage.font_css_cache||-1<document.cookie.indexOf("font_css_cache")?e():d(window,"load",e)}();
