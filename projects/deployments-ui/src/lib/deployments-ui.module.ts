import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeploymentsUIRoutingModule } from './deployments-ui-routing.module';
import { DeploymentsUiComponent } from './deployments-ui.component';
import { CoreUIModule } from '@epsilon/core-ui';


@NgModule({
  declarations: [
    DeploymentsUiComponent
  ],
  imports: [
    CommonModule,
    CoreUIModule,
    DeploymentsUIRoutingModule
    
  ],
  exports: [
    DeploymentsUiComponent
  ]
})
export class DeploymentsUiModule { }
