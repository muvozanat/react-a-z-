import React, { useEffect, useState } from "react";
import { usePosts } from "./hooks/useHooks";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import "./styles/App.css";
import PostService from "./API/PostService";
import { useFetching } from "./hooks/useFetching";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll();
    setPosts(response.data);
  });

  useEffect(() => {
    fetchPosts();
  }, [filter.query]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ margin: "15px 0" }} onClick={() => setModal(true)}>
        Post Yaratish
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        erroring={postError}
        loading={isPostLoading}
        remove={removePost}
        posts={sortedAndSearchPosts}
      />
    </div>
  );
};

export default App;
