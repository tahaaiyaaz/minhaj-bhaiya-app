import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailspopPageRoutingModule } from './detailspop-routing.module';

import { DetailspopPage } from './detailspop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailspopPageRoutingModule
  ],
  declarations: [DetailspopPage]
})
export class DetailspopPageModule {}
