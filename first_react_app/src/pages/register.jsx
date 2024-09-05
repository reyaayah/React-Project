import { useState } from "react";
import CustomFormField from "../components/CustomFormField";
import "../styles/register.css"

const Register=()=>{
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [gender, setGender] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        if(email.length==0){
            alert("Please enter email");
            return
        }
        if(password.length<6){
            alert("Please enter a strong password.")
            return
        }
        if(password==confirmpassword){
            alert("Password doesnot match")
            return
        }
        if(gender==null){
            alert("Please choose gender")
        }
        console.log("email = ", email)
        console.log("password = ",password)
        console.log("fullname =",fullname);
        console.log("username =",username);
        console.log("phonenumber =",phonenumber);
        console.log("confirmpassword = ",confirmpassword);
        console.log("gender =",gender);
    }
    const handleFullnameChange = (event) => {
        setFullname(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePhonenumberChange = (event) => {
        setPhonenumber(event.target.value)
    }
    const handleConfirmpasswordChange = (event) => {
        setConfirmpassword(event.target.value)
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }
    return(
        <div className="register-container">
        <form onSubmit={handleSubmit}>
        <div id="register-box">
        <h1>Registration</h1>
        <div className="reg-row-field">
        <CustomFormField
                    label="Full name"
                    cName="fullname"
                    placeholder="Enter your Full Name"
                    type="text"
                    value={fullname}
                    onChange={handleFullnameChange}

                />
                <CustomFormField
                    label="Username"
                    cName="username"
                    placeholder="Enter your User Name"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />            
        </div>
        <div className="reg-row-field">
        <CustomFormField
                    label="Email"
                    cName="email"
                    placeholder="Enter your Email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}

                />
                <CustomFormField
                    label="Phone Number"
                    cName="phonenumber"
                    placeholder="Enter your Phone Number"
                    type="text"
                    value={phonenumber}
                    onChange={handlePhonenumberChange}
                    
                />
        </div>
        <div className="reg-row-field">
        <CustomFormField
                    label="Password"
                    cName="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}

                />
                <CustomFormField
                    label="Confirm Password"
                    cName="confirmpassword"
                    placeholder="Re-Enter your Password"
                    type="password"
                    value={confirmpassword}
                    onChange={handleConfirmpasswordChange}
                />
        </div>
       
       <div className="gender-field">
       <h3>Gender</h3>
       <div className="gender-options">
                <div className="gender">
                    <input type="radio" value="Male" name="gender" onChange={handleGenderChange} /><p>Male</p>
                </div>
                <div className="gender">
                    <input type="radio" value="Female" name="gender" onChange={handleGenderChange}/><p>Female</p>
                </div>
                <div className="gender">
                    <input type="radio" value="Prefernottosay" name="gender" onChange={handleGenderChange} /><p>Prefer not to say</p>
                </div>
        </div>
       </div>
        <div id="register-button">
                    <input type="submit" value="Register" />
                </div>

        </div>
        </form>
        </div>
        
    );
}
export default Register