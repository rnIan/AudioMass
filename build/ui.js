(function(N,c,P){function Q(a,c){return[{name:"File",children:[{name:"Export as mp3",action:function(){(new PKSimpleModal({title:"Export mp3",ondestroy:function(b){a.ui.InteractionHandler.on=!1;a.ui.KeyHandler.removeCallback("modalTemp")},buttons:[{title:"Export",clss:"pk_modal_a_accpt",callback:function(b){for(var h=b.el_body.getElementsByTagName("input")[0].value.trim(),c=128,d=!1,e=b.el_body.getElementsByClassName("pk_check"),k=e.length;0<k--;)e[k].checked&&("xport"==e[k].name?"sel"===e[k].value&&
(d=(d=a.engine.wavesurfer.regions.list[0])?[d.start,d.end]:!1):c=e[k].value/1);a.engine.DownloadFile(h,c,d);b.Destroy()}}],body:'<div class="pk_row"><label for="k0">File Name</label><input style="min-width:250px" placeholder="mp3 filename" value="audiomass-output.mp3" class="pk_txt" type="text" id="k0" /></div><div class="pk_row"><input type="radio" class="pk_check" id="k1" name="rdslnc" checked value="128"><label  for="k1">128kbps</label><input type="radio" class="pk_check"  id="k2" name="rdslnc" value="192"><label for="k2">192kbps</label><input type="radio" class="pk_check"  id="k3" name="rdslnc" value="256"><label for="k3">256kbps</label></div><div class="pk_row"><input type="radio" class="pk_check" id="k4" name="xport" checked value="whole"><label for="k4">Export whole file</label><input type="radio" class="pk_check" id="k5" name="xport" value="sel"><label class="pk_lblmp3" for="k5">Export Selection Only</label></div>',
setup:function(b){PKAudioEditor.engine.wavesurfer.regions.list[0]||(b.el_body.getElementsByClassName("pk_lblmp3")[0].className="pk_dis");a.fireEvent("RequestPause");a.ui.InteractionHandler.checkAndSet("modal");a.ui.KeyHandler.addCallback("modalTemp",function(a){b.Destroy()},[27]);setTimeout(function(){b.el&&b.el.getElementsByTagName("input")[0].select()},20)}})).Show()},clss:"pk_inact",setup:function(b){a.listenFor("DidUnloadFile",function(){b.classList.add("pk_inact")});a.listenFor("DidLoadFile",
function(){b.classList.remove("pk_inact")})}},{name:"Load from Computer",type:"file",action:function(b){a.fireEvent("RequestLoadLocalFile")}},{name:"Load Sample File",action:function(b){a.engine.LoadSample()}},{name:"Load From URL",action:function(b){(new PKSimpleModal({title:"Load audio from remote url",ondestroy:function(b){a.ui.InteractionHandler.on=!1;a.ui.KeyHandler.removeCallback("modalTemp");a.ui.KeyHandler.removeCallback("modalTempEnter")},buttons:[{title:"Load Asset",clss:"pk_modal_a_accpt",
callback:function(b){var c=b.el_body.getElementsByTagName("input")[0].value.trim();var d=/^((https?:)?\/\/)?(?:\S+(?::\S*)?@)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(c)?!0:!1;d?(a.engine.LoadURL(c),b.Destroy()):OneUp("Invalid URL entered",1100)}}],body:'<label for="k00">Insert url</label><input style="min-width:250px" placeholder="Please insert url" class="pk_txt" type="text" id="k00" />',setup:function(b){a.fireEvent("RequestPause");
a.ui.InteractionHandler.checkAndSet("modal");a.ui.KeyHandler.addCallback("modalTemp",function(a){b.Destroy()},[27]);a.ui.KeyHandler.addCallback("modalTempEnter",function(a){b.els.bottom[0].click()},[13]);setTimeout(function(){b.el&&b.el.getElementsByTagName("input")[0].focus()},20)}})).Show()}}]},{name:"Edit",children:[{name:'Undo <span class="pk_shrtct">Shft+Z</span>',clss:"pk_inact",action:function(){a.fireEvent("StateRequestUndo")},setup:function(b){a.listenFor("DidStateChange",function(a,c){0===
a.length?(b.innerHTML='Undo <span class="pk_shrtct">Shft+Z</span>',b.classList.add("pk_inact")):(b.innerHTML="Undo <i>"+a[a.length-1].desc+'</i><span class="pk_shrtct">Shft+Z</span>',b.classList.remove("pk_inact"))})}},{name:'Redo <span class="pk_shrtct">Shft+Y</span>',clss:"pk_inact",action:function(){a.fireEvent("StateRequestRedo")},setup:function(b){a.listenFor("DidStateChange",function(a,c){0===c.length?(b.innerHTML='Redo <span class="pk_shrtct">Shft+Y</span>',b.classList.add("pk_inact")):(b.innerHTML=
"Redo <i>"+c[c.length-1].desc+'</i><span class="pk_shrtct">Shft+Y</span>',b.classList.remove("pk_inact"))})}},{name:'Play <span class="pk_shrtct">Space</span>',action:function(){a.fireEvent("RequestPlay")}},{name:"Stop",action:function(){a.fireEvent("RequestStop")}},{name:'Select All <span class="pk_shrtct">Shft+A</span>',action:function(){a.fireEvent("RequestSelect")}},{name:'Deselect All <span class="pk_shrtct">~</span>',action:function(){a.fireEvent("RequestDeselect")}}]},{name:"Effects",children:[{name:"Gain",
action:function(){a.fireEvent("RequestFXUI_Gain")}},{name:"Fade In",action:function(){a.fireEvent("RequestActionFX_FadeIn")}},{name:"Fade Out",action:function(){a.fireEvent("RequestActionFX_FadeOut")}},{name:"Paragraphic EQ",action:function(){a.fireEvent("RequestActionFXUI_ParaGraphicEQ")}},{name:"Compressor",action:function(){a.fireEvent("RequestActionFXUI_Compressor")}},{name:"Normalize",action:function(){a.fireEvent("RequestActionFXUI_Normalize")}},{name:"Graphic EQ",action:function(){a.fireEvent("RequestActionFXUI_GraphicEQ",
10)}},{name:"Graphic EQ (20 bands)",action:function(){a.fireEvent("RequestActionFXUI_GraphicEQ",20)}},{name:"Hard Limiter",action:function(){a.fireEvent("RequestActionFXUI_HardLimiter")}},{name:"Delay",action:function(){a.fireEvent("RequestActionFXUI_Delay")}},{name:"Distortion",action:function(){a.fireEvent("RequestActionFXUI_Distortion")}},{name:"Reverb",action:function(){a.fireEvent("RequestActionFXUI_Reverb")}},{name:"Speed Up / Slow Down",action:function(){a.fireEvent("RequestActionFXUI_Speed")}},
{name:"Reverse",action:function(){a.fireEvent("RequestActionFX_Reverse")}},{name:"Invert",action:function(){a.fireEvent("RequestActionFX_Invert")}}]},{name:"View",children:[{name:"Follow Cursor  &#10004;",action:function(b){a.fireEvent("RequestViewFollowCursorToggle")},setup:function(b){a.listenFor("DidViewFollowCursorToggle",function(a){a?b.innerHTML="Follow Cursor &#10004;":b.textContent="Follow Cursor"})}},{name:"Peak Separators &#10004;",action:function(b){a.fireEvent("RequestViewPeakSeparatorToggle")},
setup:function(b){a.listenFor("DidViewPeakSeparatorToggle",function(a){a?b.innerHTML="Peak Separators &#10004;":b.textContent="Peak Separators"})}},{name:"Timeline &#10004;",action:function(b){a.fireEvent("RequestViewTimelineToggle")},setup:function(b){a.listenFor("DidViewTimelineToggle",function(a){a?b.innerHTML="Timeline &#10004;":b.textContent="Timeline"})}},{name:"---"},{name:"Frequency Analyser",action:function(b){a.fireEvent("RequestShowFreqAn",1)},setup:function(b){a.listenFor("DidToggleFreqAn",
function(a){a?b.innerHTML="Frequency Analyser &#10004;":b.textContent="Frequency Analyser"})}},{name:"---"},{name:'Center to Cursor <span class="pk_shrtct">[Tab]</span>',action:function(b){a.fireEvent("RequestViewCenterToCursor")}},{name:'Reset Zoom <span class="pk_shrtct">[0]</span>',action:function(b){a.fireEvent("RequestZoomUI",0)}}]},{name:"Help",children:[{name:"Store Offline Version",action:function(){if(0<window.location.href.indexOf("-cache")){var b=function(a){confirm("Would you like to refresh the page to load the newer version?")&&
window.location.reload()};window.applicationCache.onupdateready=b;window.applicationCache.ondownloading=function(a){OneUp("Downloading newer version",1500)};window.applicationCache.status===window.applicationCache.UPDATEREADY&&b();window.applicationCache.update()}else(new PKSimpleModal({title:"Open Offline Version?",ondestroy:function(b){a.ui.InteractionHandler.on=!1;a.ui.KeyHandler.removeCallback("modalTempErr")},buttons:[{title:"OPEN",callback:function(a){window.open("/index-cache.html");a.Destroy()}}],
body:"<p>This will open a new window that will try to store a local version in your browser</p>",setup:function(b){a.fireEvent("RequestPause");a.fireEvent("RequestRegionClear");a.ui.InteractionHandler.checkAndSet("modal");a.ui.KeyHandler.addCallback("modalTempErr",function(a){b.Destroy()},[27])}})).Show()},setup:function(a){0<window.location.href.indexOf("-cache")&&(a.innerHTML="Update Offline Version")}},{name:"---"},{name:"View Dev Diary",action:function(){window.open("/changelog.html")}},{name:"SourceCode on Github",
action:function(){window.open("https://github.com/pkalogiros/audiomass")}}]}]}function R(a,e){function b(a,d,e){for(var f=0;f<d.length;++f){var h=c.createElement("div"),g=d[f];if(0===e){h.className="pk_btn pk_noselect";var m=c.createElement("button");m.innerHTML=g.name;h.appendChild(m)}else h.className="pk_menu_el",m=c.createElement("button"),m.className="pk_opt "+(g.clss?g.clss:""),m.setAttribute("tab-index","-1"),m.setAttribute("data-index",f),m.innerHTML=g.name,h.appendChild(m),g.action&&function(a,
b){a.onclick=function(a){this.classList.contains("pk_inact")||(p.closeMenu(),b(a))}}(m,g.action),g.setup&&g.setup(m);a.appendChild(h);0===e&&(n[f]=h.childNodes[0]);g.children&&(m=c.createElement("div"),m.className="pk_menu",b(m,g.children,e+1),h.appendChild(m))}}function h(a){if(g==a||!a)return!1;for(var b=a.parentNode;b&&g;){if(g.parentNode==b)return!1;b=b.parentNode}for(b=n.length;0<b--;)if(n[b]===a)return p.openMenu(b,!0);return!1}var l=c.createElement("div");l.className="pk_hdr pk_noselect";e.el.appendChild(l);
var d=-1,g=null,k=null,f=null,n=[],p=this;b(l,a,0);this.getOpenElement=function(){return g};this.closeMenu=function(){g&&(g.parentNode.className="pk_btn pk_noselect",g=k=null,f&&(f.classList.remove("pk_act"),f=null),e.InteractionHandler.on=!1,c.removeEventListener("mouseup",q),e.KeyHandler.removeCallback("TopHeader1"),e.KeyHandler.removeCallback("TopHeader2"),e.KeyHandler.removeCallback("TopHeader3"),e.KeyHandler.removeCallback("TopHeader4"),e.KeyHandler.removeCallback("TopHeader5"),e.KeyHandler.removeCallback("TopHeader6"))};
this.openMenu=function(a,b){g&&(g.parentNode.className="pk_btn pk_noselect");n[a].parentNode.className+=" pk_act";g=n[a];d=a;e.InteractionHandler.checkAndSet("TopHeader");b||c.addEventListener("mouseup",q,!1);e.KeyHandler.addCallback("TopHeader1",function(a){0===d&&(d=n.length);p.closeMenu();p.openMenu(d-1)},[37]);e.KeyHandler.addCallback("TopHeader2",function(a){d===n.length-1&&(d=-1);p.closeMenu();p.openMenu(d+1)},[39]);e.KeyHandler.addCallback("TopHeader3",function(a){p.closeMenu()},[27]);e.KeyHandler.addCallback("TopHeader4",
function(a,b,c){f?(a=f.getAttribute("data-index")/1,f.classList.remove("pk_act"),f=g.parentNode.getElementsByClassName("pk_opt"),f=0>a-1?f[f.length-1]:f[a-1],f.classList.add("pk_act")):(a=g.parentNode.getElementsByClassName("pk_opt"),a[0]&&(f=a[0],f.classList.add("pk_act")))},[38]);e.KeyHandler.addCallback("TopHeader5",function(a,b,c){f?(a=f.getAttribute("data-index")/1,f.classList.remove("pk_act"),f=g.parentNode.getElementsByClassName("pk_opt"),f=f.length<=a+1?f[0]:f[a+1],f.classList.add("pk_act")):
(a=g.parentNode.getElementsByClassName("pk_opt"),a[0]&&(f=a[0],f.classList.add("pk_act")))},[40]);e.KeyHandler.addCallback("TopHeader6",function(a){f?f.click():p.closeMenu()},[13]);return!0};e.listenFor("DidReadyFire",function(){p.closeMenu()});var q=function(a){a=a.target||a.srcElement;if(g){for(var b=a,d=!1;b&&g;){if(g.parentNode==b){d=!0;break}b=b.parentNode}d&&k!==a||p.closeMenu()}else e.InteractionHandler.on=!1,c.removeEventListener("mouseup",q);k=null};l.addEventListener("mousemove",function(a){return e.InteractionHandler.check("TopHeader")?
g||e.InteractionHandler.on&&"TopHeader"===e.InteractionHandler.by?(a=a.target||a.srcElement,0<=a.className.indexOf("pk_opt")?(f&&f.classList.remove("pk_act"),f=a,f.classList.add("pk_act")):(f&&f.classList.remove("pk_act"),f=null),h(a)):!1:!1},!1);l.addEventListener("mousedown",function(a){if(!e.InteractionHandler.checkAndSet("TopHeader"))return!1;c.removeEventListener("mouseup",q);g?(k=h(a.target||a.srcElement)?null:g,c.addEventListener("mouseup",q,!1)):(k=null,c.addEventListener("mouseup",q,!1),
h(a.target||a.srcElement))},!1)}function S(a,e){var b=this,h=c.createElement("div");h.className="pk_dck";a.el.appendChild(h);b.el=h;b.on=!1;b.height=130;b.Show=function(){b.on=!0;h.style.display="block";e.fireEvent("RequestResize")};b.Hide=function(){b.on=!1;h.style.display="none";e.fireEvent("RequestResize")}}function T(a,e){var b=this,h=c.createElement("div");h.className="pk_av_cont";a.el.appendChild(h);var l=c.createElement("div");l.className="pk_av pk_noselect";l.id="pk_av_"+e.id;h.appendChild(l);
var d=c.createElement("div");d.className="pk_ftr pk_noselect";a.el.appendChild(d);var g=c.createElement("div");g.className="pk_panner pk_noselect";var k=c.createElement("div");k.className="pk_pan_left";var f=c.createElement("div");f.className="pk_pan_right";var n=c.createElement("button"),p=c.createElement("button");n.setAttribute("tabIndex",-1);p.setAttribute("tabIndex",-1);n.className="pk_pan_btn";p.className="pk_pan_btn";n.innerHTML="<strong>L</strong> ON";p.innerHTML="<strong>R</strong> ON";k.appendChild(n);
f.appendChild(p);g.appendChild(k);g.appendChild(f);h.appendChild(g);n.onclick=function(){e.fireEvent("RequestChanToggle",1);this.blur()};p.onclick=function(){e.fireEvent("RequestChanToggle",0);this.blur()};e.listenFor("DidChanToggle",function(a,b){0===a?b?(n.classList.remove("pk_inact"),n.innerHTML="<strong>L</strong> ON"):(n.classList.add("pk_inact"),n.innerHTML="<strong>L</strong> OFF"):b?(p.classList.remove("pk_inact"),p.innerHTML="<strong>R</strong> ON"):(p.classList.add("pk_inact"),p.innerHTML=
"<strong>R</strong> OFF")});h=c.createElement("div");h.className="pk_zoombtn";g=c.createElement("button");g.className="pk_btn pk_zoom_in_h";g.innerHTML="+<span>Zoom In Horiz (+)</span>";g.setAttribute("tabIndex",-1);g.onclick=function(){e.fireEvent("RequestZoomUI","h",-1);this.blur()};var q=c.createElement("button");q.className="pk_btn pk_zoom_out_h pk_inact";q.innerHTML="&ndash;<span>Zoom Out Horiz (-)</span>";q.setAttribute("tabIndex",-1);q.onclick=function(){e.fireEvent("RequestZoomUI","h",1);
this.blur()};var m=c.createElement("button");m.className="pk_btn pk_zoom_reset pk_inact";m.innerHTML="[R] <span>Reset Zoom (0)</span>";m.setAttribute("tabIndex",-1);m.onclick=function(){e.fireEvent("RequestZoomUI",0);this.blur()};a.KeyHandler.addCallback("Key0",function(b){a.InteractionHandler.on||e.fireEvent("RequestZoomUI",0)},[48]);a.KeyHandler.addCallback("KeyZO",function(b){a.InteractionHandler.on||e.fireEvent("RequestZoomUI","h",1)},[189]);a.KeyHandler.addCallback("KeyZI",function(b){a.InteractionHandler.on||
e.fireEvent("RequestZoomUI","h",-1)},[187]);k=c.createElement("button");k.className="pk_btn pk_zoom_in_v";k.innerHTML="&#x2195; +<span>Zoom In Vertically</span>";k.setAttribute("tabIndex",-1);k.onclick=function(){e.fireEvent("RequestZoomUI","v",-1);this.blur()};f=c.createElement("button");f.className="pk_btn pk_zoom_out_v";f.innerHTML="&#x2195; &ndash;<span>Zoom Out Vertically</span>";f.setAttribute("tabIndex",-1);f.onclick=function(){e.fireEvent("RequestZoomUI","v",1);this.blur()};h.appendChild(g);
h.appendChild(q);h.appendChild(m);h.appendChild(k);h.appendChild(f);d.appendChild(h);h=c.createElement("div");h.className="pk_wavescroll";var y=!1,B=c.createElement("div");B.className="pk_wavepoint";var r=c.createElement("div");r.className="pk_wavedrag pk_inact";var C=c.createElement("div");C.className="pk_wavedrag_l";var H=c.createElement("div");H.className="pk_wavedrag_r";h.appendChild(B);r.appendChild(C);r.appendChild(H);h.appendChild(r);d.appendChild(h);var t=0,z=100;h.onclick=function(b){if(!(20>
window.performance.now()-t)){var c=b.target.getBoundingClientRect();a.fireEvent("RequestPan",b.clientX-c.left,2)}};a.listenFor("DidZoom",function(a){var b=a[0],c=a[1];1===b?(q.classList.add("pk_inact"),m.classList.add("pk_inact")):(q.classList.remove("pk_inact"),m.classList.remove("pk_inact"));1!=a[2]&&m.classList.remove("pk_inact");1===b?y&&(B.style.display="none",y=!1):y||(B.style.display="block",a=e.engine.wavesurfer.getCurrentTime()/e.engine.wavesurfer.getDuration(),B.style.left=(100*a).toFixed(2)/
1+"%",y=!0);99<100/b?(z=100,r.style.width="100%",r.style.left="0%",r.classList.add("pk_inact")):(z=100/b,r.style.width=z+"%",r.style.left=c+"%",r.classList.remove("pk_inact"))});a.listenFor("DidCursorCenter",function(a){r.style.left=100*a+"%"});var u=0,A=0,w=function(b){b.stopPropagation();b.preventDefault();var c=-A+b.clientX;0===u?a.fireEvent("RequestPan",c,1):-1===u?a.fireEvent("RequestZoom",c,-1):1===u&&a.fireEvent("RequestZoom",c,1);A=b.clientX},v=function(a){PKAudioEditor.engine.wavesurfer.Interacting&=
-3;a.stopPropagation();a.preventDefault();u=0;t=window.performance.now();r.classList.remove("pk_drag");document.removeEventListener("mousemove",w);document.removeEventListener("mouseup",v)};r.addEventListener("mousedown",function(a){a.target===r?u=0:a.target===C?u=-1:a.target===H&&(u=1);r.className+=" pk_drag";A=a.clientX;PKAudioEditor.engine.wavesurfer.Interacting|=2;document.addEventListener("mousemove",w,!1);document.addEventListener("mouseup",v,!1)},!1);this.volumeGauge=c.createElement("div");
this.volumeGauge2=c.createElement("div");this.volumeGaugeInner=c.createElement("div");this.volumeGaugeInner2=c.createElement("div");this.volumeGaugePeaker=c.createElement("div");this.volumeGaugePeaker2=c.createElement("div");h=c.createElement("div");this.volumeGauge.className="pk_volpar";this.volumeGauge2.className="pk_volpar";this.volumeGaugeInner.className="pk_vol";this.volumeGaugeInner2.className="pk_vol";this.volumeGaugePeaker.className="pk_peaker";this.volumeGaugePeaker2.className="pk_peaker";
this.volumeGauge.appendChild(this.volumeGaugeInner);this.volumeGauge.appendChild(this.volumeGaugePeaker);this.volumeGauge2.appendChild(this.volumeGaugeInner2);this.volumeGauge2.appendChild(this.volumeGaugePeaker2);g=c.createElement("div");g.className="pk_markers pk_noselect";k='<span class="pk_mark1">-Inf</span>';for(f=35;0<=f;--f)k+='<span class="pk_mark1 '+(f%2?"pk_odd":"")+'">'+-(2*f)+"</span>";g.innerHTML=k;h.appendChild(this.volumeGauge);h.appendChild(this.volumeGauge2);h.appendChild(g);h.onclick=
function(){b.volumeGaugePeaker.className="pk_peaker";b.volumeGaugePeaker2.className="pk_peaker"};d.appendChild(h);d=c.createElement("div");d.className="pk_tmpMsg";d.innerHTML='Drag n drop an Audio File in this window, or click <a style="text-decoration:underline" onclick="PKAudioEditor.engine.LoadSample()">here to use a sample</a>';l.appendChild(d);l=c.createElement("div");l.className="pk_tmpMsg2";l.innerHTML='<span>Please Wait...</span><div class="pk_mload"><div></div></div><div class="pk_prc"><span>0%</span><button tabIndex="-1" class="pk_btn" onclick="PKAudioEditor.fireEvent(\'RequestCancelModal\');">cancel</button></div>';
c.body.appendChild(l);a.loaderEl=l;a.listenFor("WillDownloadFile",function(){a.loaderEl.classList.add("pk_act");a.loaderEl.getElementsByTagName("span")[1].style.display="none"});a.listenFor("DidDownloadFile",function(){a.loaderEl.classList.remove("pk_act")});a.listenFor("DidProgressModal",function(b){a.loaderEl.getElementsByTagName("span")[1].style.display="block";a.loaderEl.getElementsByTagName("span")[1].innerText=b+"%"})}function U(a){function e(a){var b=a>>0;a-=b;if(10>b)b="00:0"+b;else if(60>
b)b="00:"+b;else{var c=b/60>>0;b%=60;b=(10>c?"0":"")+c+":"+(10>b?"0"+b:b)}return b+":"+(a.toFixed(3)+"").substr(2)}var b=c.createElement("div");b.className="pk_tb pk_noselect";a.el.appendChild(b);var h=c.createElement("div");h.className="pk_btngroup";var l=c.createElement("div");l.className="pk_transport";var d=c.createElement("button");d.setAttribute("tabIndex",-1);d.innerHTML="<span>Stop Playback (Space)</span>";d.className="pk_btn pk_stop icon-stop2";d.onclick=function(){a.fireEvent("RequestStop")};
l.appendChild(d);var g=c.createElement("button");g.setAttribute("tabIndex",-1);g.className="pk_btn pk_play icon-play3";g.innerHTML="<span>Play (Space)</span>";l.appendChild(g);g.onclick=function(){a.fireEvent("RequestPlay");this.blur()};a.listenFor("DidStopPlay",function(){g.classList.remove("pk_act")});a.listenFor("DidPlay",function(){g.classList.add("pk_act")});d=c.createElement("button");d.setAttribute("tabIndex",-1);d.className="pk_btn pk_pause icon-pause2";d.innerHTML="<span>Pause (Shift+Space)</span>";
l.appendChild(d);d.onclick=function(){a.fireEvent("RequestPause");this.blur()};var k=c.createElement("button");k.setAttribute("tabIndex",-1);k.className="pk_btn pk_loop icon-loop";k.innerHTML="<span>Toggle Loop (L)</span>";l.appendChild(k);k.onclick=function(){a.fireEvent("RequestSetLoop");this.blur()};a.listenFor("DidSetLoop",function(a){a?k.classList.add("pk_act"):k.classList.remove("pk_act")});d=c.createElement("button");d.setAttribute("tabIndex",-1);d.className="pk_btn pk_back_jump icon-backward2";
d.innerHTML="<span>Seek (left arrow)</span>";l.appendChild(d);var f=!1,n=null;d.onclick=function(){if(!f){n&&(clearTimeout(n),n=null);var b=PKAudioEditor.engine.wavesurfer.getDuration()/20;b/=PKAudioEditor.engine.wavesurfer.ZoomFactor/2+.5;1<b&&(b<<=0);a.fireEvent("RequestSkipBack",b)}this.blur();f=!1};d.onmouseleave=function(){n&&(clearTimeout(n),n=null);this.blur()};d.onfocus=function(){var b=this;f=!1;var c=function(d,e){if(document.activeElement===b){f=!0;a.fireEvent("RequestSkipBack",d);var M=
PKAudioEditor.engine.wavesurfer.getDuration()/4450;M/=PKAudioEditor.engine.wavesurfer.ZoomFactor;12>e&&(M=0);setTimeout(function(){c(d+M,++e)},40)}};n=setTimeout(function(){var a=PKAudioEditor.engine.wavesurfer.getDuration()/2E3;a/=PKAudioEditor.engine.wavesurfer.ZoomFactor;.01>a&&(a=.01);c(a,0)},390)};d=c.createElement("button");d.setAttribute("tabIndex",-1);d.className="pk_btn pk_front_jump icon-forward3";d.innerHTML="<span>Seek (right arrow)</span>";l.appendChild(d);var p=!1,q=null;d.onclick=function(){if(!p){q&&
(clearTimeout(q),q=null);var b=PKAudioEditor.engine.wavesurfer.getDuration()/20;b/=PKAudioEditor.engine.wavesurfer.ZoomFactor/2+.5;1<b&&(b<<=0);a.fireEvent("RequestSkipFront",b)}this.blur();p=!1};d.onmouseleave=function(){q&&(clearTimeout(q),q=null);this.blur()};d.onfocus=function(){var b=this;p=!1;var c=function(d,e){if(document.activeElement===b){p=!0;a.fireEvent("RequestSkipFront",d);var f=PKAudioEditor.engine.wavesurfer.getDuration()/4450;f/=PKAudioEditor.engine.wavesurfer.ZoomFactor;12>e&&(f=
0);setTimeout(function(){c(d+f,++e)},40)}};q=setTimeout(function(){var a=PKAudioEditor.engine.wavesurfer.getDuration()/2E3;a/=PKAudioEditor.engine.wavesurfer.ZoomFactor;.01>a&&(a=.01);c(a,0)},390)};var m=0,y=1,B=4;a.KeyHandler.addCallback("KeyArrowBack",function(b,c,d){!a.InteractionHandler.on&&PKAudioEditor.engine.is_ready&&(b=d.timeStamp,158<b-m?(y=1,B=4):0>--B&&6>y&&(y+=.05),m=b,a.fireEvent("RequestSkipBack",.5/PKAudioEditor.engine.wavesurfer.ZoomFactor*y))},[37]);var r=0,C=1,H=4;a.KeyHandler.addCallback("KeyArrowFront",
function(b,c,d){!a.InteractionHandler.on&&PKAudioEditor.engine.is_ready&&(b=d.timeStamp,158<b-r?(C=1,H=4):0>--H&&6>C&&(C+=.05),r=b,a.fireEvent("RequestSkipFront",.5/PKAudioEditor.engine.wavesurfer.ZoomFactor*C))},[39]);a.KeyHandler.addCallback("KeyShiftArrowBack",function(b){if(!a.InteractionHandler.on&&PKAudioEditor.engine.is_ready){if(b=PKAudioEditor.engine.wavesurfer.regions.list[0]){var c=PKAudioEditor.engine.wavesurfer.ActiveMarker,d=PKAudioEditor.engine.wavesurfer.getDuration(),e=b.end/d;if(c>
e+.004){a.fireEvent("RequestSeekTo",e-1E-4);return}e=b.start/d;if(c>e+.004){a.fireEvent("RequestSeekTo",e);return}}a.fireEvent("RequestSeekTo",0)}},[16,37]);a.KeyHandler.addCallback("KeyShiftArrowFront",function(b){if(!a.InteractionHandler.on&&PKAudioEditor.engine.is_ready){if(b=PKAudioEditor.engine.wavesurfer.regions.list[0]){var c=PKAudioEditor.engine.wavesurfer.ActiveMarker,d=PKAudioEditor.engine.wavesurfer.getDuration(),e=b.start/d;if(c<e-.004){a.fireEvent("RequestSeekTo",e);return}e=b.end/d;
if(c<e-.004){a.fireEvent("RequestSeekTo",e-1E-4);return}}a.fireEvent("RequestSeekTo",.994)}},[16,39]);a.KeyHandler.addCallback("killctx",function(a){a=new Event("killCTX",{bubbles:!0});document.body.dispatchEvent(a)},[27]);d=c.createElement("button");d.setAttribute("tabIndex",-1);d.className="pk_btn icon-previous2";d.innerHTML="<span>Seek Start (Shift + left arrow)</span>";l.appendChild(d);d.onclick=function(){a.fireEvent("RequestRegionClear");a.fireEvent("RequestSeekTo",0);this.blur()};d=c.createElement("button");
d.setAttribute("tabIndex",-1);d.className="pk_btn icon-next2";d.innerHTML="<span>Seek End (Shift + right arrow)</span>";d.onclick=function(){a.fireEvent("RequestRegionClear");a.fireEvent("RequestSeekTo",.996);this.blur()};l.appendChild(d);var t=c.createElement("button");t.setAttribute("tabIndex",-1);t.className="pk_btn icon-rec";t.innerHTML="<span>Record (R)</span>";t.onclick=function(){"disabled"!==this.getAttribute("disabled")&&a.fireEvent("RequestActionRecordToggle");this.blur()};a.listenFor("ErrorRec",
function(){t.style.opacity=.6;t.setAttribute("disabled","disabled")});l.appendChild(t);a.KeyHandler.addCallback("KeyRecR",function(b){a.InteractionHandler.on||t.click()},[82]);a.listenFor("DidActionRecordStart",function(){t.classList.add("pk_act")});a.listenFor("DidActionRecordStop",function(){t.classList.remove("pk_act")});a.KeyHandler.addCallback("KeyTab",function(b){!a.InteractionHandler.on&&PKAudioEditor.engine.is_ready&&a.fireEvent("RequestViewCenterToCursor")},[9]);d=c.createElement("div");
d.className="pk_timecontainer";var z=c.createElement("span");z.innerText="00:00:000";z.className="pk_timing";d.appendChild(z);this.timing_el=z;var u=c.createElement("span");u.innerText="00:00:000";u.className="pk_total_dur";d.appendChild(u);var A=c.createElement("span");A.innerText="00:00:000";A.className="pk_hover_dur";d.appendChild(A);setTimeout(function(){a.listenFor("DidZoom",function(a,b){b&&(A.textContent=e(PKAudioEditor.engine.wavesurfer.drawer.handleEvent(b)*PKAudioEditor.engine.wavesurfer.VisibleDuration+
PKAudioEditor.engine.wavesurfer.LeftProgress))});var b=0,d=c.getElementsByClassName("pk_av")[0];d.addEventListener("mousemove",function(a){var c=N.performance.now();50>c-b||(b=c,A.textContent=e(PKAudioEditor.engine.wavesurfer.drawer.handleEvent(a)*PKAudioEditor.engine.wavesurfer.VisibleDuration+PKAudioEditor.engine.wavesurfer.LeftProgress))},!1);d=PKAudioEditor._deps.ContextMenu(d);d.addOption("Select Visible View",function(b,c,d){a.fireEvent("RequestRegionSet")},!1);d.addOption("Reset Zoom",function(b){a.fireEvent("RequestZoomUI",
0)},!1);d.addOption("Set Volume/Gain",function(b){a.fireEvent("RequestFXUI_Gain")},!1);d.addOption("Copy",function(b){PKAudioEditor.engine.wavesurfer.regions.list[0]&&a.fireEvent("RequestActionCopy")},!1);d.addOption("Paste",function(b){f&&a.fireEvent("RequestActionPaste")},!1);d.addOption("Cut",function(b){PKAudioEditor.engine.wavesurfer.regions.list[0]&&a.fireEvent("RequestActionCut")},!1);d.addOption("Insert Silence",function(b){a.fireEvent("RequestFXUI_Silence",0)},!1);var f=!1;a.listenFor("DidSetClipboard",
function(a){f=a?!0:!1});d.onOpen=function(a,b){var c=b.childNodes;f||(c[4].className+=" pk_inact");PKAudioEditor.engine.wavesurfer.regions.list[0]||(c[3].className+=" pk_inact",c[5].className+=" pk_inact")}},1E3);a.listenFor("DidUpdateLen",function(a){u.textContent=e(a)});var w=0,v=0,O=0,L=document.querySelector(".pk_wavepoint");a.listenFor("DidAudioProcess",function(b){var c=b[0];b=b[1];var d=N.performance.now();50>d-O||(O=d,-1<c&&(z.innerText=e(c),1<PKAudioEditor.engine.wavesurfer.ZoomFactor&&(c/=
PKAudioEditor.engine.wavesurfer.getDuration(),L||(L=document.querySelector(".pk_wavepoint")),L.style.left=(100*c).toFixed(2)/1+"%")),b?0<b[0]?(a.footer.volumeGaugePeaker.className="pk_peaker pk_act",a.footer.volumeGaugeInner.style.transform="translate3d(100%,0,0)",w=100,a.footer.volumeGaugePeaker.setAttribute("title","Peak at "+PKAudioEditor.engine.wavesurfer.getCurrentTime().toFixed(2)),0<b[1]&&(a.footer.volumeGaugePeaker2.className="pk_peaker pk_act",a.footer.volumeGaugeInner2.style.transform="translate3d(100%,0,0)",
v=100,a.footer.volumeGaugePeaker2.setAttribute("title","Peak at "+PKAudioEditor.engine.wavesurfer.getCurrentTime().toFixed(2)))):0<b[1]?(a.footer.volumeGaugePeaker2.className="pk_peaker pk_act",a.footer.volumeGaugeInner2.style.transform="translate3d(100%,0,0)",v=100,a.footer.volumeGaugePeaker2.setAttribute("title","Peak at "+PKAudioEditor.engine.wavesurfer.getCurrentTime().toFixed(2))):(c=100+b[0],-100>c?w=0:(w+=(c-w)/4,isNaN(w)&&(w=0)),c=100+b[1],-100>c?v=0:(v+=(c-v)/4,isNaN(v)&&(v=0)),a.footer.volumeGaugeInner.style.transform=
"translate3d("+w+"%,0,0)",a.footer.volumeGaugeInner2.style.transform="translate3d("+v+"%,0,0)"):(a.footer.volumeGaugePeaker.className="pk_peaker",a.footer.volumeGaugePeaker2.className="pk_peaker",a.footer.volumeGaugeInner.style.transform="translate3d(0,0,0)",a.footer.volumeGaugeInner2.style.transform="translate3d(0,0,0)"))});var I=c.createElement("div");I.className="pk_actions";var D=c.createElement("button");D.setAttribute("tabIndex",-1);D.className="pk_btn icon-files-empty pk_inact";D.innerHTML=
"<span>Copy Selection (Shift + C)</span>";I.appendChild(D);D.onclick=function(){a.fireEvent("RequestActionCopy");this.blur()};a.listenFor("DidSetClipboard",function(a){a?E.classList.remove("pk_inact"):E.classList.add("pk_inact")});var E=c.createElement("button");E.setAttribute("focusable","false");E.className="pk_btn icon-file-text2 pk_inact";E.innerHTML="<span>Paste Selection (Shift + V)</span>";I.appendChild(E);E.onclick=function(){a.fireEvent("RequestActionPaste");this.blur()};var F=c.createElement("button");
F.setAttribute("tabIndex",-1);F.className="pk_btn icon-scissors pk_inact";F.innerHTML="<span>Cut Selection (Shift + X)</span>";I.appendChild(F);F.onclick=function(){a.fireEvent("RequestActionCut");this.blur()};var J=c.createElement("button");J.setAttribute("tabIndex",-1);J.className="pk_btn icon-silence";J.innerHTML="<span>Insert Silence (Shift + N)</span>";I.appendChild(J);a.KeyHandler.addCallback("KeyShiftN",function(b){a.InteractionHandler.on||J.click()},[16,78]);J.onclick=function(){a.fireEvent("RequestFXUI_Silence");
this.blur()};var K=c.createElement("div");K.className="pk_selection";K.innerHTML='<div class="pk_sellist"><span class="pk_title">Selection:</span><div><span class="title">Start:</span><span class="s_s pk_dat">-</span></div><div><span class="title">End:</span><span class="s_e pk_dat">-</span></div><div><span  class="title">Duration:</span><span class="s_d pk_dat">-</span></div></div>';var G=c.createElement("button");G.setAttribute("tabIndex",-1);G.className="pk_btn icon-clearsel pk_inact";G.innerHTML=
"<span>Clear Selection (~ tilda)</span>";var x=K.getElementsByClassName("pk_dat");a.listenFor("DidCreateRegion",function(a){D.classList.remove("pk_inact");F.classList.remove("pk_inact");G.classList.remove("pk_inact");a&&(x[0]||(x=document.querySelectorAll(".pk_sellist .pk_dat")),x[0].innerText=a.start.toFixed(3),x[1].innerText=a.end.toFixed(3),x[2].innerText=(a.end-a.start).toFixed(3))});a.listenFor("DidDestroyRegion",function(){D.classList.add("pk_inact");F.classList.add("pk_inact");G.classList.add("pk_inact");
x[0]||(x=document.querySelectorAll(".pk_sellist .pk_dat"));x[0].innerText="-";x[1].innerText="-";x[2].innerText="-"});G.onclick=function(){a.fireEvent("RequestRegionClear");this.blur()};K.appendChild(G);b.appendChild(d);a.listenFor("DidChanToggle",function(a,b){var c=PKAudioEditor.engine.wavesurfer.regions.list[0];c&&(1===b?(c.element.style.top="0",c.element.style.height="100%"):0===a?(c.element.style.top="50%",c.element.style.height="50%"):1===a&&(c.element.style.top="0",c.element.style.height="50%"))});
b.appendChild(h);h.appendChild(l);h.appendChild(I);b.appendChild(K);dragNDrop(c.getElementById("app"),"pk_overlay",function(a){PKAudioEditor.engine.LoadArrayBuffer(new Blob([a]))},"arrayBuffer")}P._deps.ui=function(a){this.el=a.el;this.el.className+=" pk_app"+(a.isMobile?" pk_mob":"");this.fireEvent=a.fireEvent;this.listenFor=a.listenFor;this.InteractionHandler={on:!1,by:null,arr:[],check:function(a){return this.on&&this.by!==a?!1:!0},checkAndSet:function(a){if(!this.check(a))return!1;this.on=!0;
this.by=a;return!0},forceSet:function(a){this.on&&this.arr.push({on:this.on,by:this.by});this.on=!0;this.by=a},forceUnset:function(a){this.check(a)&&((a=this.arr.pop())?(this.on=a.on,this.by=a.by):(this.on=!1,this.by=null))}};this.KeyHandler=new a._deps.keyhandler(this);this.TopHeader=new R(Q(a),this);this.Toolbar=new U(this);this.footer=new T(this,a);this.BarBtm=new S(this,a);this.Dock=function(c,b,h){a.fireEvent(c,b,h)};a.listenFor("ShowError",function(c){(new PKSimpleModal({title:"Oops! Something is not right",
clss:"pk_modal_anim",ondestroy:function(b){a.ui.InteractionHandler.on=!1;a.ui.KeyHandler.removeCallback("modalTempErr")},buttons:[],body:"<p>"+c+"</p>",setup:function(b){a.fireEvent("RequestPause");a.fireEvent("RequestRegionClear");a.ui.InteractionHandler.checkAndSet("modal");a.ui.KeyHandler.addCallback("modalTempErr",function(a){b.Destroy()},[27])}})).Show()})}})(window,document,PKAudioEditor);