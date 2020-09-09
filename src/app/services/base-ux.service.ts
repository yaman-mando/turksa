import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class BaseUxService {


  constructor(private _matSnackBar: MatSnackBar,
              private _router: Router)
  {

  }

  showSnackBar(message: string, isWarn?: boolean, _duration: number = 100000,) {
    let stateColor = 'accent';
    if (isWarn) {
      stateColor = 'warn';
    }
    this._matSnackBar.open(message, 'close', {
      duration: _duration,
      panelClass: ['snackbar-wrapper', stateColor],
    });
  }


  public showSnackBarError(_errorMSG: string) {
    this._matSnackBar.open(_errorMSG,
      'close',
      {
        duration:4000,
        panelClass: ['error-snack']
      })
  }

}
