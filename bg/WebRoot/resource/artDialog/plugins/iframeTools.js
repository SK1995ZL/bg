/*
 * artDialog iframeTools
 * Date: 2011-11-25 13:54
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
(function(g,k,a,f){var l,i,d,b="@ARTDIALOG.DATA",c="@ARTDIALOG.OPEN",e="@ARTDIALOG.OPENER",h=k.name=k.name||"@ARTDIALOG.WINNAME"+ +new Date,j=k.VBArray&&!k.XMLHttpRequest;g(function(){!k.jQuery&&document.compatMode==="BackCompat"&&alert('artDialog Error: document.compatMode === "BackCompat"')});var m=a.top=function(){var n=k,o=function(p){try{var r=k[p].document;r.getElementsByTagName}catch(q){return false}return k[p].artDialog&&r.getElementsByTagName("frameset").length===0};if(o("top")){n=k.top}else{if(o("parent")){n=k.parent}}return n}();a.parent=m;l=m.artDialog;d=function(){return l.defaults.zIndex};a.data=function(o,p){var q=a.top,n=q[b]||{};q[b]=n;if(p!==f){n[o]=p}else{return n[o]}return n};a.removeData=function(o){var n=a.top[b];if(n&&n[o]){delete n[o]}};a.through=i=function(){var n=l.apply(this,arguments);if(m!==k){a.list[n.config.id]=n}return n};m!==k&&g(k).bind("unload",function(){var p=a.list,n;for(var o in p){if(p[o]){n=p[o].config;if(n){n.duration=0}p[o].close()}}});a.open=function(r,p,y){p=p||{};var x,D,q,v,u,w,C,E,s,z=a.top,o="position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent",A="width:100%;height:100%;border:none 0";if(y===false){var n=+new Date,G=r.replace(/([?&])_=[^&]*/,"$1_="+n);r=G+((G===r)?(/\?/.test(r)?"&":"?")+"_="+n:"")}var t=function(){var I,K,L=D.content.find(".aui_loading"),H=x.config;q.addClass("aui_state_full");L&&L.hide();try{E=u.contentWindow;C=g(E.document);s=E.document.body}catch(J){u.style.cssText=A;H.follow?x.follow(H.follow):x.position(H.left,H.top);p.init&&p.init.call(x,E,z);p.init=null;return}I=H.width==="auto"?C.width()+(j?0:parseInt(g(s).css("marginLeft"))):H.width;K=H.height==="auto"?C.height():H.height;setTimeout(function(){u.style.cssText=A},0);x.size(I,K);H.follow?x.follow(H.follow):x.position(H.left,H.top);p.init&&p.init.call(x,E,z);p.init=null};var F={zIndex:d(),init:function(){x=this;D=x.DOM;v=D.main;q=D.content;u=x.iframe=z.document.createElement("iframe");u.src=r;u.name="Open"+x.config.id;u.style.cssText=o;u.setAttribute("frameborder",0,0);u.setAttribute("allowTransparency",true);w=g(u);x.content().appendChild(u);E=u.contentWindow;try{E.name=u.name;a.data(u.name+c,x);a.data(u.name+e,k)}catch(H){}w.bind("load",t)},close:function(){w.css("display","none").unbind("load",t);if(p.close&&p.close.call(this,u.contentWindow,z)===false){return false}q.removeClass("aui_state_full");w[0].src="about:blank";w.remove();try{a.removeData(u.name+c);a.removeData(u.name+e)}catch(H){}}};if(typeof p.ok==="function"){F.ok=function(){return p.ok.call(x,u.contentWindow,z)}}if(typeof p.cancel==="function"){F.cancel=function(){return p.cancel.call(x,u.contentWindow,z)}}delete p.content;for(var B in p){if(F[B]===f){F[B]=p[B]}}return i(F)};a.open.api=a.data(h+c);a.opener=a.data(h+e)||k;a.open.origin=a.opener;a.close=function(){var n=a.data(h+c);n&&n.close();return false};m!=k&&g(document).bind("mousedown",function(){var n=a.open.api});a.load=function(q,p,n){n=n||false;var s=p||{};var o={zIndex:d(),init:function(u){var v=this,t=v.config;g.ajax({url:q,success:function(w){v.content(w);s.init&&s.init.call(v,u)},cache:n})}};delete p.content;for(var r in s){if(o[r]===f){o[r]=s[r]}}return i(o)};a.alert=function(n,o){return i({id:"Alert",zIndex:d(),icon:"warning",fixed:true,lock:true,opacity:0.1,content:"<span class=\"aui_content_color\">"+n+"</span>",ok:true,close:o})};a.confirm=function(n,p,o){return i({id:"Confirm",zIndex:d(),icon:"question",fixed:true,lock:true,opacity:0.1,content:"<span class=\"aui_content_color\">"+n+"</span>",ok:function(q){return p.call(this,q)},cancel:function(q){return o&&o.call(this,q)}})};a.prompt=function(o,q,p){p=p||"";var n;return i({id:"Prompt",zIndex:d(),icon:"question",fixed:true,lock:true,opacity:0.1,content:['<div style="margin-bottom:5px;font-size:12px">',o,"</div>","<div>",'<input value="',p,'" style="width:18em;padding:6px 4px" />',"</div>"].join(""),init:function(){n=this.DOM.content.find("input")[0];n.select();n.focus()},ok:function(r){return q&&q.call(this,n.value,r)},cancel:true})};a.tips=function(n,o){return i({id:"Tips",zIndex:d(),title:false,cancel:false,fixed:true,lock:false}).content('<div style="padding: 0 1em;">'+n+"</div>").time(o||1.5)};g(function(){var p=a.dragEvent;if(!p){return}var s=g(k),r=g(document),t=j?"absolute":"fixed",q=p.prototype,n=document.createElement("div"),o=n.style;o.cssText="display:none;position:"+t+";left:0;top:0;width:100%;height:100%;cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF";document.body.appendChild(n);q._start=q.start;q._end=q.end;q.start=function(){var w=a.focus.DOM,u=w.main[0],v=w.content[0].getElementsByTagName("iframe")[0];q._start.apply(this,arguments);o.display="block";o.zIndex=a.defaults.zIndex+3;if(t==="absolute"){o.width=s.width()+"px";o.height=s.height()+"px";o.left=r.scrollLeft()+"px";o.top=r.scrollTop()+"px"}if(v&&u.offsetWidth*u.offsetHeight>307200){u.style.visibility="hidden"}};q.end=function(){var u=a.focus;q._end.apply(this,arguments);o.display="none";if(u){u.DOM.main[0].style.visibility="visible"}}})})(this.art||this.jQuery,this,this.artDialog);