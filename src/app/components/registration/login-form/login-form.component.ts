import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  hide = true;

  constructor(
    public _tb:TranslateBaseService,
    private _fb: FormBuilder,
  ) {
    //login Form
    this.loginForm = this._fb.group({
      UserName: [null, Validators.required],
      Password: [null, Validators.required]
    });

  }

  ngOnInit() {

  }

  async OnSubmit() {
    const formValues: {
      UserName: string;
      Password: string
    }
      = this.loginForm.getRawValue();

  }

}
