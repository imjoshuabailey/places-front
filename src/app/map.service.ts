import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  latitude: number;
  longitude: number;
  
  constructor(private _geolocation: Geolocation) { }

  
  getPosition() {
    this._geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
      console.log("lat", this.latitude)
      console.log("lon", this.longitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this._geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }
}
