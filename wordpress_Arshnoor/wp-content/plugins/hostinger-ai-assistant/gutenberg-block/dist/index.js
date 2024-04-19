(()=>{var e={694:(e,t,a)=>{"use strict";var n=a(925);function s(){}function o(){}o.resetWarningCache=s,e.exports=function(){function e(e,t,a,s,o,r){if(r!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:s};return a.PropTypes=a,a}},556:(e,t,a)=>{e.exports=a(694)()},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.blocks,n=window.wp.i18n;function s(){return(0,e.createElement)("div",{className:"hostinger-ai-block__logo"},(0,e.createElement)("img",{src:hst_ai_data.plugin_url+"assets/img/hostinger-logo.svg",alt:"Hostinger"}))}function o(t){const a=e.useRef(null),n=e.useRef(t);return e.useLayoutEffect((()=>{n.current=t})),e.useEffect((()=>{const e=e=>{const t=a.current;t&&!t.contains(e.target)&&n.current(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[]),a}const r=function({value:t,label:a,placeholder:n,onChange:s}){const[r,i]=(0,e.useState)(!1),l=o((()=>{i(!1)}));return(0,e.createElement)("div",{className:"hostinger-textarea "+(r||t?"hostinger-textarea--active":"")},(0,e.createElement)("label",null,a),(0,e.createElement)("textarea",{ref:l,onClick:()=>{i(!0)},placeholder:n,value:t,onChange:e=>{s&&s(e.target.value)}}))},i=function({tags:t,onClick:a}){return(0,e.createElement)("div",{className:"hostinger-tags"},t.map((t=>(0,e.createElement)("div",{onClick:()=>(e=>{a&&a(e)})(t),className:"hostinger-tags__item"},t))))},l=function({value:t}){let a=t.length,n=(a<=10?hst_ai_data.translations.at_least_ten:"")+(a>=10&&a<40?hst_ai_data.translations.let_us_now_more:"")+(a>=40?hst_ai_data.translations.youre_good:"");return(0,e.createElement)("div",{className:"hostinger-progress-bar"},(0,e.createElement)("div",{className:"hostinger-progress-bar__wrap"+(a<=10?" hostinger-progress-bar__wrap--is-poor":"")+(a>=10&&a<40?" hostinger-progress-bar__wrap--is-average":"")+(a>=40?" hostinger-progress-bar__wrap--is-good":"")},(0,e.createElement)("div",{className:"hostinger-progress-bar__step"}),(0,e.createElement)("div",{className:"hostinger-progress-bar__step"}),(0,e.createElement)("div",{className:"hostinger-progress-bar__step"})),(0,e.createElement)("div",{className:"hostinger-progress-bar__status",dangerouslySetInnerHTML:{__html:n}}))},c=function({isActive:t,option:a,onSelect:n}){return(0,e.createElement)("li",{className:"list-item "+(t?"list-item--active":""),onClick:()=>n(a)},(0,e.createElement)("span",null,a.label))},h=function({options:t,noOptions:a,className:s,onSelect:o}){return(0,e.createElement)("ul",{className:`list ${s}`},a?(0,e.createElement)(c,{className:"list--no-match",option:{label:(0,n.__)("No matching options","hostinger-affiliate-plugin"),value:"no-option"}}):t.map((t=>(0,e.createElement)(c,{key:t.value,option:t,isActive:t.selected,onSelect:()=>o(t)}))))},d=function({options:t=[],defaultValue:a,className:s,placeholder:r,onSelect:i}){const[l,c]=(0,e.useState)(!1),d=o((()=>{c(!1)})),[m,g]=(0,e.useState)(a);return(0,e.createElement)("div",{ref:d,className:`hostinger-dropdown ${s}`},(0,e.createElement)("div",{className:"hostinger-dropdown__container"},(0,e.createElement)("div",{onClick:()=>{0!=t.length&&c(!0)},className:"hostinger-dropdown-field"},(0,e.createElement)("fieldset",{className:"hostinger-dropdown__field-border"}),(0,e.createElement)("div",{className:"hostinger-dropdown__field-label hostinger-dropdown__field-label--active"},t.length>0&&m&&(0,e.createElement)("span",null,r)),(0,e.createElement)("span",{className:"hostinger-dropdown-field__selected-value "+(m?"":"hostinger-dropdown-field__selected-value--no-options")},0===t.length?(0,n.__)("No options","hostinger-affiliate-plugin"):m?.label||r),t.length>0&&(0,e.createElement)("span",{className:"hostinger-dropdown__arrow-icon "+(l?"hostinger-dropdown__arrow-icon--active":"")},(0,e.createElement)("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"},(0,e.createElement)("g",null,(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 10L12 15L17 10H7Z"}))))),l&&t.length>0&&(0,e.createElement)(h,{ref:d,className:"hostinger-dropdown__list",options:t,itemsPerList:5,onSelect:e=>{g(e),i&&i(e),c(!1)}})))},m=function({value:t,onChange:a}){return(0,e.createElement)("div",{className:"hostinger-checkbox "+(t?"hostinger-checkbox--active":"")},(0,e.createElement)("label",null,(0,e.createElement)("input",{type:"checkbox",onChange:e=>{a&&a(t)},checked:t,value:"1"}),(0,e.createElement)("span",null)))};var g=a(556),_=a.n(g);function u({width:t,height:a}){const n=["skeleton-loader","skeleton-loader--rounded-xs"].filter(Boolean).join(" "),s=e=>"number"==typeof e?`${e}px`:e;return(0,e.createElement)("div",{className:n,style:{maxWidth:s(t),height:s(a)}})}u.propTypes={circle:_().bool,rounded:_().bool,roundedXs:_().bool,width:_().oneOfType([_().number,_().string]),height:_().oneOfType([_().number,_().string])};const p=u;(0,t.registerBlockType)("hostinger-ai-plugin/block",{name:"hostinger-ai-plugin/block",title:(0,n.__)("AI Content Creator","hostinger-ai-assistant"),icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},(0,e.createElement)("path",{d:"M19.1838 3.6567L19.3 3.40002L19.4162 3.6567C19.5494 3.95115 19.7876 4.18539 20.0843 4.31374L20.4801 4.48501L20.0782 4.66276C19.7782 4.79547 19.5394 5.03672 19.4098 5.33813L19.3 5.59348L19.1902 5.33812C19.0606 5.03672 18.8218 4.79547 18.5218 4.66276L18.1199 4.48501L18.5157 4.31374C18.8123 4.18539 19.0505 3.95115 19.1838 3.6567ZM20.0878 19.3153L20.4568 19.4749L20.0849 19.6359C19.7866 19.7649 19.5475 20.001 19.4147 20.2976L19.3 20.5537L19.1853 20.2976C19.0524 20.001 18.8133 19.7649 18.5151 19.6359L18.1432 19.4749L18.5121 19.3153L18.115 18.3975L18.5121 19.3153C18.818 19.1829 19.0614 18.9381 19.192 18.6314L19.3 18.3778L19.408 18.6314C19.408 18.6314 19.408 18.6314 19.408 18.6314C19.5385 18.9381 19.7819 19.1829 20.0878 19.3153L20.4849 18.3975L20.0878 19.3153ZM6.97754 10.049L6.08346 9.62936L6.97754 10.049L8.32987 7.16798L9.69923 10.0539C9.83154 10.3328 10.0588 10.5555 10.3402 10.6821L13.2131 11.9749L10.3406 13.2676L10.7509 14.1795L10.3405 13.2676C10.0583 13.3946 9.83058 13.6182 9.69844 13.8981L8.32988 16.7971L6.97832 13.903C6.8462 13.6201 6.61667 13.3942 6.3317 13.2666L5.92303 14.1793L6.3317 13.2666L3.44698 11.9749L6.332 10.6831C6.61618 10.5559 6.84525 10.3309 6.97754 10.049Z",stroke:"#673DE6","stroke-width":"2"})),category:"common",textdomain:"hostinger-ai-assistant",attributes:{content:{type:"string",default:""},tone:{type:"string",default:"formal"},content_length:{type:"string",default:"short"},create_image:{type:"boolean",default:!1}},edit:function(t){const[a,o]=(0,e.useState)(!1),[c,h]=(0,e.useState)({}),[g,_]=(0,e.useState)("edit"),u=[{value:"short",label:(0,n.__)("Short","hostinger-ai-assistant")},{value:"medium",label:(0,n.__)("Medium","hostinger-ai-assistant")},{value:"long",label:(0,n.__)("Long","hostinger-ai-assistant")}],b=[{value:"neutral",label:(0,n.__)("Neutral","hostinger-ai-assistant")},{value:"formal",label:(0,n.__)("Formal","hostinger-ai-assistant")},{value:"trustworthy",label:(0,n.__)("Trustworthy","hostinger-ai-assistant")},{value:"friendly",label:(0,n.__)("Friendly","hostinger-ai-assistant")},{value:"witty",label:(0,n.__)("Witty","hostinger-ai-assistant")}],v=[(0,n.__)("Write step-by-step tutorial about ...","hostinger-ai-assistant"),(0,n.__)("Write recommendation list of ...","hostinger-ai-assistant"),(0,n.__)("Write motivational post about ...","hostinger-ai-assistant"),(0,n.__)("Write the promotional content of ...","hostinger-ai-assistant"),(0,n.__)("Write an informational article about ...","hostinger-ai-assistant"),(0,n.__)("Write a summary of ...","hostinger-ai-assistant")],w=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i,{tags:v,onClick:e=>t.setAttributes({content:e})})),E=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l,{value:t.attributes.content})),L=e=>{_(e)},k=(e="")=>{let a="";return t.attributes.create_image&&(a+=e||(c.data&&c.data.image?`<img src="${c.data.image}"/>`:"")),a+=c.data&&c.data.content?c.data.content:"",a},f=e=>{const{blocks:a}=wp;let n=wp.blocks.createBlock("core/html",{content:e}),s=wp.data.select("core/editor").getBlockIndex(t.clientId);wp.data.dispatch("core/editor").insertBlocks(n,s+1);let o=a.rawHandler({HTML:a.getBlockContent(n)});wp.data.dispatch("core/block-editor").replaceBlocks(n.clientId,o),wp.data.dispatch("core/block-editor").removeBlock(t.clientId)};return a?(0,e.createElement)("div",{className:"hostinger-ai-block"},(0,e.createElement)("div",{className:"hostinger-ai-block__skeleton"},(0,e.createElement)("div",{className:"hostinger-ai-block__skeleton_heading"},(0,e.createElement)(p,{height:"48px",width:"100%"}),(0,e.createElement)(p,{height:"48px",width:"277px"})),(0,e.createElement)("div",{className:"hostinger-ai-block__skeleton_image"},(0,e.createElement)(p,{height:"368px",width:"100%"})),(0,e.createElement)("div",{className:"hostinger-ai-block__skeleton_paragraph"},(0,e.createElement)(p,{height:"36px",width:"80%"}),(0,e.createElement)(p,{height:"24px",width:"100%"}),(0,e.createElement)(p,{height:"24px",width:"100%"}),(0,e.createElement)(p,{height:"24px",width:"75%"})),(0,e.createElement)("div",{className:"hostinger-ai-block__skeleton_paragraph"},(0,e.createElement)(p,{height:"36px",width:"80%"})))):"preview"==g?(0,e.createElement)("div",{className:"hostinger-ai-block"},(0,e.createElement)("div",{className:"hostinger-ai-block__preview_content",dangerouslySetInnerHTML:{__html:k()}}),(0,e.createElement)("div",{className:"hostinger-ai-block__preview_controls"},(0,e.createElement)("button",{className:"hostinger-block-button hostinger-block-button--is-normal hostinger-block-button--is-primary-outline",onClick:()=>L("edit")},(0,n.__)("Edit prompt","hostinger-ai-assistant")),(0,e.createElement)("button",{className:"hostinger-block-button hostinger-block-button--is-normal hostinger-block-button--is-primary",onClick:()=>(()=>{if(t.attributes.create_image){o(!0);let e=new FormData,t="";c.data.tags&&(t=c.data.tags.join(",")),e.append("action","hts_upload_unsplash_image"),e.append("tags",t),e.append("nonce",hst_ai_data.nonce),fetch(hst_ai_data.ajax_url,{method:"POST",body:e}).then((e=>e.json())).then((e=>{e.success?f(k(e.data)):alert((0,n.__)("There was an error with your request. Please try again.","hostinger-ai-assistant")),o(!1)}))}else f(k())})()},(0,n.__)("Use this content","hostinger-ai-assistant")))):(0,e.createElement)("div",{className:"hostinger-ai-block"},(0,e.createElement)("div",{className:"hostinger-ai-block__row"},(0,e.createElement)(s,null)),(0,e.createElement)("div",{className:"hostinger-ai-block__row"},(0,e.createElement)("div",{className:"hostinger-ai-block__row-heading"},(0,n.__)("What content do you want AI to create today?","hostinger-ai-assistant")),(0,e.createElement)(r,{label:(0,n.__)("Main topic","hostinger-ai-assistant"),placeholder:(0,n.__)("Write an article about ...","hostinger-ai-assistant"),value:t.attributes.content,onChange:e=>t.setAttributes({content:e})}),t.attributes.content?E:w),(0,e.createElement)("div",{className:"hostinger-ai-block__row"},(0,e.createElement)("div",{className:"hostinger-ai-block__row-heading"},(0,n.__)("Personalize your content","hostinger-ai-assistant")),(0,e.createElement)("div",{className:"hostinger-ai-block__personalization-options"},(0,e.createElement)(d,{className:"",options:b,defaultValue:b[1],onSelect:e=>{t.setAttributes({tone:e.value})},placeholder:(0,n.__)("Tone of voice","hostinger-ai-assistant")}),(0,e.createElement)(d,{className:"",options:u,defaultValue:u[0],onSelect:e=>{t.setAttributes({content_length:e.value})},placeholder:(0,n.__)("Content length","hostinger-ai-assistant")}))),(0,e.createElement)("div",{className:"hostinger-ai-block__row hostinger-ai-block__row--is-footer"},(0,e.createElement)("div",{className:"hostinger-ai-block__checkbox-wrap"},(0,e.createElement)(m,{value:t.attributes.create_image,onChange:e=>t.setAttributes({create_image:!e})}),(0,e.createElement)("span",{className:"hostinger-ai-block__checkbox-label"},(0,n.__)("Add an image inside my content","hostinger-ai-assistant"))),(0,e.createElement)("div",{className:"hostinger-ai-block__button-wrap"},(0,e.createElement)("button",{disabled:a||!t.attributes.content,className:"hostinger-block-button hostinger-block-button--is-normal hostinger-block-button--is-primary",onClick:()=>(()=>{o(!0);let e=new FormData;e.append("action","hts_get_content_from_description"),e.append("voice_tone",t.attributes.tone),e.append("content_length",t.attributes.content_length),e.append("description",t.attributes.content),e.append("nonce",hst_ai_data.nonce),e.append("post_type",wp.data.select("core/editor").getCurrentPostType()),e.append("location","ai_assistant_block"),fetch(hst_ai_data.ajax_url,{method:"POST",body:e}).then((e=>e.json())).then((e=>{e.success?(L("preview"),h(e)):alert((0,n.__)("There was an error with your request. Please try again.","hostinger-ai-assistant")),o(!1)}))})()},(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},(0,e.createElement)("path",{d:"M18.4206 4.89146L18.1317 5.54483L18.4206 4.89146L17.4962 4.48255L18.4164 4.08436C18.656 3.98069 18.8484 3.7915 18.956 3.55368L19.3 2.79381L19.6439 3.55368L20.3272 3.24441L19.6439 3.55368C19.7516 3.7915 19.9439 3.98069 20.1835 4.08436L21.1038 4.48255L20.1793 4.89146L20.4757 5.56147L20.1793 4.89146C19.937 4.99864 19.7441 5.1935 19.6395 5.43695L19.3 6.2264L18.9605 5.43694C18.8558 5.1935 18.663 4.99864 18.4206 4.89146ZM19.7099 1.88809C19.7098 1.88842 19.7096 1.88875 19.7095 1.88908L19.7099 1.88809L19.3 1.70253L19.7099 1.88809ZM6.22953 13.4948L5.92303 14.1794L6.22953 13.4948L2.83523 11.975L6.22983 10.455C6.45937 10.3523 6.64438 10.1705 6.75123 9.94287L6.10565 9.63984L6.75124 9.94286L8.32865 6.58228L9.92509 9.94682C10.032 10.1721 10.2155 10.3519 10.4428 10.4542L13.8223 11.975L10.4431 13.4956C10.2152 13.5982 10.0312 13.7788 9.92451 14.0049L8.32865 17.3854L6.7518 14.0089C6.64509 13.7804 6.4597 13.5979 6.22953 13.4948ZM19.6429 20.3998L19.3 21.1653L18.9571 20.3998C18.8498 20.1603 18.6567 19.9696 18.4158 19.8654L17.5136 19.475L18.4129 19.0859C18.6599 18.979 18.8565 18.7813 18.962 18.5335L19.3 17.7396L19.638 18.5336C19.7434 18.7813 19.94 18.979 20.1871 19.0859L21.0863 19.475L20.1841 19.8654C19.9433 19.9696 19.7501 20.1603 19.6429 20.3998Z",stroke:"white","stroke-width":"1.5"})),(0,n.__)("Generate content","hostinger-ai-assistant")))))},save:()=>null})})()})();