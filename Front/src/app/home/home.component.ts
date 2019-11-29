import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerService } from '../_services/marker.service';
import { ShapeService } from '../_services/shape.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private map: any;
  private states: any;

  constructor(
    private router: Router,
    private markerService: MarkerService,
    private shapeService: ShapeService

  ) { }

  ngOnInit() {
    if (this.router.url == "/") {
      this.initMap();
      return
    }
    if (this.router.url == "/layers/aea250k") {
      this.initMap();
      this.shapeService.getStateShapes().subscribe(states => {
        this.states = states;
        this.initStatesLayer();
        return
      });
    }


    if (this.router.url == "/layers/ibgebiomas") {
      this.initMap();
      this.markerService.makeCapitalMarkers(this.map);
      return
    }
  }

  private initStatesLayer() {
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#3DB32B'
      })
    });
    this.map.addLayer(stateLayer);
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [-10.3333333, -53.2],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }
}