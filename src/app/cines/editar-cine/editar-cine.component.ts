import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit{

  constructor(private activedRoute : ActivatedRoute ){

  };

  modelo: cineDTO = {nombre : "Sambil", latitud: 4.651625604109929, longitud: -74.16973114013673}
  
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
