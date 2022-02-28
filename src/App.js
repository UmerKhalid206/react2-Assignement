import logo from './logo.svg';

import './App.css';
import NavBar from './components/navbar/index.js';
import MainBody from './components/Cover/index.js';
import OurReputations from './components/reputations/index.js';
import About from './components/aboutus/About.js';
import Services from './components/servic/Services.js';

function App() {
  return (
    <div>
      <NavBar />
      <MainBody/>
      <OurReputations/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
