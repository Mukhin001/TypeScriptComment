import UserLogin from "./components/userLogin/UserLogin";
import st from './style.module.css';

const App = () => {
    return ( 
        <div className={st.App}>
            <UserLogin />
        </div>
     );
}
 
export default App;