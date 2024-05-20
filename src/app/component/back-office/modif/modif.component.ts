import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { BiereService } from 'src/app/service/biere.service';
import { UploadService } from 'src/app/service/upload.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.scss']
})
export class ModifComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private biereService: BiereService, private fileService: UploadService, private router: Router, private upload:UploadService) {
    this.initForm();
  }

  biere: Biere;
  modifBiereForm: FormGroup;
  modifSucceed:boolean;
  uploadSuceed:boolean;
  selectedFile: File;
  nomPhoto:string;
  photoPath:string;

  ngOnInit(): void {
    this.loadBiere();
  }

  initForm() {
    this.modifBiereForm = this.fb.group({
      nom: ['', Validators.required],
      pay: ['', Validators.required],
      type: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      brasserie: ['', Validators.required],
      description: ['', Validators.required],
      gouteur: ['', Validators.required],
    });
  }

  loadBiere(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.biereService.getOneBiere(id.toString()).subscribe(
        (biere: Biere) => {
          this.biere = biere;
          this.modifBiereForm.setValue({
            nom: this.biere.nom,
            pay:this.biere.pay,
            type: this.biere.type,
            lat: this.biere.lat,
            lng: this.biere.lng,
            brasserie: this.biere.brasserie,
            description: this.biere.description,
            gouteur: this.biere.gouteur
          })
        },
        error => {
          console.error('Erreur lors du chargement de la bière:', error);
        }
      );
    }
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0] as File;
    this.nomPhoto = event.target.files[0].name;
  }

  updateBiere(): void {

    if (this.modifBiereForm.valid) {
      if (!this.nomPhoto){
        this.photoPath = this.biere.photo;
      }else {
        let fileName = this.biere.photo.substring(7);
        if (this.selectedFile){
          this.fileService.deleteFile(fileName).subscribe();
        }
        this.photoPath=environment.pathToImagesFolder + this.nomPhoto;
      }

      const biereModif: Biere = {
        id: this.biere.id,
        nom: this.modifBiereForm.value.nom,
        pay: this.modifBiereForm.value.pay,
        photo: this.photoPath,
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

      if (this.selectedFile){
        this.upload.upload(this.selectedFile).subscribe(
          (result) => {
            this.uploadSuceed = true;
          },
          (error) => {
            this.uploadSuceed = false;
          }
        );
      }
      
      
    } else {
      Object.values(this.modifBiereForm.controls).forEach(control => control.markAsTouched());
    }
  }
}
