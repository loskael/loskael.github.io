var T=function(){var i={},n=[location.protocol,"//",location.host].join("");return i.showMsg=function(i,n,t){var e='<div id="msg"><div class="box"><div class="hd">提示</div><div class="bd"></div><div class="ft"><a class="btn-ok" href="javascript:;">确定</a><a class="btn-share" href="javascript:;">分享</a></div></div></div>',s=$("#msg");s.length||($(document.body).append(e),s=$("#msg"));var a=s.find(".box");a.find(".bd").html(i),s.show(),a.css({marginLeft:a.width()/-2,marginTop:a.height()/-2}),s.off("click",".btn-share").one("click",".btn-share",function(){s.hide(),n&&n()}).off("click",".btn-ok").one("click",".btn-ok",function(){s.hide(),t&&t()})},i.showTips=function(i,n){var t='<div id="tips"><i class="icon-arrow"></i><p></p><a class="btn-close">×</a></div>',e=$("#tips");e.length||($(document.body).append(t),e=$("#tips")),e.find("p").html(i),e.data("inited")||e.data("inited",!0).on("click",".btn-close",function(){e.hide()}),n&&setTimeout(function(){e.hide()},n),e.show()},i.showTipsMsg=function(i,n){var t='<div id="tip_message"></div>',e=$("#tip_message");e.length||($(document.body).append(t),e=$("#tip_message")),e=e[0],e.innerText=i,e.style.visibility="visible",n&&setTimeout(function(){e.style.visibility="hidden"},n)},i.shareData={imgUrl:n+$("img.share").eq(0).attr("src"),title:document.title,link:location.href,desc:""},i.share=function(){var n=["shareToFriend","shareToTimeline","shareToWeibo","generalShare"];WeixinApi.ready(function(t){n.forEach(function(n){t[n]&&t[n](i.shareData,{confirm:function(i){}})})})},i}();