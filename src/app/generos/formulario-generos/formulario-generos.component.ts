import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-generos',
  templateUrl: './formulario-generos.component.html',
  styleUrls: ['./formulario-generos.component.css'],
})
export class FormularioGenerosComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;

  @Input()
  modelo: generoCreacionDTO;

  @Output()
  submit: EventEmitter<generoCreacionDTO> =
    new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required, primeraLetraMayuscula()],
        },
      ],
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo.hasError('required')) {
      return 'El campo del nombre es requerido';
    }

    if (campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
}
