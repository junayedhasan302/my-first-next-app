import React from "react";

const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h2>Posts Page: {posts.length}</h2>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-sm"
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>

              <p>{post.body}</p>

              <p>User ID: {post.userId}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;