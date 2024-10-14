$(document).ready(function() {
     var pagetop = $('.pagetop');
       $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
               pagetop.fadeIn();
          } else {
               pagetop.fadeOut();
               }
          });
          pagetop.click(function () {
              $('body, html').animate({ scrollTop: 0 }, 500);
                 return false;
      });
   });
//"btn1"というIDを取得して、クリックしたらfunctionを実行する
document.getElementById("btn1").onclick = function(){
     //"pics"というIDを取得して、そのsrcを"img/arupaka.png"に変更する
     document.getElementById("pics").src="img/character.png";
   }
 

   // 全てのボタンを配列として取得
var allButtons = document.getElementsByClassName('btn');

// 画像の要素を取得
var img = document.getElementById('img');

// ボタンがクリックされたときの処理を設定
btn1.addEventListener('click', function() {
    changeImage('img/nagona1.PNG');
    setActiveButton(btn1);
});

btn2.addEventListener('click', function() {
    changeImage('img/character.PNG');
    setActiveButton(btn2);
});

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
// 画像を切り替える関数
function changeImage(path) {
    img.src = path;
}

// アクティブなボタンを設定する関数
function setActiveButton(activeButton) {
    // すべてのボタンから 'show' クラスを削除
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('show');
    }

    // アクティブなボタンに 'show' クラスを追加
    activeButton.classList.add('show');
}