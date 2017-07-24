webpackJsonp([1,5],{

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(404);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.selection = 2;
        this.paragraphs = [];
        this.quotes = [
            "Lose the bumps!",
            "Use hot water when you shave to avoid lookin' like the back of a Nestlé Crunch Bar.",
            "Diversify!",
            "You gotta have mad hustle.",
            "Make sure to have Plan B, C, D, E and F ready to go.",
            "Screw a key, you might fuck around and catch an axe.",
            "When they stop listenin' to you and start talking shit, it’s time to go.",
            "Ramen with Louis Rich turkey (gotta be Louis Rich).",
            "Y'all smart dumb cats need to wisen up!",
            "Scooby snack. Jurassic. Plastic. Gas. Booby Trap",
            "Things change. Nothing ever stays the same, yo.",
            "You ain't never gonna stay 25 or 30 or 40.",
            "You always gonna change. Every day you change.",
            "Super-cali-fragalistic-expiali-docious, Docious-ali-expi-fragalistic-cali-super.",
            "Cancun...catch me in the room, eatin' grouper.",
            "I wear what fits Ghostface; I'm not gonna wear anything that makes me look strange.",
            "The God's tropical.",
            "Ladies call me 'Black Fruit Punch'.",
            "It was the beauty that caught me and held my soul hostage.",
            "Remember those days? Had you smellin' my boxers.",
            "Chop the O, sprinkle a little snow inside the optimo.",
            "Swing the John McEnroe, rap rock'n'roll.",
            "Tidy Bowl, gun hold pro, Starsky with the gumsole.",
            "Hit the rum slow, parole kids, live Rapunzel.",
            "Scrub your toungue, man. Stick the toothbrush down your throat if you have to b.",
            "Ain't gonna front, that Proactiv work.",
            "Wash your face first, then your nuts. You going backwards.",
            "The best soap from the heavens above. That's Dove.",
            "Lot of y'all don't know how to get busy.",
            "Make sure you match.",
            "Every rapper wanna be a rapper.",
            "You gotta have a chain.",
            "Those stones ain't real son.",
            "Changing the forecast with that shit.",
            "Do it big, man.",
            "Stay out the back of The Source.",
            "Word up, man.",
            "How you gonna let your man come out with that white shit around his mouth?",
            "Tell son to get that booger out his nose.",
            "Going to the Floyd fight with greens on his teeth.",
            "You got it my dude.",
            "Set me free. On some Martin Luther King shit, man.",
            "We continually stay bobbing and weaving.",
            "We got gum on the back of our sneakers.",
            "Every litte piece of gum you see of the sidewalk, those black spots, we been around since them days.",
            "Watch what you say around certain individuals b.",
            "A man is a man. That's what first.",
            "Don't let nothing scare you.",
            "Staten Island. Stapelton. We come from a place where we fight.",
            "What goes around comes around. This the science of karma.",
            "For every action there's a reaction. So watch what you do out there.",
            "Be nice to the crackheads.",
            "To each his own.",
            "You never know what's lingering over you.",
            "We can handle this like gentlemen, or we can get on some gangster shit.",
            "You gotta have a Plan B. You can't just have Plan A, and when that shit don't work just bug out.",
            "Keychains, that's another hustle. Sell Icees in the summertime.",
            "You selling drugs in a school zone? Run.",
            "Ugly ones, green ones, I love all y'all.",
            "You can shit in my house, just light some matches. You want some matches babe?",
            "This and that and the third.",
            "The same thing that can make you laugh can make you cry.",
            "Make sure you pick your fruits real well.",
            "Just be careful. Take it from your boy.",
            "Just watch who you give all that energy to.",
            "Hold your head.",
            "Turkey and cheese, nice little Nutriment.",
            "I still eat ramen noodles, the chicken kind.",
            "This is Toneology right here.",
            "Fuck your astrology. This is Toneology.",
            "It all stems from the table.",
            "The family broke up from not eating at the table.",
            "A lack of communication leads to a lack of understanding.",
            "Let's get spiritual. Let's get the school shit.",
            "You don't kiss the babies, man.",
            "It's gonna get big. It's gonna be a main event.",
            "Not the babies, man.",
            "Yeah, we slayed Mother Earth. We took the jewelries from her.",
            "I respect your man Al Gore for this greenhouse effect b.",
            "We used catch bees and put them in the jars g.",
            "You think you know so much, but you so stupid at the same time.",
            "The earth is going through a crisis right now.",
            "Life and death is like peanut butter and jelly.",
            "Who's to say that death is bad?",
            "Knowledge is power. And if you got that, you can probably get the most dollars.",
            "That brown liquor will get you son.",
            "I'm not used to somebody taking from me. I do the taking around here.",
            "We love y'all.",
            "Stop with all that pork. Lay off the swine.",
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.buildParagraphs(2);
    };
    AppComponent.prototype.buildParagraph = function () {
        var paragraph_length = 0;
        var paragraph_content = '';
        if (this.isMobileDevice()) {
            paragraph_length = 250;
        }
        else {
            paragraph_length = 500;
        }
        while (paragraph_content.length < paragraph_length) {
            paragraph_content += __WEBPACK_IMPORTED_MODULE_1_lodash__["sample"](this.quotes) + ' ';
        }
        this.paragraphs.push(paragraph_content);
    };
    AppComponent.prototype.buildParagraphs = function (paragraphCount) {
        this.selection = paragraphCount;
        this.paragraphs = [];
        for (var i = 0; i < paragraphCount; i++) {
            this.buildParagraph();
        }
    };
    AppComponent.prototype.isMobileDevice = function () {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    ;
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(463),
            styles: [__webpack_require__(458)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_dropdown__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_dropdown__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_dropdown__["DropdownModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(190)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  35% {\n    opacity: 0.6; }\n  70% {\n    opacity: 0.8; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  35% {\n    opacity: 0.6; }\n  70% {\n    opacity: 0.8; }\n  100% {\n    opacity: 1; } }\n\nh1,\nh2,\nh3,\np {\n  color: #3f4853; }\n\nh1 {\n  font-size: 1.75rem;\n  color: rgba(255, 255, 255, 0.9);\n  font-family: 'Playfair Display', serif;\n  text-shadow: 0 0 2rem rgba(0, 0, 0, 0.9);\n  font-weight: 800;\n  -webkit-transition: all 0.218s ease;\n  transition: all 0.218s ease; }\n  @media (min-width: 550px) {\n    h1 {\n      font-size: 2.5rem;\n      line-height: 2.5rem; } }\n  @media (min-width: 800px) {\n    h1 {\n      font-size: 4.25rem;\n      line-height: 5.25rem; } }\n  @media (min-width: 1024px) {\n    h1 {\n      font-size: 4.75rem;\n      line-height: 5.75rem; } }\n\nh2 {\n  font-size: 1.5rem;\n  font-family: 'Playfair Display', serif;\n  margin-bottom: 0.5rem; }\n\nh3 {\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 0.75rem;\n  letter-spacing: 0.95px; }\n\np {\n  font-family: 'Lora', serif;\n  font-size: 1.0625rem;\n  line-height: 1.625rem; }\n\n.page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh; }\n  @media (min-width: 800px) {\n    .page {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; } }\n\n.hero,\n.ipsum {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n\n.hero {\n  background-image: url(\"https://preview.ibb.co/eU7Dh5/gfk.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n  -webkit-box-flex: 0.33;\n      -ms-flex: 0.33;\n          flex: 0.33; }\n  @media (min-width: 550px) {\n    .hero {\n      -webkit-box-flex: 0.5;\n          -ms-flex: 0.5;\n              flex: 0.5; } }\n  @media (min-width: 800px) {\n    .hero {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; } }\n\n.overlay {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.overlay-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: calc(100% - 3rem);\n  width: calc(100% - 3rem);\n  border: 3px solid rgba(255, 255, 255, 0.9); }\n  @media (min-width: 800px) {\n    .overlay-content {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      border-width: 6px;\n      height: calc(100% - 4rem);\n      width: calc(100% - 4rem); } }\n\n.ipsum {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 2rem;\n  border-bottom: 2px solid #656c75;\n  box-shadow: inset 0px -20px 20px -16px #eef0f2;\n  -webkit-transition: padding 0.218s ease;\n  transition: padding 0.218s ease; }\n  @media (min-width: 800px) {\n    .ipsum {\n      margin: 2rem 4rem; } }\n  @media (min-width: 1024px) {\n    .ipsum {\n      margin: 2rem 4rem; } }\n\n.header {\n  padding-bottom: 1.25rem;\n  border-bottom: 2px solid #656c75; }\n\n.title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  float: left; }\n\n.dropdown {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  min-height: 2rem;\n  width: 7rem;\n  margin: 0 auto;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 0.75rem;\n  letter-spacing: 0.95px;\n  color: #3f4853;\n  float: right; }\n  .dropdown.open .dropdown-menu,\n  .dropdown.open .dropdown-toggle {\n    border-color: #656c75; }\n  .dropdown.open .dropdown-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.dropdown-item,\n.dropdown-toggle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2rem;\n  padding: 0 0.75rem; }\n\n.dropdown-toggle {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border: 1px solid #c7cfd5; }\n  .dropdown-toggle::after {\n    content: '';\n    height: 0;\n    width: 0;\n    border-width: 6px 4px 0 4px;\n    border-style: solid;\n    border-color: #656c75 transparent transparent transparent; }\n\n.dropdown-menu {\n  display: none;\n  position: absolute;\n  top: 2rem;\n  width: 100%;\n  border: 1px solid #656c75;\n  border-top: 0;\n  background-color: white; }\n  .dropdown-menu.open {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.paragraphs {\n  padding: 0.5rem 0;\n  box-shadow: inset 0px 20px 20px -16px #eef0f2;\n  overflow-y: scroll; }\n\n.paragraph + .paragraph {\n  margin-top: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"hero\">\n\t\t<div class=\"overlay\">\n\t\t\t<div class=\"overlay-content\">\n\t\t\t\t<h1 class=\"t-caps\">pretty</h1>\n\t\t\t\t<h1 class=\"t-caps\">toney</h1>\n\t\t\t\t<h1 class=\"t-caps\">ipsum</h1>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"ipsum\">\n\t\t<header class=\"header\">\n\t\t\t<div class=\"title\">\n\t\t\t\t<h2>Words of Wisdom</h2>\n\t\t\t\t<h3>from Ghost Deini the Great</h3>\n\t\t\t</div>\n\n\t\t\t<div\n\t\t\t\tclass=\"dropdown u-pullRight\"\n\t\t\t\tdropdown>\n\t\t\t\t<div\n\t\t\t\t\tclass=\"dropdown-toggle\"\n\t\t\t\t\tdropdown-open>\n\t\t\t        <a>{{selection}} Verses</a>\n\t\t\t\t</div>\n\t\t        <ul class=\"dropdown-menu\">\n\t\t            <li\n\t\t            \tclass=\"dropdown-item\"\n\t\t            \t*ngFor=\" let button of [1,2,3,4,5]; let index = index\"\n\t\t\t\t\t\t(click)=\"buildParagraphs(index + 1)\">\n\t\t\t\t\t\t<span>{{index + 1}} Verses</span>\n\t\t\t\t\t</li>\n\t\t        </ul>\n\t\t    </div>\n\t\t</header>\n\n\t    <div class=\"paragraphs\">\n\t\t\t<p\n\t\t\t\tclass=\"paragraph\"\n\t\t\t\t*ngFor=\"let paragraph of paragraphs\">\n\t\t\t\t{{paragraph}}\n\t\t\t</p>\n\t    </div>\n\t</div>\n</div>"

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[478]);
//# sourceMappingURL=main.bundle.js.map