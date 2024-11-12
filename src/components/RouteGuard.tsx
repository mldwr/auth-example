import type { JSX } from 'solid-js';
import { useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import Header from "./Header";

export default function RouteGuard(props: { children?: JSX.Element }) {
  const navigate = useNavigate();
  const getToken = () => {
    console.log('getToken', sessionStorage.getItem('token'));
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('token');
    }
    return null;
  };

  createEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/signin', { replace: true });
    }
  });

  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
}

