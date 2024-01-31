Routing:-

Routing module is to imorted in root module(app.module).
First need to create routing defination
Register router module in imports, as we are defing it in root module like: RouterModule.forRoot.Its for root of the app.

Need to create routes its has routes defination arrays.
export const routes:Routes=[]
In array we pass routes objects.

router-outlet is a directive which specify where we load our component.It act like an injection according to url.