(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{1453:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/divider",function(){return n(4287)}])},5721:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2322),o=(n(2784),n(6277)),i=(n(217),n(8441)),a=n.n(i);function c(e){var t=e.code,n=e.className,i=e.name,c=(0,o.Z)(a().root,n),l=i?a().name:a().hiddenName,s=(0,o.Z)(a().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("div",{className:l,children:i}),(0,r.jsx)("pre",{className:s,children:(0,r.jsx)("code",{children:t})})]})}},4799:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2322),o=(n(2784),n(6277)),i=(n(217),n(4813)),a=n.n(i);function c(e){var t=e.code,n=e.className,i=(0,o.Z)(a().root,n);return(0,r.jsx)("span",{className:i,children:(0,r.jsx)("code",{dangerouslySetInnerHTML:{__html:t}})})}},6744:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2322),o=n(8476),i=n.n(o),a=n(2784),c=n(2587),l=n(1497),s=n(6351),u=n(6895);function d(e){var t=e.children,n=e.filePath;return(0,a.useEffect)((function(){i().highlightAll()}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(s.Z,{}),t,(0,r.jsx)(u.Z,{filePath:n}),(0,r.jsx)(c.Z,{})]})}},4287:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(2322),o=n(2784),i=n(7619),a=n(5721),c=n(6769),l=n(1503),s=n(4705),u=n(5597),d=n(8189),f=n(6277),p=n(3980),h=n.n(p);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var v=["block","className","theme"],y=["blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn","preventScroll"];function S(e){e.block;var t=e.className,n=e.theme,r=void 0===n?{}:n,i=m(e,v);i.blockProps,i.customStyleMap,i.customStyleFn,i.decorator,i.forceSelection,i.offsetKey,i.selection,i.tree,i.contentState,i.blockStyleFn,i.preventScroll;var a=m(i,y),c=(0,f.Z)(r.divider,t);return o.createElement("hr",g({},a,{className:c}))}var E=function(e){var t=e.theme,n=void 0===t?{}:t,r=function(){var t=e.getEditorState();return t.getCurrentContent().getBlockForKey(t.getSelection().getStartKey()).getType()===e.blockType}()?(0,f.Z)(n.button,n.active):n.button;return o.createElement("div",{className:n.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},o.createElement("button",{className:r,onClick:function(t){t.preventDefault();var n=e.getEditorState(),r=e.addDivider(n);e.setEditorState(r)},type:"button"},o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))))};E.propTypes={theme:h().object,getEditorState:h().func.isRequired,setEditorState:h().func.isRequired,addDivider:h().func.isRequired};var b=E;function w(e){return function(t,n){var r=t.getCurrentContent().createEntity(e,"IMMUTABLE",n).getLastCreatedEntityKey(),o=l.AtomicBlockUtils.insertAtomicBlock(t,r," ");return l.EditorState.forceSelection(o,o.getCurrentContent().getSelectionAfter())}}var k={divider:"d6zlymw"},x=n(3956),C=n.n(x);function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){B(e,t,n[t])}))}return e}function _(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?j(e):t}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}var z=(0,u.Z)(),Z=function(e){var t=void 0===e?{}:e,n=t.entityType,r=void 0===n?"divider":n,i=t.dividerComponent,a=void 0===i?S:i,c=t.buttonComponent,l=void 0===c?b:c,s=t.theme,u=void 0===s?k:s,d=t.decorator,f=a;"function"===typeof d&&(f=d(f));var p=function(e){return o.createElement(f,g({},e,{theme:u}))},h=l;return{blockRendererFn:function(e,t){var n=t.getEditorState;if("atomic"===e.getType()){var o=n().getCurrentContent(),i=e.getEntityAt(0);if(!i)return null;if(o.getEntity(i).getType()===r)return{component:p,editable:!1}}return null},DividerButton:function(e){return o.createElement(h,g({},e,{addDivider:w(r)}))},addDivider:w(r)}}({decorator:(0,s.lM)(z.decorator)}),H=Z.DividerButton,R=(0,d.Z)(),A=R.SideToolbar,D=[z,Z,R],I={entityMap:{0:{type:"divider",mutability:"IMMUTABLE",data:{}}},blocks:[{key:"9gm3s",text:"This is a simple example for divider plugin. Click side toolbar divider button.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}}]},F=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(a,e);var t,n,o,i=P(a);function a(){var e;return L(this,a),B(j(e=i.apply(this,arguments)),"state",{editorState:l.EditorState.createWithContent((0,l.convertFromRaw)(I))}),B(j(e),"onChange",(function(t){e.setState({editorState:t})})),B(j(e),"focus",(function(){e.editor.focus()})),e}return t=a,(n=[{key:"render",value:function(){var e=this;return(0,r.jsxs)("div",{className:C().editor,onClick:this.focus,children:[(0,r.jsx)(s.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:D,ref:function(t){e.editor=t}}),(0,r.jsx)(A,{children:function(e){return(0,r.jsx)("div",{children:(0,r.jsx)(H,K({},e))})}})]})}}])&&M(t.prototype,n),o&&M(t,o),a}(o.Component),V=n(397),U=n(4799),W=n(6744),q=n(4670),Q=n.n(q);function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}function G(e,t){return!t||"object"!==ee(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e,t){return $=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},$(e,t)}var ee=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function te(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=X(e);if(t){var o=X(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return G(this,n)}}var ne=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(s,e);var t,n,o,l=te(s);function s(){return Y(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){return(0,r.jsxs)(W.Z,{filePath:"packages/docs/pages/plugin/divider/index.js",children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(V.Z,{level:2,children:"Divider"}),(0,r.jsx)(V.Z,{level:3,children:"Supported Environment"}),(0,r.jsxs)("ul",{className:Q().list,children:[(0,r.jsx)("li",{className:Q().listEntry,children:"Desktop: Yes"}),(0,r.jsx)("li",{className:Q().listEntry,children:"Mobile: Yes"}),(0,r.jsx)("li",{className:Q().listEntry,children:"Screen-reader: Yes"})]})]}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(V.Z,{level:2,children:"Getting Started"}),(0,r.jsx)(a.Z,{code:"npm install @draft-js-plugins/editor"}),(0,r.jsx)(a.Z,{code:"npm install @draft-js-plugins/divider"}),(0,r.jsx)(a.Z,{code:"// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createDividerPlugin from '@draft-js-plugins/divider';\nimport React from 'react';\n\nconst dividerPlugin = createDividerPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the dividerPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[dividerPlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,r.jsx)(V.Z,{level:3,children:"Importing the default styles"}),(0,r.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,r.jsx)(U.Z,{code:"node_modules/@draft-js-plugins/divider/lib/plugin.css"})]}),(0,r.jsx)(V.Z,{level:4,children:"Webpack Usage"}),(0,r.jsxs)("ul",{className:Q().list,children:[(0,r.jsxs)("li",{className:Q().listEntry,children:["1. Install Webpack loaders: \xa0",(0,r.jsx)(U.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,r.jsxs)("li",{className:Q().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,r.jsx)(a.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:Q().guideCodeBlock})]}),(0,r.jsxs)("li",{className:Q().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,r.jsx)(a.Z,{code:"import '@draft-js-plugins/divider/lib/plugin.css';",className:Q().guideCodeBlock})]}),(0,r.jsx)("li",{className:Q().listEntry,children:"4. Restart Webpack."})]})]}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(V.Z,{level:2,children:"Configuration Parameters"}),(0,r.jsxs)("div",{className:Q().param,children:[(0,r.jsx)("span",{className:Q().paramName,children:"theme"}),(0,r.jsx)("span",{children:"Object of CSS classes with the following keys."}),(0,r.jsx)("div",{className:Q().subParams,children:(0,r.jsxs)("div",{className:Q().subParam,children:[(0,r.jsx)("span",{className:Q().subParamName,children:"divider:"})," CSS class for the divider."]})})]}),(0,r.jsxs)("div",{className:Q().param,children:[(0,r.jsx)("span",{className:Q().paramName,children:"entityType"}),(0,r.jsx)("span",{children:"Entity type for divider. default type is `divider`"})]}),(0,r.jsxs)("div",{className:Q().param,children:[(0,r.jsx)("span",{className:Q().paramName,children:"dividerComponent"}),(0,r.jsx)("span",{children:"Pass in a custom divider component to be rendered."})]})]}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(V.Z,{level:2,children:"Divider + SideToolbar + Focus Example"}),(0,r.jsx)(F,{}),(0,r.jsx)(a.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';\nimport createDividerPlugin from '@draft-js-plugins/divider';\n\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\n\nconst decorator = composeDecorators(focusPlugin.decorator);\n\nconst dividerPlugin = createDividerPlugin({ decorator });\nconst { DividerButton } = dividerPlugin;\n\nconst sideToolbarPlugin = createSideToolbarPlugin();\nconst { SideToolbar } = sideToolbarPlugin;\n\nconst plugins = [focusPlugin, dividerPlugin, sideToolbarPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'divider',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example for divider plugin. Click side toolbar divider button.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n\n        <SideToolbar>\n          {\n            // may be use React.Fragment instead of div to improve perfomance after React 16\n            (externalProps) => (\n              <div>\n                <DividerButton {...externalProps} />\n              </div>\n            )\n          }\n        </SideToolbar>\n      </div>\n    );\n  }\n}\n",name:"DividerWithSideToolbarEditor.js"}),(0,r.jsx)(a.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]})]})}}])&&J(t.prototype,n),o&&J(t,o),s}(o.Component)},8441:function(e){e.exports={root:"Code_root__L5JtP",name:"Code_name__0g9Xm",hiddenName:"Code_hiddenName__iBe7o"}},3956:function(e){e.exports={editor:"editorStyles_editor__6f7Ao"}},4813:function(e){e.exports={root:"InlineCode_root__8ZQag"}},4670:function(e){e.exports={root:"styles_root__jIBJ4",param:"styles_param__laocT",paramBig:"styles_paramBig__Isnak",paramName:"styles_paramName__hxaQk",subParams:"styles_subParams__w4QVu",subParam:"styles_subParam__1Rfl_",subParamName:"styles_subParamName__MUGJh",list:"styles_list__U1Qf0",listEntry:"styles_listEntry__QI_VH",guideCodeBlock:"styles_guideCodeBlock__sZfte"}},138:function(e,t,n){"use strict";n.d(t,{xM:function(){return w},f9:function(){return b},qA:function(){return k},Tj:function(){return x},KH:function(){return j},mk:function(){return C},UH:function(){return L},YC:function(){return S},n3:function(){return d},Ou:function(){return E},Ed:function(){return f},gS:function(){return h},R8:function(){return m},oV:function(){return g},BI:function(){return u},pu:function(){return y},tg:function(){return p},cU:function(){return v}});var r=n(2784),o=n(1503),i=n(6277);function a(e){var t=e.blockType,n=e.children;return function(e){var a=e.theme,c=function(){if(!e.getEditorState)return!1;var n=e.getEditorState();return n.getCurrentContent().getBlockForKey(n.getSelection().getStartKey()).getType()===t}()?(0,i.Z)(a.button,a.active):a.button;return r.createElement("div",{className:a.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:c,onClick:function(n){n.preventDefault(),e.setEditorState(o.RichUtils.toggleBlockType(e.getEditorState(),t))},type:"button",children:n}))}}function c(e){var t=e.style,n=e.children;return function(e){var a=e.theme,c=e.getEditorState&&e.getEditorState().getCurrentInlineStyle().has(t)?(0,i.Z)(a.button,a.active):a.button;return r.createElement("div",{className:a.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:c,onClick:function(n){n.preventDefault(),e.setEditorState(o.RichUtils.toggleInlineStyle(e.getEditorState(),t))},type:"button",children:n}))}}function l(e){var t=e.alignment,n=e.children;return function(e){var o=e.theme,a=e.alignment===t?(0,i.Z)(o.button,o.active):o.button;return r.createElement("div",{className:o.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:a,onClick:function(n){n.preventDefault(),e.setAlignment({alignment:t})},type:"button",children:n}))}}function s(e){var t=e.alignment,n=e.children;return function(e){var a=e.theme,c=e.getEditorState&&e.getEditorState().getCurrentInlineStyle().has(t)?(0,i.Z)(a.button,a.active):a.button;return r.createElement("div",{className:a.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:c,onClick:function(n){if(e.getEditorState){n.preventDefault();var r=["left","center","right"].filter((function(e){return e!==t})),i=e.getEditorState(),a=e.getEditorState().getCurrentContent(),c=e.getEditorState().getSelection(),l=a.getBlockForKey(c.getFocusKey()),s=a.getBlockForKey(c.getAnchorKey()),u=c.getIsBackward(),d={anchorOffset:0,focusOffset:l.getLength()};u&&(d={focusOffset:0,anchorOffset:s.getLength()});var f=c.merge(d),p=o.Modifier.applyInlineStyle(a,f,t),h=r.reduce((function(e,t){return o.Modifier.removeInlineStyle(e,f,t)}),p),g=o.EditorState.push(i,h,"change-inline-style");e.setEditorState(g)}},type:"button",children:n}))}}var u=c({style:"ITALIC",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}))}),d=c({style:"BOLD",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),f=c({style:"CODE",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),p=c({style:"UNDERLINE",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}))}),h=a({blockType:"header-one",children:"H1"}),g=a({blockType:"header-two",children:"H2"}),m=a({blockType:"header-three",children:"H3"}),v=a({blockType:"unordered-list-item",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))}),y=a({blockType:"ordered-list-item",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),S=a({blockType:"blockquote",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),E=a({blockType:"code-block",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),b=l({alignment:"default",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),w=l({alignment:"center",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),k=l({alignment:"left",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),x=l({alignment:"right",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),C=s({alignment:"left",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),j=s({alignment:"center",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),L=s({alignment:"right",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))});c({style:"SUBSCRIPT",children:r.createElement("div",null,"x",r.createElement("sub",null,"2"))}),c({style:"SUPERSCRIPT",children:r.createElement("div",null,"x",r.createElement("sup",null,"2"))})},5597:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(1503),o=n(6670),i=n(2358),a=n.n(i),c=n(2784),l=n(6277);function s(e){var t=function(e,t,n){var o=t.getStartKey(),i=[];return e.getBlockMap().forEach((function(e,t){i.push(e),t===o&&i.push(n)})),e.merge({blockMap:r.BlockMapBuilder.createFromArray(i),selectionBefore:t,selectionAfter:t.merge({anchorKey:n.getKey(),anchorOffset:n.getLength(),focusKey:n.getKey(),focusOffset:n.getLength(),isBackward:!1})})}(e.getCurrentContent(),e.getSelection(),new r.ContentBlock({key:(0,r.genKey)(),type:"unstyled",text:"",characterList:(0,o.List)()})),n=t.merge({selectionAfter:t.getSelectionAfter().set("hasFocus",!0)});return r.EditorState.push(e,n,"insert-fragment")}var u=function(e,t,n,o){var i=e(),c=i.getSelection().getAnchorKey(),l="up"===n?i.getCurrentContent().getBlockBefore(c):i.getCurrentContent().getBlockAfter(c);if((!l||l.get("key")!==c)&&l){var s=a().encode(l.getKey(),0,0),u=document.querySelectorAll('[data-offset-key="'+s+'"]')[0],d=window.getSelection(),f=document.createRange();f.setStart(u,0),f.setEnd(u,0),d.removeAllRanges(),d.addRange(f);var p="up"===n?l.getLength():0;o.preventDefault(),t(r.EditorState.forceSelection(i,new r.SelectionState({anchorKey:l.getKey(),anchorOffset:p,focusKey:l.getKey(),focusOffset:p,isBackward:!1})))}};function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var f=function(e){var t=e.theme,n=e.blockKeyStore;return function(e){var r=c.forwardRef((function(r,o){(0,c.useEffect)((function(){return n.add(r.block.getKey()),function(){n.remove(r.block.getKey())}}),[]);var i=r.blockProps,a=r.className,s=i.isFocused?(0,l.Z)(a,t.focused):(0,l.Z)(a,t.unfocused);return c.createElement(e,d({},r,{ref:o,onClick:function(e){e.preventDefault(),r.blockProps.isFocused||r.blockProps.setFocusToBlock()},className:s}))}));return r.displayName="BlockFocus("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",r.WrappedComponent=e.WrappedComponent||e,r}};var p=function(e,t,n){return e.getBlockMap().keySeq().skipUntil((function(e){return e===t})).takeUntil((function(e){return e===n})).concat([n])},h=function(e,t){var n=function(e){var t=e.getSelection(),n=e.getCurrentContent();return p(n,t.getStartKey(),t.getEndKey())}(e);return n.includes(t)};var g={unfocused:"uz5k6rs",focused:"f1vn2c6d"},m=function(e,t){var n=e.getSelection();if(n.getAnchorKey()!==n.getFocusKey())return!1;var r=e.getCurrentContent().getBlockForKey(n.getAnchorKey());return t.includes(r.getKey())},v=["backspace","backspace-word","backspace-to-start-of-line","delete","delete-word","delete-to-end-of-block"];function y(e){return r.EditorState.set(e,{selection:e.getSelection(),forceSelection:!0,nativelyRenderedContent:null,inlineStyleOverride:null})}var S=function(e){void 0===e&&(e={});var t,n,i=function(){var e=(0,o.List)();return{add:function(t){return e=e.push(t)},remove:function(t){return e=e.filter((function(e){return e!==t}))},includes:function(t){return e.includes(t)},getAll:function(){return e}}}(),c=e.theme?e.theme:g;return{handleReturn:function(e,t,n){var r=n.setEditorState;return m(t,i)?(r(s(t)),"handled"):"not-handled"},handleKeyCommand:function(e,t,n,o){var a=o.setEditorState;if(v.includes(e)&&m(t,i)){var c=t.getSelection().getStartKey(),l=function(e,t){var n=e.getCurrentContent(),o=n.getKeyBefore(t),i=n.getBlockForKey(o);if(void 0===i){var a=new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});n=r.Modifier.removeRange(n,a,"backward"),n=r.Modifier.setBlockType(n,a,"unstyled");var c=r.EditorState.push(e,n,"remove-range"),l=new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0});return r.EditorState.forceSelection(c,l)}var s=new r.SelectionState({anchorKey:o,anchorOffset:i.getLength(),focusKey:t,focusOffset:1});n=r.Modifier.removeRange(n,s,"backward");var u=r.EditorState.push(e,n,"remove-range"),d=new r.SelectionState({anchorKey:o,anchorOffset:i.getLength(),focusKey:o,focusOffset:i.getLength()});return r.EditorState.forceSelection(u,d)}(t,c);if(l!==t)return a(l),"handled"}return"not-handled"},onChange:function(e){var r=e.getCurrentContent();if(!r.equals(n))return n=r,e;n=r;var o=e.getSelection();if(t&&o.equals(t))return t=e.getSelection(),e;var a=i.getAll();if(t&&p(r,t.getStartKey(),t.getEndKey()).some((function(e){return a.includes(e)})))return t=o,y(e);return p(r,o.getStartKey(),o.getEndKey()).some((function(e){return a.includes(e)}))?(t=o,y(e)):e},keyBindingFn:function(e,t){var n=t.getEditorState,r=t.setEditorState,o=n();if(m(o,i)&&(37===e.keyCode&&u(n,r,"up",e),39===e.keyCode&&u(n,r,"down",e),38===e.keyCode&&u(n,r,"up",e),40===e.keyCode))u(n,r,"down",e);else if(!e.shiftKey){if(37===e.keyCode){var a=o.getSelection(),c=a.getAnchorKey(),l=o.getCurrentContent().getBlockBefore(c);l&&0===a.getAnchorOffset()&&i.includes(l.getKey())&&u(n,r,"up",e)}if(39===e.keyCode){var s=o.getSelection(),d=s.getFocusKey(),f=o.getCurrentContent().getBlockForKey(d),p=o.getCurrentContent().getBlockAfter(d),h="atomic"!==f.getType()&&f.getLength()===s.getFocusOffset();p&&h&&i.includes(p.getKey())&&u(n,r,"down",e)}if(38===e.keyCode){var g=o.getSelection().getAnchorKey(),v=o.getCurrentContent().getBlockBefore(g);v&&i.includes(v.getKey())&&u(n,r,"up",e)}if(40===e.keyCode){var y=o.getSelection().getAnchorKey(),S=o.getCurrentContent().getBlockAfter(y);S&&i.includes(S.getKey())&&u(n,r,"down",e)}}},blockRendererFn:function(e,t){var n=t.getEditorState,o=t.setEditorState;if("atomic"===e.getType()){var i=n();return{props:{isFocused:i.getSelection().getHasFocus()&&h(i,e.getKey()),isCollapsedSelection:i.getSelection().isCollapsed(),setFocusToBlock:function(){!function(e,t,n){var o=e(),i=a().encode(n.getKey(),0,0),c=document.querySelectorAll('[data-offset-key="'+i+'"]')[0],l=window.getSelection(),s=document.createRange();s.setStart(c,0),s.setEnd(c,0),l.removeAllRanges(),l.addRange(s),t(r.EditorState.forceSelection(o,new r.SelectionState({anchorKey:n.getKey(),anchorOffset:0,focusKey:n.getKey(),focusOffset:0,isBackward:!1})))}(n,o,e)}}}}},decorator:f({theme:c,blockKeyStore:i})}}},8189:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(2784),o=n(2367),i=n(2358),a=n.n(i),c=n(138),l=n(2247);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e){return{modifiers:[{name:"arrow",options:{element:e}},{name:"offset",options:{offset:[-4,-4]}}]}}function d(e){var t,n,o,i=e.theme,a=e.getEditorState,c=e.setEditorState,d=e.childNodes,f=e.referenceElement,p=e.show,h=e.rootReferenceElement,g=e.createBlockTypeSelectPopperOptions,m=void 0===g?u:g,v=(0,r.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),y=(0,r.useState)(null),S=y[0],E=y[1],b=(0,r.useState)(null),w=b[0],k=b[1],x=(0,r.useMemo)((function(){return m(w)}),[w,m]),C=(0,l.D)(f,S,x),j=C.styles,L=C.attributes,M=C.update;return(0,r.useEffect)((function(){null==M||M()}),[h,M]),r.createElement("div",s({className:null==(t=i.blockTypeSelectStyles)?void 0:t.popup,ref:E,style:j.popper},L.popper,{"data-show":p,onMouseDown:v}),r.createElement("div",{className:null==(n=i.blockTypeSelectStyles)?void 0:n.popupFrame},d({getEditorState:a,setEditorState:c,theme:i.buttonStyles}),r.createElement("div",s({ref:k,style:j.arrow,className:null==(o=i.blockTypeSelectStyles)?void 0:o.arrow},L.popper))))}function f(e){var t=e.referenceElement,n=e.children,o=e.className,i=e.position,a=e.popperOptions,c=void 0===a?{placement:i,modifiers:[{name:"offset",options:{offset:[0,33]}}]}:a,u=(0,r.useState)(null),d=u[0],f=u[1],p=(0,l.D)(t,d,c),h=p.styles,g=p.attributes;return r.createElement("div",s({ref:f,style:h.popper},g.popper,{className:o}),n)}function p(e){return r.createElement("div",null,r.createElement(c.gS,e),r.createElement(c.oV,e),r.createElement(c.YC,e),r.createElement(c.Ou,e),r.createElement(c.cU,e),r.createElement(c.pu,e))}function h(e){var t,n,o=e.theme,i=e.position,c=e.popperOptions,l=e.store,s=e.createBlockTypeSelectPopperOptions,u=e.children,h=void 0===u?p:u,g=e.sideToolbarButtonComponent,m=(0,r.useState)(!1),v=m[0],y=m[1],S=(0,r.useState)(null),E=S[0],b=S[1],w=(0,r.useState)(null),k=w[0],x=w[1],C=(0,r.useCallback)((function(e){var t=e.getSelection();if(!t.getHasFocus())return b(null),void y(!1);var n=e.getCurrentContent().getBlockForKey(t.getStartKey()),r=a().encode(n.getKey(),0,0);setTimeout((function(){var e=document.querySelectorAll('[data-offset-key="'+r+'"]')[0];b(e)}),0)}),[]);return(0,r.useEffect)((function(){return l.subscribeToItem("editorState",C),function(){l.unsubscribeFromItem("editorState",C)}}),[l]),null===E?null:r.createElement(r.Fragment,null,r.createElement(f,{className:null==(t=o.toolbarStyles)?void 0:t.wrapper,referenceElement:E,position:i,popperOptions:c},r.createElement("div",{ref:x,onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)}},r.createElement(g,{className:null==(n=o.blockTypeSelectStyles)?void 0:n.blockType}))),r.createElement(d,{getEditorState:l.getItem("getEditorState"),setEditorState:l.getItem("setEditorState"),theme:o,childNodes:h,referenceElement:k,show:v,rootReferenceElement:E,createBlockTypeSelectPopperOptions:s}))}var g={buttonStyles:{buttonWrapper:"b1x6qj4x",button:"b1vm70k4",active:"ah6tpgz"},blockTypeSelectStyles:{blockType:"bloz0n9",popupFrame:"p98xzql",popup:"p1sbsapy",arrow:"a1f9fdzj"},toolbarStyles:{wrapper:"wev3spl"}};function m(e){var t=e.className;return r.createElement("div",{className:t},r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))}var v=function(e){void 0===e&&(e={});var t=(0,o.MT)({isVisible:!1}),n=e,i=n.position,a=void 0===i?"left":i,c=n.theme,l=void 0===c?g:c,u=n.sideToolbarButtonComponent,d=void 0===u?m:u,f=n.popperOptions,p=n.createBlockTypeSelectPopperOptions;return{initialize:function(e){var n=e.setEditorState,r=e.getEditorState,o=e.getEditorRef;t.updateItem("getEditorState",r),t.updateItem("setEditorState",n),t.updateItem("getEditorRef",o)},onChange:function(e){return t.updateItem("editorState",e),e},SideToolbar:function(e){return r.createElement(h,s({},e,{store:t,theme:l,position:a,popperOptions:f,sideToolbarButtonComponent:d,createBlockTypeSelectPopperOptions:p}))}}}},2367:function(e,t,n){"use strict";n.d(t,{MT:function(){return i},ZP:function(){return c},$m:function(){return a}});var r=n(1503);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e){void 0===e&&(e={});var t=e,n={};return{subscribeToItem:function(e,t){n[e]=n[e]||[],n[e].push(t)},unsubscribeFromItem:function(e,t){var r=n[e];r&&(n[e]=r.filter((function(e){return e!==t})))},updateItem:function(e,r){var i;t=o({},t,((i={})[e]=r,i));var a=n[e];a&&a.forEach((function(n){return n(t[e])}))},getItem:function(e){return t[e]}}}function a(e,t,n){for(var r,o,i=t.getText();null!==(r=e.exec(i));)r.index===e.lastIndex&&(e.lastIndex+=1),n(o=r.index,o+r[0].length)}var c={decodeOffsetKey:function(e){var t=e.split("-"),n=t[0],r=t[1],o=t[2];return{blockKey:n,decoratorKey:parseInt(r,10),leafKey:parseInt(o,10)}},createLinkAtSelection:function(e,t){var n=e.getCurrentContent().createEntity("LINK","MUTABLE",{url:t}).getLastCreatedEntityKey(),o=r.RichUtils.toggleLink(e,e.getSelection(),n);return r.EditorState.forceSelection(o,e.getSelection())},removeLinkAtSelection:function(e){var t=e.getSelection();return r.RichUtils.toggleLink(e,t,null)},collapseToEnd:function(e){var t=e.getSelection();return r.EditorState.forceSelection(e,t.merge({anchorKey:t.getEndKey(),focusKey:t.getEndKey(),anchorOffset:t.getEndOffset(),focusOffset:t.getEndOffset()}))},getCurrentEntityKey:function(e){var t=e.getSelection(),n=t.getAnchorKey(),r=e.getCurrentContent().getBlockForKey(n),o=t.getAnchorOffset(),i=t.getIsBackward()?o-1:o;return r.getEntityAt(i)},getCurrentEntity:function(e){var t=e.getCurrentContent(),n=this.getCurrentEntityKey(e);return n?t.getEntity(n):null},hasEntity:function(e,t){var n=this.getCurrentEntity(e);return Boolean(n&&n.getType()===t)}}}},function(e){e.O(0,[501,476,247,939,774,888,179],(function(){return t=1453,e(e.s=t);var t}));var t=e.O();_N_E=t}]);