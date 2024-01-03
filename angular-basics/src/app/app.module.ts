import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminModule],
  bootstrap: [AppComponent],
})
// command for creating module npx ng g module admin --module=app.module
export class AppModule {}