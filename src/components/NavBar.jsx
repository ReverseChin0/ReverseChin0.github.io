import { NavLink } from 'react-router-dom';
import { Menu, } from 'antd';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

const items = [
    { label: 
        (
            <NavLink to="/home">
                Home
            </NavLink>
        ), key: 'home'}, 
    { label: 
        (
            <NavLink to="/demo">
                Demo
            </NavLink>
        ),
       key: 'demo' }, 
    { label: 
        (
            <NavLink to="/about">
                About
            </NavLink>
        ),
       key: 'about' 
    }, 
  ];

export const NavBar = () => {
    // const navigate = useNavigate();

    return (
      <Menu mode="horizontal" items={items} />
    )
}
