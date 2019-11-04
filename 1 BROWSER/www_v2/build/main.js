webpackJsonp([4],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.toLoginPage = function () {
        this.navCtrl.pop();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Proyectos\Ztudy\src\pages\forgot-password\forgot-password.html"*/'<ion-content padding>\n  <ion-navbar>\n  </ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n          <ion-item>\n            <ion-label floating>Ingrese Email</ion-label>\n            <ion-input placeholder="Ingrese Email"></ion-input>\n          </ion-item>\n          <br>\n          <input type="submit" value="Recovery Password" (click)="toLoginPage()">\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\Ztudy\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_angular_fire_angular_fire__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_data_user_data__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, afAuth, afProvider, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afProvider = afProvider;
        this.loadCtrl = loadCtrl;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Iniciando Sesión...'
        });
        load.present();
        this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.password).then(function (user) {
            if (user) {
                _this.fbUserName = _this.afAuth.auth.currentUser.displayName;
                if (_this.fbUserName === null) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__user_data_user_data__["a" /* UserDataPage */]);
                    load.dismiss();
                }
                else {
                    _this.toHomePage();
                    load.dismiss();
                }
                ;
            }
        }).catch(function (e) {
            console.log(e);
            alert(e);
            load.dismiss();
        });
    };
    LoginPage.prototype.toHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.toForgotPasswordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Proyectos\Ztudy\src\pages\login\login.html"*/'<ion-content padding>\n  <div class="wrapper fadeInDown">\n    <div id="formContent">\n      <!-- Tabs Titles -->\n  \n      <!-- Icon -->\n      <div class="fadeIn first">\n        <img src="./assets/imgs/logo.png" id="icon" alt="User Icon" />\n        <div align="center">\n          <h2>Ztudy</h2>\n        </div>\n      </div>\n  \n      <!-- Login Form -->\n      <form>\n        <input type="email" id="login" class="fadeIn second" name="login" placeholder="login" [(ngModel)]="user.email">\n        <input type="password" id="password" class="fadeIn third" name="login" placeholder="password" [(ngModel)]="password">\n        <input type="submit" class="fadeIn fourth" value="Log In" (click)="login()">\n      </form>\n  \n      <!-- Remind Passowrd -->\n      <div id="formFooter">\n        <a class="underlineHover" (click)="toForgotPasswordPage()">Forgot Password?</a>\n      </div>\n  \n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\Ztudy\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__providers_angular_fire_angular_fire__["a" /* AngularFireProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDataPage = (function () {
    function UserDataPage(navCtrl, navParams, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.user = {};
        this.terms = false;
    }
    UserDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserDataPage');
    };
    UserDataPage.prototype.setTerms = function () {
        console.log(this.terms);
    };
    UserDataPage.prototype.continue = function () {
        if (this.terms === false) {
            alert('Acepte los terminos y condiciones del curso para continuar');
        }
        else if (this.terms === true) {
            alert('Continue');
        }
    };
    UserDataPage.prototype.getTerms = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'New Friend!',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            buttons: [
                {
                    text: 'OK'
                },
                {
                    text: 'Descargar',
                    handler: function () {
                        _this.downloadPDF();
                    }
                }
            ]
        });
        alert.present();
    };
    ;
    UserDataPage.prototype.downloadPDF = function () {
        /*this.fileOpener.open('https://github.com/GonzaloUNAB2018/ztudy/raw/master/src/files/terminos_y_condiciones_del_curso.pdf', 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));*/
        window.open('https://github.com/GonzaloUNAB2018/ztudy/raw/master/src/files/terminos_y_condiciones_del_curso.pdf');
    };
    ;
    UserDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-data',template:/*ion-inline-start:"C:\Proyectos\Ztudy\src\pages\user-data\user-data.html"*/'<ion-content>\n  <div class="container">\n    <div id="signupbox" style=" margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">\n      <div>\n        <h3>Complete los datos requeridos</h3>\n      </div>\n      <div class="panel panel-info"> \n        <div class="panel-body" >\n          <form method="post" action=".">\n            <form  class="form-horizontal" method="post" >\n              <div id="div_id_username" class="form-group required">\n                <label for="id_username" class="control-label col-md-4  requiredField"> Apodo<span class="asteriskField">*</span> </label>\n                <div class="controls col-md-8 ">\n                  <input [(ngModel)]="user.nickName" class="input-md  textinput textInput form-control" id="id_username" maxlength="30" name="username" placeholder="Elija su apodo" style="margin-bottom: 10px" type="text" />\n                </div>\n              </div>\n              <div id="div_id_name" class="form-group required"> \n                <label for="id_name" class="control-label col-md-4  requiredField"> Nombre<span class="asteriskField">*</span> </label> \n                <div class="controls col-md-8 "> \n                  <input [(ngModel)]="user.name" class="input-md textinput textInput form-control" id="id_name" name="name" placeholder="Primer nombre" style="margin-bottom: 10px" type="text" />\n                </div>\n              </div>\n              <div id="div_id_surname" class="form-group required"> \n                <label for="id_surname" class="control-label col-md-4  requiredField"> Apellido<span class="asteriskField">*</span> </label> \n                <div class="controls col-md-8 "> \n                  <input [(ngModel)]="user.surname" class="input-md textinput textInput form-control" id="id_surname" name="surname" placeholder="Primer Apellido" style="margin-bottom: 10px" type="text" />\n                </div>\n              </div>\n              <div id="div_id_surname" class="form-group required"> \n                <label for="id_surname" class="control-label col-md-4  requiredField"> RUN<span class="asteriskField">*</span> </label> \n                <div class="controls col-md-8 "> \n                  <input [(ngModel)]="user.run" class="input-md textinput textInput form-control" id="id_surname" name="surname" placeholder="R.U.N" style="margin-bottom: 10px" type="text" />\n                </div>\n              </div>\n              <div id="div_id_gender" class="form-group required">\n                <label for="id_gender"  class="control-label col-md-4  requiredField"> Género<span class="asteriskField">*</span> </label>\n                <select class="custom-select" [(ngModel)]="user.gender" name="gender">\n                  <option value="H">Hombre</option>\n                  <option value="M">Mujer</option>\n                </select>\n              </div>\n              <!--div id="div_id_gender" class="form-group required">\n                <label for="id_gender"  class="control-label col-md-4  requiredField"> Genero<span class="asteriskField">*</span> </label>\n                <div class="controls col-md-8 "  style="margin-bottom: 10px">\n                  <label class="radio-inline"> <input type="radio" name="gender" id="id_gender_1" value="M"  style="margin-bottom: 10px">Hombre</label>\n                  <label class="radio-inline"> <input type="radio" name="gender" id="id_gender_2" value="F"  style="margin-bottom: 10px">Mujer </label>\n                </div>\n              </div-->\n              <div id="div_id_number" class="form-group required">\n                <label for="id_number" class="control-label col-md-4  requiredField"> Número de contacto<span class="asteriskField">*</span> (9 dígitos)</label>\n                <div class="controls col-md-8 ">\n                  <input class="input-md textinput textInput form-control" id="id_number" name="number" maxlength="9" placeholder="Ingrese su número de contacto" style="margin-bottom: 10px" type="text" />\n                </div> \n              </div> \n              <div id="div_id_location" class="form-group required">\n                <label for="id_location" class="control-label col-md-4  requiredField"> Su ciudad<span class="asteriskField">*</span> </label>\n                <div class="controls col-md-8 ">\n                    <input class="input-md textinput textInput form-control" id="id_location" name="location" placeholder="Ingrese su ciudad" style="margin-bottom: 10px" type="text" />\n                </div> \n              </div>\n              <!--div class="form-group required controls col-md-offset-4 col-md-8"-->\n                <!--div class="controls col-md-offset-4 col-md-8 "-->\n                  <ion-item id="div_id_terms" class="checkbox required controls col-md-offset-4 col-md-8">\n                    <ion-label style="margin-bottom: 8px">\n                      <p>Acepto los terminos y <br>condiciones del curso.</p>\n                    </ion-label>\n                    <ion-checkbox [(ngModel)]="terms" name="terms" (ionChange)="setTerms()"></ion-checkbox>  \n                  </ion-item>\n                  <div class="col-md-offset-4 col-md-8">\n                    <button ion-button small block round (click)="getTerms()">lea los términos y condiciones</button>\n                  </div>\n                  <br>\n                <!--/div-->\n              <!--/div-->\n              <!--div class="form-group">\n                <div class="controls col-md-offset-4 col-md-8 ">\n                  <div id="div_id_terms" class="checkbox required">\n                    <label for="id_terms" class=" requiredField">\n                      <input [(ngModel)]="terms" (ionChange)="setTerms()" class="input-ms checkboxinput" id="id_terms" name="terms" style="margin-bottom: 10px" type="checkbox" />\n                      Acepto los terminos y condiciones del curso.\n                    </label>\n                  </div>\n                </div>\n              </div--> \n              <div class="form-group"> \n                <div class="aab controls col-md-4 "></div>\n                <div class="controls col-md-8 ">\n                  <button ion-button block round color="primary" (click)="continue()">Continuar</button>\n                    <!--input type="submit" name="Signup" value="Signup" class="btn btn-primary btn btn-info" id="submit-id-signup" /-->\n                </div>\n              </div> \n            </form>\n\n          </form>\n        </div>\n      </div>\n    </div> \n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\Ztudy\src\pages\user-data\user-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__["a" /* FileOpener */]])
    ], UserDataPage);
    return UserDataPage;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		503,
		3
	],
	"../pages/forgot-password/forgot-password.module": [
		504,
		2
	],
	"../pages/login/login.module": [
		505,
		1
	],
	"../pages/user-data/user-data.module": [
		506,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var jQuery = __webpack_require__(444);
var HomePage = (function () {
    function HomePage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        if (this.platform.is('android')) {
            this.android = true;
        }
        else {
            this.android = false;
        }
        this.jQ();
    }
    HomePage.prototype.jQ = function () {
        jQuery(function ($) {
            $('.sidebar-dropdown > a').click(function () {
                $('.sidebar-submenu').slideUp(200);
                if ($(this)
                    .parent()
                    .hasClass('active')) {
                    $('.sidebar-dropdown').removeClass('active');
                    $(this)
                        .parent()
                        .removeClass('active');
                }
                else {
                    $('.sidebar-dropdown').removeClass('active');
                    $(this)
                        .next('.sidebar-submenu')
                        .slideDown(200);
                    $(this)
                        .parent()
                        .addClass('active');
                }
            });
            $('#close-sidebar').click(function () {
                $('.page-wrapper').removeClass('toggled');
            });
            $('#show-sidebar').click(function () {
                $('.page-wrapper').addClass('toggled');
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos\Ztudy\src\pages\home\home.html"*/'<ion-content>\n  <div class="page-wrapper chiller-theme">\n    <nav id="sidebar" class="sidebar-wrapper" *ngIf="!android">\n      <a id="show-sidebar" class="btn btn-sm btn-dark">\n        <i class="fas fa-bars"></i>\n      </a>\n      <div class="sidebar-content">\n        <div class="sidebar-brand">\n          <a>TRADUSTECH</a>\n          <div id="close-sidebar">\n            <i class="fas fa-times"></i>\n          </div>\n        </div>\n        <div class="sidebar-header">\n          <div class="user-pic">\n            <img class="img-responsive img-rounded" src="./assets/imgs/user.jpg"\n              alt="User picture">\n          </div>\n          <div class="user-info">\n            <span class="user-name">Jhon\n              <strong>Smith</strong>\n            </span>\n            <span class="user-role">Administrator</span>\n            <span class="user-status">\n              <i class="fa fa-circle"></i>\n              <span>Online</span>\n            </span>\n          </div>\n        </div>\n        <div class="sidebar-menu">\n          <ul>\n            <li class="header-menu">\n              <span>General</span>\n            </li>\n            <li class="sidebar-dropdown">\n              <a>\n                <i class="fa fa-tachometer-alt"></i>\n                <span>Historia</span>\n                <span class="badge badge-pill badge-warning">New</span>\n              </a>\n              <div class="sidebar-submenu">\n                <ul>\n                  <li>\n                    <a>Etapa 1</a>\n                  </li>\n                  <li>\n                    <a>Etapa 2</a>\n                  </li>\n                  <li>\n                    <a>Etapa 3</a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li class="sidebar-dropdown">\n              <a>\n                <i class="fa fa-shopping-cart"></i>\n                <span>Notas</span>\n                <!--span class="badge badge-pill badge-danger">3</span-->\n              </a>\n              <div class="sidebar-submenu">\n                <ul>\n                  <li>\n                    <a>Controles</a>\n                  </li>\n                  <li>\n                    <a>Parciales</a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li class="sidebar-dropdown">\n              <a>\n                <i class="fa fa-globe"></i>\n                <span>Mapas</span>\n              </a>\n              <div class="sidebar-submenu">\n                <ul>\n                  <li>\n                    <a>Mapa Isla 1</a>\n                  </li>\n                  <li>\n                    <a>Mapa Isla 2</a>\n                  </li>\n                  <li>\n                    <a>Mapa Isla 3</a>\n                  </li>\n                  <li>\n                    <a>Mapa Isla 4</a>\n                  </li>\n                  <li>\n                    <a>Mapa Isla 5</a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li class="header-menu">\n              <span>Datos</span>\n            </li>\n            <li>\n              <a>\n                <i class="fa fa-book"></i>\n                <span>Actualiza datos</span>\n                <!--span class="badge badge-pill badge-primary">Beta</span-->\n              </a>\n            </li>\n            <li>\n              <a>\n                <i class="fa fa-book"></i>\n                <span>Documentación</span>\n                <!--span class="badge badge-pill badge-primary">Beta</span-->\n              </a>\n            </li>\n            <li>\n              <a>\n                <i class="fa fa-calendar"></i>\n                <span>Calendario</span>\n              </a>\n            </li>\n            <li>\n              <a>\n                <i class="fa fa-folder"></i>\n                <span>Certificados</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <!-- sidebar-menu  -->\n      </div>\n      <!-- sidebar-content  -->\n      <div class="sidebar-footer">\n        <a href="#">\n          <i class="fa fa-bell"></i>\n          <span class="badge badge-pill badge-warning notification">3</span>\n        </a>\n        <a href="#">\n          <i class="fa fa-envelope"></i>\n          <span class="badge badge-pill badge-success notification">7</span>\n        </a>\n        <a href="#">\n          <i class="fa fa-cog"></i>\n          <span class="badge-sonar"></span>\n        </a>\n        <a href="#">\n          <i class="fa fa-power-off"></i>\n        </a>\n      </div>\n    </nav>\n    <div padding-top>\n      <div class="page-wrapper chiller-theme toggled">\n        <div class="container">\n          <h3 class="my-4" padding-top>Bienvenido {{typeUser}}</h3>\n          <!-- Marketing Icons Section -->\n          <div class="row">\n            <div class="col-lg-3 mb-3">\n              <div class="card h-100">\n                <h4 class="card-header">Cursos</h4>\n                <div class="card-body">\n                  <p class="card-text">\n                    Revisa tus cursos\n                  </p>\n                </div>\n                <div class="card-footer">\n                  <a href="#" class="btn btn-primary">Go</a>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-3 mb-3">\n              <div class="card h-100">\n                <h4 class="card-header">Certificados</h4>\n                <div class="card-body">\n                  <p class="card-text">\n                    Descarga tus certificados\n                  </p>\n                </div>\n                <div class="card-footer">\n                  <a href="#" class="btn btn-primary">Go</a>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-3 mb-3">\n              <div class="card h-100">\n                <h4 class="card-header">Notas</h4>\n                <div class="card-body">\n                  <p class="card-text">\n                    Revisa las notas de tus cursos y evalúa como mejorar tu nivel.\n                  </p>\n                </div>\n                <div class="card-footer">\n                  <a href="#" class="btn btn-primary">Go</a>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-3 mb-3">\n              <div class="card h-100">\n                <h4 class="card-header">Calendario</h4>\n                <div class="card-body">\n                  <p class="card-text">\n                    Programe sus tiempos en base al calendario semestral.\n                  </p>\n                </div>\n                <div class="card-footer">\n                  <a href="#" class="btn btn-primary">Go</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.row -->\n          <!-- Portfolio Section -->\n          <!--h2>Portfolio Heading</h2>\n          <div class="row">\n            <div class="col-lg-4 col-sm-6 portfolio-item">\n              <div class="card h-100">\n                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>\n                <div class="card-body">\n                  <h4 class="card-title">\n                    <a href="#">Project One</a>\n                  </h4>\n                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-4 col-sm-6 portfolio-item">\n              <div class="card h-100">\n                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>\n                <div class="card-body">\n                  <h4 class="card-title">\n                    <a href="#">Project Two</a>\n                  </h4>\n                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-4 col-sm-6 portfolio-item">\n              <div class="card h-100">\n                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>\n                <div class="card-body">\n                  <h4 class="card-title">\n                    <a href="#">Project Three</a>\n                  </h4>\n                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-4 col-sm-6 portfolio-item">\n              <div class="card h-100">\n                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>\n                <div class="card-body">\n                  <h4 class="card-title">\n                    <a href="#">Project Four</a>\n                  </h4>\n                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-4 col-sm-6 portfolio-item">\n              <div class="card h-100">\n                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>\n                <div class="card-body">\n                  <h4 class="card-title">\n                    <a href="#">Project Five</a>\n                  </h4>\n                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-4 col-sm-6 portfolio-item">\n              <div class="card h-100">\n                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>\n                <div class="card-body">\n                  <h4 class="card-title">\n                    <a href="#">Project Six</a>\n                  </h4>\n                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>\n                </div>\n              </div>\n            </div>\n          </div-->\n          <!-- /.row -->\n          <!-- Features Section -->\n          <div class="row">\n            <div class="col-lg-6">\n              <h2>Modern Business Features</h2>\n              <p>The Modern Business template by Start Bootstrap includes:</p>\n              <ul>\n                <li>\n                  <strong>Bootstrap v4</strong>\n                </li>\n                <li>jQuery</li>\n                <li>Font Awesome</li>\n                <li>Working contact form with validation</li>\n                <li>Unstyled page elements for easy customization</li>\n              </ul>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>\n            </div>\n            <div class="col-lg-6">\n              <img class="img-fluid rounded" src="http://placehold.it/700x450" alt="">\n            </div>\n          </div>\n          <!-- /.row -->\n          <hr>\n          <!-- Call to Action Section -->\n          <div class="row mb-4">\n            <div class="col-md-8">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>\n            </div>\n            <div class="col-md-4">\n              <a class="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>\n            </div>\n          </div>\n        </div>\n        <!-- /.container -->\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\Ztudy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFireProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularFireProvider = (function () {
    function AngularFireProvider(http, afDb) {
        this.http = http;
        this.afDb = afDb;
        console.log('Hello AngularFireProvider Provider');
    }
    AngularFireProvider.prototype.readUserData = function (uid) {
        return this.afDb.object('User/Students/' + uid + '/Data');
    };
    AngularFireProvider.prototype.createUserStudentData = function (uid, user) {
        this.afDb.database.ref('Users/Students/' + uid + '/Data').set(user);
    };
    AngularFireProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], AngularFireProvider);
    return AngularFireProvider;
}());

//# sourceMappingURL=angular-fire.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Proyectos\Ztudy\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\Ztudy\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(419);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_storage__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_database__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__firebase_module__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_angular_fire_angular_fire__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_user_data_user_data__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_data_user_data__["a" /* UserDataPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-data/user-data.module#UserDataPageModule', name: 'UserDataPage', segment: 'user-data', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__firebase_module__["a" /* firebase */]),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_fire_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_data_user_data__["a" /* UserDataPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_angular_fire_angular_fire__["a" /* AngularFireProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebase; });
var firebase = {
    apiKey: "AIzaSyD7uTxumuxvtTbdVY2q4RhF9xgbP5jdzrY",
    authDomain: "ztudy-cl.firebaseapp.com",
    databaseURL: "https://ztudy-cl.firebaseio.com",
    projectId: "ztudy-cl",
    storageBucket: "ztudy-cl.appspot.com",
    messagingSenderId: "800581680351",
    appId: "1:800581680351:web:f7ab4639a8f6c22d2d7d6a"
};
//# sourceMappingURL=firebase.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { UserDataPage } from '../pages/user-data/user-data';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Proyectos\Ztudy\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Proyectos\Ztudy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map