import Head from "next/head";
import styles from "../styles/index.module.css";
import dynamic from "next/dynamic"; // Dynamic import for the component to be rendered on the client side only (not on the server side) to avoid the error "window is not defined" when using the window object 
import { signIn, signOut, useSession } from "next-auth/react";
import AppContext from "../../AppContext";

const SignIn = () => {

const { data: session } = useSession();
// console.log(session);

const lgin = () => {
  signIn("google", { callbackUrl: "https://listedtask.vercel.app/Dashboard" }); 
  
  
  
};

function handleSubmit(e)
{
e.preventDefault();

}






  return (
    <div className={styles.signIn}>
      <div className={styles.rightSide} id="sign-in-main" />
      <section className={styles.leftSide} id="Board" />
      <b className={styles.board}>Board.</b>



      <form className={styles.loginForm}>
        <div className={styles.card}>
          <div className={styles.card1} />
        </div>
        <div className={styles.inputField}>
          <input
            className={styles.inputField1}
            type="text"
            required
            id="email"
          />
        </div>
        
        <input className={styles.input} type="password" required id="password" />
        <div className={styles.div}></div>
        <div className={styles.loginFormChild} />
        <div className={styles.buttonSignIn} id="submit-signin">
          <div className={styles.buttonPrimary}>
            <button className={styles.buttonPrimary1} onClick={handleSubmit}/>
          </div>
          <b className={styles.signIn1}>Sign In</b>
        </div>


        <div className={styles.emailAddress}>Email address</div>
        <div className={styles.email_css}></div>
        <div className={styles.password}>Password</div>
        <div className={styles.forgotPassword}>Forgot password?</div>
        <div className={styles.noAccount_container}>
          <span className={styles.dontHaveAn}>{`Don’t have an account? `}</span>
          <span className={styles.registerHere}>Register here</span>
        </div>
      </form>
      <div className={styles.googleSignIn}>
        <div className={styles.white}>
          <button className={styles.button} onClick={()=>lgin()} id="sign-in-btn" />
        </div>
        <div className={styles.signInWith}>Sign in with Google</div>
        <img className={styles.googleIcon1} alt="" src="/g480.svg" />
      </div>
      <div className={styles.appleSignIn}>
        <div className={styles.white1}>
          <button className={styles.button1} id="sign-in-btn" />
        </div>
        <div className={styles.signInWith1}>Sign in with Apple</div>
        <img className={styles.apple1Icon} alt="" src="/apple500.svg" />
      </div>
      <b className={styles.signIn2}>Sign In</b>
      <div className={styles.signInTo}>Sign in to your account</div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(SignIn), {ssr: false})

