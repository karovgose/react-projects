import React, { useState, useEffect } from "react";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const loadMorePost = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 1);
  };

  return (
    <div className="post-list-container">
      <h2 className="post-list-title">Post List</h2>
      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <div>
          <ul className="post-list">
            {posts.slice(0, visiblePosts).map((post) => (
              <li key={post.id} className="post-item">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-body">{post.body}</p>
              </li>
            ))}
          </ul>
          {visiblePosts < posts.length && (
            <button className="load-more-button" onClick={loadMorePost}>
              More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PostList;
