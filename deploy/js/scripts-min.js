$(window).on("load",function(){$(".ex1").textyleF(),$(".ex2").textyleF({duration:2e3,delay:200,easing:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",callback:function(){$(this).css({color:"#fff",transition:"1s"}),$(".desc").css("opacity",1)}})}),function(n){n.fn.textyleF=function(t){var i=this,e=i.contents(),a=n.extend({duration:1e3,delay:150,easing:"ease",callback:null},t);return e.each(function(){var t=n(this);3===this.nodeType&&function(n){n.replaceWith(n.text().replace(/(\S)/g,"<span>$1</span>"))}(t)}),this.each(function(t){var e=i.children("span");i.css("opacity",1),e.css("display","inline-block"),e.each(function(t){n(this).delay(a.delay*t).queue(function(t){n(this).css({transform:"rotateY(0deg) rotateX(0deg)",opacity:1,transitionDuration:a.duration+"ms",transitionTimingFunction:a.easing}),t()}),"function"==typeof a.callback&&n(this).on("transitionend",function(){a.callback.call(this)})})})}}(jQuery);