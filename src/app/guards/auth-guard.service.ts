import {Injectable} from "@angular/core";
import {CanLoad, Route, Router} from "@angular/router";
import {AppStorageService} from "../app-factory/services/app-storage.service";

@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(private _appStorageService: AppStorageService,
              private _route: Router) {

  }

  canLoad(route: Route): boolean {
    let url: boolean = route.data.isLogged;
    if (this._appStorageService.getUserPreferences().isLoggedIn === url) {
      return true;
    }
    this._route.navigate(['/home']);
    return false;

  }
}
