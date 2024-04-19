import { useState } from 'react'
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  const [character,setCharacter] = useState({
    name:"default",
    level:1,
    strength:1,
    intellect:1,
    agility:1,
    vitality:1
 });

  return (
    <>
      <Header name={character.name} strength={character.strength} intellect={character.intellect} agility={character.agility} vitality={character.vitality} level={character.level}/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
