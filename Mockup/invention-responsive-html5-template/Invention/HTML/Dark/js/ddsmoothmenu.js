/* Smooth Navigational Menu- By Dynamic Drive DHTML code library: http://www.dynamicdrive.com
   Script Download/ instructions page: http://www.dynamicdrive.com/dynamicindex1/ddlevelsmenu/
*/
var ddsmoothmenu={arrowimages:{down:["downarrowclass","",0],right:["rightarrowclass","images/icons/right.png"]},transition:{overtime:300,outtime:300},shadow:{enable:false,offsetx:5,offsety:5},showhidedelay:{showdelay:200,hidedelay:200},detectwebkit:navigator.userAgent.toLowerCase().indexOf("applewebkit")!=-1,detectie6:document.all&&!window.XMLHttpRequest,css3support:window.msPerformance||!document.all&&document.querySelector,ismobile:navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)!=null,getajaxmenu:function(e,t){var n=e("#"+t.contentsource[0]);n.html("Loading Menu...");e.ajax({url:t.contentsource[1],async:true,error:function(e){n.html("Error fetching content. Server Response: "+e.responseText)},success:function(r){n.html(r);ddsmoothmenu.buildmenu(e,t)}})},buildmenu:function(e,t){var n=ddsmoothmenu;var r=e("#"+t.mainmenuid+">ul");r.parent().get(0).className=t.classname||"ddsmoothmenu";var i=r.find("ul").parent();i.hover(function(t){e(this).children("a:eq(0)").addClass("noborder selected")},function(t){e(this).children("a:eq(0)").removeClass("noborder selected")});i.each(function(r){var i=e(this).css({zIndex:100-r});var s=e(this).find("ul:eq(0)").css({display:"block"});s.data("timers",{});this._dimensions={w:this.offsetWidth,h:this.offsetHeight,subulw:s.outerWidth(),subulh:s.outerHeight()};this.istopheader=i.parents("ul").length==1?true:false;s.css({top:this.istopheader&&t.orientation!="v"?this._dimensions.h+"px":0});i.children("a:eq(0)").css(this.istopheader?{}:{}).append('<img src="'+(this.istopheader&&t.orientation!="v"?n.arrowimages.down[1]:n.arrowimages.right[1])+'" class="'+(this.istopheader&&t.orientation!="v"?n.arrowimages.down[0]:n.arrowimages.right[0])+'" style="border:0;" />');if(n.shadow.enable&&!n.css3support){this._shadowoffset={x:this.istopheader?s.offset().left+n.shadow.offsetx:this._dimensions.w,y:this.istopheader?s.offset().top+n.shadow.offsety:i.position().top};if(this.istopheader)$parentshadow=e(document.body);else{var o=i.parents("li:eq(0)");$parentshadow=o.get(0).$shadow}this.$shadow=e('<div class="ddshadow'+(this.istopheader?" toplevelshadow":"")+'"></div>').prependTo($parentshadow).css({left:this._shadowoffset.x+"px",top:this._shadowoffset.y+"px"})}i.hover(function(r){var o=s;var u=i.get(0);clearTimeout(o.data("timers").hidetimer);o.data("timers").showtimer=setTimeout(function(){u._offsets={left:i.offset().left,top:i.offset().top};var r=u.istopheader&&t.orientation!="v"?0:u._dimensions.w;r=u._offsets.left+r+u._dimensions.subulw>e(window).width()?u.istopheader&&t.orientation!="v"?-u._dimensions.subulw+u._dimensions.w:-u._dimensions.w:r;if(o.queue().length<=1){o.css({left:r+"px",width:u._dimensions.subulw+"px"}).animate({height:"show",opacity:"show"},ddsmoothmenu.transition.overtime);if(n.shadow.enable&&!n.css3support){var s=u.istopheader?o.offset().left+ddsmoothmenu.shadow.offsetx:r;var a=u.istopheader?o.offset().top+n.shadow.offsety:u._shadowoffset.y;if(!u.istopheader&&ddsmoothmenu.detectwebkit){u.$shadow.css({opacity:1})}u.$shadow.css({overflow:"",width:u._dimensions.subulw+"px",left:s+"px",top:a+"px"}).animate({height:u._dimensions.subulh+"px"},ddsmoothmenu.transition.overtime)}}},ddsmoothmenu.showhidedelay.showdelay)},function(e){var t=s;var r=i.get(0);clearTimeout(t.data("timers").showtimer);t.data("timers").hidetimer=setTimeout(function(){t.animate({height:"hide",opacity:"hide"},ddsmoothmenu.transition.outtime);if(n.shadow.enable&&!n.css3support){if(ddsmoothmenu.detectwebkit){r.$shadow.children("div:eq(0)").css({opacity:0})}r.$shadow.css({overflow:"hidden"}).animate({height:0},ddsmoothmenu.transition.outtime)}},ddsmoothmenu.showhidedelay.hidedelay)})});if(n.shadow.enable&&n.css3support){var s=e("#"+t.mainmenuid+" ul li ul");var o=parseInt(n.shadow.offsetx)+"px "+parseInt(n.shadow.offsety)+"px 5px #aaa";var u=["boxShadow","MozBoxShadow","WebkitBoxShadow","MsBoxShadow"];for(var a=0;a<u.length;a++){s.css(u[a],o)}}r.find("ul").css({display:"none",visibility:"visible"})},init:function(e){if(typeof e.customtheme=="object"&&e.customtheme.length==2){var t="#"+e.mainmenuid;var n=e.orientation=="v"?t:t+", "+t;document.write('<style type="text/css">\n'+n+" ul li a {background:"+e.customtheme[0]+";}\n"+t+" ul li a:hover {background:"+e.customtheme[1]+";}\n"+"</style>")}this.shadow.enable=document.all&&!window.XMLHttpRequest?false:this.shadow.enable;jQuery(document).ready(function(t){if(typeof e.contentsource=="object"){ddsmoothmenu.getajaxmenu(t,e)}else{ddsmoothmenu.buildmenu(t,e)}})}}