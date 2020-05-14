import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';

  constructor() {}

}
