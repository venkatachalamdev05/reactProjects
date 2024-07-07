import { signInWithPopup } from "firebase/auth";
import React from "react"
import { Button } from "react-bootstrap";
import { auth, provider } from "../firebase";

const Login = (props) => {

    function loginWithGoogle() {
        signInWithPopup(auth, provider)
            .then(function () {
                console.log("Sign In Success")
            })
            .catch(function () {
                console.log("Sign In Not Success")
            })
    }

    return (
        <>
            <Button onClick={loginWithGoogle}>Login</Button>
        </>
    )
};

export default Login;
