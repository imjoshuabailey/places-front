import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HomePage } from './home.page';
import { environmentB } from '../../environments/environmentB';
import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environmentB.MAPS_KEY
    
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
