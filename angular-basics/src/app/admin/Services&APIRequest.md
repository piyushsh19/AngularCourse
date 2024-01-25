We going to fetch the data through using angular client module.HttpClient is a wrapper around XML HTtpp request by which we can do get ,put etc.

We can add dtataset in db.json.We can also verify this in console using.JSON.stringfy('ours data set').Then we pass in db.son which convertit in JSON format.

It run trough packag.json we have script and db. run DB or npm run .Its watch and delay the fetch request.We use proxy :3000 so angular pick up.Its act as same request.

 Get Request:
 We implement it in read to get the state property.Here we make http get request and hold state.
 In bigger app we need to make donut store where we make private donut property availble to isolated class. The it in store and make http request.

 In list componet we have a ngonit function where we a making syncronus operation.There is no promise and observable it just bind the locall dataset..
 HttpCilent module  then regester as imports.Without this we dont have the dependency to make request in module.
 We can inject the httpclient in our service in constructor.We give an alias http by using typescript by supplying the Type httpClient.
 ****In get method its a good practise to use backtick as we can pass in the value as id and then interpolate the string.
 In read method we retun the get request so we need to specigy genric typescript type of the data.It tell angular this type of data is comming.eg-
 this.http.get<Donut[]>(`/api/donuts`).By using get we gets error in ngoinit in list componetit as its does not envoke  
 this.donutservice.read().As our service return an  return a observable so wee need to subsribe it.
 Data from promise is observable which subsribe whenever its ready.

 PUT :
 Constructs an observable that, when subscribed, causes the configured PUT request to execute on the server. The PUT method replaces an existing resource with a new set of values. See the individual overloads for details on the return type.

 Delete;
 Constructs an observable that, when subscribed, causes the configured DELETE request to execute on the server. See the individual overloads for details on the return type.

