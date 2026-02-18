import './App.css';
import { useToggleButtonState } from './useToggleButtonState';

function App() {
  const {isActive,numberOfToggles, handleClick} = useToggleButtonState();

  return (
    <section>
    <button onClick={handleClick} style={{backgroundColor: isActive? "orange":"#444", color: isActive? "#222" : "#aaa"}}>Toggle me!</button>
    <div>Remain toggles: {numberOfToggles}</div>
    </section>
  )
}

export default App
