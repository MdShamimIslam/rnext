import React from 'react';

const BlogItem = ({title}) => {
  return (
    <div className='mt-4'>
      <h2 className="text-xl">{ title}</h2>
    </div>
  );
};

export default BlogItem;