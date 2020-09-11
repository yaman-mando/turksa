import {Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";
import {CustomValidators} from "../../../base-class/custom-validators";
import {MatStepper} from "@angular/material/stepper";
import {Observable, Subscription} from "rxjs";
import {HelpService} from "../../../services/help.service";
import {MatButton} from "@angular/material/button";
import {SignupStepperService} from "../../../services/signup-stepper.service";
import {
  IBusinessTypesList, IBusinessTypesObject, IPersonalWorkInfo,
  IRegister,
  ISetPassword,
  IVerificationCodePost
} from "../../../interfaces/signup-stepper.interface";
import {HttpClient} from "@angular/common/http";
import {BaseUxService} from "../../../services/base-ux.service";
import {AppStorageService} from "../../../app-factory/services/app-storage.service";
import {PageImplement} from "../../../app-implements/app-implements";
import {patternData} from "../../../data/general.data";
import {DateAdapter} from "@angular/material/core";
import {Behavior} from "popper.js";

@Component({
  selector: 'app-signup-stepper',
  templateUrl: './signup-stepper.component.html',
  styleUrls: ['./signup-stepper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupStepperComponent implements OnInit {

  @ViewChild('stepper', {static: true}) private myStepper: MatStepper;
  @ViewChild('button22', {static: false}) private codeButton: HTMLElement;


  /*form creat*/
  mobileFormGroup: FormGroup;
  verifyFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  personalInfoFormGroup: FormGroup;

  /*props*/
  isPassword: boolean = false;
  isFinished: boolean = false;
  isFullCode: boolean = false;
  codeNumber: number = 0;
  codeNumberLength: number = 0;
  activeStep: number = 3;
  hide: boolean = true;
  timeFun: any;
  userName: string;
  token: string;
  data = new Date();
  businessTypeList:Observable<IBusinessTypesList>;
  registeredEmail:string;

  TimerCount: number = 5;
  minuteTimerCount: number = 1;
  secondTimerCount: number = 1;

  _iconList:Observable<iconStyleList>;


  constructor(private _formBuilder: FormBuilder,
              private domSanitizer: DomSanitizer,
              public _helpService: HelpService,
              public _tb: TranslateBaseService,
              public _http: HttpClient,
              private _appStorageService: AppStorageService,
              private renderer: Renderer2,
              private _uxService: BaseUxService,
              private _signUpService: SignupStepperService,
              private dateAdapter: DateAdapter<Date>,
              private matIconRegistry: MatIconRegistry
  ) {

    this.matIconRegistry.addSvgIcon('feather-unlock',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/svg/feather-unlock.svg'));
    this.matIconRegistry.addSvgIcon('metro-mobile',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/svg/metro-mobile.svg'));
    this.matIconRegistry.addSvgIcon('person',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/svg/person.svg'));
    this.matIconRegistry.addSvgIcon('arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/svg/arrow-alt-circle.svg'));
    this.matIconRegistry.addSvgIcon('done-all',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/svg/icon-done-all.svg'));

  }

  ngOnInit() {

    this.getBusinessType();

    this.dateAdapter.setLocale('en-GB');

    this.timer();

    /*mobile form*/
    this.mobileFormGroup = this._formBuilder.group({
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });

    /*code form*/
    this.verifyFormGroup = this._formBuilder.group({
      code: ['', Validators.required]
    });

    /*password form*/
    this.passwordFormGroup = this._formBuilder.group({
      password: ['',
        [Validators.required,
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
        ]],
      confirm_password: ['', Validators.required]
    });

    this.passwordFormGroup.setValidators([
      CustomValidators.passwordMatchValidator(
        'password', 'confirm_password'
      )
    ]);

    /*person & work Info form*/
    this.personalInfoFormGroup = this._formBuilder.group({
      workEmail: ['', [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
      name: ['', Validators.required],
      businessTypeId: ['',Validators.required],
      phoneNumber: [''],
      website: ['',[Validators.pattern(patternData.url)]],
      commercialRecord: [''],
      address: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['Male', Validators.required],
      birthDate: [''],
    })
  }



  goStep(_index: number) {
    this.myStepper.selectedIndex = _index;
  }

  onCodeChanged(_event) {
    this.codeNumberLength = _event.length;
    this.codeNumber = _event;
  }

  timerActive(_index) {
    if (_index.selectedIndex == 1) {
      this.TimerCount = 5;
      clearInterval(this.timeFun);
      this.timer();
    }
  }

  addNewIcon(_iconList:iconStyleList){
    for (let i = 0; i <_iconList.iconList.length ; i++) {
        this.matIconRegistry.addSvgIcon(_iconList.iconList[i].iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icon/svg/${_iconList.iconList[i].fileName}.svg`));
    }
  }

  onCodeCompleted(_event) {
    this.isFullCode = true;
    setTimeout(() => {
      this.codeButton.focus();
    }, 100)

  }

  timer() {
    this.timeFun = setInterval(() => {
      this.TimerCount--;
      //this.minuteTimerCount = this.TimerCount%60;
      if (this.TimerCount == 0) {

        clearInterval(this.timeFun);
      }
    }, 1000);
  }


  registerByPhoneNumber() {
    let _obj: IRegister;

    _obj = {
      username: this.mobileFormGroup.get('mobile').value,
      serviceType: 'SS'
    };

    this._signUpService.signUp(_obj).then(res => {
      if (res.status === true) {
        this.userName = _obj.username;
        this.myStepper.next();
      } else {
        let _errorObj = res.errors;
        for (let errorObjKey in _errorObj) {
          this._uxService.showSnackBarError(`${errorObjKey}:${_errorObj[errorObjKey]}`);

        }

      }
    });
  }

  sendVerificationCode() {
    const _obj: IVerificationCodePost = {
      username: this.userName,
      verificationCode: this.codeNumber
    };

    this._signUpService.getCode(_obj).then(res => {
      if (res.status) {
        this.token = res.data;
        this.myStepper.next();
      } else {
        let _errorObj = res.errors;
        for (let errorObjKey in _errorObj) {
          this._uxService.showSnackBarError(`${errorObjKey}:${_errorObj[errorObjKey]}`);
        }
      }
    });
  }

  ResendVerificationCode() {
    const _obj = {
      username: this.userName
    };
    this._signUpService.ResendVerificationCode(_obj).then(res => {
      if (res.status) {
        this._uxService.showSnackBar(this._tb.translate.FORMS.MSG.SEND_SUCCESS);
        this.TimerCount = 5;
        this.timer();
      } else {
        let _errorObj = res.errors;
        for (let errorObjKey in _errorObj) {
          this._uxService.showSnackBarError(`${errorObjKey}:${_errorObj[errorObjKey]}`);
          this.TimerCount = 5;
          this.timer();
        }
      }
    });
  }

  setPassword() {
    const _obj: ISetPassword = {
      username: this.userName,
      password: this.passwordFormGroup.get('password').value,
      token: this.token,
    };

    this._signUpService.setPassword(_obj).then(async res => {
      if (res.status) {
        await this.getBusinessType();
        this.businessTypeList = this._signUpService.businessType$;
        this.myStepper.next();
        await this._appStorageService.setStorageState({
          isLoggedIn: true,
          token: res.data.accessToken,
          refreshToken: res.data.refrechToken
        });
        this._uxService.showSnackBar(this._tb.translate.FORMS.MSG.SEND_SUCCESS, false, 2500)
      } else {
        let _errorObj = res.errors;
        for (let errorObjKey in _errorObj) {
          this._uxService.showSnackBarError(`${errorObjKey}:${_errorObj[errorObjKey]}`);

        }
      }
    })
  }


  getBusinessType() {
    this._signUpService.getBusinessType(true);
  }

  submitPersonalInfo(){
    const _obj:IPersonalWorkInfo=this.personalInfoFormGroup.getRawValue();
    //_obj.birthDate = this._helpService.changeDateFormat(_obj.birthDate);
    _obj.birthDate = '01/01/2014';

    this._signUpService.submitPersonalInfo(_obj).then(res=>{
      if(res.status){
        this._uxService.showSnackBar(this._tb.translate.FORMS.MSG.SEND_SUCCESS,false,2500);
        this.registeredEmail=_obj.workEmail;
        this.isFinished=true;
      }
      else{
        let _errorObj = res.errors;
        for (let errorObjKey in _errorObj) {
          this._uxService.showSnackBarError(`${errorObjKey}:${_errorObj[errorObjKey]}`);
        }
      }
    });

  }

}

interface iconStyle {
  iconName:string;
  fileName:string
}

interface iconStyleList {
  iconList:iconStyle[]
}

