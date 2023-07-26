import React, { useState } from "react";
import "../assets/css/login_signup.css"; // Assuming you have the CSS file for styling
import { makeStyles } from "@mui/styles";
import Whatsapp_icon from "../components/whatsapp_icon";
const useStyles = makeStyles((theme) => ({
    // Add your Material-UI styles here
    cont: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f1f1f1",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    h2: {
        marginBottom: "20px",
        textAlign: "center",
    },
    label: {
        marginBottom: "15px",
    },
    input: {
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    forgotPass: {
        marginTop: "10px",
        textAlign: "right",
        fontSize: "14px",
        cursor: "pointer",
    },
    submit: {
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#4caf50",
        color: "#ffffff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    img: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    imgText: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: "14px",
    },
    imgBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    },
    mIn: {
        marginRight: "20px",
    },
    mUp: {
        marginLeft: "20px",
    },
    hidden: {
        display: "none",
    },
    signUpForm: {
        display: "none",
    },
    signUpFormVisible: {
        display: "flex",
    },
}));

function LoginSignupPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleToggle = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setFormData({ name: "", email: "", password: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission logic, like making an API call
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", password: "" });
    };
    const classes = useStyles();
    return (
        <div className="cont">
            <div className={`form ${isSignUp ? "sign-up" : "sign-in"}`}>
                <h2>{isSignUp ? "Create your Account" : "Welcome"}</h2>
                {isSignUp && (
                    <label>
                        <span>Name</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                )}
                <label>
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                {!isSignUp && <p className="forgot-pass">Forgot password?</p>}
                <button type="submit" className="submit">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </button>
            </div>

            <div className="sub-cont">
                <div className="img">
                    <div className={`img__t ${isSignUp ? "m--up" : ""}`}>
                        <h3>Don't have an account? Please Sign up!</h3>
                    </div>
                    <div className={`img__text ${isSignUp ? "" : "m--in"}`}>
                        <h3>If you already have an account, just sign in.</h3>
                    </div>
                    <div className="img__btn" onClick={handleToggle}>
                        <span className={`m--up ${isSignUp ? "hidden" : ""}`}>Sign Up</span>
                        <span className={`m--in ${isSignUp ? "" : "hidden"}`}>Sign In</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignupPage;