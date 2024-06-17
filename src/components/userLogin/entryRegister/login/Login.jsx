import st from './style.module.css';

const Login = () => {
    return ( 
        <>
            <div className={st.Login}>
                <form action="">
                   <div>
                   <label htmlFor="name">name</label>
                   <input type="text" id='name'/>
                   </div>

                    <div>
                    <label htmlFor="password">password</label>
                    <input type="text" id='password'/>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default Login;