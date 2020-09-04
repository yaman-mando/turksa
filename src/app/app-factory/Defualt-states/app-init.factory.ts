import {AppInitService} from "../services/app-init.service";


export function AppInitFactory(
  _appInitService: AppInitService,
) {
  return async () => {
    /**
     * init translate
     */
     await _appInitService.initTranslate();

    /**
     * check token + init storage
     */
    await _appInitService.checkTokenLoadStorage();

    /**
     * init app user preferences
     */
    await _appInitService.initUserPreferences();

    /*
    * init user detail
    */
   // await _appInitService.initUserDetail();

    /**
     * init app lang and set direction
     */
    await _appInitService.initAppLangAndDirection();
  }
}
