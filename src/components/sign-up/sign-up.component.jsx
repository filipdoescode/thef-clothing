import React, { useState } from "react";
import styles from "./sign-up.styles.module.scss";
import { signUpStart } from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const onFormSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(signUpStart({ displayName, email, password }));
  };

  const displayNameChangeHandler = (event) => {
    setDisplayName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const passwordConfirmChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className={styles["sign-up"]}>
      <h2 className={styles["title"]}>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className={styles["sign-up-form"]} onSubmit={onFormSubmitHandler}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          onChange={displayNameChangeHandler}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email Address"
          onChange={emailChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={passwordChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="confirm password"
          value={confirmPassword}
          label="Confirm password"
          onChange={passwordConfirmChangeHandler}
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
