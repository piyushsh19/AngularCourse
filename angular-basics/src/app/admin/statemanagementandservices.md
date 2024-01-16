We intordocue the concept of states so we doesnot dependent on backend server
npx ng g service admin/services/donut. The service class can be used in any component , It can be used on routing.
We mark service as @Injectable. It makes angular depepdency injection system and allow to pass classes around the imports or order. It is Provided in root allow us to tree shakable service which later can be lazy loaded. And service can also be provide in module if required.
In order to acce the service we need to provide it in admin module like:- 
providers: [DonutService].

In servies we can have a  hold states, http request , guards , route defination.

Dependency Injection to pass state from service to components by constructor and NgOninitfunction. Use constor for wriring up the thing and state ,and ngonit for initializing and datafetching. It can be achevied by type script .eg- constructor(private donutservice:Donutservice)
