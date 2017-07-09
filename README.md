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
#### { mobile-menu (hamburger) }
- 2大重點
- 重點1在於 a tag showmenu
    - in html：`<a href="#" class="showmenu">menu</a>`
    - in css
        - 在PC上預設display none
            ```
                a.a-show-menu { display: none; }
            ```
        - 之後再利用media query在mobile device上打開
            ```
                @media (max-width: 767px) {
                    display: block;
                    float: right;
                }
            ```
- 重點2在於利用media query在mobile device上隱藏選單、並根據使用者互動將選單彈出並蓋在header正下方
    - 隱藏選單 (max-width 0、overflow hidden)
        ```
            @media (max-width: 767px) {
                max-height: 0px;
                overflow: hedden;
            }
        ```
    - 根據使用者互動將選單彈出並蓋在header正下方
        ```
            @media (max-width: 767px) {
                ...
                ...
                // 重新定位menu位置
                position: absolute;
                top: header高度+1; // 可加border check menu位置
                // 先把正確樣式的ul、li準備好
                // left: 0; 
                // right: 0; // 因為ul本身沒有設定寬度，所以利用絕對定位元素的特性，加這2行才會滿版，或者用width: 100%來取代
                flex-direction: column;
                width: 100%;
                li {
                    width: initial; // 記得在media query中把之前desktop pc的設定蓋掉
                }

                // 彈出選單、蓋在最上方
                z-index: 100;
                transition: max-height 2.3s; // animation setting

            }
        ```
- 利用jquery動態為body加上.menu-show
    - in js：動態為body加上menu-show這個class
        ```
            $(document).ready( () => {
                $('.a-show-menu').on('click', (e) => {
                    e.preventDefault();
                    $('body').toggleClass('menu-show');
                });
            });
        ```
    - in css：
        ```
            @media (max-width: 767px) {
                .menu-show {
                    .a-show-menu {
                        max-height: 500px;
                    }
                }
            }
        ```


<hr>

### [ 2.2. section.tips ]
- hr的border相關問題，線條本身的呈現是用border來控制
- z-index在絕對元素之間才有效
- 不一定都是z-index的問題，是用來蓋的div的「背景顏色」也很重要！！
- 絕對位置元素的垂直置中[參考](https://pjchender.blogspot.tw/2015/04/css_15.html)

<hr>
<hr>

## 『 其他重點 』
- logo不要自適應！！
### [ 關於background-image ]
#### { 關於background-size }
- cover：維持原比例並適應區塊的大小，可能切圖。
- contain：圖片完整的放入區塊，不會切圖，圖片未填滿的區塊部分則由background-color佔滿。
- ![](https://i.imgur.com/PgZVhdC.png)
