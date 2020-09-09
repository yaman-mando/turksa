import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class BaseService {


  constructor(
    private http: HttpClient
  ) {

  }


  public getProp_PromiseType_GetType<ObjectType, PropType>
  (_obj: PO_GetPropPromiseType<PropType>, _callBack: SubscriptionHook)
    : Promise<{ data: any,status:boolean, errors:[] }> {
    return new Promise(async (resolve, reject) => {
      if (_callBack && _callBack._onStart) {
        await _callBack._onStart();
      }
      this.http.get<ObjectType>(_obj._url, {
        params: _obj._params,
        headers: _obj._headers
      }).subscribe(async (res: ObjectType) => {
        if (res[RES_CODE_PROP] === RES_CODE.Success) {
          if (_obj._updateBehavior) {
            _obj._beh.next(res[DATA_CODE_PROP]);
            console.log(res[DATA_CODE_PROP]);
          }
          resolve({data: res[DATA_CODE_PROP], status: res[RES_CODE_PROP],errors:res[ERROR_CODE_PROP]});
        }
        //if no res
        if (!res || !res[RES_CODE_PROP]) {
          if (_callBack && _callBack._onError) {
            await _callBack._onError();
          }
          reject(new Error(`${_obj._rejectMsg}`));
        }
        //if res exist
        if (res[RES_CODE_PROP] === RES_CODE.NotFound) {
          if (_obj._updateBehavior) {
            _obj._beh.next(null);
          }
          resolve({data: res[DATA_CODE_PROP], status: res[RES_CODE_PROP],errors:res[ERROR_CODE_PROP]});
        }
      }, async (e) => {

        if (_callBack && _callBack._onError) {
          await _callBack._onError();
        }
        reject(new Error(_obj._rejectMsg));
      }, async () => {
        if (_callBack && _callBack._onComplete) {
          await _callBack._onComplete();
        }
      });
    });
  }

  public getProp_PromiseType_PostType<ObjectType, PropType>(_obj: PO_GetPropPromiseType_PostType, _callBack: SubscriptionHook): Promise<{ data: PropType, resCode: number }> {
    return new Promise(async (resolve, reject) => {
      if (_callBack && _callBack._onStart) {
        await _callBack._onStart();
      }
      this.http.post<ObjectType>(_obj._url, _obj._body, {
        headers: _obj._headers,
        params: _obj._params
      }).subscribe(async (res: ObjectType) => {
        if (res[RES_CODE_PROP] === RES_CODE.Success) {
          if (_obj._updateBehavior) {
            _obj._beh.next(res[_obj._propName]);
          }
          resolve({data: res[_obj._propName], resCode: res[RES_CODE_PROP]});
        }
        if (!res || !res[RES_CODE_PROP]) {
          if (_callBack && _callBack._onError) {
            await _callBack._onError();
          }
          reject(new Error(`${_obj._rejectMsg}`));
        }
        //rse exist
        if (res[RES_CODE_PROP] === RES_CODE.NotFound) {
          if (_obj._updateBehavior) {
            _obj._beh.next(null);
          }
          resolve({data: res[_obj._propName], resCode: res[RES_CODE_PROP]});
        }
      }, async (e) => {
        if (_callBack && _callBack._onError) {
          await _callBack._onError();
        }
        reject(new Error(_obj._rejectMsg));
      }, async () => {
        if (_callBack && _callBack._onComplete) {
          await _callBack._onComplete();
        }
      });
    });
  }

  /**
   * get object promise type
   */
  public getObject_PromiseType<ObjectInterface>(_obj: PO_GetObjectPromiseType<ObjectInterface>, _callBack: SubscriptionHook): Promise<{ data: ObjectInterface, resCode: number }> {
    return new Promise(async (resolve, reject) => {
      if (_callBack && _callBack._onStart) {
        await _callBack._onStart();
      }
      this.http.get<ObjectInterface>(_obj._url, {
        params: _obj._params,
        headers: _obj._headers
      }).subscribe(async (res: ObjectInterface) => {
        if (res[RES_CODE_PROP] === RES_CODE.Success) {
          if (_obj._updateBehavior) {
            _obj._beh.next(res);
          }
          resolve({data: res, resCode: res[RES_CODE_PROP]});
        }
        if (!res || !res[RES_CODE_PROP]) {
          if (_callBack && _callBack._onError) {
            await _callBack._onError();
          }
          reject(new Error(`${_obj._rejectMsg}`));
        }
        //rse exist
        if (res[RES_CODE_PROP] === RES_CODE.NotFound) {
          if (_obj._updateBehavior) {
            _obj._beh.next(null);
          }
          resolve({data: res, resCode: res[RES_CODE_PROP]});
        }
      }, async (e) => {
        if (_callBack && _callBack._onError) {
          await _callBack._onError();
        }
        reject(new Error(`${_obj._rejectMsg}`));

      }, async () => {
        if (_callBack && _callBack._onComplete) {
          await _callBack._onComplete();
        }
      });
    });
  }

  /*get object post type*/
  public getObject_PromiseType_PostType<ObjectInterface>(_obj: PO_GetObjectPromiseType_PostType<ObjectInterface>, _callBack: SubscriptionHook):Promise<{ data: ObjectInterface, resCode: number }>{
    return new Promise(async (resolve, reject) => {
      if (_callBack && _callBack._onStart) {
        await _callBack._onStart();
      }
      this.http.post<ObjectInterface>(_obj._url, _obj._body,{
        params: _obj._params,
        headers: _obj._headers
      }).subscribe(async (res: ObjectInterface) => {
        if (res[RES_CODE_PROP] === RES_CODE.Success) {
          if (_obj._updateBehavior) {
            _obj._beh.next(res);
          }
          resolve({data: res, resCode: res[RES_CODE_PROP]});
        }
        if (!res || !res[RES_CODE_PROP]) {
          if (_callBack && _callBack._onError) {
            await _callBack._onError();
          }
          reject(new Error(`${_obj._rejectMsg}`));
        }
        //rse exist
        if (res[RES_CODE_PROP] === RES_CODE.NotFound) {
          if (_obj._updateBehavior) {
            _obj._beh.next(null);
          }
          resolve({data: res, resCode: res[RES_CODE_PROP]});
        }
      }, async (e) => {
        if (_callBack && _callBack._onError) {
          await _callBack._onError();
        }
        reject(new Error(`${_obj._rejectMsg}`));

      }, async () => {
        if (_callBack && _callBack._onComplete) {
          await _callBack._onComplete();
        }
      });
    });
  }

  /*send promise type*/
  public send_PromiseType<ResType>(_obj: PO_PostPromiseType, _callBack: SubscriptionHook): Promise<{ data:any; status: boolean;errors:[]}> {
    console.log(_obj);
    return new Promise(async (resolve, reject) => {
      console.log(_callBack);
      if (_callBack && _callBack._onStart) {
        await _callBack._onStart();
      }
      this.http.post(_obj._url, _obj._body, {
        headers: _obj._headers,
        params: _obj._params
      }).subscribe(async (res: ResType) => {
        console.log(res);
        if (res[RES_CODE_PROP] === RES_CODE.Success) {
          resolve({data: res[DATA_CODE_PROP], status:res[RES_CODE_PROP],errors:res[ERROR_CODE_PROP]});
        }
        else if (!res || !res[RES_CODE_PROP]) {
          if (_callBack && _callBack._onError) {
            await _callBack._onError();
          }
          resolve({data: res[DATA_CODE_PROP], status: res[RES_CODE_PROP],errors:res[ERROR_CODE_PROP]},);
        } else {
          resolve({data: res[DATA_CODE_PROP], status: res[RES_CODE_PROP],errors:res[ERROR_CODE_PROP]});
        }
      }, async (e) => {
        if (_callBack && _callBack._onError) {
          await _callBack._onError();
        }
        reject(new Error(`${_obj._rejectMsg}`));
      }, async () => {
        if (_callBack && _callBack._onComplete) {
          await _callBack._onComplete();
        }
      });
    });
  }

  /*upload file promise type*/
  public uploadFile_PromiseType<ResType>(_obj: PO_UploadFilePromiseType, _callBack: SubscriptionHook): Promise<{ response: ResType; state: "success" | "failed" }> {
    return new Promise(async (resolve, reject) => {
      if (_callBack && _callBack._onStart) {
        await _callBack._onStart();
      }

      for (let object of _obj._fdParams) {
        _obj._fd.append(object.name, object.value);
      }

      this.http.post<ResType>(_obj._url, _obj._fd, {
        params: _obj._params,
        headers: _obj._headers
      }).subscribe(async (res: ResType) => {
        if (res[RES_CODE_PROP] === RES_CODE.Success) {
          resolve({response: res, state: "success"});
        }
        if (!res || !res[RES_CODE_PROP]) {
          if (_callBack && _callBack._onError) {
            await _callBack._onError();
          }
          reject(new Error(`${_obj._rejectMsg}`));
        }
      }, async (e) => {
        if (_callBack && _callBack._onError) {
          await _callBack._onError();
        }
        reject(new Error(`${_obj._rejectMsg}`));
      }, async () => {
        if (_callBack && _callBack._onComplete) {
          await _callBack._onComplete();
        }
      })
    });
  }

  /*delete file promise type*/
  public deleteFile_PromiseType<ResType>(_obj: PO_DeleteFilePromiseType, _callBack: SubscriptionHook): Promise<{ response: ResType, state: "success" | "failed" }> {
    return new Promise(async (resolve, reject) => {
      if (_callBack && _callBack._onStart) {
        await _callBack._onStart();
      }
      this.http.get(_obj._url, {
        params: _obj._params,
        headers: _obj._headers
      }).subscribe(async (res: ResType) => {
        if (res[RES_CODE_PROP] === RES_CODE.Success) {
          resolve({response: res, state: "success"});
        }
        if (!res || !res[RES_CODE_PROP]) {
          if (_callBack && _callBack._onError) {
            await _callBack._onError();
          }
          reject(new Error(`${_obj._rejectMsg}`));
        }
      }, async (e) => {
        if (_callBack && _callBack._onError) {
          await _callBack._onError();
        }
        reject(new Error(`${_obj._rejectMsg}`));
      }, async () => {
        if (_callBack && _callBack._onComplete) {
          await _callBack._onComplete();
        }
      });
    });
  }


}//end of service

//res name + status code number
export const DATA_CODE_PROP: string = 'data';
export const RES_CODE_PROP: string = 'status';
export const ERROR_CODE_PROP:string='errors';
export const RES_CODE = {
  Failed: false,
  Success: true,
  NotFound: 2,
  PasswordOrEmailWrong: 3,
  EmailIsAlreadyExist: 4,
  UserIsNotCustomer: 5,
  DisabledAccount: 6,
  DeviceAlreadyRegisterd: 7,
  CodeNotValid : 9,
  Category: {
    Invalid: 11
  }
};

//params prop object promise type
export interface PO_GetPropPromiseType<T> {
  _url: string;
  _beh: BehaviorSubject<T>;
  _updateBehavior: boolean;
  _propName: string;
  _data?:string,
  _rejectMsg: string;
  _params?: {};
  _headers?;
  _notFoundCallBack?: () => void
}

export interface PO_GetPropPromiseType_PostType {
  _url: string;
  _beh: BehaviorSubject<any>;
  _updateBehavior: boolean;
  _propName: string;
  _rejectMsg: string;
  _body?:{};
  _params?: {};
  _headers?;
}

export interface PO_GetObjectPromiseType<Object> {
  _url: string;
  _beh: BehaviorSubject<Object>;
  _updateBehavior: boolean;
  _rejectMsg: string;
  _params?: {};
  _headers?;
  _notFoundCallBack?: () => void
}

export interface PO_GetObjectPromiseType_PostType<Object> {
  _url: string;
  _beh: BehaviorSubject<Object>;
  _updateBehavior: boolean;
  _rejectMsg: string;
  _params?: {};
  _body?:{};
  _headers?;
  _notFoundCallBack?: () => void
}

//post promise type
export interface PO_PostPromiseType {
  _url: string;
  _body: {};
  _rejectMsg: string;
  _params?: {};
  _headers?;
}

//upload file promise type
export interface PO_UploadFilePromiseType {
  _url: string;
  _fd: FormData;
  _fdParams: { name: string; value: any }[];
  _rejectMsg: string;
  _params?: {};
  _headers?: HttpHeaders
}

//delete file promise type
export interface PO_DeleteFilePromiseType {
  _url: string;
  _params: { id: string };
  _rejectMsg: string;
  _headers?: HttpHeaders;
}

export interface SubscriptionHook {
  _onStart?: () => void;
  _onError?: () => void;
  _onComplete?: () => void;
}
