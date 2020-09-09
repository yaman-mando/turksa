import {RouterModule, Routes} from "@angular/router";
import {CanDeactivateGuardService} from "../../../services/can-deactivate-guard.service";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignupStepperComponent} from "./signup-stepper.component";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {RegisterationHeaderComponent} from "../../../components/registration/registeration-header/registeration-header.component";
import {CodeInputModule} from "angular-code-input";
import {FormErrorModule} from "../../../components/general/form-error/form-error.module";
import {BaseUxService} from "../../../services/base-ux.service";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";

const routes: Routes = [
  {
    path: '',
    component: SignupStepperComponent,
    canDeactivate: [CanDeactivateGuardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CodeInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FormErrorModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  declarations: [SignupStepperComponent,RegisterationHeaderComponent],
  providers:[MatIconRegistry,BaseUxService]

})

export class LoginModule {

}
