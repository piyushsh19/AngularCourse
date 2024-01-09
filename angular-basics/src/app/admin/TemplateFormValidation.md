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
 Ts basically remove the promo valuye from the object.Its unpopulates the value     