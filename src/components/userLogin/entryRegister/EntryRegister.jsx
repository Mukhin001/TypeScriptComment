import { NavLink } from 'react-router-dom';
import st from '../style.module.css';


const EntryRegister = () => {
    return ( 
        <>
            <div className={st.EntryRegister}>
                <ul>
                    <li><NavLink to="/Login">Login</NavLink></li>
                    <li><NavLink to="/Register">Register</NavLink></li>
                </ul>
            </div>
        </>
     );
}
 
export default EntryRegister;