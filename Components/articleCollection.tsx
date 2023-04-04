import { useQuery } from '@tanstack/react-query'

import React from 'react'

const ArticleCollection = () => {
    const fetcher: any = async ()=> {
        const res=await fetch(`https://jsonplaceholder.typicode.com/comments`)
      return  res.json()
      }
      const { isLoading, error, data } = useQuery({queryKey: ['articles'],
      queryFn: fetcher })
    console.log(data)
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' 
  return (
      <>
    <h1>ssssss</h1>
      </>
  )
}

export default ArticleCollection