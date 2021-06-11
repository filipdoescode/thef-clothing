import React, { useState } from "react";
import styles from "./sign-in.styles.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles["sign-in"]}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={formSubmitHandler}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          handleChange={emailChangeHandler}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={passwordChangeHandler}
          required
        />
        <div className={styles.buttons}>
          <CustomButton>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
