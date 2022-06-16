import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = ({ post, post: { title, body }, number, remove }) => {
  return (
    <div>
      <div className="post">
        <div className="post_content">
          <strong>
            {number}. {title}
          </strong>
          <div>{body}</div>
        </div>
        <div className="post__btn">
          <MyButton onClick={() => remove(post)}>O'chirish</MyButton>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
