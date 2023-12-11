import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() nomBiere:string = "hello";
  @Input() type:string = "hello";
  @Input() pay:string = "hello";
  @Input() photo:string = "hello";
  @Input() brasserie:string = "hello";
}
