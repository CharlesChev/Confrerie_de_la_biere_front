import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Biere } from 'src/app/core/interfaces/biere.interface';
import { BiereService } from 'src/app/service/biere.service';

@Component({
  selector: 'app-lacarte',
  templateUrl: './lacarte.component.html',
  styleUrls: ['./lacarte.component.scss']
})
export class LacarteComponent implements OnInit {

  constructor(private biereService: BiereService) {
  }

  public bieres: Biere[] = [];
  public map!: L.Map;
  public icon = new L.Icon({ iconUrl: "assets/biere-icon.png", iconSize:[30,35]})

  public osmClassic = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright',
      maxZoom: 20,
    }
  );

  public markerSetter() {
    console.log(this.bieres);
    for (let i = 0; i < this.bieres.length; i++) {
      let marker = new L.Marker([this.bieres[i].lat, this.bieres[i].lng], { icon: this.icon });
      marker.addTo(this.map);
    }
  }

  ngOnInit(): void {
    this.biereService.getAllBiere().subscribe((data) => {
      this.bieres = data;
      this.map = L.map('map', { layers: [this.osmClassic] })
      .setView([30, -30], 3)
    this.osmClassic.addTo(this.map);
      this.markerSetter();
    });
    
  }


}
