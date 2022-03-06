exports.ids = [5];
exports.modules = {

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("703b4480", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/s1_A.b58152d.jpg";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/S1_2.54ae4aa.jpg";

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".introCI{display:grid;grid-template-columns:repeat(12,1fr);grid-column-gap:16px;grid-template-rows:repeat(4,auto)}.introCI p{height:-webkit-max-content;height:-moz-max-content;height:max-content}.introCI p:first-of-type{grid-column:9/13;grid-row:2;align-self:center;margin-right:32px}.introCI p:nth-of-type(2){grid-column:2/7;grid-row:3;transform:translateY(-40px)}.content{background-color:var(--primary-10);outline:16px solid var(--neutral-00);padding:16px}.typeDetails{font-size:48px;font-style:italic;color:var(--secondary-50)}.introCI h2:first-of-type{grid-column:9/10;grid-row:1;transform:translateY(16px)}.introCI h2:last-of-type{grid-column:1/2;grid-row:2/4;white-space:nowrap;transform:rotate(-90deg) translate(72px,32px);transform-origin:0 0;width:80px;align-self:end;z-index:5}.introCI img:first-of-type{grid-column:5/9;grid-row:2;height:100%;-o-object-fit:cover;object-fit:cover}.introCI img:last-of-type{grid-column:4/7;grid-row:4;transform:translateY(-120px);z-index:-1;-o-object-fit:cover;object-fit:cover}.introCI .primaryBtnBig{grid-column:7/12;grid-row:4;align-self:center;align-items:center;background-color:var(--secondary-50);padding:8px 8px 8px 30px;display:flex;outline:8px solid var(--neutral-00)}.introCI .primaryBtnBig p{line-height:26px;color:var(--secondary-90)}.introCI .primaryBtnBig .vl{border-left:2px solid var(--secondary-60);align-self:center}.introCI .primaryBtnBig a{text-align:center;background-color:var(--secondary-50);color:var(--secondary-90);border:0;padding:14px 66px;font-size:var(--fontSizeMedium);font-weight:600}@media screen and (max-width:769px){.introCI p:first-of-type{grid-column:8/13}.introCI p:nth-of-type(2){grid-column:2/9;grid-row:3;transform:translateY(0)}.typeDetails{font-size:48px;color:var(--secondary-50)}.introCI h2:last-of-type{grid-column:1/2;grid-row:2/4;white-space:nowrap;transform:rotate(-90deg) translate(72px,40px);transform-origin:0 0;width:80px;align-self:end;z-index:5}.introCI img:first-of-type{grid-column:3/10;grid-row:2;width:90%}.introCI img:last-of-type{transform:translateY(-60px)}.introCI .primaryBtnBig{grid-column:3/12;background-color:var(--secondary-50);padding:8px 8px 8px 16px}}@media screen and (max-width:426px){.introCI{grid-template-columns:repeat(8,1fr);grid-column-gap:8px;grid-template-rows:repeat(6,auto)}.introCI p:first-of-type{grid-column:2/9;grid-row:3;transform:translateY(-64px)}.introCI p:nth-of-type(2){grid-column:1/7;margin-left:16px;grid-row:4;transform:translateY(0)}.introCI h2:first-of-type{grid-column:6/9;transform:translateY(12px)}.introCI h2:last-of-type{display:none}.introCI img:first-of-type{grid-column:1/7;grid-row:2;width:100%;padding-left:24px}.introCI img:last-of-type{grid-column:3/9;grid-row:5;transform:translateY(-60px);width:100%;padding-right:24px}.introCI .primaryBtnBig{grid-column:1/9;grid-row:6;margin:16px;padding:16px;justify-content:center}.introCI .primaryBtnBig button{padding:0}.introCI .primaryBtnBig p,.introCI .vl{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Invitaciones.vue?vue&type=template&id=70c9b8f4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container introCI"},[_vm._ssrNode("<h2 class=\"typeDetails\"><span>Love</span></h2> <img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" alt> <p class=\"content paragraphStyle\">Hola, bienvenidos a Casa Invitación, más que una empresa somos una amiga que desea acompañarte en esta etapa tan linda y significativa para ti, creando detalles y recuerdos que acompañen tu celebración.\n    </p> <h2 class=\"typeDetails\"><span>Custom Made</span></h2> <p class=\"content paragraphStyle\">En Casa Invitación siempre buscamos brindar detalles que reflejen tu estilo y sobre todo que se adapten a tu presupuesto, con la calidad que nos ha caracterizado por 17 años.\n    </p> <img"+(_vm._ssrAttr("src",__webpack_require__(65)))+" alt> <div class=\"primaryBtnBig\"><p>\n        Conoce más sobre\n        nuestras inivtaciones\n        </p> <div class=\"vl\"></div> <a href=\"#\">Ver Invitaciones</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Invitaciones.vue?vue&type=template&id=70c9b8f4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Invitaciones.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Invitacionesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Invitaciones.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Invitacionesvue_type_script_lang_js_ = (Invitacionesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Invitaciones.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Invitacionesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2f5fa3ee"
  
)

/* harmony default export */ var Invitaciones = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=invitaciones.js.map