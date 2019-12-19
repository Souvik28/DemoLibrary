/**
 * @fileoverview added by tsickle
 * Generated from: lib/semi-circular-progressbar/semi-circular-progressbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { SemiCircularProgressbarComponent };
if (false) {
    /** @type {?} */
    SemiCircularProgressbarComponent.prototype.match;
    /** @type {?} */
    SemiCircularProgressbarComponent.prototype.matchCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtaS1jaXJjdWxhci1wcm9ncmVzc2Jhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL3NlbWktY2lyY3VsYXItcHJvZ3Jlc3NiYXIvc2VtaS1jaXJjdWxhci1wcm9ncmVzc2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQVNFO1FBREEsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUNSLENBQUM7Ozs7SUFFakIsbURBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO0lBQ3JDLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QywyTUFBeUQ7O2lCQUUxRDs7Ozs7d0JBR0UsS0FBSzs7SUFTUix1Q0FBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksZ0NBQWdDOzs7SUFFM0MsaURBQXVCOztJQUN2QixzREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlbWktY2lyY3VsYXItcHJvZ3Jlc3NiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VtaS1jaXJjdWxhci1wcm9ncmVzc2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbWktY2lyY3VsYXItcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1pQ2lyY3VsYXJQcm9ncmVzc2JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWF0Y2g6IG51bWJlcjtcbiAgbWF0Y2hDb3VudDogbnVtYmVyID0gNDU7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2ggfHwgMDtcbiAgICB0aGlzLm1hdGNoQ291bnQgKz0gdGhpcy5tYXRjaCAqIDEuOFxuICB9XG5cbn1cbiJdfQ==