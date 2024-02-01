Routing:-

Routing module is to imorted in root module(app.module).
First need to create routing defination
Register router module in imports, as we are defing it in root module like: RouterModule.forRoot.Its for root of the app.

Need to create routes its has routes defination arrays.
export const routes:Routes=[]
In array we pass routes objects.

router-outlet is a directive which specify where we load our component.It act like an injection according to url.

Child route Defination:
Nested route has children property where we configired the routes.
 {
    path: 'admin',
    children: [
      { path: 'donuts', component: DonutListComponent },
      { path: 'donut', component: DonutSingleComponent },
    ],
  },

Redirecting in case of empty path:
 {
    path: '',
    children: [
      pathMatch:full, // it check if path is full empty otherwise it subsequently match any path
	redirectTo: 'admin'
    ],
  },
the above routing defintion is live in our admin module then its confuses the base path.The feature module should have path match in the child nested components.It work in order from top to bottom.

Wild cards: IN case of misspelled url or old route.then it give uncaught error.It help in redirect or display any component.
We specify by astricks
{

path:"**",
redirectTo: "admin"
}

Lazy Loading;
LoadChildren is a typescript function which return a promise which import the feature module.We remove admin module split code bundling by lazy load (source .admin).

 loadChildren: () =>
      import('./admin/admin.module').then((x) => x.AdminModule),

 Declarative Router:
 If we are on our admin route then we add create a new donut item then we use routerlink is a attribute which link to the property of new. /admin/new.
 we need to provide a new router defination with relative path /donuts/new .If we don't create a new item then it assign a new id.In card component we bind it     