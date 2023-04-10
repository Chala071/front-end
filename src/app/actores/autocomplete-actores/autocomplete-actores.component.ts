import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit{
  control: FormControl;
  actores = [{nombre: 'Tom Holland',personaje:'', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'},
            {nombre: 'Tom Hanks', personaje:'',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Tom_Hanks_2016.jpg/800px-Tom_Hanks_2016.jpg'},
            {nombre: 'Samuel L. Jackson', personaje:'',foto:'https://es.web.img2.acsta.net/pictures/15/07/27/12/24/354255.jpg'}]


  actoresOriginal = this.actores;
  actoresSeleccionados = [];

  columnasAmostrar=['imagen','nombre','personaje','acciones'];

  @ViewChild(MatTable) table: MatTable<any>;
  constructor() {
    this.control = new FormControl();
  }
  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
        this.actores = this.actoresOriginal;
        this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value)
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }

  finalizaArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.findIndex(
      actor => actor === event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }
}
