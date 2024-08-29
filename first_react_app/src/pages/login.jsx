import Navbar from "../components/navbar"
import "../styles/home.css"

const Login=()=>{
    return(
        <>
        <Navbar title={"login"}/>
        <h1>login Page</h1>
        <form action="">
            <div id="form-box">
            <div>
                <p>Email</p>
                <input type="text" placeholder="Enter your name" />
            </div>
            <div>
                <p>Password</p>
                <input type="text" placeholder="Enter your password" />
            </div>
            <div>
                <button>Login</button>
            </div>
            </div>
           
        </form>
        </>
    );
}
export default Login