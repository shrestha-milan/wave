(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{279:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),i=(r(0),r(287)),o={title:"Form / Date Picker"},c={unversionedId:"examples/date-picker",id:"examples/date-picker",isDocsHomePage:!1,title:"Form / Date Picker",description:"Use date pickers to allow users to pick dates.",source:"@site/docs/examples/date-picker.md",slug:"/examples/date-picker",permalink:"/wave/docs/examples/date-picker",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/date-picker.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Range Slider",permalink:"/wave/docs/examples/range-slider"},next:{title:"Form / Color Picker",permalink:"/wave/docs/examples/color-picker"}},l=[],p={rightToc:l};function s(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use date pickers to allow users to pick dates."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+r(428).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, listen, ui\n\n\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'date={q.args.date}'),\n            ui.text(f'date_placeholder={q.args.date_placeholder}'),\n            ui.text(f'date_disabled={q.args.date_disabled}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.date_picker(name='date', label='Standard date picker', value='2017-10-19'),\n            ui.date_picker(name='date_placeholder', label='Date picker with placeholder', placeholder='Pick a date'),\n            ui.date_picker(name='date_disabled', label='Disabled date picker', value='2017-10-19', disabled=True),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n\n\nlisten('/demo', serve)\n")))}s.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return r?n.a.createElement(b,c(c({ref:t},p),{},{components:r})):n.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},428:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/date-picker-a98cee22ba2dc41a9e12a103dabc10e9.png"}}]);