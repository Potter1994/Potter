hw2

1. 登入機制，設置 SESSION 辨別如果沒有辨別出來則無法進入管理後台，導回前台。

2. 跟 hw1 的留言板都有做過練習，注意將 SQL injection 的攻擊，用 prepare 的 statement 防禦。

3. 承第 2 點，記得在前台防止標題與內容為空，後台也需要再防止，兩道防線。

4. 承第 2 點，在前台可多做一個 confirm('確定刪除') 用 if 來辨別是否為確定 (true) 在執行 ajax 刪除。

5. CKEditor 目前沒時間多去研究，在資安方面花了有點多時間困擾。

6. sql 語法設置 LIMIT ，延伸挑戰做了分頁最後再講解解法。

7. 這些 echo 出來的內容要做 htmlspecialchars(字串內容,ENT_QUOTES); 去除角括號等特殊字元防範 XSS 攻擊。
   使用 mb_strlen(字串內容) 來判別內容長度，如果超長使用 mb_substr(字串內容, 起始位置, 多少字元, 'utf-8');
   因為我們使用中文所以字元的算法需要加上這個 mb 才會是中文長度。


延伸挑戰: 
    分頁機制:
        將資料庫內容總筆數取出                  $total;
        設置自己想要顯示多少筆內容               $limit;
        用 ceil($total / $limit) 取得總共幾頁  %sum_page;
        使用 $_GET['p'] 的值為變數                 $page;
        計算顯示偏移量 ($page - 1) * $limit 為變數 $offset; // 這個 offset 即為當前這頁的筆數資料。

        sql語法:$sql = "SELECT * FROM `article` LIMIT $offset,$limit";
                                                      起始位置,幾筆資料
                                                       
        剩下微調整，上、下一頁以及頁數 1 2 3 ...