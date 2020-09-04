/*keys that will register in storage*/
import {AppStorageInterface} from "../app-factory.interface";

export const AppStorageKey = {
  isLoggedIn: "isLoggedIn",
  token: "token",
  //role: 'role',
  //isVendor: 'isVendor',
  //isCustomer: 'isCustomer',
 // userId: 'userId'
  // role: "role",
  // userId: "userId",
  // userName: "userName",
  // userImg: "userImg",
  // schoolId: "schoolId",
  // isEnabledFingerPrint:"isEnabledFingerPrint"
};

export const AppStorageInitialState: AppStorageInterface = {
  isLoggedIn: false,
  token: '',
  //role: null,
 //isCustomer: false,
  //isVendor: false,
  //userId: null
  // userId: null,
  // userImg:null,
  // userName:null,
  // role:null,
  // schoolId:null,
  // isEnabledFingerPrint:false,
};
