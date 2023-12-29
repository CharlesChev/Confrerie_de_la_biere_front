import { Component } from '@angular/core';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { BiereService } from 'src/app/service/biere.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.scss']
})
export class BiereComponent {

  constructor(private biereService: BiereService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id){
      biereService.getOneBiere(this.id).subscribe((data)=>this.biere = data);
    }
  }
  id: string | null;
  biere: Biere;
}
