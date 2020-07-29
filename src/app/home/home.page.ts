import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 
  zoom = 14;
  mapType = 'roadmap';
  

  constructor(public _mapService: MapService) {}

  ngOnInit() {
    this._mapService.getPosition()
  }

  markers: Marker[] = [
    
  ]



}

interface Marker {
  lat: number;
  long: number;
}


