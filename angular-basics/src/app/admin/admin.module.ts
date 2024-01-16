import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//containers
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

//componets
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
//Services
import { DonutService } from './services/donut.service';




@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    DonutSingleComponent,
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DonutService],
  exports:[DonutListComponent,DonutSingleComponent] /// this export is requires if we want to use a differently created componets 
  
})
export class AdminModule { }
