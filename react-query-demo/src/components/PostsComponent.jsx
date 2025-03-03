import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Fetch function for posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // useQuery hook for fetching posts
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, {
    // Optionally, set a stale time to control caching behavior (in milliseconds)
    staleTime: 10000, // 10 seconds
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} style={{ marginBottom: '1rem' }}>
        Refetch Posts
      </button>
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