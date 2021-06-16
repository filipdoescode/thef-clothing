import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./sign-in.styles.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));

    setEmail("");
    setPassword("");
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
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
