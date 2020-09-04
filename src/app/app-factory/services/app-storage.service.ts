import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {AppStorageInitialState, AppStorageKey} from "../Defualt-states/app-storage.state";
import {AppUserPreferencesInitialState, AppUserPreferencesKey} from "../Defualt-states/app-user-data.state";
import {AppStorageInterface, AppUserPreferences} from "../app-factory.interface";
import {LOCAL_STORAGE, StorageService} from "ngx-webstorage-service";



@Injectable()
export class AppStorageService {

  //app storage
  private readonly appStorageStateBehavior: BehaviorSubject<AppStorageInterface>;
  public readonly appStorageState$: Observable<AppStorageInterface>;

  //app user preferences
  private readonly appUserPreferencesBehavior: BehaviorSubject<AppUserPreferences>;
  public readonly appUserPreferences$: Observable<AppUserPreferences>;

  constructor(
    //private _storage: LOCAL_STORAGE
    @Inject(LOCAL_STORAGE) private _storage: StorageService
  ) {

    this.appStorageStateBehavior = new BehaviorSubject<AppStorageInterface>(null);
    this.appStorageState$ = this.appStorageStateBehavior.asObservable();

    this.appUserPreferencesBehavior = new BehaviorSubject<AppUserPreferences>(null);
    this.appUserPreferences$ = this.appUserPreferencesBehavior.asObservable();

  }


  //storage methods************************************************************

  public async initStorage(_state: AppStorageInterface) {
    //await this._storage.ready();
    //fill storage
    for (const _key of Object.keys(_state)) {
      //if has value
      if (_state[_key]) {
        await this._storage.set(AppStorageKey[_key], _state[_key]);
      }
      //else set initial
      else {
        await this._storage.set(AppStorageKey[_key], AppStorageInitialState[_key]);
        _state[_key] = AppStorageInitialState[_key]
      }
    }


    //behavior storage auth
    this.appStorageStateBehavior.next(_state);


  }

  /*storage auth key*/
  public getSnapShot(): AppStorageInterface {
    return this.appStorageStateBehavior.getValue();
  }

  public async setStorageState(_state: Partial<AppStorageInterface>) {
    //await this._storage.ready();
    const obj = {...this.appStorageStateBehavior.getValue(), ..._state};
    //fill storage with new state only
    for (const _key of Object.keys(_state)) {
      await this._storage.set(AppStorageKey[_key], _state[_key]);
    }

    //behavior
    this.appStorageStateBehavior.next(obj);

  }

  public async resetStorage() {
    //no reset for user preferences
    //await this._storage.ready();
    for (const _key of Object.keys(AppStorageKey)) {
      await this._storage.set(AppStorageKey[_key], AppStorageInitialState[_key])
    }

    //behavior
    this.appStorageStateBehavior.next(AppStorageInitialState);
  }



  //User Methods*************************************************************

  public async initUserPreferences(_preferences: AppUserPreferences) {
    //user preferences
    for (const _key of Object.keys(_preferences)) {
      //if has value
      if (_preferences[_key]) {
        await this._storage.set(AppUserPreferencesKey[_key], _preferences[_key])
      }
      //no value > set initial
      else {
        await this._storage.set(AppUserPreferencesKey[_key], AppUserPreferencesInitialState[_key]);
        _preferences[_key] = AppUserPreferencesInitialState[_key];
      }
    }

    //behavior storage user preferences
    this.appUserPreferencesBehavior.next(_preferences);
  }

  /*storage preferences key*/
  public getUserPreferences(): AppUserPreferences {
    return this.appUserPreferencesBehavior.getValue();
  }

  /*here we set user choices even authenticated or not > hiding tips modals*/
  public async setUserPreferences(_preferences: Partial<AppUserPreferences>) {
    //await this._storage.ready();
    const obj = {...this.appUserPreferencesBehavior.getValue(), ..._preferences};
    //fill storage with new state only
    for (const _key of Object.keys(_preferences)) {
      await this._storage.set(AppUserPreferencesKey[_key], _preferences[_key]);
    }
    //update behavior
    this.appUserPreferencesBehavior.next(obj);
  }

  public async resetUserPreference() {
    //await this._storage.ready();
    for (const _key of Object.keys(AppUserPreferencesKey)) {
      await this._storage.set(AppUserPreferencesKey[_key], AppUserPreferencesInitialState[_key])
    }

    //behavior
    this.appUserPreferencesBehavior.next(AppUserPreferencesInitialState);
  }


}

export const LangListStatic = {
  'en':1,
  'ar':2
};
