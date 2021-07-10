import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({authService, Imageinput}) {
  return (
    <div className={styles.wrapper}>
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
          <Login authService = {authService}/>
          </Route>
          <Route exact path='/maker/'>
            <Maker authService={authService} Imageinput={Imageinput} />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
    </div>
  ) 
  
}

export default App;
