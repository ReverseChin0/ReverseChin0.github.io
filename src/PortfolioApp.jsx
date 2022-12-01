import { useSelector } from 'react-redux';
import { NavComponent } from './components/NavComponent';
import './PortfolioApp.css'
import { AppRouter } from './router/AppRouter';

function PortfolioApp() {
  const darkmode = useSelector((state) => state.states.darkmode);
  return (
    <>
    <div className={`allContainer ${darkmode ? "dark":""}`}>
      <div className="gridContainer">
          <div className="navCell"><NavComponent/></div>
            <div className="fixedContentCell">
              <div className="contentCell">
                <AppRouter/>
              </div>
          </div>
        </div>  
    </div>

    </>
  )
}

export default PortfolioApp
