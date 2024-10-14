// ロード進行の更新
function updateProgress(percentage) {
    const progress = document.getElementById("progress");
    const airplane = document.getElementById("airplane");

    // プログレスバーと飛行機の動き
    progress.style.width = `${percentage}%`;
    airplane.style.left = `${percentage}%`;

    // 100%に達したとき
    if (percentage >= 100) {
        setTimeout(() => {
            airplane.style.transition = "left 0.2s ease-in";
            airplane.style.left = "100%"; // ゴールへ加速
            setTimeout(() => {
                document.getElementById("loadingScreen").style.display = "none"; // ロード画面非表示
            }, 200);
        }, 500);
    }
}

// ロードの進行をシミュレート
let progressPercentage = 0;
const interval = setInterval(() => {
    if (progressPercentage < 100) {
        progressPercentage += 10;
        updateProgress(progressPercentage);
    } else {
        clearInterval(interval);
    }
}, 500);

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