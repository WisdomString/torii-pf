import Canvasviewport from './SET2.js'
import './App.css';
import Riviere from './music/Riviere.mp3'
import { Howl } from 'howler';
function App() {
  var sound = new Howl({
    src: [Riviere],
    loop: true,
    volume: 0.5,
  });

  sound.play();

  return (
    <div className="App">
      <header className="CanvasHolder">
        <Canvasviewport />
      </header>
    </div>
  );
}

export default App;
