import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Achivement from './components/Achivement';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
  return (
    <div className='bg-[#bdc1ff56] mx-auto max-w-[1700px]'>
      <Navbar />
      <section className="h-16 "></section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ProjectDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/achivement" element={<Achivement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
