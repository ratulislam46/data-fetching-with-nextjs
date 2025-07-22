import React from 'react';

const getSinglePosts = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json();
    return data;
}

const page = async ({ params }) => {
    const post = await params;
    console.log(post);
    const singlePost = await getSinglePosts(post.id)
    console.log(singlePost);
    return (
        <div className='border rounded-md p-4'>
            <h1>Post id : {singlePost.id}</h1>
            <h1 className='text-2xl font-bold'> {singlePost.title}</h1>
            <h1 className='text-gray-400'>{singlePost.body}</h1>
        </div>
    );
};

export default page;