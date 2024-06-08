import React from 'react';
import { blogs } from '../data/blogs';
import BlogItem from '../components/BlogItem';
import Link from 'next/link';

const Blogs = () => {
  return (
    <div className='p-8'>
      <h2 className="text-2xl">Blog page</h2>
      <div className='mt-8'>
        {
          blogs.map(blog => <Link key={blog.id} href={`/blogs/${blog.id}`}><BlogItem  title={blog.title}></BlogItem></Link>)
        }
      </div>
    </div>
  );
};

export default Blogs;