import { NavLink } from 'react-router-dom';
import { Menu, Switch, } from 'antd';
import 'antd/dist/antd.less';
import { useDispatch, useSelector } from 'react-redux';
import { onSpanish,onEnglish } from '../store/slices/statesSlice';
import { useState } from 'react';



export const NavBar = () => {
    // const navigate = useNavigate();
    const spanish = useSelector((state) => state.states.spanish);
    const dispatch = useDispatch();
    const [selectedKeys, setSelectedKeys] = useState(['']);

    const onChange = (checked) => {
        checked ? dispatch(onEnglish()) : dispatch(onSpanish());
    };

    const selectedKeysHandler = (e) => {
        if(e.key === 'language') return;
        setSelectedKeys([e.key]);
    }
    
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
                <Switch checkedChildren="English" unCheckedChildren="Español" defaultChecked onChange={onChange} />
            ),
           key: 'language', 
        }
    ];

    return (
      <Menu 
        mode="horizontal" 
        items={items} 
        style={{justifyContent:'center', padding:'0.5rem 0'}} 
        selectedKeys={selectedKeys} 
        onSelect={selectedKeysHandler}/>
    )
}
