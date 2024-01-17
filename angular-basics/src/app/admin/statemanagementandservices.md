We intordocue the concept of states so we doesnot dependent on backend server
npx ng g service admin/services/donut. The service class can be used in any component , It can be used on routing.
We mark service as @Injectable. It makes angular depepdency injection system and allow to pass classes around the imports or order. It is Provided in root allow us to tree shakable service which later can be lazy loaded. And service can also be provide in module if required.
In order to acce the service we need to provide it in admin module like:- 
providers: [DonutService].

In servies we can have a  hold states, http request , guards , route defination.

Dependency Injection to pass state from service to components by constructor and NgOninitfunction. Use constor for wriring up the thing and state ,and ngonit for initializing and datafetching. It can be achevied by type script .eg- constructor(private donutservice:Donutservice)
State Selector :-
 this.donut = this.donutService.donuts.find(
      (donut: Donut) => donut.id === id
    ) || { name: '', icon: '', price: 0, description: '' };

Class method as a state slector to encapsulate it. If we have a dataset of private then other componets does not read our data , class method read is used to pass it.

    this.donut = this.donutService.readOne('8amkZ9');
    Then we seperate the logic in a proper way like:-
      read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);

    if (donut) {
      return donut;
    }

    return { name: '', icon: '', price: 0, description: '' };
  }

  Immutability:
  In form component we need to pass the object to the parent componet and then inside the service we add the form to the existing dataset state.We basically store the new object in the meory whenever the component is initialized.
  wee need to craete a create function in service like
  create(payload:Donut){
    this.donut.PUSH()
  }
  This can be achieved by mmutable patterns like PUSH.wE CAN PUSH NEW ITEM IN THE NEW ARRAY BUT ITS mUTATING THE VALUES. We want to take the existing objects and passs the new payload .It s create entirely anew object (its uses identity check if these two objects are the same)

    create(payload:Donut){
    this.donut = [...this.donuts,payload];
  }
  
  Edit in form Functionality: 
  We need to handle logic inline for update \and on submit.We need to supply the id whatever item is updatedwe need a event emmiter.
  We use map to get the id changes over the objects.iSt gives idivisual donut 
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts);
  }

  Deleting State:- 
  we pass donut to check it by filter which givre individual id.
  It iterates trough the array and return the id.
  We create a button in form. We need the  ouput and eventEmmitter.We can also give confirm by giving the name.Then we listing the delete function.Whaterver we dlete we can see in the console , rightnow its doing it locally.