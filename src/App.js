import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarSection from "./Components/Pages/Home/Headers/Navbar/NavbarSection";
import Footer from "./Components/Pages/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Signup from "./Components/Pages/Signup/Signup";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Signin from "./Components/Pages/Signin/Signin";
import AuthProvider from "./Components/Context/AuthProvider";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <NavbarSection></NavbarSection>
          <Switch>
            <Route path='/about'>{/* <About /> */}</Route>
            <Route path='/signup'>
              <Signup></Signup>
            </Route>
            <Route path='/signin'>
              <Signin></Signin>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </AuthProvider>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
