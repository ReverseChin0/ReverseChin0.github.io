import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './myrouter/AppRouter';
import ReactDOM from 'react-dom/client'
// import MainApp from './MainApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>   
  <BrowserRouter basename="/ReverseChin0.github.io">
    {/* <MainApp /> */}
    <AppRouter/>
  </BrowserRouter> 
  // </React.StrictMode>,
)
