import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoledPopoverPage } from './soled-popover.page';

const routes: Routes = [
  {
    path: '',
    component: SoledPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoledPopoverPageRoutingModule {}
