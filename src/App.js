
import './App.css';
import LandingScreen from './Screens/LandingScreen';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import More from './components/More';
import Projects from './components/Projects';
import SideBar from './components/SideBar';
import { BrowserRouter, Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      {/* <LandingScreen /> */}
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingScreen />}>
              <Route path='' element={<AboutMe />} />
              <Route path='certifications' element={<Certifications />}/>
              <Route path='projects' element={<Projects />}/>
              <Route path='more' element={<More />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
