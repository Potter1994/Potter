主要訓練的為 DOM 的建立與使用方法，以及選擇器的使用 document.querySelector 跟 CSS 的選擇方式大約相同。

HTML 要使用的 input 的父層 class 名稱要訂一個讓之後可以選取用。
觸發 submit 是 form 不是在 button 上。

GET 是把 form 裡面 name 的值直接放在網頁路徑上。
POST 是把form裡面 name 的值放在data裡面傳輸。


第7周:

hw1
用父層 item 的 class 名稱搭配要隱藏的 p 的 class 名稱來添加或移除在 item 上的 class 名稱控制隱藏或顯現。
如果仰賴結果是在全部都 true 的狀況下的話，一開始的設置為 false只讓成功的時候是 true這樣有另一狀況就維持原樣就好。
如果是最終成果也照此方式 讓小結果不等於 false (代表每個都有成功)，再讓最後結果(大結果) 為 true 。[範例請看: 4th week7 hw1]。

挑戰題
目前想法為將最父層用 hidden 遮住超過的畫面(這樣左右邊的就剛好能隱藏了)，然後用 flex 加上 order 以及用 animation 來製造出 slide 的效果。


第8周:

hw1
會在 js 裡面更改 style 的屬性就很簡單完成了。

hw2
Twitch 新版的要有 client-id 跟 token ， 記得設置頭部訊息 headers 就好。

option = 
{
    method: 'GET',
    headers: {
        'Client-Id': '你的ID',
        'Authorization': '你的token'  
    }
}
fetch(url,option)
.then(response => response.json())
.then(你要做的事情，參數隨便命名，為上一個 then return 的值)

hw3
不用表單送而用 Ajax 是為了能夠不用整個頁面重新整理，而是指更新了局部的資料，不用換頁就能即時更新頁面。
用起來會更靈巧靈敏不會還要整個重整很笨重，同源政策要再多看一下