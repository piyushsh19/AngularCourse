// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { DonutService } from './admin/services/donut.service';


export const AppRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((x) => x.AdminRoutes),
      providers: [importProvidersFrom(HttpClientModule), DonutService]
    },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    path: '**',
    redirectTo: 'admin',
  },
];

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}