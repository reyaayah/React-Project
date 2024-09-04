import CustomFormField from "../components/CustomFormField";
import "../styles/register.css"

const Register=()=>{
    return(
        <>
        <div id="register-box">
        <h1>Registration</h1>
        <div className="reg-row-field">
        <CustomFormField
                    label="Full name"
                    cName="fullname"
                    placeholder="Enter your Full Name"
                    type="text"

                />
                <CustomFormField
                    label="Username"
                    cName="username"
                    placeholder="Enter your User Name"
                    type="text"
                />
                
        </div>
        <div className="reg-row-field">
        <CustomFormField
                    label="Email"
                    cName="email"
                    placeholder="Enter your Email"
                    type="text"

                />
                <CustomFormField
                    label="Phone Number"
                    cName="phonenumber"
                    placeholder="Enter your Phone Number"
                    type="text"
                />
        </div>
        <div className="reg-row-field">
        <CustomFormField
                    label="Password"
                    cName="password"
                    placeholder="Enter your password"
                    type="text"

                />
                <CustomFormField
                    label="Confirm Password"
                    cName="confirmpassword"
                    placeholder="Confirm Password"
                    type="text"
                />
        </div>
        <h1>Gender</h1>
        <div className="gender-field">
        <label className="gender-option">
        <CustomFormField
            cName="gender"
            type="radio"
            value="male"
        />
        Male
    </label>
    <label className="gender-option">
        <CustomFormField
            cName="gender"
            type="radio"
            value="female"
        />
        Female
    </label>
    <label className="gender-option">
        <CustomFormField
            cName="gender"
            type="radio"
            value="prefer_not_to_say"
        />
        Prefer not to say
    </label>
        </div>
        <div id="register-button">
                    <input type="submit" value="register" />
                </div>

        </div>
        
        </>
    );
}
export default Register