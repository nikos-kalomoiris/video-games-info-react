import { useSelector, useDispatch } from 'react-redux';
import increment from './actions/counter';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
