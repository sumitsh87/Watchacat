$(document).ready(function() {
  var BV = new $.BigVideo({container: $('.wrapper')});
  BV.init();
  BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true});
});