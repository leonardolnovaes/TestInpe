import { Component, OnInit } from '@angular/core';
import { GbClientService } from '../_services/gb-client.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 
  constructor(private _gbClienteService: GbClientService) {

   }

  opened = true

  public changeSideNav(){
    this.opened = !this.opened
  }

  public callRoutingLayerAea(){
    this._gbClienteService.getLayerAea();
  }
  public callRoutingLayerIBGEBiomas(){
    this._gbClienteService.getLayerBiomas();
  }
  ngOnInit() {
  }

}
