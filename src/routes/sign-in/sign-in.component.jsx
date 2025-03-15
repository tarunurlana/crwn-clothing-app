import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentWithAuth,
} from "../../utils/firebase/firebase.util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    const userDocRef = createUserDocumentWithAuth(response.user);
  };

  return (
    <div>
      <h1>this is sign in page</h1>
      <button onClick={logGoogleUser}>Login in with Google PopUp</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
