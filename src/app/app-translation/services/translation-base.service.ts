import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {EN_GLOBE, EN_GLOBE_DATA} from "../../../assets/i18n/en-globe";

@Injectable()
export class TranslateBaseService {

  //translate object
  private readonly translateBeh: BehaviorSubject<typeof EN_GLOBE_DATA>;
  public readonly translate$: Observable<typeof EN_GLOBE_DATA>;
  public translate: typeof EN_GLOBE_DATA;


  constructor() {

    //
    this.translateBeh = new BehaviorSubject<typeof EN_GLOBE_DATA>(null);
    this.translate$ = this.translateBeh.asObservable();


  }

  public setTranslationObject(_obj: typeof EN_GLOBE) {
    this.translateBeh.next(_obj.data);
    this.translate = _obj.data;
  }


}
