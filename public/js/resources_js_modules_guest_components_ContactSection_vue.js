"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_modules_guest_components_ContactSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/guest/components/ContactSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/guest/components/ContactSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('guestModule', ['phone_number'])), {}, {
    phoneFormatted: function phoneFormatted() {
      var phoneArray = this.phone_number.split('');
      return "".concat(phoneArray.slice(0, 3).join(''), "-").concat(phoneArray.slice(3, 6).join(''), "-").concat(phoneArray.slice(6).join(''));
    }
  })
});

/***/ }),

/***/ "./resources/js/modules/guest/components/ContactSection.vue":
/*!******************************************************************!*\
  !*** ./resources/js/modules/guest/components/ContactSection.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactSection_vue_vue_type_template_id_1bf48951___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactSection.vue?vue&type=template&id=1bf48951& */ "./resources/js/modules/guest/components/ContactSection.vue?vue&type=template&id=1bf48951&");
/* harmony import */ var _ContactSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactSection.vue?vue&type=script&lang=js& */ "./resources/js/modules/guest/components/ContactSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactSection_vue_vue_type_template_id_1bf48951___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactSection_vue_vue_type_template_id_1bf48951___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/guest/components/ContactSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/modules/guest/components/ContactSection.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/guest/components/ContactSection.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/guest/components/ContactSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/guest/components/ContactSection.vue?vue&type=template&id=1bf48951&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/modules/guest/components/ContactSection.vue?vue&type=template&id=1bf48951& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_template_id_1bf48951___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_template_id_1bf48951___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_template_id_1bf48951___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactSection.vue?vue&type=template&id=1bf48951& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/guest/components/ContactSection.vue?vue&type=template&id=1bf48951&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/guest/components/ContactSection.vue?vue&type=template&id=1bf48951&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/guest/components/ContactSection.vue?vue&type=template&id=1bf48951& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row d-flex align-items-center vh-100" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-5 offset-md-1 text-center" }, [
        _c("h3", { staticClass: "text-center" }, [
          _vm._v("Realiza tus pedidos a través de")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-justify px-lg-5" }, [
          _vm._v(
            "\n                Te ofrecemos dos formas para hacer tus pedidos, puedes contactarnos via telefónica al número\n            "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "ml-3 text-primary text-left px-lg-5" }, [
          _c("i", { staticClass: "fas fa-phone text-dark mr-2" }),
          _vm._v(
            "\n                " + _vm._s(_vm.phoneFormatted) + "\n            "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-justify px-lg-5" }, [
          _vm._v(
            "\n                O puedes crear tu cuenta en la página para realizar tus pedidos a través de nuestra aplicación web.\n            "
          )
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary text-white",
            on: {
              click: function($event) {
                return _vm.$router.push({ name: "register" })
              }
            }
          },
          [_vm._v("\n                Crear cuenta\n            ")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 h-75" }, [
      _c("h2", { staticClass: "text-primary mb-4" }, [
        _vm._v("Puedes visitarnos en")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "h-100" }, [
        _c("iframe", {
          staticStyle: { border: "0" },
          attrs: {
            src:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.718021213961!2d-76.54338008494709!3d38.97610624990637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f6cddeace2f7%3A0x61e3bad09d11a691!2sSandy%20Pony%20Donuts!5e0!3m2!1ses-419!2sus!4v1637209014218!5m2!1ses-419!2sus",
            width: "100%",
            height: "450",
            allowfullscreen: "",
            loading: "lazy"
          }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);