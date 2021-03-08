
import './App.css';
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Link} from "react-scroll";


function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //   <Navbar/>
    //   <Switch>
    //   <Route component={Home} path='/' exact/>
    //   <Route component={About} path='/about' />
    //   <Route component={Projects} path='/projects' />
    //   </Switch>
    //   </BrowserRouter>
    // </div>
<>
    <Navbar />
    <Home />
    <About/>
    <Projects />
    </>
  );
}

export default App;
