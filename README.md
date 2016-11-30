

#maskArea.js

##A jQuery plugin to be used to create mask effect.

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

 <script>jQuery(document).ready( function($) {
                    $("#maskArea").maskArea({
                    bgImage  :"fmages/b.jpg",
                    maskerImage :"fmages/f.jpg",
                    width:"500",
                    height:"500",
                    maskerWidth  :"150",
                    maskerHeight :"150",
                    complete	 : function() {                     }
                });
       });</script> 

     Attributes
      bgImage      : Image url for the background
      maskerImage :  Image url for the masker Image
      width       :  width for the image container
      height       : height for the image container
      maskerWidth : width for the mask,
      maskerHeight : height for the mask
