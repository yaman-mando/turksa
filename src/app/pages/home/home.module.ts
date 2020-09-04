import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {RouterModule, Routes} from "@angular/router";
import {AppModule} from "../../app.module";
import {ButtonsComponent} from "../../components/ui/buttons/buttons.component";
import {MatButtonModule} from "@angular/material/button";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations:[HomeComponent,ButtonsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ],
  providers:[]
})


export class HomeModule {

}
