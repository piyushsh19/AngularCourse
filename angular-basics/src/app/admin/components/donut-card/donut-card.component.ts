import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  //encapsulation : ViewEncapsulation.ShadowDom,  // to use shadow DOM, IT HAS A VALUE WHICH ENUM USE, SHADOW DOM USES NATIVE API
  template: `
  <div
    class="donut-card"
    [ngClass]= "{
    'donut-card-promo' : donut.promo  , 
    'donut-card-new' : true
}"
  >
    <img
      src="/assets/img/{{ donut.icon }}.svg"
      [alt]="donut.name"
      class="donut-card-icon"
    />
    <div>
      <!-- /    [style.border]="donut.promo ? '2px solid #eee' : 'none'"
  here we are binding the border in style and this accepst a string
    -->
      <p class="donut-card-name">
        {{ donut.name }}
        <ng-container [ngSwitch]="donut.promo" >
        <!-- <span *ngSwitchCase="'new'" class="donut-card-label"> new</span>
        <span *ngSwitchCase="'limited'" class="donut-card-label"> limited</span>
        <span *ngSwitchDefault class="donut-card-label"> Nothing special</span> -->
        <span class="donut-card-label">
        <ng-template [ngSwitchCase]="'new'">New</ng-template>
        <ng-template [ngSwitchCase]="'limited'">Limited</ng-template>
        <ng-template ngSwitchDefault>Nothing special</ng-template>

        </span>
        </ng-container>
      </p>
      <p class="donut-card-price">
        {{ donut.price | currency : 'INR' }}
      </p>
    </div>
  </div>
`,
styles: [
  `
  
    .donut-card {
      display: flex;
      align-items: center;
      background: #f7f7f7;
      border-radius: 5px;
      margin-bottom: 5px;
      padding: 5px 15px;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: translateY(-3px);
      }
      &-promo{
        border : 2px solid green;
      }
      &-name {
        font-size: 16px;
      }
      &-price {
        font-size: 14px;
        color: #c14583;
      }
      &-icon {
        width: 50px;
        margin-right: 10px;
      }
      &-label{
        border: 1px solid #c14583;
        border-radius: 4px;
        padding : 0 4px;
        margin-left : 5px;
        font-size:12px;
        color: #c14583
;
      }
    }
  `,
],
})
//angular give supports to scss which help in nesting the selector and in line slector .
// we also get the option for stryleURLs replacestyle array then move it on their own file per component.
export class DonutCardComponent {
  @Input() donut!: Donut;
// this is the dump components its does not really care from where we are receiving the data

  constructor() {}
}