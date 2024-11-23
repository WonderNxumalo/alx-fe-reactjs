
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};

const PostsComponent = () => {
    const { isLoading, error, data, refetch } = useQuery('posts', fetchPosts);
    if (isLoading) return <p>Loading posts...</p>;
    if (error) return <p>Error fetching posst: {error.message}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button onClick={refetch}>Refetch Post</button>
        </div>
    );
};

export default PostsComponent;

/* isError */