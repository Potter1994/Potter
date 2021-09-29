加強完成留言板

1. 密碼經過 hash 取得資料後也使用 password_varify 進行對比。
2. 使用 prepare 句型用變數帶入來防止 SQL Injection 。
3. 使用 htmlspecialchars 來將跳脫字符 (escape) 作為直接輸出在 html 代碼。

新增身份權限系統，以及延伸挑戰題也都完成，