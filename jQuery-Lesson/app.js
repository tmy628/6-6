$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});

// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });