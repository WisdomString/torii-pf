import Canvasviewport from './SET2.js'
import './App.css';
import MusicPlay from './MusicPlay.js'

function App() {
  return (<>
    <div className="App">
      <header className="CanvasHolder">
        <MusicPlay />
        <Canvasviewport />
      </header>
    </div>
  </>
  );
}

export default App;
