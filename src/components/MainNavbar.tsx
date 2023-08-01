import './MainNavbar.css'

interface NavProps{
  activeSection:number;
  scrollHandler:(arg:string) => void;
}

export const MainNavbar: React.FC<NavProps> = ({activeSection=0,scrollHandler}) => {

  return (
    <header>
      <nav className="sticky">
        <div className="nav-inner">
          <span onClick={()=>scrollHandler('¡Hi!')}        className="logo">CHINO</span>
          <li onClick={()=>scrollHandler('¡Welcome!')}    className={activeSection >= 0 && activeSection < 2 ? 'activeNav':''}>Home</li>
          <li onClick={()=>scrollHandler('Web Developments')} className={activeSection == 2 ? 'activeNav':''}>WebDev</li>
          <li onClick={()=>scrollHandler('Assertive Soccer')} className={activeSection >= 3 && activeSection < 5 ? 'activeNav':''}>Games</li>
          <li onClick={()=>scrollHandler('Shaders')}         className={activeSection >= 5? 'activeNav':''}>Gallery</li>          
        </div>        
      </nav>
    </header>    
  )
}
