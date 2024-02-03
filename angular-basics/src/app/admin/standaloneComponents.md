StandAlone Component :-
Ng module idea is different from standalone.
Gererate : npx ng g c --standalone testing

Angular add this to a particular component.Commmodule let us add ngif , ng for .It allow us to get rid of ng module. In angular.jason we give  standalone to true.

Bootstrap StandAlone Component :
In main .ts file  we have platformBrowserDynamic


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

With standalone component we basically remove all the angular api.,ie router outlet give error.

ImportProviderForm:
we need this to provide defination and app config for bootstrap. then make app.module to app.routes.ts  just for routes.

To just import the provideras for router is ImportProviderForm only use in application injector like router.
  providers:[importProvidersFrom(RouterModule.forRoot(AppRoutes))]

To use routing we need to import  property , which specify the standalone template dependancy -those components,pipe etc.

