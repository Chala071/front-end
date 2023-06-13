import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { generoCreacionDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})


export class EditarGeneroComponent implements OnInit{
  constructor(private router : Router, private generosServices: GenerosService, private activedRoute : ActivatedRoute){
  };

  modelo: generoDTO;
  errores: string[] = [];
  ngOnInit(): void {     
    this.activedRoute.params.subscribe(params =>{
      this.generosServices.obtenerPorId(params.id)
      .subscribe(genero => {
        this.modelo = genero;
      }, () => this.router.navigate(['/generos']));
    })   
  }

  guardarCambios(genero: generoCreacionDTO){
    this.generosServices.editar(this.modelo.id,genero).subscribe(() => {
      this.router.navigate(['/generos'])
    }, error => this.errores = parsearErroresAPI(error));    
   }
}