export interface Igeneral {
  data:any;
  status:boolean;
  errors:{}
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
