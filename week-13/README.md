hw2:
1.
練習使用 webpack 模組化開發，將各種不同的 function 分類在不同的 js 檔案裡面，並且 export function出去。
最後在全部 import function 到要使用的 index.js 並且export 一個function 為處理整個新增留言，獲取留言等全部功能。
2.
webpack 設置將最終 ./src/index.js 打包 ./dist.index.all.js 並且給他以 library 使用讓他可以以瀏覽器看得懂的方式 import 進去使用。(就像是jquery使用前都用"$"，要使用我們import的資料使用前都用"library設置的值")

3.
這次我還沒有寫得太完整，不夠自動化，因為許多變數都是我定義的。


hw4:

1. Webpack 是做什麼用的？可以不用它嗎？
    Webpack 是一個模組打包工具，能將眾多模組與資源打包成一組檔案。
    雖然在 ES6 語法中官方已經有提供模組規範（叫做 ES Modules，能夠支援 import 和 export），但仍存在舊瀏覽器不支援新語法的問題，而 Webpack 能解決舊瀏覽器不支援部分新語法的問題，並編譯我們需要預先處理的內容，轉換成瀏覽器看得懂的語言。

    功能舉例：

    打包多個 .js 檔案成單一檔案（可以寫模組化的 JavaScript，不再需要在 HTML 中引入所有 JS 檔案）
    撰寫 JavaScript ES6 或以上的語法（結合 Babel 工具協助轉譯）
    編譯 Sass/SCSS、Pug
    處理圖片與字型我們家

    可以不用 webpack 嗎？
    webpack 較適合用在大型的專案上，因為大型專案需要管理眾多不同類型的檔案，使用 webpack 有利於後續管理及維護，但如果專案規模較小，載入資源不多，不使用 webpack 也是可行的。

2. gulp 跟 webpack 有什麼不一樣？
    gulp 是任務管理工具，用於自動化耗時且重複的任務，藉此提高開發效率，例如：編譯語法、壓縮檔案、指定任務執行順序等功能。

    webpack 的定位是模組打包工具，主要是透過 loader（載入程式） 和 plugins（插件） 將各種模組與資源打包，並轉換成瀏覽器能使用的程式碼。

    雖然 gulp 與 webpack 的定位大不相同，但有些流程與功能兩者均能完成，導致使用者容易將兩者混淆。

3. CSS Selector 權重的計算方式為何？

    CSS Selector 的優先權
    在談論 CSS Selector 權重的「計算方式」之前，我們先來了解 CSS Selector 的優先權，在優先權規則中，從高至低排列分別為：

    Animation（動畫執行期間）> !important > inline style > ID > Class 與屬性選取器 > 元素選擇器 > ＊通用選取器 > 繼承的屬性

    1: Animation（動畫執行期間），關鍵影格（@keyframes）中的 CSS 屬性在「動畫執行期間」擁有絕對的優先權。
    2: !important 是 CSS 中的特殊規則，只要在 CSS 屬性後面接上「!important」，將會變成極高的優先權。
    3: 行內樣式（inline style，利用 HTML 元素中的 style 屬性將 CSS 樣式寫入，就稱為行內樣式（inline style）。
    4: ID 選擇器 #id
    5: 類別選擇器.class 與屬性選取器 [attr=value]
    6: 元素選擇器，例如：<p>、<head>、<div> ...
    7: ＊通用選取器，全域選擇器以星號 * 代表，適用於所有元素。
    8: 繼承的屬性


    計算值      (偽類別：:hover、:nth-child... 偽元素：::before、::after、::placeholder...)
        ID 選擇器 = a
        Class 選擇器、屬性選取器、偽類別 = b
        元素選擇器、偽元素 = c
    計算方式
        先比較 a 的數量，其次比較 b 的數量，最後比較 c 的數量