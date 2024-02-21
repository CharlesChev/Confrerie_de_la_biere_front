import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { BiereService } from 'src/app/service/biere.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.scss']
})
export class ModifComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private biereService: BiereService, private fileService: UploadService, private router: Router, private upload:UploadService) {}

  biere: Biere;
  modifBiereForm: FormGroup;
  modifSucceed:boolean;
  uploadSuceed:boolean;
  selectedFile: File;
  nomPhoto:string;

  ngOnInit(): void {
    this.loadBiere();
  }

  initForm() {
    this.modifBiereForm = this.fb.group({
      nom: [this.biere.nom, Validators.required],
      pay: [this.biere.pay, Validators.required],
      photo: [this.biere.photo],
      type: [this.biere.type, Validators.required],
      lat: [this.biere.lat, Validators.required],
      lng: [this.biere.lng, Validators.required],
      brasserie: [this.biere.brasserie, Validators.required],
      description: [this.biere.description, Validators.required],
      gouteur: [this.biere.gouteur, Validators.required],
    });
  }

  loadBiere(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.biereService.getOneBiere(id.toString()).subscribe(
        (biere: Biere) => {
          this.biere = biere;
          this.initForm();
        },
        error => {
          console.error('Erreur lors du chargement de la bière:', error);
        }
      );
    }
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0] as File;
    this.nomPhoto= event.target.files[0].name;
  }

  updateBiere(): void {

    if (this.modifBiereForm.valid) {

      if (!this.nomPhoto){
        this.nomPhoto = this.biere.photo;
      }else {
        let fileName = this.biere.photo.substring(7);
        this.fileService.deleteFile(fileName).subscribe();
      }

      const biereModif: Biere = {
        id: this.biere.id,
        nom: this.modifBiereForm.value.nom,
        pay: this.modifBiereForm.value.pay,
        photo: 'assets/' + this.nomPhoto,
        type: this.modifBiereForm.value.type,
        lat: this.modifBiereForm.value.lat,
        lng: this.modifBiereForm.value.lng,
        brasserie: this.modifBiereForm.value.brasserie,
        description: this.modifBiereForm.value.description,
        gouteur: this.modifBiereForm.value.gouteur,
      };

      this.biereService.putBiere(this.biere.id, biereModif).subscribe(
        () => {
          this.modifSucceed = true;
        },
        error => {
          this.modifSucceed = false;
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
      
    } else {
      Object.values(this.modifBiereForm.controls).forEach(control => control.markAsTouched());
    }
  }
}
