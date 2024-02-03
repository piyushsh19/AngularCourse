// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((x) => x.AdminModule),
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