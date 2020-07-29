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
    {
      lat: 32.745658,
      long: -117.129482,
      
    },
    {
      lat: 32.832858,
      long: -117.271382,
      
    }
  ]



}

interface Marker {
  lat: number;
  long: number;
}


