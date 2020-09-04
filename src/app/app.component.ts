import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {HelpService} from "./services/help.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    "(window:resize)": "this._helpService.ScreenDimensions()",
    "(window:load)": "this._helpService.ScreenDimensions()",
  }
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(public _helpService: HelpService) {
  }
}
