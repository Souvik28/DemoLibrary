/**
 * @fileoverview added by tsickle
 * Generated from: lib/semi-circular-progressbar/semi-circular-progressbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SemiCircularProgressbarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtaS1jaXJjdWxhci1wcm9ncmVzc2Jhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL3NlbWktY2lyY3VsYXItcHJvZ3Jlc3NiYXIvc2VtaS1jaXJjdWxhci1wcm9ncmVzc2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sZ0NBQWdDO0lBSTNDO1FBREEsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUNSLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtJQUNyQyxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsMk1BQXlEOzthQUUxRDs7Ozs7b0JBR0UsS0FBSzs7OztJQUFOLGlEQUF1Qjs7SUFDdkIsc0RBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZW1pLWNpcmN1bGFyLXByb2dyZXNzYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbWktY2lyY3VsYXItcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZW1pLWNpcmN1bGFyLXByb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VtaUNpcmN1bGFyUHJvZ3Jlc3NiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1hdGNoOiBudW1iZXI7XG4gIG1hdGNoQ291bnQ6IG51bWJlciA9IDQ1O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoIHx8IDA7XG4gICAgdGhpcy5tYXRjaENvdW50ICs9IHRoaXMubWF0Y2ggKiAxLjhcbiAgfVxuXG59XG4iXX0=