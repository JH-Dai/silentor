!function(n){"use strict";var o=["","home.md","about.md","README.md"],i=function(){var n=window.location.search;return/index\./gi.test(n)&&(n.endsWith("md")||n.endsWith("markdown"))?!0:!1},e=function(){var n=window.location.search;for(var i in o)if(""!=o[i]&&new RegExp(o[i],"ig").test(n)||n==o[i])return!0;return!1};n(window).on("loaded-sidebar-page",function(){}),n(window).on("loaded-main-page",function(){i()||e()?n("#disqus_thread").css("display","none"):n("#disqus_thread").css("display","block")}),n(window).on("loaded-main-page-footer",function(){}),n(window).on("page-not-found",function(n,o){}),n(window).on("before-load-sidebar-page",function(n,o){}),n(window).on("before-load-main-page",function(n,o){}),n(window).on("before-load-main-page-footer",function(n,o){})}(jQuery);