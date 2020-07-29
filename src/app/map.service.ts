import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { environmentB } from '../environments/environmentB'

@Injectable({
  providedIn: 'root'
})
export class MapService {

  api_key = environmentB.MAPS_KEY
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

  }
}

//api call to search for places neaby
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=***USER_INPUT***&inputtype=textquery&fields=geometry,formatted_address,name,opening_hours,rating&locationbias=circle:2000@***COORDS_HERE***&key=YOUR_API_KEY