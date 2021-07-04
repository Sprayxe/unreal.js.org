import{d as e,r as t,c as n,P as o,S as r,L as a,R as l,U as i,V as s,W as u,X as c,Y as d,Z as p,f as v}from"./vendor.a1dde442.js";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function m(e,t){if(e in t){for(var n=t[e],o=arguments.length,r=new Array(o>2?o-2:0),a=2;a<o;a++)r[a-2]=arguments[a];return"function"==typeof n?n.apply(void 0,r):n}var l=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(l,m),l}var g,O,S,x,w,D;function C(e){var t,n,o=e.visible,r=void 0===o||o,a=e.features,l=void 0===a?g.None:a,i=b(e,["visible","features"]);return r||l&g.Static&&i.props.static?L(i):l&g.RenderStrategy?m(null==(t=i.props.unmount)||t?S.Unmount:S.Hidden,((n={})[S.Unmount]=function(){return null},n[S.Hidden]=function(){return L(f({},i,{props:f({},i.props,{hidden:!0,style:{display:"none"}})}))},n)):L(i)}function L(e){var t,n=e.props,o=e.attrs,r=e.slots,a=e.slot,l=e.name,i=function(e,t){void 0===t&&(t=[]);for(var n,o=Object.assign({},e),r=y(t);!(n=r()).done;){var a=n.value;a in o&&delete o[a]}return o}(n,["unmount","static"]),c=i.as,d=b(i,["as"]),p=null==r.default?void 0:r.default(a);if("template"===c){if(Object.keys(d).length>0||Object.keys(o).length>0){var v=null!=p?p:[],f=v[0],h=v.slice(1);if(null==(t=f)||"string"!=typeof t.type&&"object"!=typeof t.type&&"function"!=typeof t.type||h.length>0)throw new Error(['Passing props on "template"!',"","The current component <"+l+' /> is rendering a "template".',"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(o)).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return s(f,d)}return Array.isArray(p)&&1===p.length?p[0]:p}return u(c,d,p)}(O=g||(g={}))[O.None=0]="None",O[O.RenderStrategy=1]="RenderStrategy",O[O.Static=2]="Static",(x=S||(S={}))[x.Unmount=0]="Unmount",x[x.Hidden=1]="Hidden",(D=w||(w={})).Space=" ",D.Enter="Enter",D.Escape="Escape",D.Backspace="Backspace",D.ArrowLeft="ArrowLeft",D.ArrowUp="ArrowUp",D.ArrowRight="ArrowRight",D.ArrowDown="ArrowDown",D.Home="Home",D.End="End",D.PageUp="PageUp",D.PageDown="PageDown",D.Tab="Tab";var k,E,R,j,P,A,I,T,B,$,N=0;function U(){return++N}(E=k||(k={}))[E.First=1]="First",E[E.Previous=2]="Previous",E[E.Next=4]="Next",E[E.Last=8]="Last",E[E.WrapAround=16]="WrapAround",E[E.NoScroll=32]="NoScroll",(j=R||(R={}))[j.Error=0]="Error",j[j.Overflow=1]="Overflow",j[j.Success=2]="Success",j[j.Underflow=3]="Underflow",(A=P||(P={}))[A.Previous=-1]="Previous",A[A.Next=1]="Next",(T=I||(I={}))[T.Strict=0]="Strict",T[T.Loose=1]="Loose",($=B||(B={}))[$.AddElement=0]="AddElement",$[$.RemoveElement=1]="RemoveElement";var K=Symbol("DescriptionContext");function V(e){var t;return null==e||null==e.value?null:null!=(t=e.value.$el)?t:e.value}var F,H,q,W,G,M,Y=Symbol("Context");function Q(){return d(Y,null)}function X(e){c(Y,e)}(H=F||(F={}))[H.Open=0]="Open",H[H.Closed=1]="Closed",(W=q||(q={}))[W.Open=0]="Open",W[W.Closed=1]="Closed",(M=G||(G={}))[M.Open=0]="Open",M[M.Closed=1]="Closed";var Z=Symbol("DisclosureContext");function z(e){var t=d(Z,null);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Disclosure /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,z),n}return t}var J,_,ee,te=e({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup:function(e,o){var r=o.slots,a=o.attrs,l=t(e.defaultOpen?G.Open:G.Closed),i=t(null);return c(Z,{disclosureState:l,panelRef:i,toggleDisclosure:function(){var e;l.value=m(l.value,((e={})[G.Open]=G.Closed,e[G.Closed]=G.Open,e))}}),X(n((function(){var e;return m(l.value,((e={})[G.Open]=F.Open,e[G.Closed]=F.Closed,e))}))),function(){return C({props:b(e,["defaultOpen"]),slot:{open:l.value===G.Open},slots:r,attrs:a,name:"Disclosure"})}}}),ne=e({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},render:function(){var e=z("DisclosureButton"),t={open:e.disclosureState.value===G.Open},n={id:this.id,type:"button","aria-expanded":e.disclosureState.value===G.Open||void 0,"aria-controls":this.ariaControls,onClick:this.handleClick,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp};return C({props:f({},this.$props,n),slot:t,attrs:this.$attrs,slots:this.$slots,name:"DisclosureButton"})},setup:function(e){var t=z("DisclosureButton");return{id:"headlessui-disclosure-button-"+U(),ariaControls:n((function(){var e,n;return null!=(e=null==(n=V(t.panelRef))?void 0:n.id)?e:void 0})),handleClick:function(){e.disabled||t.toggleDisclosure()},handleKeyDown:function(n){if(!e.disabled)switch(n.key){case w.Space:case w.Enter:n.preventDefault(),n.stopPropagation(),t.toggleDisclosure()}},handleKeyUp:function(e){switch(e.key){case w.Space:e.preventDefault()}}}}}),oe=e({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var e={open:z("DisclosurePanel").disclosureState.value===G.Open},t={id:this.id,ref:"el"};return C({props:f({},this.$props,t),slot:e,attrs:this.$attrs,slots:this.$slots,features:g.RenderStrategy|g.Static,visible:this.visible,name:"DisclosurePanel"})},setup:function(){var e=z("DisclosurePanel"),t="headlessui-disclosure-panel-"+U(),o=Q(),r=n((function(){return null!==o?o.value===F.Open:e.disclosureState.value===G.Open}));return{id:t,el:e.panelRef,visible:r}}});function re(e,t){var n=t.resolveItems();if(n.length<=0)return null;var o=t.resolveActiveIndex(),r=null!=o?o:-1,a=function(){switch(e.focus){case J.First:return n.findIndex((function(e){return!t.resolveDisabled(e)}));case J.Previous:var o=n.slice().reverse().findIndex((function(e,n,o){return!(-1!==r&&o.length-n-1>=r)&&!t.resolveDisabled(e)}));return-1===o?o:n.length-1-o;case J.Next:return n.findIndex((function(e,n){return!(n<=r)&&!t.resolveDisabled(e)}));case J.Last:var a=n.slice().reverse().findIndex((function(e){return!t.resolveDisabled(e)}));return-1===a?a:n.length-1-a;case J.Specific:return n.findIndex((function(n){return t.resolveId(n)===e.id}));case J.Nothing:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}();return-1===a?o:a}function ae(e,t){if(void 0!==e)return"function"==typeof e?e(t):e}!function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"}(J||(J={})),(ee=_||(_={}))[ee.Open=0]="Open",ee[ee.Closed=1]="Closed";var le=Symbol("ListboxContext");function ie(e){var t=d(le,null);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Listbox /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,ie),n}return t}var se,ue,ce,de,pe=e({name:"Listbox",emits:["update:modelValue"],props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup:function(e,o){var a=o.slots,l=o.attrs,i=o.emit,s=e.disabled,u=b(e,["modelValue","disabled"]),d=t(_.Closed),p=t(null),v=t(null),f=t(null),h=t([]),y=t(""),g=t(null),O=n((function(){return e.modelValue})),S={listboxState:d,value:O,labelRef:p,buttonRef:v,optionsRef:f,disabled:s,options:h,searchQuery:y,activeOptionIndex:g,closeListbox:function(){s||d.value!==_.Closed&&(d.value=_.Closed,g.value=null)},openListbox:function(){s||d.value!==_.Open&&(d.value=_.Open)},goToOption:function(e,t){if(!s&&d.value!==_.Closed){var n=re(e===J.Specific?{focus:J.Specific,id:t}:{focus:e},{resolveItems:function(){return h.value},resolveActiveIndex:function(){return g.value},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.disabled}});""===y.value&&g.value===n||(y.value="",g.value=n)}},search:function(e){if(!s&&d.value!==_.Closed){y.value+=e.toLowerCase();var t=h.value.findIndex((function(e){return!e.dataRef.disabled&&e.dataRef.textValue.startsWith(y.value)}));-1!==t&&t!==g.value&&(g.value=t)}},clearSearch:function(){s||d.value!==_.Closed&&""!==y.value&&(y.value="")},registerOption:function(e,t){h.value.push({id:e,dataRef:t})},unregisterOption:function(e){var t=h.value.slice(),n=null!==g.value?t[g.value]:null,o=t.findIndex((function(t){return t.id===e}));-1!==o&&t.splice(o,1),h.value=t,g.value=o===g.value||null===n?null:t.indexOf(n)},select:function(e){s||i("update:modelValue",e)}};return function(e,t,n){window.addEventListener(e,t,n),r((function(){return window.removeEventListener(e,t,n)}))}("mousedown",(function(e){var t,n,o,r=e.target,a=document.activeElement;d.value===_.Open&&((null==(t=V(v))?void 0:t.contains(r))||((null==(n=V(f))?void 0:n.contains(r))||S.closeListbox(),a!==document.body&&(null==a?void 0:a.contains(r))||e.defaultPrevented||null==(o=V(v))||o.focus({preventScroll:!0})))})),c(le,S),X(n((function(){var e;return m(d.value,((e={})[_.Open]=F.Open,e[_.Closed]=F.Closed,e))}))),function(){var e={open:d.value===_.Open,disabled:s};return C({props:u,slot:e,slots:a,attrs:l,name:"Listbox"})}}}),ve=e({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},render:function(){var e,t,n=ie("ListboxButton"),o={open:n.listboxState.value===_.Open,disabled:n.disabled},r={ref:"el",id:this.id,type:"button","aria-haspopup":!0,"aria-controls":null==(e=V(n.optionsRef))?void 0:e.id,"aria-expanded":n.listboxState.value===_.Open||void 0,"aria-labelledby":n.labelRef.value?[null==(t=V(n.labelRef))?void 0:t.id,this.id].join(" "):void 0,disabled:n.disabled,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp,onClick:this.handleClick};return C({props:f({},this.$props,r),slot:o,attrs:this.$attrs,slots:this.$slots,name:"ListboxButton"})},setup:function(){var e=ie("ListboxButton");return{id:"headlessui-listbox-button-"+U(),el:e.buttonRef,handleKeyDown:function(t){switch(t.key){case w.Space:case w.Enter:case w.ArrowDown:t.preventDefault(),e.openListbox(),i((function(){var t;null==(t=V(e.optionsRef))||t.focus({preventScroll:!0}),e.value.value||e.goToOption(J.First)}));break;case w.ArrowUp:t.preventDefault(),e.openListbox(),i((function(){var t;null==(t=V(e.optionsRef))||t.focus({preventScroll:!0}),e.value.value||e.goToOption(J.Last)}))}},handleKeyUp:function(e){switch(e.key){case w.Space:e.preventDefault()}},handleClick:function(t){var n;e.disabled||(e.listboxState.value===_.Open?(e.closeListbox(),i((function(){var t;return null==(t=V(e.buttonRef))?void 0:t.focus({preventScroll:!0})}))):(t.preventDefault(),e.openListbox(),n=function(){var t;return null==(t=V(e.optionsRef))?void 0:t.focus({preventScroll:!0})},requestAnimationFrame((function(){return requestAnimationFrame(n)}))))}}}}),fe=e({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var e,t,n,o,r=ie("ListboxOptions"),a={open:r.listboxState.value===_.Open},l={"aria-activedescendant":null===r.activeOptionIndex.value||null==(e=r.options.value[r.activeOptionIndex.value])?void 0:e.id,"aria-labelledby":null!=(t=null==(n=V(r.labelRef))?void 0:n.id)?t:null==(o=V(r.buttonRef))?void 0:o.id,id:this.id,onKeydown:this.handleKeyDown,role:"listbox",tabIndex:0,ref:"el"};return C({props:f({},this.$props,l),slot:a,attrs:this.$attrs,slots:this.$slots,features:g.RenderStrategy|g.Static,visible:this.visible,name:"ListboxOptions"})},setup:function(){var e=ie("ListboxOptions"),o="headlessui-listbox-options-"+U(),r=t(null);var a=Q(),l=n((function(){return null!==a?a.value===F.Open:e.listboxState.value===_.Open}));return{id:o,el:e.optionsRef,handleKeyDown:function(t){switch(r.value&&clearTimeout(r.value),t.key){case w.Space:if(""!==e.searchQuery.value)return t.preventDefault(),t.stopPropagation(),e.search(t.key);case w.Enter:if(t.preventDefault(),t.stopPropagation(),null!==e.activeOptionIndex.value){var n=e.options.value[e.activeOptionIndex.value].dataRef;e.select(n.value)}e.closeListbox(),i((function(){var t;return null==(t=V(e.buttonRef))?void 0:t.focus({preventScroll:!0})}));break;case w.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToOption(J.Next);case w.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToOption(J.Previous);case w.Home:case w.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToOption(J.First);case w.End:case w.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToOption(J.Last);case w.Escape:t.preventDefault(),t.stopPropagation(),e.closeListbox(),i((function(){var t;return null==(t=V(e.buttonRef))?void 0:t.focus({preventScroll:!0})}));break;case w.Tab:t.preventDefault(),t.stopPropagation();break;default:1===t.key.length&&(e.search(t.key),r.value=setTimeout((function(){return e.clearSearch()}),350))}},visible:l}}}),be=e({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String]},disabled:{type:Boolean,default:!1},class:{type:[String,Function],required:!1},className:{type:[String,Function],required:!1}},setup:function(e,s){var u=s.slots,c=s.attrs,d=ie("ListboxOption"),v="headlessui-listbox-option-"+U(),b=e.disabled,h=e.class,y=e.className,m=void 0===y?h:y,g=e.value,O=n((function(){return null!==d.activeOptionIndex.value&&d.options.value[d.activeOptionIndex.value].id===v})),S=n((function(){return p(d.value.value)===p(g)})),x=t({disabled:b,value:g,textValue:""});function w(e){if(b)return e.preventDefault();d.select(g),d.closeListbox(),i((function(){var e;return null==(e=V(d.buttonRef))?void 0:e.focus({preventScroll:!0})}))}function D(){if(b)return d.goToOption(J.Nothing);d.goToOption(J.Specific,v)}function L(){b||O.value||d.goToOption(J.Specific,v)}function k(){b||O.value&&d.goToOption(J.Nothing)}return o((function(){var e,t,n=null==(e=document.getElementById(v))||null==(t=e.textContent)?void 0:t.toLowerCase().trim();void 0!==n&&(x.value.textValue=n)})),o((function(){return d.registerOption(v,x)})),r((function(){return d.unregisterOption(v)})),o((function(){a([d.listboxState,S],(function(){var e;d.listboxState.value===_.Open&&S.value&&(d.goToOption(J.Specific,v),null==(e=document.getElementById(v))||null==e.focus||e.focus())}),{immediate:!0})})),l((function(){d.listboxState.value===_.Open&&O.value&&i((function(){var e;return null==(e=document.getElementById(v))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})}))})),function(){var t={active:O.value,selected:S.value,disabled:b},n={id:v,role:"option",tabIndex:-1,class:ae(m,t),"aria-disabled":!0===b||void 0,"aria-selected":!0===S.value?S.value:void 0,onClick:w,onFocus:D,onPointermove:L,onMousemove:L,onPointerleave:k,onMouseleave:k};return C({props:f({},e,n),slot:t,attrs:c,slots:u,name:"ListboxOption"})}}});(ue=se||(se={}))[ue.Open=0]="Open",ue[ue.Closed=1]="Closed",(de=ce||(ce={}))[de.Open=0]="Open",de[de.Closed=1]="Closed";var he=Symbol("LabelContext");function ye(){var e=d(he,null);if(null===e){var t=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ye),t}return e}var me,ge,Oe=e({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},render:function(){var e=this.context,t=e.name,n=void 0===t?"Label":t,o=e.slot,r=void 0===o?{}:o,a=e.props,l=void 0===a?{}:a,i=this.$props,s=i.passive,u=b(i,["passive"]),c=f({},Object.entries(l).reduce((function(e,t){var n,o=t[0],r=t[1];return Object.assign(e,((n={})[o]=v(r),n))}),{}),{id:this.id}),d=f({},u,c);return s&&delete d.onClick,C({props:d,slot:r,attrs:this.$attrs,slots:this.$slots,name:n})},setup:function(){var e=ye(),t="headlessui-label-"+U();return o((function(){return r(e.register(t))})),{id:t,context:e}}});(ge=me||(me={}))[ge.Empty=1]="Empty",ge[ge.Active=2]="Active";var Se,xe,we,De,Ce=Symbol("GroupContext"),Le=e({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup:function(e,o){var r=o.slots,a=o.attrs,l=t(null),i=function(e){var o=void 0===e?{}:e,r=o.slot,a=void 0===r?{}:r,l=o.name,i=void 0===l?"Label":l,s=o.props,u=void 0===s?{}:s,d=t([]);return c(he,{register:function(e){return d.value.push(e),function(){var t=d.value.indexOf(e);-1!==t&&d.value.splice(t,1)}},slot:a,name:i,props:u}),n((function(){return d.value.length>0?d.value.join(" "):void 0}))}({name:"SwitchLabel",props:{onClick:function(){l.value&&(l.value.click(),l.value.focus({preventScroll:!0}))}}}),s=function(e){var o=void 0===e?{}:e,r=o.slot,a=void 0===r?t({}):r,l=o.name,i=void 0===l?"Description":l,s=o.props,u=void 0===s?{}:s,d=t([]);return c(K,{register:function(e){return d.value.push(e),function(){var t=d.value.indexOf(e);-1!==t&&d.value.splice(t,1)}},slot:a,name:i,props:u}),n((function(){return d.value.length>0?d.value.join(" "):void 0}))}({name:"SwitchDescription"});return c(Ce,{switchRef:l,labelledby:i,describedby:s}),function(){return C({props:e,slot:{},slots:r,attrs:a,name:"SwitchGroup"})}}}),ke=e({name:"Switch",emits:["update:modelValue"],props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1},class:{type:[String,Function],required:!1},className:{type:[String,Function],required:!1}},render:function(){var e=d(Ce,null),t=this.$props,n=t.class,o=t.className,r=void 0===o?n:o,a={checked:this.$props.modelValue},l={id:this.id,ref:null===e?void 0:e.switchRef,role:"switch",tabIndex:0,class:ae(r,a),"aria-checked":this.$props.modelValue,"aria-labelledby":this.labelledby,"aria-describedby":this.describedby,onClick:this.handleClick,onKeyup:this.handleKeyUp,onKeypress:this.handleKeyPress};return"button"===this.$props.as&&Object.assign(l,{type:"button"}),C({props:f({},this.$props,l),slot:a,attrs:this.$attrs,slots:this.$slots,name:"Switch"})},setup:function(e,t){var n=t.emit,o=d(Ce,null);function r(){n("update:modelValue",!e.modelValue)}return{id:"headlessui-switch-"+U(),el:null==o?void 0:o.switchRef,labelledby:null==o?void 0:o.labelledby,describedby:null==o?void 0:o.describedby,handleClick:function(e){e.preventDefault(),r()},handleKeyUp:function(e){e.key!==w.Tab&&e.preventDefault(),e.key===w.Space&&r()},handleKeyPress:function(e){e.preventDefault()}}}}),Ee=Oe;(xe=Se||(Se={})).Finished="finished",xe.Cancelled="cancelled",(De=we||(we={})).Visible="visible",De.Hidden="hidden",g.RenderStrategy;export{te as D,pe as L,Le as S,ne as a,oe as b,ve as c,fe as d,be as e,Ee as f,ke as g};
