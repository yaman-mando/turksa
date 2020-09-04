import {AbstractControl, ValidatorFn} from "@angular/forms";

export class CustomValidators {
    constructor() {

    }

    static passwordMatchValidator(passwordControlName: string, confirmControlName: string): ValidatorFn {
        return (control: AbstractControl): { noPasswordMatch: boolean } | null => {
            const password: string = control.get(passwordControlName).value;
            const confirmPassword: string = control.get(confirmControlName).value;
            // compare is the password math
            if (password !== confirmPassword && control.get(passwordControlName).touched) {
                // if they don't match, set an error in our confirmPassword form control
                return {noPasswordMatch: true}
            }

            return null;
        }
    }

}