import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit{
  constructor(private activedRoute : ActivatedRoute ){

  };

  modelo: actorDTO = {
    nombre : 'Johan',    
    fechaNacimiento : new Date(),
    foto:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F10%2Fsebastianrulli004.jpg&w=400&h=532&c=sc&poi=face&q=60'
  }
  
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }

  guardarCambios(actor : actorCreacionDTO){
    console.log(actor)
  }

}
