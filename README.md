
#maskArea.js 

###A jQuery plugin to create overlay mask effect .

overlay one image over the other to view the visual differences between both the photos.  
user should be able to drag the Mask area.
user should be able to resize the mask area.

##Manual
##1.Plugin  with minimal effects.

###Steps to create a overlay Mask Effect .

####Adding Style sheet in your html page

```<link href="css/maskArea.css" rel="stylesheet">```

####Add js file in your html page

```<script type="text/javascript" src="js/maskArea.js"></script> ```

####Add div in html page with attribute 'id' as  maskArea or you can choose any selector name

```<div id="maskArea"></div> ```

####Add script in html page
```
        <script>
         jQuery(document).ready( function($) {
                    $("#maskArea").maskArea({
                    bgImage  :"fmages/b.jpg",
                    maskerImage :"fmages/f.jpg",
                    width:"500",
                    height:"500",
                    maskerWidth  :"150",
                    maskerHeight :"150",
                    complete	 : function() {}
                });
       })
       </script> 
```

   **Attributes**
   ```
      bgImage      : Image url for the background
      maskerImage  : Image url for the masker Image
      width        : Width for the image container
      height       : Height for the image container
      maskerWidth  : Width for the mask,
      maskerHeight : Height for the mask
```

* Masks contain at least two parts : the graphic you want to mask(bgImage) and the graphic used to mask it(maskerImage),
  

####External Files 

####Add jquery.js, jquery-ui.js and jquery-ui.css in html page.
```
<link href="css/jquery-ui.css" rel="stylesheet">
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/jquery-ui.js"></script>
 ```
###Download Links 

#####Jquery [Download](http://jquery.com/download/).
#####JqueryUI [Download](https://jqueryui.com/download/all/).
##[Download Demo](https://github.com/sreejithkarthikeyan/maskArea/tree/master/demo)


##2.jQuery Plugin under Angular.js Directive

###Steps to create a overlay Mask Effect under Angular.js Directive .

####Add js file in your html page

```
<script src="js/angular.min.js"></script>
<script src="js/angular-maskArea.js"></script>
```
 
####Add div in html page
 ``` <div ng-app="maskArea">
  <div id="maskArea" mask-area="{bgImage:'pic/b.jpg',maskerImage:'pic/f.jpg', width:'602',height:'266', maskerWidth:'50',       maskerHeight:'50'}">
  </div>
  </div> ```
  
##[Download Demo](https://github.com/sreejithkarthikeyan/maskArea/tree/master/demo%20Angular%20Directive)
####License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sreejithkarthikeyan/maskArea/blob/master/LICENSE.md) file for details

###THANKS
####SREEJITH. K. S
