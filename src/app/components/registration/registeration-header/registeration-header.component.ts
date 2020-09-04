import { Component, OnInit } from '@angular/core';
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";

@Component({
  selector: 'registeration-header',
  templateUrl: './registeration-header.component.html',
  styleUrls: ['./registeration-header.component.scss']
})
export class RegisterationHeaderComponent implements OnInit {

  constructor(public _tb:TranslateBaseService) { }

  ngOnInit() {
  }

}
