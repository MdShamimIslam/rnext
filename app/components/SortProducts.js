'use client'

import { useSearchParams } from 'next/navigation'

const SortProducts = () => {
  const searchParams = useSearchParams();

    const updateSorting = (sortOrder) =>{
      const params = new URLSearchParams(searchParams.toString());
      params.set('sort', sortOrder);
      window.history.pushState(null, '', `?${params.toString()}`);
    }
    return (
      <>
        <button className='bg-yellow-700 mr-4 px-3 py-2 rounded mt-4' onClick={() => updateSorting('asc')}>Sort Ascending</button>
        <button className='bg-yellow-700 px-3 py-2 rounded mt-4' onClick={() => updateSorting('desc')}>Sort Descending</button>
      </>
    )
  
};

export default SortProducts;