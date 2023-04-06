import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import React from 'react'

const ArticleCollection = () => {
    const fetcher: any = async ()=> {
        const {data}=await axios.get(`https://dev.to/api/articles`)
      return data;
      }
      const { isLoading, error, data:collection } = useQuery<[], Error>({queryKey: ['articles'],
      queryFn: fetcher })
 
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' 
  return (
      <>
      {collection.map((a :any)=> (
       <div  key={a.id} className='flex bg-gray-100 mb-3 py-5 px-5 '>
          <h1>{a.title}</h1>
          <div className='flex mx-10'>{a.tag_list.map((tag: any) => <p className='bg-white p-2 mx-2'>{ tag}</p>)}</div>
       </div>
   ))}
      </>
  )
}

export default ArticleCollection