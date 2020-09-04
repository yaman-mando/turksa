import { Component, OnInit } from '@angular/core';
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {HelpService} from "../../../services/help.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [

    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),

  ],
})
export class LoginComponent implements OnInit {

  isSignin:boolean=false;

  constructor(public _tb:TranslateBaseService,
              public _help:HelpService,
              private domSanitizer: DomSanitizer,
              private matIconRegistry: MatIconRegistry) {

    this.matIconRegistry.addSvgIcon('company-plus',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/svg/company-plus.svg'));
    this.matIconRegistry.addSvgIcon('user-plus',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/svg/user-plus.svg'));
  }

  ngOnInit() {
  }

  toggle() {
    this.isSignin = !this.isSignin;
  }

}
