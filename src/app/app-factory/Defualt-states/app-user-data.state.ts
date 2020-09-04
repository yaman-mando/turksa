import {LangState} from "../../app-translation/lang.state";
import {AppUserPreferences} from "../app-factory.interface";


export class TimeZone {

  static getTimeZone():number {
    const d = new Date();
    return d.getTimezoneOffset()
  }

}

//storage key name
export const AppUserPreferencesKey = {
  userName: 'userName',
  lang: 'lang',
  langId: 'langId',
  isLoggedIn: 'isLoggedIn',
  timeZone:'timeZone'
  //currency: 'currency',
  //rate: 'rate',
  //country:'country'
  // doNotShowFingerModal:'doNotShowFingerModal',
};

//initial state
export const AppUserPreferencesInitialState: AppUserPreferences = {
  userName: null,
  isLoggedIn:false,
  lang: LangState.defaultLang().name,
  langId: LangState.defaultLang().id,
  timeZone:TimeZone.getTimeZone()
  //currency: 1,
  //rate: 1,
  //country:1
  // doNotShowFingerModal:false,
};


