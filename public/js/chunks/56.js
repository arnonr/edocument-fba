(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/CategoryList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/CategoryList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _useCategoryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useCategoryList */ "./resources/js/src/views/category/useCategoryList.js");
/* harmony import */ var _categoryStoreModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoryStoreModule */ "./resources/js/src/views/category/categoryStoreModule.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BBadge"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormSelect"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BPagination"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BInputGroupAppend"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BFormRating: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormRating"]
  },
  setup: function setup() {
    var CATEGORY_LIST_APP_STORE_MODULE_NAME = "category-list"; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(CATEGORY_LIST_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_3__["default"].registerModule(CATEGORY_LIST_APP_STORE_MODULE_NAME, _categoryStoreModule__WEBPACK_IMPORTED_MODULE_5__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(CATEGORY_LIST_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_3__["default"].unregisterModule(CATEGORY_LIST_APP_STORE_MODULE_NAME);
    }); //

    var _useCategoryList = Object(_useCategoryList__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        items = _useCategoryList.items,
        perPage = _useCategoryList.perPage,
        pageOptions = _useCategoryList.pageOptions,
        totalRows = _useCategoryList.totalRows,
        currentPage = _useCategoryList.currentPage,
        sortBy = _useCategoryList.sortBy,
        sortDesc = _useCategoryList.sortDesc,
        sortDirection = _useCategoryList.sortDirection,
        filter = _useCategoryList.filter,
        filterOn = _useCategoryList.filterOn,
        visibleFields = _useCategoryList.visibleFields,
        sortOptions = _useCategoryList.sortOptions,
        onFiltered = _useCategoryList.onFiltered,
        table = _useCategoryList.table,
        onConfirmDelete = _useCategoryList.onConfirmDelete,
        bookCodeData = _useCategoryList.bookCodeData;

    return {
      items: items,
      perPage: perPage,
      pageOptions: pageOptions,
      totalRows: totalRows,
      currentPage: currentPage,
      sortBy: sortBy,
      sortDesc: sortDesc,
      sortDirection: sortDirection,
      filter: filter,
      filterOn: filterOn,
      visibleFields: visibleFields,
      sortOptions: sortOptions,
      onFiltered: onFiltered,
      table: table,
      onConfirmDelete: onConfirmDelete,
      bookCodeData: bookCodeData
    };
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .table th, [dir] .table td {\n  padding: 0.75rem 1rem;\n}\n.mw-3-5 {\n  min-width: 3.5rem !important;\n}\n[dir] .mw-3-5 {\n  padding: 0.75rem 0.2rem !important;\n}\n.mw-3-7 {\n  min-width: 3.7rem !important;\n}\n[dir] .mw-3-7 {\n  padding: 0.75rem 0.2rem !important;\n}\n.mw-4 {\n  min-width: 6rem !important;\n}\n[dir] .mw-4 {\n  padding: 0.75rem 0.2rem !important;\n}\n.mw-8 {\n  min-width: 8rem !important;\n}\n[dir] .mw-8 {\n  padding: 0.75rem 0.2rem !important;\n}\n.mw-10 {\n  min-width: 10rem !important;\n}\n[dir] .mw-10 {\n  padding: 0.75rem 0.2rem !important;\n}\n@media only screen and (min-width: 1200px) {\n.mw-e-8 {\n    min-width: 8rem !important;\n}\n[dir] .mw-e-8 {\n    padding: 0.75rem 0.2rem !important;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/CategoryList.vue?vue&type=template&id=2503b933&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/CategoryList.vue?vue&type=template&id=2503b933& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("b-card", [
        _c("table", { staticClass: "table table-bordered" }, [
          _c("tr", [
            _c("td", { staticClass: "text-center" }, [
              _vm._v("เอกสารรับเข้า-ส่งออก"),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v("ปี " + _vm._s(_vm.bookCodeData.year)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v("ลำดับปัจจุบัน " + _vm._s(_vm.bookCodeData.bookIn)),
            ]),
            _vm._v(" "),
            _c(
              "td",
              { staticClass: "text-center" },
              [
                _c(
                  "b-button",
                  {
                    staticClass: "btn-icon btn-sm",
                    attrs: {
                      variant: "outline-success",
                      alt: "แก้ไข",
                      title: "แก้ไข",
                    },
                    on: {
                      click: function ($event) {
                        return _vm.$router.push({
                          name: "book-code-edit",
                        })
                      },
                    },
                  },
                  [
                    _c("feather-icon", {
                      staticStyle: { "margin-bottom": "-2px" },
                      attrs: { icon: "EditIcon" },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "b-card",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12", md: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-sm-0 mr-0",
                      attrs: {
                        variant: "success",
                        block:
                          _vm.$store.getters["app/currentBreakPoint"] === "xs",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.$router.push({ name: "category-add" })
                        },
                      },
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "align-middle mr-25 mb-25 text-white",
                        attrs: { icon: "PlusSquareIcon", size: "16" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "d-none d-sm-inline" }, [
                        _vm._v("เพิ่มข้อมูล"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "my-1", attrs: { md: "2", sm: "4" } },
                [
                  _c(
                    "b-form-group",
                    { staticClass: "mb-0" },
                    [
                      _c(
                        "label",
                        { staticClass: "d-inline-block text-sm-left mr-50" },
                        [_vm._v("Per page")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select", {
                        staticClass: "w-50",
                        attrs: {
                          id: "perPageSelect",
                          size: "sm",
                          options: _vm.pageOptions,
                        },
                        model: {
                          value: _vm.perPage,
                          callback: function ($$v) {
                            _vm.perPage = $$v
                          },
                          expression: "perPage",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "my-1", attrs: { md: "4", sm: "8" } },
                [
                  _c(
                    "b-form-group",
                    {
                      staticClass: "mb-0",
                      attrs: {
                        label: "Sort",
                        "label-cols-sm": "3",
                        "label-align-sm": "right",
                        "label-size": "sm",
                        "label-for": "sortBySelect",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { attrs: { size: "sm" } },
                        [
                          _c("b-form-select", {
                            staticClass: "w-75",
                            attrs: {
                              id: "sortBySelect",
                              options: _vm.sortOptions,
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "first",
                                fn: function () {
                                  return [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("-- none --"),
                                    ]),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                            model: {
                              value: _vm.sortBy,
                              callback: function ($$v) {
                                _vm.sortBy = $$v
                              },
                              expression: "sortBy",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "b-form-select",
                            {
                              staticClass: "w-25",
                              attrs: { size: "sm", disabled: !_vm.sortBy },
                              model: {
                                value: _vm.sortDesc,
                                callback: function ($$v) {
                                  _vm.sortDesc = $$v
                                },
                                expression: "sortDesc",
                              },
                            },
                            [
                              _c("option", { domProps: { value: false } }, [
                                _vm._v("Asc"),
                              ]),
                              _vm._v(" "),
                              _c("option", { domProps: { value: true } }, [
                                _vm._v("Desc"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "my-1", attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      staticClass: "mb-0",
                      attrs: {
                        label: "Filter",
                        "label-cols-sm": "3",
                        "label-align-sm": "right",
                        "label-size": "sm",
                        "label-for": "filterInput",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { attrs: { size: "sm" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "filterInput",
                              type: "search",
                              placeholder: "Type to Search",
                            },
                            model: {
                              value: _vm.filter,
                              callback: function ($$v) {
                                _vm.filter = $$v
                              },
                              expression: "filter",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-append",
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { disabled: !_vm.filter },
                                  on: {
                                    click: function ($event) {
                                      _vm.filter = ""
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                Clear\n              "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c("b-table", {
                    attrs: {
                      striped: "",
                      bordered: "",
                      hover: "",
                      responsive: "",
                      "per-page": _vm.perPage,
                      "current-page": _vm.currentPage,
                      items: _vm.items,
                      fields: _vm.visibleFields,
                      "sort-by": _vm.sortBy,
                      "sort-desc": _vm.sortDesc,
                      "sort-direction": _vm.sortDirection,
                      filter: _vm.filter,
                      "filter-included-fields": _vm.filterOn,
                    },
                    on: {
                      "update:sortBy": function ($event) {
                        _vm.sortBy = $event
                      },
                      "update:sort-by": function ($event) {
                        _vm.sortBy = $event
                      },
                      "update:sortDesc": function ($event) {
                        _vm.sortDesc = $event
                      },
                      "update:sort-desc": function ($event) {
                        _vm.sortDesc = $event
                      },
                      filtered: _vm.onFiltered,
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "row-details",
                        fn: function (row) {
                          return [
                            _c(
                              "b-card",
                              [
                                _c(
                                  "b-row",
                                  { staticClass: "mb-2" },
                                  [
                                    _c(
                                      "b-col",
                                      {
                                        staticClass: "mb-1",
                                        attrs: { md: "4" },
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bolder" },
                                          [_vm._v("ข้อมูล :")]
                                        ),
                                        _vm._v(" "),
                                        _c("span"),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      size: "sm",
                                      variant: "outline-secondary",
                                    },
                                    on: { click: row.toggleDetails },
                                  },
                                  [
                                    _vm._v(
                                      "\n                Hide\n              "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                      {
                        key: "cell(action)",
                        fn: function (row) {
                          return [
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-icon btn-sm",
                                attrs: {
                                  variant: "outline-success",
                                  alt: "แก้ไข",
                                  title: "แก้ไข",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.$router.push({
                                      name: "category-edit",
                                      params: { id: row.item.id },
                                    })
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  staticStyle: { "margin-bottom": "-2px" },
                                  attrs: { icon: "EditIcon" },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-icon btn-sm",
                                attrs: {
                                  variant: "outline-danger",
                                  alt: "ลบ",
                                  title: "ลบ",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.onConfirmDelete(row.item.id)
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  staticStyle: { "margin-bottom": "-2px" },
                                  attrs: { icon: "TrashIcon" },
                                }),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c("b-pagination", {
                    staticClass: "my-0",
                    attrs: {
                      "total-rows": _vm.totalRows,
                      "per-page": _vm.perPage,
                      align: "center",
                      size: "sm",
                    },
                    model: {
                      value: _vm.currentPage,
                      callback: function ($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/category/CategoryList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/category/CategoryList.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryList_vue_vue_type_template_id_2503b933___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=template&id=2503b933& */ "./resources/js/src/views/category/CategoryList.vue?vue&type=template&id=2503b933&");
/* harmony import */ var _CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/category/CategoryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CategoryList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryList_vue_vue_type_template_id_2503b933___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryList_vue_vue_type_template_id_2503b933___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/category/CategoryList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/category/CategoryList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/category/CategoryList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/CategoryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/CategoryList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/category/CategoryList.vue?vue&type=template&id=2503b933&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/category/CategoryList.vue?vue&type=template&id=2503b933& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_2503b933___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=template&id=2503b933& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/CategoryList.vue?vue&type=template&id=2503b933&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_2503b933___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_2503b933___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/category/useCategoryList.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/category/useCategoryList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCategoryList; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);







 // import isSame from "dayjs/plugin/isSame";
// Notification




function useCategoryList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__["useToast"])();
  var items = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])([]);
  var categoryLists = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])([]);
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])(20);
  var pageOptions = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])([20, 50]);
  var totalRows = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])(1);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])(1);
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])("");
  var sortDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])(false);
  var sortDirection = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])("asc");
  var filter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])(null);
  var filterOn = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["reactive"])([]);
  var table = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])(null);
  var fields = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["reactive"])(["show_details", {
    key: "id",
    label: "Id",
    visible: false
  }, {
    key: "title",
    label: "ชื่อประเภท",
    sortable: true,
    visible: true
  }, {
    key: "action",
    label: "Action",
    visible: true,
    "class": "text-center"
  }]);
  var sortOptions = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["computed"])(function () {
    return fields.filter(function (f) {
      return f.sortable;
    }).map(function (f) {
      return {
        text: f.label,
        value: f.key
      };
    });
  });
  var visibleFields = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["computed"])(function () {
    return fields.filter(function (f) {
      return f.visible;
    });
  });

  var onFiltered = function onFiltered(filteredItems) {
    totalRows.value = filteredItems.length;
    currentPage.value = 1;
  };

  var bookCodeData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["reactive"])({
    id: "",
    year: "",
    bookIn: ""
  });

  var fetchBookCode = function fetchBookCode(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch("category-list/fetchBookCode").then(function (response) {
      var code = response.data.code;
      bookCodeData.id = code.id;
      bookCodeData.year = code.year;
      bookCodeData.bookIn = code.bookIn;
    })["catch"](function (error) {
      console.log(error);
    });
  };

  fetchBookCode();

  var fetchCategories = function fetchCategories(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch("category-list/fetchCategories").then(function (response) {
      var category = response.data.category;
      categoryLists.value = category.map(function (item) {
        //   let book = item;
        return item;
      });
      items.value = categoryLists.value;
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
        props: {
          title: "Error fetching category",
          icon: "AlertTriangleIcon",
          variant: "danger"
        }
      });
    });
    totalRows.value = items.value.length;
  };

  fetchCategories();

  var onConfirmDelete = function onConfirmDelete(id) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-danger ml-1"
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.isConfirmed) {
        onDelete(id);
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your file has been deleted.",
          customClass: {
            confirmButton: "btn btn-success"
          }
        });
      }
    });
  };

  var onDelete = function onDelete(id) {
    _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch("category-list/deleteCategory", {
      id: id
    }).then(function (response) {
      if (response.data.message == "success") {
        items.value = items.value.filter(function (el) {
          return el.id !== id;
        });
        console.log("success");
      } else {
        console.log("error");
      }
    })["catch"](function (error) {
      var textErrors = "";
      Object.values(error.response.data.errors).forEach(function (textError) {
        textErrors = textErrors + textError + "<br>";
      });
      errorToast(textErrors);
    });
  }; // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*


  if (localStorage.getItem("added") == 1) {
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
      props: {
        title: "Added Category",
        icon: "CheckIcon",
        variant: "success"
      }
    });
    localStorage.removeItem("added");
  }

  if (localStorage.getItem("edited") == 1) {
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
      props: {
        title: "Edited Category",
        icon: "CheckIcon",
        variant: "success"
      }
    });
    localStorage.removeItem("edited");
  }

  return {
    items: items,
    perPage: perPage,
    pageOptions: pageOptions,
    totalRows: totalRows,
    currentPage: currentPage,
    sortBy: sortBy,
    sortDesc: sortDesc,
    sortDirection: sortDirection,
    filter: filter,
    filterOn: filterOn,
    visibleFields: visibleFields,
    sortOptions: sortOptions,
    onFiltered: onFiltered,
    table: table,
    onConfirmDelete: onConfirmDelete,
    bookCodeData: bookCodeData
  };
}

/***/ })

}]);