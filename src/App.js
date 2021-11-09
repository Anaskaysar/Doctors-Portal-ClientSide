import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AppointMent from './Pages/AppointMent/Appointment/AppointMent';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute exact path="/appointment">
                <AppointMent></AppointMent>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              {/* Dashboard Route */}
              <PrivateRoute path='/dashboard'>
                <Dashboard></Dashboard>
              </PrivateRoute>
              
        </Switch>
      </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;
