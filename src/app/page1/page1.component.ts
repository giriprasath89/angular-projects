import {Component, OnDestroy, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
 
 @Component({
     selector: 'app-page1',
     templateUrl: './page1.component.html',
     styleUrls: ['./page1.component.css'],
     changeDetection: ChangeDetectionStrategy.OnPush
 })
 export class Page1Component implements OnInit {

    @Input() labelText: string;

    @Input() user:any;

     submitted = false;

     registerForm: FormGroup;
     firstName: AbstractControl;
     lastName: AbstractControl;
 
     constructor( public formBuilder: FormBuilder) {
       console.log('page1 component')
     }
 
     ngOnInit() {
        this._formGroup();
     }

     ngOnChanges(){
        //  console.log('called', this.user.name);
     }

     ngDoCheck(){
        // console.log("DO CHECK", this.user.name)
      }
 
     public _formGroup() {
         this.registerForm = this.formBuilder.group({
            firstName: [''],
            lastName: ['']
         });
         this.firstName = this.registerForm.controls['firstName'];
         this.lastName = this.registerForm.controls['lastName'];
     }
 
     validateAllFormFields(formGroup: FormGroup) {
         Object.keys(formGroup.controls).forEach(field => {
             const control = formGroup.get(field);
             if (control instanceof FormControl) {
                 control.markAsTouched({onlySelf: true});
             } else if (control instanceof FormGroup) {
                 this.validateAllFormFields(control);
             }
         });
     }
 
     submit() {
         this.submitted = true;
         if (this.registerForm.valid) {
             const params: any = {};
             params.name = this.registerForm.value.firstName;
             params.email = this.registerForm.value.lastName;
         }
     }
 
 
 }
 