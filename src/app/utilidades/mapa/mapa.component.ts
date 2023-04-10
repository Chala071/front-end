import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]));
  }

  @Input()
  coordenadasIniciales: Coordenada[] = [];


  @Output()
  coordenadasSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 10,
    center: latLng(4.654106491169273, -74.10827636718751),
  };

  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    this.capas=[]
    this.capas.push(marker([latitud,longitud],{
      icon: icon({
        iconSize:[25,41],
        iconAnchor: [13, 41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }))
    console.log({latitud,longitud});
    this.coordenadasSeleccionada.emit({latitud: latitud, longitud: longitud})
  }

  capas: Marker<any>[] =  [];
}
