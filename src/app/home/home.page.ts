import { Component, OnInit } from '@angular/core';
import { KeyService } from '../key.service';
import { MapService } from '../map.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  zoom = 14;
  mapType = 'satellite';

  constructor(public _keyService: KeyService, private _mapService: MapService) {}

  ngOnInit() {
    this._mapService.getPosition()
  }

}
