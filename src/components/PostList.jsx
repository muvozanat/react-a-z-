import React from "react";
import PostItem from "./PostItem";
import MyLoader from "./UI/Loader/MyLoader";

const PostList = ({ posts, remove, loading, erroring }) => {
  if (erroring) {
    return (
      <h1 style={{ marginTop: 50, color: "#ff0000", textAlign: "center" }}>
        Xatolik: ${erroring}
      </h1>
    );
  }
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <MyLoader />
      </div>
    );
  }

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>Postlar yo'q</h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>Ro'yhat</h1>
      {posts.map((post, index) => {
        return (
          <PostItem
            remove={remove}
            number={(index += 1)}
            key={post.id}
            post={post}
          />
        );
      })}
    </div>
  );
};

export default PostList;
