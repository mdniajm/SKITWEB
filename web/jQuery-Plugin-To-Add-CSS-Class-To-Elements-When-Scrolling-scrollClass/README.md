# scrollClass.js

A simple jQuery plugin for adding classes to elements when they are scrolled into view and firing callbacks.  

[View Demo](http://www.virgiliudiaconu.com/work/scroll-class/)

## Usage

### Initialization

Pass a class name to the selector to initialize the plugin. Elements with the chosen class name will be targeted on scroll. 

```js
$(document).ready(function() {
  $('.example').scrollClass();
});
```

### Set classes to elements

Add the `data-scroll-class` attribute to any element or multiple elements that you wish to target and set a class name as the value.

```html
<div class="example" data-scroll-class="awesome-animation"></div>
```

In the example above, `awesome-animation` will be added to the class attribute of the element when it enters the viewport. (Multiple class names can be added to the data attribute.)

## Plugin Options

- `delay`: Target an element after x number of milliseconds. Adding a delay is recommended for better performance. `10` is set by default. Set to `false` or `0` to disable.
- `threshold`: Target an element when x percent of it is visible in the viewport. Works when scrolling down or up. `50` is set by default. Do not add a percentage sign when setting the threshold.
- `offsetTop`: Number of pixels to offset elements from the top of the window. Useful when a page has a fixed top navigation bar. `0` is set by default. 
- `callback`: Fire a callback after an element is targeted.

Initialization example with all options set:

```js
$(document).ready(function() {
  $('.example').scrollClass({
    delay: 10, //set class after 10 milliseconds delay
    threshold: 50, //set class when 50% of element enters the viewport
    offsetTop: 80, //height in pixels of a fixed top navbar
    callback: function () { //fire a callback
      console.log('Callback fired!');
    }
  });
});
```
## Demo
[View Demo](http://www.virgiliudiaconu.com/work/scroll-class/)

## Contributions

Feel free to fork the repo. All pull requests that improve the plugin are welcomed! 
