(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HCL_POC\OsdFabricPOC\src\main.ts */"zUnb");


/***/ }),

/***/ "5PvJ":
/*!********************************************************************************!*\
  !*** ./src/app/poc/container/drawing-container/drawing-container.component.ts ***!
  \********************************************************************************/
/*! exports provided: DrawingContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingContainerComponent", function() { return DrawingContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_shapes_shapes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/shapes/shapes.component */ "xEwb");



class DrawingContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrawingContainerComponent.ɵfac = function DrawingContainerComponent_Factory(t) { return new (t || DrawingContainerComponent)(); };
DrawingContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawingContainerComponent, selectors: [["app-drawing-container"]], decls: 1, vars: 0, template: function DrawingContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "shapes");
    } }, directives: [_component_shapes_shapes_component__WEBPACK_IMPORTED_MODULE_1__["ShapesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmF3aW5nLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drawing-container',
                templateUrl: './drawing-container.component.html',
                styleUrls: ['./drawing-container.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _poc_container_drawing_container_drawing_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poc/container/drawing-container/drawing-container.component */ "5PvJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'OsdFabricPOC';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-drawing-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_poc_container_drawing_container_drawing_container_component__WEBPACK_IMPORTED_MODULE_1__["DrawingContainerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _poc_container_drawing_container_drawing_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./poc/container/drawing-container/drawing-container.component */ "5PvJ");
/* harmony import */ var _poc_component_shapes_shapes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./poc/component/shapes/shapes.component */ "xEwb");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _poc_container_drawing_container_drawing_container_component__WEBPACK_IMPORTED_MODULE_20__["DrawingContainerComponent"],
        _poc_component_shapes_shapes_component__WEBPACK_IMPORTED_MODULE_21__["ShapesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _poc_container_drawing_container_drawing_container_component__WEBPACK_IMPORTED_MODULE_20__["DrawingContainerComponent"],
                    _poc_component_shapes_shapes_component__WEBPACK_IMPORTED_MODULE_21__["ShapesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "oP0k":
/*!*************************************************!*\
  !*** ./src/app/poc/services/drawing.service.ts ***!
  \*************************************************/
/*! exports provided: DrawingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingService", function() { return DrawingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DrawingService {
    constructor(http) {
        this.http = http;
    }
    postShape(data) {
        console.log('service', data);
        return this.http.post('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/', data);
    }
    putShape(data, id) {
        console.log('service', data);
        return this.http.put('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/' + id, data);
    }
    getShape() {
        return this.http.get('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/');
    }
    deleteShape(id) {
        return this.http.delete('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/' + id);
    }
}
DrawingService.ɵfac = function DrawingService_Factory(t) { return new (t || DrawingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DrawingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DrawingService, factory: DrawingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xEwb":
/*!**********************************************************!*\
  !*** ./src/app/poc/component/shapes/shapes.component.ts ***!
  \**********************************************************/
/*! exports provided: ShapesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesComponent", function() { return ShapesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "4b23");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/drawing.service */ "oP0k");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");


















function ShapesComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("dasfa ", ctx_r0.getData.length, "");
} }
function ShapesComponent_div_57_div_1_mat_list_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r6.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faVectorSquare);
} }
function ShapesComponent_div_57_div_1_mat_list_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r7.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faCircle);
} }
function ShapesComponent_div_57_div_1_mat_list_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r8.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faDrawPolygon);
} }
function ShapesComponent_div_57_div_1_mat_list_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r9.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faArrowRight);
} }
function ShapesComponent_div_57_div_1_mat_list_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r10.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r10.faTextHeight);
} }
function ShapesComponent_div_57_div_1_mat_list_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_div_57_div_1_mat_list_2_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r5 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.selectItem(ctx_r16.getData[i_r5], i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShapesComponent_div_57_div_1_mat_list_2_span_4_Template, 2, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShapesComponent_div_57_div_1_mat_list_2_span_5_Template, 2, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShapesComponent_div_57_div_1_mat_list_2_span_6_Template, 2, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShapesComponent_div_57_div_1_mat_list_2_span_7_Template, 2, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShapesComponent_div_57_div_1_mat_list_2_span_8_Template, 2, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_div_57_div_1_mat_list_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r5 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.delete(ctx_r18.getData[i_r5].id, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "Rect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "polyline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "i-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("shape ID : ", ctx_r3.getData[i_r5].sid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Type : ", ctx_r3.getData[i_r5].type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faTrashAlt);
} }
function ShapesComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShapesComponent_div_57_div_1_mat_list_2_Template, 17, 9, "mat-list", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getData);
} }
function ShapesComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShapesComponent_div_57_div_1_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getData.length >= 1);
} }
class ShapesComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.shapeType = '';
        this.startPointX = 0;
        this.startPointY = 0;
        this.endPointX = 0;
        this.endPointY = 0;
        //shapeCollection:Array<{}> = []
        this.shapeCollection = [];
        this.mouseMoveEnable = false;
        this.consolidated = [];
        this.undoRedo = [];
        this.polyLinePointCollection = [];
        this.shapeKey = [];
        this.isExistingShap = false;
        this.strokeColor = 'Red';
        this.shapeFormat = {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            stroke: '',
            strokeWidth: 0,
            type: '',
            sid: '',
            radius: 0,
            points: [],
            text: '',
            angle: 0
        };
        /* ICON */
        this.faVectorSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVectorSquare"];
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"];
        this.faDrawPolygon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDrawPolygon"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"];
        this.faTextHeight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTextHeight"];
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPencilAlt"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        //@slider
        this.sliderDisabled = false;
        this.sliderVertical = false;
        this.rotateMin = 0;
        this.rotateMax = 360;
        this.rotateStep = 1;
        this.rotateValue = 0;
        this.rotateDegrees = 0;
        this.rotageTileIndex = NaN;
    }
    formControl() {
        this.shapesGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            customColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    ngOnInit() {
        this.formControl();
    }
    ngAfterViewInit() {
        this.osdTiles();
        this.OSDLayer();
        this.subscribeShape();
        this.loadPath();
        this.testClick();
    }
    osdTiles() {
        //start
        this.tileSource1 = {
            Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                Url: "http://openseadragon.github.io/example-images/highsmith/highsmith_files/",
                Format: "jpg",
                Overlap: "2",
                TileSize: "256",
                Size: {
                    Height: "9221",
                    Width: "7026",
                }
            }
        };
        this.tileSource2 = {
            "@context": "http://iiif.io/api/image/2/context.json",
            "@id": "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2",
            "height": 7200,
            "width": 5233,
            "profile": ["http://iiif.io/api/image/2/level2.json"],
            "protocol": "http://iiif.io/api/image",
            "tiles": [{
                    "scaleFactors": [1, 2, 4, 8, 16, 32],
                    "width": 1024
                }]
        };
        //end
    }
    OSDLayer() {
        let test1 = {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1584555684040-bad07f46a21f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=421&q=80'
            // url:'file:///D:/HCL_POC/OsdFabricPOC/src/images/cancer_cell_1.jpg'
        };
        const osdMetaInfo = {
            Image: {
                xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
                //Url: '//openseadragon.github.io/example-images/duomo/duomo_files/',
                Url: 'https://images.unsplash.com/photo-1584555684040-bad07f46a21f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=421&q=80',
                // Url:'file:///C:/Users/dhand/Downloads/skeleton',
                Format: 'jpg',
                crossOriginPolicy: 'Anonymous',
                ajaxWithCredentials: false,
                Overlap: '2',
                TileSize: '256',
                Size: {
                    // Width: '13920',
                    // Height: '10200',
                    Width: '400',
                    Height: '500',
                },
            },
        };
        this.viewer = new OpenSeadragon.Viewer({
            id: 'openseadragon-holder',
            zoomPerClick: 2,
            prefixUrl: '//openseadragon.github.io/openseadragon/images/',
            //tileSources:osdMetaInfo,// single image
            tileSources: [test1, test1],
            /* tileSources: [{
               tileSource: this.tileSource1,
               width: 1,
               //height:200,
               degrees:this.rotateDegrees,
               y: 0,
               x: 0,
             },
             {
               tileSource:this.tileSource2,
               width: 1,
               degrees:this.rotateDegrees,
               y: 0,
               x: 1.1
             }],*/
            // minZoomImageRatio:  5,
            // maxZoomImageRatio:5,
            // degrees: 90,
            showRotationControl: true,
            sequenceMode: true,
            collectionMode: false,
            collectionRows: 2,
            collectionTileSize: 1024,
            collectionTileMargin: 256,
            collectionLayout: 'vertical',
            gestureSettingsTouch: {
                pinchRotate: true,
            },
            overlays: [{
                    id: 'freeDraw',
                    px: 0,
                    py: 0,
                    width: 13920,
                    height: 10200,
                    placement: 'RIGHT',
                    checkResize: false
                }],
        });
        this.fabricCanvas = this.viewer.fabricjsOverlay({ scale: 1000 }).fabricCanvas();
        this.viewer.setMouseNavEnabled(false);
        // this.viewer.world.getItemAt(0).setRotation(90, false);
    }
    edit(event) {
    }
    // canvasClick(event:any){
    //   this.viewer.addHandler('canvas-click', function(event:any) {
    //     var webPoint = event.position;
    //     console.log('webpoint', webPoint)
    //   });
    // }
    osdMouseClick(event) {
        this.fabricCanvas.on('mouse:down', this.osdMouseDown);
        this.fabricCanvas.on('mouse:up', this.osdMouseUp);
        this.fabricCanvas.on('mouse:move', this.osdMouseMove);
        console.log('flag', this.isExistingShap);
        console.log('mouse click shape Index', this.shapeIndex, this.shapeSID, this.getData);
        let shapeId = this.shapeSID;
        var results = this.getData.filter(function (x) { return x.sid === shapeId; });
        if (this.shapeSID !== '') {
            console.log('put', this.shapeSID, results);
            this.put(this.selectedShape, this.shapeIndex);
        }
        console.log('result', results);
        this.selectedShape = this.fabricCanvas.getActiveObject();
        if (this.selectedShape) {
            this.shapeType = this.selectedShape.type;
        }
        console.log('Mouse Click', this.mouseMoveEnable, event);
        if (this.shapeType === 'PolyLine') {
            let polyLinePoint = this.fabricCanvas.getPointer(event);
            this.polyLinePointCollection.push(polyLinePoint);
            this.startPolyLinePoint = this.polyLinePointCollection[0];
            console.log('poly', this.startPolyLinePoint, this.polyLinePointCollection);
            this.shadowPolyLine(this.polyLinePointCollection, this.strokeColor);
        }
        console.log('selected from viewer', this.selectedShape, this.shapeType, this.isExistingShap);
        if (this.isExistingShap) {
            this.formateObject(this.selectedShape);
        }
    }
    formateObject(data) {
        console.log('recived data', data.width);
        console.log('Shape Index', this.shapeIndex, this.selectedShape);
        if (this.shapeFormat) {
            this.shapeFormat.width = data.width;
            this.shapeFormat.height = data.height;
            this.shapeFormat.top = data.top;
            this.shapeFormat.left = data.left;
            this.shapeFormat.type = data.type;
            this.shapeFormat.strokeWidth = data.strokeWidth;
            this.shapeFormat.stroke = data.stroke;
            this.shapeFormat.sid = data.id;
            this.shapeFormat.radius = data.radius;
            this.shapeFormat.points = data.points;
            this.shapeFormat.text = data.text;
            // this.shapeFormat.stroke = data.stroke
            this.shapeFormat.angle = data.angle;
        }
        if (this.isExistingShap) {
            console.log('#### PUT #####');
            this.put(this.shapeFormat, this.shapeIndex);
        }
        else {
            console.log('#### POST #####');
            this.save(this.shapeFormat);
        }
    }
    osdMouseDoubleClick(event) {
        console.log('Mouse Double Click', event);
        if (this.shapeType === 'polyline') {
            this.polyLinePointCollection.push(this.startPolyLinePoint);
            this.shapeType = 'completePolyLine';
        }
        if (this.shapeType === 'completePolyLine') {
            this.createPolyLine(this.polyLinePointCollection, this.strokeColor);
            // var obj = this.fabricCanvas.getActiveObject();
            //let Myid= this.fabricCanvas.getActiveObject().get('id');
            //console.log('myID', Myid);
            //this.fabricCanvas.remove(obj)
            console.log('poly complet', this.polyLinePointCollection);
            console.log('poly', this.shapeData, this.createPolyLine);
            if (this.shapeData) {
                this.shapeCollection.push(this.shapeData);
                this.formateObject(this.shapeData);
                this.shapeType = 'null';
            }
            console.log('this.shapeTyp', this.shapeType);
            this.polyLinePointCollection = [];
        }
    }
    // @HostListener('mousedown', ['$event'])
    osdMouseDown(event) {
        console.log('Mouse Down', this.shapeType);
        console.log('Shape Index', this.shapeIndex);
        //this.viewer.on('mousemove', this.osdMouseMove)
        this.mouseMoveEnable = true;
        if (event.offsetX !== undefined) {
            this.startPointX = this.fabricCanvas.getPointer(event).x;
            this.startPointY = this.fabricCanvas.getPointer(event).y;
            if (this.shapeType === 'Rectangle' || this.shapeType === 'Rect') {
                //this.imgMoveStop();
                console.log('Mouse Down #####', event);
                console.log('starting Point', this.fabricCanvas.getPointer(event));
                this.createRectangleShape(this.startPointX, this.startPointY, 0, 0, this.strokeColor);
            }
            if (this.shapeType === 'Circle') {
                console.log('DRAW CIRCLE');
                this.createCircle(this.startPointX, this.startPointY, 0, this.strokeColor);
            }
            // if(this.shapeType === 'Circle'){
            //   console.log('DRAW CIRCLE');
            //   this.createCircle(this.startPointX, this.startPointY)
            // }
            if (this.shapeType === 'Text') {
                console.log('DRAW CIRCLE');
                this.creatItext(this.startPointX, this.startPointY, 'hai', this.strokeColor);
            }
        }
        // this.fabricCanvas.on('mouse:up', this.osdMouseUp);
    }
    // @HostListener('mouseup', ['$event'])
    osdMouseUp(event) {
        //this.shapeType = 'Rectangle'
        //console.log('Mouse UP Trigger', this.shapeData, event.offsetX)
        console.log('mouse UP selected Data', this.shapeData);
        console.log('mouse up selected Indes', this.shapeIndex);
        if (event.target !== undefined) {
            // let moueUpEndpoing = this.fabricCanvas.getPointer(event.target);
            console.log('Mouse UP ############');
            console.log('mouseup cord', event.target);
        }
        if (event.offsetX !== undefined) {
            if (this.shapeType === 'Rect' || this.shapeType === 'Rectangle' || this.shapeType === 'Circle' || this.shapeType === 'Text') {
                // if(this.shapeType === 'LineArrow'){
                //   this.drawArrow(this.startPointX, this.startPointY)
                // }
                console.log('Mouse UP ############');
                console.log('Mouse UP Collect', this.shapeData);
                if (this.shapeData) {
                    this.shapeCollection.push(this.shapeData);
                    this.formateObject(this.shapeData);
                    this.shapeType = 'null';
                }
                console.log('Mouse UP Trigger', this.shapeData, event.offsetX);
                this.mouseMoveEnable = false;
                this.viewer.setMouseNavEnabled(true);
            }
            if (this.shapeType === 'LineArrow') {
                let arrowUpPoints = this.fabricCanvas.getPointer(event);
                let endX = arrowUpPoints.x;
                let endY = arrowUpPoints.y;
                this.drawArrow(this.startPointX, this.startPointY, endX, endY, this.strokeColor);
                if (this.shapeData) {
                    this.shapeCollection.push(this.shapeData);
                    this.formateObject(this.shapeData);
                    this.shapeType = 'null';
                }
            }
        }
        this.selectedShape = true;
        //this.fabricCanvas.off('mouse:down', this.osdMouseDown);
        //this.fabricCanvas.set
    }
    // @HostListener('mousemove', ['$event'])
    osdMouseMove(event) {
        //  console.log('Mouse MOVE',  this.shapeType, event, this.editedShape)
        // this.shapeType = 'Rectangle'
        if (event.offsetX !== undefined) {
            let movedPoint = this.fabricCanvas.getPointer(event);
            // console.log('****WIDTH ****', Math.abs(this.startPointX - movedPoint.x))
        }
        if (event.offsetX !== undefined) {
            let movedPoint = this.fabricCanvas.getPointer(event);
            if (this.mouseMoveEnable && movedPoint && this.startPointX && this.shapeData !== undefined) {
                // console.log('Mouse MOVE width',  Math.abs(this.startPointX - movedPoint.x))
                if (this.shapeType === 'Rectangle' || this.shapeType === 'Rect') {
                    this.shapeData.set({
                        left: this.startPointX < movedPoint.x ? this.startPointX : movedPoint.x,
                        top: this.startPointY < movedPoint.y ? this.startPointY : movedPoint.y,
                        width: Math.abs(this.startPointX - movedPoint.x),
                        height: Math.abs(this.startPointY - movedPoint.y)
                    });
                    console.log('dsadfasfasdfdasfasfds');
                    this.fabricCanvas.setActiveObject(this.shapeData);
                    this.fabricCanvas.renderAll();
                }
                if (this.shapeType === 'Circle') {
                    this.shapeData.set({
                        radius: Math.abs(this.startPointX - movedPoint.x)
                    });
                    this.fabricCanvas.setActiveObject(this.shapeData);
                    this.fabricCanvas.renderAll();
                }
            }
        }
        // console.log('dwewrwerwe', this.fabricCanvas.setActiveObject(this.shapeData))
        // this.fabricCanvas.renderAll();
    }
    drawShape(shapeAction) {
        this.testClick();
        this.isExistingShap = false;
        console.log('shape type', shapeAction, Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])());
        this.shapeType = shapeAction;
        // this.imgMoveStop();
        this.viewer.setMouseNavEnabled(false);
        if (shapeAction === "pencil") {
            this.shapeType = "pencil";
            this.shapeData = new fabric.Canvas('freeDraw', {});
            this.shapeData.type = 'pencil';
            this.fabricCanvas.freeDrawingBrush.color = 'green';
            this.fabricCanvas.freeDrawingBrush.width = 5;
            this.fabricCanvas.isDrawingMode = true;
            this.viewer.setMouseNavEnabled(false);
            //
        }
    }
    createRectangleShape(x, y, w, h, color, angle) {
        console.log('cee');
        this.shapeData = new fabric.Rect({
            type: 'Rect',
            left: x,
            top: y,
            width: w ? w : 0,
            height: h ? h : 0,
            fill: '',
            stroke: color ? color : 'red',
            strokeWidth: 5,
            angle: angle ? angle : 0
        });
        this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    createCircle(x, y, r, color) {
        console.log('cirlce', x, y, r);
        this.shapeData = new fabric.Circle({
            type: 'circle',
            left: x,
            top: y,
            radius: r ? r : 0,
            fill: '',
            stroke: color ? color : 'red',
            strokeWidth: 10,
            originX: 'center',
            originY: 'center'
        });
        this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
        this.fabricCanvas.add(this.shapeData);
    }
    createPolyLine(points, color) {
        this.shapeData = new fabric.Polyline(points, {
            fill: '',
            stroke: color ? color : 'orange',
            strokeWidth: 5,
        });
        if (this.shapeType === 'completePolyLine') {
            this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
            this.shapeCollection.push(this.shapeData);
            console.log('poly data', this.shapeData);
            console.log('poly Arrya', this.shapeCollection);
            this.shapeType = 'finish';
            this.mouseMoveEnable = false;
            // this.fabricCanvas.add(this.shapeData);
            // this.fabricCanvas.renderAll();
            //this.fabricCanvas.setActiveObject(this.shapeData)
        }
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    shadowPolyLine(points, color) {
        this.shapeData = new fabric.Polyline(points, {
            fill: '',
            stroke: color ? color : 'orange',
            strokeWidth: 5
        });
        if (this.shapeType === 'completePolyLine') {
            this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
            this.shapeData = {};
            this.shapeCollection.push(this.shapeData);
            console.log('poly data', this.shapeData);
            console.log('poly Arrya', this.shapeCollection);
            this.shapeType = 'finish';
            // this.fabricCanvas.add(this.shapeData);
            // this.fabricCanvas.renderAll();
        }
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    loadPath() {
        //`M ${pointer.x} ${pointer.y}`
        const temp = ["M", 281.6495878092448, 111.995];
        this.shapeData = new fabric.Path(temp, {
            strokeWidth: 3,
            stroke: 'green',
            fill: 'green',
            selectable: false,
            hasRotatingPoint: false
        });
        // as CustomFabricPath;
        // path.id = uuid();
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    loadPolyline(points, x, y) {
        this.shapeData = new fabric.Polyline(points, {
            fill: '',
            stroke: 'orange',
            strokeWidth: 5,
            left: x ? x : null,
            top: y ? y : null
        });
        this.fabricCanvas.add(this.shapeData);
    }
    unsetEvent() {
        this.viewer.setMouseNavEnabled(!this.mouseMoveEnable); // revisit
    }
    selectItem(details, index) {
        this.mouseEventOn();
        let objectData = this.fabricCanvas.getActiveObject();
        this.fabricCanvas.setActiveObject(this.fabricCanvas.item(index + 1));
        //this.fabricCanvas.setActiveObject(0)
        this.shapeIndex = details.id;
        this.shapeSID = details.sid;
        this.shapeType = details.type;
        this.editedShape = details.type; // this.shapeData = details;
        this.isExistingShap = true;
        console.log('select Item', details.id, details.type, this.shapeIndex);
        this.viewer.setMouseNavEnabled(false);
        //let objectData =  this.fabricCanvas.getActiveObject();
        //this.viewer.world.getItemAt(0).setRotation(180, true);
        // console.log('totad', objectData)
        // this.shapeType = objectData.type
        //this.mouseMoveEnable = true;
        // this.fabricCanvas.setActiveObject(this.fabricCanvas.item(0));
        // this.fabricCanvas.setActiveObject(0);
        // this.fabricCanvas.requestRenderAll();
        //this.fabricCanvas.setActiveObject(objectData);
        this.fabricCanvas.renderAll();
    }
    save(shapData) {
        console.log('post', this.getData);
        // if(this.getData.length > 0){
        // this.service.putShape(shapData).subscribe(a => {
        //   console.log('put', a)
        //  });
        // }else{
        this.service.postShape(shapData).subscribe(a => {
            console.log('post', a);
            if (a) {
                //this.get()
                this.subscribeShape();
            }
        });
        // }
    }
    subscribeShape() {
        this.service.getShape().subscribe(res => {
            this.getData = res;
            console.log('subscribeShape', this.getData);
            for (let i = 0; i < this.getData.length; i++) {
                if (this.getData[i].type === 'Rect') {
                    this.createRectangleShape(this.getData[i].left, this.getData[i].top, this.getData[i].width, this.getData[i].height, this.getData[i].stroke, this.getData[i].angle);
                }
                if (this.getData[i].type === 'circle') {
                    this.createCircle(this.getData[i].left, this.getData[i].top, this.getData[i].radius, this.getData[i].stroke);
                }
                if (this.getData[i].type === 'arrow') {
                    this.loadArrowLine(this.getData[i].points, this.getData[i].stroke);
                    //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
                }
                if (this.getData[i].type === 'polyline') {
                    this.loadArrowLine(this.getData[i].points, this.getData[i].stroke);
                    //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
                }
                if (this.getData[i].type === 'i-text') {
                    console.log('arrow', this.getData[i]);
                    this.creatItext(this.getData[i].left, this.getData[i].top, this.getData[i].text, this.getData[i].stroke);
                    //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
                }
            }
        });
    }
    put(shapeData, id) {
        this.service.putShape(shapeData, id).subscribe(a => {
            console.log('put', a);
        });
    }
    makeShape() {
    }
    mouseEventOn() {
        this.fabricCanvas.on('mouse:down', this.osdMouseDown);
        this.fabricCanvas.on('mouse:up', this.osdMouseUp);
        this.fabricCanvas.on('mouse:move', this.osdMouseMove);
    }
    mouseEventOff() {
        this.fabricCanvas.off('mouse:down', this.osdMouseDown);
        this.fabricCanvas.off('mouse:up', this.osdMouseUp);
        this.fabricCanvas.off('mouse:move', this.osdMouseMove);
    }
    loadArrowLine(points, color) {
        this.shapeData = new fabric.Polyline(points, {
            fill: '',
            stroke: color ? color : 'red',
            opacity: 1,
            strokeWidth: 5,
            originX: 'left',
            originY: 'top',
            selectable: true,
            type: 'arrow'
        });
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    creatItext(x, y, text, color) {
        let txt = text ? text : 'hello';
        this.shapeData = new fabric.IText(txt, {
            left: x,
            top: y,
            fill: color ? color : 'red',
            stroke: color ? color : 'red',
            strokeWidth: 2,
            lineHeight: 2
            // originX: 'center',
            // originY: 'center'
        });
        this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    drawArrow(fromX, fromY, toX, toY, color) {
        console.log('drwarrow');
        let arrowAngle = Math.atan2(toY - fromY, toX - fromX);
        let arrowHeadSize = 15;
        toX = toX - (arrowHeadSize) * Math.cos(arrowAngle);
        toY = toY - (arrowHeadSize) * Math.sin(arrowAngle);
        let points = [
            {
                x: fromX,
                y: fromY
            },
            {
                x: fromX - (arrowHeadSize / 4) * Math.cos(arrowAngle - Math.PI / 2),
                y: fromY - (arrowHeadSize / 4) * Math.sin(arrowAngle - Math.PI / 2)
            },
            {
                x: toX - (arrowHeadSize / 4) * Math.cos(arrowAngle - Math.PI / 2),
                y: toY - (arrowHeadSize / 4) * Math.sin(arrowAngle - Math.PI / 2)
            },
            {
                x: toX - (arrowHeadSize) * Math.cos(arrowAngle - Math.PI / 2),
                y: toY - (arrowHeadSize) * Math.sin(arrowAngle - Math.PI / 2)
            },
            {
                x: toX + (arrowHeadSize) * Math.cos(arrowAngle),
                y: toY + (arrowHeadSize) * Math.sin(arrowAngle)
            },
            {
                x: toX - (arrowHeadSize) * Math.cos(arrowAngle + Math.PI / 2),
                y: toY - (arrowHeadSize) * Math.sin(arrowAngle + Math.PI / 2)
            },
            {
                x: toX - (arrowHeadSize / 4) * Math.cos(arrowAngle + Math.PI / 2),
                y: toY - (arrowHeadSize / 4) * Math.sin(arrowAngle + Math.PI / 2)
            },
            {
                x: fromX - (arrowHeadSize / 4) * Math.cos(arrowAngle + Math.PI / 2),
                y: fromY - (arrowHeadSize / 4) * Math.sin(arrowAngle + Math.PI / 2)
            },
            {
                x: fromX,
                y: fromY
            }
        ];
        console.log('arrow points', points);
        this.shapeData = new fabric.Polyline(points, {
            fill: color ? color : 'red',
            stroke: color ? color : 'red',
            opacity: 1,
            strokeWidth: 5,
            originX: 'left',
            originY: 'top',
            selectable: true,
            type: 'arrow'
        });
        this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    clk(event) {
        this.viewer.addHandler('canvas-click', function (event) {
            console.log('canvas...', event.target);
        });
    }
    // imgMoveStop() {
    //   this.viewer.addHandler('canvas-drag', function (event:any) {
    //     event.preventDefaultAction = true;
    //   });
    // }
    imgMoveStart() {
        this.viewer.addHandler('canvas-drag', function (event) {
            event.preventDefaultAction = false;
        });
    }
    selectStrokeColor(event) {
        this.strokeColor = event.value;
    }
    selectTile(tile) {
        this.rotageTileIndex = tile;
    }
    delete(id, index) {
        // this.fabricCanvas.setActiveObject(this.fabricCanvas.item(index+1))
        let del;
        console.log('delete', id, index);
        this.service.deleteShape(id).subscribe(res => {
            if (res) {
                del = res;
                console.log('delete res', res);
                // this.subscribeShape();
                this.subscribeShape();
            }
        });
        var activeObject = this.fabricCanvas.getActiveObject();
        console.log('delete res', activeObject);
        //this.fabricCanvas.item(index+1)
        if (confirm('Are you sure?')) {
            this.fabricCanvas.remove(activeObject);
        }
        this.fabricCanvas.renderAll();
    }
    rotateSlider() {
        this.viewer.world.getItemAt(this.rotageTileIndex).setRotation(this.rotateValue, false);
    }
    resetRotation() {
        this.viewer.world.getItemAt(0).setRotation(0, true);
        this.viewer.world.getItemAt(1).setRotation(0, true);
        this.rotateValue = 0;
        console.log('fab', this.fabricCanvas.getObjects());
        /* var group = new fabric.Group(this.fabricCanvas.getObjects());
     
                     group.rotate(90);
     
                     this.fabricCanvas.centerObject(group);
                     group.setCoords();
                     this.fabricCanvas.renderAll();*/
    }
    rotateShape() {
        var group = new fabric.Group(this.fabricCanvas.getObjects(), {
            width: 600,
            height: 750,
            top: 100,
            left: 400,
            originX: 'center',
            originY: 'center',
            angle: 90
        });
        //  group.rotate(90);
        //  this.fabricCanvas.centerObject(group);
        group.setCoords();
        group.remove();
        this.fabricCanvas.renderAll();
    }
    //Handler
    testClick() {
        this.viewer.setMouseNavEnabled(false);
        this.viewer.addHandler('canvas-click', function (event) {
            // var viewportPoint = this.viewer.viewport.pointFromPixel(event.position);
            //  var imagePoint = this.viewer.viewport.viewportToImageCoordinates(viewportPoint.x, viewportPoint.y);
            console.log('test Click', event.position);
        });
        this.viewer.addHandler('canvas-drag', function (event) {
            // var viewportPoint = this.viewer.viewport.pointFromPixel(event.position);
            //  var imagePoint = this.viewer.viewport.viewportToImageCoordinates(viewportPoint.x, viewportPoint.y);
        }, console.log('canvas-drag', this.shapeData));
        this.viewer.addHandler('canvas-drag-end', function (event) {
            // var viewportPoint = this.viewer.viewport.pointFromPixel(event.position);
            //  var imagePoint = this.viewer.viewport.viewportToImageCoordinates(viewportPoint.x, viewportPoint.y);
            // console.log('test drag-end');
        }, console.log('test drag-end', this.shapeData));
    }
}
ShapesComponent.ɵfac = function ShapesComponent_Factory(t) { return new (t || ShapesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
ShapesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShapesComponent, selectors: [["shapes"]], decls: 58, vars: 16, consts: [[1, "container-fluid"], [1, "row"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Rectangle", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Circle", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Poly Line", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Line Arrow", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Text", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Free Hand", 3, "click"], [1, "col"], [3, "formGroup"], ["appearance", "fill"], ["formControlName", "customColor", 3, "selectionChange"], ["value", "red"], ["value", "green"], ["value", "blue"], ["value", "black"], ["value", "#ADFF2F"], ["value", "orangered"], ["value", "blueviolet"], ["value", "white"], ["mat-icon-button", "", "color", "primary ", "matTooltip", "Tile 1", 1, "tile", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Tile 2", 1, "tile", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Reset", 1, "tile", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Remove shape", 1, "tile", 3, "click"], [1, "example-margin", 3, "disabled", "max", "min", "step", "ngModel", "vertical", "ngModelChange", "click"], [1, "col-6", "justify-content-md-center"], ["id", "openseadragon-holder", 2, "width", "750px", "height", "600px", 3, "click", "dblclick", "mousemove", "mousedown", "mouseup"], ["id", "freeDraw", 2, "width", "750px", "height", "600px"], [4, "ngIf"], ["class", "detail", 4, "ngIf"], [1, "detail"], [4, "ngFor", "ngForOf"], [3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Remove shape", 1, "del", 3, "click"], [2, "color", "red", 3, "icon"]], template: function ShapesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_3_listener() { return ctx.drawShape("Rectangle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_5_listener() { return ctx.drawShape("Circle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_7_listener() { return ctx.drawShape("PolyLine"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_9_listener() { return ctx.drawShape("LineArrow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_11_listener() { return ctx.drawShape("Text"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_13_listener() { return ctx.drawShape("pencil"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stroke Color (Default color is RED)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ShapesComponent_Template_mat_select_selectionChange_22_listener($event) { return ctx.selectStrokeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "GreenYellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "OrangeRed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "BlueViolet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_39_listener() { return ctx.selectTile(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Select Tile 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_41_listener() { return ctx.selectTile(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Select Tile 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_43_listener() { return ctx.resetRotation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Reset Tile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_button_click_45_listener() { return ctx.rotateShape(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " ROTATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-slider", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShapesComponent_Template_mat_slider_ngModelChange_51_listener($event) { return ctx.rotateValue = $event; })("click", function ShapesComponent_Template_mat_slider_click_51_listener() { return ctx.rotateSlider(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShapesComponent_Template_div_click_53_listener($event) { return ctx.clk($event); })("click", function ShapesComponent_Template_div_click_53_listener($event) { return ctx.osdMouseClick($event); })("dblclick", function ShapesComponent_Template_div_dblclick_53_listener($event) { return ctx.osdMouseDoubleClick($event); })("mousemove", function ShapesComponent_Template_div_mousemove_53_listener($event) { return ctx.osdMouseMove($event); })("mousedown", function ShapesComponent_Template_div_mousedown_53_listener($event) { return ctx.osdMouseDown($event); })("mouseup", function ShapesComponent_Template_div_mouseup_53_listener($event) { return ctx.osdMouseUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "canvas", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ShapesComponent_div_56_Template, 2, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ShapesComponent_div_57_Template, 2, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faVectorSquare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDrawPolygon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTextHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPencilAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.shapesGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tile Rotate : ", ctx.rotateValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sliderDisabled)("max", ctx.rotateMax)("min", ctx.rotateMin)("step", ctx.rotateStep)("ngModel", ctx.rotateValue)("vertical", ctx.sliderVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getData);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"]], styles: ["button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  padding: 0 0 !important;\n  border: none;\n  background-color: black;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-list-base .mat-list-item .mat-list-item-content {\n  padding: 0px !important;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: white;\n  padding-top: 25px;\n  padding-bottom: 55px;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  list-style-type: none;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: grey;\n}\n\n.tile[_ngcontent-%COMP%] {\n  color: white !important;\n  width: 200px !important;\n  margin-bottom: 25px !important;\n  background: #333232;\n}\n\n.detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-top: 50px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n  .mat-form-field-flex {\n  background: #333232 !important;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  background: #333232;\n}\n\n  .mat-slider-horizontal {\n  min-width: 200px !important;\n}\n\ndel[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFMSjs7QUFRQTtFQUNJLFlBQUE7QUFMSjs7QUFRQTtFQUNJLHVCQUFBO0FBTEo7O0FBUUE7RUFTSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWJKOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQURSOztBQUlJO0VBQ0ksbUJBQUE7QUFGUjs7QUFTQTtFQUNJLHNCQUFBO0FBTko7O0FBc0JBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFuQko7O0FBcUJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsQko7O0FBcUJBO0VBQ0ksZ0JBQUE7QUFsQko7O0FBb0JBO0VBQ0ksOEJBQUE7QUFqQko7O0FBb0JBO0VBQ0ksbUJBQUE7QUFqQko7O0FBb0JBO0VBQ0ksMkJBQUE7QUFqQko7O0FBb0JBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFqQkoiLCJmaWxlIjoic2hhcGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI29wZW5zZWFkcmFnb24taG9sZGVye1xuLy8gICAgIHdpZHRoOiA3NTBweDtcbi8vICAgICBoZWlnaHQ6IDYwMHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDI1cHg7XG4vLyB9XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuXG5mYS1pY29ue1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICAgIHVse1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICB9XG5cbiAgICBzcGFue1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbn1cblxuLm1hdC1kaXZpZGVye1xuICAgIGJvcmRlci10b3AtY29sb3I6Z3JleTtcbn1cblxuLy8gI2ZyZWVoYW5ke1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogNzUwcHg7XG4vLyAgICAgaGVpZ2h0OiA2MDBweDtcbi8vICAgICBsZWZ0OiAwcHg7XG4vLyAgICAgdG9wOiAwcHg7XG4vLyAgICAgdG91Y2gtYWN0aW9uOiBub25lO1xuLy8gICAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgICBtYXJnaW4tdG9wOiA4OHB4O1xuLy8gICAgIHotaW5kZXg6IDk5OTk7XG4vLyB9XG5cbi50aWxle1xuICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7IFxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50OyBcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiKDUxLCA1MCwgNTApO1xufVxuLmRldGFpbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e1xuICAgIGJhY2tncm91bmQ6IHJnYig1MSwgNTAsIDUwKSAhaW1wb3J0YW50O1xufSBcblxubWF0LXNsaWRlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTEsIDUwLCA1MCk7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlci1ob3Jpem9udGFse1xuICAgIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuZGVse1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShapesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'shapes',
                templateUrl: './shapes.component.html',
                styleUrls: ['./shapes.component.scss']
            }]
    }], function () { return [{ type: _services_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map