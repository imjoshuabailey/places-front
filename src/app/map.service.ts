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

  }
}


// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=geometry,formatted_address,name,opening_hours,rating&locationbias=point:***COORDS_HERE***&key=YOUR_API_KEY