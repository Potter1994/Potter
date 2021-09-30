1. 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫。

加密: 可逆，有被解密的風險。
雜湊: 不可逆，不能從雜湊結果回推算。相同內容為相同雜湊演算法的輸入，輸出必定一樣。不同的內容作為相同雜湊演算法的輸入，得到相同輸出的機率極低。
為了防止被輕易盜用密碼。



2. include、require、include_once、require_once 的差別

include : 引入文件的時候，如果碰到錯誤，會給出提示，並繼續運行下邊的代碼。
require : 引入文件的時候，如果碰到錯誤，會給出提示，並停止運行下邊的代碼。
require_once 、 include_once : 防止有相同的函式重複匯入，如果有重複匯入，第二次會報錯。



3.請說明 SQL Injection 的攻擊原理以及防範方法

主要使用單引號為主或其他特殊字元，來改變 sql 語法來繞過某些驗證，竊取資料庫內容甚至刪除你的資料庫。
解決方法就是將語法的值都用變數來代替，使用 prepare 的 statement 再約束變數 bind_param 來防範。



4.請說明 XSS 的攻擊原理以及防範方法

使用角括號注入 Javascript 
<script>alert('xss')</script> 來達到他想要的東西，或是各式各樣 
<img scr=1 onerror=alert('xss')>
<img src=x onerror=appendChild(createElement('script')).src='js_url' />
等之類的語法來攻擊。防範方法主要為讓跳脫字元 (escape) 不要起到作用。

服務端防範:
    1. HttpOnly 限制 Javascript 不能讀取 cookie，防止會話 ID 洩漏。
    2. 處理敏感標籤，例如(script、iframe、form)，還有敏感詞(javascript:)等等。
客戶端防範:
    1. 輸入檢查 防止輸入敏感字段，例如javascript、cookie等等。
    2. 檢查輸出 腳本都是透過混淆再 HTML 當中，被當成 HTML 代碼的一部分才得到執行。
        透過編碼轉義，目前有三種方法
        *1.  HTML encode*
        *2.  JavaScriptEncode*
        *3.  URL Encode*




5. 請說明 CSRF 的攻擊原理以及防範方法
    透過竊取 cookie 來假裝你的身分。

防範:
    1. 檢查 referer欄位，如果不是認定的網站發出來一律不接受。 初步防禦 CSRF。
    2. 加入驗證token，讓攻擊者拿不到 Token，這個 Token 由 Server 產生再加密存在 session 中，讓人無法仿造。
