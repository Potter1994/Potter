import React from "react";

function About() {
  return (
    <div className="hole-page">
      <div className="page-title">About Blog</div>
      <div>
        <h3>使用 redux-middleware 來寫 blog</h3>
        <p>
          除了增加這兩個功能以外，我們原本 user 的資料是存在
          context，這週的作業要請你把 context 拔掉，改用 redux
          來存這個資訊。所以資料的更新也必須透過 redux。
        </p>
      </div>
    </div>
  );
}

export default About;
