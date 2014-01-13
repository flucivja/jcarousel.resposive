jcarousel.resposive
===================
Plugin for sorgalla`s jCarousel (https://github.com/jsor/jcarousel) which makes it responsive.
Documentation
-------------

Before use:

1) [Download](https://raw2.github.com/flucivja/jcarousel.resposive/master/jquery.jcarousel-responsive-plugin.min.js) and include this plugin into your HTML document below of jCarousel library.

```html
<script type="text/javascript" src="/path/to/jquery.js"></script>
<script type="text/javascript" src="/path/to/jquery.jcarousel.js"></script>
<script type="text/javascript" src="/path/to/jquery.jcarousel-responsive-plugin.min.js"></script>
```

2) [Read](http://sorgalla.com/jcarousel/docs/) documentation how to configure sorgalla`s jcarousel and make your page responsive. After those steps, you can use this plugin. If you have some problems how to do that please look at very simple [example below](#example).

### Usage

Simple usage by calling function on jCarousel instance:

```javascript
$('.listWrapper').jcarousel()
                 .jcarouselResponsive();
```

or

```javascript
var carousel = $('.listWrapper').jcarousel();
carousel.jcarouselResponsive();
```

### Custom Options

You can configure this plugin by passing options into function.

**Following options are available:**

Specify how many items should be visible on individual enviroments:
```javascript
desktop (integer) (default 5)
tablet  (integer) (default 3)
phone   (integer) (default 2)
sphone  (integer) (default 2)
```
Specify gap between items:

```javascript 
margin (integer) (default 14)
```
Specify custom tresholds for width of individual enviroments. Every enviroment is specified by array with 2 items. The first item represents minimal width of enviroment and the second item represents max width of enviroment.
```javascript 
tresholds (object) 
default: 
{
  desktop: [979, Infinity],
  tablet:  [768, 978],
  phone:   [568, 767],
  sphone:  [0  , 568]
}
```

### Example with options

```javascript
$('.listWrapper').jcarousel()
                .jcarouselResponsive({
                  desktop: 6,
                  phone: 1,
                  margin: 20
                });
```

### Advanced example also with tresholds options

```javascript
$('.listWrapper').jcarousel()
                .jcarouselResponsive({
                  tresholds: {
                    desktop: [960, Infinity],
                    tablet:  [760, 960],
                    phone:   [560, 760],
                    sphone:  [0  , 560]
                  },
                  desktop: 6,
                  desktop: 3,
                  phone: 1,
                  margin: 15
                });
```

Example
-------

You can find example on [this](http://devfl.com/jcarousel/) page.

License
-------
This plugin is provided as it is under the [MIT](https://raw2.github.com/jsor/jcarousel/master/LICENSE) license.
