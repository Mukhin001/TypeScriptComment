import EntryRegister from "./entryRegister/EntryRegister";
import Login from "./entryRegister/login/Login";
import Register from "./entryRegister/register/Register";
import st from './style.module.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const UserLogin = () => {
    return ( 
       <div>
            <Router>
                <div className={st.UserLogin}>
                    <button className={st.btnUserLogin}>
                        Entry
                        <EntryRegister /> 
                    </button>
                </div>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </Router>
       </div>
     );
}
 
export default UserLogin;