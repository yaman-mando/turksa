export interface AppStorageInterface {
  isLoggedIn: boolean;
  token: string;
  refreshToken:string
  //role: "Vendor" | "CustomerUser";
  //isVendor: boolean;
  //isCustomer: boolean;
  //userId:number;
  // userId: string;
  // userName: string;
  // userImg: string;
  // schoolId: number;
  // isEnabledFingerPrint:boolean;
}


export interface AppUserPreferences {
  userName:string;
  lang:string,
  isLoggedIn:boolean;
  timeZone:number
  langId:number;
  //currency:number;
  //rate:number;
  //country:number;
  // doNotShowFingerModal:boolean;
}
