import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-dashboard.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDashboardService {
    constructor() { }
}
NgxDashboardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxDashboardService.ctorParameters = () => [];
/** @nocollapse */ NgxDashboardService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxDashboardService_Factory() { return new NgxDashboardService(); }, token: NgxDashboardService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-dashboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDashboardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgxDashboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-NgxDashboard',
                template: "<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shiba Inu</mat-card-title>\r\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n    <mat-card-content>\r\n        <p>\r\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n            bred for hunting.\r\n        </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n</mat-card>",
                styles: ["example-card{max-width:400px!important}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]
            }] }
];
/** @nocollapse */
NgxDashboardComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/semi-circular-progressbar/semi-circular-progressbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemiCircularProgressbarComponent {
    constructor() {
        this.matchCount = 45;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.match = this.match || 0;
        this.matchCount += this.match * 1.8;
    }
}
SemiCircularProgressbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-semi-circular-progressbar',
                template: "<div class=\"progress\">\n    <div class=\"barOverflow\">\n        <div class=\"bar\" [style.transform]=\"'rotate('+matchCount+'deg)'\"></div>\n    </div>\n    <span>{{match}}</span>%\n</div>",
                styles: [".progress{position:relative;margin:4px;float:left;text-align:center}.barOverflow{position:relative;overflow:hidden;width:90px;height:45px;margin-bottom:-14px}.bar{position:absolute;top:0;left:0;width:90px;height:90px;border-radius:50%;box-sizing:border-box;border:5px solid #eee;border-bottom-color:#0bf;border-right-color:#0bf}"]
            }] }
];
/** @nocollapse */
SemiCircularProgressbarComponent.ctorParameters = () => [];
SemiCircularProgressbarComponent.propDecorators = {
    match: [{ type: Input }]
};
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
class TestComponentComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestComponentComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-test-component',
                template: "<p>test-component works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TestComponentComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pie-chart/pie-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PieChartComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PieChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pie-chart',
                template: "<p>pie-chart works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PieChartComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-dashboard.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDashboardModule {
}
NgxDashboardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxDashboardComponent, SemiCircularProgressbarComponent, TestComponentComponent, PieChartComponent],
                imports: [
                    MatCardModule,
                    MatButtonModule
                ],
                exports: [NgxDashboardComponent, SemiCircularProgressbarComponent, PieChartComponent]
            },] }
];

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

export { NgxDashboardComponent, NgxDashboardModule, NgxDashboardService, SemiCircularProgressbarComponent as ɵa, TestComponentComponent as ɵb, PieChartComponent as ɵc };
//# sourceMappingURL=ngx-dashboard.js.map
