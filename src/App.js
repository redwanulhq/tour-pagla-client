import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import ControlAllBooking from './Pages/ControlAllBooking/ControlAllBooking';
import AddPlan from './Pages/AddPlan/AddPlan';
import MyBooking from './Pages/MyBooking/MyBooking';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import ScrollToTop from './ScrollTop/ScrollToTop';
import Booking from './Pages/Booking/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UserProfile from './Pages/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop/>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/control-all-booking">
              <ControlAllBooking></ControlAllBooking>
            </PrivateRoute>
            <PrivateRoute path="/add-plan">
              <AddPlan></AddPlan>
            </PrivateRoute>
            <PrivateRoute path="/my-booking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <UserProfile></UserProfile>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
