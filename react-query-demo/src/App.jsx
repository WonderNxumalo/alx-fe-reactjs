import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import PostComponent from './assets/components/PostComponent';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <PostComponent />
    </QueryClientProvider>
  )
}

export default App
