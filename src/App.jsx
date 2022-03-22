import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import MainContent from './component/MainContent';
import Subcontent from './component/Subcontent';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Subcontent />
      <Footer />
    </div>
  );
}

export default App;
