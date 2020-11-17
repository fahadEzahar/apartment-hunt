import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Navbar from './components/Home/Header/Navbar/Navbar';
import CreateAnAccount from './components/CreateAnAccount/CreateAnAccount';
import Apartment from './components/Apartment/Apartment';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import BookingListForAdmin from './components/BookingListForAdmin/BookingListForAdmin';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Navbar />
            <Login />
          </Route>
          <Route path='/createAnAccount'>
            <Navbar />
            <CreateAnAccount />
          </Route>
          <Route path='/apartment/:id'>
            <Navbar />
            <Apartment />
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <Route path='/addRentHouse'>
            <AdminDashboard />
          </Route>
          <Route path='/bookingList'>
            <BookingListForAdmin />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>

      </Router>
    </userContext.Provider>
  );
}

export default App;
