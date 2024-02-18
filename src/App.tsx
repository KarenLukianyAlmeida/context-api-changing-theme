import ThemeContext from './context/ThemeContext'
import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';
import { useState } from 'react';
import './App.css'

export default function App() {
  const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('dark');

  function toogleTheme() {
    setPageTheme(pageTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme: pageTheme, toogleTheme}}>
      <div className={`app ${pageTheme}`}>
        <Header />
        <Image /> 
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
