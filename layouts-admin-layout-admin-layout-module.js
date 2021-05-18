(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "++bA":
/*!**********************************************************!*\
  !*** ./src/app/pages/chartadmin/chartadmin.component.ts ***!
  \**********************************************************/
/*! exports provided: ChartadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartadminComponent", function() { return ChartadminComponent; });
/* harmony import */ var _raw_loader_chartadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./chartadmin.component.html */ "rHBd");
/* harmony import */ var _chartadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartadmin.component.css */ "MX8b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChartadminComponent = /** @class */ (function () {
    function ChartadminComponent(datepipe, router, dashboardservice, colisService, http) {
        this.datepipe = datepipe;
        this.router = router;
        this.dashboardservice = dashboardservice;
        this.colisService = colisService;
        this.http = http;
        this.dlike = [];
        this.fg = [];
        this.lineChartData = [{ data: [], label: '' }];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                borderColor: 'white',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        this.dlike = [];
        this.datafr = [];
        this.fg = [];
    }
    ChartadminComponent.prototype.getDatafromBack = function () {
        var _this = this;
        return this.dashboardservice.livrepayeadmin().subscribe(function (data) {
            _this.datafr = data;
            // console.log(data);
            _this.datafr.forEach(function (res) {
                _this.dlike.push(res.fraislivraison);
                _this.fg.push(res.date.toString());
                // console.log(res.date );
            });
            _this.lineChartData = [
                { data: _this.dlike, label: 'montantadmin' },
            ];
            _this.lineChartLabels = _this.fg;
        });
    };
    ChartadminComponent.prototype.ngOnInit = function () {
        this.getDatafromBack();
        //['January', 'February', 'March', 'April', 'May', 'June'];
    };
    ChartadminComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_6__["DashboardadminService"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__["ColisService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ChartadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chartadmin',
            template: _raw_loader_chartadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_chartadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_6__["DashboardadminService"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__["ColisService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ChartadminComponent);
    return ChartadminComponent;
}());

// [85, 72, 78, 75, 77, 75]


/***/ }),

/***/ "+kP5":
/*!********************************************************************!*\
  !*** ./src/app/pages/printcolisadmin/printcolisadmin.component.ts ***!
  \********************************************************************/
/*! exports provided: PrintcolisadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintcolisadminComponent", function() { return PrintcolisadminComponent; });
/* harmony import */ var _raw_loader_printcolisadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./printcolisadmin.component.html */ "oPG5");
/* harmony import */ var _printcolisadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printcolisadmin.component.css */ "tFfp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/client */ "cof1");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrintcolisadminComponent = /** @class */ (function () {
    function PrintcolisadminComponent(colisservice, route, router) {
        this.colisservice = colisservice;
        this.route = route;
        this.router = router;
        this.myDate = Date.now();
        this.colies = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_5__["Colis"]();
        this.client = new src_app_client__WEBPACK_IMPORTED_MODULE_4__["Client"]();
        this.colies = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_5__["Colis"]();
        this.client = new src_app_client__WEBPACK_IMPORTED_MODULE_4__["Client"]();
    }
    PrintcolisadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
        this.colisservice.chercheparidadmin(this.id).subscribe(function (data) { _this.colies = data; });
        this.exp();
    };
    PrintcolisadminComponent.prototype.exp = function () {
        var _this = this;
        this.colisservice.chercheuserprint(this.id).subscribe(function (data) { _this.client = data; console.log(data); });
    };
    PrintcolisadminComponent.ctorParameters = function () { return [
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_6__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PrintcolisadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-printcolisadmin',
            template: _raw_loader_printcolisadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_printcolisadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_6__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PrintcolisadminComponent);
    return PrintcolisadminComponent;
}());



/***/ }),

/***/ "/OHS":
/*!************************************************************!*\
  !*** ./src/app/pages/editlivreur/editlivreur.component.ts ***!
  \************************************************************/
/*! exports provided: EditlivreurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditlivreurComponent", function() { return EditlivreurComponent; });
/* harmony import */ var _raw_loader_editlivreur_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./editlivreur.component.html */ "9Af1");
/* harmony import */ var _editlivreur_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editlivreur.component.css */ "TzYD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditlivreurComponent = /** @class */ (function () {
    function EditlivreurComponent(route, router, livreurservice) {
        this.route = route;
        this.router = router;
        this.livreurservice = livreurservice;
        //this.livreur= new Livreur();
        this.l1 = new src_app_livreur__WEBPACK_IMPORTED_MODULE_4__["Livreur"]();
        this.L2 = new src_app_livreur__WEBPACK_IMPORTED_MODULE_4__["Livreur"]();
    }
    EditlivreurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        //console.log(this.route.snapshot.params.id);
        this.livreurservice.cherche(this.id).subscribe(function (data) {
            //this.livreur = data;},
            _this.L2 = data;
        }
        //,err=>{console.log(err);}
        );
        // console.log(this.livreur); 
        //console.log(this.l1);
    };
    EditlivreurComponent.prototype.onSubmitt = function () {
        var _this = this;
        this.livreurservice.update(this.id, this.l1).subscribe(function (result) { return _this.router.navigate(['/livreur']); }, function (data) { _this.l1 = data; });
    };
    EditlivreurComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_5__["LivreurServiceService"] }
    ]; };
    EditlivreurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-editlivreur',
            template: _raw_loader_editlivreur_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_editlivreur_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_5__["LivreurServiceService"]])
    ], EditlivreurComponent);
    return EditlivreurComponent;
}());



/***/ }),

/***/ "/R9e":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n  \n    \n        <!-- Card stats -->\n        \n  <!-- Page content -->\n    <!-- Table -->\n\n   \n    <div class=\"row print-container\" id=\"myDiv\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <div></div>\n\n           \n          </div>\n          <div class=\"card-header border-0\">\n             <div *ngIf=\"tester\">\n              <div class=\"row justify-content-start\">\n                <div class=\"col-4\">\n                  <img  name=\"image\" [src]=\"'data:image/jpeg;base64,' + expfil.image\" width=\"100px\" height=\"100px\">\n                </div>\n                <div class=\"col-4\">\n                  <span class=\"border border-primary\">MANIFESTE {{expfil.nomsociete}}</span>\n                </div>\n              </div>\n              \n\n\n              <div class=\"row\">\n                <div class=\"col-sm\">\n                  NOM:{{expfil.nomsociete}}\n                </div>\n                <div class=\"col-sm\">\n                  Contact:\n                </div>\n                <div class=\"col-sm\">\n                  Adresse:{{expfil.adressephysique}}\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm\">\n                  Téléphone\n                </div>\n                <div class=\"col-sm\">\n                CODE TVA:0\n                </div>\n                <div class=\"col-sm\">\n                  Date : {{myDate | date:'short'}}\n                </div>\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n             </div>\n          </div>\n          <div><br><br></div>   \n         \n         \n          <div class=\"tab\">\n            <table class=\"table \">\n              <thead class=\"thead-light\">\n         \n                <tr>\n                  <th scope=\"col\">CODECOLIS</th>\n                  <th sc0ope=\"col\">COORDONNEES CLIENT</th>\n                  <th sc0ope=\"col\">GOUVERNORAT</th>\n\n                  \n                 \n                  \n                  <th scope=\"col\"> DISPATCHER </th>\n                 <th scope=\"col\"> DESIGNATION</th>\n\n                 <th scope=\"col\"> PRIX </th>\n                \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers\">\n\n                  <td>{{colis.id }}</td>\n                  \n                  <td>{{ colis.adresse}}</td>\n\n                  <td>{{ colis.gouvernorat}}</td>\n                 \n                  \n                  \n                  \n                  <td>{{ colis.adressepickup}} -> {{ colis.adresse}} </td>\n                \n                <td>{{colis.designationproduits}}</td>\n                  <td>{{ colis.montant}}</td>\n                \n             \n              \n             \n                </tr>\n              </tbody>\n            </table>\n      <br> <br>\n     \n\n        <div class=\"col-3 text-right\">\n            <h3>         total : {{coliers.length}}colis, Total:  {{ mo }}  DT</h3>\n          </div>\n\n            <br> <br>\n\n        </div>\n  \n  \n  \n  \n      \n      \n        \n\n    </div>\n\n\n    <ng-template #filtre let-modal  class=\"jumbotron\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card-body\">\n          <form (ngSubmit)=\"onFiltre()\" #chercher=\"ngForm\">\n  \n              \n  \n  \n            <div class=\"form-row\">\n            <div class=\"col-md-4 mb-3 \">\n              <label for=\"createdAt\">Nom Société</label>\n              <select [(ngModel)] = \"f.nomsociete\" name=\"exp\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n              \n                <option  *ngFor =\"let e of exp\"[value]=\"e.nomsociete\"\n                 class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                 \n                 \n                 {{e.nomsociete}}</option>\n                </select>\n  \n  \n             \n            </div>\n            <div class=\"col-md-4 mb-3 \">\n           \n  \n              <label for=\"createdAt\">Etat colis</label>\n  \n  \n              <select [(ngModel)] = \"f.etat\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                         \n                            <option (change)=\"f.etat\" *ngFor =\"let item of items\"[value]=\"item\"\n                             class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                             \n                             \n                             {{item}}</option>\n                            </select>\n          \n            \n            </div>\n  \n            <div class=\"col-md-4 mb-3 \">\n            \n              <label for=\"createdAt\">Date</label>\n              <mat-form-field appearance=\"fill\" class=\"example-form-field\">\n                <mat-label>Enter a date range</mat-label>\n                <mat-date-range-input [rangePicker]=\"rangePicker\">\n                  <input matStartDate placeholder=\"Start date\"  [(ngModel)]=\" f.createdAt\" name=\"createdAt\">\n                  <input matEndDate placeholder=\"End date\">\n                </mat-date-range-input>\n                <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n                <mat-date-range-picker #rangePicker>\n                  <mat-date-range-picker-actions>\n                    <button mat-button matDateRangePickerCancel>Cancel</button>\n                    <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n                  </mat-date-range-picker-actions>\n                </mat-date-range-picker>\n              </mat-form-field>\n      \n              \n  \n          \n  \n            \n            </div>\n      \n      \n      \n            \n      \n      \n      \n           \n                <div class=\"row col-md-4 mb-3 \">\n                 <button type=\"submit\" \n                 class=\"btn btn-danger \" >chercher</button>\n                </div>\n                \n               \n      \n      \n      \n      \n      \n            \n              </div>\n          </form>\n        </div>\n      </div>\n     \n    </ng-template>\n\n<input class=\"btn btn-light  text-black-50 \" id =\"myPrntbtn\" type=\"button\" value=\"Print\" onclick=\"window.print();\" >\n<div id =\"myPrntbtn\" >\n<a    >\n  <span (click)=\"fil(filtre)\"><i class=\"fas fa-filter\">filtre</i></span>\n  </a> </div>");

/***/ }),

/***/ "0J/H":
/*!**************************************************************************!*\
  !*** ./src/app/pages/colisrtndepotadmin/colisrtndepotadmin.component.ts ***!
  \**************************************************************************/
/*! exports provided: ColisrtndepotadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColisrtndepotadminComponent", function() { return ColisrtndepotadminComponent; });
/* harmony import */ var _raw_loader_colisrtndepotadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./colisrtndepotadmin.component.html */ "jyS5");
/* harmony import */ var _colisrtndepotadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colisrtndepotadmin.component.css */ "5yYA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ColisrtndepotadminComponent = /** @class */ (function () {
    function ColisrtndepotadminComponent(toastr, servicedashboard, modalService, sanitizer, colisService, router, servicelivreur) {
        this.toastr = toastr;
        this.servicedashboard = servicedashboard;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.p = 1;
        this.colis = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__["Colis"];
        this.term = "";
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur"
        ];
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__["Affectationlivreur"]();
        this.coliers = [];
    }
    ColisrtndepotadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
    };
    ColisrtndepotadminComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.listertndepotalladmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    ColisrtndepotadminComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    ColisrtndepotadminComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            // console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    ColisrtndepotadminComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        //console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisrtndepotadminComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        //console.log(id);
        //console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisrtndepotadminComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //console.log(value);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    ColisrtndepotadminComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    ColisrtndepotadminComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisrtndepotadminComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisrtndepotadminComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ColisrtndepotadminComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisrtndepotadminComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisrtndepotadminComponent.prototype.consulter = function (id) {
        var _this = this;
        // console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    ColisrtndepotadminComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"] }
    ]; };
    ColisrtndepotadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-colisrtndepotadmin',
            template: _raw_loader_colisrtndepotadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_colisrtndepotadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"]])
    ], ColisrtndepotadminComponent);
    return ColisrtndepotadminComponent;
}());

//}


/***/ }),

/***/ "0oYZ":
/*!******************************************************************!*\
  !*** ./src/app/pages/retourexpadmin/retourexpadmin.component.ts ***!
  \******************************************************************/
/*! exports provided: RetourexpadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetourexpadminComponent", function() { return RetourexpadminComponent; });
/* harmony import */ var _raw_loader_retourexpadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./retourexpadmin.component.html */ "u1pL");
/* harmony import */ var _retourexpadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retourexpadmin.component.css */ "watW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var RetourexpadminComponent = /** @class */ (function () {
    function RetourexpadminComponent(toastr, servicedashboard, modalService, sanitizer, colisService, router, servicelivreur) {
        this.toastr = toastr;
        this.servicedashboard = servicedashboard;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.p = 1;
        this.colis = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__["Colis"];
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur"
        ];
        this.term = '';
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__["Affectationlivreur"]();
        this.coliers = [];
    }
    RetourexpadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
    };
    RetourexpadminComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.retourexpalladmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    RetourexpadminComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    RetourexpadminComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            // console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    RetourexpadminComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        // console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    RetourexpadminComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        // console.log(id);
        //console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    RetourexpadminComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //console.log(value);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    RetourexpadminComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    RetourexpadminComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourexpadminComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourexpadminComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RetourexpadminComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourexpadminComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourexpadminComponent.prototype.consulter = function (id) {
        var _this = this;
        //    console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    RetourexpadminComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"] }
    ]; };
    RetourexpadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-retourexpadmin',
            template: _raw_loader_retourexpadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_retourexpadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"]])
    ], RetourexpadminComponent);
    return RetourexpadminComponent;
}());

//}


/***/ }),

/***/ "1vXy":
/*!*************************************************************************!*\
  !*** ./src/app/pages/colisaudepotadmin/colisaudepotadmin.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGlzYXVkZXBvdGFkbWluL2NvbGlzYXVkZXBvdGFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "2EQ0":
/*!********************************************************************!*\
  !*** ./src/app/pages/colislivreadmin/colislivreadmin.component.ts ***!
  \********************************************************************/
/*! exports provided: ColislivreadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColislivreadminComponent", function() { return ColislivreadminComponent; });
/* harmony import */ var _raw_loader_colislivreadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./colislivreadmin.component.html */ "wzQP");
/* harmony import */ var _colislivreadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colislivreadmin.component.css */ "Hath");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ColislivreadminComponent = /** @class */ (function () {
    function ColislivreadminComponent(toastr, servicedashboard, modalService, sanitizer, colisService, router, servicelivreur) {
        this.toastr = toastr;
        this.servicedashboard = servicedashboard;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.p = 1;
        this.colis = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__["Colis"];
        this.term = "";
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur"
        ];
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__["Affectationlivreur"]();
        this.coliers = [];
    }
    ColislivreadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
    };
    ColislivreadminComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.listerlivrealladmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    ColislivreadminComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    ColislivreadminComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            // console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    ColislivreadminComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        // console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColislivreadminComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        //console.log(id);
        //console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColislivreadminComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //console.log(value);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    ColislivreadminComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    ColislivreadminComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColislivreadminComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColislivreadminComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ColislivreadminComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColislivreadminComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColislivreadminComponent.prototype.consulter = function (id) {
        var _this = this;
        // console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    ColislivreadminComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"] }
    ]; };
    ColislivreadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-colislivreadmin',
            template: _raw_loader_colislivreadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_colislivreadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"]])
    ], ColislivreadminComponent);
    return ColislivreadminComponent;
}());

//}


/***/ }),

/***/ "2TnB":
/*!*********************************************************!*\
  !*** ./src/app/pages/editcolis/editcolis.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRjb2xpcy9lZGl0Y29saXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "3zvd":
/*!***************************************************************************!*\
  !*** ./src/app/pages/listelivreuractive/listelivreuractive.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RlbGl2cmV1cmFjdGl2ZS9saXN0ZWxpdnJldXJhY3RpdmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "44Cf":
/*!******************************************************************!*\
  !*** ./src/app/pages/retourdifadmin/retourdifadmin.component.ts ***!
  \******************************************************************/
/*! exports provided: RetourdifadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetourdifadminComponent", function() { return RetourdifadminComponent; });
/* harmony import */ var _raw_loader_retourdifadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./retourdifadmin.component.html */ "e2+W");
/* harmony import */ var _retourdifadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retourdifadmin.component.css */ "VJFQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var RetourdifadminComponent = /** @class */ (function () {
    function RetourdifadminComponent(toastr, servicedashboard, modalService, sanitizer, colisService, router, servicelivreur) {
        this.toastr = toastr;
        this.servicedashboard = servicedashboard;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.p = 1;
        this.colis = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__["Colis"];
        this.term = "";
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur"
        ];
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__["Affectationlivreur"]();
        this.coliers = [];
    }
    RetourdifadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
    };
    RetourdifadminComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.retourdefinialladmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    RetourdifadminComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    RetourdifadminComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            // console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    RetourdifadminComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        // console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    RetourdifadminComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        //   console.log(id);
        // console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    RetourdifadminComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //   console.log(value);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    RetourdifadminComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    RetourdifadminComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourdifadminComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourdifadminComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RetourdifadminComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourdifadminComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourdifadminComponent.prototype.consulter = function (id) {
        var _this = this;
        // console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    RetourdifadminComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"] }
    ]; };
    RetourdifadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-retourdifadmin',
            template: _raw_loader_retourdifadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_retourdifadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"]])
    ], RetourdifadminComponent);
    return RetourdifadminComponent;
}());

//}


/***/ }),

/***/ "48Pz":
/*!***********************************************************!*\
  !*** ./src/app/pages/clientedit/clientedit.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGVkaXQvY2xpZW50ZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "55zj":
/*!**************************************************************!*\
  !*** ./src/app/pages/ajoutlivreur/ajoutlivreur.component.ts ***!
  \**************************************************************/
/*! exports provided: AjoutlivreurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutlivreurComponent", function() { return AjoutlivreurComponent; });
/* harmony import */ var _raw_loader_ajoutlivreur_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajoutlivreur.component.html */ "L5Lh");
/* harmony import */ var _ajoutlivreur_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajoutlivreur.component.css */ "NLHm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AjoutlivreurComponent = /** @class */ (function () {
    function AjoutlivreurComponent(toastr, route, router, livreurService) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.livreurService = livreurService;
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"];
    }
    AjoutlivreurComponent.prototype.ngOnInit = function () {
    };
    AjoutlivreurComponent.prototype.onSubmit = function () {
        var _this = this;
        this.livreurService.Save(this.livreur).subscribe(function (result) { return _this.gotolivreurlist(); });
        this.toastr.success('vous avez ajoute livreur');
        (function (err) { return (_this.toastr.error("erreur en cours d'ajout un livreur")); });
    };
    AjoutlivreurComponent.prototype.gotolivreurlist = function () { this.router.navigate(['/livreur']); };
    AjoutlivreurComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_6__["LivreurServiceService"] }
    ]; };
    AjoutlivreurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ajoutlivreur',
            template: _raw_loader_ajoutlivreur_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajoutlivreur_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_6__["LivreurServiceService"]])
    ], AjoutlivreurComponent);
    return AjoutlivreurComponent;
}());



/***/ }),

/***/ "5APW":
/*!****************************************************!*\
  !*** ./src/app/pages/payment/payment.component.ts ***!
  \****************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _raw_loader_payment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./payment.component.html */ "/R9e");
/* harmony import */ var _payment_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.component.css */ "ZMaJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var _models_colis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/colis */ "xv+n");
/* harmony import */ var _services_colis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/colis.service */ "9HXK");
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/client.service */ "2zjr");
/* harmony import */ var src_app_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/client */ "cof1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_models_filtre__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/models/filtre */ "QkCE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(clientservice, modalService, sanitizer, clientService, colisService, router, servicelivreur) {
        this.clientservice = clientservice;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.clientService = clientService;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.b = true;
        this.myDate = Date.now();
        this.size = 5;
        this.currentPage = 0;
        this.colis = new _models_colis__WEBPACK_IMPORTED_MODULE_4__["Colis"];
        this.i = 3;
        this.client = new src_app_client__WEBPACK_IMPORTED_MODULE_11__["Client"];
        this.disable = false;
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur",
            "livre",
            "livrepaye",
        ];
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_3__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_7__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_8__["Affectationlivreur"]();
        this.coliers = [];
        this.f = new src_app_models_filtre__WEBPACK_IMPORTED_MODULE_14__["Filtre"]();
        this.tester = false;
        this.exp = [];
        this.expfil = new src_app_client__WEBPACK_IMPORTED_MODULE_11__["Client"]();
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        }
        // err=>{console.log(err);
        );
        // console.log(this.livreurs);
        this.colisService.finallbyadmin().subscribe(function (data) {
            _this.coliers = data;
            /* for (var i=0; i < this.coliers.length;i++) {
              tot += Number(this.coliers[i].montant);
         console.log(tot);
         this.mo=tot;
         */
            var tot = 0;
            _this.coliers.forEach(function (el) {
                tot += Number(el.montant);
                console.log(tot);
            });
            _this.mo = tot;
        }, function (err) {
            console.log(err);
        });
        //  console.log(this.livreurs);
        this.monatanttotal();
        this.get2();
        //  this.git();
    };
    PaymentComponent.prototype.git = function () {
        var tot = 0;
        for (var i = 0; i < this.coliers.length; i++) {
            tot += Number(this.coliers[i].montant);
            console.log(tot);
            this.mo = tot;
        }
    };
    PaymentComponent.prototype.get2 = function () {
        var _this = this;
        this.clientService.findAll().subscribe(function (data) {
            _this.exp = data;
        });
    };
    ;
    PaymentComponent.prototype.monatanttotal = function () {
        var _this = this;
        this.colisService.soldetotaladmin().subscribe(function (data) { _this.montant = data; console.log(data); });
    };
    PaymentComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        //console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) { return _this.gotocolislist(); });
    };
    PaymentComponent.prototype.choisirlivreur = function (id, idli) {
        var _this = this;
        this.affliv.idliv = idli;
        this.affliv.codecolis = id;
        //  console.log(id);
        // console.log(this.affliv);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) { return _this.gotocolislist(); });
    };
    PaymentComponent.prototype.gotocolislist = function () { this.router.navigate(['/colis']); };
    PaymentComponent.prototype.onFiltre = function () {
        var _this = this;
        this.colisService.filtrer(this.f).subscribe(function (data) {
            _this.coliers = data;
            _this.modalService.dismissAll("finish  filtering ");
            _this.tester = true;
            _this.clientService.chercherparnomsociete(_this.f.nomsociete).subscribe(function (data) {
                _this.expfil = data;
                console.log(data);
                _this.git();
            });
        });
    };
    PaymentComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PaymentComponent.prototype.fil = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PaymentComponent.prototype.unfil = function (content) {
        this.modalService.dismissAll();
    };
    PaymentComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //console.log(value);
        //console.log(this.pages);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    PaymentComponent.prototype.setok = function () {
        this.b = !this.b;
    };
    PaymentComponent.prototype.generate = function (client) {
        var docDefinition = {
            header: '',
            content: [
                ['code : ', {
                        text: '' + client.nomsociete,
                        alignment: 'left',
                        fontSize: 12,
                        color: 'black'
                    },
                ],
            ]
        };
    };
    PaymentComponent.ctorParameters = function () { return [
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"] },
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"] },
        { type: _services_colis_service__WEBPACK_IMPORTED_MODULE_5__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_6__["LivreurServiceService"] }
    ]; };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-payment',
            template: _raw_loader_payment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_payment_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"], src_app_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"], _services_colis_service__WEBPACK_IMPORTED_MODULE_5__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_6__["LivreurServiceService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "5yYA":
/*!***************************************************************************!*\
  !*** ./src/app/pages/colisrtndepotadmin/colisrtndepotadmin.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGlzcnRuZGVwb3RhZG1pbi9jb2xpc3J0bmRlcG90YWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "7yVG":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/colisenattenteadmin/colisenattenteadmin.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGlzZW5hdHRlbnRlYWRtaW4vY29saXNlbmF0dGVudGVhZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "89A8":
/*!************************************************************!*\
  !*** ./src/app/pages/user-profil/user-profil.component.ts ***!
  \************************************************************/
/*! exports provided: UserProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilComponent", function() { return UserProfilComponent; });
/* harmony import */ var _raw_loader_user_profil_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-profil.component.html */ "IWwl");
/* harmony import */ var _user_profil_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profil.component.css */ "dV1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_models_editprofil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/editprofil */ "2qKW");
/* harmony import */ var src_app_models_information__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/information */ "NKLp");
/* harmony import */ var src_app_models_modifierpass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/modifierpass */ "1iDX");
/* harmony import */ var src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/editprofil.service */ "BXP1");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UserProfilComponent = /** @class */ (function () {
    function UserProfilComponent(toastr, http, profileSer, router) {
        this.toastr = toastr;
        this.http = http;
        this.profileSer = profileSer;
        this.router = router;
        this.profile = new src_app_models_editprofil__WEBPACK_IMPORTED_MODULE_6__["Editprofil"]();
        this.information = new src_app_models_information__WEBPACK_IMPORTED_MODULE_7__["Information"]();
        this.mod = new src_app_models_modifierpass__WEBPACK_IMPORTED_MODULE_8__["Modifierpass"]();
        this.imageUrl2 = null;
    }
    UserProfilComponent.prototype.ngOnInit = function () {
        this.get();
    };
    UserProfilComponent.prototype.get = function () {
        var _this = this;
        this.profileSer.info().subscribe(function (data) {
            _this.information = data;
            //console.log(data);
        });
    };
    UserProfilComponent.prototype.onFileChanged2 = function (event) {
        var _this = this;
        //console.log(event);
        this.selectedFile2 = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (event2) {
            _this.imageUrl2 = reader.result;
        };
    };
    UserProfilComponent.prototype.editprofile = function () {
        var _this = this;
        this.profileSer.editProfile(this.profile).subscribe(function (profile) {
            //this.bookAddedEvent.emit();
            //window.location.reload();
            _this.router.navigate(['userprofil']);
        }, function (result) { _this.toastr.success("vous avez changer votre information "); });
    };
    UserProfilComponent.prototype.editprofilewithimage = function () {
        var _this = this;
        var uploadData = new FormData();
        uploadData.append('image', this.selectedFile2, this.selectedFile2.name);
        this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].BACKEND_URL + '/user/editimage', uploadData, { observe: 'response' })
            .subscribe(function (response) {
            console.log(response);
            if (response.status === 200) {
                _this.profileSer.editProfile(_this.profile).subscribe(function (profile) {
                    //this.bookAddedEvent.emit();
                    //window.location.reload();
                    _this.router.navigate(['userprofil']);
                }, function (result) { _this.toastr.success("vous avez changer votre information "); });
                console.log('Image uploaded successfully');
            }
            else {
                console.log('Image not uploaded successfully');
            }
        });
        //  });
    };
    ;
    UserProfilComponent.prototype.Submit = function () {
        var _this = this;
        this.profileSer.editpass(this.mod).subscribe(function (result) { _this.toastr.success("vous avez changer votre mot de passe"); }, function (err) { _this.toastr.error("erreur"); });
    };
    UserProfilComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__["EditprofilService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    UserProfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-profil',
            template: _raw_loader_user_profil_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_user_profil_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_editprofil_service__WEBPACK_IMPORTED_MODULE_9__["EditprofilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserProfilComponent);
    return UserProfilComponent;
}());



/***/ }),

/***/ "94xj":
/*!******************************************************************!*\
  !*** ./src/app/pages/retourecuadmin/retourecuadmin.component.ts ***!
  \******************************************************************/
/*! exports provided: RetourecuadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetourecuadminComponent", function() { return RetourecuadminComponent; });
/* harmony import */ var _raw_loader_retourecuadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./retourecuadmin.component.html */ "pMSe");
/* harmony import */ var _retourecuadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retourecuadmin.component.css */ "B3is");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var RetourecuadminComponent = /** @class */ (function () {
    function RetourecuadminComponent(toastr, servicedashboard, modalService, sanitizer, colisService, router, servicelivreur) {
        this.toastr = toastr;
        this.servicedashboard = servicedashboard;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.p = 1;
        this.colis = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__["Colis"];
        this.term = "";
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur"
        ];
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__["Affectationlivreur"]();
        this.coliers = [];
    }
    RetourecuadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
    };
    RetourecuadminComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.retourracualladmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    RetourecuadminComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    RetourecuadminComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            // console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    RetourecuadminComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        // console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    RetourecuadminComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        //console.log(id);
        // console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    RetourecuadminComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        // console.log(value);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    RetourecuadminComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    RetourecuadminComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourecuadminComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourecuadminComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RetourecuadminComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourecuadminComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RetourecuadminComponent.prototype.consulter = function (id) {
        var _this = this;
        //console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    RetourecuadminComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"] }
    ]; };
    RetourecuadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-retourecuadmin',
            template: _raw_loader_retourecuadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_retourecuadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"]])
    ], RetourecuadminComponent);
    return RetourecuadminComponent;
}());

//}


/***/ }),

/***/ "9Af1":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editlivreur/editlivreur.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" style=\"min-height: 600px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask bg-gradient-danger opacity-8\"></span>\n    <!-- Header container -->\n    <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <h1 class=\"display-2 text-white\">Hello </h1>\n          <p class=\"text-white mt-0 mb-5\">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      \n      <div class=\"col-xl-8 order-xl-1\">\n        <div class=\"card bg-secondary shadow\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0\">My account</h3>\n              </div>\n              <div class=\"col-4 text-right\">\n                <a href=\"#!\" class=\"btn btn-sm btn-primary\">Settings</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <form (ngSubmit)=\"onSubmitt()\" >\n              <div class=\"form-group\">\n                <label for=\"name\">Nom</label>\n                <input type=\"text\" [(ngModel)]=\"l1.nom\" \n                  class=\"form-control\" \n                  id=\"name\" \n                  name=\"name\" \n                  value=\"l1.nom\"\n                 >\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"prenom\">prenom</label>\n                <input type=\"text\" [(ngModel)]=\"l1.prenom\" \n                  class=\"form-control\" \n                  id=\"prenom\" \n                  name=\"prenom\" \n                  placeholder=\"\"\n                  >\n              </div>\n           \n              <div class=\"form-group\">\n                <label for=\"adresse\">adresse</label>\n                <input type=\"text\" [(ngModel)]=\"l1.adresse\" \n                  class=\"form-control\" \n                  id=\"adresse\" \n                  name=\"adresse\" \n                  placeholder=\"\"\n                  >\n              </div>\n             \n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" [(ngModel)]=\"l1.email\" \n                  class=\"form-control\" \n                  id=\"email\" \n                  name=\"email\" \n                  placeholder=\"\"\n                  >\n               \n              </div>\n              <div class=\"form-group\">\n                <label for=\"vehicule\">vehicule</label>\n                <input type=\"text\" [(ngModel)]=\"l1.vehicule\" \n                  class=\"form-control\" \n                  id=\"vehicule\" \n                  name=\"vehicule\" \n                  placeholder=\"\"\n                \n              >\n              </div>\n              \n              <button type=\"submit\"  \n                class=\"btn btn-info\">Submit</button>\n  \n                \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "9Tbz":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientedit/clientedit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" style=\"min-height: 50px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n  <!-- Mask -->\n  <span class=\"mask bg-gradient-danger opacity-8\"></span>\n  <!-- Header container -->\n  <div class=\"container-fluid d-flex align-items-center\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-10\">\n        <h1 class=\"display-2 text-white\"></h1>\n        <p class=\"text-white mt-0 mb-5\"></p>\n      </div>\n    </div>\n  </div>\n</div> \n\n\n\n\n<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    \n    <div class=\"col-xl-8 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\"></h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a href=\"#!\" class=\"btn btn-sm btn-primary\"></a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form  >\n            <div class=\"form-group\">\n              <label for=\"name\">Nom</label>\n              <input type=\"text\" [(ngModel)]=\"l1.nomsociete\" \n                class=\"form-control\" \n                id=\"nomsociete\" \n                name=\"nomsociete\" \n                placeholder=\"{{l1.nomsociete}}\"disabled=\"\">\n               \n            </div>\n            \n            <div class=\"form-group\">\n              <label for=\" adresseemail\">E-mail</label>\n              <input type=\"text\" [(ngModel)]=\"l1.adresseemail\" \n                class=\"form-control\" \n                id=\" adresseemail\" \n                name=\" adresseemail\"  \n                placeholder=\"{{l1.adresseemail}}\" disabled=\"\">\n                \n            </div>\n         \n            <div class=\"form-group\">\n              <label for=\"adressephysique\">adresse physique</label>\n              <input type=\"text\" [(ngModel)]=\"l1.adressephysique\" \n                class=\"form-control\" \n                id=\"adressephysique\" \n                name=\"adressephysique\" \n                placeholder=\"{{l1.adressephysique}}\"\n                >\n            </div>\n           \n            <div class=\"form-group\">\n              <label for=\"immatriculation\">immatriculation</label>\n              <input type=\"text\" [(ngModel)]=\"l1.immatriculation\" \n                class=\"form-control\" \n                id=\"immatriculation\" \n                name=\"immatriculation\" \n                placeholder=\"{{l1.immatriculation}}\"\n                >\n             \n            </div>\n            \n            \n            <button type=\"submit\"  \n              class=\"btn btn-info\" (click)=\"onSubmitt()\">Enregistrer</button>\n\n              \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "A7uv":
/*!************************************************************!*\
  !*** ./src/app/pages/clientajout/clientajout.component.ts ***!
  \************************************************************/
/*! exports provided: ClientajoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientajoutComponent", function() { return ClientajoutComponent; });
/* harmony import */ var _raw_loader_clientajout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./clientajout.component.html */ "TGAz");
/* harmony import */ var _clientajout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientajout.component.css */ "wWsJ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client */ "cof1");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client.service */ "2zjr");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClientajoutComponent = /** @class */ (function () {
    function ClientajoutComponent(http, route, router, clientService, toastr) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.toastr = toastr;
        this.client = new src_app_client__WEBPACK_IMPORTED_MODULE_7__["Client"];
    }
    ClientajoutComponent.prototype.ngOnInit = function () {
    };
    ClientajoutComponent.prototype.onFileChanged2 = function (event) {
        var _this = this;
        //console.log(event);
        this.selectedFile2 = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (event2) {
            _this.imageUrl2 = reader.result;
        };
    };
    ClientajoutComponent.prototype.onSubmit = function () {
        var _this = this;
        var uploadData = new FormData();
        uploadData.append('image', this.selectedFile2, this.selectedFile2.name);
        this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].BACKEND_URL + '/cli/editimageexp', uploadData, { observe: 'response' })
            .subscribe(function (response) {
            // console.log(response);
            if (response.status === 200) {
                // console.log('yea');
                _this.clientService.save(_this.client).subscribe(function (data) {
                    _this.toastr.success('vous aves ajoute le client');
                    _this.router.navigate(['/client']);
                }, function (error) { _this.toastr.error('username ou email deja existe '); });
                //console.log('Image uploaded successfully');
            }
            else {
                _this.tester = true;
                //console.log('Image not uploaded successfully');
                _this.toastr.error("erreur");
            }
        }, function (error) {
            //console.log(error);
            _this.isError = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
            _this.toastr.error("erreur");
        });
    };
    ClientajoutComponent.prototype.gotoclientlist = function () { this.router.navigate(['/client']); };
    ClientajoutComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    ClientajoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-clientajout',
            template: _raw_loader_clientajout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_clientajout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ClientajoutComponent);
    return ClientajoutComponent;
}());



/***/ }),

/***/ "B3is":
/*!*******************************************************************!*\
  !*** ./src/app/pages/retourecuadmin/retourecuadmin.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldG91cmVjdWFkbWluL3JldG91cmVjdWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "BLKE":
/*!************************************************************!*\
  !*** ./src/app/pages/swivrecolis/swivrecolis.component.ts ***!
  \************************************************************/
/*! exports provided: SwivrecolisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwivrecolisComponent", function() { return SwivrecolisComponent; });
/* harmony import */ var _raw_loader_swivrecolis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./swivrecolis.component.html */ "TIpO");
/* harmony import */ var _swivrecolis_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swivrecolis.component.css */ "GKek");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_codecoli__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/codecoli */ "m0dX");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SwivrecolisComponent = /** @class */ (function () {
    function SwivrecolisComponent(colisservice) {
        this.colisservice = colisservice;
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur",
            "livré payeé"
        ];
        this.code = new src_app_models_codecoli__WEBPACK_IMPORTED_MODULE_3__["Codecoli"];
        this.test = false;
        this.colies = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_4__["Colis"]();
        this.tablec = [];
    }
    SwivrecolisComponent.prototype.ngOnInit = function () {
    };
    SwivrecolisComponent.prototype.onChercher = function (f) {
        var _this = this;
        // console.log(f.keyword);
        this.test = true;
        this.colisservice.Suivrecolis(f.keyword).subscribe(function (data) { _this.tablec = data; });
    };
    SwivrecolisComponent.prototype.onCherche = function (f) {
        var _this = this;
        // console.log(f.keyword);
        this.test = true;
        this.colisservice.chercheparidadmin(f.keyword).subscribe(function (data) {
            _this.colies = data;
            _this.tablec = data.etatcolis;
        });
        //console.log(this.colies);
    };
    SwivrecolisComponent.ctorParameters = function () { return [
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__["ColisService"] }
    ]; };
    SwivrecolisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-swivrecolis',
            template: _raw_loader_swivrecolis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_swivrecolis_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__["ColisService"]])
    ], SwivrecolisComponent);
    return SwivrecolisComponent;
}());



/***/ }),

/***/ "Db45":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  height: 100%;\n  margin: 0;\n}\n\n.full-height {\n  height: 100%;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjp0cmFuc3BhcmVudDsgXG59Il19 */");

/***/ }),

/***/ "ETrF":
/*!***************************************************!*\
  !*** ./src/app/pages/client/client.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "GKek":
/*!*************************************************************!*\
  !*** ./src/app/pages/swivrecolis/swivrecolis.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\r\n\r\nbody {\r\n    background-color: #eeeeee;\r\n    font-family: 'Open Sans', serif\r\n}\r\n\r\n.container {\r\n    margin-top: 50px;\r\n    margin-bottom: 50px\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    border-radius: 0.10rem\r\n}\r\n\r\n.card-header:first-child {\r\n    border-radius: calc(0.37rem - 1px) calc(0.37rem - 1px) 0 0\r\n}\r\n\r\n.card-header {\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1)\r\n}\r\n\r\n.track {\r\n    position: relative;\r\n    background-color: #ddd;\r\n    height: 7px;\r\n    display: flex;\r\n    margin-bottom: 60px;\r\n    margin-top: 50px\r\n}\r\n\r\n.track .step {\r\n    flex-grow: 1;\r\n    width: 25%;\r\n    margin-top: -18px;\r\n    text-align: center;\r\n    position: relative\r\n}\r\n\r\n.track .step.active:before {\r\n    background: #b12d04\r\n}\r\n\r\n.track .step::before {\r\n    height: 7px;\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 100%;\r\n    left: 0;\r\n    top: 18px\r\n}\r\n\r\n.track .step.active .icon {\r\n    background: #aa260c;\r\n    color: #fff\r\n}\r\n\r\n.track .icon {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    position: relative;\r\n    border-radius: 100%;\r\n    background: #ddd\r\n}\r\n\r\n.track .step.active .text {\r\n    font-weight: 200;\r\n    display: inline-block;\r\n    color: #000;\r\n    margin-right: 7px;\r\n\r\n}\r\n\r\n.track .text {\r\n    display: block;\r\n    margin-top: 7px;\r\n    font-weight: 200;\r\n}\r\n\r\n.itemside {\r\n    position: relative;\r\n    display: flex;\r\n    width: 100%\r\n}\r\n\r\n.itemside .aside {\r\n    position: relative;\r\n    flex-shrink: 0\r\n}\r\n\r\n.img-sm {\r\n    width: 80px;\r\n    height: 80px;\r\n    padding: 7px\r\n}\r\n\r\nul.row,\r\nul.row-sm {\r\n    list-style: none;\r\n    padding: 0\r\n}\r\n\r\n.itemside .info {\r\n    padding-left: 15px;\r\n    padding-right: 7px\r\n}\r\n\r\n.itemside .title {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    color: #212529\r\n}\r\n\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem\r\n}\r\n\r\n.btn-warning {\r\n    color: #ffffff;\r\n    background-color: #ee5435;\r\n    border-color: #ee5435;\r\n    border-radius: 1px\r\n}\r\n\r\n.btn-warning:hover {\r\n    color: #ffffff;\r\n    background-color: #ff2b00;\r\n    border-color: #ff2b00;\r\n    border-radius: 1px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3dpdnJlY29saXMvc3dpdnJlY29saXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkU7O0FBRTdFO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUdsQixhQUFhO0lBSWIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBR1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBR0ksWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUDtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBR2xCLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBRWxCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zd2l2cmVjb2xpcy9zd2l2cmVjb2xpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHhcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xMHJlbVxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYygwLjM3cmVtIC0gMXB4KSBjYWxjKDAuMzdyZW0gLSAxcHgpIDAgMFxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpXHJcbn1cclxuXHJcbi50cmFjayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4XHJcbn1cclxuXHJcbi50cmFjayAuc3RlcCB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLnRyYWNrIC5zdGVwLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogI2IxMmQwNFxyXG59XHJcblxyXG4udHJhY2sgLnN0ZXA6OmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDE4cHhcclxufVxyXG5cclxuLnRyYWNrIC5zdGVwLmFjdGl2ZSAuaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWEyNjBjO1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnRyYWNrIC5pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2RkZFxyXG59XHJcblxyXG4udHJhY2sgLnN0ZXAuYWN0aXZlIC50ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG5cclxufVxyXG5cclxuLnRyYWNrIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLml0ZW1zaWRlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLml0ZW1zaWRlIC5hc2lkZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwXHJcbn1cclxuXHJcbi5pbWctc20ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHhcclxufVxyXG5cclxudWwucm93LFxyXG51bC5yb3ctc20ge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLml0ZW1zaWRlIC5pbmZvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweFxyXG59XHJcblxyXG4uaXRlbXNpZGUgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgY29sb3I6ICMyMTI1MjlcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU1NDM1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWU1NDM1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4XHJcbn1cclxuXHJcbi5idG4td2FybmluZzpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjJiMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjJiMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHhcclxufSJdfQ== */");

/***/ }),

/***/ "Hath":
/*!*********************************************************************!*\
  !*** ./src/app/pages/colislivreadmin/colislivreadmin.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGlzbGl2cmVhZG1pbi9jb2xpc2xpdnJlYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Hl82":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listeexpdesactive/listeexpdesactive.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      \n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">liste client</h3>\n        </div>\n        \n       <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\" >\n                  \n                  <span class=\"input-group-text btn-inner--icon\" type=\"Submit\" (click)= \"onChercher(f.value)\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n\n      <div class=\"row mt-5\">\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <th scope=\"col\"> codeClient</th>\n              <th scope=\"col\"> logo</th>\n              <th scope=\"col\">nomSociete</th>\n              <th scope=\"col\">AdresseEmail</th>\n              <th scope=\"col\"> AdressePhysique</th>\n              <th scope=\"col\"> immatriculationFiscale</th>\n\n              <th scope=\"col\"> actions</th>\n              <th scope=\"col\"> edit</th>\n            </thead>\n            <tbody>\n              \n                <tr *ngFor=\"let client of clients   | paginate: config\">\n                  <td  scope=\"row\">{{ client.codeClient }}</td>\n\n\n                  <td> <img  name=\"image\" [src]=\"'data:image/jpeg;base64,' + client.image\" width=\"100px\" height=\"100px\"></td>\n                  <td  scope=\"row\"> {{ client.nomsociete }}</td>\n                  <td  scope=\"row\"><a href=\"mailto:{{ client.AdresseEmail }}\">{{ client.adresseemail }}</a></td>\n                  <td scope=\"row\" >{{ client.adressephysique }}</td>\n                  <td scope=\"row\">{{ client.immatriculation }}</td>\n\n                  <td  *ngIf=\"client.action\" >\n\n                    <i class=\"fas fa-toggle-on  text-blue text-lg\" (click)=\"activer(client)\"></i>\n\n                  \n                </td>\n\n                <td  *ngIf=\"!client.action\" >\n\n                  <i class=\"fas fa-toggle-off text-blue text-lg\" (click)=\"activer(client)\"></i>\n\n                \n              </td>\n              <td scope=\"row\">\n              \n\n                <!-- <ul>          -->\n                  <ng-template #content let-modal>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\" id=\"modal-basic-title\">Modifier le client</h4>\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"card-body\">\n                        <form  >\n                          <div class=\"form-group\">\n                            <label for=\"name\">Nom</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.nomsociete\" \n                              class=\"form-control\" \n                              id=\"nomsociete\" \n                              name=\"nomsociete\" \n                              placeholder=\"{{client.nomsociete}}\"disabled=\"\">\n                             \n                          </div>\n                        \n                          <div class=\"form-group\">\n                            <label for=\" adresseemail\">E-mail</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.adresseemail\" \n                              class=\"form-control\" \n                              id=\" adresseemail\" \n                              name=\" adresseemail\"  \n                              placeholder=\"{{  client.adresseemail }}\" disabled=\"\">\n                              \n                          </div>\n                       \n                          <div class=\"form-group\">\n                            <label for=\"adressephysique\">adresse physique</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.adressephysique\" \n                              class=\"form-control\" \n                              id=\"adressephysique\" \n                              name=\"adressephysique\" \n                              placeholder=\"{{client.adressephysique}}\"\n                              >\n                          </div>\n                         \n                          <div class=\"form-group\">\n                            <label for=\"immatriculation\">immatriculation</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.immatriculation\" \n                              class=\"form-control\" \n                              id=\"immatriculation\" \n                              name=\"immatriculation\" \n                              placeholder=\"{{client.immatriculation}}\"\n                              >\n                           \n                          </div>\n                          <div class=\"modal-footer\">\n                          <button type=\"submit\"  \n                          class=\"btn btn-danger \" (click)=\"onSubmitt(client.codeClient)\"placement=\"top\"\n                          ngbPopover=\"vous avez modifier les donées\">\n                    \n                    \n                            <span class=\"btn-inner--icon\"><i class=\"fas fa-check-square\">Modifier</i></span></button>\n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                   \n                  </ng-template>\n                  \n                  \n                 \n                  <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"open(content)\">\n                    \n                    \n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\">Modifier</i></span></button>\n                  \n                <!--   <hr>\n        \n                </ul>\n\n\n\n\n                <a routerLinkActive=\"active\" [routerLink]=\"['/clientedit',client.codeClient]\" (click)=\"open(content)\">\n                  \n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\"></i></span>\n               \n                  \n                </a> -->\n              </td>\n              </tr>\n            </tbody>\n          </table>\n          \n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\n        </div>\n          \n          \n          <!--editer-->\n         \n          <!--fin editer-->\n<!-- \n         \n          \n        </div>\n          \n          \n\n          </table>\n\n          <ul class=\"pagination justify-content-end mb-0\">\n              \n            <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n              \n              <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                    \n            </nav></ul>\n             -->\n          \n        </div>\n      </div> \n\n\n\n\n    \n    \n    </div>\n  </div>\n\n");

/***/ }),

/***/ "IWwl":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profil/user-profil.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" style=\"min-height: 600px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n  <!-- Mask -->\n  <span class=\"mask bg-gradient-danger opacity-8\"></span>\n  <!-- Header container -->\n  <div class=\"container-fluid d-flex align-items-center\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-10\">\n        <h1 class=\"display-2 text-white\">Bonjour {{information.username}} </h1>\n        <p class=\"text-white mt-0 mb-5\"></p>\n       \n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 order-xl-2 mb-5 mb-xl-0\">\n      <div class=\"card card-profile shadow\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-3 order-lg-2\">\n            <div class=\"card-profile-image\">\n              <a href=\"javascript:void(0)\">\n                \n               \n                <img [src]=\"imageUrl2\" class=\"rounded-circle\" *ngIf=\"imageUrl2 else imagedefual\">\n\n                <ng-template #imagedefual>\n                  <img  name=\"image\" [src]=\"'data:image/jpeg;base64,'+information.image\" class=\"rounded-circle\" >\n                </ng-template>\n\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\n         \n          <div class=\"d-flex justify-content-between\">\n      \n            \n            <!-- <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a> -->\n          </div>\n        </div>\n        <div class=\"card-body pt-0 pt-md-4\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card-profile-stats d-flex justify-content-center mt-md-5\">\n           \n              </div>\n            </div>\n          </div>\n          <br>\n          <br>\n          <br>\n          <div class=\"mb-3\">\n            <input class=\"form-control form-control-lg form-control-color\"   type=\"file\" (change)=\"onFileChanged2($event)\">\n           </div>    \n  \n          <div class=\"text-center\">\n            <h3>\n              {{information.prenom}}<span class=\"font-weight-light\">, {{information.nom}}</span>\n            </h3>\n           \n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <div class=\"col-xl-8 order-xl-1\">\n        <div class=\"card bg-secondary shadow\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0\">My account</h3>\n              </div>\n              <div class=\"col-4 text-right\">\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <form  >\n              <h6 class=\"heading-small text-muted mb-4\">User information</h6>\n              <div class=\"pl-lg-4\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-username\">Username</label>\n                      <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Username\" value=\"{{information.username}} \" class=\"form-control\" disabled=\"\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-email\">Email address</label>\n                      <input type=\"email\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"{{information.email}} \" class=\"form-control\" disabled=\"\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-first-name\">Prenom</label>\n                      <input type=\"text\" [(ngModel)]=\"profile.prenom\"  [ngModelOptions]=\"{standalone: true}\" id=\"input-first-name\"  class=\"form-control form-control-alternative\" placeholder=\"First name\" value=\"{{information.prenom}}\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-last-name\">Nom</label>\n                      <input type=\"text\"  [(ngModel)]=\"profile.nom\"  [ngModelOptions]=\"{standalone: true}\"id=\"input-last-name\"  class=\"form-control form-control-alternative\" placeholder=\"Last name\" value=\"{{information.nom}}\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <hr class=\"my-4\" />\n              <!-- Address -->\n              <h6 class=\"heading-small text-muted mb-4\">Contact information</h6>\n              <div class=\"pl-lg-4\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-address\">Address</label>\n                      <input id=\"input-address\"  [(ngModel)]=\"profile.adresse\"  class=\"form-control form-control-alternative\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Home Address\" value=\"{{information.adresse}}\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-city\">ville</label>\n                      <input type=\"text\"  [(ngModel)]=\"profile.ville\" id=\"input-city\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control form-control-alternative\" placeholder=\"City\" value=\"{{information.ville}}\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-country\">gouvernorat</label>\n                      <input type=\"text\" [(ngModel)]=\"profile.gouvernorat\"  id=\"input-country\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control form-control-alternative\" placeholder=\"Country\" value=\"{{information.gouvernorat}}\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-country\">Postal code</label>\n                      <input type=\"number\" [(ngModel)]=\"profile.codepostal\" id=\"input-postal-code\"[ngModelOptions]=\"{standalone: true}\" class=\"form-control form-control-alternative\" placeholder=\"{{information.codepostal}}\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-country\">tel</label>\n                      <input type=\"number\" [(ngModel)]=\"profile.tel\" id=\"input-postal-code\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control form-control-alternative\" placeholder=\"{{information.tel}}\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n            <button class=\"btn btn-sm btn-primary\"  type=\"submit\"  *ngIf=\"!imageUrl2\" (click)=\"editprofile()\">Enregistrer</button>\n            <button class=\"btn btn-sm btn-primary\"  type=\"submit\" *ngIf=\"imageUrl2\"  (click)=\"editprofilewithimage()\">Enregistrer with image</button>\n              <hr class=\"my-4\" />\n              <h6 class=\"heading-small text-muted mb-4\">Modifier mot de passe</h6>\n              <div class=\"pl-lg-4\">\n              <form>\n                <div class=\"row\">\n                 \n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n\n                      <label class=\"form-control-label\" for=\"input-email\">Email address</label>\n                      <input type=\"email\" id=\"input-email\" [(ngModel)]=\"mod.email\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control form-control-alternative\" placeholder=\"{{information.email}}\" class=\"form-control\" disabled=\"\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-ancienpassword\">Ancien Password</label>\n                      <input type=\"password\" [(ngModel)]=\"mod.ancienpassword\"  [ngModelOptions]=\"{standalone: true}\"id=\"input-ancienpassword\"  class=\"form-control form-control-alternative\" placeholder=\"Ancien password\" value=\"{{mod.ancienpassword}}\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                \n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-nouveaupassword\">nouveau password</label>\n                      <input type=\"password\" [(ngModel)]=\"mod.nouveaupassword\"  [ngModelOptions]=\"{standalone: true}\"id=\"input-nouveaupassword\"  class=\"form-control form-control-alternative\" placeholder=\"Nouveau password\" value=\"{{mod.nouveaupassword}}\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-repassword\">repassword</label>\n                      <input type=\"password\" [(ngModel)]=\"mod.repassword\" id=\"input-repassword\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control form-control-alternative\" placeholder=\"repassword\" value=\"{{repassword}}\">\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <button class=\"btn btn-sm btn-primary\"  type=\"submit\"  (click)=\"Submit()\">Modifier</button>\n              <!-- Description -->\n             <!--  <h6 class=\"heading-small text-muted mb-4\">About me</h6>\n              <div class=\"pl-lg-4\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"4\" class=\"form-control form-control-alternative\" placeholder=\"A few words about you ...\">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>\n                </div>\n              </div> -->\n         \n          </div>\n          \n\n          </div>\n\n\n\n\n\n\n");

/***/ }),

/***/ "IeR/":
/*!*****************************************************!*\
  !*** ./src/app/pages/livreur/livreur.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpdnJldXIvbGl2cmV1ci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Igjt":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ajoutcolis/ajoutcolis.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" style=\"min-height: 600px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask bg-gradient-danger opacity-8\"></span>\n    <!-- Header container -->\n    <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <h1 class=\"display-2 text-white\">Hello </h1>\n          <p class=\"text-white mt-0 mb-5\">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>\n          <a href=\"#!\" class=\"btn btn-info\">Edit</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      \n      <div class=\"col-xl-8 order-xl-1\">\n        <div class=\"card bg-secondary shadow\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0\">My account</h3>\n              </div>\n              <div class=\"col-4 text-right\">\n                <a href=\"#!\" class=\"btn btn-sm btn-primary\">Settings</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n        \n             <form (ngSubmit)=\"onSubmit()\" #colisForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"prenom\">prenom</label>\n          <input type=\"text\" [(ngModel)]=\"l1.prenom\" \n            class=\"form-control\" \n            id=\"prenom\" \n            name=\"prenom\" \n            placeholder=\"Saisire prenom\"\n            required #Codecolis=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"nom\">nom</label>\n            <input type=\"text\" [(ngModel)]=\"l1.nom\" \n              class=\"form-control\" \n              id=\"nom\" \n              name=\"nom\" \n              placeholder=\"Saisire nom\"\n              required #Codecolis=\"ngModel\">\n          </div>\n     <!--    <div class=\"form-group\">\n            <label for=\"Codecolis\">Codecolis</label>\n            <input type=\"text\" [(ngModel)]=\"l1.id\" \n              class=\"form-control\" \n              id=\"Codecolis\" \n              name=\"nCodecolis\" \n              placeholder=\"Saisire Codecolis\"\n              required #Codecolis=\"ngModel\">\n          </div> -->\n      \n        <div class=\"form-group\">\n          <label for=\"numtel\">numtel</label>\n          <input type=\"text\" [(ngModel)]=\"l1.numtel\" \n            class=\"form-control\" \n            id=\"numtel\" \n            name=\"numtel\" \n            placeholder=\"Saisire numtel\"\n            required #numtel=\"ngModel\">\n        </div>\n        \n        <div class=\"form-group\">\n          <label for=\"adresse\">adresse</label>\n          <input type=\"text\" [(ngModel)]=\"l1.adresse\" \n            class=\"form-control\" \n            id=\"adresse\" \n            name=\"adresse\" \n            placeholder=\"Saisire votre adresse\"\n            required #adresse=\"ngModel\">\n        </div>\n       \n  \n  \n  \n        \n  \n  \n          <div class=\"form-group\">\n            <label for=\" deuxiemenumtel\"> deuxiemenumtel</label>\n            <input type=\"text\" [(ngModel)]=\"l1.deuxiemenumtel\" \n              class=\"form-control\" \n              id=\" deuxiemenumtel\" \n              name=\" deuxiemenumtel\" \n              placeholder=\"Saisire  deuxiemenumtel\"\n              required #deuxiemenumtel=\"ngModel\">\n          </div>\n        \n        <div class=\"form-group\">\n          <label for=\" adressepickup\"> adressepickup</label>\n          <input type=\"text\" [(ngModel)]=\"l1.adressepickup\" \n            class=\"form-control\" \n            id=\" adressepickup\" \n            name=\" adressepickup\" \n            placeholder=\"Saisire  adressepickup\"\n            required #adressepickup=\"ngModel\">\n        </div>\n  \n        <div class=\"form-group\">\n        <select [(ngModel)] = \"l1.gouvernorat\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n          <option selected>Choose...</option>\n          <option (change)=\"l1.gouvernorat\" *ngFor =\"let item of items\"[value]=\"item\"\n           class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n           \n           \n           {{item}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\" gouvernorat\"> gouvernorat</label>\n            <input type=\"text\" [(ngModel)]=\"l1.gouvernorat\" \n              class=\"form-control\" \n              id=\" gouvernorat\" \n              name=\"gouvernorat\" \n              placeholder=\"Saisire  gouvernorat\"\n              required #gouvernorat=\"ngModel\">\n          </div>\n\n\n\n          <div class=\"form-group\">\n            <label for=\"designationproduits\">designationproduits</label>\n            <input type=\"text\" [(ngModel)]=\"l1.designationproduits\" \n              class=\"form-control\" \n              id=\"designationproduits\" \n              name=\"designationproduits\" \n              placeholder=\"Saisiredesignationproduits\"\n              required #designationproduits=\"ngModel\">\n          </div>\n\n\n\n          <div class=\"form-group\">\n            <label for=\" remarque\"> remarque</label>\n            <input type=\"text\" [(ngModel)]=\"l1.remarque\" \n              class=\"form-control\" \n              id=\" remarque\" \n              name=\"remarque\" \n              placeholder=\"Saisire remarque\"\n              required #remarque=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\" adressemail\">adressemail</label>\n            <input type=\"text\" [(ngModel)]=\"l1.adressemail\" \n              class=\"form-control\" \n              id=\" adressemail\" \n              name=\"adressemail\" \n              placeholder=\"Saisire adressemail\"\n              required #adressemail=\"ngModel\">\n          </div>\n\n          \n          <div class=\"form-group\">\n            <label for=\"montant\">montant</label>\n            <input type=\"text\" [(ngModel)]=\"l1.montant\" \n              class=\"form-control\" \n              id=\"montant\" \n              name=\"montant\" \n              placeholder=\"Saisire montant\"\n              required #montant=\"ngModel\">\n          </div>\n       \n\n\n          <div class=\"form-group\">\n            <label for=\"frais\">fraislivraison</label>\n            <input type=\"text\" [(ngModel)]=\"l1.fraislivraison\" \n              class=\"form-control\" \n              id=\"frais\" \n              name=\"frais\"\n              placeholder=\"Saisire frais de livraison\"\n              required #montant=\"ngModel\">\n          </div>\n       \n         <button type=\"submit\" [disabled]=\"!colisForm.form.valid\" \n          class=\"btn btn-outline-danger\">Enregistrer</button>\n      </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _pages_swivrecolis_swivrecolis_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/swivrecolis/swivrecolis.component */ "BLKE");
/* harmony import */ var _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/payment/payment.component */ "5APW");
/* harmony import */ var src_app_pages_colis_colis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/colis/colis.component */ "L6bN");
/* harmony import */ var src_app_pages_client_client_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/client/client.component */ "V48J");
/* harmony import */ var src_app_pages_livreur_livreur_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/livreur/livreur.component */ "trcn");
/* harmony import */ var src_app_pages_editlivreur_editlivreur_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pages/editlivreur/editlivreur.component */ "/OHS");
/* harmony import */ var src_app_pages_ajoutlivreur_ajoutlivreur_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/pages/ajoutlivreur/ajoutlivreur.component */ "55zj");
/* harmony import */ var src_app_pages_ajoutcolis_ajoutcolis_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pages/ajoutcolis/ajoutcolis.component */ "kxCL");
/* harmony import */ var src_app_pages_editcolis_editcolis_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/pages/editcolis/editcolis.component */ "SQt0");
/* harmony import */ var src_app_pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/pages/notification/notification.component */ "rc6o");
/* harmony import */ var src_app_pages_listelireurdesactive_listelireurdesactive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/pages/listelireurdesactive/listelireurdesactive.component */ "tLx9");
/* harmony import */ var src_app_pages_listeexpactive_listeexpactive_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/pages/listeexpactive/listeexpactive.component */ "OivC");
/* harmony import */ var src_app_pages_listeexpdesactive_listeexpdesactive_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/pages/listeexpdesactive/listeexpdesactive.component */ "VhAz");
/* harmony import */ var src_app_pages_colisenattenteadmin_colisenattenteadmin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/pages/colisenattenteadmin/colisenattenteadmin.component */ "N3FB");
/* harmony import */ var src_app_pages_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/pages/user-profil/user-profil.component */ "89A8");
/* harmony import */ var src_app_pages_clientajout_clientajout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/pages/clientajout/clientajout.component */ "A7uv");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "Xm0J");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var src_app_pages_listelivreuractive_listelivreuractive_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/pages/listelivreuractive/listelivreuractive.component */ "f/xT");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var src_app_pages_colisaudepotadmin_colisaudepotadmin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/pages/colisaudepotadmin/colisaudepotadmin.component */ "mTDM");
/* harmony import */ var src_app_pages_colisencoursadmin_colisencoursadmin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/pages/colisencoursadmin/colisencoursadmin.component */ "xh5k");
/* harmony import */ var src_app_pages_colislivreadmin_colislivreadmin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/pages/colislivreadmin/colislivreadmin.component */ "2EQ0");
/* harmony import */ var src_app_pages_colisrtndepotadmin_colisrtndepotadmin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/pages/colisrtndepotadmin/colisrtndepotadmin.component */ "0J/H");
/* harmony import */ var src_app_pages_retourecuadmin_retourecuadmin_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/pages/retourecuadmin/retourecuadmin.component */ "94xj");
/* harmony import */ var src_app_pages_retourdifadmin_retourdifadmin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/pages/retourdifadmin/retourdifadmin.component */ "44Cf");
/* harmony import */ var src_app_pages_retourexpadmin_retourexpadmin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/pages/retourexpadmin/retourexpadmin.component */ "0oYZ");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var src_app_pages_chartadmin_chartadmin_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/pages/chartadmin/chartadmin.component */ "++bA");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "ZwAT");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng2-date-picker */ "i2NW");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_pages_printcolisadmin_printcolisadmin_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! src/app/pages/printcolisadmin/printcolisadmin.component */ "+kP5");
/* harmony import */ var src_app_pages_ordredemission_ordredemission_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! src/app/pages/ordredemission/ordredemission.component */ "QOaE");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































// import { ToastrModule } from 'ngx-toastr';
//import { DatepickerModule } from 'ng2-datepicker';
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ng2_date_picker__WEBPACK_IMPORTED_MODULE_40__["DpDatePickerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_25__["WindowModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_26__["ButtonsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_41__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_27__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_29__["Ng2SearchPipeModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_37__["ChartsModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_39__["CalendarModule"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_39__["DateInputsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_45__["MatNativeDateModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_46__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_47__["MatFormFieldModule"],
                //MatInputModule,
                _angular_material_core__WEBPACK_IMPORTED_MODULE_45__["MatRippleModule"],
            ],
            declarations: [
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                src_app_pages_ajoutlivreur_ajoutlivreur_component__WEBPACK_IMPORTED_MODULE_15__["AjoutlivreurComponent"],
                // TablesComponent,
                //IconsComponent,
                //MapsComponent,
                src_app_pages_editlivreur_editlivreur_component__WEBPACK_IMPORTED_MODULE_14__["EditlivreurComponent"],
                src_app_pages_livreur_livreur_component__WEBPACK_IMPORTED_MODULE_13__["LivreurComponent"],
                _pages_swivrecolis_swivrecolis_component__WEBPACK_IMPORTED_MODULE_9__["SwivrecolisComponent"],
                src_app_pages_client_client_component__WEBPACK_IMPORTED_MODULE_12__["ClientComponent"], src_app_pages_clientajout_clientajout_component__WEBPACK_IMPORTED_MODULE_24__["ClientajoutComponent"],
                src_app_pages_livreur_livreur_component__WEBPACK_IMPORTED_MODULE_13__["LivreurComponent"],
                src_app_pages_ajoutcolis_ajoutcolis_component__WEBPACK_IMPORTED_MODULE_16__["AjoutcolisComponent"],
                _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_10__["PaymentComponent"], src_app_pages_colis_colis_component__WEBPACK_IMPORTED_MODULE_11__["ColisComponent"],
                src_app_pages_ajoutcolis_ajoutcolis_component__WEBPACK_IMPORTED_MODULE_16__["AjoutcolisComponent"], src_app_pages_editcolis_editcolis_component__WEBPACK_IMPORTED_MODULE_17__["EditcolisComponent"], src_app_pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_18__["NotificationComponent"], src_app_pages_listeexpactive_listeexpactive_component__WEBPACK_IMPORTED_MODULE_20__["ListeexpactiveComponent"],
                src_app_pages_listeexpdesactive_listeexpdesactive_component__WEBPACK_IMPORTED_MODULE_21__["ListeexpdesactiveComponent"],
                src_app_pages_listelireurdesactive_listelireurdesactive_component__WEBPACK_IMPORTED_MODULE_19__["ListelireurdesactiveComponent"], src_app_pages_listelireurdesactive_listelireurdesactive_component__WEBPACK_IMPORTED_MODULE_19__["ListelireurdesactiveComponent"],
                src_app_pages_colisenattenteadmin_colisenattenteadmin_component__WEBPACK_IMPORTED_MODULE_22__["ColisenattenteadminComponent"], src_app_pages_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_23__["UserProfilComponent"], src_app_pages_listelivreuractive_listelivreuractive_component__WEBPACK_IMPORTED_MODULE_28__["ListelivreuractiveComponent"],
                src_app_pages_colisaudepotadmin_colisaudepotadmin_component__WEBPACK_IMPORTED_MODULE_30__["ColisaudepotadminComponent"], src_app_pages_colisencoursadmin_colisencoursadmin_component__WEBPACK_IMPORTED_MODULE_31__["ColisencoursadminComponent"], src_app_pages_colislivreadmin_colislivreadmin_component__WEBPACK_IMPORTED_MODULE_32__["ColislivreadminComponent"], src_app_pages_colisrtndepotadmin_colisrtndepotadmin_component__WEBPACK_IMPORTED_MODULE_33__["ColisrtndepotadminComponent"],
                src_app_pages_retourecuadmin_retourecuadmin_component__WEBPACK_IMPORTED_MODULE_34__["RetourecuadminComponent"], src_app_pages_retourdifadmin_retourdifadmin_component__WEBPACK_IMPORTED_MODULE_35__["RetourdifadminComponent"], src_app_pages_retourexpadmin_retourexpadmin_component__WEBPACK_IMPORTED_MODULE_36__["RetourexpadminComponent"], src_app_pages_chartadmin_chartadmin_component__WEBPACK_IMPORTED_MODULE_38__["ChartadminComponent"],
                src_app_pages_printcolisadmin_printcolisadmin_component__WEBPACK_IMPORTED_MODULE_42__["PrintcolisadminComponent"], src_app_pages_ordredemission_ordredemission_component__WEBPACK_IMPORTED_MODULE_43__["OrdredemissionComponent"],
            ],
            exports: [src_app_pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_18__["NotificationComponent"], src_app_pages_clientajout_clientajout_component__WEBPACK_IMPORTED_MODULE_24__["ClientajoutComponent"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_46__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_47__["MatFormFieldModule"],
                //MatInputModule,
                _angular_material_core__WEBPACK_IMPORTED_MODULE_45__["MatRippleModule"],],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            bootstrap: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], src_app_pages_printcolisadmin_printcolisadmin_component__WEBPACK_IMPORTED_MODULE_42__["PrintcolisadminComponent"], src_app_pages_listelivreuractive_listelivreuractive_component__WEBPACK_IMPORTED_MODULE_28__["ListelivreuractiveComponent"], src_app_pages_retourdifadmin_retourdifadmin_component__WEBPACK_IMPORTED_MODULE_35__["RetourdifadminComponent"], src_app_pages_retourexpadmin_retourexpadmin_component__WEBPACK_IMPORTED_MODULE_36__["RetourexpadminComponent"], src_app_pages_colis_colis_component__WEBPACK_IMPORTED_MODULE_11__["ColisComponent"], src_app_pages_retourecuadmin_retourecuadmin_component__WEBPACK_IMPORTED_MODULE_34__["RetourecuadminComponent"], src_app_pages_client_client_component__WEBPACK_IMPORTED_MODULE_12__["ClientComponent"], src_app_pages_livreur_livreur_component__WEBPACK_IMPORTED_MODULE_13__["LivreurComponent"], src_app_pages_colisrtndepotadmin_colisrtndepotadmin_component__WEBPACK_IMPORTED_MODULE_33__["ColisrtndepotadminComponent"], src_app_pages_colisaudepotadmin_colisaudepotadmin_component__WEBPACK_IMPORTED_MODULE_30__["ColisaudepotadminComponent"], src_app_pages_colisencoursadmin_colisencoursadmin_component__WEBPACK_IMPORTED_MODULE_31__["ColisencoursadminComponent"]],
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "Ixm7":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header  pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      \n    \n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5>colis En attente</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">{{x}}</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i>\n                  <a routerLinkActive=\"active\" [routerLink]=\"['/colisenattenteadmin']\"> voir</a></span>\n                <span class=\"text-nowrap\">tous liste</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 > Colis Au dépôt</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">{{depot}}</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i>  <a routerLinkActive=\"active\" [routerLink]=\"['/colisaudepotadmin']\"> voir</a></span>\n                <span class=\"text-nowrap\">la liste</span>\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 >Colis En Cours</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">{{ encours }}</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> <a routerLinkActive=\"active\" [routerLink]=\"['/colisencoursadmin']\"> voir</a></span>\n                <span class=\"text-nowrap\">la liste</span>\n              </p>\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row  align-items-center\">\n                <div class=\"col\">\n                  <h5 >Colis RTN dépôt</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">{{rtndepot}}</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> <a routerLinkActive=\"active\" [routerLink]=\"['/colisrtnadmin']\"> voir</a></span>\n                <span class=\"text-nowrap\">la liste</span>\n              </p>\n            </div>\n          </div>\n        </div>\n\n      \n\n\n\n\n\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 >Colis   livrés</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">{{livre}}</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> <a routerLinkActive=\"active\" [routerLink]=\"['/colislivreadmin']\"> voir</a></span>\n                <span class=\"text-nowrap\">la liste</span>\n              </p>\n            </div>\n          </div>\n        </div>\n\n\n\n\n\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 > Retour Recu</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">{{recuretour}}</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i>  <a routerLinkActive=\"active\" [routerLink]=\"['/colisretourecu']\"> voir</a></span>\n                <span class=\"text-nowrap\">la liste</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 > Retour Définitif</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">{{ recudef }}</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i>  <a routerLinkActive=\"active\" [routerLink]=\"['/colisdifadmin']\"> voir</a></span>\n                <span class=\"text-nowrap\">la liste</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"text-sm\">Retour Expéditeur</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">{{recuexp}}</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i>  <a routerLinkActive=\"active\" [routerLink]=\"['/colisexpadmin']\"> voir</a></span>\n                <span class=\"text-nowrap\">liste</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-8 mb-5 mb-xl-0\">\n      <div class=\"card bg-gradient-default shadow\">\n        <div class=\"card-header bg-transparent\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h6 class=\"text-uppercase text-light ls-1 mb-1\"></h6>\n              <h2 class=\"text-white mb-0\"></h2>\n            </div>\n            <div class=\"col\">\n              \n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <!-- Chart -->\n          <div class=\"chart\">\n            <!-- Chart wrapper -->\n            <app-chartadmin></app-chartadmin>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4\">\n      <div class=\"card shadow\">\n        <div class=\"card-header bg-transparent\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h6 class=\"text-uppercase text-muted ls-1 mb-1\">Performance</h6>\n              <h2 class=\"mb-0\">Total orders</h2>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-xl-8 mb-5 mb-xl-0\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h3 class=\"mb-0\">votre solde :{{solde}}</h3>\n            </div>\n            <div class=\"col text-right\">\n              <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n                <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n                    (blur)=\"focus = false\" name=\"search\" >\n                  </div>\n                  \n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <!-- Projects table -->\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">code colis</th>\n                <th scope=\"col\">date</th>\n                <th scope=\"col\">prix colis</th>\n                <th scope=\"col\">frais de lvraison</th>\n                \n              </tr>\n            </thead>\n\n            <tbody>\n              <tr  *ngFor=\"let colis of coliers   | paginate:  { itemsPerPage: 5, currentPage: p, totalItems: coliers.length } | filter:term  \" >\n                \n                <td>\n                 {{colis.id}}\n                </td>\n                <td>\n                  {{colis.date | date:'medium' }}\n                </td>\n                <td>\n                 {{colis.montant}}TND\n                </td>\n                <td>\n                  {{colis.fraislivraison}}TND\n                </td>\n               \n              \n              </tr>\n              \n    \n \n            </tbody>\n          </table>\n          \n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"col-xl-4\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h3 class=\"mb-0\">colis livre payé:{{coliers.length}}</h3>\n            </div>\n            <div class=\"justify-content-end\">\n              <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n                <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"t\"  (focus)=\"focus = true\"\n                    (blur)=\"focus = false\" name=\"search\" >\n                  </div>\n                  \n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <!-- Projects table -->\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr >\n                <th scope=\"col\">code</th>\n                <th scope=\"col\">client</th>\n                <th scope=\"col\">distination</th>\n              </tr>\n            </thead>\n            <tbody>\n              <!--            | filter:term           | filter:t -->\n              <tr  *ngFor=\"let c of coliers | paginate:  { itemsPerPage: 5, currentPage: p, totalItems: coliers.length } | filter:t \" >\n                <th >\n                  {{c.id}}\n                </th>\n                <th >\n                  {{c.nom}} {{c.prenom}}\n                </th>\n                <th >\n                  {{c.adressepickup}}=>{{c.adresse}}\n                </th>\n                </tr>\n            </tbody>\n          </table>\n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "JJx9":
/*!*************************************************!*\
  !*** ./src/app/pages/colis/colis.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dp-date-picker.dp-material .dp-picker-input {\r\n    box-sizing: border-box;\r\n    height: 30px;\r\n    width: 213px;\r\n    font-size: 13px;\r\n    outline: 0;\r\n\r\n    background-color: #fff;\r\n}\r\n.example-form-field {\r\n    margin: 0 8px 16px 0;\r\n  }\r\ndp-date-picker {\r\n\r\n    background-color: #ffffff;\r\n  }\r\n/**   css  form */\r\n.nba-btn-1{\r\n    color: #ffffff !important;\r\n    background: #ff0022 !important;\r\n    border-radius: 0px !important;\r\n    padding: 0.7em 3em !important;\r\n  }\r\ninput.form-control.nba-subscribe{\r\n    background: #404040;\r\n    color: #fff;\r\n    border-radius: 0px;\r\n    padding: 1.4em 3em;\r\n    margin-right: 1em;\r\n  }\r\ninput.nba-subscribe::-moz-placeholder {\r\n    color: #f3f4f4 !important;\r\n  }\r\ninput.nba-subscribe::placeholder {\r\n    color: #f3f4f4 !important;\r\n  }\r\nlabel.sign-text{\r\n    color: #265610;\r\n    font-size: 2.5rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29saXMvY29saXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVOztJQUVWLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0VBQ3RCO0FBQ0E7O0lBRUUseUJBQXlCO0VBQzNCO0FBTUEsaUJBQWlCO0FBR2pCO0lBQ0UseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0VBQy9CO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBVUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFGQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGlzL2NvbGlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMjEzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLmV4YW1wbGUtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHggMDtcclxuICB9XHJcbiAgZHAtZGF0ZS1waWNrZXIge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLyoqICAgY3NzICBmb3JtICovXHJcblxyXG5cclxuICAubmJhLWJ0bi0xe1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMjIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC43ZW0gM2VtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmZvcm0tY29udHJvbC5uYmEtc3Vic2NyaWJle1xyXG4gICAgYmFja2dyb3VuZDogIzQwNDA0MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogMS40ZW0gM2VtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgfVxyXG4gIFxyXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlci5mb3JtLWNvbnRyb2wubmJhLXN1YnNjcmliZSB7IC8qIEVkZ2UgKi9cclxuICAgIGNvbG9yOiAjYzFjMWMxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIuZm9ybS1jb250cm9sLm5iYS1zdWJzY3JpYmUgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6ICNjMWMxYzEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQubmJhLXN1YnNjcmliZTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmM2Y0ZjQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwuc2lnbi10ZXh0e1xyXG4gICAgY29sb3I6ICMyNjU2MTA7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9Il19 */");

/***/ }),

/***/ "L5Lh":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ajoutlivreur/ajoutlivreur.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n \n\n          <div class=\"card-body\">\n             <form (ngSubmit)=\"onSubmit()\" #livreurForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Nom</label>\n          <input type=\"text\" [(ngModel)]=\"livreur.nom\" \n            class=\"form-control\" \n            id=\"name\" \n            name=\"name\" \n            placeholder=\"Saisire votre nom\"\n            required #name=\"ngModel\">\n        </div>\n      \n        <div class=\"form-group\">\n          <label for=\"prenom\">Prenom</label>\n          <input type=\"text\" [(ngModel)]=\"livreur.prenom\" \n            class=\"form-control\" \n            id=\"prenom\" \n            name=\"prenom\" \n            placeholder=\"Saisire votre prenom\"\n            required #prenom=\"ngModel\">\n        </div>\n        \n        <div class=\"form-group\">\n          <label for=\"adresse\">Adresse</label>\n          <input type=\"text\" [(ngModel)]=\"livreur.adresse\" \n            class=\"form-control\" \n            id=\"adresse\" \n            name=\"adresse\" \n            placeholder=\"Saisire votre adresse\"\n            required #adresse=\"ngModel\">\n        </div>\n       \n  \n        <div class=\"form-group\">\n          <label for=\"adresse\">Mot de passe</label>\n          <input type=\"password\" [(ngModel)]=\"livreur.password\" \n            class=\"form-control\" \n            id=\"adresse\" \n            name=\"adresse\" \n            placeholder=\"Saisire votre mot de passe\"\n            required #adresse=\"ngModel\">\n        </div>\n       \n  \n        \n  \n  \n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" [(ngModel)]=\"livreur.email\" \n              class=\"form-control\" \n              id=\"email\" \n              name=\"email\" \n              placeholder=\"Saisire votre vehicule\"\n              required #email=\"ngModel\">\n          </div>\n        \n        <div class=\"form-group\">\n          <label for=\"vehicule\">Vehicule</label>\n          <input type=\"text\" [(ngModel)]=\"livreur.vehicule\" \n            class=\"form-control\" \n            id=\"vehicule\" \n            name=\"vehicule\" \n            placeholder=\"Saisire votre vehicule\"\n            required #vehicule=\"ngModel\">\n        </div>\n  \n       \n         <button type=\"submit\" [disabled]=\"!livreurForm.form.valid\" \n         class=\"btn-danger\">Ajouter</button>\n         \n      </form>\n          </div>\n      ");

/***/ }),

/***/ "L6bN":
/*!************************************************!*\
  !*** ./src/app/pages/colis/colis.component.ts ***!
  \************************************************/
/*! exports provided: ColisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColisComponent", function() { return ColisComponent; });
/* harmony import */ var _raw_loader_colis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./colis.component.html */ "OUFK");
/* harmony import */ var _colis_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colis.component.css */ "JJx9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var _models_colis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/colis */ "xv+n");
/* harmony import */ var _services_colis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/colis.service */ "9HXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_models_filtre__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/models/filtre */ "QkCE");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/client.service */ "2zjr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-date-picker */ "i2NW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13___default.a.pdfMake.vfs;







var ColisComponent = /** @class */ (function () {
    function ColisComponent(datepipe, toastr, clientService, modalService, sanitizer, colisService, router, servicelivreur, route) {
        this.datepipe = datepipe;
        this.toastr = toastr;
        this.clientService = clientService;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.route = route;
        this.valuue = new Date(2000, 2, 10);
        this.fileName = 'ExcelSheet.xlsx';
        this.closeResult = '';
        this.p = 1;
        this.colis = new _models_colis__WEBPACK_IMPORTED_MODULE_5__["Colis"];
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur",
            "livre",
            "livrepaye",
        ];
        this.datePickerConfig = {
            drops: 'up',
            format: 'YY/M/D'
        };
        var today = new Date();
        var month = today.getMonth();
        var year = today.getFullYear();
        this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](new Date(year, month, 13)),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](new Date(year, month, 16))
        });
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_4__["Etat"]();
        this.f = new src_app_models_filtre__WEBPACK_IMPORTED_MODULE_15__["Filtre"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_9__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_10__["Affectationlivreur"]();
        this.coliers = [];
        this.exp = [];
    }
    ColisComponent.prototype.open2 = function () {
        this.datePicker.api.open();
    };
    ColisComponent.prototype.close = function () { this.datePicker.api.close(); };
    ColisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
        this.get2();
    };
    ColisComponent.prototype.get2 = function () {
        var _this = this;
        this.clientService.findAll().subscribe(function (data) {
            _this.exp = data;
        });
    };
    ;
    ColisComponent.prototype.get = function () {
        var _this = this;
        this.colisService.finallbyadmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    ColisComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    ColisComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            //console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    ColisComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        //console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        // console.log(id);
        //console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //console.log(value);
    };
    ColisComponent.prototype.onFiltre = function () {
        var _this = this;
        this.colisService.filtrer(this.f).subscribe(function (data) {
            _this.coliers = data;
            console.log(_this.f);
            _this.modalService.dismissAll("finish  filtering ");
        });
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    ColisComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    ColisComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisComponent.prototype.fil = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisComponent.prototype.unfil = function (content) {
        this.modalService.dismissAll();
    };
    ColisComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ColisComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisComponent.prototype.consulter = function (id) {
        var _this = this;
        //   console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    ColisComponent.prototype.exportexcel = function () {
        /* table id is passed over here */
        var element = document.getElementById('excel-table');
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_16__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_16__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_16__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_16__["writeFile"](wb, this.fileName);
    };
    ColisComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrService"] },
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_17__["ClientService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
        { type: _services_colis_service__WEBPACK_IMPORTED_MODULE_6__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_8__["LivreurServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ColisComponent.propDecorators = {
        datePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['dayPicker',] }]
    };
    ColisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-colis',
            template: _raw_loader_colis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_colis_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrService"], src_app_client_service__WEBPACK_IMPORTED_MODULE_17__["ClientService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _services_colis_service__WEBPACK_IMPORTED_MODULE_6__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_8__["LivreurServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ColisComponent);
    return ColisComponent;
}());

//}


/***/ }),

/***/ "MX8b":
/*!***********************************************************!*\
  !*** ./src/app/pages/chartadmin/chartadmin.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0YWRtaW4vY2hhcnRhZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "N3FB":
/*!****************************************************************************!*\
  !*** ./src/app/pages/colisenattenteadmin/colisenattenteadmin.component.ts ***!
  \****************************************************************************/
/*! exports provided: ColisenattenteadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColisenattenteadminComponent", function() { return ColisenattenteadminComponent; });
/* harmony import */ var _raw_loader_colisenattenteadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./colisenattenteadmin.component.html */ "Nkk4");
/* harmony import */ var _colisenattenteadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colisenattenteadmin.component.css */ "7yVG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ColisenattenteadminComponent = /** @class */ (function () {
    function ColisenattenteadminComponent(toastr, servicedashboard, modalService, sanitizer, colisService, router, servicelivreur) {
        this.toastr = toastr;
        this.servicedashboard = servicedashboard;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.p = 1;
        this.colis = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__["Colis"];
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur"
        ];
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__["Affectationlivreur"]();
        this.coliers = [];
    }
    ColisenattenteadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
    };
    ColisenattenteadminComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.listeenattendeadmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    ColisenattenteadminComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    ColisenattenteadminComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            //console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    ColisenattenteadminComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        // console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisenattenteadminComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        //   console.log(id);
        // console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisenattenteadminComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //console.log(value);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    ColisenattenteadminComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    ColisenattenteadminComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisenattenteadminComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisenattenteadminComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ColisenattenteadminComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisenattenteadminComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisenattenteadminComponent.prototype.consulter = function (id) {
        var _this = this;
        //  console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    ColisenattenteadminComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"] }
    ]; };
    ColisenattenteadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-colisenattenteadmin',
            template: _raw_loader_colisenattenteadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_colisenattenteadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"]])
    ], ColisenattenteadminComponent);
    return ColisenattenteadminComponent;
}());

//}


/***/ }),

/***/ "ND7K":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/colisencoursadmin/colisencoursadmin.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"search\" >\n              </div>\n              \n            </div>\n          </form>\n  \n  <br>\n           \n          <ul  >\n            \n                \n  \n  \n        </ul>\n \n  \n  \n  \n  \n  \n                \n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">QRcode</th>\n                  <th scope=\"col\">Codecolis</th>\n                  <th scope=\"col\">prenom et prenom </th>\n                 \n                  <th scope=\"col\"> numtel</th>\n  \n                   \n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">adressemail</th>\n                 \n                  <th scope=\"col\">codepostal</th>\n                  <th scope=\"col\">adressepickup</th>\n                  <th scope=\"col\"> gouvernorat</th>\n  \n                  <th scope=\"col\">designationproduit</th>\n                  <th scope=\"col\">remarque</th>\n                  \n                 <th scope=\"col\"> Montant a payer</th>\n                \n                 <th scope=\"col\"> etat colis</th>\n                 <th scope=\"col\"> Action</th>\n             \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers  | paginate: config | filter: term\">\n             \n                  <td>\n                  \n                  <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                 <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n                 \n                \n                </td>\n                 <ng-template #etat let-modal>\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"card-body\">\n                      <div class=\"table-responsive\" >\n                        <table class=\"table align-items-center table-flush\">\n                          <thead class=\"thead-light\">\n                            <tr>\n                              <th scope=\"col\">date</th>\n                              <th scope=\"col\">etat</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let colis of tablec\">\n                              <td >{{colis.createdAt | date }}</td>\n                              <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                             \n                            </tr>\n                          </tbody>\n                        </table>\n                    \n                  </div>\n                     \n                    </div>\n                  </div>\n                 \n                </ng-template>\n                \n                \n                \n                \n                \n                \n                \n                \n                \n                    <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                  \n                  <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                  <td>{{ colis.numtel }}</td>\n            \n                  <td>{{ colis.adresse}}</td>\n                  <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                  <td>{{ colis.codepostal}}</td>\n                  <td>{{ colis.adressepickup}}</td>\n                  <td>{{ colis.gouvernorat}}</td>\n                \n                  <td>{{ colis.designationproduits}}</td>\n  \n                  <td>{{ colis.remarque   }}</td>\n                \n                  <td>{{ colis.montant}} TND</td>\n                \n                \n               <td >\n                   <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                    <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                      <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                    \n                    </p>\n \n                   </div>\n                  \n               </td>\n\n\n               <td class=\"text-right\">\n                <div ngbDropdown  placement=\"top-right\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n             <!-- <ul>          -->\n              <ng-template #content let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <form  >\n                      <div class=\"input-group mb-3\">\n               \n                        <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                            <option selected>Choose...</option>\n                            <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                             class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                             \n                             \n                             {{item}}</option>\n                            </select>\n        \n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                              </div>\n                           \n                    </div>\n                  \n                      <div class=\"modal-footer\">\n          \n                      </div>\n                    </form>\n                  </div>\n                </div>\n               \n              </ng-template>\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                    </button>\n                    \n                   <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </button> -->\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"imprimer\" (click)=\"generatePdf(colis)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                    </button>\n\n\n\n\n\n                    <ng-template #eya let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"card-body\">\n                          <form  >\n                            <div class=\"input-group mb-3\">\n                     \n                              <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                                <option selected>Choose...</option>\n                                <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.nom\"\n                                 class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.nom}}</option>\n                                </select>\n            \n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                  </div>\n                          </div>\n                        \n                            <div class=\"modal-footer\">\n                \n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                     \n                    </ng-template>\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                    </button>\n                    \n                   \n                  </div>\n                </div>\n              </td>\n              \n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n  \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "NLHm":
/*!***************************************************************!*\
  !*** ./src/app/pages/ajoutlivreur/ajoutlivreur.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fqb3V0bGl2cmV1ci9ham91dGxpdnJldXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Nkk4":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/colisenattenteadmin/colisenattenteadmin.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      \n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">liste colis</h3>\n        </div>\n        \n        <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n          <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"  type=\"Submit\" (click)=\"onChercher(f.value)\" ><i class=\"fas fa-search\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n              (blur)=\"focus = false\" name=\"keyword\" ngModel>\n            </div>\n          </div>\n        </form>\n\n<br>\n         \n        <ul  >\n          \n              \n\n\n      </ul>\n\n\n\n\n\n\n\n              \n            \n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">QRcode</th>\n                <th scope=\"col\">Code postal</th>\n                <th scope=\"col\">prenom et prenom </th>\n               \n                <th scope=\"col\"> numtel</th>\n\n                 \n                <th scope=\"col\">adresse</th>\n                <th scope=\"col\">adressemail</th>\n               \n                <th scope=\"col\">codepostal</th>\n                <th scope=\"col\">adressepickup</th>\n                <th scope=\"col\"> gouvernorat</th>\n\n                <th scope=\"col\">designationproduit</th>\n                <th scope=\"col\">remarque</th>\n                \n               <th scope=\"col\"> Montant a payer</th>\n              \n               <th scope=\"col\"> etat colis</th>\n               <th scope=\"col\"> Action</th>\n           \n             \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let colis of coliers  | paginate: config\">\n           \n                <td>\n                \n                <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n               <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n               \n              \n              </td>\n               <ng-template #etat let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\" >\n                      <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                          <tr>\n                            <th scope=\"col\">date</th>\n                            <th scope=\"col\">etat</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let colis of tablec\">\n                            <td >{{colis.createdAt | date }}</td>\n                            <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                           \n                          </tr>\n                        </tbody>\n                      </table>\n                  \n                </div>\n                   \n                  </div>\n                </div>\n               \n              </ng-template>\n              \n              \n              \n              \n              \n              \n              \n              \n              \n                  <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                \n                <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                <td>{{ colis.numtel }}</td>\n          \n                <td>{{ colis.adresse}}</td>\n                <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                <td>{{ colis.codepostal}}</td>\n                <td>{{ colis.adressepickup}}</td>\n                <td>{{ colis.gouvernorat}}</td>\n              \n                <td>{{ colis.designationproduits}}</td>\n\n                <td>{{ colis.remarque   }}</td>\n              \n                <td>{{ colis.montant}} TND</td>\n              \n              \n             <td >\n                 <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                  <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                    <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                  \n                  </p>\n\n                 </div>\n                \n             </td>\n\n\n             <td class=\"text-right\">\n              <div ngbDropdown  placement=\"top-right\">\n                <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                  <i class=\"fas fa-ellipsis-v\"></i>\n                </a>\n                <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n           <!-- <ul>          -->\n            <ng-template #content let-modal>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"card-body\">\n                  <form  >\n                    <div class=\"input-group mb-3\">\n             \n                      <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                          <option selected>Choose...</option>\n                          <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                           class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                           \n                           \n                           {{item}}</option>\n                          </select>\n      \n                          <div class=\"input-group-append\">\n                              <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                            </div>\n                         \n                  </div>\n                \n                    <div class=\"modal-footer\">\n        \n                    </div>\n                  </form>\n                </div>\n              </div>\n             \n            </ng-template>\n\n                  <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                  </button>\n                  \n                 <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                  </button> -->\n\n\n                  <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"imprimer\" (click)=\"generatePdf(colis)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                  </button>\n\n\n\n\n\n                  <ng-template #eya let-modal>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"card-body\">\n                        <form  >\n                          <div class=\"input-group mb-3\">\n                   \n                            <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                              <option selected>Choose...</option>\n                              <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.nom\"\n                               class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.id}}</option>\n                              </select>\n          \n                              <div class=\"input-group-append\">\n                                  <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                </div>\n                        </div>\n                      \n                          <div class=\"modal-footer\">\n              \n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                   \n                  </ng-template>\n\n\n                  <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                  </button>\n                  \n                 \n                </div>\n              </div>\n            </td>\n            \n            </tbody>\n          </table>\n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\n          <!--editer-->\n         \n          <!--fin editer-->\n\n         \n      <!--     \n         </div>\n        <div class=\"card-footer py-4\">\n          <nav aria-label=\"...\">\n\n            <ul class=\"pagination justify-content-end mb-0\">\n              \n            <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n              \n              <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                            </ul>\n            \n          </nav>\n        </div>\n      </div>  -->\n\n\n\n\n    \n    \n    </div>\n  </div>\n\n");

/***/ }),

/***/ "OUFK":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/colis/colis.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content    -->\n\n\n \n\n  \n  \n  <div class=\"container-fluid mt--7\">\n    \n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"mr-3 d-none d-md-flex ml-lg-auto\" >\n        \n            \n            </div>\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste colis</h3>\n           \n          </div>\n          \n <div class=\"col-sm-12 col-md-12 text-center\">\n           <form (ngSubmit)=\"onFiltre()\"  class=\"form-control nba-subscribe mx-1\"   #chercher=\"ngForm\">\n\n            \n\n\n      <div class=\"form-row form-group\">\n      <div class=\"col-6 col-sm-3\">\n        <label for=\"createdAt\">Nom Société</label>\n        <select [(ngModel)] = \"f.nomsociete\" name=\"exp\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n        \n          <option  *ngFor =\"let e of exp\"[value]=\"e.nomsociete\"\n           class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n           \n           \n           {{e.nomsociete}}</option>\n          </select>\n\n\n       \n      </div>\n      <div class=\"col-6 col-sm-3\">\n     \n\n        <label for=\"createdAt\">Etat colis</label>\n\n\n        <select [(ngModel)] = \"f.etat\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                   \n                      <option (change)=\"f.etat\" *ngFor =\"let item of items\"[value]=\"item\"\n                       class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                       \n                       \n                       {{item}}</option>\n                      </select>\n    \n      \n      </div>\n\n\n\n      <div class=\"col-6 col-sm-3\">\n\n        <label for=\"createdAt\">Date</label>\n        <mat-form-field appearance=\"fill\" class=\"example-form-field\">\n          <mat-label>Enter a date range</mat-label>\n          <mat-date-range-input [rangePicker]=\"rangePicker\">\n            <input matStartDate placeholder=\"Start date\"  [(ngModel)]=\" f.createdAt\" name=\"createdAt\">\n            <input matEndDate placeholder=\"End date\">\n          </mat-date-range-input>\n          <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n          <mat-date-range-picker #rangePicker>\n            <mat-date-range-picker-actions>\n              <button mat-button matDateRangePickerCancel>Cancel</button>\n              <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n            </mat-date-range-picker-actions>\n          </mat-date-range-picker>\n        </mat-form-field>\n\n\n\n       \n      \n     <!--   <label for=\"createdAt\">Date</label>\n        <input type=\"date\" \n          class=\"form-control\" [(ngModel)]=\" f.createdAt\" name=\"createdAt\"\n          id=\"adresse\" \n          \n          placeholder=\"Saisire date\"\n          >  \n         -->\n\n    \n\n      \n      </div>\n\n\n\n      <div class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n        <button type=\"submit\" \n        class=\"btn   btn-lg btn-danger  nba-btn-1\" >chercher</button>\n       </div>\n\n      \n\n\n    \n\n       <div class=\"col-sm-6\">\n         <div class=\"form-group\">\n         \n           <!--blaset   button cherche-->\n         </div>\n       </div>\n\n     \n          \n         \n\n\n\n\n\n      \n        </div>\n    </form>\n         \n    \n    \n    </div>\n\n\n\n\n    <br/>\n    <br/>\n\n    <br/>\n\n    <br/>\n\n\n    <br/>\n\n    \n    <div class=\"row  jsustify-content-center\"  style=\"text-align: center;\">\n      <div class=\"col\">\n        <div class=\"col-sm-12\">\n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"search\" >\n              </div>\n          \n            </div>\n           \n          \n           \n          </form>\n        </div>\n      </div>\n    </div>\n   \n          \n      \n          \n          \n  \n  <br>\n  \n \n\n\n \n\n  \n         \n  \n  <div class=\"mr-3 d-none d-md-flex ml-lg-auto\" >\n        \n    <a   (click)=\"exportexcel()\">\n      <span>  <i class=\"fas fa-file-excel  text-green\"></i> exporter</span>\n      </a> \n    </div>\n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\" id=\"excel-table\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">QRcode</th>\n                  <th scope=\"col\">Code postal</th>\n                  <th scope=\"col\">prenom et prenom </th>\n                 \n                  <th scope=\"col\">Numéro de Téléphone</th>\n  \n                   \n                  <th scope=\"col\">Adresse</th>\n                  <th scope=\"col\">Adresse -Email</th>\n                 \n                  <th scope=\"col\">Code postal</th>\n                  <th scope=\"col\">Adresse pickup</th>\n                  <th scope=\"col\"> Gouvernorat</th>\n  \n                  <th scope=\"col\">Designation produit</th>\n                  <th scope=\"col\">Remarque</th>\n                  \n                 <th scope=\"col\"> Montant a payer</th>\n                 <th scope=\"col\"> Frais de livraison</th>\n                 <th scope=\"col\"> Etat colis</th>\n                 <th scope=\"col\"> Action</th>\n             \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers  | paginate: config | filter: term\">\n             \n                  <td>\n                  \n                  <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                 <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n                 \n                \n                </td>\n                 <ng-template #etat let-modal>\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"card-body\">\n                      <div class=\"table-responsive\" >\n                        <table class=\"table align-items-center table-flush\">\n                          <thead class=\"thead-light\">\n                            <tr>\n                              <th scope=\"col\">date</th>\n                              <th scope=\"col\">etat</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let colis of tablec\">\n                              <td >{{colis.createdAt | date:'medium'  }}</td>\n                              <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                             \n                            </tr>\n                          </tbody>\n                        </table>\n                    \n                  </div>\n                     \n                    </div>\n                  </div>\n                 \n                </ng-template>\n                \n                \n                \n                \n                \n                \n                \n                \n                \n                    <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                  \n                  <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                  <td>{{ colis.numtel }}</td>\n            \n                  <td>{{ colis.adresse}}</td>\n                  <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                  <td>{{ colis.codepostal}}</td>\n                  <td>{{ colis.adressepickup}}</td>\n                  <td>{{ colis.gouvernorat}}</td>\n                \n                  <td>{{ colis.designationproduits}}</td>\n  \n                  <td>{{ colis.remarque   }}</td>\n                \n                  <td>{{ colis.montant}} TND</td>\n                  <td>{{colis.fraislivraison}} TND</td>\n                \n               <td >\n                   <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                    <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                      <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                    \n                    </p>\n \n                   </div>\n                  \n               </td>\n\n\n               <td class=\"text-right\">\n                <div ngbDropdown  placement=\"top-right\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n             <!-- <ul>          -->\n              <ng-template #content let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <form  >\n                      <div class=\"input-group mb-3\">\n               \n                        <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                            <option selected>Choose...</option>\n                            <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                             class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                             \n                             \n                             {{item}}</option>\n                            </select>\n        \n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                              </div>\n                           \n                    </div>\n                  \n                      <div class=\"modal-footer\">\n          \n                      </div>\n                    </form>\n                  </div>\n                </div>\n               \n              </ng-template>\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                    </button>\n                    \n                   <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </button> -->\n\n\n                   \n\n                    <a [routerLink] = \"['/printcolisadmin', colis.id]\"    placement=\"top\" ngbTooltip=\"imprimer\" >\n\n                       \n\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                   \n                  \n                   </a>\n\n\n\n                   \n\n\n\n                    <ng-template #eya let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"card-body\">\n                          <form  >\n                            <div class=\"input-group mb-3\">\n                     \n                              <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                                <option selected>Choose...</option>\n                                <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.id\"\n                                 class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.nom}ya}</option>\n                                </select>\n            \n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                  </div>\n                          </div>\n                        \n                            <div class=\"modal-footer\">\n                \n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                     \n                    </ng-template>\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                    </button>\n                    \n                   \n                  </div>\n                </div>\n              </td>\n              \n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n           \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "OivC":
/*!******************************************************************!*\
  !*** ./src/app/pages/listeexpactive/listeexpactive.component.ts ***!
  \******************************************************************/
/*! exports provided: ListeexpactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeexpactiveComponent", function() { return ListeexpactiveComponent; });
/* harmony import */ var _raw_loader_listeexpactive_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./listeexpactive.component.html */ "mXNp");
/* harmony import */ var _listeexpactive_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeexpactive.component.css */ "TNyX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/client */ "cof1");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client.service */ "2zjr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListeexpactiveComponent = /** @class */ (function () {
    function ListeexpactiveComponent(servicedashboard, clientService, router, modalService) {
        this.servicedashboard = servicedashboard;
        this.clientService = clientService;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.size = 5;
        this.currentPage = 0;
        this.client = new src_app_client__WEBPACK_IMPORTED_MODULE_3__["Client"];
        this.i = 3;
        this.disable = false;
        this.mod = false;
        this.focus = false;
        this.l1 = new src_app_client__WEBPACK_IMPORTED_MODULE_3__["Client"]();
        this.clients = [];
    }
    /*   ONpage(i,event:any){
        console.log(i);
        event.preventDefault();
        this.currentPage=i;
       this.get();
        
      } */
    ListeexpactiveComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ListeexpactiveComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListeexpactiveComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.expactive().subscribe(function (data) {
            _this.clients = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.clients.length
        };
    };
    /* this.pages= new Array(data['totalPages']);},
    err=>{console.log(err); */
    //console.log(this.currentPage);  console.log(this.clients);
    ListeexpactiveComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.clientService.chercherparnom(value.keyword).subscribe(function (data) { _this.clients = data; });
    };
    ListeexpactiveComponent.prototype.activer = function (client) {
        var _this = this;
        this.clientService.active(client)
            .subscribe(function (result) {
            console.log(client);
            _this.get();
        });
    };
    ListeexpactiveComponent.prototype.Onvoir = function () {
        this.mod = true;
        /* this.clientservice.cherche(this.id).subscribe(data => {
 
        this.c1 = data;console.log(this.c1);}) */ 
    };
    ListeexpactiveComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ListeexpactiveComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ListeexpactiveComponent.prototype.onSubmitt = function (id) {
        //console.log(id);
        // console.log(this.l1);
        this.clientService.update(id, this.l1).subscribe();
        this.get();
    };
    ListeexpactiveComponent.ctorParameters = function () { return [
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__["DashboardadminService"] },
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
    ]; };
    ListeexpactiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-listeexpactive',
            template: _raw_loader_listeexpactive_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_listeexpactive_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__["DashboardadminService"], src_app_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], ListeexpactiveComponent);
    return ListeexpactiveComponent;
}());



/***/ }),

/***/ "QOaE":
/*!******************************************************************!*\
  !*** ./src/app/pages/ordredemission/ordredemission.component.ts ***!
  \******************************************************************/
/*! exports provided: OrdredemissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdredemissionComponent", function() { return OrdredemissionComponent; });
/* harmony import */ var _raw_loader_ordredemission_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ordredemission.component.html */ "nF6z");
/* harmony import */ var _ordredemission_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordredemission.component.css */ "xIhL");
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



var OrdredemissionComponent = /** @class */ (function () {
    function OrdredemissionComponent() {
    }
    OrdredemissionComponent.prototype.ngOnInit = function () {
    };
    OrdredemissionComponent.ctorParameters = function () { return []; };
    OrdredemissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ordredemission',
            template: _raw_loader_ordredemission_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ordredemission_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], OrdredemissionComponent);
    return OrdredemissionComponent;
}());



/***/ }),

/***/ "QvEe":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/listelireurdesactive/listelireurdesactive.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RlbGlyZXVyZGVzYWN0aXZlL2xpc3RlbGlyZXVyZGVzYWN0aXZlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SQt0":
/*!********************************************************!*\
  !*** ./src/app/pages/editcolis/editcolis.component.ts ***!
  \********************************************************/
/*! exports provided: EditcolisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcolisComponent", function() { return EditcolisComponent; });
/* harmony import */ var _raw_loader_editcolis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./editcolis.component.html */ "ZpFt");
/* harmony import */ var _editcolis_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editcolis.component.css */ "2TnB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditcolisComponent = /** @class */ (function () {
    function EditcolisComponent(route, router, colisservice) {
        this.route = route;
        this.router = router;
        this.colisservice = colisservice;
        //this.livreur= new Livreur();
        this.l1 = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_4__["Colis"]();
        this.c1 = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_4__["Colis"]();
    }
    EditcolisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        //console.log(this.route.snapshot.params.id);
        this.colisservice.chercheparidadmin(this.id).subscribe(function (data) {
            _this.l1 = data;
        }
        //,err=>{console.log(err);}
        );
        //console.log(this.l1);
    };
    EditcolisComponent.prototype.oncherche = function () {
        var _this = this;
        this.colisservice.chercheparidadmin(this.id).subscribe(function (data) {
            _this.c1 = data;
            //console.log(this.c1);
        });
    };
    EditcolisComponent.prototype.onSubmitt = function () {
        var _this = this;
        this.colisservice.update(this.id, this.l1).subscribe(function (result) { return _this.router.navigate(['/colis']); }, function (data) { _this.l1 = data; });
    };
    EditcolisComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__["ColisService"] }
    ]; };
    EditcolisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-editcolis',
            template: _raw_loader_editcolis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_editcolis_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__["ColisService"]])
    ], EditcolisComponent);
    return EditcolisComponent;
}());



/***/ }),

/***/ "TGAz":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientajout/clientajout.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <div class=\"card-body\">\n           <form (ngSubmit)=\"onSubmit()\" #clientForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"nomsociete\">Nom du société</label>\n        <input type=\"text\" [(ngModel)]=\"client.nomsociete\" \n          class=\"form-control\" \n          id=\"nomsociete\" \n          name=\"nomsociete\" \n          placeholder=\"Saisire nom du société\"\n          required #nomsociete=\"ngModel\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"adresseemail\">Adresse-Email</label>\n        <input type=\"text\" [(ngModel)]=\"client.adresseemail\" \n          class=\"form-control\" \n          id=\"adresseemail\" \n          name=\"adresseemail\" \n          placeholder=\"Saisire votre adresse-email\"\n          required #prenom=\"ngModel\">\n      </div>\n     \n      <div class=\"form-group\">\n        <label for=\"adressephysique\">Adresse</label>\n        <input type=\"text\" [(ngModel)]=\"client.adressephysique\" \n          class=\"form-control\" \n          id=\"adresse\" \n          name=\"adresse\" \n          placeholder=\"Saisire votre Adresse\"\n          required #adresse=\"ngModel\">\n      </div>\n     \n\n\n\n      \n\n\n        <div class=\"form-group\">\n          <label for=\"email\">Immatriculation</label>\n          <input type=\"text\" [(ngModel)]=\"client.immatriculation\" \n            class=\"form-control\" \n            id=\"immatriculation\" \n            name=\"immatriculation\" \n            placeholder=\"Saisire votre immatriculation \"\n            required #email=\"ngModel\">\n        </div>\n    \n     <div class=\"mb-3\">\n          <input class=\"form-control form-control-lg form-control-color\"   type=\"file\" (change)=\"onFileChanged2($event)\">\n         </div> \n\n        <div class=\"modal-footer \" >\n          <div>\n           <button type=\"submit\" [disabled]=\"!clientForm.form.valid\" \n           class=\"btn-danger \" >Ajouter</button>\n          </div>\n          \n        \n         \n\n\n\n\n\n      </div>\n\n    </form>\n        </div>\n   ");

/***/ }),

/***/ "TIpO":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/swivrecolis/swivrecolis.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n       \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">suivre colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onCherche(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" type=\"submit\" (click)=\"onCherche(f.value)\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n  \n  \n          \n  <!--         <ul  >\n            \n                \n  \n  \n                <li class=\"nav-item\">\n                  <a routerLinkActive=\"active\" [routerLink]=\"['/ajoutlivreur']\">\n                    \n                    <span class=\"nav-link-inner--text\">ajout</span>\n                  </a>\n  \n  \n  </ul>\n   -->\n  \n  \n  \n  \n  \n        <div *ngIf=\"test\">\n          <div class=\"test\">\n            <div class=\"another-test\" #p></div>\n            </div>\n          \n          <div class=\"container\">\n              <article class=\"card\">\n                  <header class=\"card-header\"> </header>\n                  <div class=\"card-body\">\n                      <h6></h6>\n                      <article class=\"card\">\n                          <div class=\"card-body row\">\n          \n          \n          \n          \n          \n                              <div class=\"col\"> <strong>Nom et prénom</strong> <br> {{colies.nom}} {{colies.prenom}}</div>\n                              <div class=\"col\"> <strong>Adresse</strong> <br> {{colies.adresse}} | <i class=\"fa fa-phone\"></i> {{colies.numtel}} </div>\n                              <div class=\"col\"> <strong>Code colis:</strong> <br> {{colies.id}}</div>\n                              <div class=\"col\"> <strong>distination</strong> <br> {{colies.adressepickup}}=>{{colies.designationproduits}}</div>\n                          </div>\n                      </article>\n                      <div class=\"track\">\n          \n          \n          \n                       \n                          <div *ngFor=\"let track of colies.etatcolis; let i = index\">\n          \n                              <div class=\"step  active\">\n                                                <span class=\"icon\"> <i class=\"fa fa-check\" ></i>   </span>\n                                                \n                                                \n                                                <span class=\"text\" >\n                            \n                                                    {{track.etat_colis}}\n                            \n                                                    {{index}}\n                            \n                                                </span>\n                            \n                                            </div>\n                            \n                                    \n                                            </div>\n                        \n          \n                         \n                          \n          \n          \n          \n          \n            \n          \n                             \n          \n                          \n                             \n                      \n                         \n          \n                      </div>\n                      <hr>\n                      <ul class=\"row\">\n                         \n          \n                          <li class=\"col-md-4\" *ngFor=\"let track of colies.etatcolis\">\n                              <figure class=\"itemside mb-3\">\n                                  <div class=\"aside\">\n                                      <!-- <img src=\"https://res.cloudinary.com/dxfq3iotg/image/upload/v1571751108/Ecommerce/laptop-dell-xps-15-computer-monitors-laptops.jpg\" class=\"img-sm border\"> -->\n                                  \n                                        <p class=\"badge badge-primary\">\n                                            {{track.etat_colis}}\n                                        </p>\n                                  </div>\n                                  <figcaption class=\"info align-self-center\">\n                                      <p class=\"title\">{{track.createdAt | date:'medium' }}<br> {{track.id}}</p> <span class=\"text-muted\">{{track.etat_colis}} </span>\n                                  </figcaption>\n                              </figure>\n                          </li>\n                         \n          \n                          <li class=\"col-md-4\" *ngFor=\"let k of items\">\n                              <figure class=\"itemside mb-3\">\n                                  <div class=\"aside\">\n                                      <!-- <img src=\"https://res.cloudinary.com/dxfq3iotg/image/upload/v1571751108/Ecommerce/laptop-dell-xps-15-computer-monitors-laptops.jpg\" class=\"img-sm border\"> -->\n                                  \n                                        <p class=\"badge badge-primary\">\n                                           no treaded\n                                        </p>\n                                  </div>\n                                  <figcaption class=\"info align-self-center\">\n                                      <p class=\"title\">---<br> </p> <span class=\"text-muted\">-</span>\n                                  </figcaption>\n                              </figure>\n                          </li>\n          \n          \n                         \n                      </ul>\n                      <hr>\n                    \n                  </div>\n              </article>\n          </div>\n\n            <!--editer-->\n           \n            <!--fin editer-->\n  \n        <!--  \n            \n          </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div> -->\n  \n  \n  \n  \n      \n      \n      </div>\n\n\n    </div>\n  \n  ");

/***/ }),

/***/ "TNyX":
/*!*******************************************************************!*\
  !*** ./src/app/pages/listeexpactive/listeexpactive.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RlZXhwYWN0aXZlL2xpc3RlZXhwYWN0aXZlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "TSli":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/colisaudepotadmin/colisaudepotadmin.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      \n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">liste colis</h3>\n        </div>\n        \n        <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n          <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n              (blur)=\"focus = false\" name=\"search\" >\n            </div>\n            \n          </div>\n        </form>\n\n<br>\n         \n        <ul  >\n          \n              \n\n\n      </ul>\n\n\n\n\n\n\n              \n            \n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">QRcode</th>\n                <th scope=\"col\">Codecolis</th>\n                <th scope=\"col\">prenom et prenom </th>\n               \n                <th scope=\"col\"> numtel</th>\n\n                 \n                <th scope=\"col\">adresse</th>\n                <th scope=\"col\">adressemail</th>\n               \n                <th scope=\"col\">codepostal</th>\n                <th scope=\"col\">adressepickup</th>\n                <th scope=\"col\"> gouvernorat</th>\n\n                <th scope=\"col\">designationproduit</th>\n                <th scope=\"col\">remarque</th>\n                \n               <th scope=\"col\"> Montant a payer</th>\n              \n               <th scope=\"col\"> etat colis</th>\n               <th scope=\"col\"> Action</th>\n           \n             \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let colis of coliers  | paginate: config \">\n           \n                <td>\n                \n                <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n               <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n               \n              \n              </td>\n               <ng-template #etat let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\" >\n                      <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                          <tr>\n                            <th scope=\"col\">date</th>\n                            <th scope=\"col\">etat</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let colis of tablec\">\n                            <td >{{colis.createdAt | date }}</td>\n                            <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                           \n                          </tr>\n                        </tbody>\n                      </table>\n                  \n                </div>\n                   \n                  </div>\n                </div>\n               \n              </ng-template>\n              \n              \n              \n              \n              \n              \n              \n              \n              \n                  <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                \n                <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                <td>{{ colis.numtel }}</td>\n          \n                <td>{{ colis.adresse}}</td>\n                <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                <td>{{ colis.codepostal}}</td>\n                <td>{{ colis.adressepickup}}</td>\n                <td>{{ colis.gouvernorat}}</td>\n              \n                <td>{{ colis.designationproduits}}</td>\n\n                <td>{{ colis.remarque   }}</td>\n              \n                <td>{{ colis.montant}} TND</td>\n              \n              \n             <td >\n                 <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                  <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                    <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                  \n                  </p>\n\n                 </div>\n                \n             </td>\n\n\n             <td class=\"text-right\">\n              <div ngbDropdown  placement=\"top-right\">\n                <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                  <i class=\"fas fa-ellipsis-v\"></i>\n                </a>\n                <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n           <!-- <ul>          -->\n            <ng-template #content let-modal>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"card-body\">\n                  <form  >\n                    <div class=\"input-group mb-3\">\n             \n                      <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                          <option selected>Choose...</option>\n                          <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                           class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                           \n                           \n                           {{item}}</option>\n                          </select>\n      \n                          <div class=\"input-group-append\">\n                              <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                            </div>\n                         \n                  </div>\n                \n                    <div class=\"modal-footer\">\n        \n                    </div>\n                  </form>\n                </div>\n              </div>\n             \n            </ng-template>\n\n                  <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                  </button>\n                  \n                 <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                  </button> -->\n\n\n                  <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"imprimer\" (click)=\"generatePdf(colis)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                  </button>\n\n\n\n\n\n                  <ng-template #eya let-modal>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"card-body\">\n                        <form  >\n                          <div class=\"input-group mb-3\">\n                   \n                            <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                              <option selected>Choose...</option>\n                              <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.nom\"\n                               class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.id}}</option>\n                              </select>\n          \n                              <div class=\"input-group-append\">\n                                  <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                </div>\n                        </div>\n                      \n                          <div class=\"modal-footer\">\n              \n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                   \n                  </ng-template>\n\n\n                  <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                  </button>\n                  \n                 \n                </div>\n              </div>\n            </td>\n            \n            </tbody>\n          </table>\n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\n          <!--editer-->\n         \n          <!--fin editer-->\n\n         \n      <!--     \n         </div>\n        <div class=\"card-footer py-4\">\n          <nav aria-label=\"...\">\n\n            <ul class=\"pagination justify-content-end mb-0\">\n              \n            <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n              \n              <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                            </ul>\n            \n          </nav>\n        </div>\n      </div>  -->\n\n\n\n\n    \n    \n    </div>\n  </div>\n\n");

/***/ }),

/***/ "TaxM":
/*!****************************************************!*\
  !*** ./src/app/services/dashboardadmin.service.ts ***!
  \****************************************************/
/*! exports provided: DashboardadminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardadminService", function() { return DashboardadminService; });
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



var DashboardadminService = /** @class */ (function () {
    function DashboardadminService(http) {
        this.http = http;
        //environment.BACKEND_URL = /li'http://localhost:8080/li';
        //environment.BACKEND_URL = 'http://localhost:8080/cli';
        //environment.BACKEND_URL ='http://localhost:8080/';
    }
    DashboardadminService.prototype.livreurdesactive = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/li/listedesactive', options);
    };
    DashboardadminService.prototype.livreuractive = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        console.log("Bearer " + localStorage.getItem('jwt'));
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/li/listeactive', options);
    };
    DashboardadminService.prototype.nblivreuractive = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/li/nblivreuractive', options);
    };
    DashboardadminService.prototype.nblivreurdesactive = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/li/nblivreurdesactive', options);
    };
    DashboardadminService.prototype.expdesactive = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/cli/expdesactive', options);
    };
    DashboardadminService.prototype.expactive = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        console.log("Bearer " + localStorage.getItem('jwt'));
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/cli/expactive', options);
    };
    DashboardadminService.prototype.nbexpactive = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/cli/nbexpactive', options);
    };
    DashboardadminService.prototype.nbexpdesactive = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/cli/nbexpdesactive', options);
    };
    DashboardadminService.prototype.nbenattendeadmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbenattendeadmin', options);
    };
    DashboardadminService.prototype.listeenattendeadmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/chercheenattendeadmin', options);
    };
    DashboardadminService.prototype.listeencoursadmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/encoursalladmin', options);
    };
    DashboardadminService.prototype.nbencoursalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbbencoursadmin', options);
    };
    DashboardadminService.prototype.listertndepotalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/rtndepotalladmin', options);
    };
    DashboardadminService.prototype.nbrtndepotalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbrtndepotalladmin', options);
    };
    DashboardadminService.prototype.depotalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/audepotalladmin', options);
    };
    DashboardadminService.prototype.nbaudepotalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbaudepotalladmin', options);
    };
    DashboardadminService.prototype.retourracualladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/retourrecualladmin', options);
    };
    DashboardadminService.prototype.nbretourecutalladm = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbretourecualladmin', options);
    };
    DashboardadminService.prototype.retourdefinialladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/retourdefinitifalladmin', options);
    };
    DashboardadminService.prototype.livrepayeadmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/livrepayeadmin', options);
    };
    DashboardadminService.prototype.nbretourdeftalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbretourdefinitifalladmin', options);
    };
    DashboardadminService.prototype.retourexpalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/retourexpalladmin', options);
    };
    DashboardadminService.prototype.listerlivrealladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/livrealladmin', options);
    };
    DashboardadminService.prototype.nbretourexpalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nbretourexpalladmin', options);
    };
    DashboardadminService.prototype.livreexpalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/livreealladmin', options);
    };
    DashboardadminService.prototype.nblivrexpalladmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt') !== null ? "Bearer " + localStorage.getItem('jwt') : ''
        });
        var options = { headers: headers };
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL + '/colis/nblivreuradmin', options);
    };
    DashboardadminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    DashboardadminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DashboardadminService);
    return DashboardadminService;
}());



/***/ }),

/***/ "TzYD":
/*!*************************************************************!*\
  !*** ./src/app/pages/editlivreur/editlivreur.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRsaXZyZXVyL2VkaXRsaXZyZXVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "Ixm7");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "Db45");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// core components
/* import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts"; */
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(colisService, route, router, dashboardservice, livreurservice) {
        this.colisService = colisService;
        this.route = route;
        this.router = router;
        this.dashboardservice = dashboardservice;
        this.livreurservice = livreurservice;
        this.clicked = true;
        this.clicked1 = false;
        this.p = 1;
        this.coliers = [];
        this.colis = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solder();
        this.get();
        this.dashboardservice.nbenattendeadmin().subscribe(function (data) {
            _this.x = data;
        });
        this.dashboardservice.nbaudepotalladmin().subscribe(function (data) { _this.depot = data; });
        this.dashboardservice.nbencoursalladmin().subscribe(function (data) { _this.encours = data; });
        this.dashboardservice.nbrtndepotalladmin().subscribe(function (data) { _this.rtndepot = data; });
        this.dashboardservice.nbretourecutalladm().subscribe(function (data) { _this.recuretour = data; });
        this.dashboardservice.nbretourdeftalladmin().subscribe(function (data) { _this.recudef = data; });
        this.dashboardservice.nbretourexpalladmin().subscribe(function (data) { _this.recuexp = data; });
        this.dashboardservice.nblivrexpalladmin().subscribe(function (data) {
            _this.livre = data;
        });
    };
    DashboardComponent.prototype.solder = function () {
        var _this = this;
        this.colisService.soldeADMIN().subscribe(function (data) { _this.solde = data; });
    };
    DashboardComponent.prototype.get = function () {
        var _this = this;
        this.dashboardservice.livrepayeadmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    DashboardComponent.prototype.pageChanged = function (event) {
        this.p = event;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_5__["DashboardadminService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_5__["DashboardadminService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_4__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_5__["DashboardadminService"],
            src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_5__["DashboardadminService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "V48J":
/*!**************************************************!*\
  !*** ./src/app/pages/client/client.component.ts ***!
  \**************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _raw_loader_client_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./client.component.html */ "g+jZ");
/* harmony import */ var _client_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.component.css */ "ETrF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/client */ "cof1");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/client.service */ "2zjr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientComponent = /** @class */ (function () {
    function ClientComponent(toastr, clientService, router, modalService) {
        this.toastr = toastr;
        this.clientService = clientService;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.size = 5;
        this.currentPage = 0;
        this.client = new src_app_client__WEBPACK_IMPORTED_MODULE_4__["Client"];
        this.i = 3;
        this.disable = false;
        this.mod = false;
        this.l1 = new src_app_client__WEBPACK_IMPORTED_MODULE_4__["Client"]();
        this.clients = [];
    }
    /*   ONpage(i,event:any){
        console.log(i);
        event.preventDefault();
        this.currentPage=i;
       this.get();
        
      } */
    ClientComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ClientComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ClientComponent.prototype.get = function () {
        var _this = this;
        this.clientService.findAll().subscribe(function (data) {
            _this.clients = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.clients.length
        };
    };
    /* this.pages= new Array(data['totalPages']);},
    err=>{console.log(err); */
    //console.log(this.currentPage);  console.log(this.clients);
    ClientComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.clientService.chercherparnom(value.keyword).subscribe(function (data) { _this.clients = data; });
    };
    ClientComponent.prototype.activer = function (client) {
        var _this = this;
        this.clientService.active(client)
            .subscribe(function (result) {
            //console.log(client);
            if (!client.action) {
                _this.get();
                _this.toastr.success('vous avez activer le client');
            }
            else {
                _this.get();
                _this.toastr.error('vous avez désactiver le client');
            }
        });
    };
    ClientComponent.prototype.Onvoir = function () {
        this.mod = true;
        /* this.clientservice.cherche(this.id).subscribe(data => {
 
        this.c1 = data;console.log(this.c1);}) */ 
    };
    ClientComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ClientComponent.prototype.getDismissReason = function (reason) {
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
    ClientComponent.prototype.onSubmitt = function (id) {
        //  console.log(id);
        //console.log(this.l1);
        var _this = this;
        this.clientService.update(id, this.l1).subscribe(function (data) {
            _this.toastr.success('success modification');
            _this.get();
        }, function (err) { _this.toastr.error('erreur'); });
        this.get();
    };
    ClientComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
    ]; };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-client',
            template: _raw_loader_client_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_client_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], src_app_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "VJFQ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/retourdifadmin/retourdifadmin.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldG91cmRpZmFkbWluL3JldG91cmRpZmFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "VhAz":
/*!************************************************************************!*\
  !*** ./src/app/pages/listeexpdesactive/listeexpdesactive.component.ts ***!
  \************************************************************************/
/*! exports provided: ListeexpdesactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeexpdesactiveComponent", function() { return ListeexpdesactiveComponent; });
/* harmony import */ var _raw_loader_listeexpdesactive_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./listeexpdesactive.component.html */ "Hl82");
/* harmony import */ var _listeexpdesactive_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeexpdesactive.component.css */ "gg8j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/client */ "cof1");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/client.service */ "2zjr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListeexpdesactiveComponent = /** @class */ (function () {
    function ListeexpdesactiveComponent(servicedashboard, clientService, router, modalService) {
        this.servicedashboard = servicedashboard;
        this.clientService = clientService;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.size = 5;
        this.currentPage = 0;
        this.client = new src_app_client__WEBPACK_IMPORTED_MODULE_4__["Client"];
        this.i = 3;
        this.disable = false;
        this.mod = false;
        this.l1 = new src_app_client__WEBPACK_IMPORTED_MODULE_4__["Client"]();
        this.clients = [];
    }
    /*   ONpage(i,event:any){
        console.log(i);
        event.preventDefault();
        this.currentPage=i;
       this.get();
        
      } */
    ListeexpdesactiveComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ListeexpdesactiveComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListeexpdesactiveComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.expdesactive().subscribe(function (data) {
            _this.clients = data;
            //console.log(data);
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.clients.length
        };
    };
    /* this.pages= new Array(data['totalPages']);},
    err=>{console.log(err); */
    //console.log(this.currentPage);  console.log(this.clients);
    ListeexpdesactiveComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.clientService.chercherparnom(value.keyword).subscribe(function (data) { _this.clients = data; });
    };
    ListeexpdesactiveComponent.prototype.activer = function (client) {
        var _this = this;
        this.clientService.active(client)
            .subscribe(function (result) {
            // console.log(client);
            _this.get();
        });
    };
    ListeexpdesactiveComponent.prototype.Onvoir = function () {
        this.mod = true;
        /* this.clientservice.cherche(this.id).subscribe(data => {
 
        this.c1 = data;console.log(this.c1);}) */ 
    };
    ListeexpdesactiveComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ListeexpdesactiveComponent.prototype.getDismissReason = function (reason) {
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
    ListeexpdesactiveComponent.prototype.onSubmitt = function (id) {
        //console.log(id);
        //console.log(this.l1);
        this.clientService.update(id, this.l1).subscribe();
        this.get();
    };
    ListeexpdesactiveComponent.ctorParameters = function () { return [
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_7__["DashboardadminService"] },
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
    ]; };
    ListeexpdesactiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-listeexpdesactive',
            template: _raw_loader_listeexpdesactive_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_listeexpdesactive_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_7__["DashboardadminService"], src_app_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ListeexpdesactiveComponent);
    return ListeexpdesactiveComponent;
}());



/***/ }),

/***/ "Y1c0":
/*!***************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.center-div\n{\n  position: absolute;\n  margin: auto;\n  top: 100px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 1000px;\n  height: 500px;\n}\n\n\n\n.fakeimg { \n   height: 200px; \n   background: #aaa; \n}\n\n\n\n.jumbotron{\n    background: url(\"/assets/danger.png\");\n    background-repeat:no-repeat;\n\tbackground-size: cover;\n\tcolor : Dark;\n}\n\n\n\nfooter {\n  padding: 1% 5%;\n  text-align:center;\n  background-color: #fff;\n  color: #373B44;\n}\n\n\n\n.sec-contact{\n  background-color: #373B44;\n  color : white;\n}\n\n\n\nhr {\n    height: 4px;\n    color: #123455;\n    background-color: white;\n    border: none;\n}\n\n\n\n.mbr-section-title {\n  font-style: normal;\n  line-height: 1.2;\n}\n\n\n\n.mbr-section-subtitle {\n  line-height: 1.3;\n}\n\n\n\n.mbr-text {\n  font-style: normal;\n  line-height: 1.6;\n}\n\n\n\nbody {\n  height: auto;\n  min-height: 100vh;\n}\n\n\n\n.cid-rgbPkTsWVs {\n  padding-top: 90px;\n  padding-bottom: 90px;\n  background-image: url(\"/assets/danger.png\");\n  background-color:rgba(248,247,216,0.7); \n}\n\n\n\n.cid-rgbPkTsWVs .media-container-row {\n  flex-direction: row-reverse;\n}\n\n\n\n@media (min-width: 992px) {\n  .cid-rgbPkTsWVs .mbr-figure {\n    padding-right: 4rem;\n    padding-right: 0;\n    padding-left: 4rem;\n  }\n}\n\n\n\n@media (max-width: 991px) {\n  .cid-rgbPkTsWVs .mbr-figure {\n    padding-bottom: 3rem;\n  }\n}\n\n\n\n@media (max-width: 767px) {\n  .cid-rgbPkTsWVs .mbr-text {\n    text-align: center;\n  }\n}\n\n\n\n.cid-rgbPkTsWVs2 {\n  padding-top: 90px;\n  padding-bottom: 90px;\n  background-image:  url(\"/assets/danger.png\");\n}\n\n\n\n.cid-rgbPkTsWVs2 .media-container-row {\n  flex-direction: row-reverse;\n}\n\n\n\n@media (min-width: 992px) {\n  .cid-rgbPkTsWVs2 .mbr-figure {\n    padding-right: 4rem;\n    padding-right: 0;\n    padding-left: 4rem;\n  }\n}\n\n\n\n@media (max-width: 991px) {\n  .cid-rgbPkTsWVs2 .mbr-figure {\n    padding-bottom: 3rem;\n  }\n}\n\n\n\n@media (max-width: 767px) {\n  .cid-rgbPkTsWVs2 .mbr-text {\n    text-align: center;\n  }\n}\n\n\n\n.sec-benevole {\n  background-color: #eeeeee; }\n\n\n\n.sec-association {\n  background-color: #eeeeee; }\n\n\n\n.sec-association,\n.sec-benevole\n.container,\n.container-fluid {\n  position: relative;\n  word-wrap: break-word; }\n\n\n\na.mbr-iconfont:hover {\n  text-decoration: none; }\n\n\n\n.article .lead p, .article .lead ul, .article .lead ol, .article .lead pre, .article .lead blockquote {\n  margin-bottom: 0; }\n\n\n\na {\n  font-style: normal;\n  font-weight: 400;\n  cursor: pointer; }\n\n\n\na, a:hover {\n    text-decoration: none; }\n\n\n\nfigure {\n  margin-bottom: 0; }\n\n\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6,\n.display-1, .display-2, .display-3, .display-4 {\n  line-height: 1;\n  word-break: break-word;\n  word-wrap: break-word; }\n\n\n\nb, strong {\n  font-weight: bold; }\n\n\n\nblockquote {\n  padding: 10px 0 10px 20px;\n  position: relative;\n  border-left: 2px solid;\n  border-color: #ff3366; }\n\n\n\ninput:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {\n  transition-delay: 9999s;\n  -webkit-transition-property: background-color, color;\n  transition-property: background-color, color; }\n\n\n\ntextarea[type=\"hidden\"] {\n  display: none; }\n\n\n\n.sec-benevole {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n\n\n.sec-association{\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n\n\n.hidden {\n  visibility: hidden; }\n\n\n\n.mbr-z-index20 {\n  z-index: 20; }\n\n\n\n/*! Base colors */\n\n\n\n.mbr-white {\n  color: #ffffff; }\n\n\n\n.mbr-black {\n  color: #000000; }\n\n\n\n.mbr-bg-white {\n  background-color: #ffffff; }\n\n\n\n.mbr-bg-black {\n  background-color: #000000; }\n\n\n\n/*! Text-aligns */\n\n\n\n.align-left {\n  text-align: left; }\n\n\n\n.align-center {\n  text-align: center; }\n\n\n\n.align-right {\n  text-align: right; }\n\n\n\n@media (max-width: 767px) {\n  .align-left, .align-center, .align-right, .mbr-section-btn, .mbr-section-title {\n    text-align: center; } }\n\n\n\n/*! Font-weight  */\n\n\n\n.mbr-light {\n  font-weight: 300; }\n\n\n\n.mbr-regular {\n  font-weight: 400; }\n\n\n\n.mbr-semibold {\n  font-weight: 500; }\n\n\n\n.mbr-bold {\n  font-weight: 700; }\n\n\n\n/*! Media  */\n\n\n\n.media-size-item {\n  -moz-flex: 1 1 auto;\n  -o-flex: 1 1 auto;\n  flex: 1 1 auto; }\n\n\n\n.media-content {\n  flex-basis: 100%; }\n\n\n\n.media-container-row .media-size-item {\n    width: 400px; }\n\n\n\n.media-container-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: stretch; }\n\n\n\n.media-container-column > * {\n    width: 100%; }\n\n\n\n@media (min-width: 992px) {\n  .media-container-row {\n    flex-wrap: nowrap; } }\n\n\n\nfigure {\n  overflow: hidden; }\n\n\n\nfigure[mbr-media-size] {\n  transition: width 0.1s; }\n\n\n\n.mbr-figure img, .mbr-figure iframe {\n  display: block;\n  width: 100%; }\n\n\n\n.media {\n  max-width: 100%;\n  margin: 0 auto; }\n\n\n\n.mbr-figure {\n  align-self: center; }\n\n\n\n.media-container > div {\n  max-width: 100%; }\n\n\n\n@media (max-width: 991px) {\n  .media-size-item {\n    width: auto !important; }\n  .media {\n    width: auto; }\n  .mbr-figure {\n    width: 100% !important; } }\n\n\n\n/*! Buttons */\n\n\n\n.mbr-section-btn {\n  margin-left: -.25rem;\n  margin-right: -.25rem;\n  font-size: 0; }\n\n\n\nnav .mbr-section-btn {\n  margin-left: 0rem;\n  margin-right: 0rem; }\n\n\n\n/*! Btn icon margin */\n\n\n\n.btn .mbr-iconfont, .btn.btn-sm .mbr-iconfont {\n  cursor: pointer;\n  margin-right: 0.5rem; }\n\n\n\n.btn.btn-md .mbr-iconfont, .btn.btn-md .mbr-iconfont {\n  margin-right: 0.8rem; }\n\n\n\n.mbr-regular {\n  font-weight: 400; }\n\n\n\n.mbr-semibold {\n  font-weight: 500; }\n\n\n\n.mbr-bold {\n  font-weight: 700; }\n\n\n\n[type=\"submit\"] {\n  -webkit-appearance: none; }\n\n\n\n/*! Full-screen */\n\n\n\n.mbr-fullscreen .mbr-overlay {\n  min-height: 100vh; }\n\n\n\n.mbr-fullscreen {\n  display: flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  align-items: center;\n  -webkit-align-items: center;\n  min-height: 100vh;\n  padding-top: 3rem;\n  padding-bottom: 3rem; }\n\n\n\n/*! Map */\n\n\n\n.map {\n  height: 25rem;\n  position: relative; }\n\n\n\n.map iframe {\n    width: 100%;\n    height: 100%; }\n\n\n\n/* Form */\n\n\n\n.form-asterisk {\n  font-family: initial;\n  position: absolute;\n  top: -2px;\n  font-weight: normal; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtBQUNmOzs7O0FBSUE7R0FDRyxhQUFhO0dBQ2IsZ0JBQWdCO0FBQ25COzs7O0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsMkJBQTJCO0NBQzlCLHNCQUFzQjtDQUN0QixZQUFZO0FBQ2I7Ozs7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7Ozs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7Ozs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7Ozs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7Ozs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7OztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7OztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiwyQ0FBMkM7RUFDM0Msc0NBQXNDO0FBQ3hDOzs7O0FBQ0E7RUFDRSwyQkFBMkI7QUFFN0I7Ozs7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDRjs7OztBQUNBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7OztBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7OztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw0Q0FBNEM7QUFDOUM7Ozs7QUFDQTtFQUNFLDJCQUEyQjtBQUU3Qjs7OztBQUNBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNGOzs7O0FBQ0E7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOzs7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOzs7O0FBR0E7RUFDRSx5QkFBeUIsRUFBRTs7OztBQUM3QjtFQUNFLHlCQUF5QixFQUFFOzs7O0FBQzdCOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFFOzs7O0FBQ3pCO0VBQ0UscUJBQXFCLEVBQUU7Ozs7QUFDekI7RUFDRSxnQkFBZ0IsRUFBRTs7OztBQUNwQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFFOzs7O0FBQ2pCO0lBQ0UscUJBQXFCLEVBQUU7Ozs7QUFDM0I7RUFDRSxnQkFBZ0IsRUFBRTs7OztBQUNwQjs7O0VBR0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixxQkFBcUIsRUFBRTs7OztBQUN6QjtFQUNFLGlCQUFpQixFQUFFOzs7O0FBQ3JCO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUU7Ozs7QUFDekI7RUFDRSx1QkFBdUI7RUFDdkIsb0RBQTRDO0VBQTVDLDRDQUE0QyxFQUFFOzs7O0FBQ2hEO0VBQ0UsYUFBYSxFQUFFOzs7O0FBQ2pCO0VBQ0UsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBRTs7OztBQUMxQjtFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUU7Ozs7QUFFMUI7RUFDRSxrQkFBa0IsRUFBRTs7OztBQUN0QjtFQUNFLFdBQVcsRUFBRTs7OztBQUNmLGlCQUFpQjs7OztBQUNqQjtFQUNFLGNBQWMsRUFBRTs7OztBQUNsQjtFQUNFLGNBQWMsRUFBRTs7OztBQUNsQjtFQUNFLHlCQUF5QixFQUFFOzs7O0FBQzdCO0VBQ0UseUJBQXlCLEVBQUU7Ozs7QUFDN0IsaUJBQWlCOzs7O0FBQ2pCO0VBQ0UsZ0JBQWdCLEVBQUU7Ozs7QUFDcEI7RUFDRSxrQkFBa0IsRUFBRTs7OztBQUN0QjtFQUNFLGlCQUFpQixFQUFFOzs7O0FBQ3JCO0VBQ0U7SUFDRSxrQkFBa0IsRUFBRSxFQUFFOzs7O0FBQzFCLGtCQUFrQjs7OztBQUNsQjtFQUNFLGdCQUFnQixFQUFFOzs7O0FBQ3BCO0VBQ0UsZ0JBQWdCLEVBQUU7Ozs7QUFDcEI7RUFDRSxnQkFBZ0IsRUFBRTs7OztBQUNwQjtFQUNFLGdCQUFnQixFQUFFOzs7O0FBQ3BCLFlBQVk7Ozs7QUFDWjtFQUVFLG1CQUFtQjtFQUVuQixpQkFBaUI7RUFDakIsY0FBYyxFQUFFOzs7O0FBQ2xCO0VBRUUsZ0JBQWdCLEVBQUU7Ozs7QUFFbEI7SUFDRSxZQUFZLEVBQUU7Ozs7QUFDbEI7RUFHRSxhQUFhO0VBR2Isc0JBQXNCO0VBR3RCLGVBQWU7RUFHZix1QkFBdUI7RUFHdkIscUJBQXFCO0VBR3JCLG9CQUFvQixFQUFFOzs7O0FBQ3RCO0lBQ0UsV0FBVyxFQUFFOzs7O0FBQ2pCO0VBQ0U7SUFHRSxpQkFBaUIsRUFBRSxFQUFFOzs7O0FBQ3pCO0VBQ0UsZ0JBQWdCLEVBQUU7Ozs7QUFDcEI7RUFDRSxzQkFBc0IsRUFBRTs7OztBQUMxQjtFQUNFLGNBQWM7RUFDZCxXQUFXLEVBQUU7Ozs7QUFDZjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUU7Ozs7QUFDbEI7RUFJRSxrQkFBa0IsRUFBRTs7OztBQUN0QjtFQUNFLGVBQWUsRUFBRTs7OztBQUNuQjtFQUNFO0lBQ0Usc0JBQXNCLEVBQUU7RUFDMUI7SUFDRSxXQUFXLEVBQUU7RUFDZjtJQUNFLHNCQUFzQixFQUFFLEVBQUU7Ozs7QUFDOUIsYUFBYTs7OztBQUNiO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUU7Ozs7QUFDaEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUU7Ozs7QUFDdEIscUJBQXFCOzs7O0FBQ3JCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQixFQUFFOzs7O0FBQ3hCO0VBQ0Usb0JBQW9CLEVBQUU7Ozs7QUFDeEI7RUFDRSxnQkFBZ0IsRUFBRTs7OztBQUNwQjtFQUNFLGdCQUFnQixFQUFFOzs7O0FBQ3BCO0VBQ0UsZ0JBQWdCLEVBQUU7Ozs7QUFDcEI7RUFDRSx3QkFBd0IsRUFBRTs7OztBQUM1QixpQkFBaUI7Ozs7QUFDakI7RUFDRSxpQkFBaUIsRUFBRTs7OztBQUNyQjtFQUNFLGFBQWE7RUFFYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUU7Ozs7QUFDeEIsU0FBUzs7OztBQUNUO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQixFQUFFOzs7O0FBQ3BCO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBRTs7OztBQUNsQixTQUFTOzs7O0FBQ1Q7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNlbnRlci1kaXZcbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cblxuXG4uZmFrZWltZyB7IFxuICAgaGVpZ2h0OiAyMDBweDsgXG4gICBiYWNrZ3JvdW5kOiAjYWFhOyBcbn1cbi5qdW1ib3Ryb257XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kYW5nZXIucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Y29sb3IgOiBEYXJrO1xufSBcbmZvb3RlciB7XG4gIHBhZGRpbmc6IDElIDUlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzNzNCNDQ7XG59XG4uc2VjLWNvbnRhY3R7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNCNDQ7XG4gIGNvbG9yIDogd2hpdGU7XG59XG5ociB7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgY29sb3I6ICMxMjM0NTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLm1ici1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLm1ici1zZWN0aW9uLXN1YnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5tYnItdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbmJvZHkge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmNpZC1yZ2JQa1RzV1ZzIHtcbiAgcGFkZGluZy10b3A6IDkwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Rhbmdlci5wbmdcIik7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDgsMjQ3LDIxNiwwLjcpOyBcbn1cbi5jaWQtcmdiUGtUc1dWcyAubWVkaWEtY29udGFpbmVyLXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNpZC1yZ2JQa1RzV1ZzIC5tYnItZmlndXJlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNpZC1yZ2JQa1RzV1ZzIC5tYnItZmlndXJlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jaWQtcmdiUGtUc1dWcyAubWJyLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmNpZC1yZ2JQa1RzV1ZzMiB7XG4gIHBhZGRpbmctdG9wOiA5MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogIHVybChcIi9hc3NldHMvZGFuZ2VyLnBuZ1wiKTtcbn1cbi5jaWQtcmdiUGtUc1dWczIgLm1lZGlhLWNvbnRhaW5lci1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jaWQtcmdiUGtUc1dWczIgLm1ici1maWd1cmUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY2lkLXJnYlBrVHNXVnMyIC5tYnItZmlndXJlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jaWQtcmdiUGtUc1dWczIgLm1ici10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiAgXG4gIFxuLnNlYy1iZW5ldm9sZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7IH1cbi5zZWMtYXNzb2NpYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlOyB9XG4uc2VjLWFzc29jaWF0aW9uLFxuLnNlYy1iZW5ldm9sZVxuLmNvbnRhaW5lcixcbi5jb250YWluZXItZmx1aWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxuYS5tYnItaWNvbmZvbnQ6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbi5hcnRpY2xlIC5sZWFkIHAsIC5hcnRpY2xlIC5sZWFkIHVsLCAuYXJ0aWNsZSAubGVhZCBvbCwgLmFydGljbGUgLmxlYWQgcHJlLCAuYXJ0aWNsZSAubGVhZCBibG9ja3F1b3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuYSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIGEsIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuZmlndXJlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYsXG4uZGlzcGxheS0xLCAuZGlzcGxheS0yLCAuZGlzcGxheS0zLCAuZGlzcGxheS00IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxuYiwgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbmJsb2NrcXVvdGUge1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzM2NjsgfVxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCwgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciwgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cywgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiA5OTk5cztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3I7IH1cbnRleHRhcmVhW3R5cGU9XCJoaWRkZW5cIl0ge1xuICBkaXNwbGF5OiBub25lOyB9XG4uc2VjLWJlbmV2b2xlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxuLnNlYy1hc3NvY2lhdGlvbntcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxuICBcbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbi5tYnItei1pbmRleDIwIHtcbiAgei1pbmRleDogMjA7IH1cbi8qISBCYXNlIGNvbG9ycyAqL1xuLm1ici13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmOyB9XG4ubWJyLWJsYWNrIHtcbiAgY29sb3I6ICMwMDAwMDA7IH1cbi5tYnItYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XG4ubWJyLWJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgfVxuLyohIFRleHQtYWxpZ25zICovXG4uYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cbi5hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbi5hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFsaWduLWxlZnQsIC5hbGlnbi1jZW50ZXIsIC5hbGlnbi1yaWdodCwgLm1ici1zZWN0aW9uLWJ0biwgLm1ici1zZWN0aW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxuLyohIEZvbnQtd2VpZ2h0ICAqL1xuLm1ici1saWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbi5tYnItcmVndWxhciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbi5tYnItc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNTAwOyB9XG4ubWJyLWJvbGQge1xuICBmb250LXdlaWdodDogNzAwOyB9XG4vKiEgTWVkaWEgICovXG4ubWVkaWEtc2l6ZS1pdGVtIHtcbiAgLXdlYmtpdC1mbGV4OiAxIDEgYXV0bztcbiAgLW1vei1mbGV4OiAxIDEgYXV0bztcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAtby1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87IH1cbi5tZWRpYS1jb250ZW50IHtcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAxMDAlO1xuICBmbGV4LWJhc2lzOiAxMDAlOyB9XG5cbiAgLm1lZGlhLWNvbnRhaW5lci1yb3cgLm1lZGlhLXNpemUtaXRlbSB7XG4gICAgd2lkdGg6IDQwMHB4OyB9XG4ubWVkaWEtY29udGFpbmVyLWNvbHVtbiB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgLm1lZGlhLWNvbnRhaW5lci1jb2x1bW4gPiAqIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tZWRpYS1jb250YWluZXItcm93IHtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgfSB9XG5maWd1cmUge1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5maWd1cmVbbWJyLW1lZGlhLXNpemVdIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4xczsgfVxuLm1ici1maWd1cmUgaW1nLCAubWJyLWZpZ3VyZSBpZnJhbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7IH1cbi5tZWRpYSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87IH1cbi5tYnItZmlndXJlIHtcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xuICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxuLm1lZGlhLWNvbnRhaW5lciA+IGRpdiB7XG4gIG1heC13aWR0aDogMTAwJTsgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tZWRpYS1zaXplLWl0ZW0ge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm1lZGlhIHtcbiAgICB3aWR0aDogYXV0bzsgfVxuICAubWJyLWZpZ3VyZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfSB9XG4vKiEgQnV0dG9ucyAqL1xuLm1ici1zZWN0aW9uLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAtLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IC0uMjVyZW07XG4gIGZvbnQtc2l6ZTogMDsgfVxubmF2IC5tYnItc2VjdGlvbi1idG4ge1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwcmVtOyB9XG4vKiEgQnRuIGljb24gbWFyZ2luICovXG4uYnRuIC5tYnItaWNvbmZvbnQsIC5idG4uYnRuLXNtIC5tYnItaWNvbmZvbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtOyB9XG4uYnRuLmJ0bi1tZCAubWJyLWljb25mb250LCAuYnRuLmJ0bi1tZCAubWJyLWljb25mb250IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07IH1cbi5tYnItcmVndWxhciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbi5tYnItc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNTAwOyB9XG4ubWJyLWJvbGQge1xuICBmb250LXdlaWdodDogNzAwOyB9XG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxuLyohIEZ1bGwtc2NyZWVuICovXG4ubWJyLWZ1bGxzY3JlZW4gLm1ici1vdmVybGF5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cbi5tYnItZnVsbHNjcmVlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtOyB9XG4vKiEgTWFwICovXG4ubWFwIHtcbiAgaGVpZ2h0OiAyNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5tYXAgaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbi8qIEZvcm0gKi9cbi5mb3JtLWFzdGVyaXNrIHtcbiAgZm9udC1mYW1pbHk6IGluaXRpYWw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9Il19 */");

/***/ }),

/***/ "ZMaJ":
/*!*****************************************************!*\
  !*** ./src/app/pages/payment/payment.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media print {\r\n    /* Hide every other element */\r\n    body {\r\n        visibility:  hidden;\r\n    }\r\n    \r\n    .print-container, .print-container * {\r\n        visibility:  visible;\r\n\r\n    }\r\n    \r\n    \r\n    \r\n}\r\n@media print {\r\n    /* style sheet for print goes here */\r\n    #myPrntbtn {\r\n        display :  none;\r\n    }\r\n  }\r\nmat-date-range-input {\r\n\r\n    width: 20px;\r\n  }\r\nng-template {\r\n      \r\n    width : 750px ;\r\n\r\n    height:870px;\r\n\r\n  }\r\ndp-date-picker.dp-material .dp-picker-input {\r\n    box-sizing: border-box;\r\n    height: 15px;\r\n    width:15px;\r\n    font-size: 7px;\r\n    outline: 0;\r\n\r\n    background-color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0I7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxvQkFBb0I7O0lBRXhCOzs7O0FBSUo7QUFDQTtJQUNJLG9DQUFvQztJQUNwQztRQUNJLGVBQWU7SUFDbkI7RUFDRjtBQUNBOztJQUVFLFdBQVc7RUFDYjtBQUdBOztJQUVFLGNBQWM7O0lBRWQsWUFBWTs7RUFFZDtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFVBQVU7O0lBRVYsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xyXG4gICAgLyogSGlkZSBldmVyeSBvdGhlciBlbGVtZW50ICovXHJcbiAgICBib2R5IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiAgaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJpbnQtY29udGFpbmVyLCAucHJpbnQtY29udGFpbmVyICoge1xyXG4gICAgICAgIHZpc2liaWxpdHk6ICB2aXNpYmxlO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLyogc3R5bGUgc2hlZXQgZm9yIHByaW50IGdvZXMgaGVyZSAqL1xyXG4gICAgI215UHJudGJ0biB7XHJcbiAgICAgICAgZGlzcGxheSA6ICBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBtYXQtZGF0ZS1yYW5nZS1pbnB1dCB7XHJcblxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmctdGVtcGxhdGUge1xyXG4gICAgICBcclxuICAgIHdpZHRoIDogNzUwcHggO1xyXG5cclxuICAgIGhlaWdodDo4NzBweDtcclxuXHJcbiAgfVxyXG4gIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOjE1cHg7XHJcbiAgICBmb250LXNpemU6IDdweDtcclxuICAgIG91dGxpbmU6IDA7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "ZpFt":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editcolis/editcolis.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" style=\"min-height: 600px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask bg-gradient-danger opacity-8\"></span>\n    <!-- Header container -->\n    <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <h1 class=\"display-2 text-white\">Hello </h1>\n          <p class=\"text-white mt-0 mb-5\">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      \n      <div class=\"col-xl-8 order-xl-1\">\n        <div class=\"card bg-secondary shadow\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0\">My account</h3>\n              </div>\n              <div class=\"col-4 text-right\">\n                <a href=\"#!\" class=\"btn btn-sm btn-primary\">Settings</a>\n              </div>\n            </div>\n          </div>\n          \n         \n\n          <div class=\"card-body\">\n            <form (ngSubmit)=\"onSubmitt()\" >\n\n              <div class=\"form-group\">\n                <label for=\"name\">prenom</label>\n                <input type=\"text\" [(ngModel)]=\"l1.prenom\" \n                  class=\"form-control\" \n                  id=\"nomsociete\" \n                  name=\"nomsociete\" \n                  value=\"l1.nomsociete\"\n                 >\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\" adresseemail\"> nom</label>\n                <input type=\"text\" [(ngModel)]=\"l1.nom\" \n                  class=\"form-control\" \n                  id=\" adresseemail\" \n                  name=\" adresseemail\" \n                  placeholder=\"\"\n                  >\n              </div>\n           \n              <div class=\"form-group\">\n                <label for=\"adressephysique\">numtel</label>\n                <input type=\"text\" [(ngModel)]=\"l1.numtel\" \n                  class=\"form-control\" \n                  id=\"adressephysique\" \n                  name=\"adressephysique\" \n                  placeholder=\"\"\n                  >\n              </div>\n             \n              <div class=\"form-group\">\n                <label for=\"immatriculation\"> deuxiemenumtel</label>\n                <input type=\"text\" [(ngModel)]=\"l1.deuxiemenumtel\" \n                  class=\"form-control\" \n                  id=\"immatriculation\" \n                  name=\"immatriculation\" \n                  placeholder=\"\"\n                  >\n               \n              </div>\n              <div class=\"form-group\">\n                <label for=\"action\"> codepostal</label>\n                <input type=\"text\" [(ngModel)]=\"codepostal\" \n                  class=\"form-control\" \n                  id=\"action\" \n                  name=\"action\" \n                  placeholder=\"\"\n                \n              >\n              </div>\n        \n            <div class=\"form-group\">\n              <label for=\"action\"> adressepickup</label>\n              <input type=\"text\" [(ngModel)]=\"l1.adressepickup\" \n                class=\"form-control\" \n                id=\"action\" \n                name=\"action\" \n                placeholder=\"\"\n              \n            >\n            </div>\n      \n        <div class=\"form-group\">\n          <label for=\"action\">gouvernorat</label>\n          <input type=\"text\" [(ngModel)]=\"l1.gouvernorat\" \n            class=\"form-control\" \n            id=\"action\" \n            name=\"action\" \n            placeholder=\"\"\n          \n        >\n        </div>\n   \n    <div class=\"form-group\">\n      <label for=\"action\"> designationproduits</label>\n      <input type=\"text\" [(ngModel)]=\"l1.designationproduits\" \n        class=\"form-control\" \n        id=\"action\" \n        name=\"action\" \n        placeholder=\"\"\n      \n    >\n    </div>\n\n<div class=\"form-group\">\n  <label for=\"action\"> remarque</label>\n  <input type=\"text\" [(ngModel)]=\"l1.remarque\" \n    class=\"form-control\" \n    id=\"action\" \n    name=\"action\" \n    placeholder=\"\"\n  \n>\n</div>\n<div class=\"form-group\">\n    <label for=\"action\"> adresseemail</label>\n    <input type=\"text\" [(ngModel)]=\"l1.adressemail\" \n      class=\"form-control\" \n      id=\"action\" \n      name=\"action\" \n      placeholder=\"\"\n    \n  >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"action\"> montant</label>\n    <input type=\"text\" [(ngModel)]=\"l1.montant\" \n      class=\"form-control\" \n      id=\"action\" \n      name=\"action\" \n      placeholder=\"\"\n    \n  >\n  </div>\n              \n              <button type=\"submit\"  \n                class=\"btn btn-info\">Submit</button>\n  \n                \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "dV1M":
/*!*************************************************************!*\
  !*** ./src/app/pages/user-profil/user-profil.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsL3VzZXItcHJvZmlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "e2+W":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/retourdifadmin/retourdifadmin.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"search\" >\n              </div>\n              \n            </div>\n          </form>\n  \n  <br>\n           \n          <ul  >\n            \n                \n  \n  \n        </ul>\n \n  \n  \n  \n  \n  \n                \n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">QRcode</th>\n                  <th scope=\"col\">Codecolis</th>\n                  <th scope=\"col\">prenom et prenom </th>\n                 \n                  <th scope=\"col\"> numtel</th>\n  \n                   \n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">adressemail</th>\n                 \n                  <th scope=\"col\">codepostal</th>\n                  <th scope=\"col\">adressepickup</th>\n                  <th scope=\"col\"> gouvernorat</th>\n  \n                  <th scope=\"col\">designationproduit</th>\n                  <th scope=\"col\">remarque</th>\n                  \n                 <th scope=\"col\"> Montant a payer</th>\n                \n                 <th scope=\"col\"> etat colis</th>\n                 <th scope=\"col\"> Action</th>\n             \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers  | paginate: config | filter: term\">\n             \n                  <td>\n                  \n                  <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                 <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n                 \n                \n                </td>\n                 <ng-template #etat let-modal>\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"card-body\">\n                      <div class=\"table-responsive\" >\n                        <table class=\"table align-items-center table-flush\">\n                          <thead class=\"thead-light\">\n                            <tr>\n                              <th scope=\"col\">date</th>\n                              <th scope=\"col\">etat</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let colis of tablec\">\n                              <td >{{colis.createdAt | date }}</td>\n                              <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                             \n                            </tr>\n                          </tbody>\n                        </table>\n                    \n                  </div>\n                     \n                    </div>\n                  </div>\n                 \n                </ng-template>\n                \n                \n                \n                \n                \n                \n                \n                \n                \n                    <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                  \n                  <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                  <td>{{ colis.numtel }}</td>\n            \n                  <td>{{ colis.adresse}}</td>\n                  <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                  <td>{{ colis.codepostal}}</td>\n                  <td>{{ colis.adressepickup}}</td>\n                  <td>{{ colis.gouvernorat}}</td>\n                \n                  <td>{{ colis.designationproduits}}</td>\n  \n                  <td>{{ colis.remarque   }}</td>\n                \n                  <td>{{ colis.montant}} TND</td>\n                \n                \n               <td >\n                   <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                    <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                      <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                    \n                    </p>\n \n                   </div>\n                  \n               </td>\n\n\n               <td class=\"text-right\">\n                <div ngbDropdown  placement=\"top-right\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n             <!-- <ul>          -->\n              <ng-template #content let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <form  >\n                      <div class=\"input-group mb-3\">\n               \n                        <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                            <option selected>Choose...</option>\n                            <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                             class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                             \n                             \n                             {{item}}</option>\n                            </select>\n        \n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                              </div>\n                           \n                    </div>\n                  \n                      <div class=\"modal-footer\">\n          \n                      </div>\n                    </form>\n                  </div>\n                </div>\n               \n              </ng-template>\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                    </button>\n                    \n                   <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </button> -->\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"imprimer\" (click)=\"generatePdf(colis)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                    </button>\n\n\n\n\n\n                    <ng-template #eya let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"card-body\">\n                          <form  >\n                            <div class=\"input-group mb-3\">\n                     \n                              <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                                <option selected>Choose...</option>\n                                <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.id\"\n                                 class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.id}}</option>\n                                </select>\n            \n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                  </div>\n                          </div>\n                        \n                            <div class=\"modal-footer\">\n                \n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                     \n                    </ng-template>\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                    </button>\n                    \n                   \n                  </div>\n                </div>\n              </td>\n              \n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n  \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "eJXf":
/*!**********************************************************!*\
  !*** ./src/app/pages/clientedit/clientedit.component.ts ***!
  \**********************************************************/
/*! exports provided: ClienteditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteditComponent", function() { return ClienteditComponent; });
/* harmony import */ var _raw_loader_clientedit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./clientedit.component.html */ "9Tbz");
/* harmony import */ var _clientedit_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientedit.component.css */ "48Pz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/client */ "cof1");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client.service */ "2zjr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClienteditComponent = /** @class */ (function () {
    function ClienteditComponent(toastr, route, router, clientservice) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.clientservice = clientservice;
        //this.livreur= new Livreur();
        this.l1 = new src_app_client__WEBPACK_IMPORTED_MODULE_5__["Client"]();
        this.c1 = new src_app_client__WEBPACK_IMPORTED_MODULE_5__["Client"]();
    }
    ClienteditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        //console.log(this.route.snapshot.params.id);
        this.clientservice.cherche(this.id).subscribe(function (data) {
            _this.l1 = data;
            //console.log(this.l1);
        }, function (err) {
            console.log(err);
        });
        //console.log(this.l1);
    };
    ClienteditComponent.prototype.onSubmitt = function () {
        var _this = this;
        this.clientservice.update(this.id, this.l1).
            subscribe(function (result) {
            _this.router.navigate(['client']),
                _this.toastr.success('success modification');
            console.log("reeeeeeeeeeeeeee");
        }, function (data) {
            _this.toastr.success('success modification');
        });
    };
    ClienteditComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"] }
    ]; };
    ClienteditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-clientedit',
            template: _raw_loader_clientedit_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_clientedit_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"]])
    ], ClienteditComponent);
    return ClienteditComponent;
}());



/***/ }),

/***/ "f/xT":
/*!**************************************************************************!*\
  !*** ./src/app/pages/listelivreuractive/listelivreuractive.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListelivreuractiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListelivreuractiveComponent", function() { return ListelivreuractiveComponent; });
/* harmony import */ var _raw_loader_listelivreuractive_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./listelivreuractive.component.html */ "xGtm");
/* harmony import */ var _listelivreuractive_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listelivreuractive.component.css */ "3zvd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../livreur-service.service */ "hnPV");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListelivreuractiveComponent = /** @class */ (function () {
    function ListelivreuractiveComponent(servicedashboard, livreurService, router, modalService) {
        this.servicedashboard = servicedashboard;
        this.livreurService = livreurService;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.size = 5;
        this.currentPage = 0;
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_3__["Livreur"];
        this.i = 3;
        this.disable = false;
        this.l1 = new src_app_livreur__WEBPACK_IMPORTED_MODULE_3__["Livreur"]();
        this.livreurs = [];
    }
    ListelivreuractiveComponent.prototype.ngOnInit = function () {
        this.get();
        /* this.livreurService.fin().subscribe(data => {
            this.livreurs = data;},
             err=>{console.log(err);
            }); */
    };
    ListelivreuractiveComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.livreuractive().subscribe(function (data) {
            _this.livreurs = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.livreurs.length
        };
        // console.log(this.livreurs);
        /*   this.pages= new Array(data['totalPages']);},
          err=>{console.log(err); */
    };
    ListelivreuractiveComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListelivreuractiveComponent.prototype.activer = function (livreur) {
        var _this = this;
        this.livreurService.active(livreur)
            .subscribe(function (result) {
            _this.get();
            //console.log(livreur);
        });
    };
    ListelivreuractiveComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.livreurService.find(value.keyword).subscribe(function (data) { _this.livreurs = data; });
        // console.log(value);
        // console.log(this.pages);
    };
    ListelivreuractiveComponent.prototype.onEditLivreur = function (livreur) {
        this.router.navigateByUrl("/editlivreur/" + livreur.id);
        // console.log(livreur.id);
    };
    ListelivreuractiveComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ListelivreuractiveComponent.prototype.getDismissReason = function (reason) {
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
    ListelivreuractiveComponent.prototype.onSubmitt = function (id) {
        //  console.log(id);
        //console.log(this.l1);
        //console.log(this.l1);
        this.livreurService.update(id, this.l1).subscribe();
        this.get();
    };
    ListelivreuractiveComponent.ctorParameters = function () { return [
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__["DashboardadminService"] },
        { type: _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__["LivreurServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
    ]; };
    ListelivreuractiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-listelivreuractive',
            template: _raw_loader_listelivreuractive_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_listelivreuractive_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__["DashboardadminService"], _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__["LivreurServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ListelivreuractiveComponent);
    return ListelivreuractiveComponent;
}());

/* Onactive(livreur:Livreur){this.livreurService.active(livreur).subscribe(result => this. go(this.disable),data=>{this.disable=data.disponibilite;});}

go(disable){console.log(this.disable);
if(disable==true){
disable=false;}
console.log(this.disable);
}
  */


/***/ }),

/***/ "g+jZ":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/client/client.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      \n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">liste client</h3>\n        </div>\n        \n       <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\" >\n                  \n                  <span class=\"input-group-text btn-inner--icon\" type=\"Submit\" (click)= \"onChercher(f.value)\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n     <ul>         \n          <ng-template #content let-modal>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"modal-basic-title\">Ajouter un client</h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n\n              <app-clientajout></app-clientajout>\n              \n\n            </div>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">  <span aria-hidden=\"true\">&times;</span></button>\n          </ng-template>\n          \n\n         \n          <button type=\"button\" class=\"btn-danger\" (click)=\"open(content)\">Ajouter</button>\n      \n          <hr>\n\n        </ul>\n\n      <div class=\"row mt-5\">\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <th scope=\"col\"> CodeClient</th>\n              <th scope=\"col\"> logo</th>\n              <th scope=\"col\">Nom du société</th>\n              <th scope=\"col\">Adresse-email</th>\n              <th scope=\"col\"> Adresse</th>\n              <th scope=\"col\"> immatriculationFiscale</th>\n\n              <th scope=\"col\"> actions</th>\n              <th scope=\"col\"> edit</th>\n            </thead>\n            <tbody>\n              \n                <tr *ngFor=\"let client of clients   | paginate: config\">\n                  <td  scope=\"row\">{{ client.codeClient }}</td>\n\n\n                  <td> <img  name=\"image\" [src]=\"'data:image/jpeg;base64,'+client.image\" width=\"100px\" height=\"100px\"></td>\n                  <td  scope=\"row\"> {{ client.nomsociete }}</td>\n                  <td  scope=\"row\"><a href=\"mailto:{{ client.AdresseEmail }}\">{{ client.adresseemail }}</a></td>\n                  <td scope=\"row\" >{{ client.adressephysique }}</td>\n                  <td scope=\"row\">{{ client.immatriculation }}</td>\n\n                  <td  *ngIf=\"client.action\" >\n\n                    <i class=\"fas fa-toggle-on  text-blue text-lg\" (click)=\"activer(client)\"></i>\n\n                  \n                </td>\n\n                <td  *ngIf=\"!client.action\" >\n\n                  <i class=\"fas fa-toggle-off text-blue text-lg\" (click)=\"activer(client)\"></i>\n\n                \n              </td>\n              <td scope=\"row\">\n              \n\n                <!-- <ul>          -->\n                  <ng-template #content let-modal>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\" id=\"modal-basic-title\">Modifier le client</h4>\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"card-body\">\n                        <form  >\n                          <div class=\"form-group\">\n                            <label for=\"name\">Nom</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.nomsociete\" \n                              class=\"form-control\" \n                              id=\"nomsociete\" \n                              name=\"nomsociete\" \n                              placeholder=\"{{client.nomsociete}}\"disabled=\"\">\n                             \n                          </div>\n                        \n                          <div class=\"form-group\">\n                            <label for=\" adresseemail\">Email</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.adresseemail\" \n                              class=\"form-control\" \n                              id=\" adresseemail\" \n                              name=\" adresseemail\"  \n                              placeholder=\"{{  client.adresseemail }}\" disabled=\"\">\n                              \n                          </div>\n                       \n                          <div class=\"form-group\">\n                            <label for=\"adressephysique\">Adresse</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.adressephysique\" \n                              class=\"form-control\" \n                              id=\"adressephysique\" \n                              name=\"adressephysique\" \n                              placeholder=\"{{client.adressephysique}}\"\n                              >\n                          </div>\n                         \n                          <div class=\"form-group\">\n                            <label for=\"immatriculation\">immatriculation</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.immatriculation\" \n                              class=\"form-control\" \n                              id=\"immatriculation\" \n                              name=\"immatriculation\" \n                              placeholder=\"{{client.immatriculation}}\"\n                              >\n                           \n                          </div>\n                          <div class=\"modal-footer\">\n                          <button type=\"submit\"  \n                          class=\"btn btn-danger \" (click)=\"onSubmitt(client.codeClient)\"\n                         >\n                    \n                    \n                            <span class=\"btn-inner--icon\"><i class=\"fas fa-check-square\">Modifier</i></span></button>\n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                   \n                  </ng-template>\n                  \n                  \n                 \n                  <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"open(content)\">\n                    \n                    \n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\">Modifier</i></span></button>\n                  \n                <!--   <hr>\n        \n                </ul>\n\n\n\n\n                <a routerLinkActive=\"active\" [routerLink]=\"['/clientedit',client.codeClient]\" (click)=\"open(content)\">\n                  \n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\"></i></span>\n               \n                  \n                </a> -->\n              </td>\n              </tr>\n            </tbody>\n          </table>\n          \n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\n        </div>\n          \n          \n          <!--editer-->\n         \n          <!--fin editer-->\n<!-- \n         \n          \n        </div>\n          \n          \n\n          </table>\n\n          <ul class=\"pagination justify-content-end mb-0\">\n              \n            <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n              \n              <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                    \n            </nav></ul>\n             -->\n          \n        </div>\n      </div> \n\n\n\n\n    \n    \n    </div>\n  </div>\n\n");

/***/ }),

/***/ "gg8j":
/*!*************************************************************************!*\
  !*** ./src/app/pages/listeexpdesactive/listeexpdesactive.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RlZXhwZGVzYWN0aXZlL2xpc3RlZXhwZGVzYWN0aXZlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "iqCg":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listelireurdesactive/listelireurdesactive.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      \n         \n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">liste livreur</h3>\n        </div>\n        \n        <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n          <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" type=\"Submit\" (click)=\"onChercher(f.value)\"><i class=\"fas fa-search\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n              (blur)=\"focus = false\" name=\"keyword\" ngModel>\n            </div>\n          </div>\n        </form>\n\n\n        <ul>         \n          <ng-template #content let-modal>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"modal-basic-title\">Ajouter un livreur\n              </h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n\n              <app-ajoutlivreur></app-ajoutlivreur>\n              \n\n            </div>\n           \n          </ng-template>\n          \n\n         \n          <button type=\"button\" class=\"btn btn-primary\n           btn-sm\" (click)=\"open(content)\">Ajouter</button>\n          \n          <hr>\n\n        </ul>\n\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">numLivreur</th>\n                <th scope=\"col\">Nom</th>\n                <th scope=\"col\">prenom</th>\n                <th scope=\"col\">adresse</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">véhicule</th>\n                <th scope=\"col\">disponibilite</th>\n                <th scope=\"col\">Edit</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let livreur of livreurs  | paginate: config \">\n                <td>{{livreur.id }}</td>\n                <td>{{ livreur.nom }}</td>\n                <td>{{ livreur.prenom }}</td>\n                <td>{{ livreur.adresse}}</td>\n                \n                <td><a href=\"mailto:{{ livreur.email }}\">{{ livreur.email }}</a></td>\n                <td>{{ livreur.vehicule }}</td>\n                \n                <td  *ngIf=\"livreur.disponibilite\" >\n\n                  <i class=\"fas fa-toggle-on  text-blue text-lg\" (click)=\"activer(livreur)\"></i>\n\n                \n              </td>\n\n              <td  *ngIf=\"!livreur.disponibilite\" >\n\n                <i class=\"fas fa-toggle-off text-blue text-lg\" (click)=\"activer(livreur)\"></i>\n\n              \n            </td>\n\n\n              <td scope=\"row\">\n            \n\n                <!-- <ul>         <label class=\"custom-toggle\">\n                  <input type=\"checkbox\" >\n                  <span class=\"custom-toggle-slider rounded-circle\"></span>\n                </label>   -->\n                  <ng-template #content let-modal>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\" id=\"modal-basic-title\">Modifier le client</h4>\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"card-body\">\n                        <form  >\n                          <div class=\"form-group\">\n                            <label for=\"name\">Nom</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.nom\" \n                              class=\"form-control\" \n                              id=\"name\" \n                              name=\"name\" \n                              value=\"l1.nom\"\n                              placeholder=\"{{livreur.nom}}\"\n                             >\n                          </div>\n                          \n                          <div class=\"form-group\">\n                            <label for=\"prenom\">prenom</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.prenom\" \n                              class=\"form-control\" \n                              id=\"prenom\" \n                              name=\"prenom\" \n                              placeholder=\"{{livreur.prenom}} \"\n                              >\n                          </div>\n                       \n                          <div class=\"form-group\">\n                            <label for=\"adresse\">adresse</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.adresse\" \n                              class=\"form-control\" \n                              id=\"adresse\" \n                              name=\"adresse\" \n                              placeholder=\"{{livreur.adresse}}\"\n                              >\n                          </div>\n                         \n                          <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.email\" \n                              class=\"form-control\" \n                              id=\"email\" \n                              name=\"email\" \n                              placeholder=\"{{livreur.email}}\"\n                              >\n                           \n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"vehicule\">vehicule</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.vehicule\" \n                              class=\"form-control\" \n                              id=\"vehicule\" \n                              name=\"vehicule\" \n                              placeholder=\"{{livreur.vehicule}}\"\n                            \n                          >\n                          </div>\n                          \n                          <div class=\"modal-footer\">\n                            <button type=\"submit\"  \n                            class=\"btn btn-outline-danger btn-sm\" (click)=\"onSubmitt(livreur.id)\"placement=\"top\"\n                            ngbPopover=\"vous avez modifier les donées\">\n                      \n                      \n                              <span class=\"btn-inner--icon\"><i class=\"fas fa-check-square\">Modifier</i></span></button>\n                            </div>\n                            \n                        </form>\n                      </div>\n                         \n                        \n                    </div>\n                   \n                  </ng-template>\n                  \n                  \n                 \n                  <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"open(content)\">\n                    \n                    \n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\">Modifier</i></span></button>\n                 \n              </tr>\n            </tbody>\n          </table>\n\n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n          <!--editer-->\n         \n          <!--fin editer-->\n<!-- \n         \n          \n        </div>\n        <div class=\"card-footer py-4\">\n          <nav aria-label=\"...\">\n\n            <ul class=\"pagination justify-content-end mb-0\">\n              \n            <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n              \n              <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                            </ul>\n            \n          </nav>\n        </div>\n      </div>\n\n\n -->\n\n    \n    \n    </div>\n  </div>\n\n");

/***/ }),

/***/ "irFu":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/livreur/livreur.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n           \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste livreur</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" type=\"Submit\" (click)=\"onChercher(f.value)\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n  \n  \n          <ul>         \n            <ng-template #content let-modal>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Ajouter un livreur\n                </h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n  \n                <app-ajoutlivreur></app-ajoutlivreur>\n                \n  \n              </div>\n             \n            </ng-template>\n            \n  \n           \n            <button type=\"button\" class=\"btn-danger\" (click)=\"open(content)\">Ajouter</button>\n            \n            <hr>\n  \n          </ul>\n  \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">numLivreur</th>\n                  <th scope=\"col\">Nom</th>\n                  <th scope=\"col\">prenom</th>\n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">Email</th>\n                  <th scope=\"col\">véhicule</th>\n                  <th scope=\"col\">mot de passe</th>\n                  <th scope=\"col\">disponibilite</th>\n                  <th scope=\"col\">Edit</th>\n                  <th scope=\"col\">Ordre de mission</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let livreur of livreurs  | paginate: config \">\n                  <td>{{livreur.id }}</td>\n                  <td>{{ livreur.nom }}</td>\n                  <td>{{ livreur.prenom }}</td>\n                  <td>{{ livreur.adresse}}</td>\n                  \n                  <td><a href=\"mailto:{{ livreur.email }}\">{{ livreur.email }}</a></td>\n                  <td>{{ livreur.vehicule }}</td>\n                  <td>{{ livreur.password}}</td>\n                  <td  *ngIf=\"livreur.disponibilite\" >\n\n                    <i class=\"fas fa-toggle-on  text-blue text-lg\" (click)=\"activer(livreur)\"></i>\n\n                  \n                </td>\n\n                <td  *ngIf=\"!livreur.disponibilite\" >\n                   \n                  <i class=\"fas fa-toggle-off text-blue text-lg\"  (click)=\"activer(livreur)\"></i>\n                \n                \n               </td>\n\n\n                <td >\n              \n\n                  <!-- <ul>         <label class=\"custom-toggle\">\n                    <input type=\"checkbox\" >\n                    <span class=\"custom-toggle-slider rounded-circle\"></span>\n                  </label>   -->\n                    <ng-template #content let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"modal-basic-title\">Modifier le client</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"card-body\">\n                          <form  >\n                            <div class=\"form-group\">\n                              <label for=\"name\">Nom</label>\n                              <input type=\"text\" [(ngModel)]=\"l1.nom\" \n                                class=\"form-control\" \n                                id=\"name\" \n                                name=\"name\" \n                                value=\"l1.nom\"\n                                placeholder=\"{{livreur.nom}}\"\n                               >\n                            </div>\n                            \n                            <div class=\"form-group\">\n                              <label for=\"prenom\">prenom</label>\n                              <input type=\"text\" [(ngModel)]=\"l1.prenom\" \n                                class=\"form-control\" \n                                id=\"prenom\" \n                                name=\"prenom\" \n                                placeholder=\"{{livreur.prenom}} \"\n                                >\n                            </div>\n                         \n                            <div class=\"form-group\">\n                              <label for=\"adresse\">adresse</label>\n                              <input type=\"text\" [(ngModel)]=\"l1.adresse\" \n                                class=\"form-control\" \n                                id=\"adresse\" \n                                name=\"adresse\" \n                                placeholder=\"{{livreur.adresse}}\"\n                                >\n                            </div>\n                           \n                            <div class=\"form-group\">\n                              <label for=\"email\">Email</label>\n                              <input type=\"text\" [(ngModel)]=\"l1.email\" \n                                class=\"form-control\" \n                                id=\"email\" \n                                name=\"email\" \n                                placeholder=\"{{livreur.email}}\"\n                                >\n                             \n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"vehicule\">vehicule</label>\n                              <input type=\"text\" [(ngModel)]=\"l1.vehicule\" \n                                class=\"form-control\" \n                                id=\"vehicule\" \n                                name=\"vehicule\" \n                                placeholder=\"{{livreur.vehicule}}\"\n                              \n                            >\n                            </div>\n                            \n                            <div class=\"modal-footer\">\n                              <button type=\"submit\"  \n                              class=\"btn btn-outline-danger btn-sm\" (click)=\"onSubmitt(livreur.id)\"\n                             >\n                        \n                        \n                                <span class=\"btn-inner--icon\"><i class=\"fas fa-check-square\">Modifier</i></span></button>\n                              </div>\n                              \n                          </form>\n                        </div>\n                           \n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">  <span aria-hidden=\"true\">&times;</span></button>\n                      </div>\n                     \n                    </ng-template>\n                    \n                    \n                   \n                    <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"open(content)\">\n                      \n                      \n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\">Modifier</i></span></button>\n                   \n\n                   </td>\n                \n                     \n                   <td> <button  (click)=\"imprime(livreur.id)\" placement=\"top\" ngbTooltip=\"ordredemision\" >\n\n                       \n\n                    <span class=\"btn-inner--icon\" ><i class=\"fas fa-print\"></i></span>\n                 \n                \n                   </button></td>\n    \n                </tr>\n                \n              </tbody>\n            </table>\n\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n            <!--editer-->\n           \n            <!--fin editer-->\n  <!-- \n           \n            \n          </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>\n  \n  \n   -->\n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "jUMD":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"text-center\">liste des reclamations </h3>\n          </div>\n \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <th scope=\"col\"> nomsociete</th>\n  \n                <th scope=\"col\">emailSociete</th>\n                <th scope=\"col\">message</th>\n                \n              </thead>\n              <tbody>\n                \n                  <tr *ngFor=\"let rec of reclamations\">\n                    <td>{{ rec.prenom }}</td>\n                    <td>{{ rec.email }}</td>\n                    \n                    <td>{{ rec.message }}</td>\n                  \n               \n                </tr>\n              </tbody>\n            </table>\n      </div> \n    </div> \n  </div> \n\n\n</div>\n\n  <br><br>");

/***/ }),

/***/ "jyS5":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/colisrtndepotadmin/colisrtndepotadmin.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"search\" >\n              </div>\n              \n            </div>\n          </form>\n  \n  <br>\n           \n          <ul  >\n            \n                \n  \n  \n        </ul>\n \n  \n  \n  \n  \n  \n                \n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">QRcode</th>\n                  <th scope=\"col\">Codecolis</th>\n                  <th scope=\"col\">prenom et prenom </th>\n                 \n                  <th scope=\"col\"> numtel</th>\n  \n                   \n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">adressemail</th>\n                 \n                  <th scope=\"col\">codepostal</th>\n                  <th scope=\"col\">adressepickup</th>\n                  <th scope=\"col\"> gouvernorat</th>\n  \n                  <th scope=\"col\">designationproduit</th>\n                  <th scope=\"col\">remarque</th>\n                  \n                 <th scope=\"col\"> Montant a payer</th>\n                \n                 <th scope=\"col\"> etat colis</th>\n                 <th scope=\"col\"> Action</th>\n             \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers  | paginate: config | filter: term\">\n             \n                  <td>\n                  \n                  <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                 <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n                 \n                \n                </td>\n                 <ng-template #etat let-modal>\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"card-body\">\n                      <div class=\"table-responsive\" >\n                        <table class=\"table align-items-center table-flush\">\n                          <thead class=\"thead-light\">\n                            <tr>\n                              <th scope=\"col\">date</th>\n                              <th scope=\"col\">etat</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let colis of tablec\">\n                              <td >{{colis.createdAt | date }}</td>\n                              <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                             \n                            </tr>\n                          </tbody>\n                        </table>\n                    \n                  </div>\n                     \n                    </div>\n                  </div>\n                 \n                </ng-template>\n                \n                \n                \n                \n                \n                \n                \n                \n                \n                    <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                  \n                  <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                  <td>{{ colis.numtel }}</td>\n            \n                  <td>{{ colis.adresse}}</td>\n                  <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                  <td>{{ colis.codepostal}}</td>\n                  <td>{{ colis.adressepickup}}</td>\n                  <td>{{ colis.gouvernorat}}</td>\n                \n                  <td>{{ colis.designationproduits}}</td>\n  \n                  <td>{{ colis.remarque   }}</td>\n                \n                  <td>{{ colis.montant}} TND</td>\n                \n                \n               <td >\n                   <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                    <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                      <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                    \n                    </p>\n \n                   </div>\n                  \n               </td>\n\n\n               <td class=\"text-right\">\n                <div ngbDropdown  placement=\"top-right\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n             <!-- <ul>          -->\n              <ng-template #content let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <form  >\n                      <div class=\"input-group mb-3\">\n               \n                        <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                            <option selected>Choose...</option>\n                            <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                             class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                             \n                             \n                             {{item}}</option>\n                            </select>\n        \n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                              </div>\n                           \n                    </div>\n                  \n                      <div class=\"modal-footer\">\n          \n                      </div>\n                    </form>\n                  </div>\n                </div>\n               \n              </ng-template>\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                    </button>\n                    \n                   <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </button> -->\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"imprimer\" (click)=\"generatePdf(colis)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                    </button>\n\n\n\n\n\n                    <ng-template #eya let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"card-body\">\n                          <form  >\n                            <div class=\"input-group mb-3\">\n                     \n                              <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                                <option selected>Choose...</option>\n                                <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.id\"\n                                 class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.nom}}</option>\n                                </select>\n            \n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                  </div>\n                          </div>\n                        \n                            <div class=\"modal-footer\">\n                \n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                     \n                    </ng-template>\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                    </button>\n                    \n                   \n                  </div>\n                </div>\n              </td>\n              \n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n  \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "kxCL":
/*!**********************************************************!*\
  !*** ./src/app/pages/ajoutcolis/ajoutcolis.component.ts ***!
  \**********************************************************/
/*! exports provided: AjoutcolisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutcolisComponent", function() { return AjoutcolisComponent; });
/* harmony import */ var _raw_loader_ajoutcolis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajoutcolis.component.html */ "Igjt");
/* harmony import */ var _ajoutcolis_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajoutcolis.component.css */ "lfMM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AjoutcolisComponent = /** @class */ (function () {
    function AjoutcolisComponent(route, router, colisservice) {
        this.route = route;
        this.router = router;
        this.colisservice = colisservice;
        this.items = [
            "Ariana",
            "Béja",
            "Ben Arous",
            "Bizerte",
            "Gabès",
            "Gafsa",
            "Jendouba",
            "Kairouan",
            "Kasserine",
            "Kébili",
            "Le Kef",
            "Mahdia",
            "La Manouba",
            "Médenine",
            "Monastir",
            "Nabeul",
            "Sfax",
            "Sidi Bouzid",
            "Siliana",
            "Sousse",
            "Tataouine",
            "Tozeur",
            "Tunis",
            "Zaghouan"
        ];
        this.l1 = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_4__["Colis"];
    }
    AjoutcolisComponent.prototype.ngOnInit = function () {
    };
    AjoutcolisComponent.prototype.onSubmit = function () {
        var _this = this;
        this.colisservice.Save(this.l1).subscribe(function (result) { return _this.gotocolislist(); });
    };
    AjoutcolisComponent.prototype.gotocolislist = function () { this.router.navigate(['/colis']); };
    AjoutcolisComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__["ColisService"] }
    ]; };
    AjoutcolisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ajoutcolis',
            template: _raw_loader_ajoutcolis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajoutcolis_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_5__["ColisService"]])
    ], AjoutcolisComponent);
    return AjoutcolisComponent;
}());



/***/ }),

/***/ "lfMM":
/*!***********************************************************!*\
  !*** ./src/app/pages/ajoutcolis/ajoutcolis.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fqb3V0Y29saXMvYWpvdXRjb2xpcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "mTDM":
/*!************************************************************************!*\
  !*** ./src/app/pages/colisaudepotadmin/colisaudepotadmin.component.ts ***!
  \************************************************************************/
/*! exports provided: ColisaudepotadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColisaudepotadminComponent", function() { return ColisaudepotadminComponent; });
/* harmony import */ var _raw_loader_colisaudepotadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./colisaudepotadmin.component.html */ "TSli");
/* harmony import */ var _colisaudepotadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colisaudepotadmin.component.css */ "1vXy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ColisaudepotadminComponent = /** @class */ (function () {
    function ColisaudepotadminComponent(toastr, servicedashboard, modalService, sanitizer, colisService, router, servicelivreur) {
        this.toastr = toastr;
        this.servicedashboard = servicedashboard;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.p = 1;
        this.colis = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__["Colis"];
        this.term = "";
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur"
        ];
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__["Affectationlivreur"]();
        this.coliers = [];
    }
    ColisaudepotadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
    };
    ColisaudepotadminComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.depotalladmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    ColisaudepotadminComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    ColisaudepotadminComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            //console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    ColisaudepotadminComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        //console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisaudepotadminComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        //console.log(id);
        //console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisaudepotadminComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //console.log(value);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    ColisaudepotadminComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    ColisaudepotadminComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisaudepotadminComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisaudepotadminComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ColisaudepotadminComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisaudepotadminComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisaudepotadminComponent.prototype.consulter = function (id) {
        var _this = this;
        //console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    ColisaudepotadminComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"] }
    ]; };
    ColisaudepotadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-colisaudepotadmin',
            template: _raw_loader_colisaudepotadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_colisaudepotadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"]])
    ], ColisaudepotadminComponent);
    return ColisaudepotadminComponent;
}());

//}


/***/ }),

/***/ "mXNp":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listeexpactive/listeexpactive.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      \n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">liste client</h3>\n        </div>\n        \n       <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\" >\n                  \n                  <span class=\"input-group-text btn-inner--icon\" type=\"Submit\" (click)= \"onChercher(f.value)\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\" true\"\n                (blur)=\"focus = false\" name=\"keyword\" ngModel>\n              </div>\n            </div>\n          </form>\n\n\n      <div class=\"row mt-5\">\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <th scope=\"col\"> codeClient</th>\n              <th scope=\"col\"> logo</th>\n              <th scope=\"col\">nomSociete</th>\n              <th scope=\"col\">AdresseEmail</th>\n              <th scope=\"col\"> AdressePhysique</th>\n              <th scope=\"col\"> immatriculationFiscale</th>\n\n              <th scope=\"col\"> actions</th>\n              <th scope=\"col\"> edit</th>\n            </thead>\n            <tbody>\n              \n                <tr *ngFor=\"let client of clients   | paginate: config\">\n                  <td  scope=\"row\">{{ client.codeClient }}</td>\n\n\n                  <td> <img  name=\"image\" [src]=\"'data:image/jpeg;base64,' + client.image\" width=\"100px\" height=\"100px\"></td>\n                  <td  scope=\"row\"> {{ client.nomsociete }}</td>\n                  <td  scope=\"row\"><a href=\"mailto:{{ client.AdresseEmail }}\">{{ client.adresseemail }}</a></td>\n                  <td scope=\"row\" >{{ client.adressephysique }}</td>\n                  <td scope=\"row\">{{ client.immatriculation }}</td>\n\n                  <td  *ngIf=\"client.action\" >\n\n                    <i class=\"fas fa-toggle-on  text-blue text-lg\" (click)=\"activer(client)\"></i>\n\n                  \n                </td>\n\n                <td  *ngIf=\"!client.action\" >\n\n                  <i class=\"fas fa-toggle-off text-blue text-lg\" (click)=\"activer(client)\"></i>\n\n                \n              </td>\n              <td scope=\"row\">\n              \n\n                <!-- <ul>          -->\n                  <ng-template #content let-modal>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\" id=\"modal-basic-title\">Modifier le client</h4>\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"card-body\">\n                        <form  >\n                          <div class=\"form-group\">\n                            <label for=\"name\">Nom</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.nomsociete\" \n                              class=\"form-control\" \n                              id=\"nomsociete\" \n                              name=\"nomsociete\" \n                              placeholder=\"{{client.nomsociete}}\"disabled=\"\">\n                             \n                          </div>\n                        \n                          <div class=\"form-group\">\n                            <label for=\" adresseemail\">E-mail</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.adresseemail\" \n                              class=\"form-control\" \n                              id=\" adresseemail\" \n                              name=\" adresseemail\"  \n                              placeholder=\"{{  client.adresseemail }}\" disabled=\"\">\n                              \n                          </div>\n                       \n                          <div class=\"form-group\">\n                            <label for=\"adressephysique\">adresse physique</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.adressephysique\" \n                              class=\"form-control\" \n                              id=\"adressephysique\" \n                              name=\"adressephysique\" \n                              placeholder=\"{{client.adressephysique}}\"\n                              >\n                          </div>\n                         \n                          <div class=\"form-group\">\n                            <label for=\"immatriculation\">immatriculation</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.immatriculation\" \n                              class=\"form-control\" \n                              id=\"immatriculation\" \n                              name=\"immatriculation\" \n                              placeholder=\"{{client.immatriculation}}\"\n                              >\n                           \n                          </div>\n                          <div class=\"modal-footer\">\n                          <button type=\"submit\"  \n                          class=\"btn btn-danger \" (click)=\"onSubmitt(client.codeClient)\"placement=\"top\"\n                          ngbPopover=\"vous avez modifier les donées\">\n                    \n                    \n                            <span class=\"btn-inner--icon\"><i class=\"fas fa-check-square\">Modifier</i></span></button>\n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                   \n                  </ng-template>\n                  \n                  \n                 \n                  <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"open(content)\">\n                    \n                    \n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\">Modifier</i></span></button>\n                  \n                <!--   <hr>\n        \n                </ul>\n\n\n\n\n                <a routerLinkActive=\"active\" [routerLink]=\"['/clientedit',client.codeClient]\" (click)=\"open(content)\">\n                  \n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\"></i></span>\n               \n                  \n                </a> -->\n              </td>\n              </tr>\n            </tbody>\n          </table>\n          \n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\n        </div>\n          \n          \n          <!--editer-->\n         \n          <!--fin editer-->\n<!-- \n         \n          \n        </div>\n          \n          \n\n          </table>\n\n          <ul class=\"pagination justify-content-end mb-0\">\n              \n            <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n              \n              <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                    \n            </nav></ul>\n             -->\n          \n        </div>\n      </div> \n\n\n\n\n    \n    \n    </div>\n  </div>\n\n");

/***/ }),

/***/ "nF6z":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordredemission/ordredemission.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ordredemission works!</p>\n");

/***/ }),

/***/ "oPG5":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/printcolisadmin/printcolisadmin.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"row print-container\" id=\"myDiv\">\n        <div class=\"col\">\n          <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n              \n                <div class=\"row justify-content-center\">\n                    <div class=\"col-lg-6 col-md-8\">\n                      <div class=\"text-center\">\n                        <img src=\"http://5.196.7.152:8080/org-sid/assets/img/brand/logo.png\"  width=\"200\">\n                        <br>\n                        <p>Facture produit</p>\n                      </div>\n                      </div>\n                      </div>\n              \n            </div>\n            <div class=\"card-header border-0\">\n\n\n\n                <div class=\"row\">\n                    <div class=\"col-6 col-md-4\">Societé:{{client.nomsociete}}</div>\n                    <div class=\"col-6 col-md-4\">Cordonnées Client:{{client.adressephysique}}</div>\n                    <div class=\"col-6 col-md-4\">Matricule Fiscal:{{client.immatriculation}}</div>\n                  </div>\n                 \n                <div class=\"row\">\n                    <div class=\"col-6 col-md-4\">Contact:{{client.adresseemail}}</div>\n                    <div class=\"col-6 col-md-4\">Téléphone:</div>\n                    <div class=\"col-6 col-md-4\"> Date : {{myDate | date:'short'}}\n                    </div>\n                  </div>\n            </div>\n            <div><br><br></div>   \n           \n           \n            <div class=\"tab\">\n              <table class=\"table \">\n                <thead class=\"thead-light\">\n           \n                  <tr>\n                    <th scope=\"col\">Codecolis</th>\n                     <th>\n                  \n                        <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                       <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colies.id}}\"  width=\"100px\" height=\"100px\"/>\n                       \n                      \n                      </th>\n                  </tr>\n                </thead>\n                <tr>\n                   <td cope=\"col\">Nom&prénom</td>\n                     <td>\n                  \n                    {{colies.nom}}  {{colies.prenom}}\n                       \n                      \n                      </td>\n                  </tr>\n\n\n                  <tr>\n                    <td cope=\"col\">Adresse</td>\n                      <td>\n                   \n                     {{colies.adresse}}\n                        \n                       \n                       </td>\n                   </tr>\n                   \n\n                   <tr>\n                    <td cope=\"col\">Numérp de télèphone</td>\n                      <td>\n                   \n                     {{ colies.numtel }}\n                        \n                       \n                       </td>\n                   </tr>\n\n                   <tr>\n                    <td cope=\"col\">Produit</td>\n                      <td>\n                   \n                     {{ colies.designationproduits}}\n                        \n                       \n                       </td>\n                   </tr>\n                   <tr>\n                    <td cope=\"col\">Prix</td>\n                      <td>\n                   \n                     {{ colies.montant}}\n                        \n                       \n                       </td>\n                   </tr>\n               \n              </table>\n        <br> <br>\n       \n  \n          <div class=\"col-3 text-right\">\n              <h3>Total: {{ colies.montant }} DT</h3>\n            </div>\n  \n              <br> <br>\n  \n          </div>\n    \n    \n    \n    \n        \n        \n          \n  \n      </div>\n  \n  <input class=\"btn btn-light  text-black-50 \" id =\"myPrntbtn\" type=\"button\" value=\"Print\" onclick=\"window.print();\" >");

/***/ }),

/***/ "pMSe":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/retourecuadmin/retourecuadmin.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"search\" >\n              </div>\n              \n            </div>\n          </form>\n  \n  <br>\n           \n          <ul  >\n            \n                \n  \n  \n        </ul>\n \n  \n  \n  \n  \n  \n                \n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">QRcode</th>\n                  <th scope=\"col\">Codecolis</th>\n                  <th scope=\"col\">prenom et prenom </th>\n                 \n                  <th scope=\"col\"> numtel</th>\n  \n                   \n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">adressemail</th>\n                 \n                  <th scope=\"col\">codepostal</th>\n                  <th scope=\"col\">adressepickup</th>\n                  <th scope=\"col\"> gouvernorat</th>\n  \n                  <th scope=\"col\">designationproduit</th>\n                  <th scope=\"col\">remarque</th>\n                  \n                 <th scope=\"col\"> Montant a payer</th>\n                \n                 <th scope=\"col\"> etat colis</th>\n                 <th scope=\"col\"> Action</th>\n             \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers  | paginate: config | filter: term\">\n             \n                  <td>\n                  \n                  <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                 <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n                 \n                \n                </td>\n                 <ng-template #etat let-modal>\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"card-body\">\n                      <div class=\"table-responsive\" >\n                        <table class=\"table align-items-center table-flush\">\n                          <thead class=\"thead-light\">\n                            <tr>\n                              <th scope=\"col\">date</th>\n                              <th scope=\"col\">etat</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let colis of tablec\">\n                              <td >{{colis.createdAt | date }}</td>\n                              <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                             \n                            </tr>\n                          </tbody>\n                        </table>\n                    \n                  </div>\n                     \n                    </div>\n                  </div>\n                 \n                </ng-template>\n                \n                \n                \n                \n                \n                \n                \n                \n                \n                    <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                  \n                  <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                  <td>{{ colis.numtel }}</td>\n            \n                  <td>{{ colis.adresse}}</td>\n                  <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                  <td>{{ colis.codepostal}}</td>\n                  <td>{{ colis.adressepickup}}</td>\n                  <td>{{ colis.gouvernorat}}</td>\n                \n                  <td>{{ colis.designationproduits}}</td>\n  \n                  <td>{{ colis.remarque   }}</td>\n                \n                  <td>{{ colis.montant}} TND</td>\n                \n                \n               <td >\n                   <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                    <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                      <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                    \n                    </p>\n \n                   </div>\n                  \n               </td>\n\n\n               <td class=\"text-right\">\n                <div ngbDropdown  placement=\"top-right\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n             <!-- <ul>          -->\n              <ng-template #content let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <form  >\n                      <div class=\"input-group mb-3\">\n               \n                        <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                            <option selected>Choose...</option>\n                            <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                             class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                             \n                             \n                             {{item}}</option>\n                            </select>\n        \n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                              </div>\n                           \n                    </div>\n                  \n                      <div class=\"modal-footer\">\n          \n                      </div>\n                    </form>\n                  </div>\n                </div>\n               \n              </ng-template>\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                    </button>\n                    \n                   <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </button> -->\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"imprimer\" (click)=\"generatePdf(colis)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                    </button>\n\n\n\n\n\n                    <ng-template #eya let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"card-body\">\n                          <form  >\n                            <div class=\"input-group mb-3\">\n                     \n                              <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                                <option selected>Choose...</option>\n                                <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.id\"\n                                 class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.id}}</option>\n                                </select>\n            \n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                  </div>\n                          </div>\n                        \n                            <div class=\"modal-footer\">\n                \n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                     \n                    </ng-template>\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                    </button>\n                    \n                   \n                  </div>\n                </div>\n              </td>\n              \n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n  \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var src_app_pages_clientajout_clientajout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/clientajout/clientajout.component */ "A7uv");
/* harmony import */ var src_app_pages_clientedit_clientedit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/clientedit/clientedit.component */ "eJXf");
/* harmony import */ var src_app_authentification_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentification/login/login.component */ "4hVr");
/* harmony import */ var src_app_pages_client_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/client/client.component */ "V48J");
/* harmony import */ var src_app_pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/payment/payment.component */ "5APW");
/* harmony import */ var src_app_pages_swivrecolis_swivrecolis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/swivrecolis/swivrecolis.component */ "BLKE");
/* harmony import */ var src_app_pages_colis_colis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/colis/colis.component */ "L6bN");
/* harmony import */ var src_app_pages_livreur_livreur_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/livreur/livreur.component */ "trcn");
/* harmony import */ var src_app_pages_editlivreur_editlivreur_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/editlivreur/editlivreur.component */ "/OHS");
/* harmony import */ var src_app_pages_ajoutlivreur_ajoutlivreur_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/ajoutlivreur/ajoutlivreur.component */ "55zj");
/* harmony import */ var src_app_pages_ajoutcolis_ajoutcolis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/ajoutcolis/ajoutcolis.component */ "kxCL");
/* harmony import */ var src_app_pages_editcolis_editcolis_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/editcolis/editcolis.component */ "SQt0");
/* harmony import */ var src_app_pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/notification/notification.component */ "rc6o");
/* harmony import */ var src_app_pages_listelivreuractive_listelivreuractive_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pages/listelivreuractive/listelivreuractive.component */ "f/xT");
/* harmony import */ var src_app_pages_listelireurdesactive_listelireurdesactive_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/pages/listelireurdesactive/listelireurdesactive.component */ "tLx9");
/* harmony import */ var src_app_pages_listeexpdesactive_listeexpdesactive_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pages/listeexpdesactive/listeexpdesactive.component */ "VhAz");
/* harmony import */ var src_app_pages_listeexpactive_listeexpactive_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/pages/listeexpactive/listeexpactive.component */ "OivC");
/* harmony import */ var src_app_pages_colisenattenteadmin_colisenattenteadmin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/pages/colisenattenteadmin/colisenattenteadmin.component */ "N3FB");
/* harmony import */ var src_app_pages_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/pages/user-profil/user-profil.component */ "89A8");
/* harmony import */ var src_app_pages_colisaudepotadmin_colisaudepotadmin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/pages/colisaudepotadmin/colisaudepotadmin.component */ "mTDM");
/* harmony import */ var src_app_pages_colisencoursadmin_colisencoursadmin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/pages/colisencoursadmin/colisencoursadmin.component */ "xh5k");
/* harmony import */ var src_app_pages_colisrtndepotadmin_colisrtndepotadmin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/pages/colisrtndepotadmin/colisrtndepotadmin.component */ "0J/H");
/* harmony import */ var src_app_pages_colislivreadmin_colislivreadmin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/pages/colislivreadmin/colislivreadmin.component */ "2EQ0");
/* harmony import */ var src_app_pages_retourecuadmin_retourecuadmin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/pages/retourecuadmin/retourecuadmin.component */ "94xj");
/* harmony import */ var src_app_pages_retourdifadmin_retourdifadmin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/pages/retourdifadmin/retourdifadmin.component */ "44Cf");
/* harmony import */ var src_app_pages_retourexpadmin_retourexpadmin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/pages/retourexpadmin/retourexpadmin.component */ "0oYZ");
/* harmony import */ var src_app_pages_printcolisadmin_printcolisadmin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/pages/printcolisadmin/printcolisadmin.component */ "+kP5");
/* harmony import */ var src_app_pages_ordredemission_ordredemission_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/pages/ordredemission/ordredemission.component */ "QOaE");





























var AdminLayoutRoutes = [
    { path: 'ordredemission/:id', component: src_app_pages_ordredemission_ordredemission_component__WEBPACK_IMPORTED_MODULE_28__["OrdredemissionComponent"] },
    { path: 'printcolisadmin/:id', component: src_app_pages_printcolisadmin_printcolisadmin_component__WEBPACK_IMPORTED_MODULE_27__["PrintcolisadminComponent"] },
    { path: 'login', component: src_app_authentification_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'ajoutlivreur', component: src_app_pages_ajoutlivreur_ajoutlivreur_component__WEBPACK_IMPORTED_MODULE_10__["AjoutlivreurComponent"] },
    { path: 'editcolis/:id', component: src_app_pages_editcolis_editcolis_component__WEBPACK_IMPORTED_MODULE_12__["EditcolisComponent"] },
    { path: 'livreur', component: src_app_pages_livreur_livreur_component__WEBPACK_IMPORTED_MODULE_8__["LivreurComponent"] },
    { path: 'client', component: src_app_pages_client_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"] },
    { path: 'ajoutcolis', component: src_app_pages_ajoutcolis_ajoutcolis_component__WEBPACK_IMPORTED_MODULE_11__["AjoutcolisComponent"] },
    { path: 'ajoutclient', component: src_app_pages_clientajout_clientajout_component__WEBPACK_IMPORTED_MODULE_1__["ClientajoutComponent"] },
    { path: 'clientedit/:id', component: src_app_pages_clientedit_clientedit_component__WEBPACK_IMPORTED_MODULE_2__["ClienteditComponent"] },
    { path: 'editlivreur/:id', component: src_app_pages_editlivreur_editlivreur_component__WEBPACK_IMPORTED_MODULE_9__["EditlivreurComponent"] },
    { path: 'pick', component: src_app_pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"] },
    { path: 'suivre', component: src_app_pages_swivrecolis_swivrecolis_component__WEBPACK_IMPORTED_MODULE_6__["SwivrecolisComponent"] },
    { path: 'colis', component: src_app_pages_colis_colis_component__WEBPACK_IMPORTED_MODULE_7__["ColisComponent"] },
    { path: 'notification', component: src_app_pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"] },
    { path: 'livreuractive', component: src_app_pages_listelivreuractive_listelivreuractive_component__WEBPACK_IMPORTED_MODULE_14__["ListelivreuractiveComponent"] },
    { path: 'livreurdesactive', component: src_app_pages_listelireurdesactive_listelireurdesactive_component__WEBPACK_IMPORTED_MODULE_15__["ListelireurdesactiveComponent"] },
    { path: 'expdesactive', component: src_app_pages_listeexpdesactive_listeexpdesactive_component__WEBPACK_IMPORTED_MODULE_16__["ListeexpdesactiveComponent"] },
    { path: 'expactive', component: src_app_pages_listeexpactive_listeexpactive_component__WEBPACK_IMPORTED_MODULE_17__["ListeexpactiveComponent"] },
    { path: 'colisenattenteadmin', component: src_app_pages_colisenattenteadmin_colisenattenteadmin_component__WEBPACK_IMPORTED_MODULE_18__["ColisenattenteadminComponent"] },
    { path: 'colisencoursadmin', component: src_app_pages_colisencoursadmin_colisencoursadmin_component__WEBPACK_IMPORTED_MODULE_21__["ColisencoursadminComponent"] },
    { path: 'colisaudepotadmin', component: src_app_pages_colisaudepotadmin_colisaudepotadmin_component__WEBPACK_IMPORTED_MODULE_20__["ColisaudepotadminComponent"] },
    { path: 'colisrtnadmin', component: src_app_pages_colisrtndepotadmin_colisrtndepotadmin_component__WEBPACK_IMPORTED_MODULE_22__["ColisrtndepotadminComponent"] },
    { path: 'colislivreadmin', component: src_app_pages_colislivreadmin_colislivreadmin_component__WEBPACK_IMPORTED_MODULE_23__["ColislivreadminComponent"] },
    { path: 'colisretourecu', component: src_app_pages_retourecuadmin_retourecuadmin_component__WEBPACK_IMPORTED_MODULE_24__["RetourecuadminComponent"] },
    { path: 'userprofil', component: src_app_pages_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_19__["UserProfilComponent"] },
    { path: 'colisdifadmin', component: src_app_pages_retourdifadmin_retourdifadmin_component__WEBPACK_IMPORTED_MODULE_25__["RetourdifadminComponent"] },
    { path: 'colisexpadmin', component: src_app_pages_retourexpadmin_retourexpadmin_component__WEBPACK_IMPORTED_MODULE_26__["RetourexpadminComponent"] },
];


/***/ }),

/***/ "rHBd":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chartadmin/chartadmin.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-wrapper\">\n    <canvas baseChart \n        [datasets]=\"lineChartData\" \n        [labels]=\"lineChartLabels\" \n        [options]=\"lineChartOptions\"\n        [colors]=\"lineChartColors\" \n        [legend]=\"lineChartLegend\" \n        [chartType]=\"lineChartType\" \n        [plugins]=\"lineChartPlugins\">\n    </canvas>\n</div>");

/***/ }),

/***/ "rc6o":
/*!**************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notification.component.html */ "jUMD");
/* harmony import */ var _notification_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.css */ "Y1c0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servicereclamation.service */ "8J6P");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(reclamationservice) {
        this.reclamationservice = reclamationservice;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reclamationservice.fin().subscribe(function (data) {
            _this.reclamations = data;
            // console.log(data);
        });
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_3__["ServicereclamationService"] }
    ]; };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notification',
            template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notification_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_servicereclamation_service__WEBPACK_IMPORTED_MODULE_3__["ServicereclamationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "tFfp":
/*!*********************************************************************!*\
  !*** ./src/app/pages/printcolisadmin/printcolisadmin.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media print {\r\n    /* Hide every other element */\r\n    body {\r\n        visibility:  hidden;\r\n    }\r\n    \r\n    .print-container, .print-container * {\r\n        visibility:  visible;\r\n\r\n    }\r\n    \r\n    \r\n    \r\n}\r\n@media print {\r\n    /* style sheet for print goes here */\r\n    #myPrntbtn {\r\n        display :  none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpbnRjb2xpc2FkbWluL3ByaW50Y29saXNhZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksb0JBQW9COztJQUV4Qjs7OztBQUlKO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEM7UUFDSSxlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmludGNvbGlzYWRtaW4vcHJpbnRjb2xpc2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xyXG4gICAgLyogSGlkZSBldmVyeSBvdGhlciBlbGVtZW50ICovXHJcbiAgICBib2R5IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiAgaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJpbnQtY29udGFpbmVyLCAucHJpbnQtY29udGFpbmVyICoge1xyXG4gICAgICAgIHZpc2liaWxpdHk6ICB2aXNpYmxlO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLyogc3R5bGUgc2hlZXQgZm9yIHByaW50IGdvZXMgaGVyZSAqL1xyXG4gICAgI215UHJudGJ0biB7XHJcbiAgICAgICAgZGlzcGxheSA6ICBub25lO1xyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "tLx9":
/*!******************************************************************************!*\
  !*** ./src/app/pages/listelireurdesactive/listelireurdesactive.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListelireurdesactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListelireurdesactiveComponent", function() { return ListelireurdesactiveComponent; });
/* harmony import */ var _raw_loader_listelireurdesactive_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./listelireurdesactive.component.html */ "iqCg");
/* harmony import */ var _listelireurdesactive_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listelireurdesactive.component.css */ "QvEe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../livreur-service.service */ "hnPV");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListelireurdesactiveComponent = /** @class */ (function () {
    function ListelireurdesactiveComponent(servicedashboard, livreurService, router, modalService) {
        this.servicedashboard = servicedashboard;
        this.livreurService = livreurService;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.size = 5;
        this.currentPage = 0;
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_3__["Livreur"];
        this.i = 3;
        this.disable = false;
        this.l1 = new src_app_livreur__WEBPACK_IMPORTED_MODULE_3__["Livreur"]();
        this.livreurs = [];
    }
    ListelireurdesactiveComponent.prototype.ngOnInit = function () {
        this.get();
        /* this.livreurService.fin().subscribe(data => {
            this.livreurs = data;},
             err=>{console.log(err);
            }); */
    };
    ListelireurdesactiveComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.livreurdesactive().subscribe(function (data) {
            _this.livreurs = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.livreurs.length
        };
        // console.log(this.livreurs);
        /*   this.pages= new Array(data['totalPages']);},
          err=>{console.log(err); */
    };
    ListelireurdesactiveComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListelireurdesactiveComponent.prototype.activer = function (livreur) {
        var _this = this;
        this.livreurService.active(livreur)
            .subscribe(function (result) {
            _this.get();
            // console.log(livreur);
        });
    };
    ListelireurdesactiveComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.livreurService.find(value.keyword).subscribe(function (data) { _this.livreurs = data; });
        //console.log(value);
        //console.log(this.pages);
    };
    ListelireurdesactiveComponent.prototype.onEditLivreur = function (livreur) {
        this.router.navigateByUrl("/editlivreur/" + livreur.id);
        // console.log(livreur.id);
    };
    ListelireurdesactiveComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ListelireurdesactiveComponent.prototype.getDismissReason = function (reason) {
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
    ListelireurdesactiveComponent.prototype.onSubmitt = function (id) {
        //  console.log(id);
        //console.log(this.l1);
        //console.log(this.l1);
        this.livreurService.update(id, this.l1).subscribe();
        this.get();
    };
    ListelireurdesactiveComponent.ctorParameters = function () { return [
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__["DashboardadminService"] },
        { type: _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__["LivreurServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
    ]; };
    ListelireurdesactiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-listelireurdesactive',
            template: _raw_loader_listelireurdesactive_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_listelireurdesactive_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_4__["DashboardadminService"], _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__["LivreurServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ListelireurdesactiveComponent);
    return ListelireurdesactiveComponent;
}());

/* Onactive(livreur:Livreur){this.livreurService.active(livreur).subscribe(result => this. go(this.disable),data=>{this.disable=data.disponibilite;});}

go(disable){console.log(this.disable);
if(disable==true){
disable=false;}
console.log(this.disable);
}
  */


/***/ }),

/***/ "trcn":
/*!****************************************************!*\
  !*** ./src/app/pages/livreur/livreur.component.ts ***!
  \****************************************************/
/*! exports provided: LivreurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivreurComponent", function() { return LivreurComponent; });
/* harmony import */ var _raw_loader_livreur_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./livreur.component.html */ "irFu");
/* harmony import */ var _livreur_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./livreur.component.css */ "IeR/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _livreur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../livreur */ "tLGN");
/* harmony import */ var _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../livreur-service.service */ "hnPV");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LivreurComponent = /** @class */ (function () {
    function LivreurComponent(colis, toastr, livreurService, router, modalService) {
        this.colis = colis;
        this.toastr = toastr;
        this.livreurService = livreurService;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.size = 5;
        this.currentPage = 0;
        this.livreur = new _livreur__WEBPACK_IMPORTED_MODULE_4__["Livreur"];
        this.i = 3;
        this.disable = false;
        this.l1 = new _livreur__WEBPACK_IMPORTED_MODULE_4__["Livreur"]();
        this.livreurs = [];
    }
    LivreurComponent.prototype.ngOnInit = function () {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        /* this.livreurService.fin().subscribe(data => {
            this.livreurs = data;},
             err=>{console.log(err);
            }); */
    };
    LivreurComponent.prototype.get = function () {
        var _this = this;
        this.livreurService.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.livreurs.length
        };
        // console.log(this.livreurs);
        /*   this.pages= new Array(data['totalPages']);},
          err=>{console.log(err); */
    };
    LivreurComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    LivreurComponent.prototype.imprime = function (id) {
        var _this = this;
        this.colis.imprimer(id)
            .subscribe(function (res) {
            _this.blob = new Blob([res], { type: 'application/pdf' });
            //Chrolme  IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(_this.blob);
                console.log("pdf  succes  download");
                alert("Chrome   function ");
                return;
            }
            //Opera   safari  etc  ..   normlent 
            alert("safari  function ");
            var downloadURL = URL.createObjectURL(res);
            /* var link = document.createElement('a');
             link.href = downloadURL;
             link.download = "livreuer.pdf";
             link.click();*/
            window.open(downloadURL);
            console.log("pdf  succes  download");
            return;
        });
    };
    LivreurComponent.prototype.activer = function (livreur) {
        var _this = this;
        this.livreurService.active(livreur)
            .subscribe(function (result) {
            if (!livreur.disponibilite) {
                _this.get();
                _this.toastr.success('vous avez activer livreur');
            }
            else {
                _this.get();
                _this.toastr.error('vous avez désactiver livreur');
            }
            //console.log(livreur);
        });
    };
    LivreurComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.livreurService.find(value.keyword).subscribe(function (data) { _this.livreurs = data; });
        //console.log(value);
        //console.log(this.pages);
    };
    LivreurComponent.prototype.onEditLivreur = function (livreur) {
        this.router.navigateByUrl("/editlivreur/" + livreur.id);
        //console.log(livreur.id);
    };
    LivreurComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LivreurComponent.prototype.getDismissReason = function (reason) {
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
    LivreurComponent.prototype.onSubmitt = function (id) {
        var _this = this;
        // console.log(id);
        //console.log(this.l1);
        //console.log(this.l1);
        this.livreurService.update(id, this.l1).subscribe(function (result) {
            _this.get();
            _this.toastr.success('success modification');
        }, function (err) { _this.get(); _this.toastr.error("erreur "); });
    };
    LivreurComponent.ctorParameters = function () { return [
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_8__["ColisService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__["LivreurServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
    ]; };
    LivreurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-livreur',
            template: _raw_loader_livreur_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_livreur_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_8__["ColisService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _livreur_service_service__WEBPACK_IMPORTED_MODULE_5__["LivreurServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], LivreurComponent);
    return LivreurComponent;
}());

/* Onactive(livreur:Livreur){this.livreurService.active(livreur).subscribe(result => this. go(this.disable),data=>{this.disable=data.disponibilite;});}

go(disable){console.log(this.disable);
if(disable==true){
disable=false;}
console.log(this.disable);
}
  */


/***/ }),

/***/ "u1pL":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/retourexpadmin/retourexpadmin.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"search\" >\n              </div>\n              \n            </div>\n          </form>\n  \n  <br>\n           \n          <ul  >\n            \n                \n  \n  \n        </ul>\n \n  \n  \n  \n  \n  \n                \n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">QRcode</th>\n                  <th scope=\"col\">Codecolis</th>\n                  <th scope=\"col\">prenom et prenom </th>\n                 \n                  <th scope=\"col\"> numtel</th>\n  \n                   \n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">adressemail</th>\n                 \n                  <th scope=\"col\">codepostal</th>\n                  <th scope=\"col\">adressepickup</th>\n                  <th scope=\"col\"> gouvernorat</th>\n  \n                  <th scope=\"col\">designationproduit</th>\n                  <th scope=\"col\">remarque</th>\n                  \n                 <th scope=\"col\"> Montant a payer</th>\n                \n                 <th scope=\"col\"> etat colis</th>\n                 <th scope=\"col\"> Action</th>\n             \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers  | paginate: config | filter: term\">\n             \n                  <td>\n                  \n                  <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                 <img src=\"http://5.196.7.152:8080/org-sid/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n                 \n                \n                </td>\n                 <ng-template #etat let-modal>\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"card-body\">\n                      <div class=\"table-responsive\" >\n                        <table class=\"table align-items-center table-flush\">\n                          <thead class=\"thead-light\">\n                            <tr>\n                              <th scope=\"col\">date</th>\n                              <th scope=\"col\">etat</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let colis of tablec\">\n                              <td >{{colis.createdAt | date }}</td>\n                              <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                             \n                            </tr>\n                          </tbody>\n                        </table>\n                    \n                  </div>\n                     \n                    </div>\n                  </div>\n                 \n                </ng-template>\n                \n                \n                \n                \n                \n                \n                \n                \n                \n                    <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                  \n                  <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                  <td>{{ colis.numtel }}</td>\n            \n                  <td>{{ colis.adresse}}</td>\n                  <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                  <td>{{ colis.codepostal}}</td>\n                  <td>{{ colis.adressepickup}}</td>\n                  <td>{{ colis.gouvernorat}}</td>\n                \n                  <td>{{ colis.designationproduits}}</td>\n  \n                  <td>{{ colis.remarque   }}</td>\n                \n                  <td>{{ colis.montant}} TND</td>\n                \n                \n               <td >\n                   <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                    <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                      <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                    \n                    </p>\n \n                   </div>\n                  \n               </td>\n\n\n               <td class=\"text-right\">\n                <div ngbDropdown  placement=\"top-right\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n             <!-- <ul>          -->\n              <ng-template #content let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <form  >\n                      <div class=\"input-group mb-3\">\n               \n                        <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                            <option selected>Choose...</option>\n                            <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                             class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                             \n                             \n                             {{item}}</option>\n                            </select>\n        \n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                              </div>\n                           \n                    </div>\n                  \n                      <div class=\"modal-footer\">\n          \n                      </div>\n                    </form>\n                  </div>\n                </div>\n               \n              </ng-template>\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                    </button>\n                    \n                   <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </button> -->\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"imprimer\" (click)=\"generatePdf(colis)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                    </button>\n\n\n\n\n\n                    <ng-template #eya let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"card-body\">\n                          <form  >\n                            <div class=\"input-group mb-3\">\n                     \n                              <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                                <option selected>Choose...</option>\n                                <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.id\"\n                                 class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.id}}</option>\n                                </select>\n            \n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                  </div>\n                          </div>\n                        \n                            <div class=\"modal-footer\">\n                \n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                     \n                    </ng-template>\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                    </button>\n                    \n                   \n                  </div>\n                </div>\n              </td>\n              \n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n  \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "wWsJ":
/*!*************************************************************!*\
  !*** ./src/app/pages/clientajout/clientajout.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-success\r\n{\r\n  position: fixed!important; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 2%;\r\n  bottom: 3%;\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */\r\n  color: #ffffff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50YWpvdXQvY2xpZW50YWpvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx5QkFBeUIsRUFBRSxrQkFBa0I7RUFDN0MsVUFBVSxFQUFFLGVBQWU7RUFDM0IsUUFBUTtFQUNSLFVBQVU7RUFDVixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDeEQsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGFqb3V0L2NsaWVudGFqb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXN1Y2Nlc3Ncclxue1xyXG4gIHBvc2l0aW9uOiBmaXhlZCFpbXBvcnRhbnQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMiU7XHJcbiAgYm90dG9tOiAzJTtcclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "watW":
/*!*******************************************************************!*\
  !*** ./src/app/pages/retourexpadmin/retourexpadmin.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldG91cmV4cGFkbWluL3JldG91cmV4cGFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "wzQP":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/colislivreadmin/colislivreadmin.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <h3 class=\"mb-0\">liste colis</h3>\n          </div>\n          \n          <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"  ><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"term\"  (focus)=\"focus = true\"\n                (blur)=\"focus = false\" name=\"search\" >\n              </div>\n              \n            </div>\n          </form>\n  \n  <br>\n           \n          <ul  >\n            \n                \n  \n  \n        </ul>\n \n  \n  \n  \n  \n  \n                \n              \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">QRcode</th>\n                  <th scope=\"col\">Codecolis</th>\n                  <th scope=\"col\">prenom et prenom </th>\n                 \n                  <th scope=\"col\"> numtel</th>\n  \n                   \n                  <th scope=\"col\">adresse</th>\n                  <th scope=\"col\">adressemail</th>\n                 \n                  <th scope=\"col\">codepostal</th>\n                  <th scope=\"col\">adressepickup</th>\n                  <th scope=\"col\"> gouvernorat</th>\n  \n                  <th scope=\"col\">designationproduit</th>\n                  <th scope=\"col\">remarque</th>\n                  \n                 <th scope=\"col\"> Montant a payer</th>\n                \n                 <th scope=\"col\"> etat colis</th>\n                 <th scope=\"col\"> Action</th>\n             \n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let colis of coliers  | paginate: config | filter: term\">\n             \n                  <td>\n                  \n                  <!-- <a href=\"http://localhost:8080/api/qr-code/{{colis.id}}\" >click</a> -->\n                 <img src=\"http://5.196.7.152:8080/org-sid/api/qr-code/{{colis.id}}\"  width=\"100px\" height=\"100px\"/>\n                 \n                \n                </td>\n                 <ng-template #etat let-modal>\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">l'état du colis {{colis.id}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"card-body\">\n                      <div class=\"table-responsive\" >\n                        <table class=\"table align-items-center table-flush\">\n                          <thead class=\"thead-light\">\n                            <tr>\n                              <th scope=\"col\">date</th>\n                              <th scope=\"col\">etat</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let colis of tablec\">\n                              <td >{{colis.createdAt | date }}</td>\n                              <td class=\"badge badge-primary\">{{ colis.etat_colis}}</td>\n                             \n                            </tr>\n                          </tbody>\n                        </table>\n                    \n                  </div>\n                     \n                    </div>\n                  </div>\n                 \n                </ng-template>\n                \n                \n                \n                \n                \n                \n                \n                \n                \n                    <td><a routerLinkActive=\"active\" [routerLink]=\"['/colis']\" (click)=\"tester(etat,colis.id)\" >{{colis.id}} </a></td>\n                  \n                  <td>{{ colis.nom }}  {{colis.prenom }}</td>\n                  <td>{{ colis.numtel }}</td>\n            \n                  <td>{{ colis.adresse}}</td>\n                  <td><a href=\"mailto:{{ colis.adressemail }}\">{{ colis.adressemail }}</a></td>\n                  <td>{{ colis.codepostal}}</td>\n                  <td>{{ colis.adressepickup}}</td>\n                  <td>{{ colis.gouvernorat}}</td>\n                \n                  <td>{{ colis.designationproduits}}</td>\n  \n                  <td>{{ colis.remarque   }}</td>\n                \n                  <td>{{ colis.montant}} TND</td>\n                \n                \n               <td >\n                   <div *ngFor=\"let etat of colis.etatcolis ; let i= index\">\n                    <p *ngIf=\"i == (colis.etatcolis.length -1) \">\n                      <span class=\"badge badge-default\"> {{etat.etat_colis}}</span>\n                    \n                    </p>\n \n                   </div>\n                  \n               </td>\n\n\n               <td class=\"text-right\">\n                <div ngbDropdown  placement=\"top-right\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n             <!-- <ul>          -->\n              <ng-template #content let-modal>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"modal-basic-title\">changer l'état du colis</h4>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"card-body\">\n                    <form  >\n                      <div class=\"input-group mb-3\">\n               \n                        <select [(ngModel)] = \"colis.etat1\" name=\"etat_colis\"   class=\"custom-select\" id=\"inputGroupSelect02\">\n                            <option selected>Choose...</option>\n                            <option (change)=\"colis.etat1\" *ngFor =\"let item of items\"[value]=\"item\"\n                             class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"choisirlivreur(colis.id,livreur.id)\">\n                             \n                             \n                             {{item}}</option>\n                            </select>\n        \n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeEtat(colis.id,colis.etat1)\">Modifier</button>\n                              </div>\n                           \n                    </div>\n                  \n                      <div class=\"modal-footer\">\n          \n                      </div>\n                    </form>\n                  </div>\n                </div>\n               \n              </ng-template>\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary \"  type=\"button\" placement=\"top\" ngbTooltip=\"Modifier\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-pen-square\"></i></span>\n                    </button>\n                    \n                   <!--  <button class=\"btn btn-icon btn-2 btn-outline-secondary\" type=\"button\" placement=\"top\" ngbTooltip=\"supprimer\" (click)=\"open(content)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </button> -->\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"imprimer\" (click)=\"generatePdf(colis)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-print\"></i></span>\n                    </button>\n\n\n\n\n\n                    <ng-template #eya let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"modal-basic-title\">choisir livreur</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"card-body\">\n                          <form  >\n                            <div class=\"input-group mb-3\">\n                     \n                              <select [(ngModel)] = \"livreur.id\" name=\"livreur.id\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                                <option selected>Choose...</option>\n                                <option (change)=\"livreur.id\" *ngFor =\"let livreur of livreurs\"[value]=\"livreur.nom\"\n                                 class=\"list-group-item list-group-item-action list-group-item-light\">{{livreur.id}}</option>\n                                </select>\n            \n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"choisirlivreur(colis.id,livreur.id)\">save</button>\n                                  </div>\n                          </div>\n                        \n                            <div class=\"modal-footer\">\n                \n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                     \n                    </ng-template>\n\n\n                    <button class=\"btn btn-icon btn-2 btn-outline-secondary\"  type=\"button\"  placement=\"top\" ngbTooltip=\"choisir livreur\" (click)=\"ouvrir(eya)\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-male\"></i></span>\n                    </button>\n                    \n                   \n                  </div>\n                </div>\n              </td>\n              \n              </tbody>\n            </table>\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n  \n            <!--editer-->\n           \n            <!--fin editer-->\n  \n           \n        <!--     \n           </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n  \n              <ul class=\"pagination justify-content-end mb-0\">\n                \n              <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n                \n                <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                              </ul>\n              \n            </nav>\n          </div>\n        </div>  -->\n  \n  \n  \n  \n      \n      \n      </div>\n    </div>\n  \n  ");

/***/ }),

/***/ "xGtm":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listelivreuractive/listelivreuractive.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      \n         \n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">liste livreur</h3>\n        </div>\n        \n        <form class=\"search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\" #f=\"ngForm\" (ngSubmit)=\"onChercher(f.value)\">\n          <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" type=\"Submit\" (click)=\"onChercher(f.value)\"><i class=\"fas fa-search\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n              (blur)=\"focus = false\" name=\"keyword\" ngModel>\n            </div>\n          </div>\n        </form>\n\n\n        <ul>         \n          <ng-template #content let-modal>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"modal-basic-title\">Ajouter un livreur\n              </h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n\n              <app-ajoutlivreur></app-ajoutlivreur>\n              \n\n            </div>\n           \n          </ng-template>\n          \n\n         \n          <button type=\"button\" class=\"btn btn-primary\n           btn-sm\" (click)=\"open(content)\">Ajouter</button>\n          \n          <hr>\n\n        </ul>\n\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">numLivreur</th>\n                <th scope=\"col\">Nom</th>\n                <th scope=\"col\">prenom</th>\n                <th scope=\"col\">adresse</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">véhicule</th>\n                <th scope=\"col\">disponibilite</th>\n                <th scope=\"col\">Edit</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let livreur of livreurs  | paginate: config \">\n                <td>{{livreur.id }}</td>\n                <td>{{ livreur.nom }}</td>\n                <td>{{ livreur.prenom }}</td>\n                <td>{{ livreur.adresse}}</td>\n                \n                <td><a href=\"mailto:{{ livreur.email }}\">{{ livreur.email }}</a></td>\n                <td>{{ livreur.vehicule }}</td>\n                \n                <td  *ngIf=\"livreur.disponibilite\" >\n\n                  <i class=\"fas fa-toggle-on  text-blue text-lg\" (click)=\"activer(livreur)\"></i>\n\n                \n              </td>\n\n              <td  *ngIf=\"!livreur.disponibilite\" >\n\n                <i class=\"fas fa-toggle-off text-blue text-lg\" (click)=\"activer(livreur)\"></i>\n\n              \n            </td>\n\n\n              <td scope=\"row\">\n            \n\n                <!-- <ul>         <label class=\"custom-toggle\">\n                  <input type=\"checkbox\" >\n                  <span class=\"custom-toggle-slider rounded-circle\"></span>\n                </label>   -->\n                  <ng-template #content let-modal>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\" id=\"modal-basic-title\">Modifier le client</h4>\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"card-body\">\n                        <form  >\n                          <div class=\"form-group\">\n                            <label for=\"name\">Nom</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.nom\" \n                              class=\"form-control\" \n                              id=\"name\" \n                              name=\"name\" \n                              value=\"l1.nom\"\n                              placeholder=\"{{livreur.nom}}\"\n                             >\n                          </div>\n                          \n                          <div class=\"form-group\">\n                            <label for=\"prenom\">prenom</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.prenom\" \n                              class=\"form-control\" \n                              id=\"prenom\" \n                              name=\"prenom\" \n                              placeholder=\"{{livreur.prenom}} \"\n                              >\n                          </div>\n                       \n                          <div class=\"form-group\">\n                            <label for=\"adresse\">adresse</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.adresse\" \n                              class=\"form-control\" \n                              id=\"adresse\" \n                              name=\"adresse\" \n                              placeholder=\"{{livreur.adresse}}\"\n                              >\n                          </div>\n                         \n                          <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.email\" \n                              class=\"form-control\" \n                              id=\"email\" \n                              name=\"email\" \n                              placeholder=\"{{livreur.email}}\"\n                              >\n                           \n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"vehicule\">vehicule</label>\n                            <input type=\"text\" [(ngModel)]=\"l1.vehicule\" \n                              class=\"form-control\" \n                              id=\"vehicule\" \n                              name=\"vehicule\" \n                              placeholder=\"{{livreur.vehicule}}\"\n                            \n                          >\n                          </div>\n                          \n                          <div class=\"modal-footer\">\n                            <button type=\"submit\"  \n                            class=\"btn btn-outline-danger btn-sm\" (click)=\"onSubmitt(livreur.id)\"placement=\"top\"\n                            ngbPopover=\"vous avez modifier les donées\">\n                      \n                      \n                              <span class=\"btn-inner--icon\"><i class=\"fas fa-check-square\">Modifier</i></span></button>\n                            </div>\n                            \n                        </form>\n                      </div>\n                         \n                        \n                    </div>\n                   \n                  </ng-template>\n                  \n                  \n                 \n                  <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"open(content)\">\n                    \n                    \n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\">Modifier</i></span></button>\n                 \n              </tr>\n            </tbody>\n          </table>\n\n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n          <!--editer-->\n         \n          <!--fin editer-->\n<!-- \n         \n          \n        </div>\n        <div class=\"card-footer py-4\">\n          <nav aria-label=\"...\">\n\n            <ul class=\"pagination justify-content-end mb-0\">\n              \n            <li   class=\"page-item\" *ngFor=\"let p of pages ; let i= index\">\n              \n              <a class=\"page-link\" href=\"#\" (click)=\"ONpage(i,$event)\">{{ i }}  </a></li>\n                            </ul>\n            \n          </nav>\n        </div>\n      </div>\n\n\n -->\n\n    \n    \n    </div>\n  </div>\n\n");

/***/ }),

/***/ "xIhL":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ordredemission/ordredemission.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZHJlZGVtaXNzaW9uL29yZHJlZGVtaXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "xh5k":
/*!************************************************************************!*\
  !*** ./src/app/pages/colisencoursadmin/colisencoursadmin.component.ts ***!
  \************************************************************************/
/*! exports provided: ColisencoursadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColisencoursadminComponent", function() { return ColisencoursadminComponent; });
/* harmony import */ var _raw_loader_colisencoursadmin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./colisencoursadmin.component.html */ "ND7K");
/* harmony import */ var _colisencoursadmin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colisencoursadmin.component.css */ "zfo7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_livreur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/livreur */ "tLGN");
/* harmony import */ var src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/affectationlivreur */ "feDV");
/* harmony import */ var src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/colis */ "xv+n");
/* harmony import */ var src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/etat */ "+rvC");
/* harmony import */ var src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colis.service */ "9HXK");
/* harmony import */ var src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dashboardadmin.service */ "TaxM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/livreur-service.service */ "hnPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ColisencoursadminComponent = /** @class */ (function () {
    function ColisencoursadminComponent(toastr, servicedashboard, modalService, sanitizer, colisService, router, servicelivreur) {
        this.toastr = toastr;
        this.servicedashboard = servicedashboard;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.colisService = colisService;
        this.router = router;
        this.servicelivreur = servicelivreur;
        this.closeResult = '';
        this.p = 1;
        this.colis = new src_app_models_colis__WEBPACK_IMPORTED_MODULE_7__["Colis"];
        this.term = "";
        this.items = [
            "Audepot",
            "Encours",
            "Rtndepot",
            "Retourrecu",
            "Retourdefinitif",
            "Retourexpediteur"
        ];
        this.etat = new src_app_models_etat__WEBPACK_IMPORTED_MODULE_8__["Etat"]();
        this.livreur = new src_app_livreur__WEBPACK_IMPORTED_MODULE_5__["Livreur"]();
        this.affliv = new src_app_models_affectationlivreur__WEBPACK_IMPORTED_MODULE_6__["Affectationlivreur"]();
        this.coliers = [];
    }
    ColisencoursadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.get();
        this.servicelivreur.fin().subscribe(function (data) {
            _this.livreurs = data;
        });
    };
    ColisencoursadminComponent.prototype.get = function () {
        var _this = this;
        this.servicedashboard.listeencoursadmin().subscribe(function (data) {
            _this.coliers = data;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.coliers.length
        };
    };
    ColisencoursadminComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /* get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
      this.coliers = data["content"];
      console.log(data);
      this.pages= new Array(data['totalPages']);},
      err=>{console.log(err);
      });
      */
    // console.log(this.currentPage);}
    ColisencoursadminComponent.prototype.Qrcode = function (id) {
        var _this = this;
        this.colisService.QRcode(id).subscribe(function (data) {
            _this.code = data;
            //console.log(this.Qrcode);
            var objectURL = 'data:code/png;base64,' + data;
            _this.code = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
        return this.code;
    };
    ;
    ColisencoursadminComponent.prototype.changeEtat = function (id, etat) {
        var _this = this;
        //console.log(etat);
        this.colisService.changeetat(etat, id).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("success changement d'etat");
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisencoursadminComponent.prototype.choisirlivreur = function (id, id1) {
        var _this = this;
        this.affliv.codecolis = id;
        this.affliv.idliv = id1;
        //console.log(id);
        //console.log(id1);
        this.colisService.affectioncolis(this.affliv).subscribe(function (result) {
            _this.router.navigateByUrl('/colis');
            _this.toastr.success("vous avez affecter le livreur num:" + _this.affliv.idliv);
        }, function (err) { _this.toastr.error("erreur"); });
        this.get();
    };
    ColisencoursadminComponent.prototype.onChercher = function (value) {
        var _this = this;
        this.colisService.cherche(value.keyword).subscribe(function (data) { _this.coliers = data; });
        //console.log(value);
    };
    /* onEditColis(colis:Colis){
      this.router.navigateByUrl("/maps/"+colis.id);
      console.log(colis.id);
    } */
    ColisencoursadminComponent.prototype.generatePdf = function (colis) {
        var docDefinition = { content: [
                {
                    text: "Date: " + new Date().toLocaleString(),
                    alignment: 'right'
                },
                {
                    text: 'logo :',
                    alignment: 'left',
                    fontSize: 12,
                    color: 'black'
                },
                {
                    text: 'bon livraison',
                    fontSize: 25,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#047886'
                },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { qr: "" + colis.id, fit: '50', alignment: 'center', },
                {
                    text: 'Customer Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [
                            [{ text: 'Cordonnées colis', bold: true }, 'valeur'],
                            ['code : ', {
                                    text: '' + colis.id,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },
                            ],
                            ['adresse :', {
                                    text: '' + colis.adresse,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['num de telephone :', {
                                    text: '' + colis.numtel,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' gouvernorat', {
                                    text: '' + colis.gouvernorat,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            ['adressepickup : ', {
                                    text: '' + colis.adressepickup,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                            [' montant :', {
                                    text: '' + colis.montant,
                                    alignment: 'left',
                                    fontSize: 12,
                                    color: 'black'
                                },],
                        ]
                    }
                },
                //    { qr: `${colis.id}`, fit: '50',  alignment: 'center',   },    
                {
                    text: 'Customer Details',
                    style: 'sectionHeader',
                    color: 'white'
                },
                { text: 'Signature', alignment: 'right', italics: true },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition).open();
    };
    ColisencoursadminComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisencoursadminComponent.prototype.ouvrir = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisencoursadminComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ColisencoursadminComponent.prototype.pdf = function (content, colis) {
        var _this = this;
        /* this.generator(colis); */
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisencoursadminComponent.prototype.tester = function (content, id) {
        var _this = this;
        this.consulter(id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ColisencoursadminComponent.prototype.consulter = function (id) {
        var _this = this;
        // console.log(id);
        this.colisService.Suivrecolis(id).subscribe(function (data) { _this.tablec = data; });
    };
    ColisencoursadminComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"] }
    ]; };
    ColisencoursadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-colisencoursadmin',
            template: _raw_loader_colisencoursadmin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_colisencoursadmin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], src_app_services_dashboardadmin_service__WEBPACK_IMPORTED_MODULE_10__["DashboardadminService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], src_app_services_colis_service__WEBPACK_IMPORTED_MODULE_9__["ColisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_livreur_service_service__WEBPACK_IMPORTED_MODULE_13__["LivreurServiceService"]])
    ], ColisencoursadminComponent);
    return ColisencoursadminComponent;
}());

//}


/***/ }),

/***/ "zfo7":
/*!*************************************************************************!*\
  !*** ./src/app/pages/colisencoursadmin/colisencoursadmin.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGlzZW5jb3Vyc2FkbWluL2NvbGlzZW5jb3Vyc2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map