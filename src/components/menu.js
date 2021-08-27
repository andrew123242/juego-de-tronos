import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavLink } from 'react-router-dom';
import '../assets/css/menu.css'
import imagen from '../assets/images/daenerys.jpg'
import logo from '../assets/images/logo gameofthrones.png'
class menu extends react.Component {
    render() {
        return (
            <react.Fragment>
                <div className="parent">
                    <img className="img1" src={imagen}/>
                    <img className="img2" src={logo}/>
                    <nav>
                        <NavLink to='./home' className='btn btn-dark'>HOME</NavLink>
                        <NavLink to='./amorios' className='btn btn-dark'>AMORIOS</NavLink>
                        <NavLink to='./Dragones' className='btn btn-dark'>DRAGONES</NavLink>
                        <a href="#" className='btn btn-dark'>DECAPITAR</a>
                        <div id="indicator"></div>
                    </nav>
                </div>
            </react.Fragment >
        )
    }
}
export default menu;