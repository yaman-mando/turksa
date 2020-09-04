import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {EN_GLOBE} from "../../../assets/i18n/en-globe";
import {AR_GLOBE} from "../../../assets/i18n/ar-globe";
import {TranslateService} from "@ngx-translate/core";


@Injectable()
export class TranslationLoaderService {

  //globe
  private translateGlobeBehavior: BehaviorSubject<any>;
  translateGlobe$: Observable<any>;

  //admin
  private translateAdminBehavior: BehaviorSubject<any>;
  translateAdmin$: Observable<any>;

  //web site
  private translateWebsiteBehavior: BehaviorSubject<any>;
  translateWebsite$: Observable<any>;

  constructor(
    private _translateService: TranslateService
  ) {

    //globe
    this.translateGlobeBehavior = new BehaviorSubject<any>(null);
    this.translateGlobe$ = this.translateGlobeBehavior.asObservable();

    //admin
    this.translateAdminBehavior = new BehaviorSubject<any>(null);
    this.translateAdmin$ = this.translateAdminBehavior.asObservable();

    //website
    this.translateWebsiteBehavior = new BehaviorSubject<any>(null);
    this.translateWebsite$ = this.translateWebsiteBehavior.asObservable();

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Load translations
   *
   * @param {Locale} args
   */
  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this._translateService.setTranslation(locale.lang, locale.data, true);
    });
  }

  /**
   * set globe translate object
   */
  setGlobeTranslateObject(_obj: typeof EN_GLOBE | typeof AR_GLOBE) {
    this.translateGlobeBehavior.next(_obj);
  }

  /**
   * set admin translate object
   * @param _obj
   */
  /*setAdminTranslateObject(_obj: typeof EN_Admin | typeof AR_ADMIN) {
    this.translateAdminBehavior.next(_obj);
  }*/

  /**
   * set website translate object
   */
  /*setWebsiteTranslateObject(_obj: typeof EN_WEBSITE | typeof AR_WEBSITE) {
    this.translateWebsiteBehavior.next(_obj);
  }*/



}//end


export interface Locale {
  lang: string;
  data: Object;
}
