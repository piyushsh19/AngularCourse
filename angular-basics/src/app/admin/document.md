A directive is a way in which we can Bind a particlar behaviour to element or component. eg - NgStyle.

NgStyle

It is more power style binding style when we have mutilple objects.under the hood its (ng-reflect-ng-style).
In ngstyle we need to add a valid property name like background to  "background-color". Also for font size we can do "font-size.px" : "20", if we recieve data from api.
We can also pass a style function getStyle()

.............

Set Classes with Class Binding : - 
[class.donut-card-promo] = "donut.promo" and then we add a style for reusability of components & -name : border :2px solid red.

NgClass- It help in maintaining the style acrros the the aap when it scales.

[ngclass]= "{
    'donut-card-promo' : donut.promo, 
    'donut-card-new' : true
    // thesee two are seperate classes
}"

Pipes is like a pure function which sits betwwen your dataand when its displayed in Dom .its has arguments whiuch are seperated by colon like currency(). A p[ure function can take and invoke functions in another pipe.

.............................................................................

Rendering Flow

Like if we dont have any data in donuts then donut component thoruhgh the error of undefined  as it is expecting some data . ngif provide a behaviour. we reprent it by *ngif because we are refering to the template. Whatever in the ngif container div is treated as template.
note  - in dev tool console we cAN CHECK !![].LENGTH give true .
If we assign in div *ngIf = "donut.length" it willreturn empty array as right.

ng-container is a virtual elemnt because its does gets renederer. Ng its print in the dom for debugging purpose l;ike 
<!-ng- container > <binding>:3>

ngif else and then Statements:-

in else we specifies an another template like <ng-template> </ng-template>. we creayte a refereance template variable #nothing. we can use else when we wait for any callback wait from server.

<ng-container
      *ngIf="donuts.length; then cards; else nothing"
    ></ng-container>

    <ng-template #cards>
      <donut-card [donut]="donuts[0]"></donut-card>
      <donut-card [donut]="donuts[1]"></donut-card>
      <donut-card [donut]="donuts[2]"></donut-card>
    </ng-template>
    <ng-template #nothing>
      <p>No Donuts here...</p>
    </ng-template>

NgIf Syntax with <ng-template>

The astrik does a property binding as well as createing a template. We are going to use the ngif in the template because we dont want the refernce . astrick is a shorthand sugar syntax for  creating templatereference. The we only need this code ;-
   <ng-template [ngIf] ="donuts.length" [ngIfElsse]="nothing>
      <donut-card [donut]="donuts[0]"></donut-card>
      <donut-card [donut]="donuts[1]"></donut-card>
      <donut-card [donut]="donuts[2]"></donut-card>
    </ng-template>
    <ng-template #nothing>
      <p>No Donuts here...</p>
    </ng-template>

    ngconatiner is used for grouping elemnts and ng template is used for furtutre use
    .................................................................

    NfFor directive:-
    It is also bhevaioural and template based dat to loop data in componets. *ngFor = "let donut of donuts". Are donuts is a iterable collection. I t iterates orver an componets as well as on elemnt as well.
    Performance optimaziation for ngfor  when rerendering. Angular use internal differ. It basically comparing by identity {} == {} is false. As its a immutable form and dat is one directional.We can do its by trackById. If we are to delete any particaulr dtataset then angular know by its add and enhancing performance by diff.
    It uses object identity as we can use mutatitaion of object .It compare the lastest rendered id very quickly

    .........................................................................
  NgFor
    Every iteration in loop is taken over index. This way we can access index -<div *ngFor = "let donut of donuts; index as i". we can bind this on the basis of class of odd and even. eg-  [style.color] = " 0 ? ""red: "blue".
    We can as extend NgFor in template form if we have more control over bhevaiour of div.
    Advanced Ngfor -
    Its is called an template approach. As its a template its should container the elemnt donut card inside eg -
    <ng-template >
    <donut-card [donut] = "donut">
    </donut-card>
    </ng-template>

The asterik in *ngFor is exactaly the template shown above. aND WE ALSO NEED TO SPECIFY THE OF LIKE which accept a propert donut -
 <ng-template ngFor [ngForOf] ="donuts">
    <donut-card [donut] = "donut">
    </donut-card>
    </ng-template>
It will give an error variable does not exist To soleve its we have format  (let-donut).
 <ng-template ngFor [ngForOf] ="donuts" let-donut let-i= "index">
    <donut-card [donut] = "donut">
    {{i}} // o,1,2
    </donut-card>
    </ng-template>
As our ng template is creating the variable so we can use anywhere in the template

