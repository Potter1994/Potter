
*** 部署AWS EC2遠端主機 + Ubuntu LAMP 環境 + phpmyadmin ***

-- 1. 創立AWS帳號以及申請虛擬主機
在Amazon Services 選 EC2 然後 Launch Instance;
選擇作業系統 Ubuntu Server 最新版;
下一步到步驟 6 設定 Configure Security Group 增加 port 80 , port 443 (之後也是能再增加);
完成後會跳出選擇私鑰的視窗,選擇 create a new kry pair，名稱自訂並下載下來;
回到 EC2 頁面 running instances; (如果重開機過IP好像會改變)



--2. 設定LAMP環境 *** Linux系統下使用 ***
chomd 400 <私鑰路徑>; (將鑰匙權限提高)  ***  ***
用 CLI ssh連線遠端主機 (AWS EC2頁面有 Connect 按鈕裡面有指令給你);

開始設定 LAMP;
更新 => ubuntu 系統 $ sudo apt update && sudo apt upgrade && sudo apt dist-upgrade;
安裝 => Tasksel $ sudo apt install tasksel;
用 Tasksel 下載 lamp-server => $ sudo tasksel install lamp-server;

--3. 設定 phpmyadmin;
下載 phpmyadmin => $ sudo apt install phpmyadmin;
記得連接 apache2（要按空白鍵，有顯示＊字號）;
是否設定 dbconfig-common => y;

改變 phpmyadmin 登入的設定，改成可以用密碼登入;
$ sudo mysql -u root mysql;
進入 sql 指令, 輸入 => $ UPDATE user SET plugin='mysql_native_password' WHERE User='root'; 
		  $ FLUSH PRIVILEGES; (刷新MySQL的系統權限相關表，否則會出現拒絕訪問)
離開 sql 指令           => $ exit;
設定 root 的密碼 => $ sudo mysql_secure_installation; (可以y到底 密碼強度0-2給你選擇);

--4. 網頁放置路徑 /var/www/html;
更改權限 $ sudo chown ubuntu /var/www/html;
環境設置結束;
買域名 Domain name;
將 DNS 控制台 類型 A 的值 = AWS EC2 IPv4的值;


*** 在 Ubuntu 20.04 安裝 Apache 網頁伺服器，並架設多個網站（多網域） ***

--1. 安裝 Apache
$ sudo apt update && sudo apt install apache2

--2. 設置防火牆（Configure Firewall）
$ sudo ufw allow OpenSSH
可以為 Apache 添加防火牆規則
$ sudo ufw allow in "Apache Full"
啟用防火牆
$ sudo ufw enable
可以通過以下方式檢查當前的防火牆狀態
$ sudo ufw status

--3. 測試 Apache
要查看 Apache 是​​否安裝正確，我們可以檢查當前的 Apache 服務狀態
$ sudo service apache2 status
如果它已啟動並正在運行，會看到綠色的活動（Active）狀態
到此為止已經都設置好了！可以在文件夾 /var/www/html 中找到這個 Apache 默認歡迎頁面

--4. 設置虛擬主機（Virtual Hosts）
這邊原文是要建立多網域但是我只是要了解主機文件的東西所以不贅述。

*** --4.3. 建立虛擬主機文件（Virtual Host Files）***
虛擬主機文件位於 /etc/apache2/sites-available/ 中，其用於告訴 Apache 網頁伺服器如何響應（Respond ）各種網域請求（Request）。
為 test1.ui-code.com 網域創建一個新的虛擬主機文件。
$ sudo vim /etc/apache2/sites-available/test1.ui-code.com.conf
將以下內容貼上：
    <VirtualHost *:80>
        ServerAdmin webmaster@test1.ui-code.com
        ServerName test1.ui-code.com
        ServerAlias www.test1.ui-code.com
        DocumentRoot /var/www/test1.ui-code.com/public_html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
請必須將所有的 test1.ui-code.com 更改為你自己的域名。

--4.4. 啟用新的虛擬主機文件（Virtual Host Files）
虛擬主機文件，我們需要使用 a2ensite 工具來啟用它
$ sudo a2ensite test1.ui-code.com
測試配置語法是否有錯誤。
$ apachectl configtest
如果「Syntax OK」，重啟 Apache。
$ sudo systemctl reload apache2

--5. 設置 Apache
現在已經啟用並運行了 Apache，但可能會有一些常見配置可以更改，以下依照個人需求判斷是否需要修改。

--5.1. 啟用 AllowOverride
.htaccess 在 Apache 中默認會被忽略。如果這是你會使用到的東西，我們可以通過更改 Apache 配置文件來啟用它。
首先，備份配置文件。
$ sudo cp /etc/apache2/apache2.conf /etc/apache2/apache2.conf.bak
打開配置文件。
$ sudo vim /etc/apache2/apache2.conf
蒐索 <Directory /var/www/>。或者，向下滾動到以下部分：
    <Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>
AllowOverride None 代表 .htaccess 會被忽略。將它更改為 AllowOverride All。
保存並退出，重啟 Apache。
$ sudo systemctl reload apache2

--5.2. 禁用目錄列表（Disable Directory Listing）
預設情況下，Apache 將列出沒有索引（index.html、index.php）的目錄內容。這會有安全風險，因為它可能允許駭客任意瀏覽你的網頁伺服器。
可以通過從 Apache 配置文件中刪除索引（下面的Indexes部分）來禁用此功能。
    <Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

--5.3. 啟用 mod_rewrite
如果想在 .htaccess 中配置一些規則，會需要啟用 mod_rewrite。
$ sudo a2enmod rewrite
重啟 Apache。
$ sudo systemctl reload apache2


*** 為 Ubuntu 20.04 上的 Apache 配置 Let’s Encrypt SSL 憑證 ***

--1. 安裝 Let’s Encrypt 客戶端（Certbot）
$ sudo apt update && sudo apt install certbot python3-certbot-apache

--2. 取得 SSL 憑證（Certificate）
我們現在將為我們的測試網域 test1.ui-code.com 獲取證書。 Certbot 有一個 Apache 插件，可以自動安裝證書。
$ sudo certbot --apache


以上關於取得 SSL 憑證內容完整請詳讀:
在 Ubuntu 20.04 安裝 Apache 網頁伺服器，並架設多個網站（多網域）:https://ui-code.com/archives/271;
為 Ubuntu 20.04 上的 Apache 配置 Let’s Encrypt SSL 憑證:https://ui-code.com/archives/305;










參考資料來源:

一小時完成 VPS (Virtual Private Server) 部署:https://github.com/Lidemy/mentor-program-2nd-futianshen/issues/21;
在 Ubuntu 20.04 安裝 Apache 網頁伺服器，並架設多個網站（多網域）:https://ui-code.com/archives/271;
為 Ubuntu 20.04 上的 Apache 配置 Let’s Encrypt SSL 憑證:https://ui-code.com/archives/305;
如何強制把 HTTP 導向 HTTPS，打造更安全的加密網站:https://km.nicetypo.com/doc/845aab44f5f0fb2f3aed10e6f71d7a21;


