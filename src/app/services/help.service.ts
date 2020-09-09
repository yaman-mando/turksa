import {Injectable} from "@angular/core";
import {AppStorageService, LangListStatic} from "../app-factory/services/app-storage.service";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {TranslateBaseService} from "../app-translation/services/translation-base.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";


@Injectable()
export class HelpService {

  /*for loading case in app */
  private readonly loadingBeh:BehaviorSubject<boolean>;
  public readonly loading$:Observable<boolean>;

  /*for getting current router in app */
  private readonly currentRouterBeh:BehaviorSubject<string>;
  public readonly currentRouter$:Observable<string>;

  /*for getting screen dimensions*/
  screenWidth:number;
  screenHeight:number;

  constructor(private _appStorageService:AppStorageService,
              private _route:Router,
              private toastr: ToastrService,
              private _tb:TranslateBaseService) {

    this.loadingBeh = new BehaviorSubject<boolean>(false);
    this.loading$ = this.loadingBeh.asObservable();

    this.currentRouterBeh = new BehaviorSubject<string>(null);
    this.currentRouter$ = this.currentRouterBeh.asObservable();

  }



  /*change lang method*/
  async changeLang(){
    const currentLang = this._appStorageService.getUserPreferences().langId;
    if(currentLang == 1){
      await this._appStorageService.setUserPreferences({
        lang:'ar',
        langId:LangListStatic['ar']
      });
    }
    else{
      await this._appStorageService.setUserPreferences({
        lang:'en',
        langId:LangListStatic['en']
      });
    }
    window.location.reload();
  }





  /*loading change case*/
  public loading(_case:boolean){
    if(_case){
      this.loadingBeh.next(true);
    }
    else {
      this.loadingBeh.next(false);
    }
  }

  /*show email password wrong toast*/
  public async showEmailPasswordWrongToast(_duration: number = 1600) {
    this.showToast('', _duration)
  }

  /* success login toast */
  public async showSuccessLogin(_duration: number = 1600){
    this.showToastSuccess('', _duration)
  }

  /*general toast*/
  public async showToast(_msg: string, _duration: number = 1600) {
    await this.toastr.warning(_msg,'',{
      closeButton: true,
      progressBar: false,
      positionClass: "toast-bottom-center",
      timeOut: _duration,
    });
  }

  /*Success toast*/
  public async showToastSuccess(_msg: string, _duration: number = 1600) {
    await this.toastr.success(_msg,'',{
      closeButton: true,
      progressBar: false,
      positionClass: "toast-bottom-center",
      timeOut: _duration,
    });
  }

  /*Screen Dimensions*/
  public ScreenDimensions(){
    this.screenWidth= window.innerWidth;
    this.screenHeight=window.innerHeight;
  }

  /*get today as date*/
  getToday(){
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return   yyyy + '-' + mm + '-' + dd;
  }


  /*for show all field errors forms */
  showValidationMsg(formGroup: FormGroup) {

    for (const key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        const control: FormControl = <FormControl>formGroup.controls[key];

        if (Object.keys(control).includes('controls')) {
          const formGroupChild: FormGroup = <FormGroup>formGroup.controls[key];
          this.showValidationMsg(formGroupChild);
        }

        control.markAsTouched();
      }
    }
  }

}

