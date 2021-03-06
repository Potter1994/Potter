原生 JS 遇到的問題以及解決方法跟重點整理

在 Todo List 我們用新增物件在放置陣列裡面來存取資料。

1. 監聽的元素:(監聽事件放在哪我覺得是前端很重要的一點)
    由於我們一直新增 DOM 所以去監聽我們每個新增的 DOM 元素不切實際以及浪費力氣，我們往上尋找父層 (可用 closest 方法往上尋找第一個符合條件的先祖) ，
    在我們新增的 DOM 上偷放置 id 來去取得他在物件陣列中是哪一個物件再去進而修改或刪除。


2. 同一個元素監聽兩種事件的原因
    這邊第 3 步驟 tab 切換樣式以及第 5 步驟 更新代辦清單有一個重點，明明同樣是註冊在 options 上面的方法卻分成了兩個監聽事件!
    (toggleStatus) 由於這個是由 e.target 所拿到的東西但是更新代辦清單的"渲染"要應用整個程式，會導致其他地方沒有輸入 e 參數(就算帶入參數 e.target 的東西也不同)!
    所以額外用了第 3 步驟來讓他再點選的時候就有 toggleStatus 可以使用。

3. fetch 待解決問題 X
    目前使用 fetch 傳送 POST 資料還是有問題，不知道是因為前端 body 的設置不好還是後端 php 有什麼部分沒寫到


4. ajax 傳送 POST 資料
    前端直接傳送 json 格式資料存在資料庫到時候拿取資料庫直接可以傳，後端 php 以 json 格式傳送 response 。
    後端:
        設置 header("Access-Control-Allow-Origin: *")
        以及 header("Content-Type: application/json; setchars=utf-8")
        第一個是為了符合規定來讓前端可以跨網域取得資料
        第二個是讓資料以 json 格式讓前端可以取得資料
        使用 json_encode 來讓資料轉換為 json 格式
    前端:
        使用 ajax 由於當初存進去資料庫是直接講整筆資料 JSON.stringify 轉為字串存進去，所以在
        取得後要將取出來的資料再 JSON.parse 解析回 json 。



5. 取得前端目前網址方法
    window.location 物件所包含的屬性:
        hash => 從井號 (#) 開始的 URL;
        host => 主機名和當前的埠號 (port);
        hostname => 當前 URL 主機名;
        href => 完整的 URL;
        pathname => 當前 URL 路徑部分 (埠號後的路徑);
        port => 埠號;
        protocol => 當前 URL 的協議;
        search => 從問號 (?) 開始的 URL (查詢的部分);
        範例:
        const searchParams = new URLSearchParams(window.location.search)
        const todoId = searchParams.get('id')


6. ajax 掉到 fail 但回傳 200 的原因
    1: php 沒有順利 echo 出 json 資料



----學到了一個陣列方法(method)使用 filter() ， 類似於 forEach 迭代加上了符合條件。
----學到了第 5. 取得前端目前網址方法



jQuery

1. 監聽事件 (可看第 3 步驟)
    用 on 綁定事件 (推薦用 on 是可以綁定已存在甚至還未存在的 DOM 事件，以及充分
    利用傳播 enent bubbling 的原理和事件委任 event delegation 的技巧) ，因為事件委任的技巧讓 .on() 可以用來綁定事件處理在現在已經存在或還沒存在的 DOM 元素，像是你可以綁在 $(document).on() 監聽 DOM 的所有事件。

    例如，綁一堆 click 事件處理在 #dataTable tbody 下面的一堆 tr 元素上：
    $('#dataTable tbody tr').on('click', function() {
    // 這裡的 this 指向 #dataTable tbody tr 這一個 DOM 元素
    // 用 $() 將 this 轉成 jQuery object
    console.log( $(this).text() );
    });


    V.S. 綁一個 click 事件處理在 #dataTable tbody 上，然後監聽從 tr bubble 上來的 click 事件：
    $('#dataTable tbody').on('click', 'tr', function() {
    // 這裡的 this 指向符合 selector 的 DOM 元素，也就是 tr
    console.log( $(this).text() );
    });

    -----------------  以上我的解釋  --------------------
    就是綁一堆 event 在每一個物件上不如綁一個事件監聽在他們的父層靠著事件 bubbling 的特性往上傳遞監聽就好，相當於只綁了一個事件監聽!!


2. 與原生 JS 差別
    1: 更好選取 DOM 物件;
    2: 有更方便的方法 (method) 可以使用;
    




----------------- 後端方面 ------------------

1.清楚帶入的 POST 值。
2.串接 API 為輸入整段網址取得 echo 在頁面上的 json 資料。
3.要設置 *** header *** 很重要。
4.如果回傳 codeStatus 為 200 代表有成功但是 php 沒有正確 echo 出 json 資料。
5.記得考慮各種情況，例如 POST、GET 值為空就 echo 一個失敗的 json 然後 die()，然後不為空時，是否連接成功，失敗回傳連接錯問訊息 $conn->error 。

