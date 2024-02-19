import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';
import './App.css'
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <Image /> 
      <Footer />
    </div>
  )
}
