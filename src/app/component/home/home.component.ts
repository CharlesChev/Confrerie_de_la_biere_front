import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 nomBiere:string;
 type:string;
 pay:string;
 photo:string;
 brasserie:string;

  ngOnInit(){

  }

}
