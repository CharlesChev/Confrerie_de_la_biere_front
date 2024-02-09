import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { BiereService } from 'src/app/service/biere.service';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.scss']
})
export class ModifComponent implements OnInit {

  constructor(private route: ActivatedRoute, private biereService: BiereService, private router: Router) { }

  biere: Biere;

  ngOnInit(): void {
    this.loadBiere();
  }

  loadBiere(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.biereService.getOneBiere(id.toString()).subscribe(
        (biere: Biere) => {
          this.biere = biere;
        },
        error => {
          console.error('Erreur lors du chargement de la bière:', error);
        }
      );
    }
  }

  updateBiere(): void {
    const id = this.biere.id;
    this.biereService.putBiere(id).subscribe(
      () => {
        console.log('La bière a été mise à jour avec succès.');
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Erreur lors de la mise à jour de la bière:', error);
      }
    );
  }

}
