# hex-rwd-practice

## 『 0. 專案說明 』
- rwd切版練習
- gulp

<hr>
<hr>

## 『 1. 環境建置 』
### [ 1.1. Gulp ] 
- yarn add -D
    - gulp、gulp-sass、gulp-pug、gulp-uglify、gulp-imagemin、gulp-connect、gulp-livereload

<hr>
<hr>

## 『 2. 切版 』
### [ 2.1. header ]
- 背景圖片處理
    - check背景圖片大小
    - 用個一樣大小的.container包起來、置中
    - header背景設定與圖片背景相近的顏色
#### { 2.1.1. top }

### [ 2.2. section.tips ]
- hr、搞半天是border的問題，線條本身的呈現是用border來控制
- 搞半天不是z-index的問題...是用來蓋的那個div的「背景顏色」的問題！！
- 絕對位置元素的垂直置中[參考](https://pjchender.blogspot.tw/2015/04/css_15.html)
