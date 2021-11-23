"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_modules_admin_pages_AdministrarContenidoPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      main_image: '',
      gallery_images: [],
      video: '',
      phone: '',
      product_price: null,
      loading: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('adminModule', ['loadCompanyData', 'storeCompanyData'])), {}, {
    saveChanges: function saveChanges() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var data, hasBeenDataSaved;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                data = {
                  main_image: _this.main_image,
                  gallery_images: _this.gallery_images,
                  video: _this.video,
                  phone: _this.phone,
                  product_price: _this.product_price
                };
                _context.next = 4;
                return _this.storeCompanyData(data);

              case 4:
                hasBeenDataSaved = _context.sent;

                _this.$swal.fire({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  title: hasBeenDataSaved ? 'La información ha sido guardada.' : 'Ocurrió un error, por favor vuelva a intentarlo.',
                  icon: hasBeenDataSaved ? 'success' : 'error',
                  timer: 3000
                });

                _this.loading = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['isLoading'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('adminModule', ['getCompanyData'])),
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var companyData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.loadCompanyData();

            case 2:
              companyData = _this2.getCompanyData;
              _this2.main_image = companyData.main_image;
              _this2.gallery_images = companyData.gallery_images;
              _this2.video = companyData.video;
              _this2.phone = companyData.phone;
              _this2.product_price = companyData.product_price;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  components: {
    Loader: function Loader() {
      return __webpack_require__.e(/*! import() */ "resources_js_modules_shared_components_Loader_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../shared/components/Loader.vue */ "./resources/js/modules/shared/components/Loader.vue"));
    }
  }
});

/***/ }),

/***/ "./resources/js/modules/admin/pages/AdministrarContenidoPage.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/admin/pages/AdministrarContenidoPage.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdministrarContenidoPage_vue_vue_type_template_id_2bf9c771___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdministrarContenidoPage.vue?vue&type=template&id=2bf9c771& */ "./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=template&id=2bf9c771&");
/* harmony import */ var _AdministrarContenidoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdministrarContenidoPage.vue?vue&type=script&lang=js& */ "./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdministrarContenidoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdministrarContenidoPage_vue_vue_type_template_id_2bf9c771___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdministrarContenidoPage_vue_vue_type_template_id_2bf9c771___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/admin/pages/AdministrarContenidoPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdministrarContenidoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdministrarContenidoPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdministrarContenidoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=template&id=2bf9c771&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=template&id=2bf9c771& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdministrarContenidoPage_vue_vue_type_template_id_2bf9c771___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdministrarContenidoPage_vue_vue_type_template_id_2bf9c771___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdministrarContenidoPage_vue_vue_type_template_id_2bf9c771___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdministrarContenidoPage.vue?vue&type=template&id=2bf9c771& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=template&id=2bf9c771&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=template&id=2bf9c771&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/admin/pages/AdministrarContenidoPage.vue?vue&type=template&id=2bf9c771& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container my-5" }, [
    _c(
      "div",
      { staticClass: "row justify-content-center" },
      [
        _vm.isLoading
          ? _c("Loader")
          : _c(
              "div",
              {
                staticClass: "col-11 col-md-7 col-lg-4 card shadow border-0 p-0"
              },
              [
                _c("div", { staticClass: "card-body py-5 px-4" }, [
                  _c("h2", { staticClass: "text-center mb-4" }, [
                    _vm._v(
                      "\n                    Contenido de la página\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mt-4" }, [
                    _c(
                      "label",
                      {
                        staticClass: "text-primary",
                        attrs: { for: "gallery_images" }
                      },
                      [
                        _vm._v(
                          "\n                        Galería de imágenes:\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.gallery_images,
                          expression: "gallery_images"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "gallery_images",
                        rows: "3",
                        placeholder:
                          "Lista los enlaces de la galería de imágenes, separalos usando una coma ','"
                      },
                      domProps: { value: _vm.gallery_images },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.gallery_images = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "d-block text-justify" }, [
                      _vm._v(
                        "\n                        Separa cada enlace de la galería de imágenes usando una coma ','.\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mt-4" }, [
                    _c(
                      "label",
                      { staticClass: "text-primary", attrs: { for: "video" } },
                      [
                        _vm._v(
                          "\n                        Vídeo de proceso:\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.video,
                          expression: "video"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "video",
                        placeholder: "www.video.com"
                      },
                      domProps: { value: _vm.video },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.video = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mt-4" }, [
                    _c(
                      "label",
                      { staticClass: "text-primary", attrs: { for: "phone" } },
                      [
                        _vm._v(
                          "\n                        Teléfono de contacto:\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.phone,
                          expression: "phone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "phone",
                        placeholder: "Teléfono de contacto"
                      },
                      domProps: { value: _vm.phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.phone = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mt-4" }, [
                    _c(
                      "label",
                      {
                        staticClass: "text-primary",
                        attrs: { for: "product_price" }
                      },
                      [
                        _vm._v(
                          "\n                        Precio del product:\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product_price,
                          expression: "product_price"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        id: "product_price",
                        placeholder: "00.00"
                      },
                      domProps: { value: _vm.product_price },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.product_price = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-block mt-4 text-white",
                      on: { click: _vm.saveChanges }
                    },
                    [
                      _vm.loading
                        ? _c("Loader")
                        : _c("span", [_vm._v("Guardar Cambios")])
                    ],
                    1
                  )
                ])
              ]
            )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);