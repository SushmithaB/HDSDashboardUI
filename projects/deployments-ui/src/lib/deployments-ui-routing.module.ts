import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentsUiComponent } from './deployments-ui.component';

const routes: Routes = [
  { path: '', component: DeploymentsUiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeploymentsUIRoutingModule { }