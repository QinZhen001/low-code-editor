import{g as x,c as h,n as p,m as et,a as L,b as f,d as q,e as m,f as nt,h as S,i as U,t as ot,j as it,k as A,l as at,$ as M,o as K,p as k,q as w,s as st,r as rt,u as lt}from"./index.01624653.js";import{l as ct}from"./shortcutKey.5cc5f734.js";function P(t){return t?"infinite":"no-infinite"}const D=async(t,n=[])=>{const e=i=>new Promise(a=>{const{animationTime:s,value:r="",isLoop:l}=i;t.style.setProperty("--time",s+"s"),t.classList.add(r,"animated",P(l));const c=()=>{t.removeEventListener("animationend",c),t.removeEventListener("animationcancel",c),t.classList.remove(r,"animated",P(l)),t.style.removeProperty("--time"),a()};t.addEventListener("animationend",c),t.addEventListener("animationcancel",c)}),o=n.length;for(let i=0;i<o;i++)await e(n[i])};function ut(t,n,e,o,i){const{symmetricPoint:a}=i;let s=x(n,a),r=h(n,s,-t.rotate),l=h(a,s,-t.rotate),c=l.x-r.x,u=l.y-r.y;if(o){c/u>e?(r.x+=Math.abs(c-u*e),c=u*e):(r.y+=Math.abs(u-c/e),u=c/e);const d=h(r,s,t.rotate);s=x(d,a),r=h(d,s,-t.rotate),l=h(a,s,-t.rotate),c=l.x-r.x,u=l.y-r.y}c>0&&u>0&&(t.width=Math.round(c),t.height=Math.round(u),t.left=Math.round(r.x),t.top=Math.round(r.y))}function dt(t,n,e,o,i){const{symmetricPoint:a}=i;let s=x(n,a),r=h(n,s,-t.rotate),l=h(a,s,-t.rotate),c=r.x-l.x,u=l.y-r.y;if(o){c/u>e?(r.x-=Math.abs(c-u*e),c=u*e):(r.y+=Math.abs(u-c/e),u=c/e);const d=h(r,s,t.rotate);s=x(d,a),r=h(d,s,-t.rotate),l=h(a,s,-t.rotate),c=r.x-l.x,u=l.y-r.y}c>0&&u>0&&(t.width=Math.round(c),t.height=Math.round(u),t.left=Math.round(l.x),t.top=Math.round(r.y))}function ht(t,n,e,o,i){const{symmetricPoint:a}=i;let s=x(n,a),r=h(a,s,-t.rotate),l=h(n,s,-t.rotate),c=l.x-r.x,u=l.y-r.y;if(o){c/u>e?(l.x-=Math.abs(c-u*e),c=u*e):(l.y-=Math.abs(u-c/e),u=c/e);const d=h(l,s,t.rotate);s=x(d,a),r=h(a,s,-t.rotate),l=h(d,s,-t.rotate),c=l.x-r.x,u=l.y-r.y}c>0&&u>0&&(t.width=Math.round(c),t.height=Math.round(u),t.left=Math.round(r.x),t.top=Math.round(r.y))}function pt(t,n,e,o,i){const{symmetricPoint:a}=i;let s=x(n,a),r=h(a,s,-t.rotate),l=h(n,s,-t.rotate),c=r.x-l.x,u=l.y-r.y;if(o){c/u>e?(l.x+=Math.abs(c-u*e),c=u*e):(l.y-=Math.abs(u-c/e),u=c/e);const d=h(l,s,t.rotate);s=x(d,a),r=h(a,s,-t.rotate),l=h(d,s,-t.rotate),c=r.x-l.x,u=l.y-r.y}c>0&&u>0&&(t.width=Math.round(c),t.height=Math.round(u),t.left=Math.round(l.x),t.top=Math.round(r.y))}function mt(t,n,e,o,i){const{symmetricPoint:a,curPoint:s}=i,r=h(n,s,-t.rotate),l=h({x:s.x,y:r.y},s,t.rotate),c=Math.sqrt((l.x-a.x)**2+(l.y-a.y)**2),u={x:l.x-(l.x-a.x)/2,y:l.y+(a.y-l.y)/2};let d=t.width;o&&(d=c*e),t.width=d,t.height=Math.round(c),t.top=Math.round(u.y-c/2),t.left=Math.round(u.x-t.width/2)}function vt(t,n,e,o,i){const{symmetricPoint:a,curPoint:s}=i,r=h(n,s,-t.rotate),l=h({x:r.x,y:s.y},s,t.rotate),c=Math.sqrt((l.x-a.x)**2+(l.y-a.y)**2),u={x:l.x-(l.x-a.x)/2,y:l.y+(a.y-l.y)/2};let d=t.height;o&&(d=c/e),t.height=d,t.width=Math.round(c),t.top=Math.round(u.y-t.height/2),t.left=Math.round(u.x-c/2)}function ft(t,n,e,o,i){const{symmetricPoint:a,curPoint:s}=i,r=h(n,s,-t.rotate),l=h({x:s.x,y:r.y},s,t.rotate),c=Math.sqrt((l.x-a.x)**2+(l.y-a.y)**2),u={x:l.x-(l.x-a.x)/2,y:l.y+(a.y-l.y)/2};let d=t.width;o&&(d=c*e),t.width=d,t.height=Math.round(c),t.top=Math.round(u.y-c/2),t.left=Math.round(u.x-t.width/2)}function _t(t,n,e,o,i){const{symmetricPoint:a,curPoint:s}=i,r=h(n,s,-t.rotate),l=h({x:r.x,y:s.y},s,t.rotate),c=Math.sqrt((l.x-a.x)**2+(l.y-a.y)**2),u={x:l.x-(l.x-a.x)/2,y:l.y+(a.y-l.y)/2};let d=t.height;o&&(d=c/e),t.height=d,t.width=Math.round(c),t.top=Math.round(u.y-t.height/2),t.left=Math.round(u.x-c/2)}const gt={lt:ut,t:mt,rt:dt,r:vt,rb:ht,b:ft,lb:pt,l:_t},xt=(t,n,e,o,i,a)=>{gt[t](n,e,o,i,a)};var yt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{on:{click:t.handleClick}},[e(t.config.component,{ref:"component",tag:"component",staticClass:"component",style:t.getStyle(t.config.style),attrs:{"prop-value":t.config.propValue,element:t.config}})],1)},bt=[];const Ct={mixins:[et],props:{config:{type:Object,require:!0,default:()=>{}}},components:{},data(){return{}},created(){},mounted(){D(this.$refs.component.$el,this.config.animations)},methods:{getStyle:L,handleClick(){const t=this.config.events;Object.keys(t).forEach(n=>{this[n](t[n])})}}},E={};var wt=p(Ct,yt,bt,!1,$t,"4135f03a",null,null);function $t(t){for(let n in E)this[n]=E[n]}var St=function(){return wt.exports}(),kt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.show?e("div",{staticClass:"bg"},[e("el-button",{staticClass:"close",on:{click:t.close}},[t._v("\u5173\u95ED")]),e("div",{staticClass:"canvas-container"},[e("div",{staticClass:"canvas",style:{width:t.changeStyleWithScale(t.canvasStyleData.width)+"px",height:t.changeStyleWithScale(t.canvasStyleData.height)+"px"}},t._l(t.componentData,function(o,i){return e("ComponentWrapper",{key:i,attrs:{config:o}})}),1)])],1):t._e()},Mt=[];const Lt={components:{ComponentWrapper:St},model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1}},data(){return{}},created(){},mounted(){},computed:f(["componentData","canvasStyleData"]),methods:{changeStyleWithScale:q,getStyle:L,close(){this.$emit("change",!1)}}},N={};var At=p(Lt,kt,Mt,!1,Dt,"3a9361c3",null,null);function Dt(t){for(let n in N)this[n]=N[n]}var Pt=function(){return At.exports}(),Et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"toolbar"},[e("el-button",{on:{click:t.undo}},[t._v("\u64A4\u6D88 undo")]),e("el-button",{on:{click:t.redo}},[t._v("\u91CD\u505A redo")]),e("label",{staticClass:"insert",attrs:{for:"input"}},[t._v("\u63D2\u5165\u56FE\u7247")]),e("input",{attrs:{id:"input",type:"file",hidden:""},on:{change:t.handleFileChange}}),e("el-button",{staticStyle:{"margin-left":"10px"},on:{click:t.preview}},[t._v("\u9884\u89C8")]),e("el-button",{on:{click:t.save}},[t._v("\u4FDD\u5B58")]),e("el-button",{on:{click:t.clearCanvas}},[t._v("\u6E05\u7A7A\u753B\u5E03")]),e("el-button",{attrs:{disabled:!t.areaData.components.length},on:{click:t.compose}},[t._v("\u7EC4\u5408")]),e("el-button",{attrs:{disabled:!t.curComponent||t.curComponent.isLock||t.curComponent.component!="Group"},on:{click:t.decompose}},[t._v(" \u62C6\u5206 ")]),e("el-button",{attrs:{disabled:!t.curComponent||t.curComponent.isLock},on:{click:t.lock}},[t._v("\u9501\u5B9A")]),e("el-button",{attrs:{disabled:!t.curComponent||!t.curComponent.isLock},on:{click:t.unlock}},[t._v("\u89E3\u9501")]),e("div",{staticClass:"canvas-config"},[e("span",[t._v("\u753B\u5E03\u5927\u5C0F")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.canvasStyleData.width,expression:"canvasStyleData.width"}],domProps:{value:t.canvasStyleData.width},on:{input:function(o){o.target.composing||t.$set(t.canvasStyleData,"width",o.target.value)}}}),e("span",[t._v("*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.canvasStyleData.height,expression:"canvasStyleData.height"}],domProps:{value:t.canvasStyleData.height},on:{input:function(o){o.target.composing||t.$set(t.canvasStyleData,"height",o.target.value)}}})]),e("div",{staticClass:"canvas-config"},[e("span",[t._v("\u753B\u5E03\u6BD4\u4F8B")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.scale,expression:"scale"}],domProps:{value:t.scale},on:{input:[function(o){o.target.composing||(t.scale=o.target.value)},t.handleScaleChange]}}),t._v(" % ")])],1),e("Preview",{on:{change:t.handlePreviewChange},model:{value:t.isShowPreview,callback:function(o){t.isShowPreview=o},expression:"isShowPreview"}})],1)},Nt=[];const Rt={components:{Preview:Pt},data(){return{isShowPreview:!1,needToChange:["top","left","width","height","fontSize"],scale:"100%",timer:null}},computed:f(["componentData","canvasStyleData","areaData","curComponent","curComponentIndex"]),created(){m.$on("preview",this.preview),m.$on("save",this.save),m.$on("clearCanvas",this.clearCanvas),this.scale=this.canvasStyleData.scale},methods:{format(t){return nt(t,S(parseFloat(this.scale),100))},getOriginStyle(t){return S(t,S(parseFloat(this.canvasStyleData.scale),100))},handleScaleChange(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.scale=~~this.scale||1;const t=U(this.componentData);t.forEach(n=>{Object.keys(n.style).forEach(e=>{this.needToChange.includes(e)&&(n.style[e]=this.format(this.getOriginStyle(n.style[e])))})}),this.$store.commit("setComponentData",t),this.$store.commit("setCurComponent",{component:t[this.curComponentIndex],index:this.curComponentIndex}),this.$store.commit("setCanvasStyle",{...this.canvasStyleData,scale:this.scale})},1e3)},lock(){this.$store.commit("lock")},unlock(){this.$store.commit("unlock")},compose(){this.$store.commit("compose"),this.$store.commit("recordSnapshot")},decompose(){this.$store.commit("decompose"),this.$store.commit("recordSnapshot")},undo(){this.$store.commit("undo")},redo(){this.$store.commit("redo")},handleFileChange(t){const n=t.target.files[0];if(!n.type.includes("image")){ot("\u53EA\u80FD\u63D2\u5165\u56FE\u7247");return}const e=new FileReader;e.onload=o=>{const i=o.target.result,a=new Image;a.onload=()=>{this.$store.commit("addComponent",{component:{...it,id:A(),component:"Picture",label:"\u56FE\u7247",icon:"",propValue:{url:i,flip:{horizontal:!1,vertical:!1}},style:{...at,top:0,left:0,width:a.width,height:a.height}}}),this.$store.commit("recordSnapshot"),M("#input").setAttribute("type","text"),M("#input").setAttribute("type","file")},a.src=i},e.readAsDataURL(n)},preview(){this.isShowPreview=!0,this.$store.commit("setEditMode","preview")},save(){localStorage.setItem("canvasData",JSON.stringify(this.componentData)),localStorage.setItem("canvasStyle",JSON.stringify(this.canvasStyleData)),this.$message.success("\u4FDD\u5B58\u6210\u529F")},clearCanvas(){this.$store.commit("setCurComponent",{component:null,index:null}),this.$store.commit("setComponentData",[]),this.$store.commit("recordSnapshot")},handlePreviewChange(){this.$store.commit("setEditMode","edit")}}},R={};var It=p(Rt,Et,Nt,!1,Tt,"2994cca9",null,null);function Tt(t){for(let n in R)this[n]=R[n]}var Ot=function(){return It.exports}(),jt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-list",on:{dragstart:t.handleDragStart}},t._l(t.componentList,function(o,i){return e("div",{key:i,staticClass:"list",attrs:{draggable:"","data-index":i}},[e("span",{staticClass:"iconfont",class:"icon-"+o.icon}),e("span",[t._v(t._s(o.label))])])}),0)},zt=[];const Ft={data(){return{componentList:K}},methods:{handleDragStart(t){t.dataTransfer.setData("index",t.target.dataset.index)}}},I={};var Xt=p(Ft,jt,zt,!1,Yt,"4757d6e4",null,null);function Yt(t){for(let n in I)this[n]=I[n]}var J=function(){return Xt.exports}(),Bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"grid",attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[e("defs",[e("pattern",{attrs:{id:"smallGrid",width:"7.236328125",height:"7.236328125",patternUnits:"userSpaceOnUse"}},[e("path",{attrs:{d:"M 7.236328125 0 L 0 0 0 7.236328125",fill:"none",stroke:"rgba(207, 207, 207, 0.3)","stroke-width":"1"}})]),e("pattern",{attrs:{id:"grid",width:"36.181640625",height:"36.181640625",patternUnits:"userSpaceOnUse"}},[e("rect",{attrs:{width:"36.181640625",height:"36.181640625",fill:"url(#smallGrid)"}}),e("path",{attrs:{d:"M 36.181640625 0 L 0 0 0 36.181640625",fill:"none",stroke:"rgba(186, 186, 186, 0.5)","stroke-width":"1"}})])]),e("rect",{attrs:{width:"100%",height:"100%",fill:"url(#grid)"}})])},Ht=[];const Vt={},T={};var Gt=p(Vt,Bt,Ht,!1,Wt,"5a5f3a06",null,null);function Wt(t){for(let n in T)this[n]=T[n]}var qt=function(){return Gt.exports}(),Ut=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.menuShow,expression:"menuShow"}],staticClass:"contextmenu",style:{top:t.menuTop+"px",left:t.menuLeft+"px"}},[e("ul",{on:{mouseup:t.handleMouseUp}},[t.curComponent?[t.curComponent.isLock?e("li",{on:{click:t.unlock}},[t._v("\u89E3\u9501")]):[e("li",{on:{click:t.copy}},[t._v("\u590D\u5236")]),e("li",{on:{click:t.paste}},[t._v("\u7C98\u8D34")]),e("li",{on:{click:t.cut}},[t._v("\u526A\u5207")]),e("li",{on:{click:t.deleteComponent}},[t._v("\u5220\u9664")]),e("li",{on:{click:t.lock}},[t._v("\u9501\u5B9A")]),e("li",{on:{click:t.topComponent}},[t._v("\u7F6E\u9876")]),e("li",{on:{click:t.bottomComponent}},[t._v("\u7F6E\u5E95")]),e("li",{on:{click:t.upComponent}},[t._v("\u4E0A\u79FB")]),e("li",{on:{click:t.downComponent}},[t._v("\u4E0B\u79FB")])]]:e("li",{on:{click:t.paste}},[t._v("\u7C98\u8D34")])],2)])},Kt=[];const Jt={data(){return{copyData:null}},computed:f(["menuTop","menuLeft","menuShow","curComponent"]),methods:{lock(){this.$store.commit("lock")},unlock(){this.$store.commit("unlock")},handleMouseUp(){this.$store.commit("setClickComponentStatus",!0)},cut(){this.$store.commit("cut")},copy(){this.$store.commit("copy")},paste(){this.$store.commit("paste",!0),this.$store.commit("recordSnapshot")},deleteComponent(){this.$store.commit("deleteComponent"),this.$store.commit("recordSnapshot")},upComponent(){this.$store.commit("upComponent"),this.$store.commit("recordSnapshot")},downComponent(){this.$store.commit("downComponent"),this.$store.commit("recordSnapshot")},topComponent(){this.$store.commit("topComponent"),this.$store.commit("recordSnapshot")},bottomComponent(){this.$store.commit("bottomComponent"),this.$store.commit("recordSnapshot")}}},O={};var Qt=p(Jt,Ut,Kt,!1,Zt,"6a2116bc",null,null);function Zt(t){for(let n in O)this[n]=O[n]}var te=function(){return Qt.exports}(),ee=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"shape",class:{active:t.active},on:{click:t.selectCurComponent,mousedown:t.handleMouseDownOnShape}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isActive(),expression:"isActive()"}],staticClass:"iconfont icon-xiangyouxuanzhuan",on:{mousedown:t.handleRotate}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.element.isLock,expression:"element.isLock"}],staticClass:"iconfont icon-suo"}),t._l(t.isActive()?t.pointList:[],function(o){return e("div",{key:o,staticClass:"shape-point",style:t.getPointStyle(o),on:{mousedown:function(i){return t.handleMouseDownOnPoint(o,i)}}})}),t._t("default")],2)},ne=[];const oe={props:{active:{type:Boolean,default:!1},element:{require:!0,type:Object,default:()=>{}},defaultStyle:{require:!0,type:Object,default:()=>{}},index:{require:!0,type:[Number,String],default:0}},data(){return{pointList:["lt","t","rt","r","rb","b","lb","l"],initialAngle:{lt:0,t:45,rt:90,r:135,rb:180,b:225,lb:270,l:315},angleToCursor:[{start:338,end:23,cursor:"nw"},{start:23,end:68,cursor:"n"},{start:68,end:113,cursor:"ne"},{start:113,end:158,cursor:"e"},{start:158,end:203,cursor:"se"},{start:203,end:248,cursor:"s"},{start:248,end:293,cursor:"sw"},{start:293,end:338,cursor:"w"}],cursors:{}}},computed:f(["curComponent","editor"]),mounted(){this.curComponent&&(this.cursors=this.getCursor()),m.$on("runAnimation",()=>{this.element==this.curComponent&&(console.log("this.$el",this.$el),D(this.$el,this.curComponent.animations))}),m.$on("stopAnimation",()=>{this.$el.classList.remove("animated","infinite")})},methods:{isActive(){return this.active&&!this.element.isLock},getPointStyle(t){const{width:n,height:e}=this.defaultStyle,o=/t/.test(t),i=/b/.test(t),a=/l/.test(t),s=/r/.test(t);let r=0,l=0;return t.length===2?(r=a?0:n,l=o?0:e):((o||i)&&(r=n/2,l=o?0:e),(a||s)&&(r=a?0:n,l=Math.floor(e/2))),{marginLeft:"-4px",marginTop:"-4px",left:`${r}px`,top:`${l}px`,cursor:this.cursors[t]}},getCursor(){const{angleToCursor:t,initialAngle:n,pointList:e,curComponent:o}=this,i=k(o.style.rotate),a={};let s=-1;return e.forEach(r=>{const l=k(n[r]+i),c=t.length;for(;;){s=(s+1)%c;const u=t[s];if(l<23||l>=338){a[r]="nw-resize";return}if(u.start<=l&&l<u.end){a[r]=u.cursor+"-resize";return}}}),a},handleRotate(t){this.$store.commit("setClickComponentStatus",!0),t.preventDefault(),t.stopPropagation();const n={...this.defaultStyle},e=t.clientY,o=t.clientX,i=n.rotate,a=this.$el.getBoundingClientRect(),s=a.left+a.width/2,r=a.top+a.height/2,l=Math.atan2(e-r,o-s)/(Math.PI/180);let c=!1;const u=v=>{c=!0;const _=v.clientX,g=v.clientY,y=Math.atan2(g-r,_-s)/(Math.PI/180);n.rotate=i+y-l,this.$store.commit("setShapeStyle",n)},d=()=>{c&&this.$store.commit("recordSnapshot"),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d),this.cursors=this.getCursor()};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},handleMouseDownOnShape(t){if(this.$store.commit("setInEditorStatus",!0),this.$store.commit("setClickComponentStatus",!0),this.element.component!="v-text"&&this.element.component!="rect-shape"&&t.preventDefault(),t.stopPropagation(),this.$store.commit("setCurComponent",{component:this.element,index:this.index}),this.element.isLock)return;this.cursors=this.getCursor();const n={...this.defaultStyle},e=t.clientY,o=t.clientX,i=Number(n.top),a=Number(n.left);let s=!1;const r=c=>{s=!0;const u=c.clientX,d=c.clientY;n.top=d-e+i,n.left=u-o+a,this.$store.commit("setShapeStyle",n),this.$nextTick(()=>{m.$emit("move",d-e>0,u-o>0)})},l=()=>{s&&this.$store.commit("recordSnapshot"),m.$emit("unmove"),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",l)},handleMouseDownOnPoint(t,n){n.stopPropagation(),n.preventDefault(),this.$store.commit("setInEditorStatus",!0),this.$store.commit("setClickComponentStatus",!0);const e={...this.defaultStyle},o=e.width/e.height,i={x:e.left+e.width/2,y:e.top+e.height/2},a=this.editor.getBoundingClientRect(),s=n.target.getBoundingClientRect(),r={x:Math.round(s.left-a.left+n.target.offsetWidth/2),y:Math.round(s.top-a.top+n.target.offsetHeight/2)},l={x:i.x-(r.x-i.x),y:i.y-(r.y-i.y)};let c=!1,u=!0;const d=this.isNeedLockProportion(),v=g=>{if(u){u=!1;return}c=!0;const y={x:g.clientX-a.left,y:g.clientY-a.top};xt(t,e,y,o,d,{center:i,curPoint:r,symmetricPoint:l}),this.$store.commit("setShapeStyle",e)},_=()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",_),c&&this.$store.commit("recordSnapshot")};document.addEventListener("mousemove",v),document.addEventListener("mouseup",_)},selectCurComponent(t){t.stopPropagation(),t.preventDefault(),this.$store.commit("hideContextMenu")},isNeedLockProportion(){if(this.element.componnet!="Group")return!1;const t=[0,90,180,360];for(const n of this.element.propValue)if(!t.includes(k(parseInt(n.style.rotate))))return!0;return!1}}},j={};var ie=p(oe,ee,ne,!1,ae,"47a44cea",null,null);function ae(t){for(let n in j)this[n]=j[n]}var se=function(){return ie.exports}(),re=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mark-line"},t._l(t.lines,function(o){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.lineStatus[o]||!1,expression:"lineStatus[line] || false"}],key:o,ref:o,refInFor:!0,staticClass:"line",class:o.includes("x")?"xline":"yline"})}),0)},le=[];const ce={data(){return{lines:["xt","xc","xb","yl","yc","yr"],diff:3,lineStatus:{xt:!1,xc:!1,xb:!1,yl:!1,yc:!1,yr:!1}}},computed:f(["componentData","curComponent"]),mounted(){m.$on("move",(t,n)=>{this.showLine(t,n)}),m.$on("unmove",()=>{this.hideLine()})},methods:{hideLine(){Object.keys(this.lineStatus).forEach(t=>{this.lineStatus[t]=!1})},showLine(t,n){const e=this.$refs,o=this.componentData,i=w(this.curComponent.style),a=i.width/2,s=i.height/2;this.hideLine(),o.forEach(r=>{if(r==this.curComponent)return;const l=w(r.style),{top:c,left:u,bottom:d,right:v}=l,_=l.width/2,g=l.height/2,y={top:[{isNearly:this.isNearly(i.top,c),lineNode:e.xt[0],line:"xt",dragShift:c,lineShift:c},{isNearly:this.isNearly(i.bottom,c),lineNode:e.xt[0],line:"xt",dragShift:c-i.height,lineShift:c},{isNearly:this.isNearly(i.top+s,c+g),lineNode:e.xc[0],line:"xc",dragShift:c+g-s,lineShift:c+g},{isNearly:this.isNearly(i.top,d),lineNode:e.xb[0],line:"xb",dragShift:d,lineShift:d},{isNearly:this.isNearly(i.bottom,d),lineNode:e.xb[0],line:"xb",dragShift:d-i.height,lineShift:d}],left:[{isNearly:this.isNearly(i.left,u),lineNode:e.yl[0],line:"yl",dragShift:u,lineShift:u},{isNearly:this.isNearly(i.right,u),lineNode:e.yl[0],line:"yl",dragShift:u-i.width,lineShift:u},{isNearly:this.isNearly(i.left+a,u+_),lineNode:e.yc[0],line:"yc",dragShift:u+_-a,lineShift:u+_},{isNearly:this.isNearly(i.left,v),lineNode:e.yr[0],line:"yr",dragShift:v,lineShift:v},{isNearly:this.isNearly(i.right,v),lineNode:e.yr[0],line:"yr",dragShift:v-i.width,lineShift:v}]},$=[],{rotate:tt}=this.curComponent.style;Object.keys(y).forEach(C=>{y[C].forEach(b=>{!b.isNearly||(this.$store.commit("setShapeSingleStyle",{key:C,value:tt!=0?this.translatecurComponentShift(C,b,i):b.dragShift}),b.lineNode.style[C]=`${b.lineShift}px`,$.push(b.line))})}),$.length&&this.chooseTheTureLine($,t,n)})},isNearly(t,n){return Math.abs(t-n)<=this.diff},translatecurComponentShift(t,n,e){const{width:o,height:i}=this.curComponent.style;return console.log("translatecurComponentShift",i,e.height),t=="top"?Math.round(n.dragShift-(i-e.height)/2):Math.round(n.dragShift-(o-e.width)/2)},chooseTheTureLine(t,n,e){e?t.includes("yr")?this.lineStatus.yr=!0:t.includes("yc")?this.lineStatus.yc=!0:t.includes("yl")&&(this.lineStatus.yl=!0):t.includes("yl")?this.lineStatus.yl=!0:t.includes("yc")?this.lineStatus.yc=!0:t.includes("yr")&&(this.lineStatus.yr=!0),n?t.includes("xb")?this.lineStatus.xb=!0:t.includes("xc")?this.lineStatus.xc=!0:t.includes("xt")&&(this.lineStatus.xt=!0):t.includes("xt")?this.lineStatus.xt=!0:t.includes("xc")?this.lineStatus.xc=!0:t.includes("xb")&&(this.lineStatus.xb=!0)}}},z={};var ue=p(ce,re,le,!1,de,null,null,null);function de(t){for(let n in z)this[n]=z[n]}var he=function(){return ue.exports}(),pe=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"area",style:{left:t.start.x+"px",top:t.start.y+"px",width:t.width+"px",height:t.height+"px"}})},me=[];const ve={props:{start:{type:Object,default:()=>{}},width:{type:Number,default:0},height:{type:Number,default:0}}},F={};var fe=p(ve,pe,me,!1,_e,"38da664e",null,null);function _e(t){for(let n in F)this[n]=F[n]}var ge=function(){return fe.exports}(),xe=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"editor",class:{edit:t.isEdit},style:{width:t.changeStyleWithScale(t.canvasStyleData.width)+"px",height:t.changeStyleWithScale(t.canvasStyleData.height)+"px"},attrs:{id:"editor"},on:{contextmenu:t.handleContextMenu,mousedown:t.handleMouseDown}},[e("Grid"),t._l(t.componentData,function(o,i){return e("Shape",{key:o.id,class:{lock:o.isLock},style:t.getShapeStyle(o.style),attrs:{"default-style":o.style,active:o.id==(t.curComponent||{}).id,element:o,index:i}},[o.component!="v-text"?e(o.component,{tag:"component",staticClass:"component",style:t.getComponentStyle(o.style),attrs:{id:"component"+o.id,"prop-value":o.propValue,element:o}}):e(o.component,{tag:"component",staticClass:"component",style:t.getComponentStyle(o.style),attrs:{id:"component"+o.id,"prop-value":o.propValue,element:o},on:{input:t.handleInput}})],1)}),e("ContextMenu"),e("MarkLine"),e("Area",{directives:[{name:"show",rawName:"v-show",value:t.isShowArea,expression:"isShowArea"}],attrs:{start:t.start,width:t.width,height:t.height}})],2)},ye=[];const be=(t,n)=>{console.log("element, text",t,n);let{lineHeight:e,fontSize:o,height:i}=t.style;e===""&&(e=1.5);const a=(n.split("<br>").length-1)*e*o;return i>a?i:a},Ce={components:{Grid:qt,ContextMenu:te,MarkLine:he,Shape:se,ComponentList:J,Area:ge},props:{isEdit:{type:Boolean,default:!0}},data(){return{editorX:0,editorY:0,start:{x:0,y:0},width:0,height:0,isShowArea:!1}},computed:f(["componentData","curComponent","canvasStyleData","editor"]),mounted(){this.$store.commit("getEditor"),m.$on("hideArea",()=>{this.hideArea()})},methods:{changeStyleWithScale:q,handleInput(t,n){this.$store.commit("setShapeStyle",{height:be(t,n)})},handleContextMenu(t){t.stopPropagation(),t.preventDefault();let n=t.target,e=t.offsetY,o=t.offsetX;for(;n instanceof SVGElement;)n=n.parentNode;for(;!n.className.includes("editor");)o+=n.offsetLeft,e+=n.offsetTop,n=n.parentNode;this.$store.commit("showContextMenu",{top:e,left:o})},handleMouseDown(t){(!this.curComponent||this.curComponent.component!="v-text"&&this.curComponent.component!="rect-shape")&&t.preventDefault(),this.hideArea();const n=this.editor.getBoundingClientRect();this.editorX=n.x,this.editorY=n.y;const e=t.clientX,o=t.clientY;this.start.x=e-this.editorX,this.start.y=o-this.editorY,this.isShowArea=!0;const i=s=>{this.width=Math.abs(s.clientX-e),this.height=Math.abs(s.clientY-o),s.clientX<e&&(this.start.x=s.clientX-this.editorX),s.clientY<o&&(this.start.y=s.clientY-this.editorY)},a=s=>{if(document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",a),s.clientX==e&&s.clientY==o){this.hideArea();return}this.createGroup()};document.addEventListener("mousemove",i),document.addEventListener("mouseup",a)},createGroup(){const t=this.getSelectArea();if(console.log("createGroup",t),t.length<=1){this.hideArea();return}let n=1/0,e=1/0,o=-1/0,i=-1/0;t.forEach(a=>{let s={};a.component==="Group"?a.propValue.forEach(r=>{const l=M(`#component${r.id}`).getBoundingClientRect();s.left=l.left-this.editorX,s.top=l.top-this.editorY,s.right=l.right-this.editorX,s.bottom=l.bottom-this.editorY,s.left<e&&(e=s.left),s.top<n&&(n=s.top),s.right>o&&(o=s.right),s.bottom>i&&(i=s.bottom)}):s=w(a.style),s.left<e&&(e=s.left),s.top<n&&(n=s.top),s.right>o&&(o=s.right),s.bottom>i&&(i=s.bottom)}),this.start.x=e,this.start.y=n,this.width=o-e,this.height=i-n,this.$store.commit("setAreaData",{style:{left:e,top:n,width:this.width,height:this.height},components:t})},getSelectArea(){const t=[],{x:n,y:e}=this.start;return this.componentData.forEach(o=>{if(o.isLock)return;const{left:i,top:a,width:s,height:r}=w(o.style);console.log("left",i),console.log("top",a),console.log("width",s),console.log("height",r),n<=i&&e<=a&&i+s<=n+this.width&&a+r<=e+this.height&&t.push(o)}),t},hideArea(){this.isShowArea=!1,this.width=0,this.height=0,this.$store.commit("setAreaData",{style:{left:0,top:0,width:0,height:0},components:[]})},getShapeStyle(t){const n={};return["width","height","top","left","rotate"].forEach(e=>{e!="rotate"?n[e]=t[e]+"px":n.transform="rotate("+t[e]+"deg)"}),n},getComponentStyle(t){return L(t,["top","left","width","height","rotate"])}}},X={};var we=p(Ce,xe,ye,!1,$e,"8fa4246e",null,null);function $e(t){for(let n in X)this[n]=X[n]}var Se=function(){return we.exports}(),ke=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"attr-list"},[e("el-form",[t._l(t.styleKeys,function(o,i){var a=o.key,s=o.label;return e("el-form-item",{key:i,attrs:{label:s}},[a=="borderColor"?e("el-color-picker",{model:{value:t.curComponent.style[a],callback:function(r){t.$set(t.curComponent.style,a,r)},expression:"curComponent.style[key]"}}):a=="color"?e("el-color-picker",{model:{value:t.curComponent.style[a],callback:function(r){t.$set(t.curComponent.style,a,r)},expression:"curComponent.style[key]"}}):a=="backgroundColor"?e("el-color-picker",{model:{value:t.curComponent.style[a],callback:function(r){t.$set(t.curComponent.style,a,r)},expression:"curComponent.style[key]"}}):t.selectKey.includes(a)?e("el-select",{model:{value:t.curComponent.style[a],callback:function(r){t.$set(t.curComponent.style,a,r)},expression:"curComponent.style[key]"}},[a=="textAlign"?t._l(t.textAlignOptions,function(r){return e("el-option",{key:r.value,attrs:{label:r.label,value:r.value}})}):a=="borderStyle"?t._l(t.borderStyleOptions,function(r){return e("el-option",{key:r.value,attrs:{label:r.label,value:r.value}})}):t._l(t.verticalAlignOptions,function(r){return e("el-option",{key:r.value,attrs:{label:r.label,value:r.value}})})],2):e("el-input",{attrs:{type:"number"},model:{value:t.curComponent.style[a],callback:function(r){t.$set(t.curComponent.style,a,t._n(r))},expression:"curComponent.style[key]"}})],1)}),t.curComponent&&!t.excludes.includes(t.curComponent.component)?e("el-form-item",{attrs:{label:"\u5185\u5BB9"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.curComponent.propValue,callback:function(o){t.$set(t.curComponent,"propValue",o)},expression:"curComponent.propValue"}})],1):t._e(),t.curComponent&&t.curComponent.component==="Picture"?e("el-form-item",{attrs:{label:"\u955C\u50CF\u7FFB\u8F6C"}},[e("div",{staticStyle:{clear:"both"}},[e("el-checkbox",{attrs:{label:"horizontal"},model:{value:t.curComponent.propValue.flip.horizontal,callback:function(o){t.$set(t.curComponent.propValue.flip,"horizontal",o)},expression:"curComponent.propValue.flip.horizontal"}},[t._v("\u6C34\u5E73\u7FFB\u8F6C")]),e("el-checkbox",{attrs:{label:"vertical"},model:{value:t.curComponent.propValue.flip.vertical,callback:function(o){t.$set(t.curComponent.propValue.flip,"vertical",o)},expression:"curComponent.propValue.flip.vertical"}},[t._v("\u5782\u76F4\u7FFB\u8F6C")])],1)]):t._e()],2)],1)},Me=[];const Le={components:{},data(){return{excludes:["Picture","Group"],textAlignOptions:[{label:"\u5DE6\u5BF9\u9F50",value:"left"},{label:"\u5C45\u4E2D",value:"center"},{label:"\u53F3\u5BF9\u9F50",value:"right"}],borderStyleOptions:[{label:"\u5B9E\u7EBF",value:"solid"},{label:"\u865A\u7EBF",value:"dashed"}],verticalAlignOptions:[{label:"\u4E0A\u5BF9\u9F50",value:"top"},{label:"\u5C45\u4E2D\u5BF9\u9F50",value:"middle"},{label:"\u4E0B\u5BF9\u9F50",value:"bottom"}],selectKey:["textAlign","borderStyle","verticalAlign"],styleData:st}},created(){},mounted(){},methods:{},computed:{styleKeys(){if(this.curComponent){const t=Object.keys(this.curComponent.style);return this.styleData.filter(n=>t.includes(n.key))}return[]},curComponent(){return this.$store.state.curComponent}}},Y={};var Ae=p(Le,ke,Me,!1,De,"31868d65",null,null);function De(t){for(let n in Y)this[n]=Y[n]}var Pe=function(){return Ae.exports}(),Ee=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.show?e("div",{staticClass:"modal-bg",on:{click:t.hide}},[e("div",{staticClass:"fadeInLeft animated modal",on:{click:t.stopPropagation}},[t._t("default")],2)]):t._e()},Ne=[];const Re={model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1}},components:{},data(){return{}},created(){},mounted(){},methods:{hide(){this.$emit("change")},stopPropagation(t){t.stopPropagation()}}},B={};var Ie=p(Re,Ee,Ne,!1,Te,"e1764b10",null,null);function Te(t){for(let n in B)this[n]=B[n]}var Q=function(){return Ie.exports}(),Oe=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-dialog",{attrs:{title:`${t.config.label} \u52A8\u753B\u914D\u7F6E`,visible:t.centerDialogVisible,width:"30%",center:""},on:{close:t.handleCloseModal}},[e("div",{staticClass:"time"},[t._v(" \u52A8\u753B\u65F6\u957F\uFF1A"),e("el-input-number",{attrs:{"controls-position":"right",min:.1,precision:2,step:.01},model:{value:t.config.animationTime,callback:function(o){t.$set(t.config,"animationTime",o)},expression:"config.animationTime"}})],1),e("div",{staticClass:"loop"},[t._v(" \u662F\u5426\u5FAA\u73AF\uFF1A"),e("el-switch",{attrs:{"active-text":"\u662F","inactive-text":"\u5426",disabled:t.isDisabled},model:{value:t.config.isLoop,callback:function(o){t.$set(t.config,"isLoop",o)},expression:"config.isLoop"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.handleCloseModal}},[t._v("\u53D6 \u6D88")]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleSaveSetting}},[t._v("\u786E \u5B9A")])],1)])},je=[];const ze={name:"AnimationSettingModal",props:{curIndex:{type:Number,default:0}},components:{},data(){return{centerDialogVisible:!0,config:{}}},computed:{...f(["curComponent"]),isDisabled(){return this.curComponent.animations.length>1}},created(){const{label:t,animationTime:n,isLoop:e=!1,value:o}=this.curComponent.animations[this.curIndex]||{};this.config={animationTime:n,label:t,isLoop:e,value:o}},mounted(){},methods:{handleCloseModal(){this.$emit("close")},handleSaveSetting(){const{isLoop:t}=this.config;this.$store.commit("alterAnimation",{index:this.curIndex,data:{animationTime:this.config.animationTime,isLoop:t}}),m.$emit("stopAnimation"),this.handleCloseModal()}}},H={};var Fe=p(ze,Oe,je,!1,Xe,"78a8f4e4",null,null);function Xe(t){for(let n in H)this[n]=H[n]}var Ye=function(){return Fe.exports}(),Be=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"animation-list"},[e("div",{staticClass:"div-animation"},[e("el-button",{on:{click:function(o){t.isShowAnimation=!0}}},[t._v("\u6DFB\u52A0\u52A8\u753B")]),e("el-button",{on:{click:t.previewAnimate}},[t._v("\u9884\u89C8\u52A8\u753B")]),e("div",t._l(t.curComponent.animations,function(o,i){return e("el-tag",{key:i,attrs:{closable:""},on:{close:function(a){return t.removeAnimation(i)}}},[t._v(" "+t._s(o.label)+" "),e("i",{staticClass:"cursor el-icon-setting",on:{click:function(a){return t.handleAnimationSetting(i)}}})])}),1)],1),e("Modal",{model:{value:t.isShowAnimation,callback:function(o){t.isShowAnimation=o},expression:"isShowAnimation"}},[e("el-tabs",{model:{value:t.animationActiveName,callback:function(o){t.animationActiveName=o},expression:"animationActiveName"}},t._l(t.animationClassData,function(o){return e("el-tab-pane",{key:o.label,attrs:{label:o.label,name:o.label}},[e("el-scrollbar",{staticClass:"animate-container"},t._l(o.children,function(i){return e("div",{key:i.value,ref:i.value,refInFor:!0,staticClass:"animate",on:{mouseenter:function(a){return t.runAnimation(i)},click:function(a){return t.addAnimation(i)}}},[e("div",[t._v(" "+t._s(i.label)+" ")])])}),0)],1)}),1)],1),t.isShowAnimationSetting?e("AnimationSettingModal",{attrs:{"cur-index":t.curIndex},on:{close:function(o){t.isShowAnimationSetting=!1}}}):t._e()],1)},He=[];const Ve={components:{Modal:Q,AnimationSettingModal:Ye},data(){return{isShowAnimation:!1,hoverPreviewAnimate:"",animationActiveName:"\u8FDB\u5165",animationClassData:rt,showAnimatePanel:!1,timer:null,isShowAnimationSetting:!1,curIndex:0}},computed:f(["curComponent"]),created(){},mounted(){},methods:{addAnimation(t){this.$store.commit("addAnimation",t),this.isShowAnimation=!1},previewAnimate(){m.$emit("runAnimation")},removeAnimation(t){this.$store.commit("removeAnimation",t),this.curComponent.animations.length||m.$emit("stopAnimation")},handleAnimationSetting(t){this.isShowAnimationSetting=!0,this.curIndex=t},async runAnimation(t){t.pending||(t.pending=!0,await D(this.$refs[t.value][0],[t]),setTimeout(()=>{t.pending=!1},100))}}},V={};var Ge=p(Ve,Be,He,!1,We,null,null,null);function We(t){for(let n in V)this[n]=V[n]}var qe=function(){return Ge.exports}(),Ue=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"event-list"},[e("div",{staticClass:"div-events"},[e("el-button",{on:{click:function(o){t.isShowEvent=!0}}},[t._v("\u6DFB\u52A0\u4E8B\u4EF6")]),e("div",t._l(Object.keys(t.curComponent.events),function(o){return e("el-tag",{key:o,attrs:{closable:""},on:{close:function(i){return t.removeEvent(o)}}},[t._v(" "+t._s(o)+" ")])}),1)],1),e("Modal",{model:{value:t.isShowEvent,callback:function(o){t.isShowEvent=o},expression:"isShowEvent"}},[e("el-tabs",{model:{value:t.eventActiveName,callback:function(o){t.eventActiveName=o},expression:"eventActiveName"}},t._l(t.eventList,function(o){return e("el-tab-pane",{key:o.key,staticStyle:{padding:"0 20px"},attrs:{label:o.label,name:o.key}},[o.key=="redirect"?e("el-input",{attrs:{type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5B8C\u6574\u7684 URL"},nativeOn:{keydown:function(i){i.stopPropagation()}},model:{value:o.param,callback:function(i){t.$set(o,"param",i)},expression:"item.param"}}):t._e(),o.key=="alert"?e("el-input",{attrs:{type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u8981 alert \u7684\u5185\u5BB9"},nativeOn:{keydown:function(i){i.stopPropagation()}},model:{value:o.param,callback:function(i){t.$set(o,"param",i)},expression:"item.param"}}):t._e(),e("el-button",{staticStyle:{"margin-top":"20px"},on:{click:function(i){return t.addEvent(o.key,o.param)}}},[t._v("\u786E\u5B9A")])],1)}),1)],1)],1)},Ke=[];const Je={components:{Modal:Q},data(){return{isShowEvent:!1,eventURL:"",eventActiveName:"redirect",eventList:lt}},created(){},mounted(){},computed:f(["curComponent"]),methods:{addEvent(t,n){this.isShowEvent=!1,this.$store.commit("addEvent",{event:t,param:n})},removeEvent(t){this.$store.commit("removeEvent",t)}}},G={};var Qe=p(Je,Ue,Ke,!1,Ze,"60e8e256",null,null);function Ze(t){for(let n in G)this[n]=G[n]}var tn=function(){return Qe.exports}(),en=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("Toolbar"),e("main",[e("section",{staticClass:"left"},[e("ComponentList")],1),e("section",{staticClass:"center"},[e("div",{staticClass:"content",on:{drop:t.handleDrop,dragover:t.handleDragOver,mousedown:t.handleMouseDown,mouseup:t.deselectCurComponent}},[e("Editor")],1)]),e("section",{staticClass:"right"},[e("el-tabs",{model:{value:t.activeName,callback:function(o){t.activeName=o},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"\u5C5E\u6027",name:"attr"}},[t.curComponent?e("AttrList"):e("p",{staticClass:"placeholder"},[t._v("\u8BF7\u9009\u62E9\u7EC4\u4EF6")])],1),e("el-tab-pane",{attrs:{label:"\u52A8\u753B",name:"animation"}},[t.curComponent?e("AnimationList"):e("p",{staticClass:"placeholder"},[t._v("\u8BF7\u9009\u62E9\u7EC4\u4EF6")])],1),e("el-tab-pane",{attrs:{label:"\u4E8B\u4EF6",name:"events"}},[t.curComponent?e("EventList"):e("p",{staticClass:"placeholder"},[t._v("\u8BF7\u9009\u62E9\u7EC4\u4EF6")])],1)],1)],1)])],1)},nn=[];const Z=t=>(t.forEach(n=>{n.id=A(),n.component==="Group"&&Z(n.propValue)}),t),on={components:{Toolbar:Ot,ComponentList:J,Editor:Se,AttrList:Pe,AnimationList:qe,EventList:tn},data(){return{activeName:"attr",reSelectAnimateIndex:void 0}},computed:f(["componentData","curComponent","isClickComponent","canvasStyleData","editor"]),created(){this.restore(),ct()},methods:{restore(){const t=localStorage.getItem("canvasData"),n=localStorage.getItem("canvasStyle");t&&this.$store.commit("setComponentData",Z(JSON.parse(t))),n&&this.$store.commit("setCanvasStyle",JSON.parse(n))},handleDrop(t){t.preventDefault(),t.stopPropagation();const n=t.dataTransfer.getData("index"),e=this.editor.getBoundingClientRect();if(n){const o=U(K[n]);o.style.top=t.clientY-e.y,o.style.left=t.clientX-e.x,o.id=A(),this.$store.commit("addComponent",{component:o}),this.$store.commit("recordSnapshot")}},handleDragOver(t){t.preventDefault(),t.dataTransfer.dropEffect="copy"},handleMouseDown(t){t.stopPropagation(),this.$store.commit("setClickComponentStatus",!1),this.$store.commit("setInEditorStatus",!0)},deselectCurComponent(t){this.isClickComponent||this.$store.commit("setCurComponent",{component:null,index:null}),t.button!=2&&this.$store.commit("hideContextMenu")}}},W={};var an=p(on,en,nn,!1,sn,null,null,null);function sn(t){for(let n in W)this[n]=W[n]}var cn=function(){return an.exports}();export{cn as default};
