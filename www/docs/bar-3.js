new pv.Panel()
    .width(150)
    .height(150)
  .add(pv.Bar)
    .data([1, 1.2, 1.7, 1.5, .7])
    .top(0)
    .width(20)
    .height(function(d) d * 80)
    .left(function() this.index * 25)
  .root.render();
