import {EN_GLOBE} from "../../assets/i18n/en-globe";
import {AR_GLOBE} from "../../assets/i18n/ar-globe";


interface AppLangInterface {
  en: LangStateInterface,
  ar: LangStateInterface,
}

export interface LangStateInterface {
  id:number;
  name: string;
  uiName: string;
  translateObject: typeof EN_GLOBE;
  dir: 'ltr' | 'rtl',
  isRtl: boolean;
}


export class LangState {


 static langState():AppLangInterface{
    return {
      en: {
        id: 1,
        name: 'en',
        uiName: 'EN',
        dir: "ltr",
        isRtl: false,
        translateObject: EN_GLOBE,
      },
      ar: {
        id: 2,
        name: 'ar',
        uiName: 'AR',
        dir: "rtl",
        isRtl: true,
        translateObject: AR_GLOBE,
      }
    }
  }

  static defaultLang():LangStateInterface{
    return this.langState().en
  }



}
