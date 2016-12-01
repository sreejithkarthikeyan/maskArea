/*

 * maskArea v 1.0
 * http://pointslabs.co/
 * MIT licensed
 * Copyright (C) 2016 Sreejith K S, http://pointslabs.co/
 * sreeksleo@gmail.com
 * A Simple Mask Area Plugin.
 * Masking an Image with Another Image.
 * sreejith k s

*/

(function($) {
    var settings ;
    $.fn.maskArea = function(options) {

        settings = $.extend({
            bgImage:null,
            maskerImage:null,
            width:500,
            height:500,
            maskerWidth:150,
            maskerHeight:150,
            complete : null
        }, options);
        return this.each( function(i) {
            arrangeDiv(this,settings.maskerImage,settings.bgImage);
        });
    };
    function arrangeDiv(_obj,_tImg,_bImg){
       
        var _div=null;
        var _frame=_obj.id; 
        $('#'+_frame).css({
            'position':'relative'
        })
        _div=$("<div class='drag'><div id='masker'></div><div class='imageFrame' id='recBox' ><div id='imgContainer'><div class='img-box-archive imageloader'><img id='imageT' class='hiddendiv'  src='' alt=''>  <img id='imageB' class='hiddendiv'  src='' alt=''></div></div></div></div>");
        $('#'+_frame).append(_div);
        $(_obj).find(".img-box-archive").css(
            {
                'width': settings.width + 'px',
                'height': settings.height + 'px'
            });
        /*dimension*/
        $(_obj).find('#imageT').css(
            {
                'height': $(".img-box-archive").height() + "px",
                'width' : $(".img-box-archive").width() + "px"
            });
        $(_obj).find('#imageB').css(
            {
                'height': $(".img-box-archive").height() + "px",
                'width': $(".img-box-archive").width() + "px"
            });
        /*load img*/

        var preLoaderT = $(" <div class='loadingbarT'></div>");
        $(_obj).find('.imageloader').append(preLoaderT);
        var preLoaderB = $(" <div class='loadingbarB'></div>");
        $(_obj).find('.imageloader').append(preLoaderB);
        $(_obj).find('#imageB').on('load',function() {

            $(this).closest('div').find('.loadingbarB').remove();
            $(this).removeClass("hiddendiv").addClass("visiblediv");
        }).attr('src', _bImg);

        $(_obj).find('#imageT ').on('load',function() {
            $(this).closest('div').find('.loadingbarT').remove();
            $(this).removeClass("hiddendiv").addClass("visiblediv");
        }).attr('src', _tImg);

      
        drawRectangle(_obj);
    }

    function drawRectangle(_obj) {
        $(_obj).find('#imageT').addClass('has-mask');
        $(_obj).find('#masker').css({
            position:'absolute',
            width:settings.maskerWidth,
            height:settings.maskerHeight,
            left: ($(_obj).find(".img-box-archive").width() -$(_obj).find('#masker').outerWidth())/2,
            top: ($(_obj).find(".img-box-archive").height() - $(_obj).find('#masker').outerHeight())/2,
            'z-index': 1000
        });
        var imgT=$(_obj).find('#imageT');
        overlayImage(_obj, imgT);
        $(_obj).find('#masker').draggable({
            containment : $(_obj).find(".img-box-archive"),
            drag : function(event, ui) {
                overlayImage(_obj,imgT );
            },
            start : function(e, ui) {
                overlayImage(_obj, imgT);
            },
            stop : function(e, ui) {
                overlayImage(_obj, imgT);
            }
        });
        $(_obj).find('#masker').resizable({
            containment : $(_obj).find(".img-box-archive"),
            handles : 'ne, se, sw, nw',
            start : function(e, ui) {
                overlayImage(_obj, imgT);
            },
            resize : function(e, ui) {
                overlayImage(_obj, imgT);
            },
            stop : function(e, ui) {
                overlayImage(_obj, imgT);
            }
        });
    }
    var t, r, b, l, wid, leftPos, th, rightPos, w;
    function overlayImage(_obj,_imgT) {
        t, r, b, l, wid, leftPos, th, rightPos, w=null ;
        t = $(_obj).find('#masker').position().top+"px";
        l = $(_obj).find('#masker').position().left+"px";
        r = $(_obj).find('#masker').css('right');
        b = $(_obj).find('#masker').css('bottom');
        wid = $(_obj).find('#masker').width();
        leftPos = $(_obj).find('#masker').position().left;
        w = Number(wid + leftPos) + "px";
        th = $(_obj).find('#masker').height();
        rightPos = $(_obj).find('#masker').position().top;
        b =  Number(th + rightPos) + "px";
        $(_obj).find(_imgT).css({
            'clip' : 'rect(' + t + ', ' + w + ', ' + b + ', ' + l + ')',
            'position' : 'absolute',
        });
    }
}(jQuery));
/*sreeksleo@gmail.com*/
