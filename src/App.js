import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react'

function App() {

  const [colorStyle, setColorStyle] = useState('')  
  const [colorItem, setColor] = useState('')

  const handleColor = (e) => {
    e.preventDefault();
    // console.log(colorItem);
    setColorStyle(colorItem);
    setColor('')
  }

  return (
    <div className="App">
      <Header />
      <Content
        colorItem={colorItem}
        setColor={setColor}
        colorStyle={colorStyle}
        handleColor={handleColor}
      />
      <Footer 
        colorStyle={colorStyle}
      />
    </div>
  );
}

export default App;
