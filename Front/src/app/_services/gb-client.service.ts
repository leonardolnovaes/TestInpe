import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GbClientService {

  constructor(private httpClient: HttpClient) {
    
   }

  getLayerAea() {
    this.httpClient.get('http://127.0.0.1:5000/layers/aea250k/').subscribe(response => {debugger; response});
  }
  getLayerBiomas() {
    this.httpClient.get('http://127.0.0.1:5000/layers/ibgebiomas/').subscribe(response => {});
  }
}
