"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97],{7209:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(3645),n=r.n(o)()((function(e){return e[1]}));n.push([e.id,"#main-container-guest[data-v-787e8714]{background-color:#c2dcd8;background-image:url(/images/bg.jpg);background-position:50%;background-repeat:no-repeat;background-size:cover}",""]);const a=n},9018:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(5548),n=["type"];const a={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-poke-blue border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-poke-blue-600 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,o.renderSlot)(t.$slots,"default")],8,n)}}}},7887:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(5548),n=["value"];const a={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup:function(e){var t=(0,o.ref)(null);return(0,o.onMounted)((function(){t.value.hasAttribute("autofocus")&&t.value.focus()})),function(r,a){return(0,o.openBlock)(),(0,o.createElementBlock)("input",{class:"border-poke-yellow-300 focus:border-poke-yellow-300 focus:ring focus:ring-poke-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:a[0]||(a[0]=function(e){return r.$emit("update:modelValue",e.target.value)}),ref_key:"input",ref:t},null,40,n)}}}},1329:(e,t,r)=>{r.d(t,{Z:()=>u});var o=r(5548),n={class:"block font-medium text-base text-gray-800"},a={key:0},l={key:1};const u={__name:"Label",props:["value"],setup:function(e){return function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)("label",n,[e.value?((0,o.openBlock)(),(0,o.createElementBlock)("span",a,(0,o.toDisplayString)(e.value),1)):((0,o.openBlock)(),(0,o.createElementBlock)("span",l,[(0,o.renderSlot)(t.$slots,"default")]))])}}}},5414:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(5548),n=r(9038),a={key:0},l=(0,o.createElementVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),u={class:"mt-3 list-disc list-inside text-sm text-red-600"};const s={__name:"ValidationErrors",setup:function(e){var t=(0,o.computed)((function(){return(0,n.qt)().props.value.errors})),r=(0,o.computed)((function(){return Object.keys(t.value).length>0}));return function(e,n){return(0,o.unref)(r)?((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[l,(0,o.createElementVNode)("ul",u,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(t),(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:t},(0,o.toDisplayString)(e),1)})),128))])])):(0,o.createCommentVNode)("",!0)}}}},2154:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(5548),n=(r(9038),{id:"main-container-guest",class:"min-h-screen flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100"}),a={class:"w-11/12 sm:max-w-md mx-4 mt-6 px-6 py-4 bg-white/30 shadow-md overflow-hidden sm:rounded-lg backdrop-blur-sm"};const l={__name:"Guest",setup:function(e){return function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("div",a,[(0,o.renderSlot)(e.$slots,"default")])])}}};var u=r(3379),s=r.n(u),c=r(7209),d={insert:"head",singleton:!1};s()(c.Z,d);c.Z.locals;const i=(0,r(3744).Z)(l,[["__scopeId","data-v-787e8714"]])},97:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var o=r(5548),n=r(9018),a=r(2154),l=r(7887),u=r(1329),s=r(5414),c=r(9038),d=["onSubmit"],i={class:"m-auto text-center mb-2"},m=(0,o.createElementVNode)("img",{class:"w-52 m-auto",src:"/images/logo.png",alt:""},null,-1),f={class:"mt-4"},p={class:"mt-4"},V={class:"mt-4"},b={class:"mt-4"},g={class:"mt-4"},k={class:"mt-4"},v={class:"flex items-center justify-end mt-4"},w={layout:a.Z};const y=Object.assign(w,{__name:"Register",setup:function(e){var t=(0,c.cI)({firstname:"",lastname:"",username:"",email:"",birthday:"",password:"",password_confirmation:"",terms:!1}),r=function(){t.post(route("register"),{onFinish:function(){return t.reset("password","password_confirmation")}})};return function(e,a){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(c.Fb),{title:"Register"}),(0,o.createVNode)(s.Z,{class:"mb-4"}),(0,o.createElementVNode)("form",{onSubmit:(0,o.withModifiers)(r,["prevent"])},[(0,o.createElementVNode)("div",i,[(0,o.createVNode)((0,o.unref)(c.rU),{href:"/"},{default:(0,o.withCtx)((function(){return[m]})),_:1})]),(0,o.createElementVNode)("div",null,[(0,o.createVNode)(u.Z,{for:"username",value:"Username"}),(0,o.createVNode)(l.Z,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:(0,o.unref)(t).username,"onUpdate:modelValue":a[0]||(a[0]=function(e){return(0,o.unref)(t).username=e}),required:"",autocomplete:"username"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",f,[(0,o.createVNode)(u.Z,{for:"firstname",value:"First Name"}),(0,o.createVNode)(l.Z,{id:"firstname",type:"text",class:"mt-1 block w-full",modelValue:(0,o.unref)(t).firstname,"onUpdate:modelValue":a[1]||(a[1]=function(e){return(0,o.unref)(t).firstname=e}),required:"",autofocus:"",autocomplete:"firstname"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",p,[(0,o.createVNode)(u.Z,{for:"lastname",value:"Last Name"}),(0,o.createVNode)(l.Z,{id:"lastname",type:"text",class:"mt-1 block w-full",modelValue:(0,o.unref)(t).lastname,"onUpdate:modelValue":a[2]||(a[2]=function(e){return(0,o.unref)(t).lastname=e}),required:"",autofocus:"",autocomplete:"lastname"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",V,[(0,o.createVNode)(u.Z,{for:"birthday",value:"Birthday"}),(0,o.createVNode)(l.Z,{id:"birthday",type:"date",class:"mt-1 block w-full",modelValue:(0,o.unref)(t).birthday,"onUpdate:modelValue":a[3]||(a[3]=function(e){return(0,o.unref)(t).birthday=e}),required:"",autofocus:"",autocomplete:"birthday"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",b,[(0,o.createVNode)(u.Z,{for:"email",value:"Email"}),(0,o.createVNode)(l.Z,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:(0,o.unref)(t).email,"onUpdate:modelValue":a[4]||(a[4]=function(e){return(0,o.unref)(t).email=e}),required:"",autocomplete:"email"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",g,[(0,o.createVNode)(u.Z,{for:"password",value:"Password"}),(0,o.createVNode)(l.Z,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:(0,o.unref)(t).password,"onUpdate:modelValue":a[5]||(a[5]=function(e){return(0,o.unref)(t).password=e}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",k,[(0,o.createVNode)(u.Z,{for:"password_confirmation",value:"Confirm Password"}),(0,o.createVNode)(l.Z,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:(0,o.unref)(t).password_confirmation,"onUpdate:modelValue":a[6]||(a[6]=function(e){return(0,o.unref)(t).password_confirmation=e}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",v,[(0,o.createVNode)((0,o.unref)(c.rU),{href:e.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)(" Already registered? ")]})),_:1},8,["href"]),(0,o.createVNode)(n.Z,{class:(0,o.normalizeClass)(["ml-4",{"opacity-25":(0,o.unref)(t).processing}]),disabled:(0,o.unref)(t).processing},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)(" Register ")]})),_:1},8,["class","disabled"])])],40,d)],64)}}})}}]);