import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(()=>{
      this.peliculasEnCines= [
        {
        titulo: 'Spider Man',
        fechaLanzamiento: new Date(),
        precio: 1400
        },
        {
          titulo: 'Mohana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99
        }
      ];

      this.peliculasProximosEstrenos=[
        {
        titulo: 'Avenger End Game',
        fechaLanzamiento: new Date,    
        precio: 1400
        },
        {
          titulo: 'Inception',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99
        },
        {
          titulo: 'Rocky',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99
        }

    ]

    },1000)
  }
  title = 'Al valor que yo queira';
  duplicarNumero(valor:number): number{
    return valor * 2;
  }

  peliculasEnCines;
  peliculasProximosEstrenos;

  manejarRated(voto: number):void{
    alert(voto);
  }
}
