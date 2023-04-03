import { Component } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  alumnos: any[] = [];
  alumnosForms : FormGroup;

  nombreControl= new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ]);

  apellidoControl= new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ]);  

  emailControl= new FormControl('',[
    Validators.required,
    Validators.email
  ]);  
  numeroDocumentoControl= new FormControl('',[
    Validators.required,
    Validators.maxLength(8)
  ]);  
  fechaNacimientoControl= new FormControl('',[
    Validators.required,
    Validators.maxLength(10)
  ]);    

 // apellidoControl = new FormControl('');
  //emailControl = new FormControl('');
  //fechaNacimientoControl = new FormControl('');
  //numeroDocumentoControl = new  FormControl('');
  cursoControl = new  FormControl('');

    constructor(){
      this.alumnosForms = new FormGroup ({
        nombre : this.nombreControl,
        apellido : this.apellidoControl,
        email : this.emailControl,
        fechaNacimiento : this.fechaNacimientoControl,
        numeroDocumento : this.numeroDocumentoControl,
        curso : this.cursoControl,
    });
  }

  OnSubmit() : void {
    //console.log(this.alumnosForms.value);
    //alert("errror");
    console.log(this.alumnos);
     if (this.alumnosForms.valid){
        this.alumnos.push(this.alumnosForms.value)
        this.alumnosForms.reset();
     }
     else{
      this.alumnosForms.markAllAsTouched();
     }
  }
}