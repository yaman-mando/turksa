import {Injectable} from '@angular/core';
import {$PROJECT_URL, Api_Auth, Api_SP} from "../static-api/static-api";
import {BaseService, SubscriptionHook} from "./base.service";
import {
  IBusinessTypesList,
  Igeneral, IPersonalWorkInfo,
  IRegister,
  ISetPassword,
  IVerificationCodePost
} from "../interfaces/signup-stepper.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignupStepperService {

  //gear type
  private readonly businessTypeBeh: BehaviorSubject<IBusinessTypesList>;
  public readonly businessType$: Observable<IBusinessTypesList>;

  constructor(private _baseService: BaseService) {

    this.businessTypeBeh = new BehaviorSubject<IBusinessTypesList>(null);
    this.businessType$ = this.businessTypeBeh.asObservable();

    this.businessType$.subscribe(res=>{
      console.log(res);
    })

  }


  /*login and get detail*/
  public async signUp(_obj: IRegister, _callBack?: SubscriptionHook) {
    //success login
    return await this._baseService.send_PromiseType<Igeneral>({
      _url: `${$PROJECT_URL}/${Api_Auth.RegisterAccount}`,
      _params: null,
      _body: _obj,
      _rejectMsg: 'login',
    }, {..._callBack});
  }

  //get Code verification
  public async getCode(_obj: IVerificationCodePost, _callBack?: SubscriptionHook) {
    return await this._baseService.send_PromiseType<Igeneral>({
      _url: `${$PROJECT_URL}/${Api_Auth.VerifyVerificationCode}`,
      _params: null,
      _body: _obj,
      _rejectMsg: 'verifyCode',
    }, {..._callBack});
  }

  //get code verification as twice
    public async ResendVerificationCode(_obj:{username},_callBack?: SubscriptionHook){
      return await this._baseService.send_PromiseType<Igeneral>({
        _url: `${$PROJECT_URL}/${Api_Auth.ResendVerificationCode}`,
        _params: null,
        _body: _obj,
        _rejectMsg: 'rVerifyCode',
      }, {..._callBack});
    }

    public async setPassword(_obj:ISetPassword,_callBack?: SubscriptionHook)
    {
      return await this._baseService.send_PromiseType<Igeneral>({
        _url: `${$PROJECT_URL}/${Api_Auth.SetUserPassword}`,
        _params: null,
        _body: _obj,
        _rejectMsg: 'setPassword',
      }, {..._callBack});
    }


  public async getBusinessType(_updateBehavior: boolean, _callBack?: SubscriptionHook) {
    return await this._baseService.getProp_PromiseType_GetType(
      {
        _url: `${$PROJECT_URL}/${Api_SP.business_type}`,
        _propName: 'businessTypes',
        _beh: this.businessTypeBeh,
        _data:'data',
        _updateBehavior,
        _rejectMsg: 'businessTypes'
      }, {..._callBack}
    );
  }


  public async submitPersonalInfo(_obj:IPersonalWorkInfo,_callBack?: SubscriptionHook)
  {
    return await this._baseService.send_PromiseType<Igeneral>({
      _url: `${$PROJECT_URL}/${Api_SP.CompleteCompanyRegistration}`,
      _params: null,
      _body: _obj,
      _rejectMsg: 'submitPersonalInfo',
    }, {..._callBack});
  }


}
