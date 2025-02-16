import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewBiere } from 'src/app/core/interfaces/newBiere.interface';
import { BiereService } from 'src/app/service/biere.service';
import { UploadService } from 'src/app/service/upload.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-biere-form',
  templateUrl: './biere-form.component.html',
  styleUrls: ['./biere-form.component.scss']
})
export class BiereFormComponent implements OnInit {

  biereForm: FormGroup;

  constructor(private fb: FormBuilder, private biereService: BiereService, private router: Router, private upload:UploadService) { }

  ngOnInit(): void {
    this.initForm();
  }

  selectedFile: File;
  addSuceed: boolean;
  uploadSuceed:boolean;
  nomPhoto:string;

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

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0] as File;
    this.nomPhoto= event.target.files[0].name;
  } 

  onSubmit() {
    if (this.biereForm.valid) {

      const nouvelleBiere: NewBiere = {
        nom: this.biereForm.value.nom,
        pay: this.biereForm.value.pay,
        photo: environment.pathToImagesFolder + this.nomPhoto,
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

      this.upload.upload(this.selectedFile).subscribe(
        (result) => {
          this.uploadSuceed = true;
        },
        (error) => {
          this.uploadSuceed = false;
        }
      );
      this.biereForm.reset();
    } else {
      Object.values(this.biereForm.controls).forEach(control => control.markAsTouched());
    }
  }


}
