import { useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import appstyles from "../app.module.css";
import { authorize } from "~/auth";

export default function SignIn() {
  const navigate = useNavigate();
  
  const logIn = async () => {
    console.log('logIn');
    if (typeof window !== 'undefined') {
      const result = await authorize('user@sld.com','12345678');
      console.log('user client', result);
      if (result) {
        sessionStorage.setItem('token', 'mySessionToken');
        navigate('/home', { replace: true });
      }
    }
  };

  createEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('token')) {
      navigate('/home', { replace: true });
    }
  });

  return (
    <div class={appstyles.wrapper}>
      <h2>Sign In Page</h2>
      <p>You can see this because you are not authenticated</p>
      <button onClick={logIn} class={appstyles.login_btn}>Log In</button>
    </div>
  );
}
