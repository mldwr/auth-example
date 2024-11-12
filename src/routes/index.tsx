/* @refresh reload */

import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import '../index.css';
import App from '../app';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

render(() => (
  <Router>
    <App />
  </Router>
), root);

