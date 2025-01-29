import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import AppLayout from './pages/AppLayout';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles/>
        <AppLayout/>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
