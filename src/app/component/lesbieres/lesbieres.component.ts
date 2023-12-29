import { Component,OnInit } from '@angular/core';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { BiereService } from 'src/app/service/biere.service';

@Component({
  selector: 'app-lesbieres',
  templateUrl: './lesbieres.component.html',
  styleUrls: ['./lesbieres.component.scss']
})
export class LesbieresComponent  {

  constructor(private biereService:BiereService){
     this.biereService.getAllBiere().subscribe((data)=> {
      this.bieres = data; });
    }
    
  bieres:Biere[] = [];
  alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];
}

