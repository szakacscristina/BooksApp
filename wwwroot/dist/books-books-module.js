(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["books-books-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books-edit/books-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books/books-edit/books-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add/Edit books</p>\r\n\r\n<mat-card class=\"example-card\">\r\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n        <div class=\"example-container\">\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Title\" formControlName=\"title\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('title').touched && formGroup.get('title').errors && formGroup.get('title').errors.required\">\r\n                    Title required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"YearOfRelease\" formControlName=\"yearOfRelease\" type=\"number\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('yearOfRelease').touched && formGroup.get('yearOfRelease').errors && formGroup.get('yearOfRelease').errors.required\">\r\n                    Year of release required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Publisher\" formControlName=\"publisher\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('publisher').touched && formGroup.get('publisher').errors && formGroup.get('publisher').errors.required\">\r\n                    Publisher required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Author\" formControlName=\"author\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('author').touched && formGroup.get('author').errors && formGroup.get('author').errors.required\">\r\n                    Publisher required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"BookGenre\" formControlName=\"bookGenre\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('bookGenre').touched && formGroup.get('bookGenre').errors && formGroup.get('bookGenre').errors.required\">\r\n                    Publisher required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n            <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n        </div>\r\n    </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books-list/books-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books/books-list/books-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Books</h1>\r\n\r\n<p>Many books in the list</p>\r\n\r\n<div class=\"example-button-row\">\r\n    <button mat-raised-button [routerLink]='[\"../edit\"]' color=\"primary\">Add</button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"books?.items\" class=\"mat-elevation-z8\" *ngIf=\"books\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Title </th>\r\n        <td mat-cell *matCellDef=\"let book\"> {{book.title}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"yearOfRelease\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:23%\"> Year of release </th>\r\n        <td mat-cell *matCellDef=\"let book\"> {{book.yearOfRelease}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"publisher\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:23%\"> Publisher </th>\r\n        <td mat-cell *matCellDef=\"let book\"> {{book.publisher}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"author\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:23%\"> Author </th>\r\n        <td mat-cell *matCellDef=\"let book\"> {{book.author}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"bookGenre\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:23%\"> Book genre </th>\r\n        <td mat-cell *matCellDef=\"let book\"> {{book.bookGenre}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"numberOfReviews\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:23%\"> No. of reviews </th>\r\n        <td mat-cell *matCellDef=\"let book\"> {{book.numberOfReviews}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <!-- Action Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let book\">\r\n            <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', book.id]\">edit</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deleteBook(book)\">delete</mat-icon>\r\n            </button>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!books\"></mat-progress-bar>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/books/books-edit/books-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/books/books-edit/books-edit.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n    .example-container > * {\r\n        width: 100%;\r\n    }\r\n\r\n    body {\r\n    background-image: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MtZWRpdC9ib29rcy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0lBRUk7UUFDSSxXQUFXO0lBQ2Y7O0lBR0o7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9ib29rcy9ib29rcy1lZGl0L2Jvb2tzLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiAgICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/books/books-edit/books-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/books/books-edit/books-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: BooksEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksEditComponent", function() { return BooksEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../books.service */ "./src/app/books/books.service.ts");
/* harmony import */ var _books_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../books.models */ "./src/app/books/books.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let BooksEditComponent = class BooksEditComponent {
    constructor(router, route, booksService, formBuilder) {
        this.router = router;
        this.route = route;
        this.booksService = booksService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
    }
    ngOnInit() {
        this.bookID = parseInt(this.route.snapshot.params['id']);
        if (this.bookID) {
            this.routerLink = '../../list';
            this.booksService.getBook(this.bookID).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm({});
        }
    }
    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });
        if (this.formGroup.valid) {
            let book = this.formGroup.value;
            book.bookGenre = _books_models__WEBPACK_IMPORTED_MODULE_4__["BookGenre"].Romance;
            if (this.isEdit) {
                book.id = this.bookID;
                this.booksService.modifyBook(book).subscribe(res => {
                    this.router.navigate(['/books']);
                });
            }
            else {
                this.booksService.saveBook(book).subscribe(res => {
                    this.router.navigate(['/books']);
                });
            }
        }
    }
    initForm(book) {
        this.formGroup = this.formBuilder.group({
            title: [book.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            yearOfRelease: [book.yearOfRelease, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            publisher: [book.publisher, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: [book.author, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            bookGenre: [book.bookGenre, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
};
BooksEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
BooksEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-books-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./books-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books-edit/books-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./books-edit.component.css */ "./src/app/books/books-edit/books-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], BooksEditComponent);



/***/ }),

/***/ "./src/app/books/books-list/books-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/books/books-list/books-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MtbGlzdC9ib29rcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLWxpc3QvYm9va3MtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/books/books-list/books-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/books/books-list/books-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BooksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksListComponent", function() { return BooksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../books.service */ "./src/app/books/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let BooksListComponent = class BooksListComponent {
    constructor(booksService) {
        this.booksService = booksService;
        this.displayedColumns = ['title', 'yearOfRelease', 'publisher', 'author', 'bookGenre', 'numberOfReviews', 'action'];
    }
    ngOnInit() {
        this.loadBooks();
    }
    loadBooks() {
        this.booksService.listBooks().subscribe(res => {
            this.books = res;
        });
    }
    deleteBook(book) {
        this.booksService.deleteBook(book.id).subscribe(x => {
            this.loadBooks();
        });
    }
};
BooksListComponent.ctorParameters = () => [
    { type: _books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"] }
];
BooksListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-books-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./books-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books-list/books-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./books-list.component.css */ "./src/app/books/books-list/books-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"]])
], BooksListComponent);



/***/ }),

/***/ "./src/app/books/books-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/books/books-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function() { return BooksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _books_edit_books_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books-edit/books-edit.component */ "./src/app/books/books-edit/books-edit.component.ts");
/* harmony import */ var _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books-list/books-list.component */ "./src/app/books/books-list/books-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





const routes = [
    {
        path: '', component: _books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_4__["BooksListComponent"] },
            { path: 'edit/:id', component: _books_edit_books_edit_component__WEBPACK_IMPORTED_MODULE_3__["BooksEditComponent"] },
            { path: 'edit', component: _books_edit_books_edit_component__WEBPACK_IMPORTED_MODULE_3__["BooksEditComponent"] },
        ]
    }
];
let BooksRoutingModule = class BooksRoutingModule {
};
BooksRoutingModule.routedComponents = [_books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"], _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_4__["BooksListComponent"], _books_edit_books_edit_component__WEBPACK_IMPORTED_MODULE_3__["BooksEditComponent"]];
BooksRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], BooksRoutingModule);



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let BooksComponent = class BooksComponent {
    constructor() { }
    ngOnInit() {
    }
};
BooksComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-books',
        template: __importDefault(__webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], BooksComponent);



/***/ }),

/***/ "./src/app/books/books.models.ts":
/*!***************************************!*\
  !*** ./src/app/books/books.models.ts ***!
  \***************************************/
/*! exports provided: BookGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookGenre", function() { return BookGenre; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Romance"] = 0] = "Romance";
    BookGenre[BookGenre["Fantasy"] = 1] = "Fantasy";
    BookGenre[BookGenre["Science"] = 2] = "Science";
    BookGenre[BookGenre["Mistery"] = 3] = "Mistery";
    BookGenre[BookGenre["Action"] = 4] = "Action";
})(BookGenre || (BookGenre = {}));


/***/ }),

/***/ "./src/app/books/books.module.ts":
/*!***************************************!*\
  !*** ./src/app/books/books.module.ts ***!
  \***************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books-routing.module */ "./src/app/books/books-routing.module.ts");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books.service */ "./src/app/books/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let BooksModule = class BooksModule {
};
BooksModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_books_routing_module__WEBPACK_IMPORTED_MODULE_5__["BooksRoutingModule"].routedComponents],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _books_routing_module__WEBPACK_IMPORTED_MODULE_5__["BooksRoutingModule"],
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        providers: [_books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"]],
    })
], BooksModule);



/***/ }),

/***/ "./src/app/books/books.service.ts":
/*!****************************************!*\
  !*** ./src/app/books/books.service.ts ***!
  \****************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let BooksService = class BooksService {
    constructor(http, applicationService) {
        this.http = http;
        this.applicationService = applicationService;
    }
    getBook(id) {
        return this.http.get(`${this.applicationService.baseUrl}api/Books/${id}`);
    }
    listBooks() {
        return this.http.get(`${this.applicationService.baseUrl}api/Books`);
    }
    saveBook(book) {
        return this.http.post(`${this.applicationService.baseUrl}api/Books`, book);
    }
    modifyBook(book) {
        return this.http.put(`${this.applicationService.baseUrl}api/Books/${book.id}`, book);
    }
    deleteBook(id) {
        return this.http.delete(`${this.applicationService.baseUrl}api/Books/${id}`);
    }
};
BooksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }
];
BooksService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
], BooksService);



/***/ })

}]);
//# sourceMappingURL=books-books-module.js.map