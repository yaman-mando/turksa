import {AppStorageService} from "../app-factory/services/app-storage.service";


export function jwtOptionsFactory(_appStorageService: AppStorageService) {
    return {
        tokenGetter: async () => {
            return _appStorageService.getSnapShot().token;
        }
    }
}
