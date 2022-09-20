import './App.scss';
import { useState } from 'react';
import { bankOne, bankTwo } from './banksStore/banks';
import { useEffect } from 'react';
import { Footer } from './components/footer';
import { DrumPads } from './components/drum-pads';
import { Menu } from './components/menu';

function App() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(true);
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(70);

  function click(btn, id) {
    if (power) {
      if (bank) {
        document.getElementById(btn).currentTime = 0;
        document.getElementById(btn).volume = volume / 100;
        document.getElementById(btn).play();
        setDisplay(id);
      } else {
        document.getElementById(btn).currentTime = 0;
        document.getElementById(btn).volume = volume / 100;
        document.getElementById(btn).play();
        setDisplay(id);
      }
      document.querySelector('.' + btn + '-div').style.background = 'orange';
      document.querySelector('.' + btn + '-div').style.transform = 'translate(0em, 0.2em)';
      setTimeout(() => {
        document.querySelector('.' + btn + '-div').style.background = '#212529';
        document.querySelector('.' + btn + '-div').style.transform = 'none';
      }, 100)
    } else {
      document.querySelector('.' + btn + '-div').style.transform = 'translate(0em, 0.2em)';
      setTimeout(() => {
        document.querySelector('.' + btn + '-div').style.transform = 'none';
      }, 100)
    }
  }

  function key(e) {
    bankOne.map(item => {
      if (item.keyCode === e.keyCode && bank) {
        return click(item.keyTrigger, item.id)
      } else {
        return '';
      }
    })
    bankTwo.map(item => {
      if (item.keyCode === e.keyCode && !bank) {
        return click(item.keyTrigger, item.id)
      } else {
        return '';
      }
    })
  }

  useEffect(() => {
    if (!bank) {
      setDisplay('Smooth Piano Kit');
    } else {
      setDisplay('Heater Kit');
    }
    setTimeout(() => setDisplay(''), 2000)
  }, [power, bank]);

  return (
    <div className="App" tabIndex={0} onKeyDown={key}>
      <div id="drum-machine" className="drum-machine">
        <DrumPads bank={bank} click={click} />
        <Menu power={power} bank={bank}
          volume={volume} display={display}
          setPower={setPower} setBank={setBank}
          setDisplay={setDisplay} setVolume={setVolume} />
      </div>
      <Footer />
    </div >
  );
}

export default App;
