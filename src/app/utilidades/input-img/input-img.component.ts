import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBase64 } from '../Utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {

  @Input()
  urlImagenActual: string

  @Output()
  archivosSeleccionado: EventEmitter<File> = new EventEmitter<File>();


  imagBase64 : string; 

  change(event){
    if(event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value:string) => this.imagBase64 = value)
      .catch(error => console.log(error))
      this.archivosSeleccionado.emit(file);
      this.urlImagenActual = null;
    }
  }
}
