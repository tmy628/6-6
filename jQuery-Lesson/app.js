$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});

// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });

// .box1-extが、マウスオーバー時に適用されるCSS（class）
// マウスオーバーすると.box1-extのclassが追加され、マウスアウトすると.box1-extのclassが外れる

// class属性の切り替えに使われているのが、addClass( )とremoveClass( )
// addClass( )では、対象のHTML要素にclass属性を追加する
// removeClass( )では、要素に設定されているclass属性が解除される