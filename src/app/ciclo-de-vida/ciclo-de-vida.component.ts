import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  
  @Input()
  titulo: string;
  
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }
  ngOnInit(): void {
    console.log('OnInit');
  }

}
