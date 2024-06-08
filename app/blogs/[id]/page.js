import { blogs } from '@/app/data/blogs';
import React from 'react';

export  function generateStaticParams() {
  return blogs.map(blog => {
    id: blog.id;
  })
}

const SingleBlog = ({ params }) => {
  const  {id}  = params;
  
  const blog = blogs.find(b => b.id === id);
  const { title, des } = blog;

  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{des}</p>
     
    </div>
  );
};
export default SingleBlog;