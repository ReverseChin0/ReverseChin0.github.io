import { NavLink } from 'react-router-dom'
import '../styles/NavComponent.css'
import { SwitchComponent } from './SwitchComponent'

export const NavComponent = () => {
  return (
    <>
      <header className="flexNavBox">
        <NavLink className="btn navBtn anim-circle" to="/home"> Home </NavLink>
        <NavLink className="btn navBtn anim-circle" to="/experiments"> Experiments </NavLink>
        <NavLink className="btn navBtn anim-circle" to="/materials"> Materials </NavLink>
        <NavLink className="btn navBtn anim-circle" to="/websites"> Pages </NavLink>
        <NavLink className="btn navBtn anim-circle" to="/models"> Models </NavLink>
        <NavLink className="btn navBtn anim-circle" to="/about"> About </NavLink>
        <NavLink className="btn navBtn anim-circle" to="/utils"> Utils </NavLink>
        <SwitchComponent/>
      </header>
    </>
  )
}
