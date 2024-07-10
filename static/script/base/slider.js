var css3=function(){function t(t,e){return typeof t===e}function e(t,e){for(var i in t)if(void 0!==h[t[i]])return"pfx"!=e||t[i];return!1}function i(i,n,s){var r=i.charAt(0).toUpperCase()+i.substr(1),a=(i+" "+o.join(r+" ")+r).split(" ");if(t(n,"string")||t(n,"undefined"))return e(a,n)}var n={},s=document.documentElement,r="modernizr",a=function(t,e,i,n){var a,o,h,l=document.createElement("div"),c=document.body,d=c?c:document.createElement("body");if(parseInt(i,10))for(;i--;)h=document.createElement("div"),h.id=n?n[i]:r+(i+1),l.appendChild(h);return a=["&#173;",'<style id="s',r,'">',t,"</style>"].join(""),l.id=r,(c?l:d).innerHTML+=a,d.appendChild(l),c||(d.style.background="",s.appendChild(d)),o=e(l,t),c?l.parentNode.removeChild(l):d.parentNode.removeChild(d),!!o},o="Webkit Moz O ms".split(" "),h=s.style;return n.hasTransform=function(){return!!i("transform")},n.has3d=function(){var t=!!i("perspective");return t&&"webkitPerspective"in s.style&&a("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,i){t=9===e.offsetLeft&&3===e.offsetHeight}),t},n}();!function(){var t=/android/gi.test(navigator.appVersion),e=css3.has3d(),i=css3.hasTransform(),n=e?"translate3d(":"translate(",s=e?",0)":")";return $.touchSlider=function(e,i){return e?(i?i.container=e:i="string"==typeof e?{container:e}:e,$.extend(this,{container:".slider",wrap:null,panel:null,trigger:null,activeTriggerCls:"sel",hasTrigger:!1,steps:0,left:0,visible:1,margin:0,curIndex:0,duration:300,loop:!1,play:!1,interval:5e3,useTransform:!t,lazy:".lazyimg",lazyIndex:1,callback:null,prev:null,next:null,activePnCls:"none"},i),void(this.findEl()&&this.init()&&this.increaseEvent())):null},$.extend($.touchSlider.prototype,{reset:function(t){$.extend(this,t||{}),this.init()},findEl:function(){var t=this.container=$(this.container);return t.length?(this.wrap=this.wrap&&t.find(this.wrap)||t.children().first(),this.wrap.length?(this.panel=this.panel&&t.find(this.panel)||this.wrap.children().first(),this.panel.length?(this.panels=this.panel.children(),this.panels.length?(this.trigger=this.trigger&&t.find(this.trigger),this.prev=this.prev&&t.find(this.prev),this.next=this.next&&t.find(this.next),this):(this.container.hide(),null)):null):null):null},init:function(){var t=this.wrap,e=this.panel,r=this.panels,a=this.trigger,o=this.len=r.length,h=this.margin,l=0,c=this.visible,d=this.useTransform=!!i&&this.useTransform;this.steps=this.steps||t.width(),r.each(function(t,e){l+=e.offsetWidth}),h&&"number"==typeof h&&(l+=(o-1)*h,this.steps+=h),c>1&&(this.loop=!1);var u=this.left;u-=this.curIndex*this.steps,this.setCoord(e,u),d&&(t.css({"-webkit-transform":"translate3d(0,0,0)"}),e.css({"-webkit-backface-visibility":"hidden"}),r.css({"-webkit-transform":n+"0,0"+s}));var p=this._pages=Math.ceil(o/c);if(this._minpage=0,this._maxpage=this._pages-1,this.loadImg(),this.updateArrow(),p<=1)return this.getImg(r[0]),a&&a.hide(),null;if(this.loop){e.append(r[0].cloneNode(!0));var f=r[o-1].cloneNode(!0);e.append(f),this.getImg(f),f.style.cssText+="position:relative;left:"+-this.steps*(o+2)+"px;",l+=r[0].offsetWidth,l+=r[o-1].offsetWidth}if(e.css("width",l),a&&a.length){var v="",g=a.children();if(!g.length){for(var m=0;m<p;m++)v+="<span"+(m==this.curIndex?" class="+this.activeTriggerCls:"")+"></span>";a.html(v)}this.triggers=a.children(),this.triggerSel=this.triggers[this.curIndex]}else this.hasTrigger=!1;return this},increaseEvent:function(){var t=this,e=t.wrap[0],i=t.prev,n=t.next,s=t.triggers;e.addEventListener&&(e.addEventListener("touchstart",t,!1),e.addEventListener("touchmove",t,!1),e.addEventListener("touchend",t,!1),e.addEventListener("webkitTransitionEnd",t,!1),e.addEventListener("msTransitionEnd",t,!1),e.addEventListener("oTransitionEnd",t,!1),e.addEventListener("transitionend",t,!1)),t.play&&t.begin(),i&&i.length&&i.on("click",function(e){t.backward.call(t,e)}),n&&n.length&&n.on("click",function(e){t.forward.call(t,e)}),t.hasTrigger&&s&&s.each(function(e,i){$(i).on("click",function(){t.slideTo(e)})})},handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":case"touchcancel":this.end(t);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"transitionend":this.transitionEnd(t)}},loadImg:function(t){t=t||0,t<this._minpage?t=this._maxpage:t>this._maxpage&&(t=this._minpage);var e=this.visible,i=this.lazyIndex-1,n=i+t;if(!(n>this._maxpage)){n+=1;var s=(t&&i+t||t)*e,r=n*e,a=this.panels;r=Math.min(a.length,r);for(var o=s;o<r;o++)this.getImg(a[o])}},getImg:function(t){if(t&&(t=$(t),!t.attr("l"))){var e=this,i=e.lazy,n="img"+i;i=i.replace(/^\.|#/g,""),t.find(n).each(function(t,e){var n=$(e);src=n.attr("dataimg"),src&&n.attr("src",src).removeAttr("dataimg").removeClass(i)}),t.attr("l","1")}},start:function(t){var e=t.touches[0];this._movestart=void 0,this._disX=0,this._coord={x:e.pageX,y:e.pageY}},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)){var e,i=t.touches[0],n=this._disX=i.pageX-this._coord.x,s=this.left;"undefined"==typeof this._movestart&&(this._movestart=!!(this._movestart||Math.abs(n)<Math.abs(i.pageY-this._coord.y))),this._movestart||(t.preventDefault(),this.stop(),this.loop||(n/=!this.curIndex&&n>0||this.curIndex==this._maxpage&&n<0?Math.abs(n)/this.steps+1:1),e=s-this.curIndex*this.steps+n,this.setCoord(this.panel,e),this._disX=n)}},end:function(t){if(!this._movestart){var e=this._disX;e<-10?(t.preventDefault(),this.forward()):e>10&&(t.preventDefault(),this.backward()),e=null}},backward:function(t){t&&t.preventDefault&&t.preventDefault();var e=this.curIndex,i=this._minpage;e-=1,e<i&&(e=this.loop?i-1:i),this.slideTo(e),this.callback&&this.callback(Math.max(e,i),-1)},forward:function(t){t&&t.preventDefault&&t.preventDefault();var e=this.curIndex,i=this._maxpage;e+=1,e>i&&(e=this.loop?i+1:i),this.slideTo(e),this.callback&&this.callback(Math.min(e,i),1)},setCoord:function(t,e){this.useTransform&&t.css("-webkit-transform",n+e+"px,0"+s)||t.css("left",e)},slideTo:function(t,e){t=t||0,this.curIndex=t;var i=this.panel,n=i[0].style,s=this.left-t*this.steps;n.webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=(e||this.duration)+"ms",this.setCoord(i,s),this.loadImg(t)},transitionEnd:function(){var t=this.panel,e=t[0].style,i=this.loop,n=this.curIndex;i&&(n>this._maxpage?this.curIndex=0:n<this._minpage&&(this.curIndex=this._maxpage),this.setCoord(t,this.left-this.curIndex*this.steps)),i||n!=this._maxpage?this.begin():(this.stop(),this.play=!1),this.update(),this.updateArrow(),e.webkitTransitionDuration=e.MozTransitionDuration=e.msTransitionDuration=e.OTransitionDuration=e.transitionDuration=0},update:function(){var t=this.triggers,e=this.activeTriggerCls,i=this.curIndex;t&&t[i]&&(this.triggerSel&&(this.triggerSel.className=""),t[i].className=e,this.triggerSel=t[i])},updateArrow:function(){var t=this.prev,e=this.next;if(t&&t.length&&e&&e.length&&!this.loop){var i=this.curIndex,n=this.activePnCls;i<=0&&t.addClass(n)||t.removeClass(n),i>=this._maxpage&&e.addClass(n)||e.removeClass(n)}},begin:function(){var t=this;t.play&&!t._playTimer&&(t.stop(),t._playTimer=setInterval(function(){t.forward()},t.interval))},stop:function(){var t=this;t.play&&t._playTimer&&(clearInterval(t._playTimer),t._playTimer=null)},destroy:function(){var t=this,e=t.wrap[0],i=t.prev,n=t.next,s=t.triggers;e.removeEventListener&&(e.removeEventListener("touchstart",t,!1),e.removeEventListener("touchmove",t,!1),e.removeEventListener("touchend",t,!1),e.removeEventListener("webkitTransitionEnd",t,!1),e.removeEventListener("msTransitionEnd",t,!1),e.removeEventListener("oTransitionEnd",t,!1),e.removeEventListener("transitionend",t,!1)),i&&i.length&&i.off("click"),n&&n.length&&n.off("click"),t.hasTrigger&&s&&s.each(function(t,e){$(e).off("click")})}}),$.touchSlider.cache=[],$.fn.slider=function(t){return this.each(function(e,i){i.getAttribute("l")||(i.setAttribute("l",!0),$.touchSlider.cache.push(new $.touchSlider(i,t)))})},$.touchSlider.destroy=function(){var t=$.touchSlider.cache,e=t.length;if(!(e<1)){for(var i=0;i<e;i++)t[i].destroy();$.touchSlider.cache=[]}},$.touchSlider}();