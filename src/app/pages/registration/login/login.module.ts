import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {CanDeactivateGuardService} from "../../../services/can-deactivate-guard.service";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {LoginFormComponent} from "../../../components/registration/login-form/login-form.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../../../app-routing.module";


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canDeactivate: [CanDeactivateGuardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
  ],
    declarations: [LoginComponent, LoginFormComponent],
  providers:[MatIconRegistry]

})

export class LoginModule {

}
