$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});


// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });
// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });

// HTML要素がクリックされたときに、以下の2つのイベントが行われるように設定する
// .box1がクリックされたときは、box1-extのclassを追加する
// マウスアウトされたときは、box1-extのclassを削除する

// class属性の切り替えに使われているのが、addClass( )とremoveClass( )
// addClass( )では、対象のHTML要素にclass属性を追加する
// removeClass( )では、要素に設定されているclass属性が解除される

// マウスクリックのイベントには、.click( )もある
// clickの場合は、クリックされた時点でイベントが終わってしまう
// 今回は、クリック後に複数のイベントが行われるようにしたいので、onを付けた書き方をする