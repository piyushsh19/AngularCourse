Form and Validation-
 in donit single we render donut form . It renders outs form componet. It is incharge of communucating with the service .
 NgForm :-
 Its a good idea to register form with angular with -  #form="ngForm". and import form modules. It give us refernce of ngformand return to form variable .It means we have live object.
 note -<pre> help in nicer formating.

name property in form is important as its take object get generated which is the value.
In imput  ng Model is inchargw to create anew model. we can also do Two binding but its not a good practise.
Radio button - deleselect the promobutton. We learn property binding.If we add in value field then its try to bind the value to promo .Property binding eneters to the JS world. 
 <label>
          <input type="radio" name="promo" [value]="undefined" ngModel />
          <span>None</span>
        </label>
 Ts basically remove the promo valuye from the object.Its unpopulates the value.

Selcts Menu fileds in form.Here we bind the data and dynamically render it. For this in compponents defination we typed as explictily as icons array. In slect options filed we bind it through *ngfor

      <span>Icon</span>
        <select name="icon" class="input input--select" ngModel>
          <option *ngFor="let icon of icons">
            {{ icon }}
          </option>
        </select>
Icon is our sting array its wiil generate js objects.Its is now iterate through the value we provide in Icon array.
We can also set the value by property binding with [value]="icon". by this we explicitly sets the value. Here we can also change things with pipes.
 <span>Icon</span>
        <select name="icon" class="input input--select" ngModel>
          <option *ngFor="let icon of icons" [value]="icon | uppercase">
            {{ icon }}
          </option>
        </select>
        Console output -
        <option _ngcontent-pkk-c44="" value="CARAMEL-SWIRL" ng-reflect-value="CARAMEL-SWIRL"> caramel-swirl </option>.

We also have [ngValue] to bind the value . If we have some value which is not a string  then [value ] fileds fails . we might not have a just plain njs string it might be object.

Validations Constraints -
form.form will give the Form group proprty. In this we gave a status proprty which check the validation of input fields.This can be cdone by binding requiered attribute in imput field.

Validation States and Error-
Validation state per input as user filed each filed . In order to be a valid form all inputs field to be valid and form also.
      <pre>{{ form.valid | json }}</pre>

Template refernca variable can be acces throuigh ngmodel. We can export the refernce through ng model using #name="". In this we can supply the value we are expecting


  <label>
      <span>Name</span>
      <input type="text" name="name" class="input" required ngModel #name/>
      {{name}}
    </label>
The ouput is [object HTMLInputElement] its a html elemnet.If we type {{name.value .valid}} .Its give the error valid does not exist .

Correct way -
  <label>
      <span>Name</span>
      <input type="text" name="name" class="input" required ngModel #name = "ngModel"/>
      {{name.value}} // [object Object]
    </label>
Its return the object from Ng model it has several property behind it like.
{{name.valid}}
{{name.invalid}}
{{name.touched}} //
{{name.untouched}}
{{name.pristine}} its does not touched 
{{name.dirty}} // value is typed.

// Errors for low level control on validations.I f we need to test -{{name.errors | json}}
Saftey check in angular (?) eg - name.errors?.name

NgSubmit model .
Enables binding AngularJS expressions to onsubmit events.

Additionally it prevents the default action (which for form means sending the request to the server and reloading the current page), but only if the form does not contain action, data-action, or x-action attributes.

hANDLE sUBMIT(form: ngForm){
 console.log(form.value)
}

AbstractControl Directive we get the value.
Disabling submit button for saftey button. [disabled]="form.valid".

hANDLE sUBMIT(form: ngForm){
if(form.valid){
  console.log(form.value)
}
} this prvenet any one to enable submit events from dom or console.

Trigger Validation message on submit: -
#price or #icon
hANDLE sUBMIT(form: ngForm){
if(form.valid){
  console.log(form.value)
}else{
  form.form.markAllasTouched()
}
}
.............................................................................

Rightnow or form is dynmaically updated our model..
We can do by delaying the object by -  [ngModelOptions]='{ updateOn: blur'}'.

Form Reset:-
in button we have rsset button events click , (click)="form.restForm()".
we can check by ({form.submitted}). 
user Feedback 
<div clas="form-working" *ngif= "form.valid && form.Submitted">
Working
</div>
.To get get from form we need Output and events emmiter.
@output() create = new EventEmmiter<Donu>();
In samrt componnets we pass <donut-form (create)= "oncreate($event)">
Oneway databinding for form:

We bind soem data in form on ngOnInit(), By Input , @Input()donut!:Donut.
In samrt componnets we pass <donut-form [donu]="donut" (create)= "oncreate($event)">
We can do by[ngModel]="donut.icon".Ifwe use two way binding then it changes our initial value.
