import { Component } from '@angular/core';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { BiereService } from 'src/app/service/biere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-biere',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private biereService: BiereService, private router: Router) {
    this.biereService.getAllBiere().subscribe((data) => {
      this.bieres = data;
    });
  }

  bieres: Biere[] = [];
  alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];
  deleteSucceed: boolean;
  errorMessage:string = '';

  deleteOnClick(id: number) {
    this.biereService.deleteBiere(id).subscribe(
      (resp) => {
        this.deleteSucceed = true;
        this.biereService.getAllBiere().subscribe((data) => {
          this.bieres = data;
        });
      },
      (error) => {
        this.deleteSucceed = false;
      }
    );
    window.scrollTo(0, 0);
  }


  toAddBiere() {
    this.router.navigate(['/add']);
  }

  toModifBiere(id: number) {
    this.router.navigate(['/modif/' + id.toString()]);
  }
}




