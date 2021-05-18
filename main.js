(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+NfI":
/*!*****************************************************************!*\
  !*** ./src/app/superadmin/navbarsuper/navbarsuper.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarsuperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarsuperComponent", function() { return NavbarsuperComponent; });
/* harmony import */ var _raw_loader_navbarsuper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbarsuper.component.html */ "vSkC");
/* harmony import */ var _navbarsuper_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbarsuper.component.css */ "ZB/w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebarsuperadmin_sidebarsuperadmin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebarsuperadmin/sidebarsuperadmin.component */ "YYri");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/servicereclamation.service */ "8J6P");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/editprofil.service */ "BXP1");
/* harmony import */ var src_app_models_information__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/information */ "NKLp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NavbarsuperComponent = /** @class */ (function () {
    function NavbarsuperComponent(profileSer, authservice, reclamationservice, modalService, location, element, router) {
        this.profileSer = profileSer;
        this.authservice = authservice;
        this.reclamationservice = reclamationservice;
        this.modalService = modalService;
        this.element = element;
        this.router = router;
        this.closeResult = '';
        this.location = location;
        this.information = new src_app_models_information__WEBPACK_IMPORTED_MODULE_10__["Information"]();
    }
    NavbarsuperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileSer.info().subscribe(function (data) {
            _this.information = data;
            console.log(data);
        });
        this.x = localStorage.getItem('user');
        this.listTitles = _sidebarsuperadmin_sidebarsuperadmin_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        this.reclamationservice.fin().subscribe(function (data) {
            _this.reclamations = data;
            console.log(data);
        });
    };
    NavbarsuperComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarsuperComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarsuperComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarsuperComponent.prototype.submit = function () {
        this.authservice.logout();
    };
    NavbarsuperComponent.ctorParameters = function () { return [
        { type: src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__["EditprofilService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"] },
        { type: src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_7__["ServicereclamationService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    NavbarsuperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbarsuper',
            template: _raw_loader_navbarsuper_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbarsuper_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__["EditprofilService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"], src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_7__["ServicereclamationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarsuperComponent);
    return NavbarsuperComponent;
}());



/***/ }),

/***/ "+xG9":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/reclamationall/reclamationall.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>reclamationall works!</p>\n");

/***/ }),

/***/ "/Y4w":
/*!************************************************************!*\
  !*** ./src/app/superadmin/colisall/colisall.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY29saXNhbGwvY29saXNhbGwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asus\Desktop\fastbox-front-main\fastbox-front\fastbox-front0\src\main.ts */"zUnb");


/***/ }),

/***/ "09hJ":
/*!*************************************************************!*\
  !*** ./src/app/authentification/authentification.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthentificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationModule", function() { return AuthentificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authentification_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentification-routing.module */ "Mnrm");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "4hVr");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "jVTl");
/* harmony import */ var _resetmdp_resetmdp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resetmdp/resetmdp.component */ "X3ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../guards/auth.guard */ "UTcu");
/* harmony import */ var _changpassword_changpassword_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./changpassword/changpassword.component */ "W/6i");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AuthentificationModule = /** @class */ (function () {
    function AuthentificationModule() {
    }
    AuthentificationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _resetmdp_resetmdp_component__WEBPACK_IMPORTED_MODULE_5__["ResetmdpComponent"], _changpassword_changpassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangpasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _authentification_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthentificationRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                // AppRoutingModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__["NgxWebstorageModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _resetmdp_resetmdp_component__WEBPACK_IMPORTED_MODULE_5__["ResetmdpComponent"], _changpassword_changpassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangpasswordComponent"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthServiceService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        })
    ], AuthentificationModule);
    return AuthentificationModule;
}());



/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "2zjr":
/*!***********************************!*\
  !*** ./src/app/client.service.ts ***!
  \***********************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.findAll = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/cli/clients", options);
    };
    ClientService.prototype.findAllclient = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/cli/client");
    };
    ClientService.prototype.getClients = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/cli");
    };
    ClientService.prototype.save = function (client) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        console.log("Bearer " + localStorage.getItem('jwt'));
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/cli/client/save', client, options);
    };
    ClientService.prototype.update = function (id, value) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        console.log("Bearer " + localStorage.getItem('jwt'));
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/cli/client/" + id, value, options);
    };
    ClientService.prototype.active = function (value) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/cli/active", value, options);
    };
    ClientService.prototype.deleteClient = function (clientId) {
        return this.http.delete(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/client/delete/" + clientId);
    };
    ClientService.prototype.cherche = function (id) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/cli/client/" + id);
    };
    ClientService.prototype.chercherparnom = function (nom) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/cli/cherchebyid/" + nom, options);
    };
    ClientService.prototype.chercherparnomsociete = function (nom) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/cli/cherchebynomsociete/" + nom);
    };
    ClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "3TnI":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "WSaj");
/* harmony import */ var _auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout.component.scss */ "FkQd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var html = document.getElementsByTagName("html")[0];
        html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "4AH9":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/colisall/colisall.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "4hVr":
/*!***********************************************************!*\
  !*** ./src/app/authentification/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "OqXP");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "KJ4/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(authServiceService, activatedRoute, router, toastr) {
        this.authServiceService = authServiceService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastr = toastr;
        this.im1 = "assets/login/img/aa.svg";
        this.loginRequestPayload = {
            usernameOrEmail: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.activatedRoute.queryParams
            .subscribe(function (params) {
            if (params.registered !== undefined && params.registered === 'true') {
                _this.toastr.success('Signup SuccessfulPlease Check your inbox for activation email '
                    + 'activate your account before you Login!');
                _this.registerSuccessMessage = 'Please Check your inbox for activation email '
                    + 'activate your account before you Login!';
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginRequestPayload.usernameOrEmail = this.loginForm.get('username').value;
        this.loginRequestPayload.password = this.loginForm.get('password').value;
        this.authServiceService.login(this.loginRequestPayload)
            .subscribe(function (data) {
            // alert(data);
            _this.isError = false;
            // alert(this.authServiceService.isUserAdmin());
            //this.router.navigateByUrl('dashboard');
            if (_this.authServiceService.isUserAdmin().includes('ROLE_ADMIN')) {
                _this.toastr.success('Login Successful');
                _this.router.navigate(['dashboard']);
            }
            else if (_this.authServiceService.isUserAdmin().includes('ROLE_SUPERADMIN')) {
                _this.toastr.success('Login Successful');
                _this.router.navigate(['dashboardsuperadmin']);
            }
            else {
                //console.log(this.authServiceService.isUserAdmin().includes('ROLE_ADMIN'));
                _this.toastr.success('Login Successful');
                _this.router.navigate(['dashboarduser']);
            }
        }, function (error) {
            _this.toastr.error('try again', 'erreur', { timeOut: 10000, progressBar: false });
            _this.isError = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "4nJ2":
/*!****************************************************************************!*\
  !*** ./src/app/authentification/changpassword/changpassword.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vY2hhbmdwYXNzd29yZC9jaGFuZ3Bhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "6t6N":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/clientall/clientall.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste client</h3>\n          </div>\n          \n         <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n              <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\" >\n                    \n                    <span class=\"input-group-text btn-inner--icon\" type=\"Submit\" (click)= \"onChercher(f.value)\"><i class=\"fas fa-search\"></i></span>\n                  </div>\n                  <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                  (blur)=\"focus = false\" name=\"keyword\" ngModel>\n                </div>\n              </div>\n            </form>\n       <ul>         \n           \n            \n  \n           \n            \n            \n            <hr>\n  \n          </ul>\n  \n        <div class=\"row mt-5\">\n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <th scope=\"col\"> codeClient</th>\n                <th scope=\"col\"> logo</th>\n                <th scope=\"col\">nomSociete</th>\n                <th scope=\"col\">AdresseEmail</th>\n                <th scope=\"col\"> AdressePhysique</th>\n                <th scope=\"col\"> immatriculationFiscale</th>\n  \n               \n              </thead>\n              <tbody>\n                \n                  <tr *ngFor=\"let client of clients | paginate: {itemsPerPage: 5, currentPage: p, totalItems: clients.length}\">\n                    <td  scope=\"row\">{{ client.codeClient }}</td>\n  \n  \n                    <td> <img  name=\"image\" [src]=\"'data:image/jpeg;base64,' + client.image\" width=\"100px\" height=\"100px\"></td>\n                    <td  scope=\"row\"> {{ client.nomsociete }}</td>\n                    <td  scope=\"row\"><a href=\"mailto:{{ client.AdresseEmail }}\">{{ client.adresseemail }}</a></td>\n                    <td scope=\"row\" >{{ client.adressephysique }}</td>\n                    <td scope=\"row\">{{ client.immatriculation }}</td>\n  </tr>\n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n          </div>\n            \n            \n            <!--editer-->\n           \n            <!--fin editer-->\n  <!-- \n           \n            \n          </div>\n            \n            \n  \n            </table>\n  \n            <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                      \n              </nav></ul>\n               -->\n            \n          </div>\n        </div> \n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "8J6P":
/*!********************************************************!*\
  !*** ./src/app/services/servicereclamation.service.ts ***!
  \********************************************************/
/*! exports provided: ServicereclamationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicereclamationService", function() { return ServicereclamationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicereclamationService = /** @class */ (function () {
    function ServicereclamationService(http) {
        this.http = http;
        // environment.BACKEND_URL = 'http://5.196.7.152:8080/org-sid/reclamation';
        // environment.BACKEND_URL = /reclamation'http://localhost:8080/reclamation';
    }
    ServicereclamationService.prototype.fin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/reclamation/all", options);
    };
    ServicereclamationService.prototype.Save = function (recl) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/reclamation/save', recl, options);
    };
    ServicereclamationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    ServicereclamationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ServicereclamationService);
    return ServicereclamationService;
}());



/***/ }),

/***/ "9HXK":
/*!*******************************************!*\
  !*** ./src/app/services/colis.service.ts ***!
  \*******************************************/
/*! exports provided: ColisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColisService", function() { return ColisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColisService = /** @class */ (function () {
    function ColisService(http) {
        this.http = http;
    }
    //'Content-Type': 'application/pdf',
    ColisService.prototype.imprimer = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/pdf',
            'Accept': 'application/pdf',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        // let options = { headers: headers,  responseType: 'blob'  };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/api/pdflivraison/" + id, { headers: headers, responseType: 'blob' });
    };
    ColisService.prototype.findAll = function (page, size) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/" + page + "/" + size);
    };
    ColisService.prototype.fin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/colisall", options);
    };
    ColisService.prototype.soldetotaladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/montantadminall", options);
    };
    ColisService.prototype.colislivrepaye = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/cherchelivrepaye", options);
    };
    ColisService.prototype.soldeADMIN = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/montantadmin", options);
    };
    ColisService.prototype.solde = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/montantuser", options);
    };
    ColisService.prototype.super = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/colisallsuper");
    };
    ColisService.prototype.finallbyadmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/colisalladmin", options);
    };
    ColisService.prototype.QRcode = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'image/png'
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/api/qr-code/" + id, options);
    };
    ColisService.prototype.find = function (nom) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/" + nom);
    };
    ColisService.prototype.Save = function (colis) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/save', colis, options);
    };
    ColisService.prototype.changeetat = function (etat, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/action/" + id, JSON.stringify(etat), options);
    };
    ColisService.prototype.update = function (id, colis) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/update/" + id, colis, options);
    };
    ColisService.prototype.delete = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/delete/" + id, options);
    };
    ColisService.prototype.cherchepariduser = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/cherchepariduser/" + id, options);
    };
    ColisService.prototype.chercheuserprint = function (id) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/chercheclientdecolisparid/" + id);
    };
    ColisService.prototype.chercheparidadmin = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/chercheparidadmin/" + id, options);
    };
    ColisService.prototype.filtrer = function (f) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/filtre", f, options);
    };
    ColisService.prototype.filtreruser = function (f) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/filtreuser", f, options);
    };
    ColisService.prototype.cherche = function (nom) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/cherche/" + nom, options);
    };
    ColisService.prototype.Suivrecolis = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/colis/suivrecolis", id, options);
    };
    ColisService.prototype.affectioncolis = function (aff) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/admin/affectationcolis", aff, options);
    };
    ColisService.prototype.nbtotal = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbcolisfacture', options);
    };
    ColisService.prototype.montant = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/montantfacture', options);
    };
    ColisService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ColisService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColisService);
    return ColisService;
}());



/***/ }),

/***/ "9ZP9":
/*!*********************************************************!*\
  !*** ./src/app/user/userlayout/userlayout.component.ts ***!
  \*********************************************************/
/*! exports provided: UserlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlayoutComponent", function() { return UserlayoutComponent; });
/* harmony import */ var _raw_loader_userlayout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./userlayout.component.html */ "mBxo");
/* harmony import */ var _userlayout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userlayout.component.css */ "naRA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserlayoutComponent = /** @class */ (function () {
    function UserlayoutComponent() {
    }
    UserlayoutComponent.prototype.ngOnInit = function () {
    };
    UserlayoutComponent.ctorParameters = function () { return []; };
    UserlayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userlayout',
            template: _raw_loader_userlayout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_userlayout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UserlayoutComponent);
    return UserlayoutComponent;
}());



/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<app-sidebar></app-sidebar> \n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbar></app-navbar>\n  <!-- Pages -->\n  <router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footer></app-footer>\n  </div>\n</div>\n");

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
var environment = {
    production: false,
    BACKEND_URL: 'https://localhost:8443'
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

/***/ "BXP1":
/*!************************************************!*\
  !*** ./src/app/services/editprofil.service.ts ***!
  \************************************************/
/*! exports provided: EditprofilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilService", function() { return EditprofilService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditprofilService = /** @class */ (function () {
    function EditprofilService(http) {
        this.http = http;
    }
    EditprofilService.prototype.editProfile = function (p) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
            })
        };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/user/editprofil", p, httpOptions);
    };
    EditprofilService.prototype.info = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
            })
        };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/user/user", httpOptions);
    };
    EditprofilService.prototype.editpass = function (mod) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
            })
        };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/user/passwordchange", mod, httpOptions);
    };
    EditprofilService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    EditprofilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], EditprofilService);
    return EditprofilService;
}());



/***/ }),

/***/ "FkQd":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Jbkl":
/*!**********************************************************************************!*\
  !*** ./src/app/superadmin/dashboardsuperadmin/dashboardsuperadmin.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vZGFzaGJvYXJkc3VwZXJhZG1pbi9kYXNoYm9hcmRzdXBlcmFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Jtiu":
/*!************************************************************************!*\
  !*** ./src/app/superadmin/reclamationall/reclamationall.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vcmVjbGFtYXRpb25hbGwvcmVjbGFtYXRpb25hbGwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "KJ4/":
/*!************************************************************!*\
  !*** ./src/app/authentification/login/login.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\" >\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n       aria-controls=\"sidenav-collapse-main\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n   \n    <!-- User -->\n    \n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n      \n        <br>\n        <br>\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <img src=\"http://5.196.7.152:8080/org-sid/assets/img/brand/logo.png\">\n          <div class=\"col-6 collapse-brand\">\n            <a  routerLinkActive=\"active\" [routerLink]=\"['']\">\n              <img src=\"../assets/img/brand/logo.png\"  width=\"200\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <ng-container>\n      <ul class=\"navbar-nav\"   *ngIf=\"isLoggedin && isUserInRole('ROLE_ADMIN') else super\" >\n          <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n              <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\n                  <i class=\"ni {{menuItem.icon}}\"></i>\n                  {{menuItem.title}}\n              </a>\n          </li>\n      </ul>\n    </ng-container>\n    \n\n\n     <ng-template #super >\n      <ng-container *ngIf=\"isLoggedin && isUserInRole('ROLE_SUPERADMIN') else super\">\n      <ul>\n        <li>\n     \n            <a routerLinkActive=\"active\" [routerLink]=\"['/user']\" class=\"nav-link\"></a>\n        </li>\n      </ul>\n    </ng-container>\n    </ng-template> \n\n    <ng-template #user>\n      <ul>\n        <li>\n     \n            <a routerLinkActive=\"active\" [routerLink]=\"['/user']\" class=\"nav-link\"></a>\n        </li>\n      </ul>\n    </ng-template> \n          <!-- Divider -->\n    \n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "yZN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "Ls9r":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "MSOw":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/superadminlayout/superadminlayout.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<app-sidebarsuperadmin></app-sidebarsuperadmin>\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbarsuper></app-navbarsuper>\n  <!-- Pages -->\n  <router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footerbarsuper></app-footerbarsuper>\n  </div>\n</div>\n");

/***/ }),

/***/ "Mnrm":
/*!*********************************************************************!*\
  !*** ./src/app/authentification/authentification-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AuthentificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationRoutingModule", function() { return AuthentificationRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _changpassword_changpassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changpassword/changpassword.component */ "W/6i");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "4hVr");
/* harmony import */ var _resetmdp_resetmdp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetmdp/resetmdp.component */ "X3ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "jVTl");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: "llogin", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "ssignup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: "reset", component: _resetmdp_resetmdp_component__WEBPACK_IMPORTED_MODULE_6__["ResetmdpComponent"] },
    { path: "changepassword", component: _changpassword_changpassword_component__WEBPACK_IMPORTED_MODULE_4__["ChangpasswordComponent"] }
];
var AuthentificationRoutingModule = /** @class */ (function () {
    function AuthentificationRoutingModule() {
    }
    AuthentificationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AuthentificationRoutingModule);
    return AuthentificationRoutingModule;
}());



/***/ }),

/***/ "NKLp":
/*!***************************************!*\
  !*** ./src/app/models/information.ts ***!
  \***************************************/
/*! exports provided: Information */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Information", function() { return Information; });
var Information = /** @class */ (function () {
    function Information() {
    }
    return Information;
}());



/***/ }),

/***/ "OceK":
/*!****************************************************************!*\
  !*** ./src/app/superadmin/livreurall/livreurall.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vbGl2cmV1cmFsbC9saXZyZXVyYWxsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "OqXP":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/login/login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-3\"><small></small></div>\n          <div class=\" text-center\">\n            \n            <img src=\"../assets/img/brand/logo.png\" width=\"200\">\n           \n           \n           \n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>sign in with credentials</small>\n          </div>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" action=\"#\" class=\"sign-in-form\">\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input type=\"text\" placeholder=\"Username Or Email\" id=\"user_name\" class=\"form-control\" [formControlName]=\"'username'\" name=\"user_name\" required\n                  autofocus/>\n                  <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">\n           \n                   </span>  \n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                 <input type=\"password\" placeholder=\"Password\"  id=\"password\" class=\"form-control\" \n                 [formControlName]=\"'password'\" name=\"password\" required/>\n                  <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\n        \n                  </span> \n              </div>\n            </div>\n            \n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-primary my-4\">Sign in</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6\">\n           <a routerLink =\"/reset\" class=\"text-light \"><small class=\"text-danger\">Forgot password?</small></a>\n        </div>\n        <div class=\"col-6 text-right\">\n           <a a routerLink =\"/ssignup\" class=\"text-light\"><small class=\"text-danger\">Create new account</small></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent.ctorParameters = function () { return []; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "Pn1I":
/*!******************************************!*\
  !*** ./src/app/models/changepassword.ts ***!
  \******************************************/
/*! exports provided: Changepassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Changepassword", function() { return Changepassword; });
var Changepassword = /** @class */ (function () {
    function Changepassword() {
    }
    return Changepassword;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n  <div class=\"container-fluid\">\n    <!-- Brand -->\n    <a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>\n    <!-- Form -->\n    <!-- <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex mr-lg-auto\">\n      <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n        <div class=\"input-group input-group-alternative\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n          </div>\n          <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n          (blur)=\"focus = false\">\n        </div>\n      </div>\n    </form> -->\n    <!-- User -->\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm \">\n              <img alt=\"Image placeholder\" [src]=\"'data:image/jpeg;base64,' + information.image\">\n            </span>\n\n            <div class=\"media-body ml-2 d-none d-lg-block\">\n              <span class=\"mb-0 text-sm  font-weight-bold\">{{x}}</span>\n            </div>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/userprofil']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n\n\n\n\n\n\n          <a  routerLinkActive=\"active\" [routerLink]=\"['/notification']\" class=\"dropdown-item\">\n            <i class=\"fas fa-bell-slash\"></i>\n            <span>reclamation</span>\n          </a>\n        \n\n\n\n         \n      \n        <!--   <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a> -->\n          <div class=\"dropdown-divider\"></div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/llogin']\" class=\"dropdown-item\" (click)=\"submit()\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "SdcY":
/*!*********************************************************************************!*\
  !*** ./src/app/superadmin/dashboardsuperadmin/dashboardsuperadmin.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DashboardsuperadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsuperadminComponent", function() { return DashboardsuperadminComponent; });
/* harmony import */ var _raw_loader_dashboardsuperadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboardsuperadmin.component.html */ "cqCT");
/* harmony import */ var _dashboardsuperadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboardsuperadmin.component.css */ "Jbkl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_servicedashboarduser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/servicedashboarduser.service */ "uClj");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/* import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

 */
var DashboardsuperadminComponent = /** @class */ (function () {
    function DashboardsuperadminComponent(route, router, dashboardservice) {
        this.route = route;
        this.router = router;
        this.dashboardservice = dashboardservice;
    }
    DashboardsuperadminComponent.prototype.ngOnInit = function () {
        /*
           this.datasets = [
             [0, 20, 10, 30, 15, 40, 20, 60, 60],
             [0, 20, 5, 25, 10, 30, 15, 40, 40]
           ];
           this.data = this.datasets[0];
       
       
           var chartOrders = document.getElementById('chart-orders');
       
           parseOptions(Chart, chartOptions());
       
       
           var ordersChart = new Chart(chartOrders, {
             type: 'bar',
             options: chartExample2.options,
             data: chartExample2.data
           });
       
           var chartSales = document.getElementById('chart-sales');
       
           this.salesChart = new Chart(chartSales, {
                   type: 'line',
                   options: chartExample1.options,
                   data: chartExample1.data
               });
        */
        var _this = this;
        this.dashboardservice.nbcolisenattende().subscribe(function (data) {
            _this.x = data;
            console.log(_this.x);
        });
        this.dashboardservice.nbcolisaudepot().subscribe(function (data) {
            _this.depot = data;
            console.log(_this.depot);
        });
        this.dashboardservice.nbcolisencours().subscribe(function (data) {
            _this.encours = data;
            console.log(_this.encours);
        });
        this.dashboardservice.nbcolislivre().subscribe(function (data) {
            _this.livre = data;
            console.log(_this.livre);
        });
        this.dashboardservice.nbcolisrtndepot().subscribe(function (data) {
            _this.rtndepot = data;
            console.log(_this.rtndepot);
        });
        this.dashboardservice.nbcolisretourrecu().subscribe(function (data) {
            _this.recuretour = data;
            console.log(_this.recuretour);
        });
        this.dashboardservice.nbcolisretourdef().
            subscribe(function (data) {
            _this.recudef = data;
            console.log(_this.recudef);
        });
        this.dashboardservice.nbcolisretourexp().
            subscribe(function (data) {
            _this.recuexp = data;
            console.log(_this.recuexp);
        });
    };
    DashboardsuperadminComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_servicedashboarduser_service__WEBPACK_IMPORTED_MODULE_4__["ServicedashboarduserService"] }
    ]; };
    DashboardsuperadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboardsuperadmin',
            template: _raw_loader_dashboardsuperadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboardsuperadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_servicedashboarduser_service__WEBPACK_IMPORTED_MODULE_4__["ServicedashboarduserService"]])
    ], DashboardsuperadminComponent);
    return DashboardsuperadminComponent;
}());



/***/ }),

/***/ "Su96":
/*!************************************************************************!*\
  !*** ./src/app/superadmin/suivrecolisall/suivrecolisall.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vc3VpdnJlY29saXNhbGwvc3VpdnJlY29saXNhbGwuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FastBox';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T2Ka":
/*!*************************************************!*\
  !*** ./src/app/superadmin/superadmin.module.ts ***!
  \*************************************************/
/*! exports provided: SuperadminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperadminModule", function() { return SuperadminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _superadmin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./superadmin-routing.module */ "hmHk");
/* harmony import */ var _superadminlayout_superadminlayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superadminlayout/superadminlayout.component */ "XqG9");
/* harmony import */ var _dashboardsuperadmin_dashboardsuperadmin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardsuperadmin/dashboardsuperadmin.component */ "SdcY");
/* harmony import */ var _livreurall_livreurall_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./livreurall/livreurall.component */ "tyrt");
/* harmony import */ var _colisall_colisall_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colisall/colisall.component */ "p1jh");
/* harmony import */ var _adminall_adminall_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminall/adminall.component */ "dyOy");
/* harmony import */ var _clientall_clientall_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clientall/clientall.component */ "Ul6d");
/* harmony import */ var _suivrecolisall_suivrecolisall_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./suivrecolisall/suivrecolisall.component */ "h2rU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "Xm0J");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _navbarsuper_navbarsuper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbarsuper/navbarsuper.component */ "+NfI");
/* harmony import */ var _footerbarsuper_footerbarsuper_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footerbarsuper/footerbarsuper.component */ "rXzi");
/* harmony import */ var _allcolissuper_allcolissuper_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./allcolissuper/allcolissuper.component */ "wonx");
/* harmony import */ var _sidebarsuperadmin_sidebarsuperadmin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebarsuperadmin/sidebarsuperadmin.component */ "YYri");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var SuperadminModule = /** @class */ (function () {
    function SuperadminModule() {
    }
    SuperadminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_superadminlayout_superadminlayout_component__WEBPACK_IMPORTED_MODULE_3__["SuperadminlayoutComponent"], _sidebarsuperadmin_sidebarsuperadmin_component__WEBPACK_IMPORTED_MODULE_19__["SidebarsuperadminComponent"], _dashboardsuperadmin_dashboardsuperadmin_component__WEBPACK_IMPORTED_MODULE_4__["DashboardsuperadminComponent"], _livreurall_livreurall_component__WEBPACK_IMPORTED_MODULE_5__["LivreurallComponent"], _colisall_colisall_component__WEBPACK_IMPORTED_MODULE_6__["ColisallComponent"], _adminall_adminall_component__WEBPACK_IMPORTED_MODULE_7__["AdminallComponent"], _clientall_clientall_component__WEBPACK_IMPORTED_MODULE_8__["ClientallComponent"], _suivrecolisall_suivrecolisall_component__WEBPACK_IMPORTED_MODULE_9__["SuivrecolisallComponent"], _navbarsuper_navbarsuper_component__WEBPACK_IMPORTED_MODULE_16__["NavbarsuperComponent"], _footerbarsuper_footerbarsuper_component__WEBPACK_IMPORTED_MODULE_17__["FooterbarsuperComponent"], _allcolissuper_allcolissuper_component__WEBPACK_IMPORTED_MODULE_18__["AllcolissuperComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _superadmin_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuperadminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                //BrowserModule,
                //  BrowserAnimationsModule,
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_11__["WindowModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__["ButtonsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__["ClipboardModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
            ],
            bootstrap: [_livreurall_livreurall_component__WEBPACK_IMPORTED_MODULE_5__["LivreurallComponent"], _clientall_clientall_component__WEBPACK_IMPORTED_MODULE_8__["ClientallComponent"]],
        })
    ], SuperadminModule);
    return SuperadminModule;
}());



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, httpauth) {
        this.router = router;
        this.httpauth = httpauth;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.httpauth.isLoggedIn() == false) {
            this.router.navigate(["/llogin"]);
            return this.httpauth.isLoggedIn();
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "UVNs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/resetmdp/resetmdp.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\">To fastbox</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <!-- Table -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-8\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-4\"><small></small></div>\n          <div class=\"text-center\">\n            <img src=\"../assets/img/brand/logo.png\"  width=\"200\">\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small> Entret votre Email si vouz oubliez votre password</small>\n          </div>\n          <form #resetmdpForm=\"ngForm\" (ngSubmit)=\"Onreset()\" action=\"#\" class=\"sign-in-form\">\n           \n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input type=\"text\"  class=\"form-control\" placeholder=\"email\" id=\"email\"  [(ngModel)]=\"reset.email\" name=\"email\" required\n               autofocus/>\n                \n              </div>\n            </div>\n            \n\n\n  \n            <div class=\"text-muted font-italic\"><small> <span class=\"text-success font-weight-700\"></span></small></div>\n            <div class=\"row my-4\">\n              <div class=\"col-12\">\n                \n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\" value=\"envoyer\" class=\"btn btn-primary mt-4\">Envoyer</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n");

/***/ }),

/***/ "Ul6d":
/*!*************************************************************!*\
  !*** ./src/app/superadmin/clientall/clientall.component.ts ***!
  \*************************************************************/
/*! exports provided: ClientallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientallComponent", function() { return ClientallComponent; });
/* harmony import */ var _raw_loader_clientall_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./clientall.component.html */ "6t6N");
/* harmony import */ var _clientall_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientall.component.css */ "tAID");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/client.service */ "2zjr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientallComponent = /** @class */ (function () {
    function ClientallComponent(clientService) {
        this.clientService = clientService;
        this.closeResult = '';
    }
    ClientallComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ClientallComponent.prototype.pageChanged = function (event) {
        this.p = event;
    };
    ClientallComponent.prototype.get = function () {
        var _this = this;
        this.clientService.findAllclient().subscribe(function (data) {
            _this.clients = data;
            console.log(data);
        });
    };
    ClientallComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.clientService.chercherparnom(value.keyword).subscribe(function (data) { _this.clients = data; });
    };
    ClientallComponent.ctorParameters = function () { return [
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }
    ]; };
    ClientallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-clientall',
            template: _raw_loader_clientall_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_clientall_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], ClientallComponent);
    return ClientallComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "W/6i":
/*!***************************************************************************!*\
  !*** ./src/app/authentification/changpassword/changpassword.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChangpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangpasswordComponent", function() { return ChangpasswordComponent; });
/* harmony import */ var _raw_loader_changpassword_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./changpassword.component.html */ "adGh");
/* harmony import */ var _changpassword_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changpassword.component.css */ "4nJ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_changepassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/changepassword */ "Pn1I");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangpasswordComponent = /** @class */ (function () {
    function ChangpasswordComponent(authServiceService, route, router) {
        this.authServiceService = authServiceService;
        this.route = route;
        this.router = router;
        this.reset = new src_app_models_changepassword__WEBPACK_IMPORTED_MODULE_4__["Changepassword"]();
    }
    ChangpasswordComponent.prototype.ngOnInit = function () {
    };
    ChangpasswordComponent.prototype.Onchange = function () {
        this.authServiceService.changepass(this.reset).subscribe();
    };
    ChangpasswordComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ChangpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-changpassword',
            template: _raw_loader_changpassword_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_changpassword_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChangpasswordComponent);
    return ChangpasswordComponent;
}());



/***/ }),

/***/ "WSaj":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\">\n    <div class=\"container px-4\">\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n        <img src=\"assets/img/brand/argon-white.png\" />\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n         aria-controls=\"sidenav-collapse-main\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n                <img src=\"assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\" >\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Navbar items -->\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <i class=\"ni ni-planet\"></i>\n              <span class=\"nav-link-inner--text\">Dashboard</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/ssignup']\">\n              <i class=\"ni ni-circle-08\"></i>\n              <span class=\"nav-link-inner--text\">Register</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\n              <i class=\"ni ni-key-25\"></i>\n              <span class=\"nav-link-inner--text\">Login</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\">\n              <i class=\"ni ni-single-02\"></i>\n              <span class=\"nav-link-inner--text\">Profile</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"http://blog.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"row align-items-center justify-content-xl-between\">\n    <div class=\"col-xl-6\">\n      <div class=\"copyright text-center text-xl-left text-muted\">\n        &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">ARDEN</a>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n     \n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "X3ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentification/resetmdp/resetmdp.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetmdpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetmdpComponent", function() { return ResetmdpComponent; });
/* harmony import */ var _raw_loader_resetmdp_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./resetmdp.component.html */ "UVNs");
/* harmony import */ var _resetmdp_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetmdp.component.css */ "cYQ4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_emailoublie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/emailoublie */ "roVY");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetmdpComponent = /** @class */ (function () {
    function ResetmdpComponent(toastr, authServiceService, route, router) {
        this.toastr = toastr;
        this.authServiceService = authServiceService;
        this.route = route;
        this.router = router;
        this.im1 = "assets/login/img/aa.svg";
        this.reset = new src_app_models_emailoublie__WEBPACK_IMPORTED_MODULE_6__["Emailoublie"];
    }
    ResetmdpComponent.prototype.ngOnInit = function () {
    };
    ResetmdpComponent.prototype.Onreset = function () {
        var _this = this;
        this.authServiceService.resetpass(this.reset).subscribe(function (data) {
        }, function (error) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            _this.toastr.success('check your mail');
            _this.router.navigate(['/llogin']);
        });
    };
    ResetmdpComponent.prototype.gotolivreurlist = function () { this.router.navigate(['/reset']); };
    ResetmdpComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ResetmdpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-resetmdp',
            template: _raw_loader_resetmdp_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_resetmdp_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetmdpComponent);
    return ResetmdpComponent;
}());



/***/ }),

/***/ "XqG9":
/*!***************************************************************************!*\
  !*** ./src/app/superadmin/superadminlayout/superadminlayout.component.ts ***!
  \***************************************************************************/
/*! exports provided: SuperadminlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperadminlayoutComponent", function() { return SuperadminlayoutComponent; });
/* harmony import */ var _raw_loader_superadminlayout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./superadminlayout.component.html */ "MSOw");
/* harmony import */ var _superadminlayout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superadminlayout.component.css */ "f2qV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuperadminlayoutComponent = /** @class */ (function () {
    function SuperadminlayoutComponent() {
    }
    SuperadminlayoutComponent.prototype.ngOnInit = function () {
    };
    SuperadminlayoutComponent.ctorParameters = function () { return []; };
    SuperadminlayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-superadminlayout',
            template: _raw_loader_superadminlayout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_superadminlayout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SuperadminlayoutComponent);
    return SuperadminlayoutComponent;
}());



/***/ }),

/***/ "YEzt":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/allcolissuper/allcolissuper.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  type=\"Submit\" (click)=\"onChercher(f.value)\" ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n  \n  <br>\n           \n          <ul  >\n            \n                \n  \n  \n        </ul>\n \n  \n  \n  \n  \n  \n  \n                \n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">QRcode</th>\n                  <th scope=\"col\">Codecolis</th>\n                  <th scope=\"col\">prenom et prenom </th>\n                 \n                  <th scope=\"col\"> numtel</th>\n  \n                   \n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">adressemail</th>\n                 \n                  <th scope=\"col\">codepostal</th>\n                  <th scope=\"col\">adressepickup</th>\n                  <th scope=\"col\"> gouvernorat</th>\n  \n                  <th scope=\"col\">designationproduit</th>\n                  <th scope=\"col\">remarque</th>\n                  \n                 <th scope=\"col\"> Montant a payer</th>\n                \n                 <th scope=\"col\"> etat colis</th>\n                \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers | paginate: config \">\n             \n                  <td>\n                  \n                  <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                 <img src=\"http://localhost:8080/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n                 \n                \n                 </td>\n \n                \n                \n      \n                    \n                  \n                  <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                  <td>{{ colis.numtel }}</td>\n            \n                  <td>{{ colis.adresse}}</td>\n                  <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                  <td>{{ colis.codepostal}}</td>\n                  <td>{{ colis.adressepickup}}</td>\n                  <td>{{ colis.gouvernorat}}</td>\n                \n                  <td>{{ colis.designationproduits}}</td>\n  \n                  <td>{{colis.remarque}}</td>\n                \n                  <td>{{colis.montant}} TND</td>\n                \n                \n               <td >\n                   <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                    <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                      <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                    \n                    </p>\n \n                   </div>\n                  \n               </td>\n\n\n              \n             <!-- <ul>          -->\n                    \n                    \n                   <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </button> -->\n\n\n\n              \n              </tbody>\n            </table>\n           <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "YYri":
/*!*****************************************************************************!*\
  !*** ./src/app/superadmin/sidebarsuperadmin/sidebarsuperadmin.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ROUTES, SidebarsuperadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarsuperadminComponent", function() { return SidebarsuperadminComponent; });
/* harmony import */ var _raw_loader_sidebarsuperadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebarsuperadmin.component.html */ "v23k");
/* harmony import */ var _sidebarsuperadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarsuperadmin.component.css */ "cMYS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ROUTES = [
    // { path: '/user', title: 'user',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/dashboardsuperadmin', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/adminall', title: 'admin', icon: 'ni-circle-08 text-pink', class: '' },
    { path: '/livreurall', title: 'livreur', icon: 'fas fa-people-carry text-red', class: '' },
    { path: '/clientall', title: 'client', icon: 'fas fa-user text-blue', class: '' },
    { path: '/colisallsuper', title: 'colis', icon: 'fas fa-box-open text-yellow', class: '' },
    { path: '/suivrecolisall', title: 'suivrecolis', icon: 'fas fa-box text-pink', class: '' },
];
var SidebarsuperadminComponent = /** @class */ (function () {
    function SidebarsuperadminComponent(router, authservice) {
        this.router = router;
        this.authservice = authservice;
        this.isCollapsed = true;
    }
    SidebarsuperadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedin = this.authservice.isLoggedIn();
        this.authservice.loginSuject.asObservable().subscribe(function () {
            _this.isLoggedin = _this.authservice.isLoggedIn();
            _this.username = _this.authservice.getUserName();
        });
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarsuperadminComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }
    ]; };
    SidebarsuperadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebarsuperadmin',
            template: _raw_loader_sidebarsuperadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebarsuperadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]])
    ], SidebarsuperadminComponent);
    return SidebarsuperadminComponent;
}());



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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentification/authentification.module */ "09hJ");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "Xm0J");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-flash-messages */ "sriv");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _superadmin_superadmin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./superadmin/superadmin.module */ "T2Ka");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "ZwAT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import {NgxPaginationModule} from 'ngx-pagination';
//import { ChangepasswordComponent } from './models/changepassword/changepassword.component';



///import { UserModule } from './user/user.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                // UserModule,
                _superadmin_superadmin_module__WEBPACK_IMPORTED_MODULE_14__["SuperadminModule"],
                _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_11__["AuthentificationModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesModule"].forRoot(),
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_16__["CalendarModule"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_16__["DateInputsModule"]
                // NgxPaginationModule
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
                _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZB/w":
/*!******************************************************************!*\
  !*** ./src/app/superadmin/navbarsuper/navbarsuper.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vbmF2YmFyc3VwZXIvbmF2YmFyc3VwZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "adGh":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/changpassword/changpassword.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"forms-container\">\n      <div class=\"signin-signup\">\n        <form #resetmdpForm=\"ngForm\" (ngSubmit)=\"Onchange()\" action=\"#\" class=\"sign-in-form\">\n          <h2 class=\"title\"></h2>\n          <div class=\"input-field\">\n            \n            <input type=\"text\" placeholder=\"email\" id=\"email\"  [(ngModel)]=\"reset.email\" name=\"email\" required\n            autofocus/></div>\n            <div class=\"input-field\">\n            <input type=\"text\" placeholder=\"password\" id=\"password\"  [(ngModel)]=\"reset.password\" name=\"password\" required\n            autofocus/></div>\n            <div class=\"input-field\">\n            <input type=\"text\" placeholder=\"repassword\" id=\"repassword\"  [(ngModel)]=\"reset.repassword\" name=\"repassword\" required\n            autofocus/></div>\n            <input type=\"submit\" value=\"envoyer\" class=\"btn\" />\n         </form>   \n        </div>  \n        </div>\n        </div>\n  \n    <div class=\"panels-container\">\n      <div class=\" left-panel\">\n        <div class=\"content\">\n          \n         \n      \n          <img [src]=im1 class=\"image\" alt=\"\" />\n        </div>\n        </div>\n      </div>\n");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentification/login/login.component */ "4hVr");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _user_userlayout_userlayout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/userlayout/userlayout.component */ "9ZP9");
/* harmony import */ var _superadmin_superadminlayout_superadminlayout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./superadmin/superadminlayout/superadminlayout.component */ "XqG9");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: 'llogin',
        pathMatch: 'full',
    },
    {
        path: 'llogin',
        component: _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: './authentification/authentification.module#AuthentificationModule'
            }
        ],
    },
    {
        path: '',
        component: _user_userlayout_userlayout_component__WEBPACK_IMPORTED_MODULE_8__["UserlayoutComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.all(/*! import() | user-user-module */[__webpack_require__.e("default~layouts-admin-layout-admin-layout-module~user-user-module"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(function (m) { return m.UserModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _superadmin_superadminlayout_superadminlayout_component__WEBPACK_IMPORTED_MODULE_9__["SuperadminlayoutComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./superadmin/superadmin.module */ "T2Ka")).then(function (m) { return m.SuperadminModule; }); }
                //loadChildren: './superadmin/superadmin.module#SuperadminModule'
            }
        ]
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.all(/*! import() | layouts-admin-layout-admin-layout-module */[__webpack_require__.e("default~layouts-admin-layout-admin-layout-module~user-user-module"), __webpack_require__.e("layouts-admin-layout-admin-layout-module")]).then(__webpack_require__.bind(null, /*! ./layouts/admin-layout/admin-layout.module */ "IqXj")).then(function (m) { return m.AdminLayoutModule; }); }
            }
        ],
    },
    {
        path: 'lay',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            {
                path: 'hj',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true, onSameUrlNavigation: 'reload'
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "cGkK":
/*!************************************************!*\
  !*** ./src/app/services/superadmin.service.ts ***!
  \************************************************/
/*! exports provided: SuperadminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperadminService", function() { return SuperadminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuperadminService = /** @class */ (function () {
    function SuperadminService(http) {
        this.http = http;
        //environment.BACKEND_URL = "http://5.196.7.152:8080/org-sid/";
        // environment.BACKEND_URL = /"http://localhost:8080/";
    }
    SuperadminService.prototype.alladmin = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/user/adminn");
    };
    SuperadminService.prototype.active = function (user) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/user/active", user);
    };
    SuperadminService.prototype.cherche = function (nom) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/user/chercher/" + nom);
    };
    SuperadminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    SuperadminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], SuperadminService);
    return SuperadminService;
}());



/***/ }),

/***/ "cMYS":
/*!******************************************************************************!*\
  !*** ./src/app/superadmin/sidebarsuperadmin/sidebarsuperadmin.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vc2lkZWJhcnN1cGVyYWRtaW4vc2lkZWJhcnN1cGVyYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "cYQ4":
/*!******************************************************************!*\
  !*** ./src/app/authentification/resetmdp/resetmdp.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vcmVzZXRtZHAvcmVzZXRtZHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "cqCT":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/dashboardsuperadmin/dashboardsuperadmin.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      \n        <div class=\"row\">\n          <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-stats mb-4 mb-xl-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h5 class=\"card-title text-uppercase text-muted mb-0\">colis En attende</h5>\n                    <span class=\"h2 font-weight-bold mb-0\">{{x}}</span>\n                  </div>\n                  <div class=\"col-auto\">\n                    <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n                      <i class=\"fas fa-chart-bar\"></i>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mt-3 mb-0 text-muted text-sm\">\n                  <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/colisenattend']\"> voir</a></span>\n                  <span class=\"text-nowrap\">tous liste</span>\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-stats mb-4 mb-xl-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h5 class=\"card-title text-uppercase text-muted mb-0\"> Colis Au dépôt</h5>\n                    <span class=\"h2 font-weight-bold mb-0\">{{depot}}</span>\n                  </div>\n                  <div class=\"col-auto\">\n                    <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                      <i class=\"fas fa-chart-pie\"></i>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mt-3 mb-0 text-muted text-sm\">\n                  <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i>  <a routerLinkActive=\"active\" [routerLink]=\"['/colisaudepot']\"> voir</a></span>\n                  <span class=\"text-nowrap\">la liste</span>\n                </p>\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-stats mb-4 mb-xl-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h5 class=\"card-title text-uppercase text-muted mb-0\">Colis En Cours</h5>\n                    <span class=\"h2 font-weight-bold mb-0\">{{ encours }}</span>\n                  </div>\n                  <div class=\"col-auto\">\n                    <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                      <i class=\"fas fa-users\"></i>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mt-3 mb-0 text-muted text-sm\">\n                  <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> <a routerLinkActive=\"active\" [routerLink]=\"['/colisencours']\"> voir</a></span>\n                  <span class=\"text-nowrap\">la liste</span>\n                </p>\n              </div>\n            </div>\n          </div>\n\n\n\n          <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-stats mb-4 mb-xl-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h5 class=\"card-title text-uppercase text-muted mb-0\">Colis RTN dépôt</h5>\n                    <span class=\"h2 font-weight-bold mb-0\">{{rtndepot}}</span>\n                  </div>\n                  <div class=\"col-auto\">\n                    <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                      <i class=\"fas fa-users\"></i>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mt-3 mb-0 text-muted text-sm\">\n                  <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> <a routerLinkActive=\"active\" [routerLink]=\"['/colisrtndepot']\"> voir</a></span>\n                  <span class=\"text-nowrap\">la liste</span>\n                </p>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n\n\n          <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-stats mb-4 mb-xl-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h5 class=\"card-title text-uppercase text-muted mb-0\">Colis livrés Payés</h5>\n                    <span class=\"h2 font-weight-bold mb-0\">{{livre}}</span>\n                  </div>\n                  <div class=\"col-auto\">\n                    <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                      <i class=\"fas fa-users\"></i>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mt-3 mb-0 text-muted text-sm\">\n                  <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> <a routerLinkActive=\"active\" [routerLink]=\"['/colislivre']\"> voir</a></span>\n                  <span class=\"text-nowrap\">la liste</span>\n                </p>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n          <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-stats mb-4 mb-xl-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h5 class=\"card-title text-uppercase text-muted mb-0\"> Retour Recu</h5>\n                    <span class=\"h2 font-weight-bold mb-0\">{{recuretour}}</span>\n                  </div>\n                  <div class=\"col-auto\">\n                    <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                      <i class=\"fas fa-chart-pie\"></i>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mt-3 mb-0 text-muted text-sm\">\n                  <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i>  <a routerLinkActive=\"active\" [routerLink]=\"['/colisretourrecu']\"> voir</a></span>\n                  <span class=\"text-nowrap\">la liste</span>\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-stats mb-4 mb-xl-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h5 class=\"card-title text-uppercase text-muted mb-0\"> Retour Définitif</h5>\n                    <span class=\"h2 font-weight-bold mb-0\">{{recudef}}</span>\n                  </div>\n                  <div class=\"col-auto\">\n                    <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                      <i class=\"fas fa-chart-pie\"></i>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mt-3 mb-0 text-muted text-sm\">\n                  <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i>  <a routerLinkActive=\"active\" [routerLink]=\"['/colisretourdef']\"> voir</a></span>\n                  <span class=\"text-nowrap\">la liste</span>\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-stats mb-4 mb-xl-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h5 class=\"card-title text-uppercase text-muted mb-0\">Retour Expéditeur</h5>\n                    <span class=\"h2 font-weight-bold mb-0\">{{recuexp}}</span>\n                  </div>\n                  <div class=\"col-auto\">\n                    <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\n                      <i class=\"fas fa-percent\"></i>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mt-3 mb-0 text-muted text-sm\">\n                  <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i>  <a routerLinkActive=\"active\" [routerLink]=\"['/colisretourexp']\"> voir</a></span>\n                  <span class=\"text-nowrap\">liste</span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      <div class=\"col-xl-8 mb-5 mb-xl-0\">\n        <div class=\"card bg-gradient-default shadow\">\n          <div class=\"card-header bg-transparent\">\n            <div class=\"row align-items-center\">\n              <div class=\"col\">\n                <h6 class=\"text-uppercase text-light ls-1 mb-1\">Overview</h6>\n                <h2 class=\"text-white mb-0\">Sales value</h2>\n              </div>\n              <div class=\"col\">\n                <ul class=\"nav nav-pills justify-content-end\">\n                  <li class=\"nav-item mr-2 mr-md-0\" data-toggle=\"chart\" data-target=\"#chart-sales\"  (click)=\"datasets[0];updateOptions()\">\n                    <a href=\"javascript:void(0)\" class=\"nav-link py-2 px-3\" [ngClass]=\"{'active':clicked===true}\" data-toggle=\"tab\" (click)=\"clicked=true;clicked1=false\">\n                      <span class=\"d-none d-md-block\">Month</span>\n                      <span class=\"d-md-none\">M</span>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\" data-toggle=\"chart\" data-target=\"#chart-sales\"  (click)=\"datasets[1];updateOptions()\">\n                    <a href=\"javascript:void(0)\" class=\"nav-link py-2 px-3\" [ngClass]=\"{'active':clicked1===true}\" data-toggle=\"tab\" (click)=\"clicked=false;clicked1=true\">\n                      <span class=\"d-none d-md-block\">Week</span>\n                      <span class=\"d-md-none\">W</span>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <!-- Chart -->\n            <div class=\"chart\">\n              <!-- Chart wrapper -->\n              <canvas id=\"chart-sales\" class=\"chart-canvas\"></canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-4\">\n        <div class=\"card shadow\">\n          <div class=\"card-header bg-transparent\">\n            <div class=\"row align-items-center\">\n              <div class=\"col\">\n                <h6 class=\"text-uppercase text-muted ls-1 mb-1\">Performance</h6>\n                <h2 class=\"mb-0\">Total orders</h2>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <!-- Chart -->\n            <div class=\"chart\">\n              <canvas id=\"chart-orders\" class=\"chart-canvas\"></canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-5\">\n      <div class=\"col-xl-8 mb-5 mb-xl-0\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col\">\n                <h3 class=\"mb-0\">Page visits</h3>\n              </div>\n              <div class=\"col text-right\">\n                <a href=\"#!\" class=\"btn btn-sm btn-primary\">See all</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <!-- Projects table -->\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Page name</th>\n                  <th scope=\"col\">Visitors</th>\n                  <th scope=\"col\">Unique users</th>\n                  <th scope=\"col\">Bounce rate</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/\n                  </th>\n                  <td>\n                    4,569\n                  </td>\n                  <td>\n                    340\n                  </td>\n                  <td>\n                    <i class=\"fas fa-arrow-up text-success mr-3\"></i> 46,53%\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/index.html\n                  </th>\n                  <td>\n                    3,985\n                  </td>\n                  <td>\n                    319\n                  </td>\n                  <td>\n                    <i class=\"fas fa-arrow-down text-warning mr-3\"></i> 46,53%\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/charts.html\n                  </th>\n                  <td>\n                    3,513\n                  </td>\n                  <td>\n                    294\n                  </td>\n                  <td>\n                    <i class=\"fas fa-arrow-down text-warning mr-3\"></i> 36,49%\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/tables.html\n                  </th>\n                  <td>\n                    2,050\n                  </td>\n                  <td>\n                    147\n                  </td>\n                  <td>\n                    <i class=\"fas fa-arrow-up text-success mr-3\"></i> 50,87%\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/profile.html\n                  </th>\n                  <td>\n                    1,795\n                  </td>\n                  <td>\n                    190\n                  </td>\n                  <td>\n                    <i class=\"fas fa-arrow-down text-danger mr-3\"></i> 46,53%\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-4\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col\">\n                <h3 class=\"mb-0\">Social traffic</h3>\n              </div>\n              <div class=\"col text-right\">\n                <a href=\"#!\" class=\"btn btn-sm btn-primary\">See all</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <!-- Projects table -->\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Referral</th>\n                  <th scope=\"col\">Visitors</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    Facebook\n                  </th>\n                  <td>\n                    1,480\n                  </td>\n                  <td>\n                    <div class=\"d-flex align-items-center\">\n                      <span class=\"mr-2\">60%</span>\n                      <div>\n                        <div class=\"progress\">\n                          <div class=\"progress-bar bg-gradient-danger\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">\n                    Facebook\n                  </th>\n                  <td>\n                    5,480\n                  </td>\n                  <td>\n                    <div class=\"d-flex align-items-center\">\n                      <span class=\"mr-2\">70%</span>\n                      <div>\n                        <div class=\"progress\">\n                          <div class=\"progress-bar bg-gradient-success\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">\n                    Google\n                  </th>\n                  <td>\n                    4,807\n                  </td>\n                  <td>\n                    <div class=\"d-flex align-items-center\">\n                      <span class=\"mr-2\">80%</span>\n                      <div>\n                        <div class=\"progress\">\n                          <div class=\"progress-bar bg-gradient-primary\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">\n                    Instagram\n                  </th>\n                  <td>\n                    3,678\n                  </td>\n                  <td>\n                    <div class=\"d-flex align-items-center\">\n                      <span class=\"mr-2\">75%</span>\n                      <div>\n                        <div class=\"progress\">\n                          <div class=\"progress-bar bg-gradient-info\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">\n                    twitter\n                  </th>\n                  <td>\n                    2,645\n                  </td>\n                  <td>\n                    <div class=\"d-flex align-items-center\">\n                      <span class=\"mr-2\">30%</span>\n                      <div>\n                        <div class=\"progress\">\n                          <div class=\"progress-bar bg-gradient-warning\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    BACKEND_URL: 'https://localhost:8443'
};


/***/ }),

/***/ "dyOy":
/*!***********************************************************!*\
  !*** ./src/app/superadmin/adminall/adminall.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminallComponent", function() { return AdminallComponent; });
/* harmony import */ var _raw_loader_adminall_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./adminall.component.html */ "u0d5");
/* harmony import */ var _adminall_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminall.component.css */ "oZ1h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var src_app_services_superadmin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/superadmin.service */ "cGkK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminallComponent = /** @class */ (function () {
    function AdminallComponent(serviceuser) {
        this.serviceuser = serviceuser;
        this.closeResult = '';
        this.admin1 = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.p = 1;
        this.admins = [];
    }
    AdminallComponent.prototype.ngOnInit = function () {
        this.get();
    };
    AdminallComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    AdminallComponent.prototype.get = function () {
        var _this = this;
        this.serviceuser.alladmin().subscribe(function (data) {
            _this.admins = data;
            console.log(data);
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.admins.length
        };
    };
    AdminallComponent.prototype.activer = function (user) {
        var _this = this;
        this.serviceuser.active(user)
            .subscribe(function (result) {
            console.log(user);
            _this.get();
        });
    };
    AdminallComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.serviceuser.cherche(value.keyword).subscribe(function (data) { _this.admins = data; });
    };
    AdminallComponent.ctorParameters = function () { return [
        { type: src_app_services_superadmin_service__WEBPACK_IMPORTED_MODULE_4__["SuperadminService"] }
    ]; };
    AdminallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-adminall',
            template: _raw_loader_adminall_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_adminall_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_superadmin_service__WEBPACK_IMPORTED_MODULE_4__["SuperadminService"]])
    ], AdminallComponent);
    return AdminallComponent;
}());



/***/ }),

/***/ "e8ex":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/signup/signup.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\">To fastbox</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <!-- Table -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-8\">\n      \n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-4\"><small></small></div>\n          <div class=\"text-center\">\n            <img src=\"./assets/img/brand/logo.png\"  width=\"200\">\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small> sign up with credentials</small>\n          </div>\n          <form  [formGroup]=\"signupForm\" class=\"sign-up-form\"  (ngSubmit)=\"Onsignup()\">\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControlName]=\"'username'\"placeholder=\"Username\" autofocus/>\n                <span *ngIf=\"!signupForm.get('username').valid && signupForm.get('username').touched\">\n                  please provid a valid username</span>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input type=\"email\"  class=\"form-control\" [formControlName]=\"'email'\" placeholder=\"Email\" />\n                <span *ngIf=\"!signupForm.get('email').valid&&signupForm.get('email').touched\">\n                    please provid a valid email</span>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n               \n                <input type=\"password\" class=\"form-control\" [formControlName]=\"'password'\" placeholder=\"Password\" />\n                <span *ngIf=\"!signupForm.get('password').valid&&signupForm.get('password').touched\">\n                  please provid a valid password</span>\n              </div>\n            </div>\n\n\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n               \n                <input type=\"password\"  class=\"form-control\"  [formControlName]=\"'repassword'\" placeholder=\"Repassword\" />\n                <span *ngIf=\"!signupForm.get('repassword').valid&&signupForm.get('repassword').touched\">\n                please provid a valid repassword</span>\n              </div>\n            </div>\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\n            <div class=\"row my-4\">\n              <div class=\"col-12\">\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-primary mt-4\">Create account</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "f2qV":
/*!****************************************************************************!*\
  !*** ./src/app/superadmin/superadminlayout/superadminlayout.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vc3VwZXJhZG1pbmxheW91dC9zdXBlcmFkbWlubGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "fCuZ":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/suivrecolisall/suivrecolisall.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n       \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">suivre colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n  \n  \n          \n  <!--         <ul  >\n            \n                \n  \n  \n                <li class=\"nav-item\">\n                  <a routerLinkActive=\"active\" [routerLink]=\"['/ajoutlivreur']\">\n                    \n                    <span class=\"nav-link-inner--text\">ajout</span>\n                  </a>\n  \n  \n  </ul>\n   -->\n  \n  \n  \n  \n  \n        <div *ngIf=\"test==true\">\n          <div class=\"table-responsive\" >\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">date</th>\n                  <th scope=\"col\">etat</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of tablec\">\n                  <td>{{colis.createdAt | date }}</td>\n                  <td class=\"badge badge-primary\" >{{ colis.etat_colis}}</td>\n                 \n                </tr>\n              </tbody>\n            </table>\n        </div> \n     \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n        <!--  \n            \n          </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div> -->\n  \n  \n  \n  \n      \n      \n      </div>\n\n\n    </div>\n  \n  ");

/***/ }),

/***/ "h2rU":
/*!***********************************************************************!*\
  !*** ./src/app/superadmin/suivrecolisall/suivrecolisall.component.ts ***!
  \***********************************************************************/
/*! exports provided: SuivrecolisallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuivrecolisallComponent", function() { return SuivrecolisallComponent; });
/* harmony import */ var _raw_loader_suivrecolisall_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./suivrecolisall.component.html */ "fCuZ");
/* harmony import */ var _suivrecolisall_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suivrecolisall.component.css */ "Su96");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_codecoli__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/codecoli */ "m0dX");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuivrecolisallComponent = /** @class */ (function () {
    function SuivrecolisallComponent(colisservice) {
        this.colisservice = colisservice;
        this.code = new src_app_models_codecoli__WEBPACK_IMPORTED_MODULE_3__["Codecoli"];
        this.test = false;
    }
    SuivrecolisallComponent.prototype.ngOnInit = function () {
    };
    SuivrecolisallComponent.prototype.onChercher = function (f) {
        var _this = this;
        console.log(f.keyword);
        this.test = true;
        this.colisservice.Suivrecolis(f.keyword).subscribe(function (data) { _this.tablec = data; });
    };
    SuivrecolisallComponent.ctorParameters = function () { return [
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__["ColisService"] }
    ]; };
    SuivrecolisallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-suivrecolisall',
            template: _raw_loader_suivrecolisall_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_suivrecolisall_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__["ColisService"]])
    ], SuivrecolisallComponent);
    return SuivrecolisallComponent;
}());



/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ "N/DB");
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_localize_init__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es/reflect */ "SkA5");
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js/dist/zone */ "m+po");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/**
 *  IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.

window.global = window;
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ "hmHk":
/*!*********************************************************!*\
  !*** ./src/app/superadmin/superadmin-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SuperadminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperadminRoutingModule", function() { return SuperadminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminall_adminall_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminall/adminall.component */ "dyOy");
/* harmony import */ var _allcolissuper_allcolissuper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allcolissuper/allcolissuper.component */ "wonx");
/* harmony import */ var _clientall_clientall_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientall/clientall.component */ "Ul6d");
/* harmony import */ var _dashboardsuperadmin_dashboardsuperadmin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboardsuperadmin/dashboardsuperadmin.component */ "SdcY");
/* harmony import */ var _livreurall_livreurall_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./livreurall/livreurall.component */ "tyrt");
/* harmony import */ var _reclamationall_reclamationall_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reclamationall/reclamationall.component */ "vwfE");
/* harmony import */ var _suivrecolisall_suivrecolisall_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./suivrecolisall/suivrecolisall.component */ "h2rU");
/* harmony import */ var _superadminlayout_superadminlayout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./superadminlayout/superadminlayout.component */ "XqG9");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: "superadmin", component: _superadminlayout_superadminlayout_component__WEBPACK_IMPORTED_MODULE_9__["SuperadminlayoutComponent"]
    },
    {
        path: "dashboardsuperadmin", component: _dashboardsuperadmin_dashboardsuperadmin_component__WEBPACK_IMPORTED_MODULE_5__["DashboardsuperadminComponent"]
    },
    {
        path: "colisallsuper", component: _allcolissuper_allcolissuper_component__WEBPACK_IMPORTED_MODULE_3__["AllcolissuperComponent"]
    },
    {
        path: "livreurall", component: _livreurall_livreurall_component__WEBPACK_IMPORTED_MODULE_6__["LivreurallComponent"]
    },
    {
        path: "adminall", component: _adminall_adminall_component__WEBPACK_IMPORTED_MODULE_2__["AdminallComponent"]
    },
    {
        path: "clientall", component: _clientall_clientall_component__WEBPACK_IMPORTED_MODULE_4__["ClientallComponent"]
    },
    {
        path: "suivrecolisall", component: _suivrecolisall_suivrecolisall_component__WEBPACK_IMPORTED_MODULE_8__["SuivrecolisallComponent"]
    },
    {
        path: "reclamationall", component: _reclamationall_reclamationall_component__WEBPACK_IMPORTED_MODULE_7__["ReclamationallComponent"]
    },
];
var SuperadminRoutingModule = /** @class */ (function () {
    function SuperadminRoutingModule() {
    }
    SuperadminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SuperadminRoutingModule);
    return SuperadminRoutingModule;
}());



/***/ }),

/***/ "hnPV":
/*!********************************************!*\
  !*** ./src/app/livreur-service.service.ts ***!
  \********************************************/
/*! exports provided: LivreurServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivreurServiceService", function() { return LivreurServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LivreurServiceService = /** @class */ (function () {
    function LivreurServiceService(http) {
        this.http = http;
        //environment.BACKEND_URL  = 'http://5.196.7.152:8080/org-sid/li/livreur';
        // environment.BACKEND_URL ="/http://5.196.7.152:8080/org-sid/";
        // environment.BACKEND_URL  =/li/livreur 'http://localhost:8080/li/livreur';
        //environment.BACKEND_URL ="/http://localhost:8080/";
    }
    LivreurServiceService.prototype.getLivreur = function (l1) {
        throw new Error('Method not implemented.');
    };
    LivreurServiceService.prototype.finlivreurall = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/li/livreur");
    };
    LivreurServiceService.prototype.finlivreurallbynom = function (nom) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/li/affichelivreur/" + nom);
    };
    LivreurServiceService.prototype.findAll = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/li/livreurs", options);
    };
    LivreurServiceService.prototype.fin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/li/livreurs', options);
    };
    LivreurServiceService.prototype.find = function (nom) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/li/livreur/" + nom, options);
    };
    LivreurServiceService.prototype.Save = function (livreur) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/li/livreur", livreur, options);
    };
    LivreurServiceService.prototype.active = function (livreur) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/li/active", livreur, options);
    };
    LivreurServiceService.prototype.update = function (id, value) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/li/livreur/" + id, value, options);
    };
    LivreurServiceService.prototype.cherche = function (id) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + "/li/chercherbyid/" + id);
    };
    LivreurServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LivreurServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LivreurServiceService);
    return LivreurServiceService;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "Ls9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/servicereclamation.service */ "8J6P");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/editprofil.service */ "BXP1");
/* harmony import */ var src_app_models_information__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/information */ "NKLp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(profileSer, authservice, reclamationservice, modalService, location, element, router) {
        this.profileSer = profileSer;
        this.authservice = authservice;
        this.reclamationservice = reclamationservice;
        this.modalService = modalService;
        this.element = element;
        this.router = router;
        this.closeResult = '';
        this.location = location;
        this.information = new src_app_models_information__WEBPACK_IMPORTED_MODULE_10__["Information"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileSer.info().subscribe(function (data) {
            _this.information = data;
            _this.x = data.username;
            //  console.log(data);
        });
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        this.reclamationservice.fin().subscribe(function (data) {
            _this.reclamations = data;
            //console.log(data);
        });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.submit = function () {
        this.authservice.logout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__["EditprofilService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"] },
        { type: src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_7__["ServicereclamationService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__["EditprofilService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"], src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_7__["ServicereclamationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jVTl":
/*!*************************************************************!*\
  !*** ./src/app/authentification/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "e8ex");
/* harmony import */ var _signup_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.css */ "nmxE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(authServiceService, router, toastr) {
        this.router = router;
        this.toastr = toastr;
        this.im1 = "assets/login/img/aa.svg";
        this.signupRequestPayload = { username: '',
            email: '',
            password: '',
            repassword: '' };
        this.authService = authServiceService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            repassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    SignupComponent.prototype.Onsignup = function () {
        var _this = this;
        this.signupRequestPayload.email = this.signupForm.get('email').value;
        this.signupRequestPayload.username = this.signupForm.get('username').value;
        this.signupRequestPayload.password = this.signupForm.get('password').value;
        this.signupRequestPayload.repassword = this.signupForm.get('repassword').value;
        this.authService.signup(this.signupRequestPayload).subscribe(function (data) {
            _this.toastr.success('check your mail');
            _this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
        }, function (error) {
            _this.toastr.error('Registration Failed! Please try again');
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "jcT0":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Emailoublie } from './emailoublie';
var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.refreshTokenPayload = {
            refreshToken: this.getRefreshToken(),
            username: this.getUserName()
        };
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.loginSuject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.orhgUrl = 'http://localhost:8080/';
        //this.orhgUrl='http://5.196.7.152:8080/org-sid/';
    }
    AuthServiceService.prototype.resetpass = function (emailoublie) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        return this.httpClient.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].BACKEND_URL + "/api/reset", JSON.stringify(emailoublie), options);
    };
    AuthServiceService.prototype.login = function (loginRequestPayload) {
        var _this = this;
        sessionStorage.setItem('id', '1');
        //console.log(this.getUserName);
        var roles = [];
        return this.httpClient.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].BACKEND_URL + '/api/signin', loginRequestPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            //console.log(data.username);
            _this.localStorage.store('authenticationToken', data.authenticationToken);
            _this.localStorage.store('username', data.username);
            _this.localStorage.store('refreshToken', data.refreshToken);
            _this.localStorage.store('expiresAt', data.expiresAt);
            localStorage.setItem('user', data.username);
            // console.log(this.localStorage.retrieve('authenticationToken'));
            localStorage.setItem("j", "Bearer " + data.authenticationToken);
            localStorage.setItem("jwt", data.authenticationToken);
            // console.log(data.refreshToken);
            //  if (localStorage.getItem('jwt')) {
            // roles = this.jwtHelper.decodeToken(data.authenticationToken).roles;
            //alert(roles);
            // console.log(roles);
            //  console.log(localStorage.getItem('jwt'));
            // return roles.includes('ROLE_ADMIN');
            //  }
            return true;
        }));
    };
    AuthServiceService.prototype.isUserAdmin = function () {
        var roles = [];
        if (localStorage.getItem('jwt')) {
            roles = this.jwtHelper.decodeToken(localStorage.getItem('jwt')).roles;
            return roles;
        }
        return [];
    };
    AuthServiceService.prototype.getJwtToken = function () {
        return this.localStorage.retrieve('authenticationToken');
    };
    AuthServiceService.prototype.refreshToken = function () {
        var _this = this;
        return this.httpClient.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].BACKEND_URL + '/api/refresh/token', this.refreshTokenPayload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.localStorage.clear('authenticationToken');
            _this.localStorage.clear('expiresAt');
            _this.localStorage.store('authenticationToken', response.authenticationToken);
            _this.localStorage.store('expiresAt', response.expiresAt);
            _this.localStorage.clear('user');
            // console.log(this.localStorage.retrieve('authenticationToken'));
            _this.localStorage.clear("j");
            _this.localStorage.clear("jwt");
        }));
    };
    AuthServiceService.prototype.logout = function () {
        this.httpClient.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].BACKEND_URL + '/api/logout', this.refreshTokenPayload, { responseType: 'text' })
            .subscribe(function (data) {
            // console.log(data);
        }, function (error) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            // console.log("error logout");
        });
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('username');
        this.localStorage.clear('refreshToken');
        this.localStorage.clear('expiresAt');
        this.localStorage.clear('user');
        // console.log(this.localStorage.retrieve('authenticationToken'));
        this.localStorage.clear("j");
        this.localStorage.clear("jwt");
    };
    AuthServiceService.prototype.getUserName = function () {
        return this.localStorage.retrieve('username');
    };
    AuthServiceService.prototype.getRefreshToken = function () {
        return this.localStorage.retrieve('refreshToken');
    };
    AuthServiceService.prototype.isLoggedIn = function () {
        return this.getJwtToken() != null;
    };
    AuthServiceService.prototype.isLoggedn = function () {
        this.logout();
        return true;
    };
    AuthServiceService.prototype.changepass = function (change) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        return this.httpClient.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].BACKEND_URL + "/api/change", change, options);
    };
    AuthServiceService.prototype.signup = function (signupRequestPayload) {
        return this.httpClient.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].BACKEND_URL + "/api/sign", signupRequestPayload, { responseType: 'text' });
    };
    AuthServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
    ]; };
    AuthServiceService.propDecorators = {
        loggedIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    AuthServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "lVUD":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/livreurall/livreurall.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n           \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste livreur</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" (click)=\"onChercher(f.value)\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n  \n  \n          <ul>         \n        \n            <hr>\n  \n          </ul>\n  \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">numLivreur</th>\n                  <th scope=\"col\">Nom</th>\n                  <th scope=\"col\">prenom</th>\n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">Email</th>\n                  <th scope=\"col\">véhicule</th>\n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let livreur of livreurs | paginate: {itemsPerPage: 5, currentPage: p, totalItems: livreurs.length}\">\n                  <td>{{livreur.id }}</td>\n                  <td>{{ livreur.nom }}</td>\n                  <td>{{ livreur.prenom }}</td>\n                  <td>{{ livreur.adresse}}</td>\n                  \n                  <td><a href=\"mailto:{{ livreur.email }}\">{{ livreur.email }}</a></td>\n                  <td>{{ livreur.vehicule }}</td>\n                  \n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n            <!--editer-->\n           \n            <!--fin editer-->\n  <!-- \n           \n            \n          </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>\n  \n  \n   -->\n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "lwBb":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/footerbarsuper/footerbarsuper.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">ARDEN</a>\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n       \n      </div>\n    </div>\n  </footer>\n  ");

/***/ }),

/***/ "m0dX":
/*!************************************!*\
  !*** ./src/app/models/codecoli.ts ***!
  \************************************/
/*! exports provided: Codecoli */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Codecoli", function() { return Codecoli; });
var Codecoli = /** @class */ (function () {
    function Codecoli() {
    }
    return Codecoli;
}());



/***/ }),

/***/ "mBxo":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/userlayout/userlayout.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<app-sidebaruser></app-sidebaruser>\n<div class=\"main-content\">\n<!-- Top navbar -->\n  <app-navbaruser></app-navbaruser>\n<!-- Pages -->\n<router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footerbaruser></app-footerbaruser>\n  </div>\n</div>\n");

/***/ }),

/***/ "nOMG":
/*!************************************************************************!*\
  !*** ./src/app/superadmin/footerbarsuper/footerbarsuper.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vZm9vdGVyYmFyc3VwZXIvZm9vdGVyYmFyc3VwZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "naRA":
/*!**********************************************************!*\
  !*** ./src/app/user/userlayout/userlayout.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlcmxheW91dC91c2VybGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "nmxE":
/*!**************************************************************!*\
  !*** ./src/app/authentification/signup/signup.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "oZ1h":
/*!************************************************************!*\
  !*** ./src/app/superadmin/adminall/adminall.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vYWRtaW5hbGwvYWRtaW5hbGwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "p1jh":
/*!***********************************************************!*\
  !*** ./src/app/superadmin/colisall/colisall.component.ts ***!
  \***********************************************************/
/*! exports provided: ColisallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColisallComponent", function() { return ColisallComponent; });
/* harmony import */ var _raw_loader_colisall_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./colisall.component.html */ "4AH9");
/* harmony import */ var _colisall_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colisall.component.css */ "/Y4w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColisallComponent = /** @class */ (function () {
    function ColisallComponent() {
    }
    ColisallComponent.prototype.ngOnInit = function () {
    };
    ColisallComponent.ctorParameters = function () { return []; };
    ColisallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-colisall',
            template: _raw_loader_colisall_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_colisall_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ColisallComponent);
    return ColisallComponent;
}());



/***/ }),

/***/ "q7zV":
/*!**********************************************************************!*\
  !*** ./src/app/superadmin/allcolissuper/allcolissuper.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vYWxsY29saXNzdXBlci9hbGxjb2xpc3N1cGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "rXzi":
/*!***********************************************************************!*\
  !*** ./src/app/superadmin/footerbarsuper/footerbarsuper.component.ts ***!
  \***********************************************************************/
/*! exports provided: FooterbarsuperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterbarsuperComponent", function() { return FooterbarsuperComponent; });
/* harmony import */ var _raw_loader_footerbarsuper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footerbarsuper.component.html */ "lwBb");
/* harmony import */ var _footerbarsuper_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerbarsuper.component.css */ "nOMG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterbarsuperComponent = /** @class */ (function () {
    function FooterbarsuperComponent() {
        this.test = new Date();
    }
    FooterbarsuperComponent.prototype.ngOnInit = function () {
    };
    FooterbarsuperComponent.ctorParameters = function () { return []; };
    FooterbarsuperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footerbarsuper',
            template: _raw_loader_footerbarsuper_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footerbarsuper_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterbarsuperComponent);
    return FooterbarsuperComponent;
}());



/***/ }),

/***/ "roVY":
/*!***************************************!*\
  !*** ./src/app/models/emailoublie.ts ***!
  \***************************************/
/*! exports provided: Emailoublie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emailoublie", function() { return Emailoublie; });
var Emailoublie = /** @class */ (function () {
    function Emailoublie() {
    }
    return Emailoublie;
}());



/***/ }),

/***/ "tAID":
/*!**************************************************************!*\
  !*** ./src/app/superadmin/clientall/clientall.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY2xpZW50YWxsL2NsaWVudGFsbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "tyrt":
/*!***************************************************************!*\
  !*** ./src/app/superadmin/livreurall/livreurall.component.ts ***!
  \***************************************************************/
/*! exports provided: LivreurallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivreurallComponent", function() { return LivreurallComponent; });
/* harmony import */ var _raw_loader_livreurall_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./livreurall.component.html */ "lVUD");
/* harmony import */ var _livreurall_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./livreurall.component.css */ "OceK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LivreurallComponent = /** @class */ (function () {
    function LivreurallComponent(livreurService) {
        this.livreurService = livreurService;
        this.p = 1;
    }
    LivreurallComponent.prototype.ngOnInit = function () {
        this.get();
        console.log(this.x);
    };
    LivreurallComponent.prototype.pageChanged = function (event) {
        this.p = event;
    };
    LivreurallComponent.prototype.get = function () {
        var _this = this;
        this.livreurService.finlivreurall().subscribe(function (data) {
            _this.livreurs = data;
            _this.x = _this.livreurs.length;
        });
    };
    LivreurallComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.livreurService.finlivreurallbynom(value.keyword).subscribe(function (data) { _this.livreurs = data; });
        console.log(value);
    };
    LivreurallComponent.ctorParameters = function () { return [
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_3__["LivreurServiceService"] }
    ]; };
    LivreurallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-livreurall',
            template: _raw_loader_livreurall_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_livreurall_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_3__["LivreurServiceService"]])
    ], LivreurallComponent);
    return LivreurallComponent;
}());



/***/ }),

/***/ "u0d5":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/adminall/adminall.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste admin</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  type=\"Submit\" (click)=\"onChercher(f.value)\" ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n  \n  <br>\n           \n          <ul  >\n            \n                \n  \n  \n        </ul>\n \n  \n  \n  \n  \n  \n  \n                \n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">username</th>\n                  <th scope=\"col\">email</th>\n                  <th scope=\"col\">date création </th>\n                 \n                \n                 <th scope=\"col\"> Action</th>\n             \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let admin of admins | paginate: config \">\n             \n                  <td>{{admin.username}}</td>\n                \n               \n\n                <td>{{admin.email}}</td>\n                <td>{{admin.createdAt}}</td>\n                <td  *ngIf=\"admin.admin.disponibilite\" >\n\n                    <i class=\"fas fa-toggle-on  text-blue text-lg\" (click)=\"activer(admin)\"></i>\n\n                  \n                </td>\n\n                <td  *ngIf=\"!admin.admin.disponibilite\" >\n\n                  <i class=\"fas fa-toggle-off text-blue text-lg\" (click)=\"activer(admin)\"></i>\n\n                \n              </td>\n                   </tr>\n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\n            \n  \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "uClj":
/*!**********************************************************!*\
  !*** ./src/app/services/servicedashboarduser.service.ts ***!
  \**********************************************************/
/*! exports provided: ServicedashboarduserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicedashboarduserService", function() { return ServicedashboarduserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicedashboarduserService = /** @class */ (function () {
    function ServicedashboarduserService(http) {
        this.http = http;
        //environment.BACKEND_URL = 'http://5.196.7.152:8080/org-sid/colis';
        //  environment.BACKEND_URL = /colis'http://localhost:8080/colis';
    }
    ServicedashboarduserService.prototype.colisenatt = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/chercheenattende', options);
    };
    ServicedashboarduserService.prototype.nbcolisenattende = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbenattende', options);
    };
    ServicedashboarduserService.prototype.colisencours = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/chercheencours', options);
    };
    ServicedashboarduserService.prototype.colisretourdefit = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/chercheretourdefi', options);
    };
    ServicedashboarduserService.prototype.colisretourexp = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/chercheretourexp', options);
    };
    ServicedashboarduserService.prototype.colislivret = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/cherchelivre', options);
    };
    ServicedashboarduserService.prototype.colisendepot = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/chercheaudepot', options);
    };
    ServicedashboarduserService.prototype.colisrtndepot = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/cherchertndepot', options);
    };
    ServicedashboarduserService.prototype.colisretourrecu = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/chercheretourrecu', options);
    };
    ServicedashboarduserService.prototype.nbcolisaudepot = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbaudepot', options);
    };
    ServicedashboarduserService.prototype.nbcolisencours = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbencours', options);
    };
    ServicedashboarduserService.prototype.nbcolisrtndepot = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbertndepot', options);
    };
    ServicedashboarduserService.prototype.montantuser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/montantuser', options);
    };
    ServicedashboarduserService.prototype.nbcolislivre = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nblivre', options);
    };
    ServicedashboarduserService.prototype.nbcolisretourrecu = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbretourrecu', options);
    };
    ServicedashboarduserService.prototype.nbcolisretourdef = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbretourdefinitif', options);
    };
    ServicedashboarduserService.prototype.nbcolisretourexp = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbretourexp', options);
    };
    ServicedashboarduserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    ServicedashboarduserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ServicedashboarduserService);
    return ServicedashboarduserService;
}());



/***/ }),

/***/ "v23k":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/sidebarsuperadmin/sidebarsuperadmin.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\" >\n    <div class=\"container-fluid\">\n      <!-- Toggler -->\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n         aria-controls=\"sidenav-collapse-main\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <!-- Brand -->\n      <a class=\"navbar-brand pt-0\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" >\n        <img src=\"./assets/img/brand/red.png\" class=\"navbar-brand-img\" alt=\"...\">\n      </a>\n      <!-- User -->\n      <ul class=\"nav align-items-center d-md-none\">\n        <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n          <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\n            <i class=\"ni ni-bell-55\"></i>\n          </a>\n          <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n          <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\n            <div class=\"media align-items-center\">\n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img alt=\"Image placeholder\" src=\"./assets/img/theme/team-1-800x800.jpg\">\n              </span>\n            </div>\n          </a>\n          <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n            <div class=\" dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>My profile</span>\n            </a>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/llogin']\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>gggin</span>\n            </a>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/ssignup']\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>siguppppp</span>\n            </a>\n  \n            <a routerLinkActive=\"active\" [routerLink]=\"['/reeset']\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>Reset</span>\n            </a>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span>Settings</span>\n            </a>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n              <i class=\"ni ni-calendar-grid-58\"></i>\n              <span>Activity</span>\n            </a>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n              <i class=\"ni ni-support-16\"></i>\n              <span>Support</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a href=\"#!\" class=\"dropdown-item\">\n              <i class=\"ni ni-user-run\"></i>\n              <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n      <!-- Collapse -->\n      <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a  routerLinkActive=\"active\" [routerLink]=\"['']\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Form -->\n        <form class=\"mt-4 mb-3 d-md-none\">\n          <div class=\"input-group input-group-rounded input-group-merge\">\n            <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\">\n                <span class=\"fa fa-search\"></span>\n              </div>\n            </div>\n          </div>\n        </form>\n        <!-- Navigation  *ngIf=\"isLoggedin && isUserInRole('admin') else user\"-->\n        <ul class=\"navbar-nav\" >\n            <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n                <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\n                    <i class=\"ni {{menuItem.icon}}\"></i>\n                    {{menuItem.title}}\n                  \n                </a>\n            </li>\n        </ul>\n  \n  \n     <!--<ng-template #user>\n        <ul>\n          <li>\n       \n              <a routerLinkActive=\"active\" [routerLink]=\"['/user']\" class=\"nav-link\">dashboard1</a>\n          </li>\n        </ul>\n      </ng-template>-->\n        <!-- Divider -->\n        <hr class=\"my-3\">\n        <!-- Heading -->\n        \n        <!-- Navigation -->\n        \n      </div>\n    </div>\n  </nav>\n \n  s");

/***/ }),

/***/ "vSkC":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superadmin/navbarsuper/navbarsuper.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n    <div class=\"container-fluid\">\n      <!-- Brand -->\n      <a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>\n      <!-- Form -->\n      <!-- <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex mr-lg-auto\">\n        <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n          <div class=\"input-group input-group-alternative\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n            </div>\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n            (blur)=\"focus = false\">\n          </div>\n        </div>\n      </form> -->\n      <!-- User -->\n      <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n        <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n          <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\n            <div class=\"media align-items-center\">\n              \n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img alt=\"Image placeholder\" src=\"assets/img/theme/team-4-800x800.jpg\">\n              </span>\n              <div class=\"media-body ml-2 d-none d-lg-block\">\n                <span class=\"mb-0 text-sm  font-weight-bold\">superadmin</span>\n              </div>\n            </div>\n          </a>\n          <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n            <div class=\" dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/userprofil']\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>My profile</span>\n            </a>\n  \n  \n  \n  \n  \n  \n            <a  routerLinkActive=\"active\" [routerLink]=\"['/notification']\" class=\"dropdown-item\">\n              <i class=\"fas fa-bell-slash\"></i>\n              <span>reclamation</span>\n            </a>\n          \n  \n  \n  \n           \n        \n          <!--   <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span>Settings</span>\n            </a>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n              <i class=\"ni ni-calendar-grid-58\"></i>\n              <span>Activity</span>\n            </a>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n              <i class=\"ni ni-support-16\"></i>\n              <span>Support</span>\n            </a> -->\n            <div class=\"dropdown-divider\"></div>\n            <a routerLinkActive=\"active\" [routerLink]=\"['/llogin']\" class=\"dropdown-item\" (click)=\"submit()\">\n              <i class=\"ni ni-user-run\"></i>\n              <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  ");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vwfE":
/*!***********************************************************************!*\
  !*** ./src/app/superadmin/reclamationall/reclamationall.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReclamationallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReclamationallComponent", function() { return ReclamationallComponent; });
/* harmony import */ var _raw_loader_reclamationall_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reclamationall.component.html */ "+xG9");
/* harmony import */ var _reclamationall_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reclamationall.component.css */ "Jtiu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReclamationallComponent = /** @class */ (function () {
    function ReclamationallComponent() {
    }
    ReclamationallComponent.prototype.ngOnInit = function () {
    };
    ReclamationallComponent.ctorParameters = function () { return []; };
    ReclamationallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-reclamationall',
            template: _raw_loader_reclamationall_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_reclamationall_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ReclamationallComponent);
    return ReclamationallComponent;
}());



/***/ }),

/***/ "wonx":
/*!*********************************************************************!*\
  !*** ./src/app/superadmin/allcolissuper/allcolissuper.component.ts ***!
  \*********************************************************************/
/*! exports provided: AllcolissuperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllcolissuperComponent", function() { return AllcolissuperComponent; });
/* harmony import */ var _raw_loader_allcolissuper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./allcolissuper.component.html */ "YEzt");
/* harmony import */ var _allcolissuper_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allcolissuper.component.css */ "q7zV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllcolissuperComponent = /** @class */ (function () {
    function AllcolissuperComponent(colisService) {
        this.colisService = colisService;
        this.coliers = [];
    }
    AllcolissuperComponent.prototype.ngOnInit = function () {
        this.get();
    };
    AllcolissuperComponent.prototype.get = function () {
        var _this = this;
        this.colisService.super().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    AllcolissuperComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    AllcolissuperComponent.ctorParameters = function () { return [
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_3__["ColisService"] }
    ]; };
    AllcolissuperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-allcolissuper',
            template: _raw_loader_allcolissuper_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_allcolissuper_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_3__["ColisService"]])
    ], AllcolissuperComponent);
    return AllcolissuperComponent;
}());



/***/ }),

/***/ "yZN6":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss */ "jcT0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/client', title: 'Clients', icon: 'fas fa-user text-blue', class: '' },
    { path: '/livreur', title: 'Livreurs', icon: 'fas fa-people-carry text-red', class: '' },
    { path: '/colis', title: 'Colis', icon: 'fas fa-box-open text-yellow', class: '' },
    { path: '/suivre', title: 'suivre colis', icon: 'fas fa-box text-pink', class: '' },
    { path: '/pick', title: 'pickup', icon: 'fas fa-print text-danger', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, authservice) {
        this.router = router;
        this.authservice = authservice;
        this.isCollapsed = true;
    }
    SidebarComponent.prototype.isUserInRole = function (role) {
        if (this.authservice.isUserAdmin().includes(role)) {
            return true;
        }
        return false;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedin = this.authservice.isLoggedIn();
        this.authservice.loginSuject.asObservable().subscribe(function () {
            _this.isLoggedin = _this.authservice.isLoggedIn();
            _this.username = _this.authservice.getUserName();
        });
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Argon Dashboard Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });
var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])();
platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map