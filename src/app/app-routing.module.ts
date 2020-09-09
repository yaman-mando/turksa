import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CanDeactivateGuardService} from "./services/can-deactivate-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren:() => import('./pages/registration/login/login.module').then(m=>m.LoginModule)
  },

  {
    path: 'stepper',
    loadChildren:() => import('./pages/registration/signup-stepper/signup-stepper.module').then(m=>m.LoginModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [CanDeactivateGuardService],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
