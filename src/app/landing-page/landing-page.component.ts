import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(()=>{
      this.peliculasEnCines= [
        {
        titulo: 'Spider Man',
        fechaLanzamiento: new Date(),
        precio: 1400,
        poster: "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
        },
        {
          titulo: 'Mohana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster: "https://i.pinimg.com/736x/2b/c5/fd/2bc5fd51689c3c97296ffc70eac1967d.jpg"
        }
      ];

      this.peliculasProximosEstrenos=[
        {
        titulo: 'Avenger End Game',
        fechaLanzamiento: new Date,    
        precio: 1400,
        poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-vengadores-endgame-1552567490.jpg?crop=1xw:1xh;center,top&resize=480:*"
        },
        {
          titulo: 'Inception',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster: "https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EKQC727E3JGH3PZQO2IEAGAQOM.jpg"
        },
        {
          titulo: 'Rocky',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster: "https://upload.wikimedia.org/wikipedia/commons/4/42/Sylvester_Stallone.jpg"
        }

    ]

    },1000)
  }
  

  peliculasEnCines;
  peliculasProximosEstrenos;

 

}
