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

In admin module we dont have any provider dependecy , we can achieve it by SCOPEPROVIDER. we didi it on root level
      providers: [importProvidersFrom(HttpClientModule)].

Just add this two line in components it only import required directive
  standalone:true,
  imports:[RouterModule,CommonModule],

  rECENTLY these are made stanbdalone -NgClass,NgSwitch,NgSwitchCase,CurrencyPipe.

  Code splitting and lazy loading at component level.

  Wec an check by lazy chunk files
Load component is a property or a function which dymically import a componnet. By this it return lazy lpoaded component at root level.

ProvideIn  can be removed in stand alone as our component is already load in root componnet because of lazy loading and scopeded provider.
<!-- @Injectable({
  providedIn: 'root',
}) -->

If we dont specify of root we can also provide it on componet below srtand alone : true.

