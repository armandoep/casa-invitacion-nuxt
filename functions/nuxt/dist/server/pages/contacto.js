exports.ids = [12,2,3,4];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacto.vue?vue&type=template&id=3b9ab71a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('ContactForm'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contacto.vue?vue&type=template&id=3b9ab71a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacto.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contactovue_type_script_lang_js_ = ({
  name: 'ContactPage',

  head() {
    return {
      title: 'Contacto'
    };
  }

});
// CONCATENATED MODULE: ./pages/contacto.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactovue_type_script_lang_js_ = (contactovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contacto.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2bc68dd2"
  
)

/* harmony default export */ var contacto = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(30).default,ContactForm: __webpack_require__(95).default,Footer: __webpack_require__(31).default})


/***/ }),

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

/***/ 28:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAwCAMAAAARpGUrAAAAQlBMVEUAAAChxsuhxcuhxcuhxcufxs6hxcufv8ehxcufv8+hxsyhxcufz8+gxMygxcuhxsqfxcqixcufxMufv8qfwsqhxctbWIqOAAAAFXRSTlMA3z+/fyCfIO8Qj88QT19vMK9wMGAgWGxtAAACxElEQVRYw+2WS5bjIAxFkQRYgPklYf9bbQubtH0qVekJNeiTNwnBwJX0AFt99NF/rBTV70q3pKZpLY+stfVaRzP6Ik8CruiJofqcIm5KA2nsomYIidlHd+rxrah5KtQIr122aTVPkQHVVXoHmvTGigf+aNRDvPkqA8F9AwRwu8XWvLSiAR9VesSDcn5K1sLrFJdvgdsT9DXHlpS0/DlQan6pVfotWM1l6/I8TlIE1hJtcK+IQV11OwM94dbyEjPVdh5E9+2hU2vtI0itnjW1uEcjPGkE9Ur2uivTBbi11xC2NQgNawHL05VkkLZbE/YRDkE7u6d4Y1qOpZN6r9JsN6QDldSxgrtBlp4NXCn0aFCtNvfz2kcYv0F0yzKzch72kHovw7b/1qe7Foq1boPDcgt4a3FP31RUzxEY8mG/PLwPv2D5ByDsQN3GNA0YYjcubmCpbAeWh/sLzFJF0/wwQ7TqW3RvcfEBrHXGzcs8gJy6KabZIJWtQlieM4yEZL0sDTDMEGFo+udbNVsI1jeIKAL/BFp/HNqwCMxt0TyBSYCNJLqj2x9AncH+kFomoIxOreEYLwvjXsqQ954mVqKYS3qE6RcZwbuf0E3coyn1LgG81pqJ/UYTDaBrRXnd9y3cz3eCZOPGUtE6QRxzCvfAdI+kOlXtN+l5JnQHm4Y/SAj6bIrh1H+btOEY05OHMOYEZaKSf6mXJeBLXmU9ch8lFTnYT5QP7ug4Nm4uAonKPIh6V6puzAmgnaKSaT/9FF/UU7N1f+kdeBW61weoMeHR/vLeG6fUfT0aCGPa806bK8/5HNt0oCE6ExKLYzNVwF/fh1bNFUI676DatJqrxPdLvhzVXJUL8MZh9iY1gNePFacmy+pzgoKfLIS/5Z2e4PVbZ/WNUP2CghuXKnT2fFHpH9lMc3nX+y0wW1S/KExFffTRR1/0B9X1Ge+Rl0qUAAAAAElFTkSuQmCC"

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("700a9420", content, true, context)
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=f1b07676&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\" container preFooter\"><div class=\"instaFeed\"><h3>En Insta</h3> <a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt=\"En Insta\"></a></div> <div class=\"pinFeed\"><h3>Inspo Pins</h3> <div class=\"pinImages\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt></a> <a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt></a> <a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt></a> <a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt></a></div></div> <div class=\"signature\"><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt></div> <div class=\"moreInfo\"><p><strong>Dirección</strong><br> 7a avenida 13-26 zona 9, edificio Alameda Local 3 </p> <p><strong>Horario de Atención</strong> <br> Lunes a Viernes: 9:00 a 18:00 hr.\n            <br> Sábados: 9:00 a 12:00 hr. </p> <a href=\"tel:2332-6803\"><strong>Teléfono: </strong>2332-6803</a><br> <a href=\"https://wa.me/+50247984631?text=Hola%20estoy%20interesado%20en%20cotizar%20con%20ustedes.\" target=\"_blank\"><strong>Whatsapp: </strong>4798-4631</a></div></section> <footer><div class=\"container\"><nav class=\"socialMenuTwo\"><ul><li><a target=\"_blank\" href=\"https://www.waze.com/es/live-map/directions/guatemala/guatemala/ciudad-de-guatemala/casa-invitacion?place=ChIJyXUBuHGjiYUR2MJFMOotNuk&utm_campaign=waze_website&utm_medium=website_menu&utm_source=waze_website\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M20.54 6.63c.69.94 1.15 2.04 1.35 3.19.21 1.25.11 2.52-.31 3.72a7.349 7.349 0 01-2 3.06 9.1 9.1 0 01-2.26 1.58c.41 1.07-.13 2.27-1.2 2.68-.24.09-.49.14-.74.14a2.08 2.08 0 01-2.07-2h-3.07c-.11 1.14-1.13 2-2.27 1.87-1.06-.1-1.86-.98-1.88-2.04.01-.19.04-.39.1-.57a8.37 8.37 0 01-4-2.85c-.33-.44-.23-1.07.23-1.41.18-.14.4-.22.63-.22.72 0 1-.25 1.17-.63.24-.72.38-1.47.39-2.23.03-.53.09-1.05.17-1.57A7.307 7.307 0 017.5 5c1.66-1.3 3.69-2 5.79-2 1.43 0 2.84.35 4.11 1a8.67 8.67 0 013.14 2.63zM9.85 9.31c.03.59.54 1.03 1.12 1l.03-.02a1 1 0 00.97-1.04c-.03-.64-.54-1.09-1.12-1.06-.58.04-1.03.54-1 1.12zm5.81 1c-.58.03-1.09-.41-1.12-1-.04-.58.42-1.08 1-1.12.58-.03 1.09.42 1.12 1.06.02.55-.41 1.02-1 1.04v.02zm-5.54 1.14c-.28.05-.47.34-.41.62l-.03-.01c.43 1.58 1.9 2.65 3.53 2.58h.11c.84-.01 1.65-.28 2.34-.76.6-.43 1.04-1.05 1.23-1.76 0-.2-.11-.37-.29-.47-.25-.15-.57-.03-.71.23a2.592 2.592 0 01-2.57 1.72 2.5 2.5 0 01-2.58-1.74.539.539 0 00-.62-.41z\" clip-rule=\"evenodd\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://www.instagram.com/casainvitaciongt/\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\"><path fill=\"#fff\" d=\"M20.947 8.305a6.531 6.531 0 00-.419-2.216 4.61 4.61 0 00-2.633-2.633 6.606 6.606 0 00-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 00-2.185.42 4.607 4.607 0 00-2.633 2.633 6.554 6.554 0 00-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.42 2.187a4.61 4.61 0 002.633 2.632 6.586 6.586 0 002.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.593 6.593 0 002.186-.419 4.616 4.616 0 002.633-2.633c.263-.7.404-1.438.42-2.187.042-.962.055-1.267.055-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297a4.622 4.622 0 01-4.623-4.623 4.622 4.622 0 114.623 4.623zm4.807-8.339a1.077 1.077 0 110-2.156 1.077 1.077 0 010 2.156z\"></path> <path fill=\"#fff\" d=\"M11.994 14.982a3.003 3.003 0 100-6.006 3.003 3.003 0 000 6.006z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://www.facebook.com/casainvitacion\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\"><path fill=\"#fff\" d=\"M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 001-1V4a1 1 0 00-1-1z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"www.pinterest.com/cinvitacion\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\"><path fill=\"#fff\" d=\"M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 01.069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 002.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://wa.me/+50247984631?text=Hola%20estoy%20interesado%20en%20cotizar%20con%20ustedes.\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\"><path fill=\"#fff\" d=\"M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.953 9.953 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231c.131-.067.259-.14.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.418 1.418 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.011 6.011 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.298 6.298 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249a4.439 4.439 0 00-.162-.016 3.385 3.385 0 00-.403.004v.001z\"></path></svg></a></li></ul></nav> <nav class=\"footerMenu\"><ul><li><a href=\"#\">Invitaciones</a></li> <li><a href=\"#\">Stationary</a></li> <li><a href=\"#\">Recursos</a></li> <li><a href=\"#\">Blog</a></li> <li><a href=\"#\">Sobre Nosotros</a></li> <li><a href=\"#\">Cotizar</a></li></ul></nav> <p>© 2021 Casa Invitación</p></div></footer>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=f1b07676&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Footervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "51c1ad28"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(31).default})


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

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4ccdc17a", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Instagram.d2ff43c.jpg";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pin 01.9d42bd4.jpg";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pin 02.51f50be.jpg";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pin 03.f41e649.jpg";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pin 04.f41e649.jpg";

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "footer{width:100%;background-color:var(--primary-90);height:48px}footer ul{margin:0;padding:0;list-style:none}footer a{color:var(--primary-10);text-decoration:none;font-size:var(--fontSizeSmall);white-space:nowrap}footer .container{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:48px;align-content:center;padding-left:24px;padding-right:24px}.footerMenu{padding-left:60px;grid-column:2}.footerMenu ul{height:100%;display:flex;align-items:center;flex-wrap:wrap}.footerMenu li{margin-left:1em}footer .socialMenuTwo{grid-column:1;grid-row:1;align-self:center}footer .socialMenuTwo ul{display:grid;grid-template-columns:repeat(5,auto);grid-column-gap:8px;grid-row-gap:0}footer .socialMenuTwo li:first-child{grid-column:1}footer svg{fill:var(--primary-10);width:20px;height:20px}footer p{color:var(--primary-10);align-self:center}.preFooter{border-top:1px solid var(--primary-30);display:grid;grid-template-columns:repeat(12,minmax(auto,80px));grid-template-rows:auto auto;justify-content:center;grid-column-gap:16px;-moz-column-gap:16px;column-gap:16px}.instaFeed{grid-column:1/4;grid-row:1/3;border-right:1px solid var(--primary-30);display:flex;flex-direction:row;justify-content:flex-end;padding:40px 16px 40px 0}.instaFeed h3{font-family:var(--fontFamilyOvo);font-size:var(--fontSizeHeaderSmall);color:var(--primary-60);font-weight:400;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;text-align:center;transform:rotate(180deg)}.pinFeed{grid-column:4/10;grid-row:1;border-bottom:1px solid var(--primary-30);padding:16px 24px}.pinFeed h3{font-family:var(--fontFamilyOvo);font-size:var(--fontSizeHeaderSmall);color:var(--primary-60);font-weight:400}.pinFeed a{grid-row:2}.pinImages{display:flex;grid-column-gap:16px;-moz-column-gap:16px;column-gap:16px;grid-row-gap:16px;row-gap:16px;justify-content:center;flex-wrap:wrap}.signature{grid-column:4/10;grid-row:2;align-self:center;justify-self:center}.moreInfo{grid-column:10/13;grid-row:1/3;border-left:1px solid var(--primary-30);display:flex;flex-direction:column;justify-content:center;padding-left:16px;padding-right:0}@media screen and (max-width:769px){.footerMenu{display:none}footer p{justify-self:end}}@media screen and (max-width:426px){footer .container{grid-template-columns:auto auto;grid-template-rows:48px;padding-left:0;padding-right:0}footer .socialMenuTwo{grid-column:1;grid-row:1;align-self:center;padding-left:16px}footer .socialMenuTwo ul{display:grid;grid-template-columns:auto auto auto auto auto;grid-column-gap:0}footer .socialMenuTwo li:first-child{grid-column:1}footer p{justify-self:end;padding-right:16px}.preFooter{grid-template-columns:auto}.instaFeed{display:none}.pinFeed{grid-column:1;grid-row:1;padding:16px 8px}.pinImages{grid-column-gap:8px;-moz-column-gap:8px;column-gap:8px;grid-row-gap:16px;row-gap:16px;justify-content:center;flex-wrap:wrap}.signature{grid-column:1;grid-row:2}.moreInfo{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero-image-coti{background-image:url(/img/contact-hero-image.jpg);width:auto;height:258px}.contact-div{background-color:var(--neutral-00);display:grid;transform:translateY(-4.125rem) scale(1)}.title{max-width:526px;grid-column:auto;text-align:center;justify-self:center;transform:translateY(-2.125rem) scale(1)}.title-first{font-family:var(--fontFamilyPlayfair);font-style:italic;font-size:var(--fontSizeHeaderXLarge);color:var(--primary-60)}.title-subtitle{margin-top:4px;font-family:var(--fontFamilyMontserrat);color:var(--primary-70);font-size:var(--fontSizeMedium)}.contact-form{margin-top:30px;display:grid;grid-template-columns:auto auto;grid-column-gap:16px}.item{margin-top:16px;display:grid;grid-template-rows:auto auto;position:relative;height:61px;align-items:end;color:var(--primary-70)}.item,.item label{font-size:var(--fontSizeMedium)}.item label{position:absolute;top:10px;left:0;transition:all .2s ease}.item input:not(:-moz-placeholder-shown)~label{top:-20px}.item input:not(:-ms-input-placeholder)~label{top:-20px}.item input:focus~label,.item input:not(:placeholder-shown)~label,.item input:valid~label{top:-20px}.item-desc{grid-template-rows:auto auto;height:153px;margin-top:16px;font-size:var(--fontSizeMedium)}.item-call,.item-desc{display:grid;grid-column:1/span 2;color:var(--primary-70)}.item-call{height:61px;align-items:end;font-size:var(--fontSizeSmall)}.contact-form input{display:block}.contact-form input,.contact-form textarea{font-size:var(--fontSizeMedium);border:none;outline:none;border-bottom:1px solid var(--primary-70);font-family:var(--fontFamilyMontserrat)}.item input[type=checkbox]{display:inline}.moreInfo p{margin-bottom:8px;color:var(--primary-60)}.moreInfo a{color:var(--primary-60);padding-bottom:4px}@media screen and (max-width:769px){.contact-div{margin-left:24px;margin-right:24px}.moreInfo{grid-column:10/13;grid-row:1/3;border-left:1px solid var(--primary-30);display:flex;flex-direction:column;justify-content:center;padding-left:16px;padding-right:8px}.moreInfo a,.moreInfo p{font-size:var(--fontSizeSmall)}}@media screen and (max-width:426px){.contact-form{margin-top:30px;display:flex;flex-direction:column;grid-column-gap:16px}.contact-div .primaryBtn{border:0;margin-top:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=template&id=35ab3ce8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"hero-image-coti\"></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"contact-div\">","</div>",[_vm._ssrNode("<div class=\"title\"><h1 class=\"title-first\">Cotiza con Nosotras</h1> <p class=\"title-subtitle\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim labore illo in, vitae quisquam dolore voluptates maiores repudiandae magni.</p></div> "),_vm._ssrNode("<form id=\"contact-form\" name=\"contact-form\" method=\"post\" class=\"contact-form\">","</form>",[_vm._ssrNode("<div class=\"form-group item\"><input type=\"text\" name=\"name\" id=\"name\" placeholder required=\"required\""+(_vm._ssrAttr("value",(_vm.name)))+"> <label for=\"name\">Nombre</label></div> <div class=\"form-group item\"><input type=\"email\" name=\"email\" id=\"email\" placeholder=\" \" required=\"required\""+(_vm._ssrAttr("value",(_vm.email)))+"> <label for=\"email\">Email</label></div> <div class=\"form-group item\"><input type=\"tel\" name=\"phone-number\" id=\"phone-number\" placeholder=\" \" required=\"required\""+(_vm._ssrAttr("value",(_vm.phoneNumber)))+"> <label for=\"phone-number\">Telefono</label></div> <div class=\"form-group item\"><input type=\"date\" name=\"event-date\" id=\"event-date\" required=\"required\""+(_vm._ssrAttr("value",(_vm.date)))+"> <label for=\"event-date\">Fecha del Evento</label></div> <div class=\"form-group item\" style=\"display:none;\"><input type=\"text\" name=\"card-code\" id=\"card-code\" placeholder=\" \""+(_vm._ssrAttr("value",(_vm.cardCode)))+"> <label for=\"card-code\">Codigo de Tarjeta</label></div> <div class=\"form-group item\" style=\"display:none;\"><input type=\"text\" name=\"quantity\" id=\"quantity\""+(_vm._ssrAttr("value",(_vm.quantity)))+"> <label for=\"quantity\">Cantidad</label></div> <div class=\"form-group item-desc\"><label for=\"description\">Cuentanos Más</label> <textarea type=\"text\" name=\"description\" id=\"description\" required=\"required\">"+_vm._ssrEscape(_vm._s(_vm.description))+"</textarea></div> <div class=\"item-call\"><label for=\"call-request\"><input type=\"checkbox\" name=\"call-request\" id=\"call-request\""+(_vm._ssrAttr("checked",Array.isArray(_vm.call)?_vm._i(_vm.call,null)>-1:(_vm.call)))+"> Deseas que te llamemos?</label></div> <input type=\"hidden\" name=\"action\" value=\"process_form\"> "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_c('recaptcha')],1),_vm._ssrNode(" <span id style=\"display:none;\">Por favor chequee el captcha</span> <button type=\"submit\" name=\"btn-submit\" id=\"btn-submit\" class=\"primaryBtn\">Solicitar</button>")],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=template&id=35ab3ce8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ContactFormvue_type_script_lang_js_ = ({
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      date: "",
      cardCode: "",
      quantity: "",
      description: "",
      call: ""
    };
  },

  methods: {
    async sendMail() {
      try {
        const token = await this.$recaptcha.getResponse();

        if (token) {
          this.$toast.show('Enviando Mensaje');
          await this.$mail.send({
            from: 'Casa Invitacion',
            subject: `Nuevo mensaje de ${this.name}`,
            text: `Hola Jimena, has recibido un nuevo mensaje. \n
Estos son los datos del cliente: \n
Nombre: ${this.name} \n
Correo: ${this.email} \n
Numero de telefono: ${this.phoneNumber} \n
Fecha: ${this.date} \n
Descripcion: ${this.description} \n
Llamar?: ${this.email ? 'Si' : 'No'} \n
`
          });
          this.$toast.success('Mensaje enviado correctamente');
          this.$toast.info('Te contactaremos lo mas pronto posible');
          this.name = "";
          this.email = "";
          this.phoneNumber = "";
          this.date = "";
          this.cardCode = "";
          this.quantity = "";
          this.description = "";
          this.call = "";
          await this.$recaptcha.reset();
        }
      } catch (error) {
        console.log(error);
        this.$toast.error('Ha ocurrido un error, por favor asegurese de que todos los campos estan llenos');
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactFormvue_type_script_lang_js_ = (ContactFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ab32afa"
  
)

/* harmony default export */ var ContactForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contacto.js.map