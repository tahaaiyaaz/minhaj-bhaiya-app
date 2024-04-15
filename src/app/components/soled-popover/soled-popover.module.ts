import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoledPopoverPageRoutingModule } from './soled-popover-routing.module';

import { SoledPopoverPage } from './soled-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoledPopoverPageRoutingModule
  ],
  declarations: [SoledPopoverPage]
})
export class SoledPopoverPageModule {}
