import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CanDeactivateGuardService} from "./services/can-deactivate-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',
    loadChildren:() => import('./pages/home/home.module').then(m=>m.HomeModule),
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
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [CanDeactivateGuardService],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
