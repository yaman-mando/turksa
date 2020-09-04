import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AppStorageService} from "../services/app-storage.service";
import {Observable} from "rxjs";


@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private _appStorageService: AppStorageService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    //send lang + currency in header + currency rate + authorization is send by jwt
    req = req.clone({
      setHeaders:{
        AcceptLanguage:`${this._appStorageService.getUserPreferences().lang}`,
        Authorization:`Bearer ${this._appStorageService.getSnapShot().token}`,
        ArrootTimeZone:`${this._appStorageService.getUserPreferences().timeZone}`,
      }
    });
    return next.handle(req);

  }


}
