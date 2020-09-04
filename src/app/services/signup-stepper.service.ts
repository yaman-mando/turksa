import {Injectable} from '@angular/core';
import {$PROJECT_URL, Api_Auth} from "../static-api/static-api";
import {BaseService, SubscriptionHook} from "./base.service";
import {Igeneral, IRegister, ISetPassword, IVerificationCodePost} from "../interfaces/signup-stepper.interface";

@Injectable({
  providedIn: 'root'
})
export class SignupStepperService {

  constructor(private _baseService: BaseService) {
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

    public async setPassword(_obj:ISetPassword,_callBack?: SubscriptionHook){
      return await this._baseService.send_PromiseType<Igeneral>({
        _url: `${$PROJECT_URL}/${Api_Auth.SetUserPassword}`,
        _params: null,
        _body: _obj,
        _rejectMsg: 'setPassword',
      }, {..._callBack});

    }



}
