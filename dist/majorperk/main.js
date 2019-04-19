(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/marketplace/marketplace.component */ "./src/app/pages/marketplace/marketplace.component.ts");





var routes = [
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'marketplace', component: _pages_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_4__["MarketplaceComponent"] },
    { path: '**', redirectTo: 'dashboard' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NG-ZORRO -->\n\n\n<app-global-nav></app-global-nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'majorperk';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _components_global_nav_global_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/global-nav/global-nav.component */ "./src/app/components/global-nav/global-nav.component.ts");
/* harmony import */ var _pages_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/marketplace/marketplace.component */ "./src/app/pages/marketplace/marketplace.component.ts");
/* harmony import */ var _components_market_nav_market_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/market-nav/market-nav.component */ "./src/app/components/market-nav/market-nav.component.ts");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_global_nav_global_nav_component__WEBPACK_IMPORTED_MODULE_13__["GlobalNavComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _pages_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_14__["MarketplaceComponent"],
                _components_market_nav_market_nav_component__WEBPACK_IMPORTED_MODULE_15__["MarketNavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["en_US"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/global-nav/global-nav.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/global-nav/global-nav.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-header>\n  <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height:\n    64px;\">\n    <li nz-menu-item class=\"logo\">\n        <img src=\"../../../assets/img/logo/mini-logo.png\">\n        <h2 class=\"logo-name\">Major Perk</h2>\n    </li>\n    <li (click)=\"routeTo('dashboard')\" nz-menu-item>Dashboard</li>\n    <li (click)=\"routeTo('marketplace')\" nz-menu-item>Market</li>\n  </ul>\n</nz-header>\n"

/***/ }),

/***/ "./src/app/components/global-nav/global-nav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/global-nav/global-nav.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 35px; }\n\n.logo-name {\n  color: #fff;\n  font-size: 20px;\n  margin: 0 0 0 10px;\n  vertical-align: middle;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnZWlhaGFua2EvRG9jdW1lbnRzL1Byb2plY3RzL21ham9ycGVyay1lbXBsb3llZS9tYWpvcnBlcmsvc3JjL2FwcC9jb21wb25lbnRzL2dsb2JhbC1uYXYvZ2xvYmFsLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dsb2JhbC1uYXYvZ2xvYmFsLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuLmxvZ28tbmFtZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/global-nav/global-nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/global-nav/global-nav.component.ts ***!
  \***************************************************************/
/*! exports provided: GlobalNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalNavComponent", function() { return GlobalNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GlobalNavComponent = /** @class */ (function () {
    function GlobalNavComponent(router) {
        this.router = router;
    }
    GlobalNavComponent.prototype.routeTo = function (destination) {
        this.router.navigate([destination]);
    };
    GlobalNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-global-nav',
            template: __webpack_require__(/*! ./global-nav.component.html */ "./src/app/components/global-nav/global-nav.component.html"),
            styles: [__webpack_require__(/*! ./global-nav.component.scss */ "./src/app/components/global-nav/global-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GlobalNavComponent);
    return GlobalNavComponent;
}());



/***/ }),

/***/ "./src/app/components/market-nav/market-nav.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/market-nav/market-nav.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzMode]=\"'inline'\" style=\"width: 100%; background: lightgray\">\n  <li nz-submenu [nzOpen]=true>\n    <span title>Travel</span>\n    <ul>\n      <li nz-menu-group>\n        <ul>\n          <li nz-menu-item>Flight</li>\n          <li nz-menu-item>Public Transport</li>\n          <li nz-menu-item>Vacation Packages</li>\n          <li nz-menu-item>Hotel</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li nz-submenu [nzOpen]=true>\n    <span title>Gift Cards</span>\n    <ul>\n      <li nz-menu-item>Amazon</li>\n      <li nz-menu-item>Arby's</li>\n      <li nz-menu-item>Dunkin Donuts</li>\n      <li nz-menu-item>Grocery</li>\n      <li nz-menu-item>Gas</li>\n      <li nz-menu-item>McDonalds</li>\n      <li nz-menu-item>Subway</li>\n      <li nz-menu-item>Trader Joes</li>\n      <li nz-menu-item>Tim Hortons</li>\n      <li nz-menu-item>Walmart</li>\n    </ul>\n  </li>\n  <li nz-submenu [nzOpen]=true>\n    <span title>Fitness</span>\n    <ul>\n      <li nz-menu-item>Gym Membership</li>\n    </ul>\n  </li>\n  <li nz-submenu [nzOpen]=true>\n      <span title>Electronics</span>\n      <ul>\n        <li nz-menu-item>Watch</li>\n        <li nz-menu-item>Tablet</li>\n        <li nz-menu-item>Apple</li>\n        <li nz-menu-item>Fitbit</li>\n      </ul>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/market-nav/market-nav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/market-nav/market-nav.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFya2V0LW5hdi9tYXJrZXQtbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/market-nav/market-nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/market-nav/market-nav.component.ts ***!
  \***************************************************************/
/*! exports provided: MarketNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketNavComponent", function() { return MarketNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MarketNavComponent = /** @class */ (function () {
    function MarketNavComponent() {
    }
    MarketNavComponent.prototype.ngOnInit = function () {
    };
    MarketNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-market-nav',
            template: __webpack_require__(/*! ./market-nav.component.html */ "./src/app/components/market-nav/market-nav.component.html"),
            styles: [__webpack_require__(/*! ./market-nav.component.scss */ "./src/app/components/market-nav/market-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MarketNavComponent);
    return MarketNavComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout-fill\">\n  <nz-content style=\"padding:0 50px;\">\n    <nz-breadcrumb style=\"margin:16px 0;\">\n      <nz-breadcrumb-item>MajorPerk</nz-breadcrumb-item>\n      <nz-breadcrumb-item>Dashboard</nz-breadcrumb-item>\n    </nz-breadcrumb>\n\n    <div nz-row [nzGutter]=\"{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 }\">\n      <div nz-col [nzXs]=\"{ span: 24 }\" [nzLg]=\"{ span: 6 }\">\n\n        <!-- REWARDS -->\n        <nz-card class=\"dashboard-module\" nzTitle=\"Reward Yourself\">\n          <nz-list [nzDataSource]=\"data\" [nzItemLayout]=\"'vertical'\"\n            [nzRenderItem]=\"item\">\n            <ng-template #item let-item>\n              <nz-list-item [nzContent]=\"item.content\">\n                <nz-list-item-meta [nzAvatar]=\"item.avatar\"\n                  [nzTitle]=\"nzTitle\"\n                  [nzDescription]=\"item.description\">\n                  <ng-template #nzTitle><a href=\"{{ item.href }}\">{{\n                      item.title\n                      }}</a></ng-template>\n                </nz-list-item-meta>\n              </nz-list-item>\n            </ng-template>\n          </nz-list>\n        </nz-card>\n\n      </div>\n\n      <div nz-col [nzXs]=\"{ span: 24 }\" [nzLg]=\"{ span: 12 }\">\n\n        <!-- USER TIER -->\n\n        <nz-card class=\"dashboard-module\" nzTitle=\"Your Teir\">\n          <div nz-row>\n            <div nz-col nzSpan=\"8\">\n              <div>\n                <h1>{{userTier}}</h1>\n              </div>\n            </div>\n\n            <div nz-col nzSpan=\"16\">\n              <div>\n                <h1>Next Teir: Gold</h1>\n              </div>\n\n              <nz-progress [nzWidth]=\"80\" nzPercent=\"{{totalDaysTargetCompletion}}\" nzType=\"circle\" [nzStrokeColor]=\"lightgreen\"></nz-progress>\n              <nz-progress [nzWidth]=\"80\" nzPercent=\"{{onTimePercentTargetCompletion}}\" nzType=\"circle\" [nzStrokeColor]=\"lightblue\"></nz-progress>\n            \n            </div>\n          </div>\n        </nz-card>\n\n        <!-- USER POINTS -->\n\n        <nz-card class=\"dashboard-module\" nzTitle=\"Your\n          Points\">\n          <div>\n            <h5>Available Points</h5>\n            <h1>{{userPoints | number}}</h1>\n\n            <h5>Yesterday's Points Earned</h5>\n            <h3> 110 </h3>\n\n            <h5>Points This Period</h5>\n            <h3> 4,320 </h3>\n\n          </div>\n        </nz-card>\n\n        <!-- ANNOUNCEMENTS -->\n\n        <nz-card class=\"dashboard-module\" nzTitle=\"Announcements\">\n          <nz-carousel [nzEffect]=\"fade\" [nzEnableSwipe]=\"true\">\n            <div nz-carousel-content *ngFor=\"let index of array\">\n              <h3>{{ index }}</h3>\n            </div>\n          </nz-carousel>\n        </nz-card>\n\n      </div>\n\n      <div nz-col [nzXs]=\"{ span: 24 }\" [nzLg]=\"{ span: 6 }\">\n\n        <!-- STATISTICS -->\n\n        <nz-card class=\"dashboard-module\" nzTitle=\"Statistics\">\n          <nz-row [nzGutter]=\"16\">\n            <nz-col [nzSpan]=\"12\">\n              <nz-statistic [nzValue]=\"1128 | number\" [nzTitle]=\"'Your Rank'\"\n                [nzSuffix]=\"'/ 11,452'\"></nz-statistic>\n              <!-- <ng-template #prefixTpl><i nz-icon type=\"like\"></i></ng-template> -->\n            </nz-col>\n            <nz-col [nzSpan]=\"12\">\n              <nz-statistic [nzValue]=\"93 | number\" [nzTitle]=\"'Program Rank'\"\n                [nzSuffix]=\"'/ 563'\"></nz-statistic>\n            </nz-col>\n          </nz-row>\n        </nz-card>\n\n        <!-- REFER A FRIEND -->\n\n        <nz-card class=\"dashboard-module\" nzTitle=\"Refer a friend!\">\n          <div class=\"column-content\"></div>\n        </nz-card>\n      </div>\n    </div>\n\n  </nz-content>\n  <nz-footer style=\"text-align: center;\">Employee Dashboard ©2018 by MajorPerk</nz-footer>\n</nz-layout>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-module {\n  margin: 0 0 8px 0; }\n\n[nz-carousel-content] {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: lightgrey;\n  color: #001528;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnZWlhaGFua2EvRG9jdW1lbnRzL1Byb2plY3RzL21ham9ycGVyay1lbXBsb3llZS9tYWpvcnBlcmsvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FDRXJCO0VERUksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLW1vZHVsZSB7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG59XG5cbltuei1jYXJvdXNlbC1jb250ZW50XSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICBjb2xvcjogIzAwMTUyODtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9IiwiLmRhc2hib2FyZC1tb2R1bGUge1xuICBtYXJnaW46IDAgMCA4cHggMDsgfVxuXG5bbnotY2Fyb3VzZWwtY29udGVudF0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNjBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICBjb2xvcjogIzAwMTUyODtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.data = [];
        this.resources = [];
        this.userTier = "Silver";
        this.userPoints = 5000;
        this.totalDays = 30;
        this.totalDaysTarget = 50;
        this.totalDaysTargetCompletion = (this.totalDays / this.totalDaysTarget) * 100;
        this.onTimePercent = 75;
        this.onTimePercentTarget = 80;
        this.onTimePercentTargetCompletion = (this.onTimePercent / this.onTimePercentTarget) * 100;
        this.array = [1, 2, 3, 4];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.data = marketLinks;
        this.resources = resources;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());

var marketLinks = [
    {
        href: "/marketplace/travel",
        title: "Travel",
        avatar: '',
        description: 'Redeem rewards points towards a vacation',
    },
    {
        href: "/marketplace/gift card",
        title: "Gift Cards",
        avatar: '',
        description: 'Turn those rewards points into credit at your favorite store',
    },
    {
        href: "/marketplace/fitness",
        title: "Fitness",
        avatar: '',
        description: 'Reward your body with rewards points',
    },
    {
        href: "/marketplace/electronics",
        title: "Electronics",
        avatar: '',
        description: 'Reward yourself with new gadgets',
    },
    {
        href: "/marketplace/transportation",
        title: "Transportation",
        avatar: '',
        description: 'Give your rewards some miles',
    },
    {
        href: "/userprofile/redeem",
        title: "Cash Out",
        avatar: '',
        description: 'Redeem your points for a VISA gift card',
    }
];
var resources = [
    {
        display: "Affordable Housing Partners",
        url: "https://www.toronto.ca/community-people/community-partners/affordable-housing-partners/",
        description: "Toronto affordable housing partners, locate homes and new developments in the area."
    },
    {
        display: "Child Care & Before-After School Program Locator",
        url: "https://www.toronto.ca/community-people/children-parenting/children-programs-activities/licensed-child-care/child-care-locator/",
        description: "Search for a licensed child care or a before-after school program in Toronto."
    }
];
var stats = [
    {
        name: "Your Dashboard",
        items: [
            {
                title: "Points",
                subtitle: "Current Total Points",
                icon: "local_atm",
                description: "You currently have this amount of points. Head over to the marketplace to redeem.",
                value: 75,
                nextLevelValue: 95,
                button: {
                    text: "Shop!",
                    info: "This will provide employees with the opportunity to redeem rewards via a marketplace/shopping cart function. \n\n" +
                        "A simple 3 click process! \n\n" +
                        "Click 1: View reward details \n" +
                        "Click 2: Add item to cart \n" +
                        "Click 3: Redeem rewards."
                }
            },
            {
                title: "Tier Level",
                chartid: "tier",
                subtitle: "Current Rewards Levels",
                icon: "stars",
                description: "Employees will be categorized into tiers. These tiers motivate employees by providing tangible measures of progress. \n\n" +
                    "A) Silver: After 2 weeks of employment, employees reach Silver status. \n\n" +
                    "B) Gold: After 5 weeks of employment and an 75% on time rate, employees reach Gold status. \n\n" +
                    "C) Platinum: After 9 weeks of employment and an 85% on time rate, employees reach Platinum status. \n",
                value: "Gold",
                nextLevelValue: 33,
                button: {
                    text: "Details",
                    info: "Employees will be categorized into tiers. These tiers motivate employees by providing tangible measures of progress. \n\n" +
                        "A) Silver: After 2 weeks of employment, employees reach Silver status. \n\n" +
                        "B) Gold: After 5 weeks of employment and an 75% on time rate, employees reach Gold status. \n\n" +
                        "C) Platinum: After 9 weeks of employment and an 85% on time rate, employees reach Platinum status. \n"
                }
            },
            {
                title: "Days On-Time Streak",
                subtitle: "Consecutive Days with on-time clock in.",
                icon: "outlined_flag",
                description: "Number of days you have clocked in at or before your set arrival time.",
                value: 60,
                nextLevelValue: 80,
                button: {
                    text: "Details",
                    info: "On-time percentage goes into calculating tiers. \n\n" +
                        "75% combined with 5 weeks worked will elevate an employee to Gold. \n\n" +
                        "85% combined with 9 weeks worked will elevate an employee to Platinum."
                }
            },
            {
                title: "% On-Time",
                subtitle: "Percentage of on-time clock-ins.",
                icon: "alarm",
                description: "This will be calculated through the expected clock in time vs. the time card. With custom leway given.",
                value: 75,
                nextLevelValue: 90,
                button: {
                    text: "Details",
                    info: "On-time percentage goes into calculating tiers. \n\n" +
                        "75% combined with 5 weeks worked will elevate an employee to Gold. \n\n" +
                        "85% combined with 9 weeks worked will elevate an employee to Platinum."
                }
            },
            {
                title: "Referrals Processed",
                subtitle: "Number of referrals that have been processed successfully.",
                icon: "assignment_ind",
                description: "A referral will be awarded when an employee has sent an email and referred employee has sent in an application.",
                value: 5,
                button: {
                    text: "Details",
                    info: "A referral will be awarded when an employee has sent an email and referred employee has sent in an application."
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/marketplace/marketplace.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/marketplace/marketplace.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-layout>\n    <nz-sider [nzWidth]=\"200\" style=\"background:#fff\">\n      <ul nz-menu [nzMode]=\"'inline'\" style=\"height:100%\">\n        <li nz-submenu>\n          <span title><i nz-icon type=\"user\"></i>subnav 1</span>\n          <ul>\n            <li nz-menu-item>option1</li>\n            <li nz-menu-item>option2</li>\n            <li nz-menu-item>option3</li>\n            <li nz-menu-item>option4</li>\n          </ul>\n        </li>\n        <li nz-submenu>\n          <span title><i nz-icon type=\"laptop\"></i>subnav 2</span>\n          <ul>\n            <li nz-menu-item>option5</li>\n            <li nz-menu-item>option6</li>\n            <li nz-menu-item>option7</li>\n            <li nz-menu-item>option8</li>\n          </ul>\n        </li>\n        <li nz-submenu>\n          <span title><i nz-icon type=\"notification\"></i>subnav 3</span>\n          <ul>\n            <li nz-menu-item>option9</li>\n            <li nz-menu-item>option10</li>\n            <li nz-menu-item>option11</li>\n            <li nz-menu-item>option12</li>\n          </ul>\n        </li>\n      </ul>\n    </nz-sider>\n    <nz-layout style=\"padding:0 24px 24px\">\n      <nz-breadcrumb style=\"margin:16px 0;\">\n        <nz-breadcrumb-item>Home</nz-breadcrumb-item>\n        <nz-breadcrumb-item>List</nz-breadcrumb-item>\n        <nz-breadcrumb-item>App</nz-breadcrumb-item>\n      </nz-breadcrumb>      \n        <nz-list [nzDataSource]=\"data\" [nzItemLayout]=\"'vertical'\" [nzRenderItem]=\"item\">\n          <ng-template #item let-item>\n            <div nz-card-grid [ngStyle]=\"gridStyle\">\n              <nz-card [nzCover]=\"productImage\">\n                <nz-card-meta [nzDescription]=\"item.title\"></nz-card-meta>\n              </nz-card>\n              <ng-template #productImage>\n                <img alt=\"product\"\n                  [src]=\"item.image\">\n              </ng-template>\n            </div>\n          </ng-template>\n          <ng-template #pagination>\n            <nz-pagination [nzPageIndex]=\"1\" [nzTotal]=\"{ s: 3, md: 5 }\" (nzPageIndexChange)=\"loadData($event)\">\n            </nz-pagination>\n          </ng-template>\n        </nz-list>\n    </nz-layout>\n  </nz-layout>\n</nz-layout>"

/***/ }),

/***/ "./src/app/pages/marketplace/marketplace.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/marketplace/marketplace.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcmtldHBsYWNlL21hcmtldHBsYWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/marketplace/marketplace.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/marketplace/marketplace.component.ts ***!
  \************************************************************/
/*! exports provided: MarketplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceComponent", function() { return MarketplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MarketplaceComponent = /** @class */ (function () {
    function MarketplaceComponent() {
        this.data = [];
    }
    MarketplaceComponent.prototype.ngOnInit = function () {
        this.data = marketItems;
    };
    MarketplaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marketplace',
            template: __webpack_require__(/*! ./marketplace.component.html */ "./src/app/pages/marketplace/marketplace.component.html"),
            styles: [__webpack_require__(/*! ./marketplace.component.scss */ "./src/app/pages/marketplace/marketplace.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MarketplaceComponent);
    return MarketplaceComponent;
}());

var marketItems = [
    {
        title: "Weekend Getaway - New York",
        image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
        description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    },
    {
        title: "Weekend Getaway - Minneapolis",
        image: 'http://exclaim.ca/images/dabbing.jpg',
        description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    },
    {
        title: "Weekend Getaway - Boston",
        image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
        description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    },
    {
        title: "$5 Amazon",
        image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
        description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    },
    {
        title: "$10 Amazon",
        image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
        description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    },
    {
        title: "$20 Amazon",
        image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
        description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergeiahanka/Documents/Projects/majorperk-employee/majorperk/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map