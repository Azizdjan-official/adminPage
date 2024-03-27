import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { clientQuery } from './config/queryclient';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={clientQuery}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
)
