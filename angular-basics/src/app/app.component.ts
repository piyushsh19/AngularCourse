import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
  <donut-list></donut-list>
    </div>
  `,
  /*  template: `
  <div class="app">
  <h1 (click)="handleClick($event)">{{ newMessage }}</h1>
  <input [value]="message" (input)="newMessage = messageInput.value" #messageInput>
  <p>{{ messageInput.value }}</p>
</div>
`*/
  //#messageInput is Template refrance variable that alow us to grab hold of a components or an element and acces information about it

  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  ngOnInit() {
    this.message = 'Hello World';
  }

  handleClick(event: Event) {
    console.log(event);
  }
  handleInput(event:Event){
    const { value} =event.target as HTMLInputElement;   // type casting 
    console.log(value)
    // make a pracise to not mutate the value , 

  }
}