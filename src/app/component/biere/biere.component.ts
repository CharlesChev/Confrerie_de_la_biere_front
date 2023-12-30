import { Component, OnInit} from '@angular/core';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { BiereService } from 'src/app/service/biere.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.scss']
})
export class BiereComponent implements OnInit {

  constructor(private biereService: BiereService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  id: string | null;
  biere: Biere;

  ngOnInit(){
    if (this.id) {
      this.biereService.getOneBiere(this.id).subscribe((data) => this.biere = data);
    }
  }

}
