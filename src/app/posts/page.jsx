import Link from 'next/link';
import { Roboto } from "next/font/google";

// set google font 
const roboto = Roboto({
    weight: ['400', '600', '700'],
    subsets: ["latin"],
})

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

export const metadata = {
    title: "All Posts",
    description: "Loading JSON placeholder post using server component",
};


const Posts = async () => {
    const posts = await getPosts()
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                posts?.map(post => {
                    return (
                        <div key={post.id}
                            className={`${roboto.className} border p-4 rounded-xl`}
                        >
                            <h1>{post.id}</h1>
                            <h1>{post.title}</h1>
                            <h1>{post.body}</h1>
                            <Link href={`posts/${post.id}`}>
                                <button className='p-2 border mt-2 rounded-md bg-blue-500'>Details</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Posts;