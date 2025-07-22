import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-white text-black mb-8 py-2'>
            <ul className='flex justify-between mx-auto px-20 lg:px-4- '>
                <Link href='/'>
                    <li>Home</li>
                </Link>
                <Link href='/posts'>
                    <li>Posts</li>
                </Link>
                <Link href='/meals'>
                    <li>Meals</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navbar;