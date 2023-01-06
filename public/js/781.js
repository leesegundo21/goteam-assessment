"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[781],{3195:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"#main-container[data-v-68e8f227]{background-color:#c2dcd8;background-image:url(/images/bg.jpg);background-position:50%;background-repeat:no-repeat;background-size:cover}",""]);const a=o},9018:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(5548),o=["type"];const a={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-poke-blue border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-poke-blue-600 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,n.renderSlot)(t.$slots,"default")],8,o)}}}},7887:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(5548),o=["value"];const a={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup:function(e){var t=(0,n.ref)(null);return(0,n.onMounted)((function(){t.value.hasAttribute("autofocus")&&t.value.focus()})),function(r,a){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"border-poke-yellow-300 focus:border-poke-yellow-300 focus:ring focus:ring-poke-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:a[0]||(a[0]=function(e){return r.$emit("update:modelValue",e.target.value)}),ref_key:"input",ref:t},null,40,o)}}}},1329:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5548),o={class:"block font-medium text-base text-gray-800"},a={key:0},l={key:1};const s={__name:"Label",props:["value"],setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("label",o,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",l,[(0,n.renderSlot)(t.$slots,"default")]))])}}}},3146:(e,t,r)=>{r.d(t,{Z:()=>F});var n=r(5548),o=r(9038),a=r(4790),l=r(7246),s=r(184),c=r(6081),u={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},i={class:"flex h-16 items-center justify-between"},d={class:"flex items-center"},m=(0,n.createElementVNode)("div",{class:"flex-shrink-0"},[(0,n.createElementVNode)("img",{class:"h-8",src:"/images/logo.png",alt:"Choose Your Pokemon"})],-1),f={class:"hidden md:block"},p={class:"ml-10 flex items-baseline space-x-4"},g={class:"hidden md:block"},x={class:"ml-4 flex items-center md:ml-6"},b=(0,n.createElementVNode)("span",{class:"sr-only"},"Open user menu",-1),h=["src"],k={class:"-mr-2 flex md:hidden"},y=(0,n.createElementVNode)("span",{class:"sr-only"},"Open main menu",-1),V={class:"space-y-1 px-2 pt-2 pb-3 sm:px-3"},v={class:"border-t border-gray-700 pt-4 pb-3"},N={class:"flex items-center px-5"},E={class:"flex-shrink-0"},w=["src"],B={class:"ml-3"},C={class:"text-base font-bold leading-none text-poke-blue pb-1"},_={class:"text-sm font-medium leading-none text-poke-blue-500"},S={class:"mt-3 space-y-1 px-2"};const U={__name:"Navbar",setup:function(e){var t=this,r=(0,n.reactive)({name:"",email:"",imageUrl:"/images/logo2.png"});(0,n.onBeforeMount)((function(){axios.get(route("get-user-information")).then((function(e){var t=e.data;r.name=t.user.name,r.email=t.user.email,r.imageUrl=t.user.image}))}));var U=[{name:"Pokemons",href:route("home"),component:"Home"},{name:"My Pokemons",href:route("user.dashboard"),component:"User/Dashboard"},{name:"Users",href:route("user.index"),component:"User/Index"}],Z=[{name:"Your Profile",href:route("user.profile"),method:"get"},{name:"Sign out",href:route("logout"),method:"post"}];return function(e,D){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(a.pJ),{as:"nav",class:"bg-poke-yellow"},{default:(0,n.withCtx)((function(e){var D=e.open;return[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",d,[m,(0,n.createElementVNode)("div",f,[(0,n.createElementVNode)("div",p,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(U,(function(e){return(0,n.createVNode)((0,n.unref)(o.rU),{key:e.name,href:e.href,class:(0,n.normalizeClass)([e.component==t.$page.component?"bg-poke-red text-white border border-poke-blue":"text-poke-blue hover:bg-blue-300 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"]),"aria-current":e.current?"page":void 0},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.name),1)]})),_:2},1032,["href","class","aria-current"])})),64))])])]),(0,n.createElementVNode)("div",g,[(0,n.createElementVNode)("div",x,[(0,n.createVNode)((0,n.unref)(l.v2),{as:"div",class:"relative ml-3"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",null,[(0,n.createVNode)((0,n.unref)(l.j2),{class:"flex max-w-xs items-center rounded-full bg-poke-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"},{default:(0,n.withCtx)((function(){return[b,(0,n.createElementVNode)("img",{class:"h-8 w-8 rounded-full bg-white",src:r.imageUrl,alt:""},null,8,h)]})),_:1})]),(0,n.createVNode)(n.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(l.sd),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(Z,(function(e){return(0,n.createVNode)((0,n.unref)(l.sN),{key:e.name},{default:(0,n.withCtx)((function(t){var r=t.active;return[(0,n.createVNode)((0,n.unref)(o.rU),{href:e.href,method:e.method,class:(0,n.normalizeClass)([r?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.name),1)]})),_:2},1032,["href","method","class"])]})),_:2},1024)})),64))]})),_:1})]})),_:1})]})),_:1})])]),(0,n.createElementVNode)("div",k,[(0,n.createVNode)((0,n.unref)(a.lG),{class:"inline-flex items-center justify-center rounded-md bg-poke-blue-500 p-2 text-gray-400 hover:bg-poke-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-poke-yellow-300"},{default:(0,n.withCtx)((function(){return[y,D?((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(c.Z),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(s.Z),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]})),_:2},1024)])])]),(0,n.createVNode)((0,n.unref)(a.V2),{class:"md:hidden"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",V,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(U,(function(e){return(0,n.createVNode)((0,n.unref)(a.lG),{key:e.name,as:"a",href:e.href,class:(0,n.normalizeClass)([e.component==t.$page.component?"bg-poke-red text-white border border-poke-blue":"text-poke-blue hover:bg-blue-300 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"]),"aria-current":e.current?"page":void 0},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.name),1)]})),_:2},1032,["href","class","aria-current"])})),64))]),(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("div",N,[(0,n.createElementVNode)("div",E,[(0,n.createElementVNode)("img",{class:"h-10 w-10 rounded-full bg-white",src:r.imageUrl,alt:""},null,8,w)]),(0,n.createElementVNode)("div",B,[(0,n.createElementVNode)("div",C,(0,n.toDisplayString)(r.name),1),(0,n.createElementVNode)("div",_,(0,n.toDisplayString)(r.email),1)])]),(0,n.createElementVNode)("div",S,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(Z,(function(e){return(0,n.createVNode)((0,n.unref)(a.lG),{key:e.name,as:"a",href:e.href,class:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.name),1)]})),_:2},1032,["href"])})),64))])])]})),_:1})]})),_:1})}}};var Z={id:"main-container",class:"min-h-full"};const D={__name:"Main",setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",Z,[(0,n.createVNode)(U),(0,n.renderSlot)(e.$slots,"default")])}}};var I=r(3379),j=r.n(I),L=r(3195),z={insert:"head",singleton:!1};j()(L.Z,z);L.Z.locals;const F=(0,r(3744).Z)(D,[["__scopeId","data-v-68e8f227"]])},4781:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var n=r(5548),o=r(9038),a=r(3146),l=(r(9680),r(9018)),s=r(7887),c=r(1329),u=r(6455),i=r.n(u),d={class:"mx-auto max-w-7xl h-screen py-6 sm:px-6 lg:px-8"},m={class:"p-4 pt-0"},f=["onSubmit"],p={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},g={class:"flex flex-col text-center items-center"},x=["src"],b=(0,n.createElementVNode)("label",{for:"uploadUserImage",class:"text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-base px-5 py-1 mt-8 text-center mr-2 mb-2 dark:focus:ring-yellow-900 cursor-pointer"},"Upload Image",-1),h={class:"flex flex-col justify-center mt-5"},k=["textContent"],y={class:"mt-4"},V=["textContent"],v={class:"mt-4"},N=["textContent"],E={class:"mt-4"},w=["textContent"],B={class:"mt-4"},C=["textContent"],_={class:"flex items-center justify-end mt-4"},S={layout:a.Z};const U=Object.assign(S,{__name:"Profile",props:{user:Object},setup:function(e){var t=e,r=(0,o.cI)({firstname:t.user.firstname,lastname:t.user.lastname,username:t.user.username,birthday:t.user.birthday,email:t.user.email,image:t.user.image,image_file:null}),a=function(){r.post(route("user.update"),{preserveScroll:!0,onSuccess:function(){return i().fire({title:"Success",text:"Successfully Updated Your Profile",icon:"success"})}})},u=function(e){var t=e.target.files[0];t.type.includes("image")?(r.image=URL.createObjectURL(t),r.image_file=t):i().fire({title:"Error",text:"Invalid Image Format",icon:"error"})};return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("main",null,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("form",{onSubmit:(0,n.withModifiers)(a,["prevent"])},[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",g,[(0,n.createElementVNode)("img",{class:"h-52 bg-gray-100",src:(0,n.unref)(r).image,alt:""},null,8,x),b,(0,n.createElementVNode)("input",{onChange:u,type:"file",name:"uploadUserImage",id:"uploadUserImage",class:"sr-only"},null,32)]),(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",null,[(0,n.createVNode)(c.Z,{for:"username",value:"Username"}),(0,n.createVNode)(s.Z,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:(0,n.unref)(r).username,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,n.unref)(r).username=e}),required:"",autocomplete:"username"},null,8,["modelValue"]),(0,n.unref)(r).errors.username?((0,n.openBlock)(),(0,n.createElementBlock)("small",{key:0,textContent:(0,n.toDisplayString)((0,n.unref)(r).errors.username),class:"text-red-500"},null,8,k)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",y,[(0,n.createVNode)(c.Z,{for:"firstname",value:"First Name"}),(0,n.createVNode)(s.Z,{id:"firstname",type:"text",class:"mt-1 block w-full",modelValue:(0,n.unref)(r).firstname,"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,n.unref)(r).firstname=e}),required:"",autofocus:"",autocomplete:"firstname"},null,8,["modelValue"]),(0,n.unref)(r).errors.firstname?((0,n.openBlock)(),(0,n.createElementBlock)("small",{key:0,textContent:(0,n.toDisplayString)((0,n.unref)(r).errors.firstname),class:"text-red-500"},null,8,V)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",v,[(0,n.createVNode)(c.Z,{for:"lastname",value:"Last Name"}),(0,n.createVNode)(s.Z,{id:"lastname",type:"text",class:"mt-1 block w-full",modelValue:(0,n.unref)(r).lastname,"onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,n.unref)(r).lastname=e}),required:"",autofocus:"",autocomplete:"lastname"},null,8,["modelValue"]),(0,n.unref)(r).errors.lastname?((0,n.openBlock)(),(0,n.createElementBlock)("small",{key:0,textContent:(0,n.toDisplayString)((0,n.unref)(r).errors.lastname),class:"text-red-500"},null,8,N)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",E,[(0,n.createVNode)(c.Z,{for:"birthday",value:"Birthday"}),(0,n.createVNode)(s.Z,{id:"birthday",type:"date",class:"mt-1 block w-full",modelValue:(0,n.unref)(r).birthday,"onUpdate:modelValue":t[3]||(t[3]=function(e){return(0,n.unref)(r).birthday=e}),required:"",autofocus:"",autocomplete:"birthday"},null,8,["modelValue"]),(0,n.unref)(r).errors.birthday?((0,n.openBlock)(),(0,n.createElementBlock)("small",{key:0,textContent:(0,n.toDisplayString)((0,n.unref)(r).errors.birthday),class:"text-red-500"},null,8,w)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",B,[(0,n.createVNode)(c.Z,{for:"email",value:"Email"}),(0,n.createVNode)(s.Z,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:(0,n.unref)(r).email,"onUpdate:modelValue":t[4]||(t[4]=function(e){return(0,n.unref)(r).email=e}),required:"",autocomplete:"email"},null,8,["modelValue"]),(0,n.unref)(r).errors.email?((0,n.openBlock)(),(0,n.createElementBlock)("small",{key:0,textContent:(0,n.toDisplayString)((0,n.unref)(r).errors.email),class:"text-red-500"},null,8,C)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",_,[(0,n.createVNode)(l.Z,{class:(0,n.normalizeClass)(["ml-4",{"opacity-25":(0,n.unref)(r).processing}]),disabled:(0,n.unref)(r).processing},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Update ")]})),_:1},8,["class","disabled"])])])])])],40,f)])])])])}}})}}]);