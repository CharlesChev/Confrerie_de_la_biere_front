import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewBiere } from 'src/app/core/interfaces/newBiere.interface';
import { BiereService } from 'src/app/service/biere.service';

@Component({
  selector: 'app-biere-form',
  templateUrl: './biere-form.component.html',
  styleUrls: ['./biere-form.component.scss']
})
export class BiereFormComponent implements OnInit {

  biereForm: FormGroup;

  constructor(private fb: FormBuilder, private biereService: BiereService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  addSuceed: boolean;

  initForm() {
    this.biereForm = this.fb.group({
      nom: ['', Validators.required],
      pay: ['', Validators.required],
      photo: ['', Validators.required],
      type: ['', Validators.required],
      lat: [0, Validators.required],
      lng: [0, Validators.required],
      brasserie: ['', Validators.required],
      description: ['', Validators.required],
      gouteur: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.biereForm.valid) {

      const nouvelleBiere: NewBiere = {
        nom: this.biereForm.value.nom,
        pay: this.biereForm.value.pay,
        photo: this.biereForm.value.photo,
        type: this.biereForm.value.type,
        lat: this.biereForm.value.lat,
        lng: this.biereForm.value.lng,
        brasserie: this.biereForm.value.brasserie,
        description: this.biereForm.value.description,
        gouteur: this.biereForm.value.gouteur,
      };

      this.biereService.addBiere(nouvelleBiere).subscribe(
        (result) => {
          this.addSuceed = true;
        },
        (error) => {
          this.addSuceed = false;
        }
      );
      this.biereForm.reset();
    } else {
      Object.values(this.biereForm.controls).forEach(control => control.markAsTouched());
    }
  }


}
