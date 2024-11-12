import { Route, Router } from '@solidjs/router';
import Home from './routes/home';
import SignIn from './routes/signin';
import RouteGuard from './components/RouteGuard';
import Pricing from './routes/pricing';

function App() {
  return (
    <Router>
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={RouteGuard}>
        <Route path="" component={Home} />
        <Route path="home" component={Home} />
        <Route path="pricing" component={Pricing} />
      </Route>
      <Route path="*" component={() => <div>Damn, Page Not found!!!</div>} />
    </Router>
  );
}

export default App;

