export interface Igeneral {
  data:any;
  status:boolean;
  errors:any
}

export interface IRegister {
  username:string;
  serviceType:string
}

export interface IVerificationCodePost {
  username:string;
  verificationCode:number
}

export interface ISetPassword {
  username:string;
  token:string;
  password:string
}

export interface IBusinessTypesObject {
  id:number;
  name:string
}

export interface IBusinessTypesList {
  businessTypes:IBusinessTypesObject[]
}

export interface IPersonalWorkInfo {
  workEmail:string;
  name:string;
  businessTypeId:number;
  phoneNumber:string;
  website:string;
  commercialRecord:string;
  address:string;
  firstName:string;
  lastName:string;
  gender:string;
  birthDate:string
}

