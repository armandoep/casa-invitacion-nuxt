exports.ids = [6];
exports.modules = {

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("139f2100", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bodas.d28d1b1.jpg";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/15anos.df63e8a.jpg";

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/graduacion.5282f9e.jpg";

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/celebraciones.575ff15.jpg";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/personalizadas.d642e72.jpg";

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".productsCI{display:grid;grid-template-columns:repeat(12,minmax(0,80px));grid-column-gap:16px;grid-template-rows:auto auto 250px 200px;margin-top:150px;margin-bottom:250px}.productsCI img{width:100%;max-width:100%}.productsCI .bodas{justify-self:center;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content;grid-column:4/8;grid-row:1}.productsCI .bodas .secondaryBtn{transform:translate(-24px,-40px);width:-webkit-max-content;width:-moz-max-content;width:max-content}.productsCI .description{grid-column:8/12;grid-row:2;transform:translateY(-70px)}.productsCI .description p{color:var(--primary-60)}.productsCI .celeb15{grid-column:2/8;grid-row:2}.productsCI .celeb15 a{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.productsCI .celeb15 .secondaryBtn{width:-webkit-max-content;width:-moz-max-content;width:max-content;transform:translate(-16px,-40px)}.productsCI .graduation{grid-column:1/5;grid-row:3;transform:translateY(-110px);z-index:2;padding-left:16px}.productsCI .graduation img{outline:16px solid var(--neutral-00)}.productsCI .graduation .secondaryBtn{transform:translateY(-40px);width:-webkit-max-content;width:-moz-max-content;width:max-content}.productsCI .celebration{grid-column:7/12;grid-row:3;z-index:2}.productsCI .celebration a:first-child{display:flex;flex-direction:column;align-items:flex-end}.productsCI .celebration img{outline:16px solid var(--neutral-00)}.productsCI .celebration .secondaryBtn{transform:translate(40px,-40px);width:-webkit-max-content;width:-moz-max-content;width:max-content}.productsCI .personalized{grid-column:4/8;grid-row:4;transform:translateY(-130px);z-index:0}.productsCI .personalized .secondaryBtn{transform:translate(20px,-40px);width:-webkit-max-content;width:-moz-max-content;width:max-content}@media screen and (max-width:426px){.productsCI{margin-top:50px;margin-bottom:50px;grid-column-gap:8px;grid-template-rows:auto auto auto auto auto}.productsCI .bodas{grid-column:3/12;grid-row:2}.productsCI .description{grid-column:2/12;grid-row:1;transform:translateY(0);padding-bottom:40px}.productsCI .celeb15{grid-column:2/11;grid-row:3;padding:0}.productsCI .graduation{grid-column:3/12;grid-row:4;transform:translateY(0);padding-left:0}.productsCI .graduation .secondaryBtn{transform:translateY(-40px)}.productsCI .celebration{grid-column:2/11;grid-row:5}.productsCI .personalized{grid-column:4/10;grid-row:6;transform:translateY(0)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Products.vue?vue&type=template&id=265e876a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"productsCI container"},[_vm._ssrNode("<div class=\"bodas\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(71)))+" alt> <div class=\"secondaryBtn\">\n                Bodas\n            </div></a></div> <div class=\"celeb15\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(72)))+" alt> <div class=\"secondaryBtn\">\n                15 Años\n            </div></a></div> <div class=\"description\"><h2 class=\"header2\">Invitacinones</h2> <p class=\"paragraphStyle\">Creamos y diseñamos invitaciones únicas y especiales para cada cliente, siendo siempre  una amiga que toma en cuenta tus ideas, estilo y presupuesto.\n        </p></div> <div class=\"graduation\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(73)))+" alt> <div class=\"secondaryBtn\">\n                Graduación\n            </div></a></div> <div class=\"celebration\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(74)))+" alt> <div href=\"#\" class=\"secondaryBtn\">\n                Celebraciones\n            </div></a></div> <div class=\"personalized\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(75)))+" alt> <div class=\"secondaryBtn\">\n                Personalizadas\n            </div></a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Products.vue?vue&type=template&id=265e876a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Products.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Productsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Products.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Productsvue_type_script_lang_js_ = (Productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Products.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2f106e75"
  
)

/* harmony default export */ var Products = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=products.js.map