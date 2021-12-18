import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Article() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("effect");
    if (!user.isLogin) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="hole-page">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>新增文章</h1>
        <div>
          <label>
            Title:
            <br />
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Post Text:
            <br />
            <textarea cols="30" rows="10"></textarea>
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Article;
