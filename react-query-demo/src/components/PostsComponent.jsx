import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Fetch function for posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // useQuery hook for data fetching, caching, and updating
  const { data, isLoading, isError, error } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error fetching posts: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {data.map(post => (
        <div key={post.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
