

#maskArea.js

###A jQuery plugin to create overlay mask effect .

#####overlay one image over the other to view the visual differences between both the photos.  
#####user should be able to drag the Mask area.
#####can resize the mask area.

##Manual

###Include the minified file in your project.

####Adding Style sheet in your html page

```<link href="css/maskArea.css" rel="stylesheet">```

####Adding js file in your html page

```<script type="text/javascript" src="js/maskArea.js"></script> ```

##Usage

####Add div in html page with attribute 'id' as  maskArea or you can choose any selector name

```<div id="maskArea"></div> ```

####Add script in html page
```
 <script>jQuery(document).ready( function($) {
                    $("#maskArea").maskArea({
                    bgImage  :"fmages/b.jpg",
                    maskerImage :"fmages/f.jpg",
                    width:"500",
                    height:"500",
                    maskerWidth  :"150",
                    maskerHeight :"150",
                    complete	 : function() {}
                });
       })</script> 
```

   **Attributes**
   ```
      bgImage      : Image url for the background
      maskerImage :  Image url for the masker Image
      width       :  width for the image container
      height       : height for the image container
      maskerWidth : width for the mask,
      maskerHeight : height for the mask
```

* use same image dimension for both images. bgImage and maskerImage

####External Files 

####Add jquery.js, jquery-ui.js and jquery-ui.css in html page.
```
<link href="css/jquery-ui.css" rel="stylesheet">
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/jquery-ui.js"></script>
 ```
###These files can download from 

Jquery [Download](http://jquery.com/download/).
JqueryUI [Download](https://jqueryui.com/download/all/).

####License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sreejithkarthikeyan/maskArea/blob/master/LICENSE.md) file for details
