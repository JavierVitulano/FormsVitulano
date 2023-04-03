import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos.component';
import { FormErrorHelperModule } from '../shared/components/form-error-helper/form-error-helper.module';

@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorHelperModule
  ],
  exports : [
    AlumnosComponent
  ]
})
export class AlumnosModule { }
