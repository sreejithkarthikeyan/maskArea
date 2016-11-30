

#maskArea.js

##A jQuery plugin to be used to create mask effect.

##Manual
###Include the minified file in your project.

####Adding Style sheet in your html page

```<link href="css/maskArea.css" rel="stylesheet">```

####Adding js file in your html page

```<script type="text/javascript" src="js/maskArea.js"></script> ```

##Usage

####Add a div in html page named maskArea

```<div id="maskArea"></div> ```

####Add script in html page

    <script>
    jQuery(document).ready( function($) {
                    $('#maskArea').maskArea({
                    bgImage  :'fmages/b.jpg',
                    maskerImage  :'fmages/f.jpg',
                    width:'800',
                    height:'800',
                    maskerWidth  :'150',
                    maskerHeight :'150',
                    complete	 : function() { //alert('Done!');
                    }
                });
       });
    </script> 
