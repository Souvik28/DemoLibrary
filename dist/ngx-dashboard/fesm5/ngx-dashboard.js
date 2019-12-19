import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-dashboard.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDashboardService = /** @class */ (function () {
    function NgxDashboardService() {
    }
    NgxDashboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxDashboardService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxDashboardService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxDashboardService_Factory() { return new NgxDashboardService(); }, token: NgxDashboardService, providedIn: "root" });
    return NgxDashboardService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-dashboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDashboardComponent = /** @class */ (function () {
    function NgxDashboardComponent() {
    }
    /**
     * @return {?}
     */
    NgxDashboardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxDashboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-NgxDashboard',
                    template: "<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shiba Inu</mat-card-title>\r\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n    <mat-card-content>\r\n        <p>\r\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n            bred for hunting.\r\n        </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n</mat-card>",
                    styles: ["example-card{max-width:400px!important}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]
                }] }
    ];
    /** @nocollapse */
    NgxDashboardComponent.ctorParameters = function () { return []; };
    return NgxDashboardComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/semi-circular-progressbar/semi-circular-progressbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SemiCircularProgressbarComponent = /** @class */ (function () {
    function SemiCircularProgressbarComponent() {
        this.matchCount = 45;
    }
    /**
     * @return {?}
     */
    SemiCircularProgressbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.match = this.match || 0;
        this.matchCount += this.match * 1.8;
    };
    SemiCircularProgressbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-semi-circular-progressbar',
                    template: "<div class=\"progress\">\n    <div class=\"barOverflow\">\n        <div class=\"bar\" [style.transform]=\"'rotate('+matchCount+'deg)'\"></div>\n    </div>\n    <span>{{match}}</span>%\n</div>",
                    styles: [".progress{position:relative;margin:4px;float:left;text-align:center}.barOverflow{position:relative;overflow:hidden;width:90px;height:45px;margin-bottom:-14px}.bar{position:absolute;top:0;left:0;width:90px;height:90px;border-radius:50%;box-sizing:border-box;border:5px solid #eee;border-bottom-color:#0bf;border-right-color:#0bf}"]
                }] }
    ];
    /** @nocollapse */
    SemiCircularProgressbarComponent.ctorParameters = function () { return []; };
    SemiCircularProgressbarComponent.propDecorators = {
        match: [{ type: Input }]
    };
    return SemiCircularProgressbarComponent;
}());
if (false) {
    /** @type {?} */
    SemiCircularProgressbarComponent.prototype.match;
    /** @type {?} */
    SemiCircularProgressbarComponent.prototype.matchCount;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/test-component/test-component.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestComponentComponent = /** @class */ (function () {
    function TestComponentComponent() {
    }
    /**
     * @return {?}
     */
    TestComponentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TestComponentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-test-component',
                    template: "<p>test-component works!</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TestComponentComponent.ctorParameters = function () { return []; };
    return TestComponentComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-dashboard.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDashboardModule = /** @class */ (function () {
    function NgxDashboardModule() {
    }
    NgxDashboardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxDashboardComponent, SemiCircularProgressbarComponent, TestComponentComponent],
                    imports: [
                        MatCardModule,
                        MatButtonModule
                    ],
                    exports: [NgxDashboardComponent, SemiCircularProgressbarComponent]
                },] }
    ];
    return NgxDashboardModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-dashboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxDashboardComponent, NgxDashboardModule, NgxDashboardService, SemiCircularProgressbarComponent as ɵa, TestComponentComponent as ɵb };
//# sourceMappingURL=ngx-dashboard.js.map
