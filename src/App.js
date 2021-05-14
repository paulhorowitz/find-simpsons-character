
import './App.css';
import Header from './Parts/Header/Header'
import MainSection from './Parts/Main/image'

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
    </div>
  );
}

export default App;
