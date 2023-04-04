

import  {ReactQueryDevtools}  from '@tanstack/react-query-devtools';
import ArticleCollection from './../Components/articleCollection';

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
export default function Home() {
  const queryClient = new QueryClient()



  return (
  
    <QueryClientProvider client={queryClient}>
    
     <ArticleCollection />

 
</QueryClientProvider>

  )
}
