import { useState } from "react";
import Nav from "./Components/Nav";
import Background from "./Components/Background";
import SocMedIcons from "./Components/SocMedIcons";
import Bio from "./Components/Bio";
import Gallary from "./Components/Gallary";
import PopUp from "./Components/PopUp";
import Cast from "./Components/Cast";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popImg, setPopImg] = useState('');

  return (
    <>
      <Background />
      <Nav />
      <SocMedIcons />
      <Bio />
      <Gallary popImg={popImg} setPopImg={setPopImg} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Cast />
    <div className={isOpen ? 'transBack' : null} ></div>
      {isOpen && <PopUp popImg={popImg} setPopImg={setPopImg} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default App;
