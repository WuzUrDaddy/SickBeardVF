(function(e,i){"use strict";function t(t,o){var a=this;a.$el=e(t),a.el=t,a.$el.bind("destroyed",e.proxy(a.teardown,a)),a.$window=e(i),a.$clonedHeader=null,a.$originalHeader=null,a.isSticky=!1,a.leftOffset=null,a.topOffset=null,a.init=function(){a.options=e.extend({},d,o),a.$el.each(function(){var i=e(this);i.css("padding",0),a.$originalHeader=e("thead:first",this),a.$clonedHeader=a.$originalHeader.clone(),a.$clonedHeader.addClass("tableFloatingHeader"),a.$clonedHeader.css("display","none"),a.$originalHeader.addClass("tableFloatingHeaderOriginal"),a.$originalHeader.after(a.$clonedHeader),a.$printStyle=e('<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>'),e("head").append(a.$printStyle)}),a.updateWidth(),a.toggleHeaders(),a.bind()},a.destroy=function(){a.$el.unbind("destroyed",a.teardown),a.teardown()},a.teardown=function(){e.removeData(a.el,"plugin_"+n),a.unbind(),a.$clonedHeader.remove(),a.$originalHeader.removeClass("tableFloatingHeaderOriginal"),a.$originalHeader.css("visibility","visible"),a.$printStyle.remove(),a.el=null,a.$el=null},a.bind=function(){a.$window.on("scroll."+n,a.toggleHeaders),a.$window.on("resize."+n,a.toggleHeaders),a.$window.on("resize."+n,a.updateWidth)},a.unbind=function(){a.$window.off("."+n,a.toggleHeaders),a.$window.off("."+n,a.updateWidth),a.$el.off("."+n),a.$el.find("*").off("."+n)},a.toggleHeaders=function(){a.$el.each(function(){var i=e(this),t=isNaN(a.options.fixedOffset)?a.options.fixedOffset.height():a.options.fixedOffset,n=i.offset(),d=a.$window.scrollTop()+t,o=a.$window.scrollLeft();if(d>n.top&&n.top+i.height()-a.$clonedHeader.height()>d){var l=n.left-o;if(a.isSticky&&l===a.leftOffset&&t===a.topOffset)return;a.$originalHeader.css({position:"fixed",top:t,"margin-top":0,left:l,"z-index":1}),a.$clonedHeader.css("display",""),a.isSticky=!0,a.leftOffset=l,a.topOffset=t,a.updateWidth()}else a.isSticky&&(a.$originalHeader.css("position","static"),a.$clonedHeader.css("display","none"),a.isSticky=!1)})},a.updateWidth=function(){if(a.isSticky){var i=e("th,td",a.$originalHeader);e("th,td",a.$clonedHeader).each(function(t){var n=e(this).width();i.eq(t).css({"min-width":n,"max-width":n})}),a.$originalHeader.css("width",a.$clonedHeader.width())}},a.updateOptions=function(i){a.options=e.extend({},d,i),a.updateWidth(),a.toggleHeaders()},a.init()}var n="stickyTableHeaders",d={fixedOffset:0};e.fn[n]=function(i){return this.each(function(){var d=e.data(this,"plugin_"+n);d?"string"==typeof i?d[i].apply(d):d.updateOptions(i):"destroy"!==i&&e.data(this,"plugin_"+n,new t(this,i))})}})(jQuery,window);