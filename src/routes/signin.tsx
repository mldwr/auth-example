import { useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import appstyles from "../app.module.css";

export default function SignIn() {
  const navigate = useNavigate();
  
  const logIn = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('token', 'mytokenisawesome');
      navigate('/home', { replace: true });
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
