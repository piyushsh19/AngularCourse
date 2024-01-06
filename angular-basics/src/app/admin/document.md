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




