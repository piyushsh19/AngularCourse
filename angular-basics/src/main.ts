import { enableProdMode, importProvidersFrom } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';


// import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
  
bootstrapApplication(AppComponent,{
  providers:[importProvidersFrom(RouterModule.forRoot(AppRoutes))]
})

.catch((err) => console.error(err));
