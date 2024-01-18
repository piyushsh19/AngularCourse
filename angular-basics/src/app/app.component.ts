import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <header class="header">
        <img src="/assets/img/logo.svg" alt="Ultimate Donuts" class="logo" />
      </header>
      <donut-list></donut-list>
      <!-- <donut-single></donut-single> -->
    </div>
  `,
  styles: [
    `
      .app {
        background: #fff;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;
      }
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }
      .logo {
        width: 100px;
        height: 80px;
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
}
/*
 <app-root > inject CONETENT OF  the components in the DOM. Agular give the ng hosts and ng content
 _ngcontent  value get changed every time deliberately for cache bursting reason whenever we recompile and uploads the new version of the application. these can binds to the decalaration so that we can habve a same clasa name in different components .
 it inject in the style not in css class. 

 */