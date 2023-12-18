import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BiereService } from 'src/app/service/biere.service';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private biereService:BiereService){}

 nomBiere:string;
 type:string;
 pay:string;
 photo:string;
 brasserie:string;


  ngOnInit(){
    this.biereService.getOneRandomBiere().subscribe((data:Biere)=>{
      console.log(data);
      this.nomBiere = data.nom;
      this.type = data.type;
      this.pay = data.pay;
      this.photo = data.photo;
      this.brasserie = data.brasserie;
    }) 
   }
  

}
