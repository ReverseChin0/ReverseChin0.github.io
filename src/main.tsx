import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import ReactDOM from 'react-dom/client'
// import MainApp from './MainApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>   
  <BrowserRouter>
    {/* <MainApp /> */}
    <AppRouter/>
  </BrowserRouter> 
  // </React.StrictMode>,
)
