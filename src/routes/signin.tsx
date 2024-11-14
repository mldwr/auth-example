import { useNavigate } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import appstyles from "../app.module.css";
import { authorize } from "~/auth";

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');
  
  const logIn = async () => {
    if (typeof window !== 'undefined') {
      const result = await authorize(username(), password());
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
      <input 
        type="email"
        placeholder="Email"
        value={username()}
        onInput={(e) => setUsername(e.currentTarget.value)}
        class={appstyles.input}
      />
      <input 
        type="password"
        placeholder="Password"
        value={password()}
        onInput={(e) => setPassword(e.currentTarget.value)}
        class={appstyles.input}
      />
      <button onClick={logIn} class={appstyles.login_btn}>Log In</button>
    </div>
  );
}
