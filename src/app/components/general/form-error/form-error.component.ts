import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {AbstractControl} from "@angular/forms";
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";

@Component({
    selector: 'app-form-error',
    templateUrl: './form-error.component.html',
    styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent implements OnInit, OnDestroy {

    private readonly destroySubject: Subject<boolean>;

    @Input('control')
    public control : AbstractControl;

    constructor(
        public _tb : TranslateBaseService
    ) {
        this.destroySubject = new Subject<boolean>();
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.destroySubject.next(true);
    }

}
