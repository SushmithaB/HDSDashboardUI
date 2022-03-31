import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'deployments', loadChildren: () => import('../../projects/deployments-ui/src/lib/deployments-ui.module').then(m => m.DeploymentsUiModule) }];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }