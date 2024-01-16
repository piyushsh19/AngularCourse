import { Component, OnInit } from '@angular/core';

import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';


@Component({
  selector: 'donut-list',
  template: `
  <div>
    <ng-container
      *ngIf="donuts.length; else nothing">

      <donut-card
          *ngFor="let donut of donuts; trackBy: trackById; index as i"
          [donut]="donut"
        >
        </donut-card>
      <!-- <div
      [style.color]="o ? 'red': 'green'"
      *ngFor = "let donut of donuts; 
      index as i ; odd as o ; even as e" >
        {{i + 1 }}
        {{o}}
        {{e}}
      </div> -->

      </ng-container>
      <!-- <ng-template ngFor [ngForOf] ="donuts" let-donut let-i= "index">
    <donut-card [donut] = "donut">
    </donut-card>
    {{i}}
    </ng-template> -->
    <ng-template #nothing>
      <p>No Donuts here...</p>
    </ng-template>
  </div>
`,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    // this.donuts = this.donutService.donuts; 
    this.donuts = this.donutService.read();

  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}