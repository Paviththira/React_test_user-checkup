import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Login from './Component/Login';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



function App() {
  const [nameList, setName] = useState('');



  return (
    <div>
      <Container>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/'>Login</Link><br></br></li>
              <li><Link to="/userlist">UserList</Link></li>
              <li><Link to="/userprofile">UserProfile</Link></li>
              {/* <li><Link to="/pagenotfound">PageNotFound</Link></li> */}
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Login} />

          </Switch>
        </BrowserRouter>
      </Container>


    </div>
  );
}

export default App;
