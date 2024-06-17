import st from './style.module.css';

const Register = () => {
    return ( 
        <div className={st.Register}>
            <form >
                <div>
                <label htmlFor="name">your name</label>
                <input type="text" id="name"/>
                </div>

                <div>
                <label htmlFor="password1">password</label>
                <input type="password" id="password1"/>
                </div>

                <div>
                <label htmlFor="password2">password</label>
                <input type="password" id="password2"/>
                </div>

               <div>
               <label htmlFor="yesNo">yesNo</label>
               <input type="checkbox" id="yesNo"/>
               </div>

                <div>
                <label htmlFor="tel">tel</label>
                <input type="tel" id="tel"/>
                </div>

                <div>
                <label htmlFor="date">date</label>
                <input type="date" id="date"/>
                </div>

                <div>
                <label htmlFor="email">email</label>
                <input type="email" id="email"/>
                </div>

               <div>
               <label htmlFor="radio">radio</label>
                <input type="radio" id="radio"/>
                <input type="radio" id="radio"/>
               </div>
            </form>
        </div>
     );
}
 
export default Register;