"use client";
import { useState, ChangeEvent } from "react";
import { useLoginForm } from "./hooks/use-login";
export default function Page() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value);
    //     // e - event, target - element, value - current value of input
    // }
    const { 
        email, 
        password, 
        handleEmail, 
        handlePassword, 
        handleSubmit 
    } = useLoginForm(); // destructure returned object from hook
    
    const form = useLoginForm(); // entire object

    return (
        <div>
            <div>
                <label>Email:</label>
                <input type="email" value={form.email} onChange={form.handleEmail} />
            </div>

            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={form.password} 
                    onChange={ form.handlePassword } />
            </div>

            <button onClick={ form.handleSubmit }>Test</button>
        </div>
    );
}

// create a new url /example/register-input-form
// create a "component" RegisterFormTask 
// with username, email, password, confirm password
// use RegisterFormTask in the register page
// make a custom hook useRegisterForm to manage the form state and handlers
// create handleSubmit function that:
//  - validation, each field required, eg: if empty alert "Field is required"
//  - password and confirm password must match, if not alert "Passwords do not match"
//  - on successful validation, alert "Registration successful"
// use the hook in the RegisterFormTask component