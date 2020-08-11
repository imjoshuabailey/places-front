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
  searchClick = false;
  userSearch: string = null
  

  constructor(public _mapService: MapService) {}

  ngOnInit() {
    this._mapService.getPosition()
  }

  markers: Marker[] = [
    
  ]

  searchButtonClick() {
    console.log("search clicked")
    if(this.searchClick === false) {
      return this.searchClick = true
    }else{
      return this.searchClick = false
    }

  }

  searchSubmit() {
    if(this.userSearch != null) {
      console.log(this.userSearch)
      this._mapService.textSearch(this.userSearch)
      this.userSearch = null
    }
  }


}

interface Marker {
  lat: number;
  long: number;
}


