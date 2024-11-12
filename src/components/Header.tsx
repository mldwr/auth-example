import { A, useNavigate } from "@solidjs/router";
import styles from '../header.module.css';

export default function Header() {
  const navigate = useNavigate();

  const logOut = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('token');
      navigate('/signin', { replace: true });
    }
  };

  return (
    <div class={styles.container}>
      <h3>My SolidJS App</h3>
      <div class={styles.links}>
        <A href="/">Home</A>
        <A href="/pricing">Pricing</A>
      </div>
      <button class={styles.logout_btn} onClick={logOut}>Log out</button>
    </div>
  );
}

