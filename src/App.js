import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
