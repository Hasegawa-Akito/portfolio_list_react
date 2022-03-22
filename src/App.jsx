import './App.css';
import React from 'react'
import Footer from './component/Footer';
import Header from './component/Header';
import MainContent from './component/MainContent';
import Subcontent from './component/Subcontent';

class App extends React.Component {
    
  render () {
     return (
      <div className="App">
        <Header />
        <MainContent />
        <Subcontent />
        <Footer />
      </div>
     );
  }
  
}

export default App;
