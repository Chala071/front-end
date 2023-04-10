import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit{
  constructor(private activedRoute : ActivatedRoute ){

  };

  modelo: PeliculaDTO = {
    titulo: 'Spider-Man', trailer:'abcgd', enCines: true, resumen:'cosa',
    fechaLanzamiento: new Date(), 
    poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wpzkVRTSpcGtBRkvIm6DmnoWlOoA9ssDp6Vf7w5646XQ1SRvwQ5heptTXGElqWg6MfM&usqp=CAU'
  }
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula)
  }
}
