exports.ids = [10];
exports.modules = {

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3758b980", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_1.d6c4f5b.jpg";

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_2.c88868a.jpg";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_3.0f3af0c.jpg";

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slideshowContainer figure img{width:100%;height:90vh;-o-object-fit:cover;object-fit:cover;position:relative;justify-content:center;align-content:center}.slideshowContainer figcaption{font-family:var(--fontFamilyMontserrat);font-size:var(--fontSizeHeaderSmall);font-weight:600;color:var(--primary-70)}.caption{position:absolute;top:8em;left:1.5em}.scrollDown{width:64px;position:absolute;top:85vh;left:calc(50vw - 32px);display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto 30px 40px}.scrollDown svg{grid-column:1/-1;justify-self:center;fill:var(--primary-60)}.scrollDown p{grid-row:3;color:var(--primary-60);justify-self:center}.scrollDown P:last-child{grid-column:3}.vl{height:66px;grid-row:2/4;grid-column:2;border-left:2px solid var(--primary-40);justify-self:center;align-self:end}.mySlide{display:none}.fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{0%{opacity:.4}to{opacity:1}}@keyframes fade{0%{opacity:.4}to{opacity:1}}@media screen and (max-width:426px){.slideshowContainer figure img{height:80vh}.caption{top:2em}.scrollDown{top:75vh}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slides.vue?vue&type=template&id=c0745752&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:" slideshowContainer"},[_vm._ssrNode("<div class=\"mySlide fade\" style=\"display: block;\"><figure><img"+(_vm._ssrAttr("src",__webpack_require__(59)))+" alt=\"first Slide\"></figure> <div class=\"caption\"><figcaption>Diseño y creación de invitaciones y detalles únicos para los eventos más importantes.</figcaption></div></div> <div class=\"mySlide fade\"><figure><img"+(_vm._ssrAttr("src",__webpack_require__(60)))+" alt=\"first Slide\"></figure> <div class=\"caption\"><figcaption>Amor en cada detalle.</figcaption></div></div> <div class=\"mySlide fade\"><figure><img"+(_vm._ssrAttr("src",__webpack_require__(61)))+" alt=\"first Slide\"></figure> <div class=\"caption\"><figcaption>Caption 3</figcaption></div></div> <div class=\"scrollDown\"><svg width=\"24\" height=\"24\" viewbox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.5C12.1989 4.5 12.3897 4.57902 12.5303 4.71967C12.671 4.86032 12.75 5.05109 12.75 5.25V8.25C12.75 8.44891 12.671 8.63968 12.5303 8.78033C12.3897 8.92098 12.1989 9 12 9C11.8011 9 11.6103 8.92098 11.4697 8.78033C11.329 8.63968 11.25 8.44891 11.25 8.25V5.25C11.25 5.05109 11.329 4.86032 11.4697 4.71967C11.6103 4.57902 11.8011 4.5 12 4.5ZM18 16.5V7.5C18 5.9087 17.3679 4.38258 16.2426 3.25736C15.1174 2.13214 13.5913 1.5 12 1.5C10.4087 1.5 8.88258 2.13214 7.75736 3.25736C6.63214 4.38258 6 5.9087 6 7.5V16.5C6 18.0913 6.63214 19.6174 7.75736 20.7426C8.88258 21.8679 10.4087 22.5 12 22.5C13.5913 22.5 15.1174 21.8679 16.2426 20.7426C17.3679 19.6174 18 18.0913 18 16.5ZM12 0C10.0109 0 8.10322 0.790176 6.6967 2.1967C5.29018 3.60322 4.5 5.51088 4.5 7.5V16.5C4.5 18.4891 5.29018 20.3968 6.6967 21.8033C8.10322 23.2098 10.0109 24 12 24C13.9891 24 15.8968 23.2098 17.3033 21.8033C18.7098 20.3968 19.5 18.4891 19.5 16.5V7.5C19.5 5.51088 18.7098 3.60322 17.3033 2.1967C15.8968 0.790176 13.9891 0 12 0V0Z\" fill></path></g></svg> <p>ES<br>TD</p> <div class=\"vl\"></div> <p>20<br>03</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Slides.vue?vue&type=template&id=c0745752&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slides.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Slidesvue_type_script_lang_js_ = ({
  data() {
    return {
      slidesIndex: 0
    };
  },

  mounted() {// this.showSlides()
  },

  methods: {
    showSlides() {
      var i; // var slides = document.getElementsByClassName("mySlide");

      let slides = this.$el.querySelector('.mySlide');
      console.log(slides);

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      this.slideIndex++;

      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }

      slides[this.slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 8000);
    }

  }
});
// CONCATENATED MODULE: ./components/Slides.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Slidesvue_type_script_lang_js_ = (Slidesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Slides.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Slidesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "77201d9a"
  
)

/* harmony default export */ var Slides = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=slides.js.map