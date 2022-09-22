import { NavLink } from 'react-router-dom';
import { Menu, Switch, } from 'antd';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import { useDispatch, useSelector } from 'react-redux';
import { onSpanish,onEnglish } from '../store/slices/statesSlice';



export const NavBar = () => {
    // const navigate = useNavigate();
    const spanish = useSelector((state) => state.states.spanish);
    const dispatch = useDispatch();
    

    const onChange = (checked) => {
        checked ? dispatch(onSpanish()) : dispatch(onEnglish());
    };
    
    const items = [
        { label: 
            (
                <NavLink to="/home">
                    {
                        spanish ? 'Inicio' : 'Home'
                    } 
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
                    {
                        spanish ? 'Contacto' : 'About'
                    } 
                </NavLink>
            ),
           key: 'about' 
        }, 
        { label: 
            (   
            <>
                <Switch checkedChildren="Spanish" unCheckedChildren="English" defaultChecked onChange={onChange} />
            </>
            
            ),
           key: 'language' 
        }
    ];

    return (
      <Menu mode="horizontal" items={items} />
    )
}
