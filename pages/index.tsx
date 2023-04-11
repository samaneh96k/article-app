

import  {ReactQueryDevtools}  from '@tanstack/react-query-devtools';

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import SignInForm from '@/Components/common/InputForm';


export default function Home() {
  const queryClient = new QueryClient()

  // I want to create a multi-step registration form with a status bar that is nicely styled with the help of Tailwind

  return (
  
    <QueryClientProvider client={queryClient}>
      <SignInForm/>
<ReactQueryDevtools/>
 
</QueryClientProvider>

  )
}
