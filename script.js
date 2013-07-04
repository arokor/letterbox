(function () {
  'use strict';
  var widgets = Array.prototype.slice.call(document.getElementsByClassName('widget'));

  function updateOrientations(){
    widgets.forEach(function(widget){
      // var containerRect = widget.getBoundingClientRect();
      var containerRect = widget.parentElement.getClientRects()[0];
      var item = widget.getElementsByClassName('widget-item')[0];
      var itemRect = item.getBoundingClientRect();
      var containerRatio = containerRect.height / containerRect.width;
      var itemRatio = itemRect.height / itemRect.width;

      if(itemRatio < containerRatio ){
        widget.className = 'widget vertical';
      }else{
        widget.className = 'widget horizontal';
      }
    });
  }

  window.addEventListener('resize', updateOrientations);
  updateOrientations();
}());

