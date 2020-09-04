import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export interface CanComponentDeactivate  {
    canDeactivate:()=> Observable<boolean> | Promise<boolean> | boolean
}

@Injectable()
export class CanDeactivateGuardService  implements CanDeactivate<CanComponentDeactivate>{
    constructor(){

    }

    canDeactivate(component:CanComponentDeactivate, currentRoute:ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState?:RouterStateSnapshot){
        return component.canDeactivate ? component.canDeactivate() : true
    }

}