define(['app/bower_components/crafty/dist/crafty'], function(crafty){
  Crafty.init(300, 300);

  var box = Crafty.e('2D, Canvas, Color')
    .attr({
      x: 10, y: 10, w: 100, h: 100
    })
    .color('green');
});