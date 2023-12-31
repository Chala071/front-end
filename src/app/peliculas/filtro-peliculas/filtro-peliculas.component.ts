import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private location: Location,
              private activatedRoute: ActivatedRoute){

  }

form: FormGroup

generos = [
  {id: 1, nombre: 'Drama'},
  {id: 2, nombre: 'Accion'},
  {id: 3, nombre: 'Comedia'}]

  peliculas = [
    {
      titulo: 'Spider Man Farm From Home',
      enCines: false,
      proximosEstrenos: true,
      generos: [1,2],
      poster: 'https://lontar.id/wp-content/uploads/2019/07/spider.jpg'
     },
     {
      titulo: 'Mohana',
      enCines: true,
      proximosEstrenos: false,
      generos: [3],
      poster: 'https://i.ytimg.com/vi/fiPvC52hqu0/movieposter_en.jpg'
     },
     {
      titulo: 'Inception',
      enCines: true,
      proximosEstrenos: true,
      generos: [1,3],
      poster: 'https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EKQC727E3JGH3PZQO2IEAGAQOM.jpg'
     },
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);


    this.form.valueChanges
      .subscribe(valores =>{
        this.peliculas = this.peliculasOriginal
         this.buscarPeliculas(valores);    
         this.escribirParametrosBusquedaEnURL();
      })
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

  buscarPeliculas(valores: any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1)
    }

    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)
    }

    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos)
    }

    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines)
    }
  }

  private escribirParametrosBusquedaEnURL(){
    var querysStrings =[];
    var valoresFormulario = this.form.value;
    if(valoresFormulario.titulo){
      querysStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if(valoresFormulario.generoId != 0){
      querysStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if(valoresFormulario.proximosEstrenos){
      querysStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if(valoresFormulario.enCines){
      querysStrings.push(`enCines=${valoresFormulario.enCines}`);
    }
    
    this.location.replaceState('peliculas/buscar',querysStrings.join('&'));
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) =>{
      var objeto: any ={};
      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if(params.generoId){
        objeto.generoId = Number(params.generoId)
      }

      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos
      }

      if(params.enCines){
        objeto.enCines = params.enCines
      }

      this.form.patchValue(objeto);



    });
  }


}
