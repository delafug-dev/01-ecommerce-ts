import { UseUser } from '../../hooks/UseUser';
import '../../styles/login-styles.css';

export const Login = () => {

  const {user, email,login, logout, onChangeUser, onChangeEmail} = UseUser();

  return (
    <div id="loginWrap">
        <div id="loginHeader">
            <h2>User Login</h2>
        </div>    
        <div id="loginBody">
            <form>                
                <input type="text" placeholder="asd" value={user} onChange={onChangeUser}/>
                <input type="email" placeholder="asd@gmail.com" value={email} onChange={onChangeEmail}/>    
            </form>
            <button id="loginBtn" onClick={login}>Sign In</button>
            <button id="loginBtn" onClick={logout}>Logout</button>
        </div>
         
    </div>
  )

}
