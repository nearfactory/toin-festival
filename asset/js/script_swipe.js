// var nav = ["WaitTime", "Gym", "Map", "News", "AboutUs"];
// var navCurrent = 0;

// // タップ時の誤動作を防ぐためのスワイプ時の処理を実行しない最小距離
// const minimumDistance = 40

// // スワイプ開始時の座標
// let startX = 0
// // スワイプ終了時の座標
// let endX = 0

// // 解説①：移動を開始した座標を取得
// window.addEventListener('touchstart', (e) =>  {
//   startX = e.touches[0].pageX
// })

// // 解説②：移動した座標を取得
// window.addEventListener('touchmove', (e) =>  {
//   endX = e.changedTouches[0].pageX
// })


// // 解説③：移動距離から左右or上下の処理を実行
// window.addEventListener('touchend', (e) =>  {
//   // スワイプ終了時にx軸とy軸の移動量を取得
//   // 左スワイプに対応するためMath.abs()で+に変換
//   const distanceX = Math.abs(endX - startX)

//   // 左右のスワイプ距離の方が上下より長い && 小さなスワイプは検知しないようにする
//   if (distanceX > minimumDistance) {
//     // スワイプ後の動作
//     console.log('左右スワイプ');
//     if(startX - endX > 0){
//       $(".navItem").removeClass("current");
//       $(".section").removeClass("current");
//       navCurrent = navCurrent < 4 ? navCurrent + 1 : navCurrent;
//       $("#nav" + nav[navCurrent]).addClass("current");
//       $("#section" + nav[navCurrent]).addClass("current");
//     }
//     else if(startX - endX < 0){
//       $(".navItem").removeClass("current");
//       $(".section").removeClass("current");
//       navCurrent = navCurrent > 0 ? navCurrent - 1 : navCurrent;
//       $("#nav" + nav[navCurrent]).addClass("current");
//       $("#section" + nav[navCurrent]).addClass("current");
//     }
//   }
// })