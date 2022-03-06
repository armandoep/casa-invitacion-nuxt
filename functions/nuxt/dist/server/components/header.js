exports.ids = [4];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("257af960", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=0fcae823&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_vm._ssrNode("<div class=\"container\"><div class=\"logo\"><a href=\"/\"></a></div> <input type=\"checkbox\" id=\"nav-toggle\" class=\"nav-toggle\"> <nav class=\"mainMenu\"><ul><li><a href=\"/\">Home</a></li> <li><a href=\"/contacto\">Contacto</a></li></ul></nav> <nav class=\"socialMenu\"><ul><li><a href=\"tel:2332-6803\">Tel: 2332-6803</a></li> <li><a target=\"_blank\" href=\"https://www.waze.com/es/live-map/directions/guatemala/guatemala/ciudad-de-guatemala/casa-invitacion?place=ChIJyXUBuHGjiYUR2MJFMOotNuk&utm_campaign=waze_website&utm_medium=website_menu&utm_source=waze_website\"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Ubicación Casa Invitacion\"></a></li> <li><a target=\"_blank\" href=\"https://www.instagram.com/casainvitaciongt/\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Instagram\"></a></li> <li><a target=\"_blank\" href=\"https://www.facebook.com/casainvitacion\"><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt=\"Facebook\"></a></li> <li><a target=\"_blank\" href=\"www.pinterest.com/cinvitacion\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"Pinterest\"></a></li> <li><a target=\"_blank\" href=\"https://wa.me/+50247984631?text=Hola%20estoy%20interesado%20en%20cotizar%20con%20ustedes.\"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt=\"Whatsapp\"></a></li></ul></nav> <label for=\"nav-toggle\" class=\"nav-toggle-label\"><span></span></label></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=0fcae823&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0f5ce544"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(30).default})


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_waze.c0ae43c.svg";

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_instagram.40f2492.svg";

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgMkgyLjY2NjY3QzIuNDg5ODYgMiAyLjMyMDI5IDIuMDcwMjQgMi4xOTUyNiAyLjE5NTI2QzIuMDcwMjQgMi4zMjAyOSAyIDIuNDg5ODYgMiAyLjY2NjY3VjEzLjMzMzNDMiAxMy41MTAxIDIuMDcwMjQgMTMuNjc5NyAyLjE5NTI2IDEzLjgwNDdDMi4zMjAyOSAxMy45Mjk4IDIuNDg5ODYgMTQgMi42NjY2NyAxNEg4LjQxVjkuMzZINi44NTEzM1Y3LjU0MzMzSDguNDFWNi4yMUM4LjQxIDQuNjYgOS4zNTY2NyAzLjgxNTMzIDEwLjc0MzMgMy44MTUzM0MxMS4yMDkzIDMuODE0IDExLjY3NiAzLjgzOCAxMi4xNCAzLjg4NjY3VjUuNUgxMS4xODMzQzEwLjQzMTMgNS41IDEwLjI4NDcgNS44NTg2NyAxMC4yODQ3IDYuMzgzMzNWNy41NEgxMi4wODI3TDExLjg0OTMgOS4zNTY2N0gxMC4yODRWMTRIMTMuMzMzM0MxMy41MTAxIDE0IDEzLjY3OTcgMTMuOTI5OCAxMy44MDQ3IDEzLjgwNDdDMTMuOTI5OCAxMy42Nzk3IDE0IDEzLjUxMDEgMTQgMTMuMzMzM1YyLjY2NjY3QzE0IDIuNDg5ODYgMTMuOTI5OCAyLjMyMDI5IDEzLjgwNDcgMi4xOTUyNkMxMy42Nzk3IDIuMDcwMjQgMTMuNTEwMSAyIDEzLjMzMzMgMloiIGZpbGw9IiMzQjY5NzEiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_pinterest.461b7c0.svg";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_whatsapp.438eaf9.svg";

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(39);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(40);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header{position:fixed;padding:0 0 .5em;width:100%;background-color:var(--neutral-00);z-index:999;display:flex;justify-content:center}header ul{margin:0;padding:0;list-style:none}header a{color:var(--primary-70);text-decoration:none;font-size:var(--fontSizeSmall);white-space:nowrap}header a:hover{color:var(--primary-40)}header .container{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:80px;align-content:center;padding-left:24px;padding-right:24px}header .container:after{content:\" \";height:1px;background:var(--primary-30);width:100%;grid-column:1/-1}.logo{grid-column:1;width:272px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position-y:center}.logo a:after{display:block;content:\" \";width:272px;height:100%}.mainMenu{grid-column:2}.mainMenu ul{height:100%;display:flex;align-items:center;flex-wrap:wrap}.mainMenu li{margin-left:1em}.socialMenu{grid-column:3;grid-row:1;align-self:center}.socialMenu ul{display:grid;grid-template-columns:repeat(5,auto);grid-template-rows:repeat(2,auto);grid-column-gap:8px;grid-row-gap:4px}.socialMenu li:first-child{grid-column:1/-1;text-align:right}.socialMenu img{width:20px;height:20px}.nav-toggle,.nav-toggle-label{display:none}@media screen and (max-width:769px){header .container{grid-template-columns:1fr auto;grid-template-rows:1fr 1fr;padding-top:8px}.mainMenu{grid-row:2;grid-column:1/-1}.mainMenu ul{margin-bottom:8px;justify-content:center}.mainMenu li{padding:8px 0;margin-left:16px}.socialMenu{grid-row:1;grid-column:2}.nav-toggle-label{display:none}}@media screen and (max-width:426px){body{margin-bottom:48px}header{bottom:0;padding-bottom:0}header nav a{font-size:var(--fontSizeMedium)}header .container{grid-template-columns:1fr auto;grid-template-rows:auto auto auto;margin-bottom:0;padding-top:0}header .container:after{height:0}header .container:before{content:\" \";height:1px;background:var(--primary-30);width:100%;grid-column:1/-1;grid-row:3}.logo{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");width:180px;grid-row:3;grid-column:1}.logo a:after{width:178px;height:40px}.mainMenu ul{margin:0;flex-direction:column;justify-content:flex-start;flex-wrap:nowrap;align-items:stretch;max-height:0;overflow:hidden;opacity:0;transition:opacity .25s ease-in-out .25s,max-height .35s ease-in-out}.mainMenu li{margin-bottom:16px;margin-left:0}.socialMenu{grid-row:1;grid-column:1/-1;align-self:center;justify-self:center}.socialMenu ul{grid-column-gap:16px;grid-row-gap:8px;margin-bottom:0;overflow:hidden;max-height:0;opacity:0;transition:opacity .25s ease-in-out .25s,max-height .25s ease-in-out,margin .25s ease-in-out}.socialMenu ul li:first-child{text-align:center}.nav-toggle-label{width:24px;height:24px;grid-column:2;grid-row:3;align-self:center;display:flex;flex-direction:column;justify-content:center}.nav-toggle-label:after,.nav-toggle-label:before,.nav-toggle-label span{content:\" \";display:block;background-color:var(--primary-70);border-radius:2px;height:2px;width:18px;transition:all .2s ease-in-out}.nav-toggle-label:before{transform:translateY(-3px)}.nav-toggle-label:after{transform:translateY(3px)}.nav-toggle:checked~.nav-toggle-label:after{transform:rotate(-45deg) translateY(-2.5px)}.nav-toggle:checked~.nav-toggle-label:before{transform:rotate(45deg) translateY(3px)}.nav-toggle:checked~.nav-toggle-label span{width:0}.nav-toggle:checked~.mainMenu{transform:scale(1)}.nav-toggle:checked~.mainMenu ul{opacity:1;visibility:visible;max-height:500px}.nav-toggle:checked~.socialMenu ul{opacity:1;max-height:100px;margin-bottom:16px;margin-top:16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logoCI.6c923da.svg";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/LogoCI_Ml.093ecff.svg";

/***/ })

};;
//# sourceMappingURL=header.js.map