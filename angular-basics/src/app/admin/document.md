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

