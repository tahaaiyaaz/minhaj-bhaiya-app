import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./components/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'soled-popover',
    loadChildren: () => import('./components/soled-popover/soled-popover.module').then( m => m.SoledPopoverPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'detailspop',
    loadChildren: () => import('./components/detailspop/detailspop.module').then( m => m.DetailspopPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
