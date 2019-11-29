import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './pop-up.service';
import { GeometryModel } from '../interfaces/GeometryModel.interface';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = 'http://127.0.0.1:5000/layers/ibgebiomas/';

  constructor(private http: HttpClient, private popupService: PopUpService) {

  }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: GeometryModel) => {
      res.features[0].geometry.coordinates[0].map(ListCoor => {
        ListCoor.map(coor => {
          let lat = Number(coor[0]);
          let lng = Number(coor[1]);
          let langExpression: L.LatLngExpression = { lat: lat, lng: lng };
          const marker = L.marker(langExpression);
          marker.bindPopup(this.popupService.makeCapitalPopup(coor));
          marker.addTo(map);
        })

      });
    }

    );
  }

}
