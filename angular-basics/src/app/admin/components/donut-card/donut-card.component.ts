import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  template: `
 
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
        class="donut-card-icon"
      />
      <div>
        <p class="donut-card-name">
          {{ donut.name }}
        </p>
        <p class="donut-card-price">
          {{ donut.price }}
        </p>

  `,
  styles: [
    `
    // Notye -  we need to have the display flex or block a custom elemt which angular implement is donut card. which are not by default gets any display. But we get the benefit of having a div on host elemnt as its uses usseragent sheet which has property of block
    :host{
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
    }
    // :host is not angular specific it i shadow dom specification which is a feature of new platform
      .donut-card {
        
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