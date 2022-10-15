import './App.css';
import Header from "./components/Header"
import LeftPAge from "./components/LeftPage"
import Nav from './components/Nav';
import RightPage from "./components/RightPage"
function App() {
  return (
    <div className='container'>
      <Nav />
      <Header />
      <div className='row'>
        <LeftPAge />
        <RightPage />
      </div>

    </div>
  );
}

export default App;
