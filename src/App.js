import './App.css';
import { BrowserRouter as Router,Route , Switch } from "react-router-dom";
import SideBar from './component/SlideBar/SideBar';
import Home from './component/Home/Home'
import Contact from './component/Contact/Contact';
import Skill from './component/Skill/Skill';
import Portafolio from './component/Portafolio/Portafolio';
import ParticlesBg from 'particles-bg';
import About from './component/About/About';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' render={()=> <Home />} />
          <Route exact path='/contact' render={()=> <Contact />} />
          <Route exact path='/skill' render={()=><Skill />} />
          <Route exact path='/proyect' render={()=> <Portafolio />} />
          <Route exact path='/about' render={()=><About />} />
        </Switch>
        <SideBar />
        <ParticlesBg color="#3282b8" num={90} type="cobweb" bg={true} />
      </Router>
    </>
  );
}

export default App;
