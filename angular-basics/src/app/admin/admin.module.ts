import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutCardComponent } from './components/donut-card/donut-card.component';



@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DonutListComponent] /// this export is requires if we want to use a differently created componets 
  
})
export class AdminModule { }
