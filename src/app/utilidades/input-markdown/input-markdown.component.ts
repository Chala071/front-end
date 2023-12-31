import { Component, EventEmitter, Input, Output, } from '@angular/core';


@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  @Input()
  contenidoMarkdown='';

  @Input()
  placeHolderTextarea: string = 'Texto';

  @Output()
  changeMarkDown: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  
}
