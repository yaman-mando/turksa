// import {BehaviorSubject, Observable, Subject} from "rxjs";
// import {NavController} from "@ionic/angular";
// import {IPaginateType} from "../app-pagination/app.pagination";
// import {IPaginationInterface} from "../mobile-api-interfaces/shared.interface";
// import {takeUntil} from "rxjs/operators";
//
// export class PaginationBase {
//
//     private countBeh: BehaviorSubject<number>;
//
//     public readonly canGoBackBeh: BehaviorSubject<boolean>;
//     public readonly canGoNextBeh: BehaviorSubject<boolean>;
//
//     constructor(
//         private _queryNames: IPaginateType,
//         public _queryValues: IPaginationInterface,
//         private _navCtrl: NavController,
//         private _destroySubject: Subject<boolean>,
//     ) {
//
//         this.canGoBackBeh = new BehaviorSubject<boolean>(false);
//         this.canGoNextBeh = new BehaviorSubject<boolean>(false);
//
//         this.countBeh = new BehaviorSubject<number>(null);
//
//         this._queryValues.currentPage = PaginationBase.validateValue(_queryValues.currentPage, 1);
//         this._queryValues.pageSize = PaginationBase.validateValue(_queryValues.pageSize, 6);
//
//         this.checkGoBack();
//         this.checkGoNext();
//
//         //subscribe to count
//         this.countBeh
//             .pipe(takeUntil(this._destroySubject))
//             .subscribe((_count) => {
//                 this.canGoNextBeh.next(
//                     this._queryValues.currentPage < (_count / this._queryValues.pageSize)
//                 );
//             });
//
//
//     }
//
//     static validateValue(_val: number, minVal: number): number {
//         if (Number.isNaN(_val) || !Number.isInteger(_val) || _val === 0 || _val < 0) {
//
//             return minVal;
//         }
//
//         return Number(_val);
//     }
//
//     public async prev() {
//
//         await this._navCtrl.navigateForward([], {
//             replaceUrl: true,
//             queryParamsHandling: 'merge',
//             queryParams: {
//                 [this._queryNames.currentPage]: this._queryValues.currentPage - 1,
//                 [this._queryNames.pageSize]: this._queryValues.pageSize
//             }
//         });
//
//         this.checkGoBack();
//         this.checkGoNext();
//
//
//     }
//
//     public async next() {
//
//         await this._navCtrl.navigateForward([], {
//             replaceUrl: true,
//             queryParamsHandling: 'merge',
//             queryParams: {
//                 [this._queryNames.currentPage]: this._queryValues.currentPage + 1,
//                 [this._queryNames.pageSize]: this._queryValues.pageSize
//             }
//         });
//
//         this.checkGoBack();
//         this.checkGoNext();
//
//
//     }
//
//     /*set count*/
//     public setCount(_val: number) {
//         this.countBeh.next(_val);
//     }
//
//     private checkGoBack() {
//         this.canGoBackBeh.next(this._queryValues.currentPage > 1);
//     }
//
//     private checkGoNext() {
//         this.canGoNextBeh.next(true);
//     }
//
//
// }
