import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";
import {CustomValidators} from "../../../base-class/custom-validators";
import {MatStepper} from "@angular/material/stepper";
import {Subscription} from "rxjs";
import {HelpService} from "../../../services/help.service";
import {MatButton} from "@angular/material/button";
import {SignupStepperService} from "../../../services/signup-stepper.service";
import {IRegister, ISetPassword, IVerificationCodePost} from "../../../interfaces/signup-stepper.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-signup-stepper',
  templateUrl: './signup-stepper.component.html',
  styleUrls: ['./signup-stepper.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SignupStepperComponent implements OnInit {

  @ViewChild('stepper',{static:true}) private myStepper: MatStepper;
  @ViewChild('button22',{static:false}) private codeButton: ElementRef;


  /*form creat*/
  mobileFormGroup: FormGroup;
  loginDetailsFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  personalInfoFormGroup: FormGroup;

  /*props*/
  isPassword:boolean=false;
  isFinished:boolean=false;
  isFullCode:boolean=false;
  codeNumber:number=0;
  codeNumberLength:number=0;
  activeStep:number=0;
  hide:boolean = true;
  timeFun:any;
  userName:string;
  token:string;

  TimerCount:number=120;
  minuteTimerCount:number=1;
  secondTimerCount:number=1;

  constructor(private _formBuilder: FormBuilder,
              private domSanitizer: DomSanitizer,
              public _helpService:HelpService,
              public _tb:TranslateBaseService,
              public _http:HttpClient,
              private _signUpService:SignupStepperService,
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
  }

  ngOnInit() {

    this.timer();

    /*mobile form*/
    this.mobileFormGroup = this._formBuilder.group({
      mobile: ['', [Validators.required,Validators.maxLength(10)]]
    });

    /*code form*/
    this.loginDetailsFormGroup = this._formBuilder.group({
      code: ['', Validators.required]
    });

    /*password form*/
    this.passwordFormGroup = this._formBuilder.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });

    this.passwordFormGroup.setValidators([
      CustomValidators.passwordMatchValidator(
        'password','confirm_password'
      )
    ]);

    /*person & work Info form*/
    this.personalInfoFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern(/\S+@\S+\.\S+/)]],
      gender: ['male', Validators.required],
      birthday: [''],
      companyName: [''],
      businessType: ['', Validators.required],
      businessTel: [''],
      businessWebsite: [''],
      taxNo: [''],
      address: [''],
    })
  }

  goStep(_index:number){
    this.myStepper.selectedIndex=_index;
  }

  onCodeChanged(_event){
    this.codeNumberLength=_event.length;
    this.codeNumber=_event;
  }

  timerActive(_index){
   if(_index.selectedIndex == 1){
     this.TimerCount=120;
     clearInterval(this.timeFun);
     this.timer();
   }
  }

  onCodeCompleted(_event){
    this.isFullCode=true;
    this.codeButton.nativeElement.focus();
  }

  timer(){
      this.timeFun= setInterval(()=>{
        this.TimerCount--;
        //this.minuteTimerCount = this.TimerCount%60;
        if(this.TimerCount == 0){

          clearInterval(this.timeFun);
        }
      }, 1000);
    }


    registerByPhoneNumber(){
    let _obj:IRegister;

    _obj = {
      username:this.mobileFormGroup.get('mobile').value,
      serviceType:'SS'
    };

      this._signUpService.signUp(_obj).then(res=>{

        if(res.response.status){
          this.userName=_obj.username;
          this.myStepper.next();
        }
      });
  }

    sendVerificationCode(){
    const _obj:IVerificationCodePost={
      username:this.userName,
      verificationCode:this.codeNumber
    };

    this._signUpService.getCode(_obj).then(res=>{
      if(res.response.status){
        this.token=res.response.data;
        this.isPassword=true;
      }
    });
  }

  ResendVerificationCode() {
    const _obj = {
      username: this.userName
    };
    this._signUpService.ResendVerificationCode(_obj).then(res => {
      if (res.response.status) {
        this.TimerCount = 120
      }
    });
  }

    setPassword(){
     const _obj:ISetPassword={
       username:this.userName,
       password:this.passwordFormGroup.get('password').value,
       token:this.token,
     };

     this._signUpService.setPassword(_obj).then(res=>{
       if(res.response.status){
         this.myStepper.next();
       }
     })
    }


  }

