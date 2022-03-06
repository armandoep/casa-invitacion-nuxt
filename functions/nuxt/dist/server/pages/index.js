exports.ids = [13,1,3,4,5,6,7,8,9,10,11];
exports.modules = Array(26).concat([
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAwCAMAAAARpGUrAAAAQlBMVEUAAAChxsuhxcuhxcuhxcufxs6hxcufv8ehxcufv8+hxsyhxcufz8+gxMygxcuhxsqfxcqixcufxMufv8qfwsqhxctbWIqOAAAAFXRSTlMA3z+/fyCfIO8Qj88QT19vMK9wMGAgWGxtAAACxElEQVRYw+2WS5bjIAxFkQRYgPklYf9bbQubtH0qVekJNeiTNwnBwJX0AFt99NF/rBTV70q3pKZpLY+stfVaRzP6Ik8CruiJofqcIm5KA2nsomYIidlHd+rxrah5KtQIr122aTVPkQHVVXoHmvTGigf+aNRDvPkqA8F9AwRwu8XWvLSiAR9VesSDcn5K1sLrFJdvgdsT9DXHlpS0/DlQan6pVfotWM1l6/I8TlIE1hJtcK+IQV11OwM94dbyEjPVdh5E9+2hU2vtI0itnjW1uEcjPGkE9Ur2uivTBbi11xC2NQgNawHL05VkkLZbE/YRDkE7u6d4Y1qOpZN6r9JsN6QDldSxgrtBlp4NXCn0aFCtNvfz2kcYv0F0yzKzch72kHovw7b/1qe7Foq1boPDcgt4a3FP31RUzxEY8mG/PLwPv2D5ByDsQN3GNA0YYjcubmCpbAeWh/sLzFJF0/wwQ7TqW3RvcfEBrHXGzcs8gJy6KabZIJWtQlieM4yEZL0sDTDMEGFo+udbNVsI1jeIKAL/BFp/HNqwCMxt0TyBSYCNJLqj2x9AncH+kFomoIxOreEYLwvjXsqQ954mVqKYS3qE6RcZwbuf0E3coyn1LgG81pqJ/UYTDaBrRXnd9y3cz3eCZOPGUtE6QRxzCvfAdI+kOlXtN+l5JnQHm4Y/SAj6bIrh1H+btOEY05OHMOYEZaKSf6mXJeBLXmU9ch8lFTnYT5QP7ug4Nm4uAonKPIh6V6puzAmgnaKSaT/9FF/UU7N1f+kdeBW61weoMeHR/vLeG6fUfT0aCGPa806bK8/5HNt0oCE6ExKLYzNVwF/fh1bNFUI676DatJqrxPdLvhzVXJUL8MZh9iY1gNePFacmy+pzgoKfLIS/5Z2e4PVbZ/WNUP2CghuXKnT2fFHpH9lMc3nX+y0wW1S/KExFffTRR1/0B9X1Ge+Rl0qUAAAAAElFTkSuQmCC"

/***/ }),
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_waze.c0ae43c.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_instagram.40f2492.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgMkgyLjY2NjY3QzIuNDg5ODYgMiAyLjMyMDI5IDIuMDcwMjQgMi4xOTUyNiAyLjE5NTI2QzIuMDcwMjQgMi4zMjAyOSAyIDIuNDg5ODYgMiAyLjY2NjY3VjEzLjMzMzNDMiAxMy41MTAxIDIuMDcwMjQgMTMuNjc5NyAyLjE5NTI2IDEzLjgwNDdDMi4zMjAyOSAxMy45Mjk4IDIuNDg5ODYgMTQgMi42NjY2NyAxNEg4LjQxVjkuMzZINi44NTEzM1Y3LjU0MzMzSDguNDFWNi4yMUM4LjQxIDQuNjYgOS4zNTY2NyAzLjgxNTMzIDEwLjc0MzMgMy44MTUzM0MxMS4yMDkzIDMuODE0IDExLjY3NiAzLjgzOCAxMi4xNCAzLjg4NjY3VjUuNUgxMS4xODMzQzEwLjQzMTMgNS41IDEwLjI4NDcgNS44NTg2NyAxMC4yODQ3IDYuMzgzMzNWNy41NEgxMi4wODI3TDExLjg0OTMgOS4zNTY2N0gxMC4yODRWMTRIMTMuMzMzM0MxMy41MTAxIDE0IDEzLjY3OTcgMTMuOTI5OCAxMy44MDQ3IDEzLjgwNDdDMTMuOTI5OCAxMy42Nzk3IDE0IDEzLjUxMDEgMTQgMTMuMzMzM1YyLjY2NjY3QzE0IDIuNDg5ODYgMTMuOTI5OCAyLjMyMDI5IDEzLjgwNDcgMi4xOTUyNkMxMy42Nzk3IDIuMDcwMjQgMTMuNTEwMSAyIDEzLjMzMzMgMloiIGZpbGw9IiMzQjY5NzEiLz4KPC9zdmc+Cg=="

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_pinterest.461b7c0.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_whatsapp.438eaf9.svg";

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logoCI.6c923da.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/LogoCI_Ml.093ecff.svg";

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Instagram.d2ff43c.jpg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pin 01.9d42bd4.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pin 02.51f50be.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pin 03.f41e649.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pin 04.f41e649.jpg";

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "footer{width:100%;background-color:var(--primary-90);height:48px}footer ul{margin:0;padding:0;list-style:none}footer a{color:var(--primary-10);text-decoration:none;font-size:var(--fontSizeSmall);white-space:nowrap}footer .container{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:48px;align-content:center;padding-left:24px;padding-right:24px}.footerMenu{padding-left:60px;grid-column:2}.footerMenu ul{height:100%;display:flex;align-items:center;flex-wrap:wrap}.footerMenu li{margin-left:1em}footer .socialMenuTwo{grid-column:1;grid-row:1;align-self:center}footer .socialMenuTwo ul{display:grid;grid-template-columns:repeat(5,auto);grid-column-gap:8px;grid-row-gap:0}footer .socialMenuTwo li:first-child{grid-column:1}footer svg{fill:var(--primary-10);width:20px;height:20px}footer p{color:var(--primary-10);align-self:center}.preFooter{border-top:1px solid var(--primary-30);display:grid;grid-template-columns:repeat(12,minmax(auto,80px));grid-template-rows:auto auto;justify-content:center;grid-column-gap:16px;-moz-column-gap:16px;column-gap:16px}.instaFeed{grid-column:1/4;grid-row:1/3;border-right:1px solid var(--primary-30);display:flex;flex-direction:row;justify-content:flex-end;padding:40px 16px 40px 0}.instaFeed h3{font-family:var(--fontFamilyOvo);font-size:var(--fontSizeHeaderSmall);color:var(--primary-60);font-weight:400;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;text-align:center;transform:rotate(180deg)}.pinFeed{grid-column:4/10;grid-row:1;border-bottom:1px solid var(--primary-30);padding:16px 24px}.pinFeed h3{font-family:var(--fontFamilyOvo);font-size:var(--fontSizeHeaderSmall);color:var(--primary-60);font-weight:400}.pinFeed a{grid-row:2}.pinImages{display:flex;grid-column-gap:16px;-moz-column-gap:16px;column-gap:16px;grid-row-gap:16px;row-gap:16px;justify-content:center;flex-wrap:wrap}.signature{grid-column:4/10;grid-row:2;align-self:center;justify-self:center}.moreInfo{grid-column:10/13;grid-row:1/3;border-left:1px solid var(--primary-30);display:flex;flex-direction:column;justify-content:center;padding-left:16px;padding-right:0}@media screen and (max-width:769px){.footerMenu{display:none}footer p{justify-self:end}}@media screen and (max-width:426px){footer .container{grid-template-columns:auto auto;grid-template-rows:48px;padding-left:0;padding-right:0}footer .socialMenuTwo{grid-column:1;grid-row:1;align-self:center;padding-left:16px}footer .socialMenuTwo ul{display:grid;grid-template-columns:auto auto auto auto auto;grid-column-gap:0}footer .socialMenuTwo li:first-child{grid-column:1}footer p{justify-self:end;padding-right:16px}.preFooter{grid-template-columns:auto}.instaFeed{display:none}.pinFeed{grid-column:1;grid-row:1;padding:16px 8px}.pinImages{grid-column-gap:8px;-moz-column-gap:8px;column-gap:8px;grid-row-gap:16px;row-gap:16px;justify-content:center;flex-wrap:wrap}.signature{grid-column:1;grid-row:2}.moreInfo{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("71e7cf80", content, true, context)
};

/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("09b92b00", content, true, context)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("25ba4b00", content, true, context)
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("aa0020ac", content, true, context)
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f916b540", content, true, context)
};

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_1.d6c4f5b.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_2.c88868a.jpg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_3.0f3af0c.jpg";

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slideshowContainer figure img{width:100%;height:90vh;-o-object-fit:cover;object-fit:cover;position:relative;justify-content:center;align-content:center}.slideshowContainer figcaption{font-family:var(--fontFamilyMontserrat);font-size:var(--fontSizeHeaderSmall);font-weight:600;color:var(--primary-70)}.caption{position:absolute;top:8em;left:1.5em}.scrollDown{width:64px;position:absolute;top:85vh;left:calc(50vw - 32px);display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto 30px 40px}.scrollDown svg{grid-column:1/-1;justify-self:center;fill:var(--primary-60)}.scrollDown p{grid-row:3;color:var(--primary-60);justify-self:center}.scrollDown P:last-child{grid-column:3}.vl{height:66px;grid-row:2/4;grid-column:2;border-left:2px solid var(--primary-40);justify-self:center;align-self:end}.mySlide{display:none}.fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{0%{opacity:.4}to{opacity:1}}@keyframes fade{0%{opacity:.4}to{opacity:1}}@media screen and (max-width:426px){.slideshowContainer figure img{height:80vh}.caption{top:2em}.scrollDown{top:75vh}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/s1_A.b58152d.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/S1_2.54ae4aa.jpg";

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitaciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".introCI{display:grid;grid-template-columns:repeat(12,1fr);grid-column-gap:16px;grid-template-rows:repeat(4,auto)}.introCI p{height:-webkit-max-content;height:-moz-max-content;height:max-content}.introCI p:first-of-type{grid-column:9/13;grid-row:2;align-self:center;margin-right:32px}.introCI p:nth-of-type(2){grid-column:2/7;grid-row:3;transform:translateY(-40px)}.content{background-color:var(--primary-10);outline:16px solid var(--neutral-00);padding:16px}.typeDetails{font-size:48px;font-style:italic;color:var(--secondary-50)}.introCI h2:first-of-type{grid-column:9/10;grid-row:1;transform:translateY(16px)}.introCI h2:last-of-type{grid-column:1/2;grid-row:2/4;white-space:nowrap;transform:rotate(-90deg) translate(72px,32px);transform-origin:0 0;width:80px;align-self:end;z-index:5}.introCI img:first-of-type{grid-column:5/9;grid-row:2;height:100%;-o-object-fit:cover;object-fit:cover}.introCI img:last-of-type{grid-column:4/7;grid-row:4;transform:translateY(-120px);z-index:-1;-o-object-fit:cover;object-fit:cover}.introCI .primaryBtnBig{grid-column:7/12;grid-row:4;align-self:center;align-items:center;background-color:var(--secondary-50);padding:8px 8px 8px 30px;display:flex;outline:8px solid var(--neutral-00)}.introCI .primaryBtnBig p{line-height:26px;color:var(--secondary-90)}.introCI .primaryBtnBig .vl{border-left:2px solid var(--secondary-60);align-self:center}.introCI .primaryBtnBig a{text-align:center;background-color:var(--secondary-50);color:var(--secondary-90);border:0;padding:14px 66px;font-size:var(--fontSizeMedium);font-weight:600}@media screen and (max-width:769px){.introCI p:first-of-type{grid-column:8/13}.introCI p:nth-of-type(2){grid-column:2/9;grid-row:3;transform:translateY(0)}.typeDetails{font-size:48px;color:var(--secondary-50)}.introCI h2:last-of-type{grid-column:1/2;grid-row:2/4;white-space:nowrap;transform:rotate(-90deg) translate(72px,40px);transform-origin:0 0;width:80px;align-self:end;z-index:5}.introCI img:first-of-type{grid-column:3/10;grid-row:2;width:90%}.introCI img:last-of-type{transform:translateY(-60px)}.introCI .primaryBtnBig{grid-column:3/12;background-color:var(--secondary-50);padding:8px 8px 8px 16px}}@media screen and (max-width:426px){.introCI{grid-template-columns:repeat(8,1fr);grid-column-gap:8px;grid-template-rows:repeat(6,auto)}.introCI p:first-of-type{grid-column:2/9;grid-row:3;transform:translateY(-64px)}.introCI p:nth-of-type(2){grid-column:1/7;margin-left:16px;grid-row:4;transform:translateY(0)}.introCI h2:first-of-type{grid-column:6/9;transform:translateY(12px)}.introCI h2:last-of-type{display:none}.introCI img:first-of-type{grid-column:1/7;grid-row:2;width:100%;padding-left:24px}.introCI img:last-of-type{grid-column:3/9;grid-row:5;transform:translateY(-60px);width:100%;padding-right:24px}.introCI .primaryBtnBig{grid-column:1/9;grid-row:6;margin:16px;padding:16px;justify-content:center}.introCI .primaryBtnBig button{padding:0}.introCI .primaryBtnBig p,.introCI .vl{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(70);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".services{height:100%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-attachment:fixed;background-size:cover;background-repeat:no-repeat;justify-content:center;padding:60px 0}.services,.services ul{width:100%;display:flex}.services ul{margin:0;padding:0;max-width:1158px;list-style:none;flex-wrap:wrap;justify-content:space-between;color:var(--neutral-00)}.services li{height:240px;width:368px;margin:8px;background-color:var(--primary-90);text-transform:uppercase;letter-spacing:5px;flex-basis:368px;flex-grow:1}.servicesAlign,.services li{display:flex;flex-direction:column;justify-content:center;align-items:center}.services h2{font-family:var(--fontFamilyOvo);font-size:var(--fontSizeHeaderLarge);font-weight:400;transform:translateX(-12px)}.services h2:before{content:\"No.\";font-size:var(--fontSizeMedium);font-family:var(--fontFamilyMontserrat);font-weight:400;transform:rotate(-90deg);transform-origin:top;display:inline-block}@media screen and (max-width:769px){.productsCI .bodas{grid-column:5/9}.productsCI .description{grid-column:7/12}.productsCI .celeb15{grid-column:1/7;padding-left:16px}.productsCI .graduation{grid-column:1/6;grid-row:3;transform:translate(16px,-40px);z-index:2}.productsCI .personalized{grid-column:4/9}}@media screen and (max-width:426px){.services{padding-left:24px;padding-right:24px}.services li{height:80px;width:296px;flex-direction:row;flex-flow:wrap;flex-basis:298px;flex-grow:1}.servicesAlign{width:180px;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;flex-wrap:wrap}.services h2{width:120px;height:auto;transform:translateX(0)}.services h2:before{transform-origin:top;display:inline-block}.services span:first-of-type{flex-grow:5}.services span:nth-of-type(2){margin-right:16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/parallax1.c8ce092.jpg";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bodas.d28d1b1.jpg";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/15anos.df63e8a.jpg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/graduacion.5282f9e.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/celebraciones.575ff15.jpg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/personalizadas.d642e72.jpg";

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".productsCI{display:grid;grid-template-columns:repeat(12,minmax(0,80px));grid-column-gap:16px;grid-template-rows:auto auto 250px 200px;margin-top:150px;margin-bottom:250px}.productsCI img{width:100%;max-width:100%}.productsCI .bodas{justify-self:center;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content;grid-column:4/8;grid-row:1}.productsCI .bodas .secondaryBtn{transform:translate(-24px,-40px);width:-webkit-max-content;width:-moz-max-content;width:max-content}.productsCI .description{grid-column:8/12;grid-row:2;transform:translateY(-70px)}.productsCI .description p{color:var(--primary-60)}.productsCI .celeb15{grid-column:2/8;grid-row:2}.productsCI .celeb15 a{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.productsCI .celeb15 .secondaryBtn{width:-webkit-max-content;width:-moz-max-content;width:max-content;transform:translate(-16px,-40px)}.productsCI .graduation{grid-column:1/5;grid-row:3;transform:translateY(-110px);z-index:2;padding-left:16px}.productsCI .graduation img{outline:16px solid var(--neutral-00)}.productsCI .graduation .secondaryBtn{transform:translateY(-40px);width:-webkit-max-content;width:-moz-max-content;width:max-content}.productsCI .celebration{grid-column:7/12;grid-row:3;z-index:2}.productsCI .celebration a:first-child{display:flex;flex-direction:column;align-items:flex-end}.productsCI .celebration img{outline:16px solid var(--neutral-00)}.productsCI .celebration .secondaryBtn{transform:translate(40px,-40px);width:-webkit-max-content;width:-moz-max-content;width:max-content}.productsCI .personalized{grid-column:4/8;grid-row:4;transform:translateY(-130px);z-index:0}.productsCI .personalized .secondaryBtn{transform:translate(20px,-40px);width:-webkit-max-content;width:-moz-max-content;width:max-content}@media screen and (max-width:426px){.productsCI{margin-top:50px;margin-bottom:50px;grid-column-gap:8px;grid-template-rows:auto auto auto auto auto}.productsCI .bodas{grid-column:3/12;grid-row:2}.productsCI .description{grid-column:2/12;grid-row:1;transform:translateY(0);padding-bottom:40px}.productsCI .celeb15{grid-column:2/11;grid-row:3;padding:0}.productsCI .graduation{grid-column:3/12;grid-row:4;transform:translateY(0);padding-left:0}.productsCI .graduation .secondaryBtn{transform:translateY(-40px)}.productsCI .celebration{grid-column:2/11;grid-row:5}.productsCI .personalized{grid-column:4/10;grid-row:6;transform:translateY(0)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Testimonial_img.28d1958.jpg";

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".testimonial{display:grid;grid-template-columns:repeat(12,minmax(0,100px));grid-template-rows:repeat(4,auto);align-items:center;margin-top:200px;margin-bottom:200px}.testimonial p{color:var(--primary-60)}.testimonial span{color:var(--secondary-80);font-weight:700}.testimonial q{font-family:var(--fontFamilyPlayfair);font-size:var(--fontSizeHeaderSmall);color:var(--primary-50);font-weight:700}.testimonialTitle{text-align:center;grid-column:1/6;grid-row:1;justify-self:center}.testimonialTitle p{color:var(--primary-40);font-family:var(--fontFamilyOvo);font-size:var(--fontSizeLarge)}.testimonialTitle h2{font-size:var(--fontSizeHeaderLarge);font-family:var(--fontFamilyPlayfair);font-style:italic;color:var(--primary-60)}.testimonialOne{grid-column:6/10;grid-row:1}.testimonialOne,.testimonialTwo{height:100%;padding:16px;border-left:1px solid var(--primary-30)}.testimonialTwo{grid-column:10/13;grid-row:1/3}.testimonialThree{grid-column:1/4;border-right:1px solid var(--primary-30)}.testimonialFour,.testimonialThree{grid-row:2/4;padding:16px;height:100%;border-top:1px solid var(--primary-30)}.testimonialFour{grid-column:4/10}.testimonialFour img{width:100%;height:auto}.testimonialFive{grid-column:10/13;grid-row:3/4;padding:16px;height:100%;border-left:1px solid var(--primary-30);border-top:1px solid var(--primary-30)}.testimonialQuote{display:flex;justify-content:center;align-items:center;line-height:36px;text-decoration:none;grid-column:1/3;text-align:center;quotes:none;width:100%}.testimonialQuote,.testimonialSix{grid-row:4/5;height:100%;border-top:1px solid var(--primary-30)}.testimonialSix{grid-column:3/13;padding:16px;border-left:1px solid var(--primary-30)}@media screen and (max-width:769px){.testimonialFour img{width:100%;-o-object-fit:cover;object-fit:cover;height:300px}}@media screen and (max-width:426px){.testimonial{margin-top:50px;margin-bottom:50px;grid-template-columns:repeat(12,minmax(0,100px));grid-template-rows:repeat(8,auto)}.testimonialTitle{grid-column:1/-1;grid-row:1;padding:16px}.testimonialOne{grid-row:2}.testimonialOne,.testimonialTwo{grid-column:1/-1;border-left:0 solid var(--primary-30);border-top:1px solid var(--primary-30)}.testimonialTwo{grid-row:3}.testimonialThree{grid-row:4;border-right:0 solid var(--primary-30)}.testimonialFour,.testimonialThree{grid-column:1/-1;border-top:1px solid var(--primary-30)}.testimonialFour{grid-row:5}.testimonialFour img{width:100%;height:auto;padding-bottom:16px}.testimonialFive{grid-row:6;border-left:0 solid var(--primary-30)}.testimonialFive,.testimonialQuote{grid-column:1/-1;border-top:1px solid var(--primary-30)}.testimonialQuote{grid-row:8;padding:16px}.testimonialSix{grid-column:1/-1;grid-row:7;border-left:0 solid var(--primary-30);border-top:1px solid var(--primary-30)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ValueOne.a8ae266.jpg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/valueScript.bcd2d0a.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ValueTwo.f161b5a.jpg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ValueThree.43eeff5.jpg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ValueFour.f1f68e7.jpg";

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CIValues_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CIValues_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CIValues_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CIValues_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CIValues_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ciValue{display:grid;grid-template-columns:repeat(12,minmax(0,100px));grid-template-rows:repeat(11,auto);align-items:center;grid-gap:16px}.ciValue img{width:100%;outline:16px solid var(--neutral-00)}.valueOne{grid-column:4/8;grid-row:1/4}.valueScript{grid-column:9/11;grid-row:2}.valueTwo{grid-column:7/12;grid-row:3/6}.valueThree{grid-column:2/7;grid-row:5/8}.valueDetails{grid-column:1;grid-row:6;font-size:var(--fontSizeHeaderXXLarge);color:var(--secondary-50);white-space:nowrap;transform:rotate(-90deg) translate(-72px,32px);transform-origin:0 0}.valueFour{grid-column:6/11;grid-row:7/11}.ciValue a{text-align:center;grid-column:5/9;grid-row:9}@media screen and (max-width:769px){.ciValue a{grid-column:4/10;grid-row:9}}@media screen and (max-width:426px){.ciValue{grid-gap:0;grid-row-gap:16px;row-gap:16px}.ciValue img{width:100%;outline:16px solid var(--neutral-00)}.valueOne{grid-column:1/9;grid-row:2/5}.valueScript{grid-column:4/10;grid-row:1}.valueTwo{grid-column:5/13;grid-row:4/7}.valueThree{grid-column:1/9;grid-row:7/10}.valueDetails{display:none}.valueFour{grid-column:4/13;grid-row:9/13}.ciValue a{grid-column:2/12;grid-row:13}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Cresta.7e8f8cd.svg";

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bigQuote{display:grid;grid-template-columns:auto minmax(0,900px) auto;grid-template-rows:auto auto auto;justify-items:center;padding:16px;margin-top:100px;margin-bottom:100px}.cresta{grid-column:2;grid-row:1}.cresta img{width:100%}.quoteText{grid-column:2;grid-row:2}.quoteText h2{font-size:var(--fontSizeHeaderMedium);font-family:var(--fontFamilyPlayfair);font-weight:500;text-align:center;color:var(--primary-60)}.firma{grid-column:2;grid-row:3}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/entry-1.5d1559c.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/entry-2.c1e941f.jpg";

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentBlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentBlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentBlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentBlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentBlog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".recentPostSection{display:flex;flex-direction:column}.recentPostSection h2{padding-left:16px}.recentPost{display:flex;flex-direction:row}.post{margin:16px}.post img{width:100%;-o-object-fit:contain;object-fit:contain}@media screen and (max-width:426px){.recentPost{display:flex;flex-direction:column}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 95 */,
/* 96 */
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

/***/ }),
/* 97 */
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

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services.vue?vue&type=template&id=2e945e4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"services"},[_vm._ssrNode("<ul><li><h2>01</h2> <div class=\"servicesAlign\"><span class=\"sContent1\">Invitaciones</span> <span class=\"sContent2\">y</span> <span class=\"sContent3\">Diseño</span></div></li> <li><h2>02</h2> <div class=\"servicesAlign\"><span class=\"sContent1\">Lettering</span> <span class=\"sContent2\">y</span> <span class=\"sContent3\">Caligrafía</span></div></li> <li><h2>03</h2> <div class=\"servicesAlign\"><span class=\"sContent1\">Consultoría</span> <span class=\"sContent2\">y</span> <span class=\"sContent3\">Talleres</span></div></li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Services.vue?vue&type=template&id=2e945e4e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Servicesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Services.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Servicesvue_type_script_lang_js_ = (Servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Services.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "080da06f"
  
)

/* harmony default export */ var Services = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 99 */
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

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials.vue?vue&type=template&id=09e1ab6a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container testimonial"},[_vm._ssrNode("<div class=\"testimonialTitle\"><p>Lo que dicen</p> <h2>Nuestros Clientes</h2></div> <div class=\"testimonialOne\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.</p> <span>Mónica Rustian</span></div> <div class=\"testimonialTwo\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <span>Ana María y Erick</span></div> <div class=\"testimonialThree\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing</p> <span>Laula Coma Abed</span></div> <div class=\"testimonialFour\"><img"+(_vm._ssrAttr("src",__webpack_require__(78)))+" alt> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing</p> <span>Claudia e Ionnis</span></div> <div class=\"testimonialFive\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing</p> <span>Autor Testimonial Cinco</span></div> <div class=\"testimonialQuote\"><q>Share <br> The Love</q></div> <div class=\"testimonialSix\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing</p> <span>Bea de la Roca</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Testimonials.vue?vue&type=template&id=09e1ab6a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Testimonialsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Testimonialsvue_type_script_lang_js_ = (Testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Testimonials.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Testimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1284ff76"
  
)

/* harmony default export */ var Testimonials = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CIValues.vue?vue&type=template&id=4d5356e7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container ciValue"},[_vm._ssrNode("<div class=\"valueOne\"><img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" alt></div> <div class=\"valueScript\"><img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt></div> <div class=\"valueTwo\"><img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt></div> <div class=\"valueThree\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt></div> <h2 class=\"valueDetails\">Love Details</h2> <div class=\"valueFour\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt></div> <a href=\"/contacto\" class=\"primaryBtn\"> Cotiza Con Nosotros </a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CIValues.vue?vue&type=template&id=4d5356e7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CIValues.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CIValuesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/CIValues.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CIValuesvue_type_script_lang_js_ = (CIValuesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CIValues.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CIValuesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "521df419"
  
)

/* harmony default export */ var CIValues = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Quote.vue?vue&type=template&id=c108279a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container bigQuote"},[_vm._ssrNode("<div class=\"cresta\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Decoración de flores\"></div> <div class=\"quoteText\"><h2>Qué bonito es cuando alguien se acuerda de lo que le contaste, lo que te gusta y lo que no.<br>\n              No hay detalle más lindo que la atención.</h2></div> <div class=\"firma\"><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt=\"Firma Jimena\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Quote.vue?vue&type=template&id=c108279a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Quote.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Quotevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Quote.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Quotevue_type_script_lang_js_ = (Quotevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Quote.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Quotevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b903dd8a"
  
)

/* harmony default export */ var Quote = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecentBlog.vue?vue&type=template&id=9b1ab9f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container recentPostSection"},[_vm._ssrNode("<h2 class=\"header2\">Publicaciones del Blog</h2> <div class=\"recentPost\"><div class=\"post\"><img"+(_vm._ssrAttr("src",__webpack_require__(91)))+" alt> <p class=\"abstract\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.\n              </p></div> <div class=\"post\"><img"+(_vm._ssrAttr("src",__webpack_require__(92)))+" alt> <p class=\"abstract\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.\n              </p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RecentBlog.vue?vue&type=template&id=9b1ab9f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecentBlog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RecentBlogvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/RecentBlog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RecentBlogvue_type_script_lang_js_ = (RecentBlogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/RecentBlog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RecentBlogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "688e62ee"
  
)

/* harmony default export */ var RecentBlog = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=493c2a9b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('Slides'),_vm._ssrNode(" "),_c('Invitaciones'),_vm._ssrNode(" "),_c('Services'),_vm._ssrNode(" "),_c('Products'),_vm._ssrNode(" "),_c('Testimonials'),_vm._ssrNode(" "),_c('CIValues'),_vm._ssrNode(" "),_c('Quote'),_vm._ssrNode(" "),_c('RecentBlog'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=493c2a9b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',

  head() {
    return {
      title: 'Casa Invitacion'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e8c61042"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(30).default,Slides: __webpack_require__(96).default,Invitaciones: __webpack_require__(97).default,Services: __webpack_require__(98).default,Products: __webpack_require__(99).default,Testimonials: __webpack_require__(100).default,CIValues: __webpack_require__(101).default,Quote: __webpack_require__(102).default,RecentBlog: __webpack_require__(103).default,Footer: __webpack_require__(31).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map