import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() nomBiere:string;
  @Input() type:string;
  @Input() pay:string;
  @Input() photo:string;
  @Input() brasserie:string;
}


