import { createContext } from 'react';
import postsData from 'src/posts/posts.json';

const PostsData = createContext(postsData);

export default PostsData;